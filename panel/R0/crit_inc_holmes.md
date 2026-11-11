# Critic: Inclusion (Holmes), R0

**Anchor used:** Kat Holmes, *Mismatch*: exclusion is a mismatch between a person and a design. Fix it for one person, then extend the fix to many.

**Observed:** In forms-phone.png the placeholders are the only names, and forms.html never closes the form. In navbar-phone.png "// Home Emoji" shows as text. CONTRIBUTING.md says "no build step", but the fragments need Tailwind and classes that are never defined.

**Findings:**
- F1 [defect] None of the 4 fields has a label. The name vanishes once typing starts for screen-reader, voice-control and distracted users.
- F2 [defect] The home links are emoji. Screen readers announce them as "green apple" and "house". That is a wrong name, not a missing one; the evidence overstates this.
- F3 [defect] aria-label="X" on a bird icon tells the ear and the eye two different things.
- F4 [defect] The map iframe has no title and a placeholder key, so users get an unnamed, empty frame.
- F5 [premise] The fragments work only for people who already know Tailwind and the authors' classes. Newcomers and agents get 1000 px icons and dead links.
- F6 [claim] The "OR" divider has no semantics tying it to the choices around it.
- F7 [premise] The brief asks for "humans and agents", but nothing states what each part needs or does.

**Verdict:** OBJECT

**Requested change:**
- F1: add visible labels.
- F2: give each home link a text name.
- F3: use the X glyph.
- F4: add a title and a fallback link.
- F5: make each part self-contained, or list its dependencies.
- F6: mark the divider as a labelled separator.
- F7: give each part a plain-language card that serves agents too.
