# Implementation Brief — Verification Report

Response to `Amna_Imran_Homepage_Implementation_Brief_Rameez_Cursor.docx` (12 batches).

Change control and sign-off live in [homepage-approval-tracker.md](homepage-approval-tracker.md).
This file exists because the brief asks for something the tracker does not hold: a
component inventory, a batch-to-component map, and a per-batch verification record.

> **Why this report leads the work.** The brief states its author worked from desktop
> screenshots and could not confirm behaviour, and seven of its twelve batches carry a
> *Needs Developer Verification* flag. Most of what it asks to build already exists. The
> honest deliverable is therefore evidence of what is present, not a second implementation
> of it. The brief's own instruction — "Inspect the existing implementation before
> modifying it" — is the governing constraint.

---

## 1. Section inventory, in homepage order

All homepage sections live in [../src/routes/index.tsx](../src/routes/index.tsx). Shared
behaviour lives in [../src/components/site/primitives.tsx](../src/components/site/primitives.tsx).

| Order | Section | Component | Interactive? |
| ----- | ------- | --------- | ------------ |
| 1 | Header & navigation | `SiteHeader` (own file) | Sticky compaction, nav |
| 2 | Hero banner | `Hero` | No |
| 3 | Positioning statement & CTAs | `HeroIntro` | 2 CTAs |
| 4 | Credentials | `CredentialsBand` (inside `HeroIntro`) | No |
| 5 | High performance alone | `HighPerformanceSection` | No |
| 6 | Common internal narratives | `InternalNarrativesSection` | No |
| 7 | Progress narrative & eight gaps | `ProgressNarrativeSection` | `SelectablePanel` × 8 |
| 8 | Motherhood penalty & psychological impact | `MotherhoodSection`, `ImpactPills` | `ImpactPills` × 5 |
| 9 | A more strategic way forward | `StrategicWayForwardSection` | `SelectablePanel` × 6 |
| 10 | How I support & programmes | `HowISupportSection`, `ProgrammeColumn` | 2 accordions, 2 CTAs |
| 11 | Why my approach is different | `WhyDifferentSection` | `SelectablePanel` × 5, 1 CTA |
| 12 | Quote transition | inside `WhyDifferentSection` | No |
| 13 | Choose the pathway | `TwoPathwaysSection`, `PathwayCard` | 2 CTAs |
| 14 | Founder statement | `FounderSection` | 1 CTA |
| 15 | Final CTA | `FinalCTA` | 2 CTAs |
| 16 | Footer | `SiteFooter` (own file) | Nav links |

Section surfaces come from one `SURFACE` map and the seams between them read the same
values, so a seam cannot band against the section it blends into.

---

## 2. Batch to component map

| Brief batch | Priority | Homepage sections | Primary files |
| ----------- | -------- | ----------------- | ------------- |
| 1 Design lock, content integrity, continuity | High | All | `index.tsx`, `styles.css`, this file |
| 2 Header, hero, introduction, credentials | Medium | 1–4 | `index.tsx`, `SiteHeader.tsx` |
| 3 Performance paradox & internal narratives | Medium | 5–6 | `index.tsx` |
| 4 Progress narrative & eight gaps | High | 7 | `primitives.tsx`, `index.tsx` |
| 5 Motherhood penalty & psychological impact | High | 8 | `index.tsx` |
| 6 Strategic way forward framework | High | 9 | `primitives.tsx`, `index.tsx` |
| 7 How I support & programmes | High | 10 | `index.tsx` |
| 8 Why my approach is different | High | 11–12 | `primitives.tsx`, `index.tsx` |
| 9 Choose the pathway | Medium | 13 | `index.tsx` |
| 10 Founder, final CTA, footer | Medium | 14–16 | `index.tsx`, `SiteFooter.tsx` |
| 11 Responsive, accessibility, interaction QA | High | All | All |
| 12 Motion, CTA consistency, analytics | Medium | All | `analytics.ts`, `styles.css` |

---

## 3. Per-batch verification

Format follows the brief's *Cursor Planning Instruction*: files, what exists, what is
missing or defective, minimal change, responsive/accessibility implications, test steps.

### Batch 1 — Global design lock, content integrity, page continuity

