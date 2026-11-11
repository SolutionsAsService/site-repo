# R0 · Critic: Erasure (Kelly Walters)

**Anchor used:** Black, Brown + Latinx Design Educators (Kelly Walters): a resource teaches only if a student without insider context can enter it.

**Observed:**
- CONTRIBUTING.md says "static site: no build step", but every fragment depends on Tailwind classes. social-media-phone.png shows what a newcomer gets: icons about 1000 px wide.
- forms.html, navbar.html: the classes form-input-style, submit-button, gray-dark-bg and text-navy are defined nowhere. forms.html also has no closing `</form>` tag.
- forms.html: placeholder-only inputs, 0 of 4 labelled. navbar.html: an emoji link with no name.
- No README, no index, no lang. The setup path assumes Node (`npx serve .`).
- The only examples are US-English: "Your Name", "123 Orchard Lane, Farmington UT", X/Facebook/Instagram.

**Findings:**
- F1 [defect] Hidden prerequisites (Tailwind, custom classes, a backend, a Maps key) teach only students who already know them.
- F2 [defect] Unlabelled inputs and nameless links leave screen-reader users out. A copy-paste library spreads that to every site built from it.
- F3 [defect] The docs contradict the code ("no build step"), so a beginner blames themselves.
- F4 [claim] One locale and one platform set imply one kind of user, site and community.
- F5 [premise] The brief says "humans and agents". Nothing yet shows who the human learner is.

**Verdict:** OBJECT

**Requested change:**
- F1: give each template a "Needs:" line and a working preview that runs without prior setup.
- F2: add labels and accessible names as the taught default.
- F3: correct CONTRIBUTING to match the code.
- F4: vary the example content (names, addresses, languages, platforms) and add `lang`.
- F5: name a first-time learner persona; test with one.
