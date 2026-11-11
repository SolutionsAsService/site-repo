# Critic: Provocateur (Shklovsky), round R0

- **Anchor used:** Shklovsky, *Art as Technique*: habit devours things; the device exists to make the stone stony, to slow perception down and make it hard.
- **Observed:** The five fragments are the most habitual objects on the web: a navbar, a form, an "OR" rule, a map, social icons. Nothing in their markup is strange. The only estrangement in the repo is an accident. In social-media-desk.png, with no Tailwind, the retired Twitter bird and the Facebook "f" render about 1000 px wide (page 2580 px tall), and the Instagram glyph survives at 24 px beside them. In navbar-desk.png the comment "// Home Emoji" prints as visible text.
- **Findings:**
  - F1 [defect] Every fragment is a habitual pattern (SaaS header, placeholder form, icon row). Nothing defeats automatic perception.
  - F2 [claim] The strangest device in the repo is the accident: a giant bird, a giant "f", a tiny Instagram mark. It is buried, unnamed and unintended.
  - F3 [defect] The "YOUR TWITTER LINK" hrefs and the bird under the label "X" show automatism and no attention.
  - F4 [premise] The brief asks for "a little sandbox to see changes". The sandbox is the place for estrangement, because it shows a component stripped of the style it depends on, as these screenshots do.
- **Verdict:** OBJECT
- **Requested change:** F1: let each template keep one device that slows the eye; drop the stock look. F2: make the unstyled state a deliberate sandbox view with a "bare / built" toggle. F3: remove the bird and the placeholder strings. F4: build the site around showing the fragment as it was seen, then as it is.
