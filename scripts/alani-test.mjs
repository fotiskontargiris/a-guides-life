// Alani's dodgy shop — verify the 25% discount + dodgy flag + exposure mechanic.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

console.log('=== Baseline (medic, no discount) ===');
globalThis.initGame('Medic','medic',['water'],'hike','bank','gemista');
globalThis.S.you.heroId = 'medic';
console.log(`itemCost('firstaid','standard') = €${globalThis.itemCost('firstaid','standard')} (expect €70)`);
console.log(`alaniPrice(100) = €${globalThis.alaniPrice(100)} (expect 100 — not Alani)`);

console.log('\n=== Alani (heroId=alani) ===');
globalThis.initGame('Alani','alani',['water'],'hike','bank','gemista');
globalThis.S.you.heroId = 'alani';  // initGame sets this for hero-id checks; verify
console.log(`Heroid: ${globalThis.S.you.heroId}, cash start: €${globalThis.S.cash} (expect €350 — 200 + 150 hero grant)`);
console.log(`itemCost('firstaid','standard') = €${globalThis.itemCost('firstaid','standard')} (expect €53 — 70 × 0.75 rounded)`);
console.log(`alaniPrice(100) = €${globalThis.alaniPrice(100)} (expect 75)`);
console.log(`alaniPrice(1800) = €${globalThis.alaniPrice(1800)} (expect 1350 — Hilux discount)`);
console.log(`alaniPrice(150) = €${globalThis.alaniPrice(150)} (expect 113 — rack discount)`);

console.log('\n=== Repeated buys → dodgy chance ===');
let dodgyCount = 0;
for(let i=0; i<50; i++){
  globalThis.initGame('A','alani',['water'],'hike','bank','gemista');
  globalThis.S.cash = 10000;
  globalThis.buyItem('firstaid','standard');
  if(globalThis.S.owned.firstaid && globalThis.S.owned.firstaid.dodgy) dodgyCount++;
}
console.log(`50 buys → ${dodgyCount} dodgy (expect ~9 at 18% chance; tolerate 3-15)`);

console.log('\n=== Dodgy item exposed on trail ===');
globalThis.initGame('A','alani',['water'],'hike','bank','gemista');
globalThis.S.cash = 10000;
globalThis.S.owned.firstaid = { tier:'standard', trips:25, dodgy:true };
globalThis.S.owned.poles    = { tier:'standard', trips:50, dodgy:false }; // non-dodgy control
globalThis.S.bookings = [{route:'Test', activity:'hike', region:'local', diff:1, base:60, client:'a family', ctype:'family', group:4, pay:60, tags:['river','forest'], cancelled:false}];
let exposed = 0, kept = 0;
for(let i=0; i<200; i++){
  // simulate 1 trip: only the loadout-wear part by calling finishPlayerTrip indirectly through pickBooking + force-resolve
  // simpler: re-stub a trip and run the wear loop manually
  const orig = JSON.parse(JSON.stringify({owned:globalThis.S.owned, rep:globalThis.S.rep}));
  globalThis.S.loadout = ['firstaid','poles'];
  globalThis.S.trip = {b:globalThis.S.bookings[0], payMul:1, tips:0, done:0, total:1, logs:[], prepRisk:0, repDelta:0};
  globalThis.finishPlayerTrip();
  if(!globalThis.S.owned.firstaid) exposed++;
  else kept++;
  // reset for next iteration
  globalThis.S.owned = JSON.parse(JSON.stringify(orig.owned));
  globalThis.S.rep = orig.rep;
  globalThis.S.dayReports = [];
}
console.log(`200 trips with dodgy firstaid → exposed ${exposed} times (expect ~12 at 6% chance)`);

console.log('\nDone.');
