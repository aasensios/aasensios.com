---
version: 1
slug: "src-components-marketing-marketingpage-astro"
primary_target: "src/components/marketing/MarketingPage.astro"
related_targets: []
---

# Surface brief: Marketing style

Scope: the Marketing panel of the single-page site (`src/components/marketing/MarketingPage.astro`), one of three permanent styles. Mode: Persuade.
Audience: hiring managers first, engineering peers second; 30-second scan, often on a phone from LinkedIn.
Action: say hi on LinkedIn (GitHub secondary); switching styles is the signature interaction.
Proof: real outcomes per job from site.ts (23%, 78%, React for Ficosa, 2 clinical apps at BSC). No invented claims.
Constraints: content stays in site.ts; light and dark schemes; toggle needs JS; 44px touch targets.

## Direction contract

THESIS: Alejandro presented like a well-made appliance: few controls, each obviously named. Refuses the headline-over-cards portfolio and the neo-brutalist kit it replaces.

OWN-WORLD: Cool matte grey plastic ground, lighter moulded panel plastic, graphite ink, brushed aluminium for dials and frames, one signal orange reserved for operable things (switch knob, key indicators, focus), never as text fill. One grotesk family (Schibsted Grotesk), hierarchy by weight, size and case. Rounded moulded panels with soft cast shadows, dot-grid speaker grilles, hairline spec tables, one off-centre vertical rail everything registers to. Dark scheme: charcoal plastic, same orange.

STORY: In one scan the visitor learns: product engineer at TrustYou, 7 years, removes steps. They believe it through spec rows carrying a real result per job. They switch styles on the physical switch, open projects, and say hi on LinkedIn.

FIRST VIEWPORT: One 820px column. Top bar: 40px avatar beside the name. Then the h1 "I make screens you can leave.", two intro paragraphs (no metrics, no employer) and one facts sentence. A small graphite speaker "easter egg" with an orange strap sits fixed in the bottom-right corner; it opens the style speaker in a popover (rail previews a style in the grille, round button confirms). Experience rows carry plain results and an achievement; company names open full-bleed screenshots of the company's homepage. Contact keys live in the footer. Every link opens a new tab.

FORM: Appliance Catalog, position 3 of 7 on the ordered list. seed:a6337f17b93c34a5. Signature interaction: preview, then confirm. Picking a style on the rail opens the grille holes onto a live preview of that style; the round button confirms, and the grille grows into the new page through a view transition. No turning or denting (user decision). Reduced motion: instant.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
