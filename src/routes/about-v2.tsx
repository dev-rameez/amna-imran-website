import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Eyebrow, Reveal } from "@/components/site/primitives";
import {
  Accent,
  ChapterDivider,
  CtaArrow,
  ONE_LINE_CTA,
  PAGE_SURFACE,
  PageCta,
  PageHeading,
  PageHero,
  PageQuote,
  PageSection,
  SCRIPT_LABEL,
  Seam,
} from "@/components/site/page-kit";
import { cn } from "@/lib/utils";
import portrait from "@/assets/amna-insights.png";

export const Route = createFileRoute("/about-v2")({
  head: () => ({
    meta: [
      { title: "Meet Amna Imran | Leadership Coach & Gender Strategy Expert" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutV2,
});

const FIVE_SHIFTS = [
  { n: "01", label: "Expanding", accent: "leadership", tail: "definitions" },
  { n: "02", label: "Leveraging", accent: "strengths", tail: "authentically" },
  { n: "03", label: "Understanding", accent: "systemic", tail: "patterns" },
  { n: "04", label: "Navigating them", accent: "strategically", tail: "" },
  { n: "05", label: "Building influence without", accent: "self-erasure", tail: "" },
];

const POSITIONING = [
  {
    t: "Performance Is Not the Whole Story",
    d: "Many high-performing women are told that hard work and confidence alone will lead to advancement. Yet performance, visibility, perception, and bias interact in complex ways.",
  },
  {
    t: "Systems Are Not Neutral",
    d: "Corporate progression happens within formal and informal systems — promotion criteria, sponsorship access, leadership norms, and evaluation patterns.",
  },
  {
    t: "Strategy Creates Clarity",
    d: "Rather than offering generic confidence advice, this work provides structured, research-informed approaches to leadership presence, stakeholder influence, advancement, and sustainable success.",
  },
];

const NUMERAL =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] font-serif italic text-[1rem] text-gold-deep";

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="relative mt-5 border-l-2 border-[var(--gold)]/50 pl-8 font-serif text-[22px] leading-[1.3] text-foreground md:pl-10 md:text-[26px]">
      <span aria-hidden className="absolute -top-2 left-3 select-none font-serif text-[48px] leading-none text-[var(--gold)]/60 md:text-[56px]">
        “
      </span>
      {children}
    </blockquote>
  );
}

/** The personal note, split into the chapters it already has. */
const CHAPTERS: { label: string; body: ReactNode }[] = [
  {
    label: "Lived experience across cultures",
    body: (
      <>
        <p className="mt-4 font-serif italic text-[20px] leading-[1.35] text-foreground md:text-[24px]">
          My work is shaped not only by research and professional training, but by lived
          experience across cultures.
        </p>
        <p className="mt-5 type-body text-copy">
          As an expatriate, I followed my husband's career across countries while raising two boys
          of my own. With each move came reinvention — professionally, socially, structurally. I
          witnessed firsthand how mobility, caregiving, and invisible labor shape women's
          professional trajectories in ways that are rarely acknowledged in leadership
          conversations.
        </p>
      </>
    ),
  },
  {
    label: "The repeated pattern",
    body: (
      <>
        <p className="mt-4 type-body text-copy">Across geographies, one pattern repeated itself.</p>
        <PullQuote>
          “Brilliant, capable women — highly educated, high-performing — quietly questioning
          themselves.”
        </PullQuote>
        <div className="mt-6 space-y-2 font-serif text-[17px] leading-snug text-foreground md:text-[19px]">
          <p>Not because they lacked competence.</p>
          <p className="pl-6 italic text-gold-warm md:pl-8">
            But because the environments they were navigating were not designed with them in mind.
          </p>
        </div>
      </>
    ),
  },
  {
    label: "What INSEAD helped clarify",
    body: (
      <>
        <p className="mt-4 type-body text-copy">
          Later, during my gender balance study at INSEAD, I began to see these patterns more
          clearly. Organizational research illuminated what many women experience but struggle to
          articulate:
        </p>
        <p className="mt-6 border-l-2 border-[var(--gold)]/60 pl-5 font-serif italic text-[17px] leading-[1.5] text-foreground md:text-[19px]">
          Leadership structures were historically built around uninterrupted career paths, narrow
          behavioral norms, and assumptions that align more closely with traditional male career
          trajectories.
        </p>
        <div className="mt-6 space-y-2 font-serif text-[18px] leading-snug md:text-[20px]">
          <p className="text-foreground">The issue was not that women needed to become more like men.</p>
          <p className="italic text-gold-warm">The issue was that leadership prototypes were too narrow.</p>
        </div>
      </>
    ),
  },
  {
    label: "The “fix-women” narrative",
    body: (
      <>
        <p className="mt-4 type-body text-copy">
          And yet, much of the advice directed at women still centers on self-correction:
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {["Speak more like….", "Negotiate like….", "Lead more assertively.", "Adapt to the model."].map((line) => (
            <li
              key={line}
              className="border border-[color-mix(in_oklch,var(--gold)_35%,transparent)] bg-background/60 px-4 py-2 font-serif italic text-[16px] text-foreground/85 md:text-[17px]"
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-6 type-body text-copy">
          This “fix-women” narrative overlooks a critical truth: many women are not
          underperforming — they are operating within systems calibrated to reward a specific
          style of leadership.
        </p>
      </>
    ),
  },
  {
    label: "Why awareness is clarifying",
    body: (
      <>
        <div className="relative mt-5 bg-foreground px-7 py-8 text-background md:px-9 md:py-10">
          <span aria-hidden className="absolute left-0 top-8 h-10 w-1 bg-[var(--gold)]" />
          <p className="font-serif font-light text-[clamp(1.35rem,1vw+1rem,1.85rem)] leading-snug text-background">
            “Awareness of systemic bias is not disempowering. It is{" "}
            <em className="italic text-gold-warm">clarifying.</em>”
          </p>
        </div>
        <p className="mt-6 type-body text-copy">
          When women understand how evaluation norms, sponsorship dynamics, caregiving
          expectations, and leadership prototypes shape progression, self-doubt often gives way to
          strategic insight.
        </p>
      </>
    ),
  },
  {
    label: "The transformative shift",
    body: (
      <>
        <p className="mt-4 font-serif italic text-[20px] leading-[1.35] text-foreground md:text-[24px]">
          That shift — I have witnessed firsthand — is{" "}
          <em className="italic text-gold-warm">transformative.</em>
        </p>
        <div className="mt-10 flex items-center gap-4">
          <span aria-hidden className="h-px w-12 bg-[var(--gold)]" />
          <p className={SCRIPT_LABEL}>Amna</p>
        </div>
      </>
    ),
  },
];

function PersonalChapters() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute bottom-10 left-5 top-5 w-px bg-gradient-to-b from-[var(--gold)] via-[color-mix(in_oklch,var(--gold)_40%,transparent)] to-transparent"
      />
      <ol className="relative space-y-12 md:space-y-14">
        {CHAPTERS.map((c, i) => (
          <Reveal key={c.label} as="li" duration="slow" className="group relative flex gap-5 md:gap-8">
            <span
              className={cn(NUMERAL, "relative z-10 transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-background")}
              style={{ background: PAGE_SURFACE.blush }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1 pt-2">
              <p className="eyebrow text-gold-ink">{c.label}</p>
              {c.body}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function AboutV2() {
  return (
    <>
      <PageHero
        eyebrow="About · Amna Imran"
        eyebrowScript
        containerClassName="pb-0"
        asideAlign="end"
        className="overflow-visible"
        size="h1"
        title={
          <>
            The goal is not to fix women. It is to equip them to navigate — and ultimately{" "}
            <Accent>influence</Accent> — the systems in which they lead.
          </>
        }
        lead={
          <p>
            My work sits at the intersection of individual capability and organizational reality —
            combining coaching, evidence-based gender insight, strengths science, and systems
            awareness to help high-potential women progress without compromising authenticity or
            wellbeing.
          </p>
        }
        inlineActions
        actions={
          <>
            <Link to="/contact" className={cn("cta-primary w-full sm:w-auto", ONE_LINE_CTA)}>
              Book a Strategic Clarity Call <CtaArrow />
            </Link>
            <Link to="/organizations" className={cn("cta-secondary w-full sm:w-auto", ONE_LINE_CTA)}>
              For Organizations <CtaArrow />
            </Link>
          </>
        }
        aside={
          <Reveal variant="fade-up" duration="slow" delay={140} className="relative z-10 mx-auto -mb-20 w-[min(100%,16.5rem)] md:-mb-28 lg:w-[18rem]">
            <div
              aria-hidden
              className="absolute inset-[4%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, color-mix(in oklch, var(--gold-subtle) 75%, transparent), transparent 70%)",
              }}
            />
            <div aria-hidden className="absolute inset-[8%] rounded-full border border-[color-mix(in_oklch,var(--gold)_35%,transparent)]" />
            <div aria-hidden className="absolute inset-[15%] rounded-full border border-[color-mix(in_oklch,var(--gold)_15%,transparent)]" />
            <img
              src={portrait}
              alt="Amna Imran portrait"
              className="relative mx-auto block h-auto max-h-[24rem] w-full object-contain object-bottom select-none lg:max-h-[28rem]"
              draggable={false}
            />
          </Reveal>
        }
      />

      <Seam from="warm" into="cream" intensity="soft" />

      {/* POSITIONING — three connected points */}
      <PageSection surface="cream">
        <PageHeading>
          At the intersection of <Accent>capability</Accent> and organizational reality.
        </PageHeading>

        <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {POSITIONING.map((p, i) => (
            <Reveal key={p.t} as="li" delay={i * 140} duration="slow" className="group relative pt-16">
              <span
                aria-hidden
                className="absolute left-12 right-0 top-5 h-px bg-gradient-to-r from-[var(--gold)] to-[color-mix(in_oklch,var(--gold)_12%,transparent)]"
              />
              <span
                className={cn(
                  NUMERAL,
                  "absolute left-0 top-0 transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-background",
                )}
                style={{ background: PAGE_SURFACE.cream }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif font-light type-h2 leading-tight text-foreground transition-transform duration-500 group-hover:translate-x-1">
                {p.t}
              </h3>
              <p className="mt-4 type-body text-copy">{p.d}</p>
            </Reveal>
          ))}
        </ol>

        <ChapterDivider className="mx-auto mt-16 max-w-3xl md:mt-20" />
        <Reveal duration="slow">
          <p className="mx-auto mt-10 max-w-3xl text-center font-serif italic text-[clamp(1.2rem,0.8vw+0.95rem,1.5rem)] leading-[1.45] text-foreground">
            As an ACC-credentialed coach with the International Coaching Federation, a Certified
            Diversity Professional, and a strengths practitioner trained by Gallup, I combine
            coaching with evidence-based gender insight to help high-potential women navigate these
            dynamics <em className="italic text-gold-warm">strategically.</em>
          </p>
        </Reveal>
      </PageSection>

      <Seam from="cream" into="blush" />

      {/* A PERSONAL REALIZATION — chapters on a gold spine */}
      <PageSection surface="blush">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>A Personal Note</Eyebrow>
          </Reveal>
          <PageHeading>
            A Personal <Accent>Realization.</Accent>
          </PageHeading>
        </div>

        <div className="mt-10 md:mt-12 md:max-w-3xl md:mx-auto">
          <Reveal delay={120} duration="slow">
            <div className="note-paper relative rotate-[-0.35deg] border border-[color-mix(in_oklch,var(--gold)_18%,transparent)] px-6 py-10 sm:px-10 md:rotate-[-0.5deg] md:px-12 md:py-14">
              <div aria-hidden className="absolute left-1/2 top-0 h-3 w-16 -translate-x-1/2 -translate-y-1/2 bg-[color-mix(in_oklch,var(--gold)_35%,var(--cream))] shadow-[0_2px_6px_oklch(0.4_0.04_70_/_0.2)]" />
              <PersonalChapters />
            </div>
          </Reveal>
        </div>
      </PageSection>

      <Seam from="blush" into="dark" />

      {/* WHY THIS MATTERS — five shifts as one journey */}
      <PageSection surface="dark">
        <PageHeading dark size="h1" eyebrow="Why This Matters">
          Equipping women to navigate — and <Accent>ultimately influence</Accent> the systems in
          which they lead.
        </PageHeading>
        <Reveal delay={120} duration="slow">
          <div className="mt-8 max-w-2xl md:mt-10">
            <p className="type-body text-background/80">
              I do not believe the solution is to reshape women into replicas of a traditional
              leadership archetype.
            </p>
            <p className="mt-3 font-serif italic text-[18px] leading-snug text-gold-warm md:text-[20px]">
              I believe the solution lies in five shifts —
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {FIVE_SHIFTS.map((s, i) => {
            const destination = i === FIVE_SHIFTS.length - 1;
            return (
              <Reveal key={s.n} as="li" delay={i * 120} duration="slow" className="group relative pt-10">
                <span
                  aria-hidden
                  className="absolute left-5 right-0 top-[7px] h-px bg-gradient-to-r from-[var(--gold)] to-[color-mix(in_oklch,var(--gold)_12%,transparent)]"
                />
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-0 h-4 w-4 rounded-full border border-[var(--gold)] transition-colors duration-700",
                    destination
                      ? "bg-[var(--gold)] ring-4 ring-[color-mix(in_oklch,var(--gold)_22%,transparent)]"
                      : "bg-foreground group-hover:bg-[var(--gold)]",
                  )}
                />
                <p className="eyebrow text-gold">{s.n}</p>
                <p className="mt-3 font-serif font-light text-[clamp(1.3rem,0.7vw+1rem,1.6rem)] leading-[1.25] text-background">
                  {s.label} <em className="italic text-gold-warm">{s.accent}</em>
                  {s.tail ? <> {s.tail}</> : null}
                </p>
              </Reveal>
            );
          })}
        </ol>

        <ChapterDivider className="mt-16 md:mt-20" />

        <Reveal duration="slow">
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="type-body text-background/80">
              Learning evidence-based techniques to operate within complex systems is far more
              powerful than internalizing a narrative of deficiency.
            </p>
            <p className="mt-4 font-serif italic text-[clamp(1.25rem,0.8vw+1rem,1.6rem)] leading-snug text-background">
              This perspective shapes every aspect of my work.
            </p>
          </div>
        </Reveal>
      </PageSection>

      <Seam from="dark" into="sand" />

      {/* THE WORK — closing statement */}
      <PageSection surface="sand">
        <PageQuote sub={<span className="eyebrow text-copy-muted">— The Work</span>}>
          The goal is not to fix women. It is to equip them to navigate — and ultimately{" "}
          <em className="italic text-gold-warm">influence</em> — the systems in which they lead.
        </PageQuote>
      </PageSection>

      <PageCta
        from="sand"
        title={
          <>
            Ready to move forward
            <br />
            <Accent>strategically?</Accent>
          </>
        }
        inlineActions
        actions={
          <>
            <Link to="/contact" className={cn("cta-primary-invert", ONE_LINE_CTA)}>
              Book a Strategic Clarity Call <CtaArrow />
            </Link>
            <Link to="/organizations" className={cn("cta-secondary-invert", ONE_LINE_CTA)}>
              For Organizations <CtaArrow />
            </Link>
          </>
        }
      />
    </>
  );
}
