// Force a game into winter and through spring to verify the off-season flow.
// Boosts cash & rep, sets seasonDay to 213, then advances and clicks through.
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
globalThis.window = { storage: { async get() { throw new Error('no'); }, async set() {}, async delete() {} } };
globalThis.setTimeout = () => {};
(0, eval)(src);

function pickHandler() {
  const html = els.scene?.innerHTML || '';
  const re = /onclick="([^"]+)"/g;
  const out = []; let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}
function title() {
  const m = (els.scene?.innerHTML || '').match(/<h2>([\s\S]*?)<\/h2>/);
  return m ? m[1].slice(0, 80) : '(no h2)';
}

console.log('--- Forcing game to end of summer ---');
globalThis.initGame('WinterTester', 'medic', ['water', 'snacks', 'firstaid']);
globalThis.S.cash = 3500;
globalThis.S.rep = 75;
globalThis.S.seasonDay = 214;  // last day of summer; next advanceDay enters winter
globalThis.S.energy = 100;
console.log(`Set: Y${globalThis.S.year} day ${globalThis.S.seasonDay}/214, cash €${globalThis.S.cash}, rep ${globalThis.S.rep}`);

console.log('\n--- advanceDay() should trigger off-season ---');
globalThis.advanceDay();
console.log(`After: Y${globalThis.S.year} season=${globalThis.S.season} seasonDay=${globalThis.S.seasonDay} cash=${globalThis.S.cash}`);
console.log(`Scene title: ${title()}`);

console.log('\n--- Click through season report ---');
let handlers = pickHandler();
console.log(`Available clicks: ${handlers.join(' | ')}`);
const reportBtn = handlers.find(h => /renderOffSeason/.test(h));
if (!reportBtn) { console.log('FAIL: no Begin winter planning button'); process.exit(1); }
globalThis.eval(reportBtn);
console.log(`After: scene title = ${title()}`);

console.log('\n--- In off-season, what can we do? ---');
handlers = pickHandler();
console.log(`Available clicks: ${handlers.slice(0, 10).join(' | ')}`);
console.log(`winterWeeksUsed=${globalThis.S.winterWeeksUsed} cash=${globalThis.S.cash} certs=${JSON.stringify(globalThis.S.certs)} infra=${JSON.stringify(globalThis.S.infra)}`);

console.log('\n--- Enroll in Basic Hiking Guide ---');
try { globalThis.enrollCertSchool('basic'); } catch (e) { console.log('ERROR: ' + e.message); }
console.log(`After basic: weeksUsed=${globalThis.S.winterWeeksUsed} cash=${globalThis.S.cash} certs=${JSON.stringify(globalThis.S.certs)}`);

console.log('\n--- Enroll in Wilderness First Aid ---');
try { globalThis.enrollCertSchool('firstaid'); } catch (e) { console.log('ERROR: ' + e.message); }
console.log(`After WFA: weeksUsed=${globalThis.S.winterWeeksUsed} cash=${globalThis.S.cash} certs=${JSON.stringify(globalThis.S.certs)}`);

console.log('\n--- Buy pickup truck ---');
try { globalThis.enrollInfra('pickup'); } catch (e) { console.log('ERROR: ' + e.message); }
console.log(`After pickup: weeksUsed=${globalThis.S.winterWeeksUsed} cash=${globalThis.S.cash} infra=${JSON.stringify(globalThis.S.infra)}`);

console.log('\n--- Open spring ---');
globalThis.enterSpring();
console.log(`After spring: Y${globalThis.S.year} season=${globalThis.S.season} seasonDay=${globalThis.S.seasonDay} cash=${globalThis.S.cash} energy=${globalThis.S.energy}`);
console.log(`Scene title: ${title()}`);

console.log('\n--- Pickup bonus test: take a trip, fee should include +€10 ---');
const bookings = globalThis.S.bookings;
const easy = bookings.findIndex(b => b.diff === 1 && !b.cancelled);
if (easy < 0) { console.log('No easy booking to test'); }
else {
  const basePay = bookings[easy].pay;
  console.log(`Picked booking: ${bookings[easy].route} basePay=€${basePay}`);
  globalThis.pickBooking(easy);
  // Force pack & advance
  globalThis.S.loadout = ['water','snacks','firstaid'];
  globalThis.startTrailhead();
  // Force walk on
  const meetClicks = pickHandler();
  globalThis.eval(meetClicks[0]); // first choice
  // Resolve event
  const evClicks = pickHandler();
  globalThis.eval(evClicks[0]); // first
  // The trip may need another event step
  while (globalThis.S.trip && globalThis.S.trip.done < globalThis.S.trip.total) {
    const cs = pickHandler();
    if (cs.length === 0) break;
    globalThis.eval(cs[0]);
  }
  // Should be on finish screen
  console.log(`Cash after trip: €${globalThis.S.cash}`);
}

console.log('\nDone.');
