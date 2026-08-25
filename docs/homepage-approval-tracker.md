# Homepage Approval Tracker

Change control for the homepage rebuild against `Amna_Imran_Homepage_Design_Review.docx`
(Round 1) and `Homepage Review – Round 2 Design Refinement.pdf` (Round 2).

> **The two reviews number sections differently.** Round 1 lists 16 sections; Round 2 lists 14.
> The tables below use Round 1 numbering throughout, and the Round 2 table maps across.

**How to use this file.** Once a section is marked Approved, it is only refined, never
reinterpreted. If a change to an approved section is needed, add a row to
[Change requests after approval](#change-requests-after-approval) rather than editing the
section silently — that is how the earlier rounds of rework started.

Status values: `Built` (implemented, awaiting review) · `Approved` (signed off) ·
`Blocked` (waiting on content or an asset) · `Open` (not started).

---

## Section status

| §  | Section | Priority | Status | Notes |
| -- | ------- | -------- | ------ | ----- |
| 1  | Header & navigation | Medium | Built | Logo enlarged, sticky compaction after 80px scroll, hover/focus states, active-route indicator |
| 2  | Hero | High | Built | Ambient glow, contact shadow, base mask, cream curve into §3. **Mask quality around hair and arms still needs a cleaner alpha cut-out — cannot be fixed in CSS** |
| 3  | Positioning statement & CTAs | High | Built | Lead copy at `type-lead`, both CTAs on the shared CTA system, spacing tightened, hairline connects it to the hero curve |
| 4  | Credentials | Medium | Built | Logos +12–14%, labels at caption scale with `text-copy`, spacing tightened. Vertical optical centring per logo still needs an eyeball pass |
| 5  | High performance alone | Medium-High | Built | Formula enlarged, sequential reveal then conclusion, key phrases marked, gutter connector |
| 6  | Common internal narratives | Medium | Built | Serif numerals, quotes up one step, dividers at 30%, staggered reveal, hover highlight, background depth |
| 7  | The progress narrative & eight gaps | High | Built | "So why does this persist?" transition, eight gaps as a selectable interaction with a sticky detail panel. **Gap explanations are draft copy** |
| 8  | Motherhood penalty & psychological impact | High | Built | Paragraphs and labels enlarged, impact pills now interactive with explanations, consequence names disengagement/burnout/premature exit, dark connector into §9. **Pill explanations are draft copy** |
| 9  | A more strategic way forward | High | Built | Extracted to its own component, six-step interaction with a connected progress path, even columns, motif carried from §8. **Step descriptions are draft copy** |
| 10 | How I support | P0 | Built | Approved structure restored, `SUPPORT_FOCUS` list, detail behind accordions, real CTA, centre portrait |
| 11 | Why my approach is different | P0 | Built | Selectable differentiators with one detail panel, disciplines enlarged, portrait grounded. **Shows five principles — confirm whether the fifth (credential biography) belongs here** |
| 12 | Quote transition | Medium | Built | Quote enlarged, block height reduced, main line then sub line reveal, motif carried down from §11 |
| 13 | Choose the pathway | High | Built | Shared baseline and equal weight, "This is for you if…" qualifiers, connecting rail, larger CTAs, closing punchline. **Qualifiers are draft copy** |
| 14 | Founder statement | High | Built | Labelled "A statement from the founder", statement rendered as a quote block, portrait grounded on an arc with a masked base. **Final first-person statement wording still needed** |
| 15 | Final CTA | Medium | Built | Body copy at `type-lead`, explicit CTA labels, concentric gold arc texture, soft blush-into-dark transition |
| 16 | Footer | Medium | Built | Text and icons enlarged, contrast raised, three bands with dividers. **No contact details and no social links exist — content gap** |

---

## Round 2 refinement pass

**Important context.** Round 2 was written against a build that predates Batches 4–6 of Round 1.
The evidence: it asks for the hero ambient glow and contact shadow, larger credential logos,
larger footer text and more visible narrative numerals — all delivered in Batches 4 and 5 — while
quoting "So why does this persist?" and "the explanatory text on the right", which only exist from
Batch 3 onward. Roughly half of Round 2 was therefore already implemented when it was written.

Round 2 also asks three times for interaction that already exists (its §6, §8 and §10 are all
selectable tab panels with detail views). Treated as an **affordance** problem rather than a
missing feature: the states were strengthened so the lists visibly read as choosable, instead of
rebuilding working interactions.

| R2 § | R1 § | Asked for | Outcome |
| ---- | ---- | --------- | ------- |
| 1 | 1 | Larger logo, larger nav, hover states, Book a Call hover, smooth sticky | Already built in Batch 5. Added a shadow to `.cta-secondary:hover`, which the header button uses |
| 2 | 2 | Shadow, glow, edge blending; Amna +5–10%; softer transition | Glow and shadow already built. Portrait `scale(1.06)` → `1.12`; second tight drop-shadow for edge blending; hero curve deepened to two layers and the blush now bleeds into the cream below. **Edge quality still needs a cleaner alpha cut-out** |
| 3 | 3, 4 | Larger body, logos +10%, larger labels, credentials part of the introduction | Credentials moved *inside* the introduction section — one block, shared axis, centred label. Labels 13px → 15px with tracking eased to 0.11em. Logos were already +12–14% |
| 4 | 5 | Larger paragraphs and line height, stronger key phrases, heavier numbered list | Global type change below. Numerals 2.75rem → 3.5rem with the spine realigned; item type up a step. Key phrases were already marked |
| 5 | 6, 12 | More visible numerals, larger quote, more breathing room, fade-in per narrative | Numerals and reveals already built. `SectionQuote` enlarged and its padding roughly doubled; the section-5 wrapper went from `mt-12` to `mt-20 md:mt-28`. **This reverses a Round 1 instruction to reduce that block's height** |
| 6 | 7 | Hover/select highlights and updates the explanation; larger explanation | Interaction already built. Added row wash, active edge marker and a hover chevron; detail copy moved to the new `.type-body-emphasis` step |
| 7 | 8 | Less paragraph reliance, stronger hierarchy, highlighted statements, more visual impacts, larger closing quote | Three research paragraphs given three different weights: finding, serif standout for the fatherhood bonus, then conclusion. Impact pills were already interactive; their explanation moved up a step. Closing quote enlarged via `SectionQuote` |
| 8 | 9 | Visually active selection, stronger active state, more readable paragraphs | Selection already built; strengthened with the shared row treatment |
| 9 | 10 | Image connected to the cards, overlapping the layout; larger body; stronger CTA | Portrait up to 540/600px with a drop shadow, arc widened to bleed behind both cards at `-z-10`, and a shared ground line drawn across all three columns |
| 10 | 11 | Clearer hierarchy, interactive principles, readable paragraphs, Amna overlapping the arch | Interaction already built. Arch biased left of her so her shoulder crosses its edge; portrait up to 580/650px and bleeding into the right margin |
| 11 | 13 | Less dead space in card one, equal balance, stronger hover, whole card clickable, prominent CTA | `flex-1` moved off the programme list to `mt-auto` on the CTA, so the slack sits before the button instead of inside the list. Whole-card click target added. Card-two CTA promoted from secondary to primary. Hover now lifts and casts a shadow |
| 12 | 14 | "Read the Founder Story" more prominent, larger image, interaction with shapes | Promoted from a text link to `.cta-secondary`. Portrait column up to 560/640px, image to 128%, plus an open gold arc behind her |
| 13 | 15 | Readable paragraph, stronger hover, clear button hierarchy | Copy already at `type-lead`; hierarchy already primary/secondary. Added hover shadows to both inverted variants |
| 14 | 16 | Larger text, spacing between nav groups, social icon visibility | Text already enlarged. Nav separators 2.5 → 4/5, band gaps opened up. **There are still no social icons — the marks in the footer are credentials** |
| Global | — | Readability, continuous flow, micro-interactions, consistency | See below |

### Global changes

- **Readability.** `--text-body` 17–20px → 18–21px and `--leading-body` 1.68 → 1.76. The three
  ad-hoc `md:text-[1.05em]` / `[1.08em]` multipliers were removed so the scale lives in one place.
  New `--text-body-emphasis` step (19–23px) for detail panels.
- **Continuous flow.** The top half of the page had five untreated boundaries while the bottom
  half had a `SectionSeam` at every one. Seams added at High Performance → Narratives,
  Narratives → Progress Narrative, and Progress Narrative → Motherhood. Introduction and
  credentials merged into one section. Hero curve deepened with a blush bleed below it.
- **Consistency.** Surface colours now come from one `SURFACE` map in `index.tsx`, and
  `SectionSeam` accepts explicit `fromFill` / `intoFill`. Every seam is pinned to its neighbours'
  exact colours, so none of them can band — the four original seams were each slightly off.

---

## Content still needed from the client

| Item | Section | Blocking |
| ---- | ------- | -------- |
| Sign-off on the eight gap explanations | §7 | No — draft copy is in place |
| Sign-off on the five impact pill explanations | §8 | No — draft copy is in place |
| Sign-off on the six step descriptions | §9 | No — draft copy is in place |
| Sign-off on the six pathway qualifiers | §13 | No — draft copy is in place |
| Gallup statistic, if one is to be quoted | §11 | No — the placeholder sentence has been removed |
| Final founder statement wording, first person | §14 | Yes — currently reusing the positioning sentence |
| Contact details: email, phone | §16 | Yes — no contact information anywhere in the footer |
| Social profile URLs | §16 | Yes — the review assumed these were present |
| Cleaner alpha cut-out of the hero portrait | §2 | Yes — edge quality around hair and arms |

All draft copy is marked in the source with a `DRAFT COPY` comment. To find every instance:

```bash
rg -n "DRAFT COPY" src/
```

---

## Deviations from the review

Deliberate departures, each with a reason. Overrule any of these if you disagree.

| § | Review asked for | What was built | Why |
| - | ---------------- | -------------- | --- |
| 11 | Four differentiators | Five are shown | Inherited from the earlier build; needs a content decision, not a design one |
| 7, 9, 11 | — | Detail panels stack below their lists on narrow screens and scroll into view on selection | A true tabs-to-accordion restructure would touch the shared primitive and all four panels; deferred as a single deliberate change |
| 13 | Whole pathway card clickable (Round 2 §11) | Built. A full-card `aria-hidden`, `tabindex="-1"` overlay link sits under the visible CTA | Round 1 deferred this because a stretched link makes the qualifier copy unselectable. Round 2 asked again, so it is now in. Keyboard and screen reader users still get exactly one link per card |

---

## Verification performed

- `npx tsc --noEmit` — clean
- ESLint — clean
- `npm run build` — succeeds; only pre-existing `"use client"` warnings from dependencies
- Rendered markup audit: one `h1`, 4 tablists / 24 tabs / 4 tabpanels, 33 unique element ids with no duplicates, every `aria-controls` and `aria-labelledby` target resolves, every `<img>` has an `alt`, every tab carries `aria-selected`
- Every off-canvas decoration confirmed to sit inside a clipping ancestor, so none of them can create a horizontal scrollbar

### Round 2 verification

- `npx tsc --noEmit` — clean
- ESLint on the changed files — no new findings. The repo reports ~7,000 pre-existing
  `prettier/prettier` errors on untouched lines; it has never been Prettier-formatted, and
  reformatting it is out of scope here
- `npm run build` — succeeds
- Compiled CSS confirmed to contain `--text-body-emphasis`, `.type-body-emphasis`,
  `.selectable-row`, `.selectable-chevron`, `.pathway-card` and `--leading-body: 1.76`
- Rendered markup audit against the dev server: 7 seams, each pinned to its neighbours' exact
  colours; 19 selectable rows with chevrons and 5 impact pills correctly excluded from the row
  treatment; credentials confirmed inside the introduction's `<section>`; both whole-card overlay
  links carry `aria-hidden="true"` and `tabindex="-1"`
- Every negative-margin bleed confirmed to sit inside a section with `overflow-hidden`, so none of
  them can create a horizontal scrollbar

> **`vite preview` serves a stale build.** It reads the leftover `dist/` directory, not `.output/`.
> The Round 1 markup audit was very likely run against that stale build. Audit against
> `npm run dev` instead, or delete `dist/`.

**Not yet verified:** rendered appearance at 375 / 768 / 1280. There is no headless browser in this
project. The highest-risk item is the hero portrait at `scale(1.12)` — it grows from the bottom
edge, so the ceiling is the transparent headroom above her head in the source cut-out. If the top
of her head clips, reduce toward `1.09`. Also needs eyes: the deepened hero curve, the widened arc
behind the programme portrait, and card balance in the two pathways.

---

## Change requests after approval

| Date | § | Requested by | Change | Status |
| ---- | - | ------------ | ------ | ------ |
| 2026-08-20 | 2 | Client | Remove the hero portrait's ambient glow, contact shadow and drop shadows. The glow made the blush field look spotlit and the shadows left a haze around her legs | Superseded 2026-08-25 |
| 2026-08-20 | 2, 3 | Client | Remove the curved cream sweep at the base of the banner, plus the blush wash and gold hairline that carried it into the section below. The banner now ends on a straight edge as a plain full-width cover | Superseded 2026-08-25 |
| 2026-08-25 | 2 | Implementation brief | Restore restrained depth behind the portrait. Implemented as a single silhouette drop-shadow at 13% charcoal — deliberately not the radial ambient glow, which the brief also rules out as "a visible glow effect" | Done |
| 2026-08-25 | 2, 3 | Implementation brief | Restore continuity at the hero boundary. Implemented as a straight vertical resolve into the next section's warm cream, plus a short blush trace below it. Deliberately not a curve | Done |
| 2026-08-25 | 13 | Implementation brief | Remove the whole-card click target on the pathway cards. The brief rules it out where a card contains its own controls: "choose one accessible interaction model" | Done |

**The 2026-08-20 pair has now been reversed a third time, by the implementation brief.** Round 1
asked for depth so she would not read as placed on top; the client removed it; this brief asks for
it back. The same is true of the hero boundary. Both are now implemented in the mildest form that
satisfies the brief, specifically so they do not reproduce what the client objected to:

- The glow is *not* back. Only a shadow that follows her outline, which cannot light the blush field
  unevenly and cannot pool as a haze, because it has no shape of its own.
- The curve is *not* back. The transition is a straight gradient, so nothing reads as a shape parked
  in the banner.

Each is a single self-contained block and can be dropped independently if the client objects again.
If they do, that is a genuine three-way disagreement between Round 1, the client and this brief, and
it needs resolving with the reviewer rather than another reversal.

The hero portrait's base mask now fades from 78% of its height, lengthened from 82%. The mask is not
decoration — the cut-out ends mid-leg, so a short fade leaves a hard grey cut across her trousers.
It was tightened to 95% on 2026-08-20 and reverted the same day for that reason; lengthening is the
safe direction.

### Flagged for client decision — not changed

Display accents set in `--gold-warm` measure 2.1–2.3:1 against the page's light surfaces. WCAG
requires 3:1 even for large text, so the section headline accents ("High-Potential", "Women",
"strategically?", the pull quotes) fall short. This was **not** changed, because it is the signature
of the approved art direction and every guardrail in the brief forbids altering it — "no palette
changes", "maintain the current serif/script hierarchy", "do not change the hero typography".

Small copy was a different matter and was fixed: see the contrast section of
[implementation-brief-verification.md](implementation-brief-verification.md#batch-3--performance-paradox--internal-narratives).
Making the display accents compliant needs either a slightly deeper display gold or a decision to
accept the shortfall on decorative headline words. That is a client call.
