# Critic: Usability (Krug), R0

- Anchor used: Don't Make Me Think (Krug): the five-second test, the trunk test, and "omit needless words".
- Observed: there is no index or README (evidence). CONTRIBUTING.md says to run `npx serve .`, which gives a directory listing. social-media-desk.png shows a 1000 px bird. navbar-phone.png shows "🏠 // Home Emoji" as visible text. forms.html never closes `</form>`.

Findings:
- F1 [defect] Five-second test fails for both users. The first screen is a file list: no "what is this", no next step.
- F2 [defect] The first action, pasting a fragment, fails. Nothing says Tailwind is required, so you get giant icons and an unstyled form.
- F3 [defect] The navbar fails the trunk test: four dead links, and home is an emoji with no name.
- F4 [defect] An agent can't tell placeholders from values: "YOUR TWITTER LINK", the Maps key, undefined classes, /api/contact.
- F5 [defect] The form has no labels (0 of 4) and no `</form>`.
- F6 [premise] Two users need two front doors. One page serving both makes each of them decode.
- F7 [claim] My blind spot: I may flag intended DADA strangeness as friction.

Verdict: OBJECT

Requested change:
- F1: Open with one sentence ("Copy-paste website parts") and a preview of every part.
- F2: Give each part a live preview, a copy button and its requirements.
- F3: Real links, a named home link, and delete the stray line.
- F4: Mark slots with `{{tokens}}` and add a JSON manifest of dependencies.
- F5: Add labels and close the form.
- F6: A gallery for humans and a manifest for agents, built from one source.
- F7: none
