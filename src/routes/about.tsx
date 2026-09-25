import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Eyebrow, Reveal } from "@/components/site/primitives";
import {
  Accent,
  CtaArrow,
  ONE_LINE_CTA,
  PageCta,
  SCRIPT_LABEL,
  PageHeading,
  PageHero,
  PageSection,
  Seam,
} from "@/components/site/page-kit";
import { cn } from "@/lib/utils";
import portrait from "@/assets/amna-insights.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Meet Amna Imran | Leadership Coach & Gender Strategy Expert" },
      { name: "description", content: "Executive coaching at the intersection of individual capability and organizational reality — evidence-based, systems-aware, advancement-focused." },
      { property: "og:title", content: "About — Amna Imran" },
      { property: "og:description", content: "The philosophy, credentials, and lived experience behind the practice." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
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
    n: "01",
    t: "Performance Is Not the Whole Story",
    d: "Many high-performing women are told that hard work and confidence alone will lead to advancement. Yet performance, visibility, perception, and bias interact in complex ways.",
  },
  {
    n: "02",
    t: "Systems Are Not Neutral",
    d: "Corporate progression happens within formal and informal systems — promotion criteria, sponsorship access, leadership norms, and evaluation patterns.",
  },
  {
    n: "03",
    t: "Strategy Creates Clarity",
    d: "Rather than offering generic confidence advice, this work provides structured, research-informed approaches to leadership presence, stakeholder influence, advancement, and sustainable success.",
  },
];

function PersonalLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-gold-ink">{children}</p>;
}

function PersonalDivider() {
  return <div aria-hidden className="my-8 md:my-10 h-px w-full bg-[var(--hairline)]/80" />;
}

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="relative mt-5 pl-8 md:pl-10 font-serif text-[22px] md:text-[26px] leading-[1.3] text-foreground border-l-2 border-[var(--gold)]/50">
      <span aria-hidden className="absolute -top-2 left-3 font-serif text-[48px] md:text-[56px] leading-none text-[var(--gold)]/60 select-none">
        “
      </span>
      {children}
    </blockquote>
  );
}

