# CTW-projects — Compton Tech Week: The Beat Relay

Workshop deliverables built by prompting. **Live site:** https://chi-65.github.io/CTW-projects/

## Files
- `index.html` / `drum-machine.html` — a self-contained 16-step drum machine (Web Audio API).
  Features: kick/snare/hi-hat/clap + open-hat + cowbell, preset beats, tempo-synced
  delay with per-instrument sends, a drawable low-pass/high-pass filter automation lane,
  swing, reverb, a "Surprise Me" randomizer, and a microphone Sampler track with pitch.
  `index.html` is the landing page so the site hosts directly on GitHub Pages;
  `drum-machine.html` is an identical copy kept under its descriptive name.
- `build-relay-kit.html` — printable facilitator guide + attendee take-home handout
  (the relay prompt sequence, plus how to keep building and self-host).

## Notes
- The Sampler mic needs the page served as its own hosted **https** page (mic is blocked
  inside embedded artifact previews, and Chrome Remote Desktop does not forward a local mic).
  Once GitHub Pages is live, open the site on a phone to test the Sampler mic.
