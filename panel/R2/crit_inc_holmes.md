# Critic: Inclusion (Holmes), R2

**Anchor used:** Kat Holmes, *Mismatch*: exclusion is a mismatch, and a fix for one constraint (permanent, temporary or situational) extends to many.

**Observed:** On the phone landing (index_html-phone.png), the lede shows and the doors read as plain verbs. In site/index.html, `piece-link` holds only the tab text, and the preview sits beside it in `span aria-hidden="true"` with an `inert` iframe. Names wrap. The part page glosses X-ray as "(no styles, elements and slots labelled)". "Sprue" is gone from the text. src/site.css:191 hides the Bare gloss at 640px and below, and index-bare-phone.png shows red boxes with no explanation. At 640px and below, `display:contents` plus `order` puts the frame visually above the doors, while the DOM order is doors, then frame.

**R1 status:** F1, F2 and F3 are resolved. F4 is resolved on desktop and the part pages, but not on the phone (new F1).

**Findings:**
- F1 [defect] "Bare" is unglossed on the phone. Someone who presses it sees 18 red diagrams with no words.
- F2 [claim] On the phone, the visual order and the focus order differ (WCAG 1.3.2 and 2.4.3). This is a mismatch for magnifier users and keyboard users.
- F3 [premise] The named learner, Amara, is untested because the walkthrough is deferred. The newcomer path is still a guess.

**Verdict:** PASS. The R1 exclusions are fixed, and F1 is a small fix.

**Requested change:**
- F1: show a short gloss on the phone ("Bare: no styles, parts labelled"), or set it as the button's aria-describedby.
- F2: put the frame before the doors in the source, or drop the reorder.
- F3: run one session with a real non-developer.
