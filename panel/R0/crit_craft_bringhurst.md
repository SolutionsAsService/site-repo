# Critic: Craft (Bringhurst), round R0

**Anchor used:** *The Elements of Typographic Style*, §1.1: "Typography exists to honor content", with §2.1.2 (measure) and §2.2 (vertical rhythm).

**Observed:** Five fragments; no fragment sets a typeface, base size, line-height or measure. Unbuilt, they fall to UA defaults: forms-desk.png shows four placeholder fields and a button set inline; navbar-phone.png shows Times links, underlined, with the literal text "// Home Emoji" set as copy. forms.html also has no closing `</form>` tag.

**Findings:**
- F1 [defect] No typographic system: no type, size, leading or measure is defined; the host page decides everything.
- F2 [defect] Visible stray text "// Home Emoji" in navbar.html, which is editorial noise set as content.
- F3 [defect] Emoji used as wordmark and home link (🍏, 🏠), so a glyph stands in for words.
- F4 [defect] Placeholders do the work of labels in forms.html, and they vanish on entry.
- F5 [defect] Uppercase "OR" in dividers.html is unspaced. §3.2.2: letterspace strings of capitals.
- F6 [claim] Three classes (gray-dark-bg, text-navy, form-input-style) are named but never defined, so the implied hierarchy is invisible.
- F7 [premise] The brief asks for a "sandbox to see changes". A specimen without a measured text block cannot show what changes do.

**Verdict:** OBJECT

**Requested change:**
- F1: define one text face, a 16px base, about 1.5 leading and a 45–75 character measure as tokens.
- F2: delete the stray text.
- F3: use a real wordmark and the word "Home".
- F4: add visible labels.
- F5: letterspace small capitals 5–10%.
- F6: define the classes or remove them.
- F7: show each fragment beside real running text.
