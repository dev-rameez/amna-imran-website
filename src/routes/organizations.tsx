import { createFileRoute, Link } from "@tanstack/react-router";
import { Hairline, Reveal, SelectablePanel } from "@/components/site/primitives";
import {
  Accent,
  ChapterDivider,
  CtaArrow,
  ONE_LINE_CTA,
  PAGE_SURFACE,
  PageCta,
  PageHeading,
  PageHero,
  PageSection,
  Seam,
} from "@/components/site/page-kit";
import {
  CARD,
  CREDENTIAL_LOGOS,
  MOVES_NEEDLE,
  NOT_WORKING,
  NUMERAL,
  OFFERINGS,
  OUTCOMES,
  PARTNER_CRITERIA,
  RESEARCH_OUTCOMES,
  SOUND_FAMILIAR,
  STATS,
  type Offering,
} from "@/components/site/organizations-content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/organizations")({
  head: () => ({
    meta: [
      { title: "For Organizations | Advance & Retain High-Potential Women Leaders" },
      { name: "description", content: "Coaching, workshops, and consulting that strengthen leadership pipelines and advance high-potential women within complex organizations." },
      { property: "og:title", content: "Organizations — Leadership Pipeline & Advancement" },
      { property: "og:description", content: "Evidence-based coaching and consulting for HR, L&D, DEI, and talent leaders." },
      { property: "og:url", content: "/organizations" },
    ],
    links: [{ rel: "canonical", href: "/organizations" }],
  }),
  component: Organizations,
});

const BADGE = "inline-flex items-center px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em]";

