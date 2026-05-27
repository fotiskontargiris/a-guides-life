// Verify weather stability + mid-trip turn mechanic.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

console.log('=== rollWeather() distribution: 500 rolls ===');
const counts = {};
const stabHist = {steady:0, unsettled:0, volatile:0, turning:0};
for(let i=0;i<500;i++){
  const w = globalThis.rollWeather();
  counts[w.short] = (counts[w.short]||0)+1;
  stabHist[globalThis.stabilityHint(w.stability).label]++;
}
console.log('  by type:', counts);
console.log('  by stability:', stabHist);

console.log('\n=== Stability hint thresholds ===');
[10, 30, 50, 70, 90].forEach(s => console.log(`  stab ${s} → ${globalThis.stabilityHint(s).label}`));

console.log('\n=== Mid-trip turn fires only when unstable ===');
function turnTest(stab, trials){
  let fired = 0;
  for(let i=0;i<trials;i++){
    globalThis.initGame('T','medic',['water'],'hike','bank','gemista');
    globalThis.S.you.heroId='medic';
    globalThis.S.weather = Object.assign({}, globalThis.WEATHER ? globalThis.WEATHER[0] : {name:'Clear', short:'Clear', col:'#fff', note:'', risk:0, drain:0}, {stability:stab});
    globalThis.S.trip = {b:{route:'r',activity:'hike',region:'local',diff:1,tags:[],base:60,pay:60,ctype:'family',group:4}, payMul:1, tips:0, done:0, total:1, logs:[], prepRisk:0, repDelta:0, justTurned:false};
    if(globalThis.maybeWeatherTurn()) fired++;
  }
  return fired;
}
console.log(`  stab 90 (steady)    — 1000 rolls: ${turnTest(90, 1000)} fired (expect 0)`);
console.log(`  stab 60 (unsettled) — 1000 rolls: ${turnTest(60, 1000)} fired (expect ~150 = 5% + 10%)`);
console.log(`  stab 30 (volatile)  — 1000 rolls: ${turnTest(30, 1000)} fired (expect ~225 = 5% + 17.5%)`);
console.log(`  stab 10 (turning)   — 1000 rolls: ${turnTest(10, 1000)} fired (expect ~275 = 5% + 22.5%)`);

console.log('\n=== Turn transitions stay in plausible directions ===');
for(const from of ['Clear','Hot','Windy','Drizzle','Storm']){
  const targets = {};
  for(let i=0;i<200;i++){
    const t = globalThis.pickTurnTarget(from);
    targets[t.short] = (targets[t.short]||0)+1;
  }
  console.log(`  ${from} → `, targets);
}

console.log('\n=== End-to-end: stab 30 day, trigger renderWeatherTurn, apply each choice ===');
function doTurn(choice){
  globalThis.initGame('T','medic',['water'],'hike','bank','gemista');
  globalThis.S.you.heroId='medic';
  // build a Clear weather + force unstable
  let w = globalThis.rollWeather(); while(w.short!=='Clear') w = globalThis.rollWeather();
  globalThis.S.weather = Object.assign({}, w, {stability:30});
  globalThis.S.trip = {b:{route:'r',activity:'hike',region:'local',diff:1,tags:[],base:60,pay:60,ctype:'family',group:4}, payMul:1, tips:0, done:0, total:1, logs:[], prepRisk:0, repDelta:0, justTurned:false};
  globalThis.renderWeatherTurn();
  const oldShort = 'Clear';
  const newShort = globalThis.S.weather.short; // still old at this point, pendingTurn holds new
  const pendingShort = globalThis.S.trip.pendingTurn.short;
  globalThis.applyWeatherTurn(choice);
  return {
    from: oldShort, to: globalThis.S.weather.short,
    pending: pendingShort,
    payMul: globalThis.S.trip.payMul,
    prepRisk: globalThis.S.trip.prepRisk,
    energy: globalThis.S.energy,
    lastLog: globalThis.S.trip.logs[globalThis.S.trip.logs.length-1],
  };
}
['push','shelter','short'].forEach(c => {
  const r = doTurn(c);
  console.log(`  choice=${c}: ${r.from} → ${r.to}, payMul=${r.payMul.toFixed(2)}, prepRisk=${r.prepRisk.toFixed(2)}, energy=${r.energy}`);
  console.log(`    log: ${r.lastLog}`);
});

console.log('\nDone.');
