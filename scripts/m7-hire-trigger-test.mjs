// M7 test: hire is a demand-based scene, not an auto-trigger.
//  1. Hitting €1500 + rep 70 with NO turned-away bookings does NOT auto-fire.
//  2. With turned-away bookings ≥ 5 and the money/rep gates met, startDay()
//     shows the hire scene.
//  3. acceptHire() flips into Phase 2 (Maria onboarded).
//  4. declineHire() defers; the scene won't re-prompt for 14 days.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

function title(){ const m=(els.scene.innerHTML.match(/<h2>([\s\S]*?)<\/h2>/)||[])[1]||''; return m.slice(0,120); }

console.log('=== Case 1: cash+rep gates met but ZERO turned-away → no scene ===');
globalThis.initGame('NoTurnedAway','medic',['water'],'hike');
globalThis.S.cash=2000; globalThis.S.rep=80; globalThis.S.turnedAwayThisYear=0;
globalThis.startDay();
console.log(`Phase: ${globalThis.S.phase}, scene title: "${title()}"`);
console.log(`shouldOfferHire: ${globalThis.shouldOfferHire()}`);

console.log('\n=== Case 2: turned-away=8, cash=2000, rep=80 → scene fires ===');
globalThis.S.turnedAwayThisYear=8;
globalThis.startDay();
console.log(`Phase: ${globalThis.S.phase}, scene title: "${title()}"`);
console.log(`shouldOfferHire: ${globalThis.shouldOfferHire()}`);

console.log('\n=== Case 3: declineHire() defers re-prompt for 14 days ===');
const dayBefore = globalThis.S.day;
globalThis.declineHire();
console.log(`After decline — Phase: ${globalThis.S.phase}, lastHirePromptDay: ${globalThis.S.lastHirePromptDay} (=day ${dayBefore})`);
console.log(`shouldOfferHire now: ${globalThis.shouldOfferHire()}  (should be false — within 14d cooldown)`);
// Advance 5 days — still inside cooldown
for(let i=0;i<5;i++) globalThis.advanceDay();
console.log(`After 5 days — shouldOfferHire: ${globalThis.shouldOfferHire()} (should still be false)`);
// Advance another 10 days — now past cooldown
for(let i=0;i<10;i++) globalThis.advanceDay();
console.log(`After 15 days — shouldOfferHire: ${globalThis.shouldOfferHire()} (should be true again, if turnedAway still ≥5)`);

console.log('\n=== Case 4: acceptHire() → Phase 2 with Maria ===');
globalThis.initGame('Hire-Accept','medic',['water'],'hike');
globalThis.S.cash=2000; globalThis.S.rep=80; globalThis.S.turnedAwayThisYear=8;
globalThis.startDay();
console.log(`Before accept — scene title: "${title()}"`);
globalThis.acceptHire();
console.log(`After accept — Phase: ${globalThis.S.phase}, guides: ${globalThis.S.guides.map(g=>g.name).join(',')}`);

console.log('\n=== Case 5: turned-away counter increments on advanceDay ===');
globalThis.initGame('Turn-Counter','medic',['water'],'hike');
globalThis.S.cash=2000; globalThis.S.rep=80;
console.log(`Day 1 bookings (offered=${globalThis.S.bookings.filter(b=>!b.cancelled).length}), turnedAway=${globalThis.S.turnedAwayThisYear}`);
// don't take any booking, just advance the day
globalThis.advanceDay();
console.log(`After advanceDay (no trip), turnedAway=${globalThis.S.turnedAwayThisYear} (should be 3 — all 3 bookings unrun)`);
