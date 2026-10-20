"""merge.py - merge the reviewers' findings into one ranked list, and score a calibration run.

  python merge.py findings                       -> findings/REPORT-findings.md
  python merge.py calibration/findings --key calibration/key.json --capture calibration/captures/01-team-spend.json
                                                 -> prints found / missed / false alarms and exits 0 on pass, 1 on fail

Reads every *.md under the folder whose name starts with a lens number (1-purpose-03.md, 7-set.md).
Each file holds the contract's table: | Screen | Element | Verdict | Severity | Claim | Evidence | Instead |.
"""
import io, json, os, re, sys
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")   # Windows consoles default to cp1252
from collections import defaultdict

SEV = {"blocks": 0, "weakens": 1, "polish": 2}
VERDICTS = {"KEEP", "CUT", "MERGE", "MOVE", "FIX", "ASK"}


def read_findings(folder):
    rows = []
    for name in sorted(os.listdir(folder)):
        m = re.match(r"(\d)-", name)
        if not m or not name.endswith(".md") or name.startswith("REPORT"):
            continue
        lens = m.group(1)
        for line in io.open(os.path.join(folder, name), encoding="utf-8"):
            if not line.startswith("|"):
                continue
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if len(cells) < 7 or cells[2].upper() not in VERDICTS:
                continue
            screen, element, verdict, severity, claim, evidence, instead = cells[:7]
            for s in re.split(r"[,\s]+", screen):
                s = s.strip()
                if not s:
                    continue
                rows.append(dict(lens=lens, file=name, screen=s.zfill(2) if s.isdigit() else s, element=element.upper(),
                                 verdict=verdict.upper(), severity=severity.lower().strip("–- "), claim=claim, evidence=evidence, instead=instead))
    return rows


def rank(rows):
    by = defaultdict(list)
    for r in rows:
        by[(r["screen"], r["element"])].append(r)
    out = []
    for (screen, element), rs in by.items():
        faults = [r for r in rs if r["verdict"] not in ("KEEP",)]
        lenses = sorted({r["lens"] for r in faults})
        worst = min((SEV.get(r["severity"], 3) for r in faults), default=3)
        out.append(dict(screen=screen, element=element, rows=rs, faults=faults, lenses=lenses, worst=worst))
    out.sort(key=lambda x: (x["screen"], x["worst"], -len(x["lenses"]), elkey(x["element"])))
    return out


def elkey(e):
    m = re.match(r"G?(\d+)", e)
    return int(m.group(1)) if m else 10 ** 6


def write_report(folder, rows, ranked):
    L = ["# Merged findings", "", "One row per element that any reviewer did not mark KEEP, worst first, then by how many lenses agree. "
         "Agreement across lenses is the strongest signal; a single lens with 'blocks' is the next.", ""]
    verdicts = defaultdict(int)
    for r in rows:
        verdicts[r["verdict"]] += 1
    L += ["| Verdict | Rows |", "|---|---|"] + [f"| {k} | {verdicts[k]} |" for k in ("CUT", "MERGE", "MOVE", "FIX", "ASK", "KEEP")] + [""]
    screens = sorted({x["screen"] for x in ranked})
    for s in screens:
        items = [x for x in ranked if x["screen"] == s]
        faults = [x for x in items if x["faults"]]
        kept = [x["element"] for x in items if not x["faults"]]
        L += [f"## Screen {s}", "", f"Elements with a finding: {len(faults)} · marked KEEP by every lens that saw them: {len(kept)}", ""]
        L += ["| Element | Worst | Lenses | Verdicts | Claims | Instead |", "|---|---|---|---|---|---|"]
        for x in faults:
            sev = {0: "blocks", 1: "weakens", 2: "polish"}.get(x["worst"], "–")
            vs = ", ".join(f"{r['lens']}:{r['verdict']}" for r in x["faults"])
            claims = " / ".join(f"[{r['lens']}] {r['claim']}" for r in x["faults"])
            inst = " / ".join(r["instead"] for r in x["faults"] if r["instead"] and r["instead"] != "–")
            L.append(f"| {x['element']} | {sev} | {len(x['lenses'])} | {vs} | {claims} | {inst} |")
        L += ["", "Kept by every lens: " + (", ".join(sorted(kept, key=elkey)) or "none"), ""]
    asks = [r for r in rows if r["verdict"] == "ASK"]
    if asks:
        L += ["## Questions for the owner", ""] + [f"- Screen {r['screen']}, element {r['element']} (lens {r['lens']}): {r['claim']}" for r in asks] + [""]
    p = os.path.join(folder, "REPORT-findings.md")
    io.open(p, "w", encoding="utf-8").write("\n".join(L))
    print("wrote", p, "-", len(rows), "rows from", len({r['file'] for r in rows}), "files")


