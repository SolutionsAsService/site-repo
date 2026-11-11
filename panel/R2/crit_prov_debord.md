# R2 — Critic: Provocateur (Debord)

- Anchor used: The Society of the Spectacle, Thesis 1 (the lived moves away into representation) and Thesis 9 (the true as a moment of the false). I read the files, not the page that announces them.

- Observed: The nav-bar phone menu now repeats `data-slot="link"` and `"link current"` (parts/nav-bar.html:46-49). In `lib.mjs:31-33` there is no whitelist, and an exact-token test over all 18 parts finds every declared slot. AGENTS.md:16 now names the space-separated form. The four built templates link only to `#` ids that exist. `check.mjs:34` PROBES are quoted word for word on the part pages ("no target smaller than 24 px with another target within 24 px (links inside running text exempt)"). The part pages have a stage-note: "Previewed with tokens.css and a three-line reset". tokens.css holds 15 `--sr-` lines, so Start's "These 15 lines" holds. But in lagos-event, "Speakers" (#speakers) lands on a single `sr-quote`: Tunde Bakare, a CTO remembering a hiring demo. No speaker is named anywhere. Start's h1 and the first door promise "in five minutes", and the evidence defers the walkthrough with a real learner.

- Findings:
  - R1: F1, F2, F4 and F5 are resolved. F3 is resolved for links (no dead hrefs) but leaves a residue (F1 below).
  - F1 [claim] lagos-event: the nav label "Speakers" now resolves to a testimonial, not to speakers. The link works, but the page still does not have what the label names.
  - F2 [claim] "Your first part, in five minutes" is a timed promise that nobody has measured. The walkthrough is deferred.

- Verdict: PASS (narrow; every structural promise I tested holds; the two residues are wording).

- Requested change:
  - F1: rename the link (e.g. "Voices"), or have the template give #speakers a real speakers section.
  - F2: drop "in five minutes" (e.g. "Your first part, step by step") until a learner has timed it.
