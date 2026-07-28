# The Beat Relay — Feature Tree

Choose-your-path structure for the workshop. Everyone builds the **same Step 1**, then each
group climbs its own **trunks and branches**, then everyone finishes with the **same Share
step**. No two groups end up with the same machine.

**This catalog is deliberately bigger than any group can finish in the session.** That's the
point: the branches you *don't* reach are your take-home to-do list — something to keep
developing after the workshop.

**Why a tree (not a flat menu):** a branch physically sits under its trunk, so a branch can
only be reached once its prerequisite exists — the structure enforces dependencies instead
of us tagging them by hand.

**Badges**
- Mobile risk: 🟢 safe on iPhone/Android · 🟡 works, watch it · 🔴 avoid
- ⚡ = ambitious, a group may not finish it — and that's a *good* dead-end teaching moment
- 🌐 = **hosted-only** (works on the live site, not in an offline downloaded copy)
- Status: ✅ built · ⬜ to build
- Time = rough live-relay build time on an average phone (read prompt → regenerate → quick test)

> A group only ever picks a **few** branches, so a long menu isn't "too big" — it's variety.
> The guardrail is **per-machine depth**, not the number of options. Some features appear on
> more than one trunk (e.g. mute/volume) as different entry points — that's intentional.
> Every branch prompt is additive and self-contained ("Add…" / "Let me…"), so any path composes.

---

## 🌳 STEP 1 — Everyone builds this  ·  ~4 min · 🟢 · ✅

> Build me a 16-step drum machine as a single web page with four rows — kick, snare, hi-hat,
> and clap. Each row is 16 tap buttons. Add a Play button and a tempo slider. Make all the
> sounds with the Web Audio API — no sound files.

---

## 🎤 Trunk A — Sampler   *(needs: Step 1 · 🌐 mic)*

**A · Trunk** · ~5 min · 🟡🌐 · ✅
> Add a sampler that records a short sound from the microphone and adds it as a new track I
> can sequence, with a pitch slider.

- **A1 · Trim + Reverse** · ~3 min · 🟢 · ✅
  > Let me trim my recorded sample by dragging the ends of the waveform, and add a Reverse
  > button that plays it backwards.
- **A2 · Transpose** · ~2 min · 🟢 · ⬜
  > Change the sample's pitch control to transpose in semitones, with a reset-to-original button.
- **A3 · Shape (attack/decay)** · ~2.5 min · 🟡 · ⬜
  > Add attack and decay knobs to my sample so I can make it punchy or smooth.
- **A4 · Normalize** · ~1.5 min · 🟢 · ⬜  ⚠️ *samples are already auto-normalized on record; this re-levels the current (e.g. trimmed) selection.*
  > Add a Normalize button that boosts my sample to full volume without clipping.
- **A5 · EQ** · ~3 min · 🟡 · ⬜  *(EQ on the sample track only — cf. B4 master EQ)*
  > Add low/mid/high EQ knobs for my sample.
- **A6 · Lo-fi / bitcrush** · ~2 min · 🟢 · ⬜
  > Add a lo-fi knob that crunches my sample down to a grittier, lower-quality sound.
- **A7 · Chop into pads** · ~4 min · 🟡⚡ · ⬜
  > Let me slice my sample into several pieces I can trigger separately.

---

## 🎛️ Trunk B — Signal FX   *(needs: Step 1 · effects on the mix — pick any)*

- **B1 · Echo** · ~3.5 min · 🟢 · ✅
  > Add a delay/echo with a settings panel and a send slider per drum, and sync the echo
  > time to the tempo (1/4, 1/8, 1/16 notes).
- **B2 · Reverb** · ~2 min · 🟢 · ✅
  > Add a Reverb slider that adds room sound to the whole kit.
- **B3 · Filter sweep** · ~3.5 min · 🟢 · ✅
  > Add a low-pass/high-pass filter on the whole mix, with a lane I can draw on to move the
  > filter across the 16 steps in time with the beat.
- **B4 · EQ (3-band, master)** · ~3 min · 🟡 · ⬜
  > Add a 3-band EQ (low, mid, high) on the whole mix with three knobs.
