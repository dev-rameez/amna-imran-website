# Homepage Approval Tracker

Change control for the homepage rebuild against `Amna_Imran_Homepage_Design_Review.docx`.

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
| 13 | The whole pathway card interactive | Card lifts on hover; the CTA remains the only click target | Stretching a link across the card blocks text selection over the qualifier copy, which is a lot of reading to make unselectable |
| 11 | Four differentiators | Five are shown | Inherited from the earlier build; needs a content decision, not a design one |
| 7, 9, 11 | — | Detail panels stack below their lists on narrow screens and scroll into view on selection | A true tabs-to-accordion restructure would touch the shared primitive and all four panels; deferred as a single deliberate change |

---

## Verification performed

- `npx tsc --noEmit` — clean
- ESLint — clean
- `npm run build` — succeeds; only pre-existing `"use client"` warnings from dependencies
- Rendered markup audit: one `h1`, 4 tablists / 24 tabs / 4 tabpanels, 33 unique element ids with no duplicates, every `aria-controls` and `aria-labelledby` target resolves, every `<img>` has an `alt`, every tab carries `aria-selected`
- Every off-canvas decoration confirmed to sit inside a clipping ancestor, so none of them can create a horizontal scrollbar

**Not yet verified:** rendered appearance at 375 / 768 / 1280. There is no headless browser in this
project, so type scale, the hero curve over the portrait, the section 5 gutter connector and the
sticky panels all need a visual pass in a real browser.

---

## Change requests after approval

| Date | § | Requested by | Change | Status |
| ---- | - | ------------ | ------ | ------ |
| | | | | |