def resolve(spec, capture):
    """A key entry names elements by what they are, not by number, so the numbering may differ between machines.
    spec: list of {"text": substring} | {"text_is": exact} | {"role": r, "w": width} | {"gid": "G3"} | plain element numbers."""
    ids = set()
    for s in spec:
        if isinstance(s, (int, str)) and not isinstance(s, dict):
            ids.add(str(s).upper()); continue
        if "gid" in s:
            ids.add(s["gid"].upper()); continue
        for e in capture["elements"]:
            if "text" in s and s["text"].lower() not in (e.get("text") or "").lower(): continue
            if "text_is" in s and s["text_is"].lower() != (e.get("text") or "").strip().lower(): continue
            if "role" in s and e["role"] != s["role"]: continue
            if "w" in s and abs(e["box"]["w"] - s["w"]) > 2: continue
            if "h" in s and abs(e["box"]["h"] - s["h"]) > 2: continue
            ids.add(str(e["id"]))
        if "members_of_text" in s:   # the group that contains an element with this text
            for e in capture["elements"]:
                if s["members_of_text"].lower() in (e.get("text") or "").lower():
                    for g in capture["groups"]:
                        if e["id"] in g["members"]: ids.add(g["gid"].upper()); ids.update(str(m) for m in g["members"])
    return ids


def score(rows, key, capture):
    """key.json: {"faults": [{"id": "F1", "what": "...", "elements": [spec...], "lenses": ["1","2"], "claim_any": ["word", ...]}],
                 "decoys": [{"id": "D1", "what": "...", "elements": [spec...]}], "pass": {"found_at_least": 11, "false_alarms_at_most": 1}}
    A fault is found when any lens gives one of its elements a verdict other than KEEP or ASK (and, if claim_any is set,
    the claim mentions one of those words). A decoy is a false alarm when any lens gives it CUT, MERGE, FIX or MOVE at blocks or weakens."""
    hit = lambda r, els: r["element"] in {str(e).upper() for e in els}
    def about(r, f):
        words = f.get("claim_any")
        if not words: return True
        blob = (r["claim"] + " " + r["evidence"] + " " + r["instead"]).lower()
        return any(w.lower() in blob for w in words)
    found, missed = [], []
    for f in key["faults"]:
        rs = [r for r in rows if hit(r, f["elements"]) and r["verdict"] not in ("KEEP", "ASK") and about(r, f)]
        (found if rs else missed).append((f, sorted({r["lens"] for r in rs})))
    alarms = []
    for d in key["decoys"]:
        rs = [r for r in rows if hit(r, d["elements"]) and r["verdict"] in ("CUT", "MERGE", "FIX", "MOVE") and r["severity"] in ("blocks", "weakens")]
        if rs:
            alarms.append((d, rs))
    print(f"Calibration: {len(found)} of {len(key['faults'])} planted faults found; {len(alarms)} false alarms on {len(key['decoys'])} decoys.")
    for f, ls in found:
        print(f"  found   {f['id']} by lens {','.join(ls)}: {f['what']}")
    for f, _ in missed:
        print(f"  MISSED  {f['id']} (expected from lens {','.join(f['lenses'])}): {f['what']}")
    for d, rs in alarms:
        print(f"  ALARM   {d['id']}: {d['what']} -> " + "; ".join(f"lens {r['lens']} {r['verdict']} ({r['severity']}): {r['claim']}" for r in rs))
    ok = len(found) >= key["pass"]["found_at_least"] and len(alarms) <= key["pass"]["false_alarms_at_most"]
    print("PASS" if ok else "FAIL", f"(needs at least {key['pass']['found_at_least']} found and at most {key['pass']['false_alarms_at_most']} false alarms)")
    return ok


if __name__ == "__main__":
    folder = sys.argv[1] if len(sys.argv) > 1 else "findings"
    rows = read_findings(folder)
    if not rows:
        print("no findings tables found in", folder); sys.exit(2)
    ranked = rank(rows)
    write_report(folder, rows, ranked)
    if "--key" in sys.argv:
        key = json.load(io.open(sys.argv[sys.argv.index("--key") + 1], encoding="utf-8"))
        capture = json.load(io.open(sys.argv[sys.argv.index("--capture") + 1], encoding="utf-8"))
        for f in key["faults"] + key["decoys"]:
            f["elements"] = sorted(resolve(f["elements"], capture), key=elkey)
            if not f["elements"]: print("key entry", f["id"], "matches no element in the capture; fix the key")
        sys.exit(0 if score(rows, key, capture) else 1)
