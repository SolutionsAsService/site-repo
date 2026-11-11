# Critic: Usability (Krug) — R1

- Anchor used: Don't Make Me Think (Steve Krug): the five-second test ("what is this, what do I do next") and the trunk test.
- Observed: index_html-desk.png and index_html-phone.png; parts_contact-form_html-*.png; site/index.html links; site/llms.txt; site/registry.json.

Five seconds, desk: name "site-repo", "A kit of parts for websites", h1 "18 parts. Snap off what you need." Topics I can name: Pricing table, Contact form, Map and address. First action: "Pick parts from the sprue". Trace: the C5 tile is `<a href="parts/pricing.html">`, the part page has nav with Parts marked current, breadcrumb "Parts · Forms · No. 13" and the title. Trunk test passes. Agent: llms.txt gives five steps and 18 links with summaries; registry C5 carries raw, preview, page, slots, needs, a11y, sha256 and check.

Findings:
- F1 [defect] Phone doors read "Pick / Assemble / Start / Fetch" with no objects.
- F2 [defect] Phone tile titles are cut off: "Navigation …", "Map and ad…", "Footer with …". Visitors can't trace a label they can't read.
- F3 [defect] "Sprue" is jargon in the first-action line. Builders stop to decode it.
- F4 [claim] On the part page, Copy (the builder's real first action) sits below the fold at 1280x800 and 375x812. Only "Open in sandbox" is visible.
- F5 [defect] The F1/F2 and A2 miniatures look empty at desk size.
- F6 [premise] The llms.txt URLs point to site-repo.shadw.app. I could not check that the host is live, and the evidence does not claim it.

- Verdict: PASS. It answers "what is this, what next" in five seconds for both users. These are fixes, not a block.
- Requested change: F1 add the object under each verb on phone ("Pick parts"). F2 use two-line titles or the code + short name. F3 "Pick parts from the board". F4 put Copy beside "Open in sandbox". F5 scale up or crop the miniatures to their content. F6 none from me; the conductor should confirm deployment.
