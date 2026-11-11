# R2 Critic: Evidence (Cairo)

- Anchor used: How Charts Lie (Cairo). A figure is honest only if a reader can get it again from the stated method, and its caption claims no more than the method measured.
- Observed: I ran `node build/check.mjs` myself. It gave 12/12 and 18/18, and every detail matches evidence.md (751/792 px, 18 and 7 pieces, 29 and 25 pages, 18/18 themed, Bare 18/0, sandbox true). Its part results equal panel/R2/checks.json. The part-page line, agents.html and registry.checks quote PROBES verbatim (build.mjs:81, check.mjs:34). My own probes: all slots are exact with no exemptions; no part is near the 30-Tab cap; no part relies on the running-text exemption; the Start page's "15 lines" equals the 15 tokens in tokens.css.
- R1 status: F1 resolved (pinned devDependency, check.mjs:12-15 exits with an instruction, node_modules ignored). F2, F3, F4, F5 and F6 are resolved (check.mjs:144, 34, 104, 250; AGENTS.md:19).
- Findings:
  1. [claim] parts/stats.html:2 says "A number without a source line is not allowed by the check." check.mjs has no such probe, and the claim ships to llms.txt:19, the registry and the part page.
  2. [claim] check.mjs:2 says "every probe first runs on a fixture built to fail it". The fixture fails focus only by `outline:none`. The new 3:1 ring branch (check.mjs:111) never meets a failing case.
  3. [defect] lib.mjs:32 uses `\b`, so slot "brand" would pass on `data-slot="brand-href"`. AGENTS.md:19 promises that the build fails. It is latent for now.
  4. [premise] The 743 px web-font figure has no script that reproduces it.
- Verdict: OBJECT (F1 only; the rest is minor)
- Requested change: F1 add a probe or drop the sentence. F2 add a fixture element with a low-contrast 2 px ring. F3 split the values on whitespace. F4 record the method, or drop the number.
