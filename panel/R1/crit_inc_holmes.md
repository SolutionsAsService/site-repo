# Critic: Inclusion (Holmes), R1

**Anchor used:** Kat Holmes, *Mismatch*: exclusion is a mismatch. A fix for one constraint (permanent, temporary or situational) extends to many.

**Observed:** contact-form has visible for/id labels and "(required)" in text. footer-social has text names and aria-hidden icons. map-embed has a title, an address as text and an OSM link. divider-or uses role=separator. AGENTS.md and the registry's `needs`/`a11y` explain each part. On the phone landing, src/site.css lines 172 and 182 hide the lede and the door subtitles, which leaves "Pick / Assemble / Start / Fetch" (index_html-phone.png). Tabs read "Navigation …" and "Map and ad…". site/index.html nests 18 preview iframes (titled, tabindex=-1, not aria-hidden) inside `<a class="piece-link">`.

**R0 status:** F1–F7 are resolved. F5: the parts are self-contained, with fallbacks and `needs`. F7: AGENTS.md, llms.txt and the part headers.

**Findings:**
- F1 [defect] The phone hides the only sentence that says what this is. A newcomer sees four bare verbs and the unglossed word "sprue".
- F2 [defect] Each miniature is a whole document inside a link. A screen reader can browse into it and read a form's fields or a nav's links inside one link, 18 times over. An iframe inside `<a>` is also invalid HTML.
- F3 [defect] The phone tab names are cut off by an ellipsis, so the full name never shows.
- F4 [claim] "Sprue", "X-ray" and "tokens" are not glossed where they appear. The X-ray checkbox on the part pages has no explanation.

**Verdict:** OBJECT (narrow: the parts themselves now include people well)

**Requested change:**
- F1: show a one-line lede and the door subtitles on the phone.
- F2: add aria-hidden="true" or inert to the preview iframes, or use static images. The tab text already names each link.
- F3: let the tabs wrap to two lines.
- F4: add a short inline gloss, for example "X-ray: the part without styles, with every element labelled".
