# R1 evidence: WHOLE round on the rebuilt site-repo (moves M1–M9; commit a82970b)

Artifact: /home/user/site-repo
- Source: parts/*.html (18), templates/*.json (4), tokens.css, themes.json, build/*.mjs, src/*.
- Built site: site/. It may be served at http://localhost:8830/ during this round. If not, open the files, or run `npx serve site` or `python3 -m http.server -d site`.

Screenshots in panel/R1/ (open with Read):
- index_html-desk.png (1280x800) and index_html-phone.png (375x812): first screens.
- index-night-desk.png and index-night-phone.png: the landing after pressing the Night theme.
- parts_contact-form_html-*.png: a part page.
- xray-pricing-desk.png and xray-pricing-phone.png: the X-ray view of the Pricing part.
- sandbox_html_t_lagos-event-*.png: the sandbox with the Lagos event template loaded.
- templates_index_html-*.png, templates_mexico-portfolio_html-*.png (a Spanish template), parts_index_html-*.png, agents_html-*.png.

Measurements: `node build/check.mjs`, run after the last edit, gave 11/11 checks and 18/18 parts. Raw results are in panel/R1/checks.json, and the instrument's code is build/check.mjs.
- Instrument: build/fixtures/bad-part.html fails every probe (overflow, label, target, contrast, focus).
- Each part was rendered alone at 375, 768 and 1280 in 4 themes (Paper, Night, Citrus, Slab). The probes: no sideways scroll, every field labelled, targets 24 px or spaced, a visible focus outline after a real Tab (first theme), and text contrast of 4.5:1 (3:1 large) against the nearest opaque background, with opacity composited. 18/18 pass.
- Map part: its iframe has tabindex=-1. Chromium shows no focus ring on a focused iframe, and neither :focus nor :focus-within matched; that was measured. Its keyboard equivalent is the visible "Open in OpenStreetMap" link.
- Templates: 4 pass the probes at 375 and 1280, and their lang matches (en, en, es, en).
- Site: internal links resolve (28 pages). No sideways scroll and no script error on 24 own pages at 1280 and 375.
- First screen at 1280x800: the hero (h1, sprue, themes, the four doors) ends at y=654, with 18 pieces and all 7 groups shown.
- First screen at 375x812: it ends at y=777, with 7 pieces (one per group), all 7 groups, the "All 18 parts" link and the 4 doors.
- The landing theme switch re-themes 18 of 18 miniatures.
- Sandbox, with the Lagos template (8 parts): the preview srcdoc equals the textarea (the copied page). X-ray changes the preview but not the code. The Citrus preset rewrites the tokens in the code, and the preview still equals the copy.
- The registry: 18 raw files match their sha256.

Facts:
- 18 parts in 7 groups: A Navigation 2, B Heroes 2, C Content 8, D Forms 2, E Places 1, F Dividers 2, G Footers 1.
- 15 tokens, 4 themes and 4 templates, set in Fremantle, Lagos, Mexico City (Spanish), and a fictional notes app.
- Parts need no script, library or key. Exceptions: the contact form and the email signup need a POST endpoint (example.com placeholders, marked as data-slot="endpoint"), and the map tiles need openstreetmap.org.
- Agent doors: /registry.json, /llms.txt, /raw/parts/<id>.html, /raw/tokens.css, /raw/themes.json, /preview/<id>.html, and AGENTS.md in the repo.
- Old files deleted: navbar.html, forms.html, dividers.html, maps.html and social-media.html. CONTRIBUTING was rewritten, and README and AGENTS.md were added.

Known limits, for your judgement:
- The sandbox editor is a plain textarea with no syntax colouring.
- The miniatures on the landing are live iframes (18 loads).
- The phone landing shows one part per group plus a link to all 18.
- The social icons are drawn generic marks, not official logos. The part says so.
