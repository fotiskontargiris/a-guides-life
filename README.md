# A Guide's Life or no Life

> A career in the outdoors, money, and minor catastrophes.

**Play it:** https://fotiskontargiris.github.io/outdoor-guide-tycoon/

A text-driven outdoor-guide career game set in the Peloponnese. You graduated from your guide course because nothing else worked out. Now the Peloponnese is your problem. Start as a solo hiking guide in Messinia, build a team that does the trips so you don't have to, and grow into something that, on paper, could be called an outdoor company. Eventually water activities (kayak, SUP, sailing, snorkel) open across Navarino Bay and air activities (paragliding) over Taygetos.

## Status

**Pre‑alpha.** Single self‑contained HTML file (`index.html`), vanilla JS, no build step. Playable end‑to‑end through Phase 1 (solo guiding) and Phase 2 (managing a team), inside a full April–October season with a winter office for cert school and infrastructure projects.

## Roadmap

1. **Polish** — gear shortfall, richer logbook, balance. ✓
2. **Seasons** — April–October days, off‑season cert school, retainers. ✓
3. **Content depth** — 17 routes (Messinia, Mani, Taygetos, Arcadia, Parnon, Achaia), 10 background characters, equipment quality tiers with lifetime. ✓
4. **Discipline depth** — sea‑kayak, canyon, raft, cycle, SUP, climbing all live; loan system, four‑movement year, demand‑driven hire scene. ✓
5. **Hometown + transport ladder** — Year 1 Kalamata grind; bus → moped → Hilux → rack / trailer. ✓
6. **Kitchen intro + 10 fixed heroes + dish mechanic.** ✓
7. **Deeper hero models** — Alani, Villager, Engineer, Influencer, Soldier each with a real mechanical signature. ✓
8. **Weather instability** — days can turn mid‑trip; three choices when the sky moves on you. ✓
9. **Open next**: Phase 2 × disciplines patch · CATASTROPHES.md content · the missing activities (sailing, snorkel, paragliding).

See [CLAUDE.md](./CLAUDE.md) for the working notes and project bible. The voice is canonised
in [LANGUAGE.md](./LANGUAGE.md); the visual surface in [ART-DIRECTION.md](./ART-DIRECTION.md).

## Run

**Hosted:** https://fotiskontargiris.github.io/outdoor-guide-tycoon/ — works on phone or desktop, saves persist via `localStorage`.

**Locally:** open `index.html` in any modern browser. No build step. Saves go to `localStorage` (or `window.storage` if running inside a Claude.ai artifact).

## Test (headless harness)

```
node scripts/harness.mjs [N=300]   # random playthroughs; exits non-zero on exceptions
node scripts/trace.mjs              # single playthrough with verbose end state
node scripts/winter-test.mjs        # forces a game to end of summer to verify the off-season flow
```

Target for the harness is always **0 thrown exceptions**.
