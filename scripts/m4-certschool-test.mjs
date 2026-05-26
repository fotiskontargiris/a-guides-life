// M4 test: cert school groups by discipline, and taking an L1 entry cert
// for a discipline you don't yet offer unlocks that discipline for next spring.
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const rawSrc = html.match(/<script>([\s\S]*)<\/script>/)[1];
const src = rawSrc.replace(/\bboot\(\);\s*$/m, '').replace('let S, gCounter=0;', 'var S; var gCounter=0;');
function fakeEl(){ const el={innerHTML:'',value:'',style:{},offsetWidth:320,_classes:new Set(),classList:null}; el.classList={add:(...x)=>x.forEach(c=>el._classes.add(c)),remove:(...x)=>x.forEach(c=>el._classes.delete(c)),toggle:c=>el._classes.has(c)?(el._classes.delete(c),false):(el._classes.add(c),true),contains:c=>el._classes.has(c)}; return el;}
const els={}; globalThis.document={getElementById:id=>els[id]||(els[id]=fakeEl())}; globalThis.window={storage:{async get(){throw 0;},async set(){},async delete(){}}}; globalThis.setTimeout=()=>{};
(0,eval)(src);

console.log('--- Force a hike player into winter ---');
globalThis.initGame('Cert-Tester','medic',['water'],'hike');
globalThis.S.cash = 5000;       // plenty to enrol
globalThis.S.rep = 75;          // satisfies all repReq
globalThis.S.seasonDay = 214;   // last summer day; next advance enters winter
globalThis.advanceDay();
globalThis.renderOffSeason();   // skip the season report and open the winter office
console.log(`In winter, offered=${JSON.stringify(globalThis.S.offeredDisciplines)}`);

const scene = els.scene.innerHTML;
const sections = ['General','Hiking','Sea kayaking','Canyoning','Rafting','Cycling','SUP','Climbing','Take on a new discipline'];
console.log('\nSections rendered in cert school:');
for(const s of sections) console.log(`  ${scene.includes(s) ? '✓' : ' '}  ${s}`);

console.log('\n--- Take canyonBasic (L1 entry for a discipline you do not offer) ---');
const before = JSON.stringify(globalThis.S.offeredDisciplines);
globalThis.enrollCertSchool('canyonBasic');
const after = JSON.stringify(globalThis.S.offeredDisciplines);
console.log(`offered before: ${before}`);
console.log(`offered after:  ${after}`);
console.log(`certs: ${JSON.stringify(globalThis.S.certs)}`);
console.log(`cash: €${globalThis.S.cash} · weeks used: ${globalThis.S.winterWeeksUsed}`);

console.log('\n--- Take kayakBasic too ---');
globalThis.enrollCertSchool('kayakBasic');
console.log(`offered: ${JSON.stringify(globalThis.S.offeredDisciplines)}`);
console.log(`certs: ${JSON.stringify(globalThis.S.certs)}`);

console.log('\n--- Open spring, verify new disciplines appear in bookings ---');
globalThis.enterSpring();
console.log(`Y${globalThis.S.year} D1 bookings (random sample):`);
for(const b of globalThis.S.bookings) console.log(`  ${b.activity}:${b.route} (d${b.diff})`);

console.log('\n--- The L1 ladder for offered disciplines should no longer appear in "Take on a new discipline" ---');
globalThis.S.cash = 5000; globalThis.S.rep = 75; globalThis.S.seasonDay = 214; globalThis.advanceDay(); globalThis.renderOffSeason();
const winterScene = els.scene.innerHTML;
const newDiscIdx = winterScene.indexOf('Take on a new discipline');
const newDiscBlock = newDiscIdx >= 0 ? winterScene.slice(newDiscIdx, newDiscIdx + 3000) : '';
const stillVisible = ['canyonBasic','kayakBasic','cycleBasic','supBasic','climbBasic','raftBasic'].filter(id => newDiscBlock.includes(`enrollCertSchool('${id}')`));
console.log(`Take-on-new-discipline now offers entry certs for: ${stillVisible.join(', ') || '(none)'}`);
