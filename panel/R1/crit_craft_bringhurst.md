# Critic: Craft (Bringhurst), round R1

**Anchor used:** *The Elements of Typographic Style*: "Typography exists to honor content"; a measure of 45–75 characters; leading chosen to suit face, text and measure.

**Observed:** tokens.css now sets measure (65ch), leading (1.55) and three faces, so the R0 faults are gone: labels are visible, "or" is letterspaced, quotes are curly and figures are tabular. The site's Archivo/Plex hierarchy is clear (agents_html-desk.png). Remaining faults:
- index_html-phone.png: three tabs are cut off ("Navigation …", "Map and ad…", "Footer with …").
- parts_contact-form_html-desk.png: the .chk note (90ch at 14.5px) runs to about 110 characters a line. .prose is 76ch.
- templates_mexico-portfolio_html-desk.png: the hero em (italic on a reversed block) strands "se" at the end of line 1 and leaves the period outside the block.
- site.css uses about 12 sizes, including 12.5 and 14.5.
- The kicker "NO. 13" sits beside the code "D1".

**Findings:**
- F1 [defect] Part names are truncated on the phone landing.
- F2 [defect] The check note's measure exceeds 75 characters, and .prose is set at 76ch.
- F3 [defect] The hero uses double emphasis, which breaks badly across lines. Change one parameter at a time.
- F4 [claim] The type sizes follow no scale.
- F5 [claim] Two numbering systems (D1, No. 13) muddy the hierarchy.
- F6 [premise] The miniatures set text at about 4 px. I read them as pictures, not type.

**Verdict:** PASS. The system now honours the text. F1–F3 are local repairs.

**Requested change:**
- F1: wrap the tabs, or use short titles.
- F2: set .chk and .prose to 65ch.
- F3: use italic alone, or box-decoration-break: clone with the period inside.
- F4: use one modular scale (12/14/16/18/22/28).
- F5: drop "No. 13".
- F6: none.
