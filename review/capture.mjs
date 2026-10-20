// capture.mjs — render every screen of the app and write its inventory.
//
// Needs Node 22 or later (for the built-in WebSocket) and Chrome. Nothing to install.
//
//   node capture.mjs --screens screens.txt --out captures
//   node capture.mjs --screens screens.txt --out captures --headed      (log in first, then press Enter)
//   node capture.mjs --screens screens.txt --out captures --skip ".mockup-controls"
//   node capture.mjs --screens screens-head.txt --out captures --headed --start 9   (a second role: numbering continues, INDEX.md is appended)
//
// screens.txt: one screen per line, "name<TAB>url". Lines starting with # are ignored.
// Writes, for each screen: NN-name.png (numbered), NN-name.json (inventory), and captures/INDEX.md.

import { spawn } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, appendFileSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createInterface } from "node:readline";

const args = Object.fromEntries(process.argv.slice(2).map((a, i, all) => a.startsWith("--") ? [a.slice(2), all[i + 1] && !all[i + 1].startsWith("--") ? all[i + 1] : true] : []).filter(Boolean));
const SCREENS = args.screens || "screens.txt";
const OUT = args.out || "captures";
const WIDTH = Number(args.width || 1440);
const SKIP = typeof args.skip === "string" ? args.skip : "";
const HEADED = !!args.headed;
const START = Number(args.start || 1);
const CHROME = args.chrome || process.env.CHROME || [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find(existsSync);
if (!CHROME) { console.error("Chrome not found; pass --chrome <path>"); process.exit(1); }
const PORT = Number(args.port || 9333);
const INVENTORY = readFileSync(new URL("./inventory.js", import.meta.url), "utf8");

const screens = readFileSync(SCREENS, "utf8").split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#")).map((l) => {
  const [name, url] = l.split(/\t+|\s{2,}/); return { name: name.trim(), url: (url || "").trim() };
});
if (!screens.length) { console.error("no screens in " + SCREENS); process.exit(1); }
mkdirSync(OUT, { recursive: true });

const profile = join(tmpdir(), "review-chrome-" + process.pid);
const chrome = spawn(CHROME, [HEADED ? "--new-window" : "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--no-default-browser-check",
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, `--window-size=${WIDTH},900`, "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function ready() { for (let i = 0; i < 100; i++) { try { const r = await fetch(`http://127.0.0.1:${PORT}/json/version`); if (r.ok) return; } catch {} await sleep(200); } throw new Error("Chrome did not start"); }

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.waiting = new Map(); this.events = []; ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && this.waiting.has(d.id)) { this.waiting.get(d.id)(d); this.waiting.delete(d.id); } else if (d.method) this.events.push(d); }; }
  send(method, params = {}) { const id = ++this.id; this.ws.send(JSON.stringify({ id, method, params })); return new Promise((res, rej) => this.waiting.set(id, (d) => d.error ? rej(new Error(method + ": " + d.error.message)) : res(d.result))); }
  async waitEvent(name, ms) { const t0 = Date.now(); while (Date.now() - t0 < ms) { const i = this.events.findIndex((e) => e.method === name); if (i >= 0) return this.events.splice(i, 1)[0]; await sleep(50); } return null; }
}
async function openTab(url) {
  const r = await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
  const t = await r.json(); const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  return { id: t.id, cdp: new CDP(ws), ws };
}

const index = ["# Captures", "", `Width ${WIDTH}. One row per screen; open the PNG and the JSON together.`, "", "| # | Screen | Elements | Groups | Tables | Graphics | Numbers with several homes | Low contrast | Empty right of content |", "|---|---|---|---|---|---|---|---|---|"];
try {
  await ready();
  if (HEADED) {
    const first = await openTab(screens[0].url);
    console.log("Chrome is open. Log in if the app needs it, then press Enter here.");
    await new Promise((r) => createInterface({ input: process.stdin }).once("line", r));
    first.ws.close(); await fetch(`http://127.0.0.1:${PORT}/json/close/${first.id}`);
  }
  for (let i = 0; i < screens.length; i++) {
    const s = screens[i]; const nn = String(START + i).padStart(2, "0"); const base = join(OUT, `${nn}-${s.name.replace(/[^\w.-]+/g, "_")}`);
    const tab = await openTab("about:blank"); const c = tab.cdp;
    await c.send("Page.enable"); await c.send("Runtime.enable");
    await c.send("Emulation.setDeviceMetricsOverride", { width: WIDTH, height: 900, deviceScaleFactor: 1, mobile: false });
    await c.send("Page.navigate", { url: s.url });
    await c.waitEvent("Page.loadEventFired", 15000); await sleep(Number(args.settle || 1500));
    const h = (await c.send("Runtime.evaluate", { expression: "document.documentElement.scrollHeight", returnByValue: true })).result.value;
    await c.send("Emulation.setDeviceMetricsOverride", { width: WIDTH, height: Math.max(h, 900), deviceScaleFactor: 1, mobile: false });
    await sleep(200);
    const inv = await c.send("Runtime.evaluate", { expression: `window.__REVIEW_SKIP=${JSON.stringify(SKIP)};` + INVENTORY, returnByValue: true });
    if (inv.exceptionDetails) throw new Error("inventory failed on " + s.name + ": " + JSON.stringify(inv.exceptionDetails.exception?.description || inv.exceptionDetails.text));
    const data = JSON.parse(inv.result.value); data.screen = s.name;
    writeFileSync(base + ".json", JSON.stringify(data, null, 1));
    const shot = await c.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true, clip: { x: 0, y: 0, width: WIDTH, height: Math.max(h, 900), scale: 1 } });
    writeFileSync(base + ".png", Buffer.from(shot.data, "base64"));
    const m = data.measures;
    index.push(`| ${nn} | ${s.name} | ${m.counts.elements} | ${m.counts.groups} | ${m.counts.tables} | ${m.counts.graphics + m.counts.sparklines} | ${m.numbersWithSeveralHomes.length} | ${m.lowContrast.length} | ${m.emptyRightOfContent} px |`);
    console.log(`${nn} ${s.name}: ${m.counts.elements} elements, ${m.counts.groups} groups, height ${h}`);
    tab.ws.close(); await fetch(`http://127.0.0.1:${PORT}/json/close/${tab.id}`);
  }
  if (START > 1 && existsSync(join(OUT, "INDEX.md"))) appendFileSync(join(OUT, "INDEX.md"), index.slice(6).join("\n") + "\n");
  else writeFileSync(join(OUT, "INDEX.md"), index.join("\n") + "\n");
  console.log("wrote " + join(OUT, "INDEX.md"));
} finally {
  chrome.kill(); await sleep(300); try { rmSync(profile, { recursive: true, force: true }); } catch {}
}