**Exists.** Design tokens are already centralised in
[../src/styles.css](../src/styles.css): a fluid type scale (`--text-body` through
`--text-display-1`), body leading, motion tokens (`--motion-reveal`,
`--motion-interaction`, `--ease-editorial`, `--ease-out-soft`), palette
(`--gold`, `--blush`, `--cream`, `--warm-cream`, `--hairline`), and a CTA system
(`.cta-primary`, `.cta-secondary`, their `-invert` variants, `.link-underline`).
Section spacing uses shared `section-pad-*` utilities. Continuity is handled by nine
`SectionSeam` instances plus the `SURFACE` map.

**Defective or missing.** Nothing structural. The brief's request to "create shared
design tokens or confirm existing tokens" is satisfied by confirmation.

**Content integrity.** Five blocks are marked `DRAFT COPY` in `index.tsx`. These are
flagged, not rewritten, per the brief's instruction to flag discrepancies rather than
edit autonomously:

| Line | Content | Status |
| ---- | ------- | ------ |
| 66 | `PSYCH_IMPACT` explanations (5) | Written to brief, awaiting client sign-off |
| 96 | `FORWARD` step descriptions (6) | Written to brief, awaiting client sign-off |
| 125 | `GAPS` explanations (8) | Written to brief, awaiting client sign-off |
| 172 | `INDIVIDUAL_QUALIFIERS` (3) | Written to brief, awaiting client sign-off |
| 179 | `ORG_QUALIFIERS` (3) | Written to brief, awaiting client sign-off |

In every case the adjacent labels and titles are approved copy and are not touched.
Two further content gaps carried from the tracker: the footer has no contact details or
social links, and the founder statement is positioning copy rather than a first-person
statement.

**Test steps.** Confirm no section defines a one-off font size or colour outside the
token set; confirm the dark final CTA boundary stays decisive.

### Batch 2 — Header, hero, introduction, credentials

**Exists.** The layered `AMNA IMRAN` composition is intact, with the outer `A`s and the
`R` on `z-[3]` in front of the portrait and the remaining letters on `z-[1]` behind it.
Sticky header compaction fires after 80px and respects reduced motion. Credentials were
merged into `HeroIntro` as `CredentialsBand`, so no container wraps them. Both audience
CTAs sit directly beneath the positioning statement with their wording unchanged.