/** Hero evidence card: each figure carries a gold bar that fills as it reveals. */
function EvidenceCard() {
  return (
    <Reveal variant="fade-up" duration="slow" delay={140} className="relative">
      <div className={cn(CARD, "relative px-6 py-2 sm:px-8")}>
        <span aria-hidden className="absolute left-0 top-8 h-10 w-1 bg-[var(--gold)]" />
        <ul className="divide-y divide-[color-mix(in_oklch,var(--gold)_18%,transparent)]">
          {STATS.map((s, i) => (
            <Reveal key={s.l} as="li" delay={200 + i * 140} duration="slow" className="py-6">
              <div className="font-serif font-light text-[2.75rem] leading-none text-gold-warm md:text-[3.25rem]">
                {s.n}
                <span className="text-[1.35rem] text-copy-muted md:text-[1.6rem]">{s.suffix}</span>
              </div>
              <p className="mt-3 type-body text-copy">{s.l}</p>
              <div aria-hidden className="relative mt-4 h-px w-full bg-[color-mix(in_oklch,var(--gold)_18%,transparent)]">
                <span
                  className={cn(
                    "absolute -top-px left-0 h-[3px] origin-left scale-x-0 transition-transform duration-[1800ms] ease-[var(--ease-out-soft)] motion-reduce:transition-none [.reveal-from-fade-up-shown_&]:scale-x-100",
                    s.meter === null
                      ? "w-full bg-gradient-to-r from-[var(--gold)] via-[color-mix(in_oklch,var(--gold)_40%,transparent)] to-transparent"
                      : "bg-[var(--gold)]",
                  )}
                  style={s.meter === null ? undefined : { width: `${s.meter}%` }}
                />
              </div>
              <p className="mt-3 type-micro">{s.s}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/** "What isn't working" set against "What moves the needle", light then dark. */
function Diagnosis() {
  return (
    <div className="relative mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
      <Reveal duration="slow" as="div" className={cn(CARD, "p-7 md:p-10")}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow text-copy-muted">What isn't working</p>
          <span className={cn(BADGE, "bg-[#efd9d6] text-[#8a4a3f]")}>Low Yield</span>
        </div>
        <div className="mt-6 h-px w-full bg-[color-mix(in_oklch,var(--gold)_25%,transparent)]" />
        <ul className="mt-2">
          {NOT_WORKING.map((item, i) => (
            <Reveal
              key={item.t}
              as="li"
              delay={i * 100}
              duration="slow"
              className="flex gap-5 border-b border-[color-mix(in_oklch,var(--gold)_14%,transparent)] py-6 last:border-b-0 last:pb-0"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_oklch,var(--foreground)_22%,transparent)] font-serif italic text-[1rem] text-copy-muted"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif font-light type-h3 leading-tight text-foreground/80">{item.t}</h3>
                <p className="mt-2 type-body text-copy">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Reveal>

      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--gold)] font-serif text-[1.35rem] text-background shadow-[0_0_0_8px_color-mix(in_oklch,var(--cream)_80%,transparent)] lg:flex"
      >
        →
      </span>

      <Reveal duration="slow" delay={120} as="div" className="bg-foreground p-7 text-background md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow text-gold">What moves the needle</p>
          <span className={cn(BADGE, "bg-[#d8e3d1] text-[#4a6b3d]")}>High Impact</span>
        </div>
        <div className="mt-6 h-px w-full bg-background/20" />
        <ul className="mt-2">
          {MOVES_NEEDLE.map((item, i) => (
            <Reveal
              key={item.t}
              as="li"
              delay={120 + i * 100}
              duration="slow"
              className="group flex gap-5 border-b border-background/15 py-6 last:border-b-0 last:pb-0"
            >
              <span className={cn(NUMERAL, "text-gold transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-foreground")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif font-light type-h3 leading-tight text-background">{item.t}</h3>
                <p className="mt-2 type-body text-background/75">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

function OfferingDetail({ o }: { o: Offering }) {
  return (
    <div>
      <h3 className="font-serif font-light type-h1 text-foreground">{o.title}</h3>
      <p className="mt-3 font-serif italic text-[length:var(--text-lead)] text-gold-warm">{o.tagline}</p>
      <Hairline className="my-7" />
      <div className="grid gap-8 sm:grid-cols-2">
        {[
          { label: "Focus areas", items: o.focus },
          { label: "Delivery", items: o.delivery },
        ].map((col) => (
          <div key={col.label}>
            <p className="eyebrow text-gold-ink">{col.label}</p>
            <ul className="mt-4 space-y-3">
              {col.items.map((f) => (
                <li key={f} className="flex gap-3 text-[length:var(--text-body)] leading-[1.55] text-copy">
                  <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-[var(--gold)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 border-l-2 border-[var(--gold)] pl-5">
        <p className="eyebrow text-copy-muted">Best for</p>
        <p className="mt-2 type-body text-copy">{o.bestFor}</p>
      </div>
    </div>
  );
}

function Organizations() {
  return (
    <>
      <PageHero
        eyebrow="For Organizations"
        title={
          <>
            The investment is real.
            <br />
            The returns <Accent>have not been.</Accent>
          </>
        }
        lead={
          <p>
            A decade of DEI programs. The pipeline is still broken. Here is what the research says
            about why — and what actually changes things.
          </p>
        }
        actions={
          <Link
            to="/contact"
            className={cn(
              "cta-primary w-full sm:w-auto sm:self-start",
              ONE_LINE_CTA,
              "md:max-lg:gap-3 md:max-lg:px-4 md:max-lg:text-[0.625rem] md:max-lg:tracking-[0.05em]",
            )}
          >
            Schedule an Organizational Consultation <CtaArrow />
          </Link>
        }
        aside={<EvidenceCard />}
      />

      <Seam from="warm" into="cream" />

      {/* DIAGNOSIS */}
      <PageSection surface="cream">
        <PageHeading>
          The diagnostic is clear — the <Accent>prescriptions have not been.</Accent>
        </PageHeading>
        <Diagnosis />
      </PageSection>

      <Seam from="cream" into="warm" />

      {/* SOUNDS FAMILIAR */}
      <PageSection surface="warm">
        <Reveal duration="slow">
          <div className="text-center">
            <h2 className="type-h1 font-serif font-light text-foreground">
              <Accent>Sounds familiar?</Accent>
            </h2>
            <div className="mx-auto mt-5 h-px w-16 bg-[var(--gold)]/60" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-start">
          {SOUND_FAMILIAR.map((q, i) => (
            <Reveal
              key={q}
              delay={i * 120}
              duration="slow"
              as="article"
              className={cn(
                CARD,
                "group relative bg-background/70 p-7 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)] md:p-8",
                i === 1 && "md:mt-12",
                i === 2 && "md:mt-6",
              )}
            >
              <div aria-hidden className="select-none font-serif text-6xl leading-none text-[var(--gold)]">
                &ldquo;
              </div>
              <blockquote className="mt-2 font-serif italic text-[clamp(1.2rem,0.8vw+0.95rem,1.5rem)] leading-[1.35] text-foreground">
                {q}
              </blockquote>
              <p className="eyebrow mt-6 text-copy-muted">From conversations with HR leaders</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Seam from="warm" into="cream" />

      {/* CORPORATE OFFERINGS */}
      <PageSection surface="cream">
        <PageHeading>
          Four ways to move from <Accent>intention</Accent> to measurable outcome.
        </PageHeading>
        <Reveal delay={100} duration="slow">
          <p className="mt-6 max-w-3xl type-lead font-light text-copy">
            Designed for HR, L&amp;D, and leadership teams ready to go beyond programs &mdash; into
            structural change that actually retains and advances talent.
          </p>
        </Reveal>

        <Reveal duration="slow" delay={160}>
          <SelectablePanel
            className="mt-14"
            variant="numbered"
            label="Corporate engagements"
            panelClassName="lg:border lg:border-[color-mix(in_oklch,var(--gold)_20%,transparent)] lg:bg-background lg:p-10"
            items={OFFERINGS.map((o) => ({
              label: o.tab,
              meta: o.badge,
              detail: <OfferingDetail o={o} />,
            }))}
          />
        </Reveal>
      </PageSection>

      {/* RESEARCH + OUTCOMES — one dark chapter */}
      <PageSection surface="dark">
        <Reveal duration="slow">
          <p className="eyebrow text-gold">What the research says happens when this works</p>
        </Reveal>
        <div className="mt-10 grid gap-px border border-background/15 bg-background/15 md:grid-cols-3">
          {RESEARCH_OUTCOMES.map((r, i) => (
            <Reveal key={r.l} delay={i * 120} duration="slow" as="div" className="bg-foreground p-8 md:p-10">
              <div className="font-serif font-light text-[4rem] leading-none text-gold-warm md:text-[5rem]">{r.n}</div>
              <p className="mt-6 max-w-[260px] type-body text-background/80">{r.l}</p>
              <p className="mt-5 font-serif italic text-[length:var(--text-small)] text-background/55">{r.s}</p>
            </Reveal>
          ))}
        </div>

        <ChapterDivider className="mt-20" />

        <div className="mt-16">
          <PageHeading dark>
            What partners typically <Accent>achieve.</Accent>
          </PageHeading>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((o, i) => (
            <Reveal
              key={o.l}
              delay={(i % 3) * 100}
              duration="slow"
              as="div"
              className="group flex items-center gap-5 border border-background/20 p-6 transition-colors duration-500 hover:border-[var(--gold)] hover:bg-background/[0.04] sm:block md:p-7"
            >
              <span
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] font-serif text-[1.5rem] leading-none text-gold transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-foreground"
              >
                {o.n}
              </span>
              <p className="font-serif font-light text-[length:var(--text-lead)] leading-snug text-background sm:mt-6">{o.l}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* ORGANIZATIONS SERIOUS ABOUT PROGRESSION */}
      <PageSection surface="sand">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <PageHeading size="h1">
              Organizations serious about <Accent>progression.</Accent>
            </PageHeading>
            <Reveal delay={100} duration="slow">
              <div className="mt-8 h-px w-24 bg-[var(--gold)]/70" />
              <p className="mt-8 max-w-md type-body text-copy">
                Leadership equity is not achieved through intention alone. It requires deliberate
                development, structured support, and informed navigation of organizational realities.
              </p>
              <p className="mt-5 max-w-md type-body text-copy">
                If your organization is committed to strengthening its leadership pipeline through
                strategic, evidence-based coaching and consulting, I welcome a conversation.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal duration="slow">
              <p className="eyebrow text-gold-ink">We partner with organizations that:</p>
            </Reveal>
            <div className="relative mt-4">
              <div
                aria-hidden
                className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-[var(--gold)] via-[color-mix(in_oklch,var(--gold)_40%,transparent)] to-transparent"
              />
              <ol className="relative">
                {PARTNER_CRITERIA.map((c, i) => (
                  <Reveal key={c} as="li" delay={i * 100} duration="slow" className="group relative flex items-center gap-6 py-5 md:py-6">
                    <span
                      className={cn(NUMERAL, "relative z-10 transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-background")}
                      style={{ background: PAGE_SURFACE.sand }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 font-serif font-light text-[length:var(--text-lead)] leading-snug text-foreground transition-transform duration-500 group-hover:translate-x-1">
                      {c}
                    </p>
                    {i < PARTNER_CRITERIA.length - 1 && (
                      <span aria-hidden className="absolute bottom-0 left-16 right-0 h-px bg-[color-mix(in_oklch,var(--gold)_22%,transparent)]" />
                    )}
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </PageSection>

      <Seam from="sand" into="cream" />

      {/* TRAINING BEHIND METHODOLOGY */}
      <PageSection surface="cream">
        <PageHeading>
          The training behind the <Accent>methodology.</Accent>
        </PageHeading>
        <div className="relative mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {CREDENTIAL_LOGOS.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 100}
              duration="slow"
              as="article"
              className={`flex flex-col items-center gap-5 px-3 text-center ${
                i > 0 ? "md:border-l md:border-[color-mix(in_oklch,var(--hairline)_55%,transparent)]" : ""
              }`}
            >
              <div className="flex h-20 w-full items-center justify-center md:h-24">
                <img
                  src={c.logo}
                  alt={c.label}
                  loading="lazy"
                  className="h-14 w-auto max-w-[220px] object-contain md:h-16"
                  style={{ transform: `scale(${c.scale})`, transformOrigin: "center" }}
                />
              </div>
              <p className="eyebrow min-h-[2.5rem] max-w-[15rem] leading-[1.45] tracking-[0.11em] text-copy">{c.label}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageCta
        title={
          <>
            Strengthen the pipeline. Support the leaders <Accent>already within it.</Accent>
          </>
        }
        body="A confidential discussion to explore your leadership goals, current challenges, and how structured advancement coaching could support your talent strategy."
        actions={
          <>
            <Link to="/contact" className={cn("cta-primary-invert", ONE_LINE_CTA)}>
              Schedule an Organizational Consultation <CtaArrow />
            </Link>
            <Link to="/work-with-me" className={cn("cta-secondary-invert", ONE_LINE_CTA)}>
              Explore Individual Coaching <CtaArrow />
            </Link>
          </>
        }
      />
    </>
  );
}
