---
name: aasensios.com — Marketing style
description: Alejandro Asensio presented like a well-made appliance; few controls, each obviously named.
colors:
  ground: "#d6d8d6"
  panel: "#ececea"
  panel-hi: "#f6f6f4"
  ink: "#232526"
  ink-2: "#4a4d4f"
  rule: "#a3a6a3"
  signal: "#ff5a00"
  focus: "#c43d00"
  chip: "#e2e3e0"
  cast: "rgb(30 34 36 / 0.28)"
  scrim: "rgb(0 0 0 / 0.18)"
  speaker: "#0f3c4b"
  speaker-hi: "#1c5d6f"
  speaker-side: "#082833"
  speaker-hole: "#062029"
  speaker-text: "#a9cdd3"
  speaker-text-on: "#f2fbfb"
  speaker-glow-teal: "rgb(38 230 190)"
  speaker-glow-violet: "rgb(124 92 255)"
  speaker-night: "#0b1d26"
  glass-tint: "rgb(6 32 41 / 0.55)"
  ground-dark: "#1b1d1e"
  panel-dark: "#2a2c2e"
  panel-hi-dark: "#333638"
  ink-dark: "#ecedea"
  ink-2-dark: "#b4b7b4"
  rule-dark: "#4c4f51"
  signal-dark: "#ff6a1a"
  focus-dark: "#ff6a1a"
  chip-dark: "#262829"
  cast-dark: "rgb(0 0 0 / 0.5)"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  intro:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 2.6vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.5
  lead:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
  rail-label:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
  tip:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  key: "12px"
  card: "14px"
  popover: "32px"
  squircle: "34%"
  grille: "28%"
  rail: "24px"
  rail-inner: "20px"
  pill: "999px"
  round: "50%"
spacing:
  "4": "4px"
  "8": "8px"
  "10": "10px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "40": "40px"
  "48": "48px"
  "56": "56px"
  "64": "64px"
  "112": "112px"
components:
  key:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.key}"
    padding: "0 20px"
    height: "48px"
  key-flat:
    textColor: "{colors.ink}"
    rounded: "{rounded.key}"
    padding: "0 20px"
    height: "48px"
  facts:
    textColor: "{colors.ink-2}"
    typography: "{typography.lead}"
  egg:
    backgroundColor: "{colors.speaker}"
    rounded: "{rounded.squircle}"
    size: "56px"
  egg-tip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.tip}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  speaker-popover:
    backgroundColor: "{colors.speaker-night}"
    textColor: "{colors.speaker-text-on}"
    rounded: "{rounded.popover}"
    padding: "24px 24px 32px"
    width: "420px"
  speaker:
    backgroundColor: "{colors.speaker}"
    rounded: "{rounded.squircle}"
    width: "340px"
  rail-button:
    textColor: "{colors.speaker-text}"
    typography: "{typography.rail-label}"
    rounded: "{rounded.rail-inner}"
    height: "44px"
  rail-button-selected:
    textColor: "{colors.speaker-text-on}"
    typography: "{typography.rail-label}"
    rounded: "{rounded.rail-inner}"
    height: "44px"
  rail-pill:
    rounded: "{rounded.rail-inner}"
  speaker-grille:
    backgroundColor: "{colors.speaker}"
    rounded: "{rounded.grille}"
  selector-label:
    textColor: "{colors.speaker-text-on}"
    typography: "{typography.title}"
  glass-label:
    backgroundColor: "{colors.glass-tint}"
    textColor: "{colors.speaker-text-on}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  part-chip:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 12px"
  entry-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "14px 0"
  company-link:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  company-card:
    backgroundColor: "{colors.panel-hi}"
    rounded: "{rounded.card}"
    padding: "0"
    width: "440px"
---

# Design System: aasensios.com — Marketing style

## Overview

**Creative North Star: "The Appliance Catalog"**

This file documents the **Marketing** style only: the default panel of the single-page site, built in `src/components/marketing/MarketingPage.astro`, with every token scoped to its `.mk` root. The site has two other permanent, switchable styles, SaaS (`src/components/saas/SaasPage.astro`) and Minimalist (`src/components/minimalist/MinimalistPage.astro`). Each scopes its own tokens, and nothing here covers them beyond one shared behaviour: every link opens in a new tab. Do not apply these tokens outside the Marketing panel.

