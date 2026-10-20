// inventory.js — the element inventory of one rendered screen.
//
// Runs inside the page. Numbers every visible element that a reviewer could
// point at (text, control, graphic, table, group), draws the number on the
// page, and returns the list with measurements the lenses ask for.
//
// Two ways to run it:
//   1. capture.mjs injects it (headless Chrome, no dependencies).
//   2. Paste the whole file into the DevTools console on any screen, press
//      Enter, then DevTools > Ctrl+Shift+P > "Capture full size screenshot".
//      The JSON is copied to the clipboard; paste it into captures/NN-name.json.
//
// Set window.__REVIEW_SKIP to a CSS selector before running to ignore parts
// of the page that are not the product (a mockup control bar, a dev toolbar).

(function () {
  const SKIP = window.__REVIEW_SKIP || "";
  const MIN_SIZE = 4;
  const out = { title: document.title, url: location.href, viewport: { w: innerWidth, h: innerHeight },
                page: { w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight },
                elements: [], groups: [], measures: {} };
  const skipSet = new Set(SKIP ? Array.from(document.querySelectorAll(SKIP)) : []);

  // ---------- helpers ----------
  const cs = (el) => getComputedStyle(el);
  const box = (el) => { const r = el.getBoundingClientRect(); return { x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) }; };
  function visible(el) {
    const s = cs(el); if (s.display === "none" || s.visibility === "hidden" || parseFloat(s.opacity) === 0) return false;
    const b = box(el); return b.w >= MIN_SIZE && b.h >= MIN_SIZE;
  }
  function parseColor(c) {
    const m = /rgba?\(([^)]+)\)/.exec(c || ""); if (!m) return null;
    const p = m[1].split(",").map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }
  function lum(c) { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); }
  function contrast(a, b) { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); }
  function bgOf(el) {
    for (let e = el; e; e = e.parentElement) { const c = parseColor(cs(e).backgroundColor); if (c && c.a > 0.1) return c; }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  const hex = (c) => "#" + [c.r, c.g, c.b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
  function ownText(el) {
    let t = ""; for (const n of el.childNodes) if (n.nodeType === 3) t += n.textContent;
    return t.replace(/\s+/g, " ").trim();
  }
  const INTERACTIVE = "a[href],button,input,select,textarea,[role=button],[role=link],[role=tab],[tabindex],[onclick]";
  const isInteractive = (el) => el.matches(INTERACTIVE) || cs(el).cursor === "pointer";
  function roleOf(el) {
    const t = el.tagName.toLowerCase();
    if (/^h[1-6]$/.test(t)) return "heading";
    if (t === "table") return "table";
    if (t === "svg" || t === "canvas" || t === "img") return "graphic";
    if (el.matches("input,select,textarea")) return "input";
    if (el.matches("a[href],button,[role=button],[role=link],[role=tab]")) return "control";
    if (t === "label" || t === "th") return "label";
    return "text";
  }

  // ---------- walk ----------
  let n = 0;
  const leaves = []; // elements that got a number
  function take(el, role, extra) {
    const b = box(el); const s = cs(el);
    const fg = parseColor(s.color) || { r: 0, g: 0, b: 0, a: 1 }, bg = bgOf(el);
    const e = Object.assign({ id: ++n, role, tag: el.tagName.toLowerCase(), box: b,
      font: { size: Math.round(parseFloat(s.fontSize)), weight: s.fontWeight, family: s.fontFamily.split(",")[0].replace(/"/g, "") },
      color: hex(fg), bg: hex(bg), contrast: Math.round(contrast(fg, bg) * 10) / 10,
      interactive: isInteractive(el), cursor: s.cursor, align: s.textAlign }, extra || {});
    el.setAttribute("data-review-id", String(n));
    leaves.push({ el, e }); out.elements.push(e); return e;
  }
  function walk(el, insideText) {
    if (skipSet.has(el) || !visible(el)) return;
    const t = el.tagName.toLowerCase();
    if (t === "script" || t === "style" || t === "noscript") return;
    if (t === "table") {
      const own = (x) => x.closest("table") === el;
      const ths = Array.from(el.querySelectorAll("th")).filter((x) => own(x) && visible(x));
      const heads = ths.map((th) => th.textContent.replace(/\s+/g, " ").trim());
      const trs = Array.from(el.querySelectorAll("tr")).filter((x) => own(x) && visible(x));
      const spanRows = trs.filter((r) => r.children.length === 1 && r.children[0].hasAttribute("colspan"));
      const dataRows = trs.filter((r) => !spanRows.includes(r) && !r.querySelector("th"));
      const sample = dataRows[0] ? Array.from(dataRows[0].children).map((c) => c.textContent.replace(/\s+/g, " ").trim().slice(0, 40)) : [];
      const cols = ths.map((th) => ({ header: th.textContent.replace(/\s+/g, " ").trim(), width: Math.round(th.getBoundingClientRect().width), align: cs(th).textAlign }));
      take(el, "table", { text: heads.join(" | "), columns: cols, rows: dataRows.length, sampleRow: sample, bars: Array.from(el.querySelectorAll("[class*=bar],[class*=util],meter,progress")).filter(own).length });
      for (const r of spanRows) for (const c of r.children[0].children) walk(c, false);   // an unfolded row is content, not data
      return;
    }
    if (t === "svg" || t === "canvas" || t === "img") {
      const b = box(el); const texts = t === "svg" ? Array.from(el.querySelectorAll("text")).map((x) => x.textContent.trim()).filter(Boolean) : [];
      const fills = t === "svg" ? new Set(Array.from(el.querySelectorAll("rect,path,circle,line,polyline")).map((x) => cs(x).fill + "/" + cs(x).stroke)) : new Set();
      take(el, b.h < 40 ? "sparkline" : "graphic", { text: texts.join(" ").slice(0, 160), labels: texts.length, marks: t === "svg" ? el.querySelectorAll("rect,path,circle,line,polyline").length : null, paints: fills.size, alt: el.getAttribute("alt") || el.getAttribute("aria-label") || "" });
      return;
    }
    const own = ownText(el);
    const inline = cs(el).display.startsWith("inline");
    if (own && !(insideText && inline && !isInteractive(el))) {
      const allInline = Array.from(el.children).every((c) => cs(c).display.startsWith("inline"));
      const text = allInline ? el.textContent.replace(/\s+/g, " ").trim() : own;
      take(el, roleOf(el), { text: text.slice(0, 160), chars: text.length, overflow: el.scrollWidth > el.clientWidth + 1 && cs(el).overflow !== "visible" });
      for (const c of el.children) walk(c, true);
      return;
    }
    if (el.children.length === 0) {
      const s = cs(el); const b = box(el); const bgc = parseColor(s.backgroundColor);
      const painted = (bgc && bgc.a > 0.1) || parseFloat(s.borderTopWidth) > 0 || s.backgroundImage !== "none";
      if (isInteractive(el) || (painted && Math.max(b.w, b.h) >= 8)) take(el, isInteractive(el) && !painted ? roleOf(el) : "shape", { text: el.getAttribute("aria-label") || el.getAttribute("title") || "", chars: 0 });
      return;
    }
    for (const c of el.children) walk(c, insideText && inline);
  }
  walk(document.body, false);

  // ---------- groups: bordered or tinted boxes holding two or more elements ----------
  let g = 0;
  for (const el of document.body.querySelectorAll("*")) {
    if (skipSet.has(el) || !visible(el) || el.closest("table,svg")) continue;
    const s = cs(el); const b = box(el);
    const bordered = parseFloat(s.borderTopWidth) > 0 || parseFloat(s.borderLeftWidth) > 0;
    const parentBg = el.parentElement ? bgOf(el.parentElement) : null; const ownBg = parseColor(s.backgroundColor);
    const tinted = ownBg && ownBg.a > 0.1 && parentBg && hex(ownBg) !== hex(parentBg);
    if (!(bordered || tinted) || b.w * b.h < 8000) continue;
    const members = Array.from(el.querySelectorAll("[data-review-id]")).map((x) => Number(x.getAttribute("data-review-id")));
    if (members.length < 2) continue;
    out.groups.push({ gid: "G" + (++g), box: b, members, bordered, tinted, bg: ownBg && ownBg.a > 0.1 ? hex(ownBg) : null, radius: s.borderTopLeftRadius });
    el.setAttribute("data-review-group", "G" + g);
  }

  // ---------- measures the lenses ask for ----------
  const m = out.measures;
  const numbers = {};
  for (const e of out.elements) {
    if (!e.text) continue;
    for (const tok of e.text.match(/[$£€]?\d[\d,]*(?:\.\d+)?%?/g) || []) {
      if (tok.replace(/\D/g, "").length < 2 && !/[$£€%]/.test(tok)) continue;
      (numbers[tok] = numbers[tok] || []).push(e.id);
    }
  }
  m.numbersWithSeveralHomes = Object.entries(numbers).filter(([, ids]) => new Set(ids).size > 1).map(([k, ids]) => ({ number: k, homes: Array.from(new Set(ids)) })).sort((a, b) => b.homes.length - a.homes.length);
  const fonts = {}; for (const e of out.elements) { const k = e.font.size + "/" + e.font.weight; fonts[k] = (fonts[k] || 0) + 1; }
  m.typeStyles = Object.entries(fonts).sort((a, b) => b[1] - a[1]).map(([k, c]) => ({ sizeWeight: k, count: c }));
  const colors = {}; for (const e of out.elements) if (e.text) colors[e.color] = (colors[e.color] || 0) + 1;
  m.textColours = Object.entries(colors).sort((a, b) => b[1] - a[1]).map(([k, c]) => ({ colour: k, count: c }));
  const needs = (e) => (e.font.size >= 24 || (e.font.size >= 19 && Number(e.font.weight) >= 700)) ? 3 : 4.5;
  m.lowContrast = out.elements.filter((e) => e.text && e.contrast < needs(e)).map((e) => ({ id: e.id, text: e.text.slice(0, 40), contrast: e.contrast, needed: needs(e), size: e.font.size }));
  m.smallText = out.elements.filter((e) => e.text && e.font.size < 11).map((e) => ({ id: e.id, text: e.text.slice(0, 40), size: e.font.size }));
  m.overflow = out.elements.filter((e) => e.overflow).map((e) => e.id);
  const lefts = {}; for (const e of out.elements) { const k = Math.round(e.box.x / 2) * 2; lefts[k] = (lefts[k] || 0) + 1; }
  m.distinctLeftEdges = Object.keys(lefts).length;
  const overlaps = [];
  for (let i = 0; i < out.elements.length; i++) for (let j = i + 1; j < out.elements.length; j++) {
    const a = out.elements[i].box, b = out.elements[j].box;
    const ix = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x), iy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
    const nested = (a.x <= b.x && a.y <= b.y && a.x + a.w >= b.x + b.w && a.y + a.h >= b.y + b.h) || (b.x <= a.x && b.y <= a.y && b.x + b.w >= a.x + a.w && b.y + b.h >= a.y + a.h);
    if (ix > 4 && iy > 4 && !nested) overlaps.push([out.elements[i].id, out.elements[j].id]);
  }
  m.overlaps = overlaps;
  let right = 0, bottom = 0, area = 0;
  for (const e of out.elements) { right = Math.max(right, e.box.x + e.box.w); bottom = Math.max(bottom, e.box.y + e.box.h); area += e.box.w * e.box.h; }
  m.contentRightEdge = right; m.contentBottomEdge = bottom;
  m.emptyRightOfContent = out.page.w - right;
  m.inkShare = Math.round(100 * area / (out.page.w * Math.max(bottom, 1)));
  m.counts = { elements: out.elements.length, text: out.elements.filter((e) => e.role === "text").length, headings: out.elements.filter((e) => e.role === "heading").length,
               controls: out.elements.filter((e) => e.role === "control" || e.role === "input").length, graphics: out.elements.filter((e) => e.role === "graphic").length,
               sparklines: out.elements.filter((e) => e.role === "sparkline").length, shapes: out.elements.filter((e) => e.role === "shape").length, tables: out.elements.filter((e) => e.role === "table").length, groups: out.groups.length };

  // ---------- draw the numbers ----------
  const old = document.getElementById("__review_overlay"); if (old) old.remove();
  const ov = document.createElement("div"); ov.id = "__review_overlay";
  ov.style.cssText = "position:absolute;left:0;top:0;width:0;height:0;z-index:2147483647;pointer-events:none;font:700 10px/1 Arial,sans-serif";
  for (const e of out.elements) {
    const o = document.createElement("div");
    o.style.cssText = `position:absolute;left:${e.box.x}px;top:${e.box.y}px;width:${e.box.w}px;height:${e.box.h}px;outline:1px solid rgba(220,38,38,.55);box-sizing:border-box`;
    const l = document.createElement("div");
    l.textContent = e.id;
    l.style.cssText = "position:absolute;left:-1px;top:-11px;background:#dc2626;color:#fff;padding:1px 3px;border-radius:2px";
    o.appendChild(l); ov.appendChild(o);
  }
  for (const gr of out.groups) {
    const o = document.createElement("div");
    o.style.cssText = `position:absolute;left:${gr.box.x}px;top:${gr.box.y}px;width:${gr.box.w}px;height:${gr.box.h}px;outline:2px dashed rgba(54,96,146,.7);box-sizing:border-box`;
    const l = document.createElement("div"); l.textContent = gr.gid;
    l.style.cssText = "position:absolute;right:-1px;top:-12px;background:#366092;color:#fff;padding:1px 4px;border-radius:2px";
    o.appendChild(l); ov.appendChild(o);
  }
  document.body.appendChild(ov);

  const json = JSON.stringify(out);
  if (typeof copy === "function") { try { copy(json); console.log("inventory copied to the clipboard: " + out.elements.length + " elements, " + out.groups.length + " groups"); } catch (e) {} }
  window.__REVIEW_INVENTORY = out;
  return json;
})();