function About() {
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
            <img
              src={portrait}
              alt="Amna Imran portrait"
              className="mx-auto block h-auto max-h-[24rem] w-full object-contain object-bottom select-none lg:max-h-[28rem]"
              draggable={false}
            />
          </Reveal>
        }
      />

      <Seam from="warm" into="cream" intensity="soft" />

      {/* POSITIONING — At the intersection of capability */}
      <PageSection surface="cream">
        <PageHeading>
          At the intersection of <Accent>capability</Accent> and organizational reality.
        </PageHeading>

        <div className="mt-14 flex flex-col">
          {POSITIONING.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 80}
              duration="slow"
              as="article"
              className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-[var(--gold)]/30 first:border-t-0 last:border-b last:border-[var(--gold)]/30"
            >
              <h3 className="md:col-span-5 font-serif font-light text-[clamp(1.6rem,1.5vw+0.95rem,2.45rem)] leading-[1.15] tracking-[-0.02em] text-foreground transition-transform duration-500 group-hover:translate-x-2">
                {p.t}
              </h3>
              <p className="md:col-span-7 type-body text-copy self-center">{p.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240} duration="slow">
          <p className="mt-14 max-w-3xl font-serif italic text-[clamp(1.2rem,0.8vw+0.95rem,1.5rem)] leading-[1.45] text-foreground">
            As an ACC-credentialed coach with the International Coaching Federation, a Certified
            Diversity Professional, and a strengths practitioner trained by Gallup, I combine
            coaching with evidence-based gender insight to help high-potential women navigate
            these dynamics strategically.
          </p>
        </Reveal>
      </PageSection>

      <Seam from="cream" into="blush" />

      {/* A PERSONAL REALIZATION — letter-style */}
      <PageSection surface="blush">
        <div className="max-w-xl">
          <Reveal><Eyebrow>A Personal Note</Eyebrow></Reveal>
          <PageHeading>
            A Personal <Accent>Realization.</Accent>
          </PageHeading>
        </div>

        <div className="mt-10 md:mt-12 md:max-w-3xl md:mx-auto">
          <Reveal delay={120} duration="slow">
              <article className="note-paper relative rotate-[-0.35deg] border border-[color-mix(in_oklch,var(--gold)_18%,transparent)] px-6 py-10 sm:px-10 md:rotate-[-0.5deg] md:px-14 md:py-14">
                <div aria-hidden className="absolute left-1/2 top-0 h-3 w-16 -translate-x-1/2 -translate-y-1/2 bg-[color-mix(in_oklch,var(--gold)_35%,var(--cream))] shadow-[0_2px_6px_oklch(0.4_0.04_70_/_0.2)]" />
                <div aria-hidden className="absolute top-0 left-0 h-px w-24 bg-[var(--gold)]" />

                <PersonalLabel>Lived experience across cultures</PersonalLabel>
                <p className="mt-5 font-serif italic text-[20px] md:text-[24px] leading-[1.35] text-foreground">
                  My work is shaped not only by research and professional training, but by lived
                  experience across cultures.
                </p>
                <p className="mt-6 type-body text-copy">
                  As an expatriate, I followed my husband's career across countries while raising
                  two boys of my own. With each move came reinvention — professionally, socially,
                  structurally. I witnessed firsthand how mobility, caregiving, and invisible
                  labor shape women's professional trajectories in ways that are rarely
                  acknowledged in leadership conversations.
                </p>

                <PersonalDivider />

                <PersonalLabel>The repeated pattern</PersonalLabel>
                <p className="mt-5 type-body text-copy">
                  Across geographies, one pattern repeated itself.
                </p>
                <PullQuote>
                  “Brilliant, capable women — highly educated, high-performing — quietly
                  questioning themselves.”
                </PullQuote>
                <div className="mt-6 space-y-2 font-serif text-[17px] md:text-[19px] leading-snug text-foreground">
                  <p>Not because they lacked competence.</p>
                  <p className="pl-6 md:pl-8 italic text-gold-warm">
                    But because the environments they were navigating were not designed with them in mind.
                  </p>
                </div>

                <PersonalDivider />

                <PersonalLabel>What INSEAD helped clarify</PersonalLabel>
                <p className="mt-5 type-body text-copy">
                  Later, during my gender balance study at INSEAD, I began to see these patterns
                  more clearly. Organizational research illuminated what many women experience
                  but struggle to articulate:
                </p>
                <p className="mt-6 font-serif italic text-[17px] md:text-[19px] leading-[1.5] text-foreground border-l-2 border-[var(--gold)]/60 pl-5">
                  Leadership structures were historically built around uninterrupted career paths,
                  narrow behavioral norms, and assumptions that align more closely with
                  traditional male career trajectories.
                </p>
                <div className="mt-6 space-y-2 font-serif text-[18px] md:text-[20px] leading-snug">
                  <p className="text-foreground">The issue was not that women needed to become more like men.</p>
                  <p className="italic text-gold-warm">The issue was that leadership prototypes were too narrow.</p>
                </div>

                <PersonalDivider />

                <PersonalLabel>The “fix-women” narrative</PersonalLabel>
                <p className="mt-5 type-body text-copy">
                  And yet, much of the advice directed at women still centers on self-correction:
                </p>
                <ul className="mt-5 space-y-2.5 font-serif italic text-[16px] md:text-[18px] text-foreground/90">
                  {["Speak more like….", "Negotiate like….", "Lead more assertively.", "Adapt to the model."].map((line) => (
                    <li key={line} className="flex items-baseline gap-4">
                      <span aria-hidden className="text-[var(--gold)] not-italic">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 type-body text-copy">
                  This “fix-women” narrative overlooks a critical truth: many women are not
                  underperforming — they are operating within systems calibrated to reward a
                  specific style of leadership.
                </p>

                <PersonalDivider />

                <PersonalLabel>Why awareness is clarifying</PersonalLabel>
                <PullQuote>
                  “Awareness of systemic bias is not disempowering. It is clarifying.”
                </PullQuote>
                <p className="mt-6 type-body text-copy">
                  When women understand how evaluation norms, sponsorship dynamics, caregiving
                  expectations, and leadership prototypes shape progression, self-doubt often
                  gives way to strategic insight.
                </p>

                <PersonalDivider />

                <PersonalLabel>The transformative shift</PersonalLabel>
                <p className="mt-5 font-serif italic text-[20px] md:text-[24px] leading-[1.35] text-foreground">
                  That shift — I have witnessed firsthand — is{" "}
                  <em className="italic text-gold-warm">transformative.</em>
                </p>

                <div className="mt-12 flex items-center gap-4">
                  <span aria-hidden className="h-px w-12 bg-[var(--gold)]" />
                  <p className={SCRIPT_LABEL}>Amna</p>
                </div>
              </article>
            </Reveal>
        </div>
      </PageSection>

      <Seam from="blush" into="sand" />

      {/* WHY THIS MATTERS */}
      <PageSection surface="sand">
        <div className="max-w-4xl">
          <Reveal>
            <Eyebrow>Why This Matters</Eyebrow>
          </Reveal>
          <PageHeading size="h1">
            Equipping women to navigate — and <Accent>ultimately influence</Accent> the systems in
            which they lead.
          </PageHeading>
          <Reveal delay={120} duration="slow">
            <div className="mt-8 md:mt-10 max-w-2xl">
              <p className="type-body text-copy">
                I do not believe the solution is to reshape women into replicas of a traditional
                leadership archetype.
              </p>
              <p className="mt-3 font-serif italic text-[18px] md:text-[20px] text-foreground leading-snug">
                I believe the solution lies in five shifts —
              </p>
            </div>
          </Reveal>
        </div>

        <ol className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
          {FIVE_SHIFTS.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 100} duration="slow" className="flex gap-4 items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] font-serif italic text-[1rem] text-gold-deep">
                {s.n}
              </span>
              <p className="font-serif text-[20px] md:text-[24px] lg:text-[26px] leading-[1.25] text-foreground">
                {s.label} <em className="italic text-gold-warm">{s.accent}</em>
                {s.tail ? <> {s.tail}</> : null}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={60} duration="slow">
          <div className="mt-10 md:mt-12 max-w-3xl border-l-2 border-[var(--gold)]/40 pl-6 md:pl-8">
            <p className="type-body text-copy">
              Learning evidence-based techniques to operate within complex systems is far more
              powerful than internalizing a narrative of deficiency.
              <br />
              <span className="text-foreground italic font-serif">
                This perspective shapes every aspect of my work.
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} duration="slow">
          <figure className="mt-10 md:mt-12 max-w-3xl">
            <span
              aria-hidden
              className="block font-serif text-[var(--gold)] text-[44px] md:text-[52px] leading-none select-none -mb-2 md:-mb-3"
            >
              "
            </span>
            <blockquote className="font-serif font-light text-xl md:text-2xl lg:text-[1.65rem] leading-[1.3] text-foreground">
              The goal is not to fix women. It is to equip them to navigate — and ultimately{" "}
              <em className="italic text-gold-warm">influence</em> — the systems in which they lead.
            </blockquote>
            <figcaption className="eyebrow mt-4 text-copy-muted">— The Work</figcaption>
          </figure>
        </Reveal>
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