The Marketing style presents a person the way a catalog presents a well-made appliance. The ground is cool matte grey plastic and ink is graphite. One signal orange marks the things you operate. The page is a single calm column of plain reading. The hero is a headline, an intro, and one sentence of facts. Below it, the experience, project and stack lists use space instead of dividers, grey labels and tabular figures. Each company name opens a card showing its homepage, and the footer holds the two keys for the next step.

The style switcher is an easter egg. A tiny deep teal speaker sits in the bottom-right corner. Resting on it with a mouse, or tapping it, grows it into a dark night-sky popover holding the full speaker. The speaker is a deep teal moulded squircle with no brand mark, lit like a studio product shot: teal rim light from the left, violet from the right, and coloured glows beneath it. A button rail on its face names the styles. Pointing at or focusing one previews it live in the grille, and clicking it switches straight away: one click with a mouse, two taps on touch.

Hierarchy comes from one grotesk family varied by weight and size, never from colour. Depth is physical but sparing: the egg and the speaker are objects, the raised key has a real lip, and the popover and company cards float. Everything else is flat. The dark scheme is the same appliance in charcoal plastic with the same orange. The teal speaker and its night popover are the same in both schemes.

The direction named brushed aluminium, hairline spec tables and an off-centre rail. The build has none of these. It is one column, there are no aluminium parts, and the only drawn line is the rule between list rows. The dot-grid grille survives as the backing behind the speaker's live preview and on the egg's face.

**Key Characteristics:**

- One signal orange, reserved for operable things.
- One type family (Schibsted Grotesk Variable); hierarchy by weight and size.
- One 820px column at every width; sections stack heading over content.
- Space instead of dividers: the only drawn line is the 1px rule between list rows.
- The style switcher hides in a corner easter egg and opens as a teal speaker on a night-sky popover.
- Company names open a floating card that is just the company's homepage.

## Colors

A near-monochrome plastic palette with cool greys and graphite, one hot signal orange, and a deep teal speaker lit in teal and violet on a night surface.

### Primary

- **Signal Orange** (`signal`; dark `signal-dark`): the only accent. It is used on:
  - the ring around the egg while the speaker is open;
  - the hover underline on company links and project titles, and the hovered project arrow;
  - the text-selection background (with near-black text).
- **Focus Orange** (`focus`; dark `focus-dark`): the focus ring colour on the page ground, the egg included. In light it is a deeper burnt orange so the ring keeps at least 3:1 against the grey plastics, which the bright signal misses. In dark it matches `signal-dark`.

### Secondary

The speaker family. It is shared by the speaker and the egg, and is the same in both schemes.

- **Deep Teal** (`speaker`, `speaker-hi`): the speaker face and the egg face, a radial gradient lit from the upper left (`speaker-hi` to `speaker` at 62%). `speaker` is also the grille's plastic behind the dots.
- **Teal Shadow** (`speaker-side`): the core of the ten stacked slices, which fade to teal at the left edge and violet at the right.
- **Teal Hole** (`speaker-hole`): the dots of the grille's plastic backing (behind the live preview) and the egg's 5px grille.
- **Speaker Text** (`speaker-text`, `speaker-text-on`): idle and selected rail labels. `speaker-text-on` is also the popover title, the grille label and the focus ring on the speaker.
- **Studio Glows** (`speaker-glow-teal`, `speaker-glow-violet`): the two studio lights. They are always mixed down, never used solid. They give the face's rim light (teal 30% from the left, violet 34% from the right), the slices' edges (28% and 32%), the speaker's coloured drop shadows (teal 7% from the left, violet 9% from the right, over a neutral cast) and the popover's two radial glows (7% and 9%). They are kept low: a hint of studio light, not neon.
- **Night** (`speaker-night`): the popover's ground, under the two glows.
- **Glass Tint** (`glass-tint`): the translucent pill behind the grille label.

### Neutral

