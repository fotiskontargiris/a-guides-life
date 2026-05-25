# Outdoor Guide Life or no Life

> A career in the outdoors, money, and minor catastrophes.

A text-driven outdoor-guide career game set in the Peloponnese. You graduated from your guide course because nothing else worked out. Now the Peloponnese is your problem. Start as a solo hiking guide in Messinia, build a team that does the trips so you don't have to, and grow into something that, on paper, could be called an outdoor company. Eventually water activities (kayak, SUP, sailing, snorkel) open across Navarino Bay and air activities (paragliding) over Taygetos.

## Status

**Pre‑alpha.** Single self‑contained HTML file (`index.html`), vanilla JS, no build step. Playable end‑to‑end through Phase 1 (solo guiding) and Phase 2 (managing a team), inside a full April–October season with a winter office for cert school and infrastructure projects.

## Roadmap

1. **Polish** — gear shortfall, richer logbook, balance. ✓
2. **Seasons** — April–October days, off‑season cert school, retainers. ✓
3. **Content depth** — 17 routes (Messinia, Mani, Taygetos, Arcadia, Parnon, Achaia), 10 background characters, equipment quality tiers with lifetime. ✓
4. **Migrate** to Vite + TypeScript + Phaser 3 for a proper engine.
5. **Pixel art** rollout per [PIXEL-ART.md](./PIXEL-ART.md).
6. **More events + NPC arcs** — deeper Phase 1/2 content.
7. **Phase 3** — water & air activities (kayak, SUP, sailing, snorkel, paragliding).

See [CLAUDE.md](./CLAUDE.md) for the working notes and project bible.

## Run

Open `index.html` in any modern browser. No build step. Save/continue uses `window.storage` when available (Claude.ai artifact context) and falls back to in‑memory otherwise.

## Test (headless harness)

```
node scripts/harness.mjs [N=300]   # random playthroughs; exits non-zero on exceptions
node scripts/trace.mjs              # single playthrough with verbose end state
node scripts/winter-test.mjs        # forces a game to end of summer to verify the off-season flow
```

Target for the harness is always **0 thrown exceptions**.
