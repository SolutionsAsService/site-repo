# Critic: Craft (Bringhurst), round R2

**Anchor used:** *The Elements of Typographic Style*: "Typography exists to honor content"; a measure of 45–75 characters; "choose a scale"; avoid widows in short text.

**Observed:** the R1 faults F1, F2, F3 and F5 are repaired. Names wrap on the phone.
- parts_hero-statement_html-desk.png and templates_lagos-event_html-desk.png: the emphasis is cloned and the period sits inside.
- "No. nn" is gone.
- .chk and .prose are set at 65ch (site.css:115, 150). But ch is the width of the zero, so a .chk line runs to about 80 characters.
- start_html-phone.png: the step numerals "1." to "3." sit at x≈0, past the 16 px gutter. On the desk they sit outside the 36 px edge. The cause is `.steps-h` padding-left 1.4em against a 22 px marker (site.css:118–119).
- index_html-desk.png: the door details strand single words ("then copy / it", "live / previews").
- The sizes have grown to about 17, among them 12.5, 13.5 and 14.5 (deferred F4).

**Findings:**
- F1 [defect] On start.html the step numerals hang beyond the page margin on the phone and touch the screen edge.
- F2 [defect] The door detail lines on the desktop landing end in widows ("it").
- F3 [claim] 65ch in the body face gives about 80 characters, so .chk is still long.
- F4 [claim] There is still no type scale, now with 17 sizes. The deferral is noted, not accepted.
- F5 [premise] Miniatures are read as pictures, as in R1.

**Verdict:** PASS. The text is honoured, and what remains is local.

**Requested change:**
- F1: `padding-left: 2.2em` on the phone, or hang the numerals only within the gutter.
- F2: `text-wrap: balance` (or `pretty`) on `.assembly a span`, or shorten "in the sandbox, then copy it".
- F3: set .chk to `max-width: 34em`.
- F4: one scale (12/14/16/18/22/28/…); fold 12.5, 13.5 and 14.5 into it.
- F5: none.
