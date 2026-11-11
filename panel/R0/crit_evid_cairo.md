# Critic: Evidence (Cairo), R0

- Anchor used: How Charts Lie (Cairo): a figure is honest only if the reader can trace it to its source and reproduce it; omission misleads as much as distortion.
- Observed: all five fragments read line by line, CONTRIBUTING.md, git log (60a28d6 matches), PNG sizes (social-media-desk 1280x2580, matches). Byte sizes in evidence match `wc -c`.
- Findings:
  1. [claim] Evidence says "the SVG icons" render ~1000 px. True for 2 of 3: Instagram has width="24" height="24" (social-media.html:22) and draws at 24 px in both screenshots.
  2. [defect] Evidence omits that forms.html has no closing `</form>` (0 matches; file ends at :14).
  3. [defect] Omitted: Instagram SVG is aria-hidden="true" yet carries a `<title>` (social-media.html:22-23); X link labelled "X" draws the bird (:4-6).
  4. [defect] Omitted: maps src breaks across a newline with spaces before `&q=` (maps.html:5-6), so the URL is malformed even with a real key.
  5. [claim] CONTRIBUTING.md:16 "static site: no build step" is false: every fragment needs Tailwind. :38 cites a README that does not exist; :30/:37 cite tests that do not exist.
  6. [defect] Placeholder hrefs contain spaces (social-media.html:4,11,17) and resolve as relative URLs, so a click 404s on the host rather than failing visibly.
  7. [premise] "Overflow: none at 375" holds only because nothing is styled; it is no evidence of responsiveness.
- Verdict: OBJECT (evidence is accurate but incomplete; every checked number reproduced)
- Requested change: F1 say "2 of 3 icons"; F2-F4, F6 add to the defect inventory; F5 the redesign must rewrite CONTRIBUTING claims to match the code; F7 re-measure overflow only with styles loaded. Each redesigned fragment states its dependencies in-file.
