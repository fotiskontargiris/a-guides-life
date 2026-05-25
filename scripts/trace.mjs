// Single-game trace — runs one playthrough and prints final state.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const HTML = path.join(ROOT, 'index.html');

const html = fs.readFileSync(HTML, 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');

function fakeEl() {
  const el = { innerHTML: '', textContent: '', value: '', style: {}, offsetWidth: 320, children: [], _classes: new Set(), classList: null };
  el.classList = { add: (...x) => x.forEach(c => el._classes.add(c)), remove: (...x) => x.forEach(c => el._classes.delete(c)), toggle: c => el._classes.has(c) ? (el._classes.delete(c), false) : (el._classes.add(c), true), contains: c => el._classes.has(c) };
  return el;
}
const els = {};
globalThis.document = { getElementById: id => els[id] || (els[id] = fakeEl()) };
globalThis.window = { storage: { async get(k) { throw new Error('no'); }, async set() {}, async delete() {} } };
globalThis.setTimeout = () => {};
(0, eval)(src);

function pickHandler() {
  const re = /onclick="([^"]+)"/g;
  const out = []; let m;
  while ((m = re.exec(els.scene?.innerHTML || ''))) out.push(m[1]);
  return out.length ? out[Math.floor(Math.random() * out.length)] : null;
}

globalThis.initGame('Trace', 'medic', ['water']);
let lastClicks = [];
for (let i = 0; i < 600; i++) {
  const h = pickHandler();
  if (!h) { console.log(`STOPPED at step ${i} — no clickable handlers`); break; }
  lastClicks.push(h);
  if (lastClicks.length > 10) lastClicks.shift();
  try { (0, eval)(h); } catch (e) { console.log(`EXCEPTION at step ${i} on ${h}: ${e.message}`); break; }
  const scene = els.scene?.innerHTML || '';
  if (/Begin a season|Play again|Try another season/.test(scene) && i > 5) {
    console.log(`GAME ENDED at step ${i}`);
    break;
  }
}
console.log('\n--- Final state ---');
console.log(`phase=${globalThis.S?.phase} year=${globalThis.S?.year} seasonDay=${globalThis.S?.seasonDay} season=${globalThis.S?.season}`);
console.log(`cash=${globalThis.S?.cash} rep=${globalThis.S?.rep} energy=${globalThis.S?.energy}`);
console.log(`guides=${globalThis.S?.guides?.length}  history.length=${globalThis.S?.history?.length}`);
console.log('\n--- Last 10 clicks ---');
console.log(lastClicks.join('\n'));
console.log('\n--- Final scene title (first 400 chars) ---');
const titleMatch = (els.scene?.innerHTML || '').match(/<h2>([\s\S]*?)<\/h2>/);
console.log(titleMatch ? titleMatch[1].slice(0, 400) : '(no h2 found)');
console.log('\n--- Final scene snippet (first 300 chars after first h2) ---');
const snip = (els.scene?.innerHTML || '').replace(/\s+/g, ' ').slice(0, 600);
console.log(snip);