- **B5 · Mixer (volume + pan)** · ~3.5 min · 🟡 · ⬜  ⚠️ *a per-track fader+pan strip for 7–8 tracks is tight on a phone — keep it compact.*
  > Add a mixer with a volume slider and a left/right pan knob for each track.
- **B6 · Compression** · ~2 min · 🟢 · ⬜  *(one DynamicsCompressor on the master — easy "glue")*
  > Add a compressor on the whole mix with a slider for how hard it squeezes.
- **B7 · FX automation** · ~4 min · 🟡⚡ · ⬜  *(generalizes B3's draw-lane to other FX params)*
  > Let me draw automation across the 16 steps for an effect — like the filter lane, but for
  > the echo amount or the volume.
- **B8 · Distortion** · ~2 min · 🟢 · ⬜
  > Add a distortion/overdrive knob on the whole mix.
- **B9 · Sidechain pump** · ~3 min · 🟡 · ⬜  *(duck everything to the kick — the "breathing" pump)*
  > Make everything duck in volume each time the kick hits, for a pumping feel.
- **B10 · Limiter** · ~1.5 min · 🟢 · ⬜
  > Add a limiter so the mix never clips no matter how loud it gets.

---

## 🥁 Trunk C — Instruments   *(needs: Step 1 · several add per-track UI — don't stack too many on one machine)*

- **C1 · Accent / velocity** · ~3 min · 🟡 · ⬜
  > Let me tap a step twice to make it a louder accented hit, and a third tap to turn it off.
- **C2 · Tune** · ~3 min · 🟡 · ⬜
  > Add a tune knob for each drum so I can pitch each sound up or down.
- **C3 · Attack / Decay** · ~3.5 min · 🟡🔴 · ⬜   *(heaviest — one per machine, max)*
  > Add attack and decay knobs to each drum voice.
- **C4 · Add sampled sounds** · ~3 min · 🟡🌐 · ⬜   *(one-shot samples hosted in `sounds/` — tiny, ~5–20 KB each)*
  > Add a few new drum rows that play one-shot samples loaded from the `sounds/` folder —
  > like a real clap, an 808, and a rimshot.
- **C5 · Reverse a sound** · ~2.5 min · 🟡🌐 · ⬜   *(needs a sampled sound — C4 or Trunk A; reuses A1)*
  > Let me reverse a sampled sound so it plays backwards.
  >
  > 🎓 **Teachable moment:** reverse works on the **sampled** rows but *not* the built-in synth
  > drums — a synth hit is generated fresh each time (nothing recorded to flip), while a sample
  > is real audio you can play backwards. Sampling vs. synthesis, made tangible.
- **C6 · Swing** · ~2 min · 🟢 · ✅
  > Add a Swing slider for a shuffle feel.
- **C7 · Step probability** · ~3 min · 🟡 · ⬜   *(each hit has a % chance — generative variation)*
  > Let me set a chance for each step to play, so the beat varies as it loops.
- **C8 · Flam / ratchet** · ~3 min · 🟡 · ⬜
  > Let me make a step retrigger quickly — a flam or a roll on that hit.
- **C9 · Humanize** · ~2 min · 🟢 · ⬜
  > Add a Humanize button that nudges timing and volume slightly so it feels less robotic.
- **C10 · Fun FX & vocal one-shots** · ~3 min · 🟡🌐 · ⬜   *(same `sounds/` mechanism as C4 — pure crowd-pleaser)*
  > Add a row of fun one-shot samples from the `sounds/` folder — like an airhorn, glass
  > breaking, a door knock, a dog bark, and a couple of vocal shouts — that I can sequence.
  >
  > 🎉 Great paired with **C5 Reverse** (a reversed airhorn is the demo everyone remembers)
  > and pitch — and it's more sampling exposure with zero extra machinery.

### Sampled-sound assets  (same hosting model as loops)
```
sounds/
  drums/  clap.mp3  808.mp3  rim.mp3                              ← C4: real drum one-shots (~5–20 KB)
  fx/     airhorn.mp3  glass.mp3  knock.mp3  bark.mp3  yeah.mp3   ← C10: fun FX & vocals (~10–30 KB)
  sounds.json                                                    ← [{ "name":"Airhorn", "file":"fx/airhorn.mp3" }, …]
```
Same repo, same-origin → no CORS; 🌐 hosted-only, like the mic and loops. Even a big kit
stays well under 1 MB. **Licensing:** use royalty-free / cleared sounds only (e.g. CC0 from
freesound.org); be extra careful with **vocal clips and branded "tags"** — they can carry
copyright or trademark.

---

## 🔁 Trunk D — Loops   *(needs: Step 1 · 🌐 hosted · ⚡ marquee)*

Real audio loops, made tempo-proof the REX way: **pre-sliced in prep, retriggered at the
current tempo** — in time and pitch-preserved. The `.rex` files themselves aren't read in
the browser (proprietary); we convert them once into a web asset (see **Loop asset format**).

**D · Trunk** · ~5 min · 🟡🌐⚡ · ⬜
> Add a loop player that loads a pre-sliced loop from the `loops/` folder (an MP3 plus a
> slices JSON) and plays its slices in time with the tempo.

- **D1 · Pick from the pool** · ~2.5 min · 🟡🌐 · ⬜
  > Let me choose which loop to load from a small menu of loops in the `loops/` folder.
- **D2 · Chop across the grid** · ~4 min · 🟡⚡ · ⬜
  > Let me place the loop's slices onto the 16-step grid so I can rearrange them like drums.
- **D3 · Choose slices** · ~2.5 min · 🟡 · ⬜
  > Let me pick which of the loop's slices play and which stay silent.
- **D4 · Reverse** · ~2 min · 🟡🌐 · ⬜   *(reuses A1's reverse code)*
  > Add a button to play the loop backwards.
- **D5 · Compression** · ~2 min · 🟡🌐 · ⬜   *(compressor on the loop track)*
  > Add a compressor on the loop so it sits tight in the mix.
- **D6 · Loop filter + volume** · ~2 min · 🟡🌐 · ⬜
  > Add a volume slider and a filter for the loop.
- **D7 · Per-slice pitch** · ~3 min · 🟡🌐 · ⬜
  > Let me pitch individual slices of the loop up or down.

### Loop asset format  (lives in the GitHub repo → same-origin, no CORS)
```
loops/
  boombap90.mp3            ← the audio (small, ~50–150 KB)
  boombap90.slices.json    ← slice map (tiny, numbers only → survives AI regen; embeddable)
```
```json
{ "name": "boombap90", "bpm": 90, "beats": 4,
  "slices": [0.000, 0.281, 0.560, 0.842, 1.121] }   // slice START times, seconds
```
Runtime: slice *i* plays `bufferSource.start(when, slices[i], slices[i+1] - slices[i])`,
scheduled on the grid — same lookahead scheduler the drum steps already use.
**Licensing:** only slice/host loops you have rights to (royalty-free or your own).

---

## 🎚️ Trunk E — Sequencer   *(needs: Step 1 · ⚠️ edits the core loop → higher regression risk; build early)*

- **E1 · 32 steps (two pages)** · ~4.5 min · 🟡⚡ · ⬜   *(the "second page" — see notes)*
  > Let me expand the sequencer to 32 steps as two pages of 16, with a button to flip between
  > page 1 and page 2. When I turn on page 2, copy page 1 into it so the beat keeps going, and
  > let me edit the second page to add a variation. Make the playhead follow whichever page is
  > playing. Use pages, not a scrolling row.
- **E2 · Adjustable length** · ~3 min · 🟡 · ⬜
  > Let me set how many steps the pattern loops, from 1 up to 16.
- **E3 · Polymeter (per-track length)** · ~4 min · 🟡⚡ · ⬜   *(each row its own length → phasing)*
  > Let me give each drum row its own number of steps so they drift in and out of sync.
- **E4 · A/B patterns** · ~4 min · 🟡 · ⬜
  > Let me keep two separate patterns, A and B, and switch between them while it plays.
- **E5 · Play direction** · ~2.5 min · 🟢 · ⬜
  > Add play modes: forward, reverse, and ping-pong.

---

## 🎹 Trunk F — Melody & Synth   *(needs: Step 1 · adds a pitched voice)*

- **F1 · Bassline row** · ~4 min · 🟡 · ⬜   *(synth notes, tempo-locked — the offline-safe "loop")*
  > Add a bass row where each step can play a synth note, locked to the tempo.
- **F2 · Piano keyboard** · ~3.5 min · 🟡 · ⬜   *(the kit's take-home idea)*
  > Add a small piano keyboard I can play by tapping.
- **F3 · Scale lock** · ~2.5 min · 🟢 · ⬜
  > Let me pick a musical scale so the melody notes always sound right.
- **F4 · Arpeggiator** · ~4 min · 🟡⚡ · ⬜
  > Add an arpeggiator that plays my chosen notes up and down in time.

---

## 🎛️ Trunk G — Performance & UI   *(needs: Step 1 · mostly 🟢 quick wins)*

- **G1 · Master volume** · ~1.5 min · 🟢 · ⬜
  > Add a master volume knob for the whole machine.
- **G2 · Mute / Solo** · ~2.5 min · 🟢 · ⬜
  > Let me mute or solo each track.
- **G3 · Tap tempo** · ~2 min · 🟢 · ⬜
  > Add a Tap button I can tap to set the tempo by feel.
- **G4 · Metronome** · ~2 min · 🟢 · ⬜
  > Add a metronome click I can turn on while I build a beat.
- **G5 · Theme switcher** · ~2 min · 🟢 · ⬜
  > Let me switch the color theme of the machine.
- **G6 · Perform mode** · ~3 min · 🟢 · ⬜
  > Add a big-button fullscreen mode for playing live on a phone.

---

## 💾 Trunk H — Save, Share & Export   *(needs: Step 1)*

- **H1 · Share link** · ~3 min · 🟢 · ⬜   *(= the everyone-does Final Step below)*
  > Let me save and share my beat as a link that reopens the exact pattern.
- **H2 · Save to phone** · ~2 min · 🟢 · ⬜
  > Remember my beat on this device so it's still here when I come back.
- **H3 · Export audio file** · ~3.5 min · 🟡 · ⬜   ⚠️ *download is clunky in iOS Safari*
  > Let me export my beat as an audio file I can download.
- **H4 · QR code** · ~2.5 min · 🟡 · ⬜   *(draw a QR of the share link on a canvas)*
  > Show a QR code of my beat's link so someone can scan it.
- **H5 · Record performance** · ~3 min · 🟡 · ⬜
  > Let me record my live performance and play it back.

---

## 📊 Trunk I — Visualizer   *(needs: Step 1 · eye-candy, all 🟢)*

- **I1 · Waveform scope** · ~2 min · 🟢 · ⬜
  > Add a moving waveform display of the sound coming out.
- **I2 · Reactive background** · ~2 min · 🟢 · ⬜
  > Make the background flash and pulse in time with the hits.
- **I3 · Spectrum bars** · ~2.5 min · 🟢 · ⬜
  > Add a bar spectrum analyzer that dances to the music.

---

## 🔗 FINAL STEP — Everyone finishes here  ·  ~3 min · 🟢 · ⬜

> Let me save and share my beat as a link that reopens the exact pattern when someone else
> clicks it.

Lands the whole-room teaching moment: **the conversation built the instrument in seconds —
where you run it decides what it's allowed to do** (mic, loops, and sharing are the parts
that need a real hosted home).

---

## 🔙 If a branch breaks — the go-back move

Dead ends are part of the lesson. Two layers, honest about which is reliable:

**Layer 1 — the go-back prompt** *(reliable for the step you just did)*
> Whoa — that last change broke my drum machine. Undo it completely and give me back the
> exact version from right before that change, which was working. Don't add anything new or
> fix anything else — just restore the previous working version.

**Layer 2 — the real safety net: keep your last good version**
- On Claude.ai: use the artifact's **version history to restore the previous version**, or
  **edit the message** that caused the break.
- File method: after a step that works, **that file is your checkpoint** — to go back, start
  fresh and re-attach the last good file, then make a different choice.

*This go-back is a chat move, not a button in the app. And "save your last good version before
you experiment" is itself the lesson — version control without the jargon.*

---

## Design notes / open decisions

1. **C5 "Reverse" — resolved.** Reverse operates on **sampled** sounds (C4 hosted one-shots,
   or the mic Sampler), not the synthesized drums — that contrast *is* the teachable moment.
   C5 requires a sampled sound in the machine first.
2. **Groove split — resolved.** Reverb → Signal FX (B2); Swing → Instruments (C6). The old
   bundled "Groove" branch is retired; in the relay they're two separate one-line prompts.
3. **EQ appears twice** — A5 (sample) and B4 (master). Per-track vs mix — intentional.
4. **Compression appears twice** — B6 (master) and D5 (loop). A master compressor already
   catches the loop, so D5 is only worth it for compressing the loop *independently*.
5. **"Reverse" is the workshop's throughline.** It appears on the mic Sampler (A1), sampled
   instruments (C5), and loops (D4) — all *recordings* — and deliberately does **not** work on
   the synth drums. That single verb quietly teaches recorded-vs-generated audio.
6. **Sampling exposure ladder** (easiest → deepest): **C4 hosted one-shots** (on-ramp, no
   permission) → **Trunk A mic Sampler** → **Trunk D loops**. All are recorded audio; all
   support reverse.
7. **Sequencer (Trunk E) edits the core loop**, which every other feature depends on — so it's
   higher regression risk than a bolt-on. Build it early (right after Step 1) or treat it as a
   ⚡ "might not finish" branch.
   - **Pages, never scrolling.** 32 cells in one row means tiny cells + janky horizontal
     touch-scroll + you lose the grid at a glance; two pages of 16 keep every cell full-size.
   - **Page 2 copies page 1 on expand**, so the beat keeps grooving and you edit the second
     half to add a variation — instead of "16 full bars, then silence."
8. **Audio architecture — sends, not a cluttered master.** Reverb and delay are **send/return
   buses**: each track has its own send amount into them, returning in parallel — never a wash
   across the whole mix. The master bus carries only "glue" (compression, EQ, limiter) plus the
   creative mix-bus effects (the filter draw-lane, sidechain pump). No reverb/ambience on the
   master. Chain: `track → vol/pan → [reverb send + delay send] + dry → MIX BUS → filter · EQ ·
   comp · limiter → out`. **Build-4 note:** the shipped reverb is currently a *master insert*
   (it predates this decision) — rebuild it as sends so the live demo matches.

---

## How to run it

1. **Everyone: Step 1.** Now the whole room has a working instrument.
2. **Pick a path.** Each turn = one branch prompt. Most groups get **2–3 branches deep — that
   is the point**, not a shortfall. The branches you don't reach = your take-home list.
3. **Everyone: Final Step (Share).**
4. Budget ~3 min/branch → Step 1 + ~3–4 branches + Share ≈ **45 min**.
5. ⚡ branches are opt-in "might not finish" — a break there is a planned teaching moment.

### The artifact model (how a group actually works)
- Run the whole relay in **one Claude.ai conversation** on **one shared device/account**. The
  first prompt (Step 1) makes an **Artifact**; every later prompt **edits that same artifact in
  place** — no re-pasting or re-attaching files. Pass the device on; the next person just types
  the next prompt.
- This is the *easy* case for one-shot success: Claude keeps the full history of what it built,
  so it's less likely to drop a feature than a cold rebuild would be.
- **Go back** = the artifact's **version history** (restore the previous version) or edit the
  prompt that broke it — see the go-back section.
- **Free-account note:** load is light *per person* (1–2 prompts each), but the **shared account
  carries the whole relay**. A long, growing-artifact conversation on a single free account can
  hit its usage cap near the end. The "2–3 branches deep" pacing keeps counts modest; if you can,
  run the shared machine on a **paid account**, or keep the last good artifact to continue later
  in a fresh chat.

## Build status

**9 trunks · ~56 possible branches · 7 shipped in build 4** — deliberately more than any
group can finish.

- ✅ Shipped (build 4): Step 1; Trunk A + A1; B1 Echo, B2 Reverb, B3 Filter sweep; C6 Swing.
- ⬜ Everything else is spec'd and ready to build.
- Flat time-ledger view: see [RELAY-BUILD-LOG.md](RELAY-BUILD-LOG.md).
