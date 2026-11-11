# R0 — Critic: Provocateur (Debord)

- Anchor used: The Society of the Spectacle, Thesis 1 (the lived moves away into representation) and Thesis 4 (a social relation mediated by images). A template library is a set of promises; I check each against the files.

- Observed: navbar.html links overview/services/contact.html and ../index.html, none present; `// Home Emoji` renders as text (navbar-desk.png). forms.html posts to /api/contact (no backend), uses undefined classes, and never closes `</form>`. maps.html: key=YOUR_GOOGLE_MAPS_API_KEY. social-media.html: hrefs "YOUR TWITTER LINK"; aria-label "X" on the retired bird. CONTRIBUTING.md claims "static site", "npx serve .", tests, "data corrections", README; evidence: none exist.

- Findings:
  - F1 [claim] CONTRIBUTING describes a site; the repo is five loose fragments.
  - F2 [claim] navbar promises four pages that do not exist: an image of navigation.
  - F3 [claim] "Send Message" has no receiver and an unclosed form: an image of contact.
  - F4 [claim] "X" label on the Twitter bird: sign detached from referent.
  - F5 [defect] Undeclared dependencies (Tailwind, custom classes, API key): pasted, a fragment shows something else (1000 px icons).
  - F6 [premise] The brief's "sandbox to see changes" becomes pure spectacle if its preview looks better than the pasted source can.

- Verdict: OBJECT

- Requested change:
  - F1: CONTRIBUTING describes what exists, or the repo builds it.
  - F2: links resolve, or are visibly marked placeholders.
  - F3: close the form, state the backend contract, add labels.
  - F4: current X glyph, or drop it.
  - F5: each template lists its requirements beside it.
  - F6: the sandbox renders the exact copyable source with no hidden build, and shows what breaks without its dependencies.
