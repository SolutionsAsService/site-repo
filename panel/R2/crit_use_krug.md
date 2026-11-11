# Critic: Usability (Krug) — R2

- Anchor used: Don't Make Me Think (Steve Krug): the five-second test ("What is this? What do I do next?").
- Observed: index_html-desk.png, index_html-phone.png, index-bare-desk.png; site/index.html; site/llms.txt; evidence.md.

Five seconds, desk: "A kit of parts for websites" / "18 parts. Snap off what you need." Door 1, "Start here: paste your first part in five minutes", is visible at about y=476. Five seconds, phone: the headline, the one-line lede "Copy-paste website parts in plain HTML and CSS", and all 5 doors fit above 812. Agent: the title and meta say what the site is, the head links to registry.json, and llms.txt gives five steps and per-part links. R1 F1, F2, F3 and F4 are fixed: the doors have objects, the names wrap ("Map and address", "Footer with social links"), "sprue" is gone, and Copy is in the toolbar.

Findings:
- F1 [defect] On the phone, the switch rows "Paper Night Citrus Slab" and "Built Bare" have no labels. The desk shows "THEME EVERY PART", "VIEW" and the Bare gloss, but the phone shows none of them, so a visitor has to guess what "Bare" does.
- F2 [claim] The A1 Navigation bar and F1/F2 miniatures still read as almost blank at desk size. The new Bare X-ray shows they have content, but Built does not.
- F3 [premise] R1 F6 still stands: the evidence does not confirm that site-repo.shadw.app (the host in llms.txt) is live.

- Verdict: PASS. People and agents get "what is this, what next" in five seconds at both widths.
- Requested change: F1 add the short labels "Theme" and "View" on the phone, or keep one line of the Bare gloss. F2 crop or zoom the sparse miniatures to their content. F3 the conductor should confirm deployment.