- **Matte Ground Grey** (`ground`; dark `ground-dark`): page background and the text on the egg's tip.
- **Moulded Panel** (`panel`, `panel-hi`; dark siblings): `panel` rings the avatar. `panel-hi` is the top stop of the raised key's gradient and the company card's ground behind its screenshot.
- **Graphite Ink** (`ink`; dark `ink-dark`): primary text, the first intro paragraph, the selector caption, and the egg tip's pill.
- **Soft Graphite** (`ink-2`; dark `ink-2-dark`): secondary text such as the second intro paragraph, the facts sentence, the selector hint, outcome and achievement lines (figures included), meta, descriptions, group headings and the resting arrow. It is also the company links' resting underline, the flat key's hover outline and the raised key's hover ring.
- **Rule Grey** (`rule`; dark `rule-dark`): the 1px separator between list rows, the rings on keys, chips and company cards, and the raised key's lip.
- **Part Chip Grey** (`chip`; dark `chip-dark`): stack chip fill and the bottom stop of the raised key's gradient.
- **Cast** (`cast`; dark `cast-dark`): the translucent shadow colour for the soft cast shadows on the egg, the popover and the company cards. The speaker casts coloured glows instead.
- **Scrim** (`scrim`): the light backdrop behind the open speaker popover.

### Named Rules

**The Operable Orange Rule.** Signal orange marks only things you can operate or are operating: the open egg's ring, hovered link affordances, and selection (focus uses its deeper sibling, `focus`). It is never a text fill and never decoration, and nothing on the page pulses or glows orange.

**The Readable Focus Rule.** On the page ground, focus rings use `focus`, not `signal`, so they hold at least 3:1 against every plastic in both schemes. On the speaker and inside the night popover, focus flips to a 2px `speaker-text-on` ring. Never use the bright orange for focus in light.

**The Studio-Light Rule.** The speaker is lit by two coloured lights, teal from the left and violet from the right. Its rim light, slice edges, glows and the popover's ambience all follow that split. The glows are always mixed down, never solid, and never leave the speaker family.

**The Two-Plastics Rule.** Every ground, panel, ink, rule, signal and focus token has a dark sibling, and the dark scheme changes the plastic, not the voice. The speaker family is the exception: a self-lit object on its own night surface, the same in both schemes. The orange shifts only slightly (`signal` to `signal-dark`), and every orange tint is mixed from `signal` so it follows.

## Typography

