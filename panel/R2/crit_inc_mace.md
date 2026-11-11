# Critic: Inclusion (Mace), R2

- Anchor used: Mace et al., Universal Design P4 (Perceptible Information): an unseen cue is no cue. Measured with WCAG 2.4.7 and 1.4.11.
- Observed: Playwright pressed Tab through each page in all 4 themes, measuring the ring's pixels against the surface just outside it.
  - Landing: 41 stops at 1280, lowest 14.62:1; 30 stops at 375, lowest 4.71:1. Built and Bare show an ink ring, and a system-colour ring under forced colours.
  - Start: 16 stops at 16.15:1.
  - Sandbox: 69 stops, all 3.22:1 or better.
  - Part page hero-statement: 29 stops.

Findings:
- F1 [claim] R1 F1 is fixed. The hero-statement ring measures 16.99 (Paper), 15.04 (Night), 16.78 (Citrus) and 21:1 (Slab).
- F2 [defect] The "Copy" button on all 18 part pages fails. `.code .copy` (site.css:136) has a ring of `--focus #141518` with a 2px offset. It sits on `.code pre`, which is `--ink #141518`, so the ring is 1.00:1 in every theme and at both widths. No ring is visible.
- F3 [premise] The evidence says "focus probed in every theme". That is true for the parts only. check.mjs does not focus-probe the site's own pages, so F2 passed 12/12.
- F4 [claim] On the sandbox in Citrus, the newsletter controls in the scaled preview reach 3.22:1, at the floor.

- Verdict: OBJECT (F2)

Requested change:
- F2: Give `.code .copy:focus-visible` a ring in `--paper`, or a two-tone ring. Re-measure at 3:1 or better.
- F3: Run the focus probe on the landing, Start, part and sandbox pages.
- F1, F4: none.
