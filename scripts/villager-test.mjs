// Villager — local fee bonus, tourist tip cut, half-price service, weekly panigíri rep tick.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

function runOneTrip(b, ctype, group){
  const booking = {route:b.name, activity:b.activity, region:b.region, diff:b.diff, base:b.base, client:`a ${ctype}`, ctype, group, pay:b.base, tags:b.tags, cancelled:false};
  globalThis.S.bookings = [booking];
  globalThis.S.loadout = ['water'];
  globalThis.S.trip = {b:booking, payMul:1, tips:30, done:0, total:1, logs:[], prepRisk:0, repDelta:0};
  const cashBefore = globalThis.S.cash;
  const lastLineCountBefore = globalThis.S.history.length;
  globalThis.finishPlayerTrip();
  const earned = globalThis.S.cash - cashBefore;
  const note = globalThis.S.history.slice(lastLineCountBefore)[0];
  return {earned, note: note ? note.t : ''};
}

const local = {name:'Polylimnio waterfalls', activity:'hike', region:'local', diff:1, base:60, tags:['river','forest']};
const far   = {name:'Mount Chelmos', activity:'hike', region:'far', diff:2, base:120, tags:['alpine']};

console.log('=== Medic baseline ===');
globalThis.initGame('M','medic',['water'],'hike','bank','gemista');
globalThis.S.you.heroId='medic';
let r = runOneTrip(local, 'family', 4);
console.log(`Medic local family — earned €${r.earned} (base €60 trip fee + €30 tips = €90)`);
r = runOneTrip(local, 'tourist', 6);
console.log(`Medic local tourist — earned €${r.earned} (base €60 + €30 tips, no bonus)`);

console.log('\n=== Villager — local fee bonus ===');
globalThis.initGame('V','villager',['water'],'hike','bank','gemista');
globalThis.S.you.heroId='villager';
r = runOneTrip(local, 'family', 4);
console.log(`Villager local family — earned €${r.earned} (base €60 + €9 villager bonus + €30 tips = €99)`);
r = runOneTrip(far, 'family', 4);
console.log(`Villager far family — earned €${r.earned} (base €120 + €30 tips = €150, no villager bonus on far routes)`);

console.log('\n=== Villager — tourist tip cut ===');
r = runOneTrip(local, 'tourist', 6);
console.log(`Villager local tourist — earned €${r.earned} (base €60 + €9 villager + €15 tips halved = €84)`);
r = runOneTrip(far, 'tourist', 6);
console.log(`Villager far tourist — earned €${r.earned} (base €120 + €15 tips halved = €135)`);

console.log('\n=== Service price (villager half-price on top of any Alani discount) ===');
globalThis.initGame('V','villager',['water'],'hike','bank','gemista');
globalThis.S.you.heroId='villager';
globalThis.S.gear=50;
globalThis.S.cash=100;
globalThis.serviceGear();
console.log(`Villager service: cash 100 → ${globalThis.S.cash} (expect €80, cost €20)`);

console.log('\n=== Panigíri tick — every 7 days, +1 rep ===');
globalThis.initGame('V','villager',['water'],'hike','bank','gemista');
globalThis.S.you.heroId='villager';
const startRep = globalThis.S.rep;
for(let i=0;i<14;i++) globalThis.advanceDay();
console.log(`After 14 days: rep ${startRep} → ${globalThis.S.rep} (expect +2 from two weekly ticks)`);

console.log('\nDone.');
