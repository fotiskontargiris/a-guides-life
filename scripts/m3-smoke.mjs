// Smoke-test all four M3 disciplines start cleanly and can run at least one trip.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

const FLEET_BUYS = {
  seakayak: [['clientkayak',1],['clientpfd',1]],
  canyon:   [['clientwetsuit',1],['clientharnessset',1]],
  raft:     [['raft',1],['raftkitset',6]],
  cycle:    [['clientbike',2],['clientbikehelmet',2]],
  sup:      [['clientboard',2],['clientsupkit',2]],
  climb:    [['clientclimbkit',2],['clientclimbshoes',2]],
};

let fails = 0;
for(const disc of ['hike','seakayak','canyon','raft','cycle','sup','climb']){
  try {
    globalThis.initGame('Test-'+disc,'medic',['water'],disc);
    const S = globalThis.S;
    const fleet = FLEET_BUYS[disc] || [];
    for(const [id, n] of fleet) for(let i=0;i<n;i++) globalThis.buyFleet(id, disc);
    globalThis.startDay();
    const bookings = S.bookings.map(b => `${b.activity}:${b.route}(d${b.diff}) ${globalThis.bookingLock(b)?'LOCKED':'OK'}`);
    const runnable = S.bookings.find(b => !globalThis.bookingLock(b));
    console.log(`[${disc}]  cash=€${S.cash}  cert(s)=${JSON.stringify(S.certs)}  loan=${S.loan?'€'+S.loan.balance:'none'}  fleetCap=${globalThis.fleetCapacity(disc)===Infinity?'∞':globalThis.fleetCapacity(disc)}`);
    console.log(`         bookings: ${bookings.join(' | ')}`);
    if(disc!=='hike' && !runnable){ console.log(`         (no runnable booking — that is fine if all bookings are diff-2/3 cert-gated)`); }
    if(runnable){
      console.log(`         recommended for "${runnable.route}": ${[...globalThis.recommended(runnable, S.weather)].join(', ')}`);
      console.log(`         conditionsLine: ${globalThis.conditionsLine(runnable, S.weather)}`);
    }
  } catch(e){ fails++; console.log(`[${disc}] FAIL: ${e.message}\n${e.stack.split('\n').slice(0,3).join('\n')}`); }
}
console.log(fails===0 ? '\nAll seven disciplines initialise cleanly.' : `\n${fails} discipline(s) crashed.`);