**Defective or missing.** Two items, both consequences of a client instruction that this
brief reverses. Depth behind the portrait was removed on request, and the hero-to-intro
transition was removed on request. The brief asks for restrained ambient separation and
for existing curves to carry continuity. Resolution is recorded in
[the tracker's change-request log](homepage-approval-tracker.md#change-requests-after-approval).

**Minimal change.** Restore a low-opacity contact shadow only — not the radial ambient
glow, which the brief explicitly rules out as "a visible glow effect". Restore a
low-amplitude tonal transition at the hero boundary, deliberately flatter than the sweep
the client rejected as a "mountain effect". Tune the feet mask so the crop reads as
intentional.

**Test steps.** Hero at 360/768/1280/1440; confirm the portrait does not obscure critical
letters or the navigation; confirm no hard edge across the trouser legs.

### Batch 3 — Performance paradox & internal narratives

**Exists.** Both sections already have the staggered motion the brief asks for
conditionally. The four `TRADITIONAL` formula items reveal at `i * 80`ms and the
conclusion follows; the four `INTERNAL_NARRATIVES` stagger and the central conclusion
reveals after. Layouts are open and editorial with no cards or icons.

**Defective or missing.** No motion work. The brief says "If motion is not already
implemented" and "do not duplicate it" — it is implemented, so nothing was added.

**Contrast, measured.** This batch asks to review small numbering and eyebrow contrast
and raise it "only if necessary". It was necessary. Ratios were computed from the oklch
tokens against every composited surface the page actually uses, rather than eyeballed:

| Element | Was | Now | Threshold |
| ------- | --- | --- | --------- |
| Eyebrow labels in `--gold` on light surfaces | 2.40–2.57 | 4.70–5.04 | 4.5 |
| Gold emphasis inside body copy (`--gold-deep`) | 3.66–3.92 | 4.70–5.04 | 4.5 |
| Numerals inside eyebrow labels | 3.66–3.92 | 4.70–5.04 | 4.5 |
| Narrative numerals at 24–30px (`--gold-warm`) | 2.10–2.25 | 3.66–3.92 | 3.0 (large) |
| Body copy on the gold programme panel | 4.03 | 4.63 | 4.5 |
| Footer tagline, gold at 70% on charcoal | 3.45 | 5.55 | 4.5 |

The fix is a new `--gold-ink` token at `oklch(0.52 0.075 72)`, used only where gold is set
as small copy on a light surface. `--gold`, `--gold-deep`, `--gold-warm` and `--gold-subtle`
are untouched, so borders, markers, rails, tinted surfaces and all display type look
exactly as approved. `--gold-ink` is light-surface only: on charcoal it measures 2.83, so
dark sections keep `--gold`, which already passes there at 5.55 — the Final CTA eyebrow and
the footer eyebrows were checked and left alone for that reason.

**Not changed, flagged instead.** `--gold-warm` display accents measure 2.10–2.25 against
light surfaces, short of the 3:1 large-text threshold. Fixing that would change the
signature colour of every section headline, which the guardrails explicitly forbid. Raised
in the tracker as a client decision.

**Also verified.** Pale dividers measure 1.81 against warm cream. Left as they are: they
are decorative separators rather than UI components or meaningful graphics, so WCAG 1.4.11
does not apply, and darkening them would coarsen the editorial lightness the client
approved. Footer body text at 70–80% opacity on charcoal measures 7.8–9.8 and passes
comfortably.

### Batch 4 — Progress narrative & eight persistent gaps

**Exists — the interaction is real.** All eight rows are `<button>` elements from
`useSelectableList`, wired as ARIA tabs against a single `role="tabpanel"`. Selecting a
row updates the active numeral, the row treatment and the "How it operates" panel.
Keyboard support: Arrow Up/Down, Home, End, roving tabindex, wrapping. Default is Gap 01.
The panel replays a short crossfade via `usePanelTransition` — the section itself is not
animated. The "So why does this persist?" bridge and the closing quote are present.

**Defective or missing.** One real gap: on mobile the panel sits below the whole
eight-row list, so the explanation is not "directly beneath the selected gap" as the
brief requires. `usePanelIntoView` scrolls it into view, which mitigates but does not
satisfy this.

**Minimal change.** Give `SelectablePanel` a stacked interaction model — see Batch 11.

**Test steps.** Click 01 through 08 and confirm the panel text changes each time; tab to
the list and traverse with arrows; confirm exactly one row is active.

### Batch 5 — Motherhood penalty & psychological impact

**Exists.** The brief asks whether the five impact labels are interactive or merely
styled to look selected. **They are genuinely interactive.** `ImpactPills` uses
`useSelectableList` with `orientation: "horizontal"`, so the pills respond to click and
to Arrow Left/Right, Home and End, and each selection swaps the explanation beneath the
row. The active pill takes a gold border and wash through `aria-selected:` variants, so
the visual state is driven by the real ARIA state and cannot drift out of sync. No
styling falsely implies interaction. Title, research narrative, five labels and closing
consequence statement are unchanged, and the closing statement names disengagement,
burnout and premature exit.

**Defective or missing.** Nothing. The pills were initially in scope for the stacked
disclosure treatment given to the other selectable lists, then deliberately left alone:
this batch specifies the mobile order as "research context, psychological setup, impact
list, explanation, closing consequence", which puts the explanation after the whole list
and is exactly what the current layout does. Converting the pills to per-item expanders
would have satisfied a general principle while breaking the specific instruction.

**Test steps.** Select each of the five pills, confirm the explanation changes; confirm
the icons are the existing Lucide set at consistent weight.

### Batch 6 — A more strategic way forward

**Exists.** Six steps through `SelectablePanel variant="step"`. The
`Step XX of 06` meta label is generated at `index.tsx:1074`, so it cannot fall out of
step with the selection. A progress rail fills to `((active + 1) / items.length) * 100%`
with a token-driven transition. The decorative circle is `aria-hidden` and
non-interactive. One active step at a time is enforced by the hook's single index.

**Defective or missing.** Stacked layout only, as above.

**Test steps.** Select each of the six steps and confirm the numeral, row styling, the
`Step XX of 06` label, and the detail copy all update together; confirm the page does not
jump on selection.

### Batch 7 — How I support & programmes

**Exists.** The three-part composition is intact: intro plus seven `SUPPORT_FOCUS`
outcome rows, two programme columns flanking the centre portrait, with a shared ground
line so all three columns stand on the same floor. Both programme columns hide their
detail behind a Radix `Accordion` (`type="single" collapsible`), which gives correct
`aria-expanded`, keyboard support and predictable close behaviour. Default body copy is
therefore not dense.

**Defective — a genuine routing bug, and the clearest evidence that this batch needed
verifying rather than trusting.** Both programme CTAs pointed at the generic
`/work-with-me`, so "Explore ELEVATE" and "Explore Lead & Thrive" were two differently
named buttons landing in the same place. That page already defines `id="elevate"` and
`id="lead-thrive"` sections, complete with `scroll-mt-24` for the sticky header, so the
destinations existed and simply were not being used. `ProgrammeColumn` now takes a
`ctaHash` and each CTA deep-links to its own programme.

**Clipping — checked, none found.** Reveal variants translate by at most 1.75rem or scale
from 0.96, with no blur filters, so nothing overflows its box during animation. The
programme headings sit at the top of their article with no intervening clipping ancestor.
`HowISupportSection` does use `overflow-hidden` where most sections use `overflow-x-clip`,
but it contains no sticky positioning, so this is not the defect that pattern causes
elsewhere and it was deliberately left alone rather than refactored on suspicion.

**Test steps.** Open and close both accordions; confirm each CTA lands on its own
programme section rather than the top of the page.

### Batch 8 — Why my approach is different

**Exists.** The three-level architecture is intact: *What I Bring* (three columns),
*How I Work* (five `COMPARISON` principles), *Where It Lands* (intersection statement and
closing quote). The five principles run through `SelectablePanel variant="label"`, so one
is active at a time and only one explanation is ever displayed — the brief's "do not
display five long explanations simultaneously" is already satisfied. The selected
principle is distinguished by gold border and wash plus an edge marker, not by colour
alone. The "See how we would work together" CTA is a real button-styled link to
`/work-with-me`.

**Defective or missing.** Stacked layout only, as above.

**Test steps.** Select each of the five principles; confirm the explanation panel swaps;
confirm the CTA routes.

### Batch 9 — Choose the pathway

**Exists.** Both cards, their qualifier lists under "This is for you if…", the programme
lists, and the "Two programmes, one strategic foundation" closing line. Cards share a
baseline so differing content lengths still balance. Light and dark treatments are
preserved and no "recommended" badge exists.

**Defective.** The whole card was clickable via a full-bleed overlay link sitting above
the card's own CTA. The brief rules this out: "Do not automatically make the entire card
clickable if there are nested controls/links; choose one accessible interaction model."
Overlay removed; the visible CTA is now the single interaction model, with the card's
hover lift and gold rail continuing to cue it.

**Test steps.** Tab through both cards and confirm exactly one focus stop each; confirm
both CTAs route; confirm mobile stacking keeps equal visual weight.

### Batch 10 — Founder statement, final CTA, footer

**Exists.** "A statement from the founder" eyebrow, the portrait seated on an arc with a
contact shadow and masked base, and "Read the Founder Story" as a `cta-secondary` button
to `/about` — the same interaction language as other secondary buttons. The dark final
CTA is preserved with its two audience-specific actions, "Book a Strategic Clarity Call"
to `/contact` and "Discuss an Organisational Engagement" to `/organizations`. Footer runs
three logically separated bands.

**Route verification.** All destinations exist as routes: `/about`, `/contact`,
`/organizations`, `/work-with-me`, plus `/insights` and `/private-payment`.

**Defective or missing.** No analytics existed anywhere in the codebase, so "verify both
final CTAs route correctly and are trackable" was half unmet: the routes were correct, the
trackability did not exist. Addressed in Batch 12. Two footer contrast items were fixed —
see Batch 3.

### Batch 11 — Responsive, accessibility, interaction QA

**Exists.** Reduced motion is honoured globally in `styles.css`, including the stacked
panel transitions and the hero entrance. `html`/`body` use `overflow-x: clip` to prevent
horizontal scroll. Interactive controls are semantic `<button>` and `<Link>` elements.
Images carry alt text or `aria-hidden`.

**Two accessibility defects found and fixed.**

The Radix `AccordionTrigger` had no focus style at all — the shared ring in `styles.css`
covers `.cta-*` and `.selectable-item`, but the programme accordions used neither. It now
takes `outline-current` on focus, so the ring is visible on the dark panel and the gold
panel without either caller configuring a colour.

Mobile navigation links used `py-1`, giving a tap target of roughly 30px. Raised to
`py-2.5` for roughly 41px, which meets the brief's "comfortable on mobile" without
disturbing the menu's spacing rhythm. Every other control was measured and already clears
44px: CTAs at 17px padding plus line box, selectable rows at `py-4`, impact pills at
`py-3`, accordion triggers at `py-4`.

**Defective — the one structural gap in the brief, now closed.** Batches 4, 6, 8 and 11
all ask for the explanation to sit directly beneath the selected item on narrow screens.
`SelectablePanel` previously had a single interaction model: a tablist plus one shared
panel, placed in a `lg:grid-cols-12` grid. Below `lg` that panel fell beneath the entire
list, so on a phone the answer to "what does gap 06 mean" appeared two screens away from
gap 06.

`SelectablePanel` now switches interaction model rather than merely restyling, because
the two layouts require genuinely different ARIA. Side by side it stays a tablist with
roving tabindex and arrow keys. Stacked, each row becomes a disclosure button with
`aria-expanded`, owning a `role="region"` directly beneath it — which is the only valid
option, since a tabpanel may not sit between tabs. `useIsStacked` drives the switch
through `useSyncExternalStore` with a server snapshot of "not stacked", so SSR emits the
desktop markup and narrow clients switch on hydration. Only the open region is in the
DOM, so `aria-controls` never points at a missing element, and collapsed rows stay in the
tab order because every disclosure button is individually tabbable.

Two consequences worth recording. Visual state moved from `aria-selected` to a
`data-active` attribute across 20 stylesheet rules, because the same row is a tab in one
layout and an expander in the other and must not change appearance with its role. And
`usePanelIntoView`, which existed to scroll the far-away panel into view, is now disabled
in the stacked model where it is redundant; it survives only as a short-viewport safety
net for the side-by-side layout.

Live cross-device testing is being run by the client team; the checklist is in section 5.

### Batch 12 — Motion system, CTA consistency, analytics

**Exists.** A single restrained motion system, confirmed by audit. Section reveals use
`--motion-reveal` (1500ms, with 1100/2100ms variants) and state changes use
`--motion-interaction` (320ms), so interaction is roughly five times faster than reveal —
the brief's "interactive state changes should be faster than large section reveals" holds
by construction rather than by coincidence. `--ease-editorial` and `--ease-out-soft` are
the only two easings in the codebase. No scroll-jacking; parallax is limited to `speed`
values of 0.08–0.12. All eight homepage CTA arrows use the shared `.cta-arrow` class, so
arrow movement is uniform.

**One outlier, removed.** `CTALink` and `DualCTA` in `primitives.tsx` carried their own
button styling and their own timing — `transition-all` at a hardcoded 300ms, outside both
the motion tokens and the `.cta-*` system. Both were unreferenced anywhere in the project.
Deleted rather than retuned: they were the only inconsistent timing left, and an unused
component with its own motion vocabulary is exactly how a page starts feeling assembled
from separate parts.

**Analytics — was entirely absent.** No gtag, dataLayer, Plausible or Vercel Analytics
anywhere in `src`, so nothing about the conversion funnel was measurable. Added
[../src/lib/analytics.ts](../src/lib/analytics.ts) as a seam rather than an integration,
because no provider has been chosen yet: `track(event, props)` is typed to the seven events
the brief names, logs in development, and no-ops in production until a provider is dropped
into its single `deliver` function. Both likely candidates are pre-typed on `window`.

All seven required events are wired, each carrying a `section` so the same conversion can
be compared across the places it is offered:

| Event | Fires from |
| ----- | ---------- |
| `strategic_clarity_call` | Introduction CTA, Final CTA, individual pathway card |
| `organisational_engagement` | Introduction CTA, Final CTA, organisational pathway card |
| `programme_explored` | Both programme CTAs, and either accordion opening |
| `founder_story_opened` | "Read the Founder Story" |
| `gap_selected` | Any of the eight gaps |
| `strategic_step_selected` | Any of the six framework steps |
| `methodology_principle_selected` | Any of the five principles, with the principle name |

Two details in service of the brief's "analytics do not block navigation": `track` swallows
its own errors, so a blocked or misconfigured provider cannot stop a CTA from navigating;
and selection events fire through a single `select` path in `useSelectableList`, so keyboard
traversal is recorded as faithfully as clicking. Accordion tracking counts openings only,
since Radix reports an empty value on close.

**Outstanding decision.** Which provider. Once chosen, only `deliver` changes.

**Out of scope, noted.** The other routes (`about`, `contact`, `work-with-me`,
`organizations`, `private-payment`) use bare `<span aria-hidden>→</span>` rather than
`.cta-arrow`, so their arrows do not animate on hover. This brief covers the homepage, so
they were left alone, but it is a real inconsistency for a follow-up pass.

---

## 4. What was deliberately not done

The brief's guardrails rule these out, and they are recorded here so their absence reads
as a decision rather than an omission.

- No redesign of any section, no new fonts, no palette change, no card or carousel
  conversions.
- No copy rewritten. Draft copy is flagged for sign-off above.
- No motion added where it already existed (Batch 3 explicitly warns against duplication).
- No decoration added to fill whitespace.
- No new animation framework; the existing stack covers every required behaviour.

---

## 5. Verification evidence

What was actually checked, as opposed to assumed. Recorded because the brief's central
complaint is that screenshots were treated as proof of behaviour.

- **Server-rendered markup**, fetched from a running dev server and counted rather than
  inspected by eye: 4 tablists, 4 tabpanels, and 24 items carrying `data-active` — 1 active
  and 23 inactive, matching 8 gaps + 6 steps + 5 principles + 5 pills exactly. This
  confirms every list renders with precisely one default selection.
- **Programme CTA destinations** read out of the rendered HTML: `/work-with-me#elevate` and
  `/work-with-me#lead-thrive`, one each, plus the separate general `/work-with-me` link
  from the methodology section.
- **Contrast** computed from the oklch source values through OKLab to linear sRGB to WCAG
  relative luminance, against surfaces composited the same way the browser composites them
  (including `color-mix` percentages and alpha over charcoal). Not sampled from a
  screenshot, which would bake in display profile and antialiasing.
- **Type check** clean across the project after every change.
- **Production build** succeeds, client and SSR, with `use-sync-external-store` present in
  the server bundle as expected for the new layout hook.

Still requires a real browser, and therefore sits with the client team: rendered appearance
at each width, and the stacked-to-side-by-side switch as a viewport crosses 1024px.

## 6. Responsive QA checklist

Widths chosen to cover narrow mobile, standard mobile, tablet portrait, the `lg`
breakpoint boundary where the selectable panels change model, and two desktop sizes.

| Width | What specifically to check |
| ----- | -------------------------- |
| 360 | Hero name legible and not obscuring nav; CTA buttons stack with comfortable targets; no horizontal scroll |
| 390 | Selectable panels: explanation appears directly under the tapped row in all four places (gaps, steps, principles, pills) |
| 768 | Motherhood two-column area; programme order intro → ELEVATE → portrait → Lead & Thrive; footer band wrapping |
| 1024 | The `lg` boundary — panels switch from stacked disclosure to two-column tabs; confirm no layout jump or duplicated content |
| 1280 | Programme headings not clipped by reveal transforms; founder portrait not colliding with copy |
| 1440 | Hero feet mask reads as intentional; seams do not band; shared ground line aligns under all three programme columns |

Cross-cutting, at every width: tab through the page and confirm every control shows a
visible focus ring; enable reduced motion at OS level and confirm content is still
reachable and complete; confirm no text overlaps an image.

### Highest-risk items from this round

Worth looking at first, because these are the changes most likely to need a judgement call
rather than a bug fix.

1. **The hero drop-shadow.** It is deliberately faint at 13%. The question is whether it
   separates her from the blush field without being noticeable as a shadow. If any haze is
   visible around her legs, it is too strong.
2. **The hero-to-introduction transition.** A straight gradient, not a curve. Confirm it
   reads as the banner resolving into the page rather than as a band across the bottom.
3. **The 1024px boundary.** Cross it slowly with a panel open. Selection should persist and
   the explanation should move from beside the list to beneath the chosen row, with no
   duplicated text and no jump.
4. **Stacked panels at 390px.** Tap gap 06, step 05, principle 04. Each explanation should
   open directly under the row tapped, and the previous one should close.
5. **Pathway cards.** Only the CTA is clickable now. Confirm that reads as intentional and
   that the card still invites the click.
6. **Gold small copy.** Eyebrow labels and gold emphasis inside paragraphs are darker than
   before. Confirm the page has not lost its lightness; the display headlines are unchanged
   and should look identical.
