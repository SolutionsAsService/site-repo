# Critic: Inclusion (Mace), R1

- Anchor used: Mace et al., Principles of Universal Design: P4 Perceptible Information and P5 Tolerance for Error. Measured with WCAG 2.2 (2.4.7, 1.4.11, 2.5.8).
- Observed: Playwright Tab presses against `python3 -m http.server` on site/. Landing at 1280 and 375, plus forced-colors: active: 37 stops, each with a 3px solid outline and no clipping. Part page contact-form: 30 stops, including 5 inside the preview. Sandbox #t=lagos-event: 66 Tabs reach #sb-code, and Tab leaves it again; no trap. Every part was then tested in all 4 themes, measuring the focus outline against the surface behind it.

Findings:
- F1 [defect] hero-statement, `.sr-state a:focus-visible{outline:3px solid var(--sr-accent)}` on the `--sr-ink` band. The outline-to-band contrast is 1.00:1 in Slab (#000 on #000), so no ring shows. It is 1.78:1 in Night and 2.68:1 in Paper, below 3:1.
- F2 [premise] The evidence says check.mjs probes focus in the first theme only. That is how F1 passed as "18/18".
- F3 [claim] The other 17 parts measure 5.0:1 or better in every theme. Site chrome uses `--focus #141518` on paper.
- F4 [claim] On 2.5.8, no target under 24px has a neighbour inside its 24px circle. The smallest are "Kit" (18x35) and the X-ray checkbox (18x18, inside a 65x36 label).
- F5 [claim] Under forced colours the outline survives on the landing, which fixes R0 F2. Reduced motion stops the hover transforms (site.css:190).
- F6 [claim] Every R0 defect I raised against the deleted fragments is gone with them (R0 F1, F3–F6).

- Verdict: OBJECT (F1 only)

Requested change:
- F1: In hero-statement, set the focus outline to `var(--sr-paper)` with a 3px offset, or use a two-tone ring (paper outline plus an ink box-shadow). Re-measure at 3:1 or better in all 4 themes.
- F2: Run check.mjs's focus probe in every theme and measure the outline's contrast against the surface it sits on.
- F3–F6: none.