**Display Font:** Schibsted Grotesk Variable (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Schibsted Grotesk Variable (same stack)

**Character:** A single sturdy news grotesk does every job. Tight negative tracking on the larger sizes gives it a moulded, stamped feel, while plain weights at reading sizes keep it calm.

### Hierarchy

- **Display** (700, `clamp(2.25rem, 7vw, 3.25rem)`, 1.02, -0.035em, balanced wrap): the hero h1 only, one short sentence, 20px above the intro.
- **Intro** (500, `clamp(1.125rem, 2.6vw, 1.25rem)`, 1.45, -0.01em, `ink`): the first intro paragraph, backing the headline. The second paragraph drops to the Lead role. Both share a 32em measure with 16px between them.
- **Headline** (700, `clamp(1.5rem, 4vw, 2rem)`, 1.1, -0.02em): section titles, stacked above their content.
- **Title** (600, 17px): entry titles (job, project), the popover title above the speaker (`speaker-text-on`), and the grille label (line-height 1, -0.01em). The name in the top bar is plain text at 17px/700 with -0.01em tracking.
- **Lead** (400, 17px, `ink-2`, 32em): the second intro paragraph, and the facts sentence 16px below it ("I've been shipping software for more than N years now. Based in Barcelona area, working full remote."). N is computed from the first job.
- **Body** (400, 16px, 1.5): base text.
- **Label** (15px; 600 for keys, group headings and the footer name, 400–500 for outcome and achievement lines, meta, descriptions and chips): the workhorse size for every catalog element. Meta uses tabular numerals. Outcome figures are not emphasised; "23% faster interactions" reads as one plain line.
- **Rail Label** (600, 13px at every width, line-height 1): the three style buttons on the speaker face, printed on the device like moulded legends.
- **Tip** (600, 13px): the egg's hover tip, "Psst… other styles".

### Named Rules

**The One Family Rule.** Only Schibsted Grotesk appears. Contrast comes from weight (400 to 700), size, and the `ink`/`ink-2` pair. No second face, no italics for emphasis.

**The Spec-Sheet Size Rule.** Anything that labels, measures or dates on the page sits at 15px. New metadata joins that size rather than inventing a smaller one. The only smaller type is printed on objects: the 13px rail labels on the speaker, and the 13px tip beside the egg.

**The Facts-As-Prose Rule.** Plain facts about the person (years, location, way of working) are written as one sentence in the Lead role, not as a stat grid. Results are stated plainly, without bold figures.

## Layout

One column at every width. The bar and the content share an 820px max width with side padding `--pad` of 20px on phones, 32px from 640px, and 48px from 1024px. The page has a thin top bar (a 40px round avatar and the name, with no rule beneath), then the hero, three sections (experience, projects, stack), and a footer with the name and the keys.

**The hero.** Headline, intro and the facts sentence, nothing else.

**Sections.** Each section stacks its heading over its content with a 16px gap. Sections are 64px apart, and 112px apart from 1024px. The hero starts 40px below the bar (64px from 1024px).

**Rows.** Experience rows hold a body and a meta line; from 640px the meta (period) sits on the right, unwrapped. Project rows add an arrow on the right.

**Fixed layer.** The easter egg is fixed 20px from the bottom-right corner on every screen size. The speaker popover opens fixed above it, 20px from the right and 92px from the bottom. It is `min(420px, 100vw - 40px)` wide and at most `100vh - 120px` tall, scrolling if needed.

Spacing rhythm: 4/8/10/12/16 inside components, 20/24/28/32/40/56 for block gaps, 48 for side padding, 64/112 between sections.

### Named Rules

**The One Column Rule.** Everything stacks in one 820px column, in reading order. No side-by-side columns, no split, no rail. The only thing outside the column is the corner egg and its popover.

**The Space-Not-Lines Rule.** Space separates blocks. The only drawn divider is the 1px `rule` between rows inside the experience and project lists. No borders under the bar, above lists, tool groups or the footer, and no vertical lines.

## Elevation & Depth

Mostly flat, with depth only on objects. The speaker is real static 3D: it is tilted (`rotateX(8deg) rotateY(-14deg)` under `perspective: 1100px`), with ten slices 2.6px apart behind the face. It is lit like a studio product shot, with coloured rim light and coloured glows beneath it rather than a grey cast. The egg is a small top-lit block with its own cast. The raised key is lit from above and stands proud, rising further on hover. The speaker popover and the company cards float above the page on long, soft casts. Lists, chips and the flat key are flat.

### Shadow Vocabulary

- **Egg** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.12), 0 1px 0 rgb(0 0 0 / 0.2), 0 12px 20px -8px var(--cast)`): the corner egg's face.
- **Egg pressed** (`box-shadow: inset 0 2px 6px rgb(0 0 0 / 0.5), 0 0 0 3px <signal 40%>`): the egg's face while the speaker popover is open, keyed on `.mk:has(#style-speaker:popover-open)`.
- **Popover float** (`box-shadow: 0 0 0 1px rgb(255 255 255 / 0.08), 0 30px 60px -24px var(--cast)`, over a `scrim` backdrop): the night popover, with a faint white ring.
- **Speaker glow** (`filter: drop-shadow(-8px 8px 20px <teal 7%>) drop-shadow(10px 14px 24px <violet 9%>) drop-shadow(0 18px 22px var(--cast))`): the whole speaker. The faint coloured glows sit over a neutral cast.
- **Speaker rim light** (`box-shadow: inset 0 2px 0 rgb(255 255 255 / 0.14), inset 10px 0 22px -18px <teal 30%>, inset -10px 0 22px -16px <violet 34%>, inset 0 -8px 16px rgb(0 0 0 / 0.35)`): a top-lit face with teal rim light from the left and violet from the right.
- **Button rail** (`box-shadow: inset 0 2px 4px rgb(0 0 0 / 0.5), 0 1px 0 rgb(255 255 255 / 0.08)`, on `rgb(0 0 0 / 0.3)`): the recessed pill track for the style buttons.
- **Key lip** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.45), 0 0 0 1px var(--rule), 0 3px 0 var(--rule), 0 8px 14px -8px var(--cast)`): the raised key, standing 3px proud.
- **Key raised on hover** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.55), 0 0 0 1px var(--ink-2), 0 5px 0 var(--rule), 0 16px 22px -10px var(--cast)`): the key rises 2px onto a 5px lip.
- **Key pressed** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.3), 0 0 0 1px var(--rule), 0 1px 0 var(--rule)`): the key travels 2px down onto a 1px lip.
- **Card float** (`box-shadow: 0 0 0 1px var(--rule), 0 20px 36px -18px var(--cast)`): the company hover card.
- **Avatar** (`box-shadow: 0 0 0 2px var(--panel), 0 4px 10px -4px var(--cast)`): the bar avatar.
- **Outline only** (`box-shadow: inset 0 0 0 1px var(--rule)`): part chips and the flat key, whose outline turns `ink-2` on hover.

### Named Rules

**The Top-Lit Rule.** Light comes from above. Highlights sit on top edges, and shadows fall below with negative spread so they stay under the object, never around it.

**The Travel Rule.** Hard-edged lips belong only to solid objects that move. The raised key stands on a 3px lip, rises to 5px on hover, and is pressed down to 1px. Don't use zero-blur offsets on anything that doesn't move.

**The No-Housing Rule.** On the page, controls sit directly on the ground; don't wrap them in cards or shadowed panels. The only floating surfaces are transient: the night popover that holds the speaker, and the company cards.

## Shapes

Corners are rounded and scale with the object:

- 12px for keys and 14px for company cards.
- The speaker family uses true squircles (`corner-shape: squircle`), nested concentrically. The popover is 32px. The speaker face, its slices and the egg face are 34%. The grille is 28%. The rail is 24px, and the rail buttons and the sliding pill are 20px. Where `corner-shape` isn't supported they fall back to plain rounded corners of the same radius.

The egg tip and the chips are full pills, and the avatar is a circle. The grille's plastic backing is dotted on a 6px pitch; the egg's grille is a 5px pitch. Edges are drawn as box-shadow rings so they don't shift layout. The one true border is the row separator.

### Named Rules

**The Squircle Rule.** Objects in the speaker family are concentric squircles (`corner-shape: squircle`): each inner shape's radius steps down with its inset (popover 32px, face 34%, grille 28%, rail 24px, pill and buttons 20px). Plain rounded corners are the fallback. Page elements keep ordinary rounded corners.

## Components

### Keys (buttons)

Two keys, one raised and one flat: the raised one is the primary route. They appear once, in the footer, beside the name.

- **Shape:** rounded keycap (12px), at least 48px tall, 20px side padding, 15px label.
- **Raised key (LinkedIn, "Say hi on LinkedIn"):** a vertical gradient from `panel-hi` to `chip`, with a 1px `rule` ring and the key lip (see Elevation), at weight 600. On hover it rises 2px onto a 5px lip with an `ink-2` ring and a deeper cast, while a soft white highlight sweeps across its face. On `:active` it travels 2px down and the lip collapses to 1px.
- **Flat key (GitHub, "See my work on GitHub"):** transparent, a 1px inset `rule` outline, weight 500. The outline turns `ink-2` on hover, and on `:active` it travels 1px down.
- **Focus:** 3px `focus` outline at a 3px offset.

### Easter Egg (signature)

A tiny speaker in the corner that opens the style switcher.

- **Body:** a 56px button fixed 20px from the bottom-right corner. Its face is a 34% squircle with the speaker's top-lit deep teal gradient and a 5px dot grille, plus the egg shadow.
- **Tip:** on hover or focus, a pill tip "Psst… other styles" (Tip role, `ground` text on an `ink` pill, 6 by 10px padding) slides in 12px to its left. On hover the egg also wiggles (520ms).
- **Label:** its accessible name is "Psst: see this portfolio in a different style". It opens the speaker popover through the native Popover API (`popovertarget`).
- **Hover open (mouse only):** on devices with `(hover: hover) and (pointer: fine)`, resting on the egg opens the popover after 220ms. Leaving both the egg and the popover closes it after 450ms, unless focus is inside. A click on the egg still toggles it, and keeps it open if hover already opened it. On touch, a tap opens it.
- **Open:** while the speaker popover is open, the face sinks (an inset shadow) and takes a 3px ring of `signal` at 40%.
- **Focus:** 3px `focus` outline at a 4px offset, with 30% corners.

### Speaker Popover

The full speaker, shown above the egg on a night surface.

- **Surface:** a native popover on `speaker-night` with two faint radial glows (teal 7% at the lower left, violet 9% at the lower right). It has light text, 32px squircle corners, 24px padding (32px at the bottom), and the popover float with a faint white ring over a `scrim` backdrop.
- **Content:** the title "See my portfolio in a different style" (Title role, `speaker-text-on`) above the speaker, 24px apart. The speaker is `min(100%, 320px)` and centred on phones, `min(100%, 340px)` from 640px. There is no instruction line.
- **Opening:** it grows out of the egg's corner. Opacity runs over 220ms, while scale goes from 0.6 to 1 and it rises 24px over 320ms on the house curve, using `@starting-style` and `display`/`overlay` allow-discrete. It appears instantly under reduced motion.
- **Closing:** light dismiss and Escape are native. On a mouse it also closes 450ms after the pointer leaves the egg and the popover, unless focus is inside. Leaving the Marketing style closes it.

### Speaker Style Selector

The switcher inside the popover, built as a deep teal speaker with no brand mark. Pointing at or focusing a style previews it live in the grille; clicking the style, or the grille, switches the page.

- **Body:** a static 3D block (see Elevation) with a 34% squircle face in deep teal, with soft teal and violet rim light. The face has 8% padding all round and a 6% gap between rail and grille. The slices fade from teal to violet at their edges. It does not turn or respond to drag.
- **Button rail:** a recessed 24px squircle on the face with three style buttons (20px squircles, 44px tall, Rail Label type, `speaker-text`, sized to their labels with 10px of side padding so each keeps about 10px of air inside the pill). The previewed style (`aria-pressed="true"`) turns `speaker-text-on`. One shared 20px squircle pill (`rgb(255 255 255 / 0.12)` with an inset top highlight) slides under the pressed label. `speaker.ts` sets `--pill-x` and `--pill-w` from the pressed button, and the pill moves and resizes over 320ms on the house curve. Labels carry no background of their own. Hovering an idle button lifts its text to `speaker-text-on`.
- **One-click switching:** pointing at a label with a mouse, or focusing it, previews that style (it becomes the pressed one). Clicking a label switches straight away, and the grille morphs into the new page. On touch, a tap on a label switches directly.
- **Grille:** a 28% squircle that always shows the picked style's real page, including the style you are on, with no fade. The page is an inert clone rendered at 1280px and scaled to fit. The Marketing clone drops its own egg and popover. The dotted plastic (`speaker-hole` dots on a 6px pitch over `speaker`) is only a backing behind it.
- **Grille button:** the grille itself is the confirm button. It is fully transparent, with no sheen, tint or edge, and the preview stays sharp. It carries a pill label (Title role, `speaker-text-on` on `glass-tint`, 10 by 16px padding) that is always visible whenever it has text. It reads "See as a SaaS" or "Go minimalist", or "You're already here" on the current style, where the button is disabled. Pressing it confirms the previewed style, as a second route beside clicking the label.
- **Confirm:** the grille grows into the new page through a view transition (see Motion).
- **Focus:** a 2px `speaker-text-on` outline, at a 1px offset on the rail buttons and inset 4px on the grille.

### Entry Rows

- **Experience rows:** a 17px/600 title naming the role and the company. The outcome line follows as one plain `ink-2` line, then an achievement line (15px `ink-2`). The period sits as meta in tabular figures. Rows have 14px vertical padding and a 1px `rule` between them.
- **Link rows (projects):** a whole-row link with title, description, year and an inline SVG diagonal arrow. On hover the title takes a 2px `signal` underline (4px offset) and the arrow turns `signal` and nudges 2px up and right.

### Company Hover Card

The company's homepage, shown from its name.

- **Trigger:** the company name in an experience title is an underlined keyword link to the company site. It has a 1.5px `ink-2` underline at a 3px offset that turns `signal` on hover, and points to its card with `aria-describedby`.
- **Card:** `role="tooltip"`, `min(440px, 86vw)` wide, with no padding, overflow hidden, 14px corners and the card float (see Elevation). The card is the screenshot, full bleed: the company's homepage at 640 by 405 (WebP), linking to the site and skipped in the tab order, since the name already links there. It has no logo, name or text. It hangs 10px below the word, 12px left of it.
- **Behaviour:** it opens 300ms after hover or focus within the name, and closes 140ms after leaving. An invisible bridge above the card keeps it open while the pointer travels down to it. Escape dismisses it until the pointer or focus leaves the name. The hovered or focused row rises above its neighbours.
- **Phones (below 640px):** the card spans the full width of its row, just below the title.
- **Screenshot provenance:** the previews in `public/previews/` are screenshots of the live sites (trustyou.com, cognizant.com/us/en, capitole-consulting.com, bsc.es) captured at 1280 by 800 with cookies declined. BSC's temporary maintenance notice was hidden before capture. New previews follow the same method.

### Part Chips

- **Style:** pill (999px), `chip` fill, 1px inset `rule` ring, 7px by 12px padding, 15px/500, with an 18px tool logo and an 8px gap.
- **Grouping:** chips sit in labelled groups 24px apart, with no rules. The group heading is 15px/600 `ink-2` above each row.

### Navigation

The top bar holds a 40px round avatar and the name, with 14px vertical padding and no rule beneath. There is no menu. The footer keys are the navigation out. Every link opens in a new tab (`target="_blank"`, `rel="noopener"`), in all three styles.

### Motion

- **Mechanical feedback:** `translate` and `box-shadow` over 160ms with `cubic-bezier(0.22, 1, 0.36, 1)`, on the flat key and arrows. The raised key moves over 180ms, and its highlight sweep (`background-position`) takes 700ms on the same curve.
- **Egg:** the tip fades and slides 6px over 160ms, and the face wiggles (-8°, then 6°) over 520ms on hover.
- **Popover:** grows out of the egg (opacity 220ms; scale 0.6 to 1 and a 24px rise over 320ms).
- **Company card:** opacity and a 4px rise over 140ms on the house curve. It opens after a 300ms delay and closes immediately on leaving, taking 140ms.
- **Rail pill:** slides and resizes (`translate`, `width`) over 320ms on the house curve.
- **Grille label:** fades and scales from 0.96 over 200ms when its text appears. The preview itself never fades; it is always visible.
- **Egg hover timing:** opens after 220ms of rest, and closes 450ms after leaving the egg and popover.
- **Style change:** confirming hands the grille's view-transition name (`style-preview`) to the target panel. The preview grows into the new page over 640ms on the house curve, starting at 0.6 opacity, while the old snapshot fades over 320ms. The root cross-fades too (old 220ms ease-in, new 380ms with a 10px rise).
- **Reduced motion:** every movement above sits inside `prefers-reduced-motion: no-preference`. Under reduced motion, the egg doesn't wiggle, the popover and cards appear in place, the rail pill jumps, the grille label changes without fading, and the style switches instantly.

## Do's and Don'ts

### Do:

- **Do** reserve `signal` orange for operable things: the open egg's ring, hovered link affordances, selection. Mix any orange tint from `signal`.
- **Do** draw focus rings with `focus` (3px outline, 3px offset) on the ground, and with `speaker-text-on` (2px) on the speaker and night surfaces.
- **Do** keep everything in the one 820px column: heading over content, 112px between sections on wide screens.
- **Do** separate blocks with space, and list rows with a single 1px `rule`; set meta at 15px in tabular figures.
- **Do** state plain facts and results as plain sentences, with numbers computed rather than hard-coded and not bolded.
- **Do** turn a company name into an underlined keyword link whose hover card is the company's homepage screenshot, captured from the live site.
- **Do** make hover cards and popovers dismissable with Escape and calm under reduced motion.
- **Do** keep style switching to one click on a mouse: hover opens, pointing previews, clicking switches. On touch, keep it to two taps.
- **Do** open every link in a new tab (`target="_blank"`, `rel="noopener"`).
- **Do** give the primary action the raised key (12px corners, 48px minimum height, key lip, 2px travel) and secondary routes the flat key.
- **Do** declare a dark sibling for every new scheme-dependent colour token under `prefers-color-scheme: dark`.
- **Do** light anything in the speaker family with the teal-left, violet-right studio pair, mixed down from `speaker-glow-teal` and `speaker-glow-violet`, and give it concentric squircle corners.
- **Do** keep motion short and mechanical on `cubic-bezier(0.22, 1, 0.36, 1)`, inside `prefers-reduced-motion: no-preference`.

### Don't:

- **Don't** fill text with `signal` orange, or use it as decoration.
- **Don't** introduce a second typeface or set hierarchy by colour alone.
- **Don't** split the page into columns or draw dividers beyond the row rule.
- **Don't** use zero-blur offset shadows on anything that doesn't move. The key lip is the only one.
- **Don't** add decorative dials, brand marks or controls that don't do anything. Every control on the page is real.
- **Don't** apply these tokens to the SaaS or Minimalist panels. Each style keeps its own scoped tokens.
