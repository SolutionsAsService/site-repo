# R0 evidence: premortem on the inherited site-repo (commit 60a28d6)

Artifact: /home/user/site-repo
- 5 HTML fragments: navbar.html (776 B), forms.html (1029 B), dividers.html (246 B), maps.html (282 B), social-media.html (3427 B)
- plus LICENSE and CONTRIBUTING.md
- No index page, no README, no preview, no metadata, no tests.

Screenshots: panel/R0/<fragment>-desk.png (1280) and -phone.png (375), full page. Each fragment was wrapped in a minimal HTML page with the Tailwind Play CDN script. That CDN is unreachable from this sandbox (request failed), so the screenshots show what a user gets when they paste a fragment into a page without a Tailwind build. That is the default for a copy-paste library.

Measured with Playwright:
- social-media.html
  - The SVG icons have only Tailwind sizing classes (h-6 w-6). Without Tailwind they render about 1000 px wide. The page is 2580 px tall at 1280.
  - The "X / Twitter" icon is the retired Twitter bird path.
  - The hrefs are "YOUR TWITTER LINK", "YOUR FACEBOOK LINK" and "YOUR INSTA LINK".
- forms.html
  - 4 inputs (Your Name, Your Email, Subject, Message). Placeholder only; 0 of 4 have a label or aria-label.
  - action="/api/contact" (no backend in the repo).
  - Uses the classes form-input-style and submit-button, which are defined nowhere in the repo.
- navbar.html
  - Uses gray-dark-bg and text-navy, defined nowhere.
  - Links to ../index.html, overview.html, services.html and contact.html, none of which exist.
  - The home link's text is an emoji (🍏) with no accessible name.
  - A stray line after the header: `<a href="../index.html" ...>🏠</a>   // Home Emoji`. The `//` is a JS-style comment in HTML, so it renders as visible text.
- maps.html: a Google Maps Embed iframe with key=YOUR_GOOGLE_MAPS_API_KEY. The request fails. The iframe has no title.
- dividers.html: an "OR" divider; Tailwind only.
- No fragment has a lang, a viewport, tokens or a theme. Nothing says what each one needs (Tailwind version, custom classes, backend).
- Overflow: none at 375 (scrollWidth 375). The pages are mostly unstyled, so there is nothing to overflow.

The owner's brief (verbatim): "next sute to redo is https://github.com/SolutionsAsService/site-repo Should eb a place for humans and agents to get template shit for building websites with a little sandbox or something to see chnages idk design good dada project"
