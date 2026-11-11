# R1 — Critic: Provocateur (Debord)

- Anchor used: The Society of the Spectacle, Thesis 1 (the lived moves away into representation) and Thesis 9 (the true as a moment of the false). I test each promise against the files, not the page that announces it.

- Observed: I rendered all 18 raw parts with the header removed, alone in a bare document (no tokens, no reset) at 375/768/1280: no sideways scroll, and every `var()` has a fallback. The part-page Copy text equals `parts/<id>.html` minus its header for 18 of 18. `sandbox.js:113` copies `code.value`, the same text as the srcdoc. But in `nav-bar.html:36-41` the folded phone menu repeats the four links with no `data-slot`. `lib.mjs:32` exempts `current|featured|brand-href` from the slot test, though AGENTS.md says "the build fails otherwise". In `lagos-event.json`, "Speakers" still points to `/about` and "Programme" to `/services`, and neither page exists. `check.mjs` skips `/` links. The part pages say "targets of 24 px or more", but the probe also passes spaced targets and inline links.

- Findings:
  - F1 [defect] Nav-bar: the phone menu's links are filled by no slot. If you fill the slots, the phone menu still shows the sample links.
  - F2 [claim] "Every slot … must exist as data-slot; the build fails otherwise" is false for three named slots, which are whitelisted.
  - F3 [claim] The templates rename the links but keep the garden site's hrefs. The labels point to pages that do not exist, and the checker exempts these links.
  - F4 [claim] The part pages promise "24 px or more"; the probe measures something looser.
  - F5 [premise] The part-page preview adds a reset (box-sizing, body margin) that is not in the copy. This is cosmetic, but it is not the copy itself.
  - R0: F1, F3, F4, F5 and F6 are resolved. F2 is partly resolved: within a part, a site-root link is a declared slot, but the templates still lead to pages that do not exist (F3).

- Verdict: OBJECT (narrow; the core promises hold).

- Requested change:
  - F1: mark the menu links `data-slot="link"`, or generate them from the wide list.
  - F2: drop the whitelist, or correct AGENTS.md to name attribute slots.
  - F3: set template hrefs to `#` anchors or sections that exist.
  - F4: quote the probe's own wording.
  - F5: label the preview "with tokens.css and a reset", or drop the reset.
