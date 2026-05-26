// Transport ladder test: routes filter by accessibility, bus fee applies on
// near-region trips, locked messages explain why a region is gated.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

function bookingsByRegion(){
  const out = {local:0, near:0, mid:0, far:0};
  for(const b of globalThis.S.bookings) out[b.region||'local']++;
  return out;
}
function regionsReachable(){
  const regions = ['local','near','mid','far'];
  return regions.filter(r => globalThis.routeReachable({region:r}));
}

console.log('=== Hike player, tier-0 (bus only) ===');
globalThis.initGame('Tier0','medic',['water'],'hike');
console.log(`transportTier = ${globalThis.transportTier()}; reachable regions: ${regionsReachable().join(',')}`);
// Roll bookings 10x and tally regions
const tally = {local:0, near:0, mid:0, far:0};
for(let i=0;i<10;i++){ globalThis.startDay(); for(const b of globalThis.S.bookings) tally[b.region||'local']++; }
console.log(`bookings region tally over 10 days: ${JSON.stringify(tally)}`);
console.log('  expected: only local + near (no mid, no far)');

console.log('\n=== Buy moped, regions extend to mid ===');
globalThis.S.cash = 1000;
globalThis.buyVehicle('moped');
console.log(`tier=${globalThis.transportTier()}; reachable: ${regionsReachable().join(',')}; cash=€${globalThis.S.cash}`);
globalThis.startDay();
console.log(`bookings now: ${globalThis.S.bookings.map(b=>b.region+':'+b.route).join(' | ')}`);

console.log('\n=== Buy Hilux, far opens ===');
globalThis.S.cash = 5000;
globalThis.buyVehicle('pickup');
console.log(`tier=${globalThis.transportTier()}; reachable: ${regionsReachable().join(',')}; cash=€${globalThis.S.cash}`);
globalThis.startDay();
console.log(`bookings now: ${globalThis.S.bookings.map(b=>b.region+':'+b.route).join(' | ')}`);

console.log('\n=== Bus fee on near-region trip ===');
globalThis.initGame('BusFee','medic',['water'],'hike');
globalThis.S.cash = 500;
// Force a near-region booking: keep startDay until we get one
let nearB = null;
for(let i=0;i<30 && !nearB;i++){
  globalThis.startDay();
  nearB = globalThis.S.bookings.find(b => b.region==='near' && !globalThis.bookingLock(b));
}
console.log(`Near-region booking: ${nearB ? nearB.route : '(none rolled in 30 tries)'}`);
console.log(`busFee(near) = €${globalThis.busFee({region:'near'})} (should be 8 without moped/car)`);

console.log('\n=== Kayak player, tier-0: only Voidokilia+Gialova; even with Hilux, regional locked without rack ===');
globalThis.initGame('Kayak-Trans','medic',['water'],'seakayak');
globalThis.S.cash = 5000;
globalThis.buyFleet('clientkayak','seakayak');
globalThis.buyFleet('clientpfd','seakayak');
console.log(`Tier 0 reachable: ${regionsReachable().join(',')} — but kayak fleet only travels with rack/trailer`);
globalThis.buyVehicle('pickup');
console.log(`After Hilux, tier=${globalThis.transportTier()}, reachable=${regionsReachable().join(',')}; cash=€${globalThis.S.cash}`);
globalThis.startDay();
for(const b of globalThis.S.bookings){
  const lock = globalThis.bookingLock(b);
  console.log(`  ${b.region}:${b.route} → ${lock || 'OK'}`);
}
console.log('\n=== Buy rack — fleet locks lift for near/mid with cap 2 ===');
globalThis.buyVehicle('rack');
console.log(`fleetTransportCap('seakayak') = ${globalThis.fleetTransportCap('seakayak')} (should be 2)`);
globalThis.startDay();
for(const b of globalThis.S.bookings){
  const lock = globalThis.bookingLock(b);
  const cap = globalThis.fleetCapacityFor(b);
  console.log(`  ${b.region}:${b.route} group ${b.group} → cap ${cap} → ${lock || 'OK'}`);
}

console.log('\n=== Raft player — region:mid Neda needs trailer; no rack alternative ===');
globalThis.initGame('Raft-Trans','medic',['water'],'raft');
globalThis.S.cash = 5000;
globalThis.buyFleet('raft','raft');
globalThis.buyFleet('raftkitset','raft');
globalThis.buyFleet('raftkitset','raft');
globalThis.buyVehicle('pickup');
globalThis.buyVehicle('rack');
console.log('With Hilux + rack only:');
globalThis.startDay();
for(const b of globalThis.S.bookings) console.log(`  ${b.region}:${b.route} → ${globalThis.bookingLock(b) || 'OK'}`);
console.log('Buy trailer:');
globalThis.buyVehicle('trailer');
globalThis.startDay();
for(const b of globalThis.S.bookings) console.log(`  ${b.region}:${b.route} → ${globalThis.bookingLock(b) || 'OK'}`);
