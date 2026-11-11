# Critic: Inclusion (Mace), R0

- Anchor used: Mace et al., Principles of Universal Design: P4 Perceptible Information and P5 Tolerance for Error. Measured with WCAG 2.2.
- Observed: fragment source; forms-phone.png, navbar-desk.png.

Findings:
- F1 [defect] forms.html: placeholder-only fields, 0 of 4 labelled. `</form>` is missing.
- F2 [defect] Focus: in forms.html, `focus:outline-none focus:ring-2` puts a box-shadow ring in place of the outline, and forced colours drops box-shadow. The nav and social links have no focus style.
- F3 [defect] 2.5.8: unstyled inputs are about 21 px tall. The nav links are about 4 px apart (navbar-desk.png).
- F4 [defect] Names: 🍏 and 🏠 are announced as emoji. The X link carries the retired bird glyph. The maps iframe is untitled.
- F5 [defect] Colour alone: the active link is shown by `text-navy` and weight, with no aria-current. Social-link hover is a colour change only.
- F6 [defect] navbar.html shows "// Home Emoji" as visible text.
- F7 [premise] No fragment says what access support it needs (lang, reduced motion for `transition`, forced colours).

- Verdict: OBJECT

Requested change:
- F1: Give every field a visible `<label for>`. Close the form.
- F2: Use `:focus-visible` with a 2px solid outline and 2px offset, and verify it under `forced-colors: active`.
- F3: Give each target a 44px min-height and keep at least 24px between targets.
- F4: Set emoji `aria-hidden` and give each link a text name. Use the current X glyph. Give the iframe a `title`.
- F5: Add `aria-current="page"` with an underline. Underline on hover and focus.
- F6: Delete the stray line.
- F7: Give each fragment an access note. Let the sandbox switch on forced colours and reduced motion.
