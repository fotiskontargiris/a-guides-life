// M2 sanity: picking sea-kayaking at character creation should grant the
// Sea Kayak Award, +€1500 cash, and a loan repaid €600 per winter.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

console.log('=== Hiking pick (default) ===');
globalThis.initGame('Hiker','medic',['water'],'hike');
console.log('offered:', JSON.stringify(globalThis.S.offeredDisciplines), 'cash:', globalThis.S.cash, 'certs:', JSON.stringify(globalThis.S.certs), 'loan:', globalThis.S.loan);

console.log('\n=== Kayak pick ===');
globalThis.initGame('Paddler','captain',['water'],'seakayak');
console.log('offered:', JSON.stringify(globalThis.S.offeredDisciplines));
console.log('cash:', globalThis.S.cash, '(should be 200 + 200 captain bonus + 1500 loan = 1900)');
console.log('certs:', JSON.stringify(globalThis.S.certs));
console.log('loan:', JSON.stringify(globalThis.S.loan));

console.log('\n=== Locked-discipline pick falls back to hiking ===');
globalThis.initGame('Cyclist','medic',['water'],'cycle');
console.log('offered:', JSON.stringify(globalThis.S.offeredDisciplines), '(should be hike)');

console.log('\n=== Kayak game runs a year, loan repaid ===');
globalThis.initGame('Paddler','captain',['water'],'seakayak');
console.log('Before season — cash:', globalThis.S.cash, 'loan balance:', globalThis.S.loan.balance);
// Fast-forward to end of summer
globalThis.S.seasonDay = 214;
globalThis.advanceDay();
console.log('After season — cash:', globalThis.S.cash, 'loan:', globalThis.S.loan?.balance ?? 'paid off');
console.log('yearStats.loan:', globalThis.S.yearStats.loan);
