// Headless simulation harness for index.html.
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
const HTML = path.join(ROOT, 'index.html');
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

// 4) Drive a playthrough. Bias toward progression AND toward the
//    "primary" recommended option so we approximate a cautious player.
const PROGRESS_VERBS = ['runDay', 'processNext', 'setOff', 'resolveMeet',
  'resolveP', 'resolveRadio', 'startTrailhead', 'finishPlayerTrip',
  'afterPlayerTrip', 'advanceDay', 'nextDay', 'doContinue',
  'enterSpring', 'enrollCertSchool', 'enrollInfra'];

function pickHandler() {
  const html = els.scene?.innerHTML || '';
  const re = /<(?:button|div)\s+[^>]*?class="([^"]*?)"[^>]*?onclick="([^"]+)"/g;
  const buttons = []; let mm;
  while ((mm = re.exec(html))) buttons.push({ cls: mm[1], onc: mm[2] });
  const re2 = /onclick="([^"]+)"/g;
  while ((mm = re2.exec(html))) {
    if (!buttons.some(b => b.onc === mm[1])) buttons.push({ cls: '', onc: mm[1] });
  }
  if (!buttons.length) return null;
  const primaries = buttons.filter(b => /\bprimary\b/.test(b.cls));
  const prog = buttons.filter(b => PROGRESS_VERBS.some(v => b.onc.includes(v)));
  let pool;
  if (primaries.length && Math.random() < 0.55) pool = primaries;
  else if (prog.length && Math.random() < 0.75) pool = prog;
  else pool = buttons;
  return pool[Math.floor(Math.random() * pool.length)].onc;
}

const BG_IDS = ['medic', 'charmer', 'outfitter', 'navigator',
  'shepherd', 'captain', 'goatherd', 'animator', 'chef', 'busker'];
const KITS = [['water'], ['water', 'snacks'], ['water', 'firstaid', 'map']];

function runOne(maxSteps = 600) {
  const events = { steps: 0, exceptions: [], reachedP2: false, reachedY2: false, reachedWinter: false, ended: false, endKind: null };
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
    const S = globalThis.S;
    if (S?.phase === 2 && !events.reachedP2) events.reachedP2 = true;
    if (S?.year >= 2 && !events.reachedY2) events.reachedY2 = true;
    if (S?.season === 'winter' && !events.reachedWinter) events.reachedWinter = true;
    const h = pickHandler();
    if (!h) break;
    try {
      (0, eval)(h);
    } catch (e) {
      events.exceptions.push({ where: 'click', click: h, msg: e.message, stack: e.stack });
    }
    const scene = els.scene?.innerHTML || '';
    if (i > 5) {
      if (/Bankrupt/.test(scene)) { events.ended = true; events.endKind = 'bankrupt'; break; }
      if (/A ruined name/.test(scene)) { events.ended = true; events.endKind = 'ruined'; break; }
      if (/Phase II complete/.test(scene)) { events.ended = true; events.endKind = 'won'; break; }
      if (/Begin a season|Play again|Try another season/.test(scene)) { events.ended = true; events.endKind = events.endKind || 'unknown'; break; }
    }
  }
  return events;
}

const N = parseInt(process.argv[2] || '300', 10);
console.log(`Running ${N} random playthroughs…\n`);
const summary = { runs: 0, exceptions: 0, reachedP2: 0, reachedY2: 0, reachedWinter: 0, ended: 0, totalSteps: 0, ends: { bankrupt: 0, ruined: 0, won: 0, unknown: 0 } };
const exceptionSamples = new Map(); // dedupe by first line of stack
const startedAt = Date.now();

for (let i = 0; i < N; i++) {
  const r = runOne();
  summary.runs++;
  summary.totalSteps += r.steps;
  if (r.reachedP2) summary.reachedP2++;
  if (r.reachedY2) summary.reachedY2++;
  if (r.reachedWinter) summary.reachedWinter++;
  if (r.ended) { summary.ended++; if (r.endKind) summary.ends[r.endKind] = (summary.ends[r.endKind] || 0) + 1; }
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
console.log(`  Reached winter:  ${summary.reachedWinter} (${(100 * summary.reachedWinter / summary.runs).toFixed(0)}%)`);
console.log(`  Reached Year 2:  ${summary.reachedY2} (${(100 * summary.reachedY2 / summary.runs).toFixed(0)}%)`);
console.log(`  Game ended:      ${summary.ended} (${(100 * summary.ended / summary.runs).toFixed(0)}%)`);
console.log(`     bankrupt: ${summary.ends.bankrupt}  ruined: ${summary.ends.ruined}  won: ${summary.ends.won}  unknown: ${summary.ends.unknown}`);
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
