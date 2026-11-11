# R2 evidence: WHOLE round after the R1 resolutions (moves M10–M13; commit after 163232b)

Artifact: /home/user/site-repo
- Built site: site/. Serve it with `python3 -m http.server <port> -d /home/user/site-repo/site`.
- Source: parts/, templates/, build/, src/.
- **Do not run build.mjs.** check.mjs is safe; it rewrites only build/checks.json.

Screenshots in panel/R2/ (open with Read):
- index_html-desk.png and index_html-phone.png: first screens. Web fonts are loaded.
- index-bare-desk.png and index-bare-phone.png: after pressing Bare.
- index-slab-desk.png and index-slab-phone.png: after pressing Slab.
- parts_hero-statement_html-*.png, start_html-*.png and templates_lagos-event_html-*.png.

Measurements: `node build/check.mjs` was run after the last edit, with 12/12 checks and 18/18 parts. Raw results are in panel/R2/checks.json. The check blocks web fonts and map tiles, so it measures with fallback fonts.
- Focus is now probed in **every theme**. Each focused element must show an outline of 2 px or more at 3:1 or better against the surface behind it. R1 probed Paper only and missed hero-statement.
- hero-statement's ring is now `--sr-paper` with a 3 px offset on the ink band. It passes in all 4 themes.
- First screen at 1280x800: the bottom is at 751, with 18 pieces, 7 groups and 5 doors.
- First screen at 375x812: the bottom is at 792 with fallback fonts and 743 with web fonts (measured separately). It shows 7 pieces (one per group), the "All 18 parts" link, the theme and view switches and 5 doors.
- Bare re-labels all 18 miniatures and Built restores all 18.
- The theme switch re-themes 18 of 18.
- Sandbox: the preview equals the copy; X-ray changes the preview only; the tokens rewrite the code.
- Templates: every in-page link (#...) has a target on its page, and lang is correct.
- Registry: each sha256 matches the source in parts/, and each raw file is byte-identical to its source.
- Site: 25 own pages have no sideways scroll and no script error at 1280 and 375. Internal links resolve (29 pages).
- The part pages now quote the probes' exact wording (build/check.mjs PROBES).

Changes since R1 (DESIGN-LOG M10–M13):
- M10 (BREAK, the S4 push): the Theme and View switches sit on the sprue's own bar. "Bare" X-rays all 18 pieces in place.
- M11: a Start page for a first-time person (the named learner: Amara, a bakery owner who edits her site in a free host's HTML editor). It is in the nav and is the first door.
- M12:
  - Previews moved out of their links, and are aria-hidden and inert. Each link is the tab, stretched over the tile.
  - Names wrap instead of truncating, and the doors read "Start here", "Pick a part", "Assemble a page", "Copy a template" and "Fetch as an agent".
  - On the phone the doors show without their detail line and with a one-line lede.
  - "Sprue" is no longer used in text; the frame is called "the frame".
  - Copy code is in the part toolbar. X-ray is glossed as "(no styles, elements and slots labelled)".
  - A note says the preview adds tokens.css and a 3-line reset.
  - "No. nn" dropped; measures at 65ch; the hero emphasis is cloned across lines, with the period inside.
  - Small parts render at a narrower virtual width.
- M13:
  - The slot exemptions are removed. nav-bar marks `data-slot="link current"`, and the phone menu links carry slots. Pricing marks `data-slot="plan featured"`.
  - Template nav links now point to sections on the same page, which get ids from the template.
  - Playwright is a pinned devDependency; the machine path is removed and the check exits with an instruction if Playwright is missing.
  - The registry check hashes parts/.
  - The stale comment is corrected.
- Overruled: Walters F3 (vary the part defaults). The parts share one sample business so they compose; the variety is in the templates.
- Deferred: a walkthrough with a real learner; one type scale (Bringhurst F4).
