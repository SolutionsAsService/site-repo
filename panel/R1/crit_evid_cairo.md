# R1 Critic: Evidence (Cairo)

- Anchor used: How Charts Lie (Cairo): a figure is honest only if a reader can get it again from the stated method, and its caption claims no more than the method measured.
- Observed: My run of `node build/check.mjs` gave 11/11 and 18/18, and every detail matches evidence.md (654/777 px, 18 and 7 pieces, 28 and 24 pages, 18/18 themed, sandbox true). The run rewrote build/checks.json; site/ publishes the 16:21:46Z run, with identical results. My own probes: 18 parts pasted bare (no tokens or base CSS, light and dark hosts, 375 px) all pass. Stricter thresholds (no spacing or inline exemption, 4.5:1 everywhere) also pass, in 4 themes at 375 and 1280. The registry sha256 values match parts/*.html. The 44 px and 2.2rem claims hold, and so do the counts.
- Findings:
  1. [defect] README.md:33 says "no dependencies", but check.mjs:12 falls back to /opt/node22/...playwright and package.json lacks Playwright. A clean clone cannot reproduce 18/18.
  2. [claim] The part-page line (build.mjs:81) claims a focus ring "in 4 themes". check.mjs:135 probes Paper only.
  3. [claim] The same line says "24 px or more" and "4.5:1 or better". The probe allows spacing, inline links and 3:1 (check.mjs:49,79). It is true in practice, but the line misdescribes the instrument.
  4. [claim] The comment at check.mjs:93 (":focus-within ring is what the eye sees") contradicts the evidence's measurement.
  5. [claim] AGENTS.md:19 says every declared slot must exist. lib.mjs:32 exempts current, featured and brand-href.
  6. [premise] The registry sha check (check.mjs:224) compares the build with itself, so it cannot fail.
- Verdict: OBJECT
- Requested change: F1 add Playwright to devDependencies with an install step, and drop the hard path. F2/F3 make the line state the probe. F4 fix the comment. F5 document or remove the exemptions. F6 hash parts/ instead.
