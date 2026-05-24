// Headless simulation harness for aegean-guide.html.
// Per CLAUDE.md §2: extract inline script, syntax-check it, then drive
// many random playthroughs against a stubbed DOM. Reports exceptions
// and surfaces a basic activity summary so we can see the player
// actually got somewhere, not just looped on the title screen.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const HTML = path.join(ROOT, 'aegean-guide.html');
const TMP_JS = path.join(__dirname, '.core.js');

const html = fs.readFileSync(HTML, 'utf8');
const m = html.match(/<script>([\s\S]*)<\/script>/);
if (!m) { console.error('No <script> block found in', HTML); process.exit(1); }
const rawSrc = m[1];

// Patch the source so we can load it from the harness scope:
//   - drop the bottom-of-file boot() autoplay (we drive manually)
//   - promote `let S, gCounter=0;` to `var` so they end up on the
//     module scope and the harness can read S.* directly.
const src = rawSrc
  .replace(/\bboot\(\);\s*$/m, '')
  .replace('let S, gCounter=0;', 'var S; var gCounter=0;');

fs.writeFileSync(TMP_JS, src);

// 1) Hard syntax check — must pass before we even try to run it.
try {
  execSync(`node --check "${TMP_JS}"`, { stdio: 'pipe' });
  console.log('node --check: OK');
} catch (e) {
  console.error('node --check FAILED:');
  console.error(e.stderr?.toString() || e.message);
  process.exit(2);
}

// 2) Stub the DOM well enough for the game to render into.
function fakeEl() {
  const el = {
    innerHTML: '',
    textContent: '',
    value: '',
    style: {},
    offsetWidth: 320,
    children: [],
    _classes: new Set(),
    classList: null,
  };
  el.classList = {
    add: (...xs) => xs.forEach(x => el._classes.add(x)),
    remove: (...xs) => xs.forEach(x => el._classes.delete(x)),
    toggle: (x) => el._classes.has(x) ? (el._classes.delete(x), false) : (el._classes.add(x), true),
    contains: (x) => el._classes.has(x),
  };
  return el;
}
const els = {};
globalThis.document = {
  getElementById: id => els[id] || (els[id] = fakeEl()),
};
globalThis.window = {
  storage: (() => {
    const store = new Map();
    return {
      async get(k) {
        if (!store.has(k)) throw new Error('no such key: ' + k);
        return { value: store.get(k) };
      },
      async set(k, v) { store.set(k, v); },
      async delete(k) { store.delete(k); },
    };
  })(),
};
globalThis.setTimeout = () => {};
globalThis.clearTimeout = () => {};

// 3) Load the patched source into this scope so every top-level
//    `function foo(){}` and `var X` becomes reachable on globalThis.
(0, eval)(src);

// 4) Drive a playthrough. Bias toward progression so games finish.
const PROGRESS_VERBS = ['runDay', 'processNext', 'setOff', 'resolveMeet',
  'resolveP', 'resolveRadio', 'startTrailhead', 'finishPlayerTrip',
  'afterPlayerTrip', 'advanceDay', 'nextDay', 'doContinue'];

function pickHandler() {
  const html = els.scene?.innerHTML || '';
  const re = /onclick="([^"]+)"/g;
  const out = [];
  let mm;
  while ((mm = re.exec(html))) out.push(mm[1]);
  if (!out.length) return null;
  // Prefer a progression-shaped click if any are available.
  const prog = out.filter(s => PROGRESS_VERBS.some(v => s.includes(v)));
  const pool = prog.length && Math.random() < 0.75 ? prog : out;
  return pool[Math.floor(Math.random() * pool.length)];
}

const BG_IDS = ['medic', 'charmer', 'outfitter', 'navigator'];
const KITS = [['water'], ['water', 'snacks'], ['water', 'firstaid', 'map']];

function runOne(maxSteps = 600) {
  const events = { steps: 0, exceptions: [], reachedP2: false, ended: false };
  const bg = BG_IDS[Math.floor(Math.random() * BG_IDS.length)];
  const kit = KITS[Math.floor(Math.random() * KITS.length)];
  try {
    globalThis.initGame('Test_' + Math.floor(Math.random() * 1000), bg, kit.slice());
  } catch (e) {
    events.exceptions.push({ where: 'initGame', msg: e.message, stack: e.stack });
    return events;
  }
  for (let i = 0; i < maxSteps; i++) {
    events.steps++;
    if (globalThis.S?.phase === 2 && !events.reachedP2) events.reachedP2 = true;
    const h = pickHandler();
    if (!h) break;
    try {
      (0, eval)(h);
    } catch (e) {
      events.exceptions.push({ where: 'click', click: h, msg: e.message, stack: e.stack });
    }
    // Detect end-of-game screens (title or game-over)
    const scene = els.scene?.innerHTML || '';
    if (/Begin a season|Play again|Try another season/.test(scene) && i > 5) {
      events.ended = true;
      break;
    }
  }
  return events;
}

const N = parseInt(process.argv[2] || '300', 10);
console.log(`Running ${N} random playthroughs…\n`);
const summary = { runs: 0, exceptions: 0, reachedP2: 0, ended: 0, totalSteps: 0 };
const exceptionSamples = new Map(); // dedupe by first line of stack
const startedAt = Date.now();

for (let i = 0; i < N; i++) {
  const r = runOne();
  summary.runs++;
  summary.totalSteps += r.steps;
  if (r.reachedP2) summary.reachedP2++;
  if (r.ended) summary.ended++;
  for (const ex of r.exceptions) {
    summary.exceptions++;
    const key = (ex.stack || ex.msg || '').split('\n').slice(0, 2).join(' | ');
    if (!exceptionSamples.has(key)) {
      exceptionSamples.set(key, { count: 0, sample: ex });
    }
    exceptionSamples.get(key).count++;
  }
}

const dur = ((Date.now() - startedAt) / 1000).toFixed(1);
console.log(`Done in ${dur}s.`);
console.log(`  Runs:            ${summary.runs}`);
console.log(`  Avg steps/run:   ${(summary.totalSteps / summary.runs).toFixed(1)}`);
console.log(`  Reached Phase 2: ${summary.reachedP2} (${(100 * summary.reachedP2 / summary.runs).toFixed(0)}%)`);
console.log(`  Game ended:      ${summary.ended} (${(100 * summary.ended / summary.runs).toFixed(0)}%)`);
console.log(`  Exceptions:      ${summary.exceptions}`);
if (summary.exceptions > 0) {
  console.log('\nException samples (deduped by stack):');
  for (const [key, info] of [...exceptionSamples.entries()].sort((a, b) => b[1].count - a[1].count)) {
    console.log(`\n  [${info.count}×] ${info.sample.msg}`);
    if (info.sample.click) console.log(`        click: ${info.sample.click}`);
    if (info.sample.stack) {
      const lines = info.sample.stack.split('\n').slice(1, 4).map(l => '        ' + l.trim());
      console.log(lines.join('\n'));
    }
  }
  process.exitCode = 1;
}
