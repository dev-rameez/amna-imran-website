import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import {
  Container,
  Hairline,
  Reveal,
  Section,
  SectionQuote,
  SectionSeam,
  ParallaxLayer,
  SelectablePanel,
  useSelectableList,
  usePanelTransition,
} from "@/components/site/primitives";
import { Frown, HelpCircle, Scale, Unplug, History } from "lucide-react";
import heroPortrait from "@/assets/amna-hero-v2.png";
import approachPortrait from "@/assets/amna-approach.png";
import programmePortrait from "@/assets/amna-support.png";
import founderLeaning from "@/assets/amna-founder-leaning.png";
import logoMark from "@/assets/logo.png";
import icfLogo from "@/assets/icf-acc.png";
import gallupLogo from "@/assets/gallup-strengths.png";
import cdpLogo from "@/assets/cdp.png";
import inseadLogo from "@/assets/insead.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amna Imran | Strategic Leadership Coach for High-Potential Women" },
      {
        name: "description",
        content:
          "Evidence-based executive coaching for high-potential women. Navigate bias, strengthen executive presence, and accelerate your career using gender strategy and strengths science.",
      },
      { property: "og:title", content: "Strategic Leadership Coaching for High-Potential Women" },
      {
        property: "og:description",
        content: "Advancement is not just about performance. It is about strategy within systems.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const TRADITIONAL = [
  "Deliver exceptional results",
  "Take on additional responsibility",
  "Stay reliable and collaborative",
  "Continue developing skills and credentials",
];

const INTERNAL_NARRATIVES = [
  "I need one more qualification.",
  "Maybe I'm not confident enough.",
  "Others seem to be doing something I'm not.",
  "Perhaps I'm not leadership material after all.",
];

/* DRAFT COPY — the `d` explanations are written to client brief and are awaiting
   sign-off. The `t` labels are approved copy and must not change. */
const PSYCH_IMPACT = [
  {
    t: "Exhausted by competing demands",
    Icon: Unplug,
    d: "The energy that should go into strategy goes into absorbing the friction of two full-time roles. Capacity is spent before the work that would actually advance you begins.",
  },
  {
    t: "Torn between self and expectations",
    Icon: Scale,
    d: "You are asked to be entirely committed at work and entirely present at home, and told both are reasonable. Neither standard moves, so the shortfall gets experienced as personal failure.",
  },
  {
    t: "Inadequate despite results",
    Icon: Frown,
    d: "Evidence stops being reassuring when the criteria for progression are never stated out loud. Strong outcomes get quietly re-read as luck, timing, or somebody else's sponsorship.",
  },
  {
    t: "Unsure how to advocate",
    Icon: HelpCircle,
    d: "Self-advocacy is required for advancement and penalised the moment it reads as self-promotion. Without language that survives both tests, most people default to saying nothing.",
  },
  {
    t: "Blamed for stalled progress",
    Icon: History,
    d: "When the system's part in this is invisible, the only available explanation is a personal one. Confidence, ambition and commitment get audited instead of the process.",
  },
];

/* DRAFT COPY — the `d` descriptions below are written to client brief and are
   awaiting sign-off. The `t` titles are approved copy and must not change. */
const FORWARD = [
  {
    t: "Strategic visibility to the right decision-makers",
    d: "Being good at your job is not the same as being known for it by the people who decide. We identify who genuinely influences your progression, then build a deliberate plan for how your work reaches them.",
  },
  {
    t: "Influential relationships and active sponsorship",
    d: "Mentors give advice. Sponsors spend their own credibility arguing for you when you are not in the room. We work out who could realistically do that for you, and what would make them willing to.",
  },
  {
    t: "Leadership presence in high-stakes settings",
    d: "Presence is not volume or performance — it is being clear, composed and difficult to dismiss when the stakes are highest. We build it out of how you already think, rather than fitting you to a borrowed style.",
  },
  {
    t: "Positioning for future roles, not just current responsibilities",
    d: "Delivering your current role exceptionally well quietly signals that you should stay in it. We change how you are described so that you are read as a candidate for the next level before the vacancy exists.",
  },
  {
    t: "Navigating bias without compromising authenticity",
    d: "You should not have to become someone else to be taken seriously. We name the dynamics you are actually operating in and choose responses that protect both your credibility and your integrity.",
  },
  {
    t: "Sustaining ambition without burnout",
    d: "Working harder is the default response to a stalled career, and it is the one that costs the most. We build an approach to advancement that you would still be able to sustain in three years.",
  },
];

/* DRAFT COPY — the `d` explanations are written to client brief and are awaiting
   sign-off. The `t` titles are approved research copy and must not change. */
const GAPS = [
  {
    t: "Women remain underrepresented in senior leadership despite strong entry-level participation",
    d: "Representation rarely thins out gradually. It drops sharply at the step from senior manager to director, where selection stops being about measurable delivery and starts being about judgements of readiness. Many organisations track hiring parity closely and promotion parity barely at all.",
  },
  {
    t: "Promotion decisions often rely more on perceived leadership potential — where gender bias frequently operates",
    d: "Potential is the least defined criterion in most promotion frameworks, which is precisely why it absorbs the most bias. Two candidates with near-identical records can be described as ready now and needs another cycle without either assessment ever being challenged.",
  },
  {
    t: "Women are evaluated more on past performance, men more on future potential",
    d: "Reviews of women tend to catalogue what has already been delivered. Reviews of men more often speculate about what they could go on to do. The effect is that women prove capability repeatedly while men are advanced on the expectation of it.",
  },
  {
    t: "Assertive behavior is rewarded in men but can be penalized in women",
    d: "The same directness recorded as decisive in a man is frequently recorded as abrasive in a woman, so the behaviour that earns authority also carries a social cost. Many women resolve the double bind by muting themselves — which is then read as lacking presence.",
  },
  {
    t: "Leadership norms still reflect traditionally masculine behavioral expectations",
    d: "The implicit picture of a leader in most organisations — always available, visibly certain, quick to claim credit — was shaped by who has historically held those roles. Leaders who operate differently are measured against the template rather than against their results.",
  },
  {
    t: "Informal networks and sponsorship pathways often exclude women",
    d: "The conversations that decide who is considered for a role happen before any formal process opens, and access to them is social rather than merit-based. Mentorship is offered to women generously; sponsorship, which spends political capital on their behalf, is not.",
  },
  {
    t: "Visibility opportunities are unevenly distributed",
    d: "High-exposure work — the board presentation, the turnaround, the client nobody can afford to lose — is allocated informally, and disproportionately to people already seen as leadership material. Women are more often assigned the essential work that keeps things running but generates no audience.",
  },
  {
    t: "Caregiving responsibilities continue to affect career trajectories disproportionately",
    d: "Assumptions about availability are applied to women whether or not they have children, and usually without being said out loud. A single period of leave can reset how committed someone is presumed to be for years afterwards.",
  },
];

const SUPPORT_FOCUS = [
  "Gain clarity on leadership direction",
  "Build executive presence grounded in competence",
  "Increase influence and visibility",
  "Develop strong sponsor and stakeholder relationships",
  "Prepare strategically for promotion or expanded roles",
  "Navigate major career transitions, including parenthood",
  "Create sustainable success on their own terms",
];

/**
 * One source of truth for the page's surface colours. Section backgrounds and the
 * seams between them read from the same values, so a seam can never band against
 * the section it is supposed to blend into.
 */
const SURFACE = {
  warm: "var(--warm-cream)",
  cream: "color-mix(in oklch, var(--cream) 82%, var(--background))",
  creamSoft: "color-mix(in oklch, var(--cream) 55%, var(--background))",
  blush: "color-mix(in oklch, var(--blush-subtle) 62%, var(--warm-cream))",
  blushApproach: "color-mix(in oklch, var(--blush-subtle) 58%, var(--warm-cream))",
  blushFounder: "color-mix(in oklch, var(--blush-subtle) 52%, var(--warm-cream))",
  warmPathways: "color-mix(in oklch, var(--warm-cream) 88%, var(--cream))",
} as const;

const COMPARISON = [
  {
    a: "Evidence-Based",
    b: "Anecdotal",
    d: "Rather than relying on personal success stories or generic advice, my approach draws on organizational research, leadership studies, and patterns observed across thousands of women's career experiences. You receive strategies that are grounded in what works broadly — not just what worked for one individual.",
  },
  {
    a: "System-Aware",
    b: "System-Blaming",
    d: "Career progression happens within structures that include formal processes and informal dynamics. Ignoring these realities leaves many professionals under-prepared; focusing only on them can feel disempowering. I help clients navigate these dynamics strategically — building influence and credibility without compromising authenticity or professionalism.",
  },
  {
    a: "Strengths-Led",
    b: "Deficit-Focused",
    d: "Using strengths methodology developed by Gallup, we build on what already drives your effectiveness rather than trying to 'fix' perceived weaknesses. This approach produces sustainable confidence grounded in competence.",
  },
  {
    a: "Advancement-Focused",
    b: "Just Insight-Focused",
    d: "Clarity alone does not change outcomes. Our work centers on tangible shifts in positioning, visibility, relationships, and readiness for the next level. Clients typically leave with: a clear leadership trajectory, increased influence and visibility, stronger sponsor relationships, greater confidence in high-stakes environments, and readiness for promotion or expanded roles.",
  },
  {
    a: "Designed for Real-World Complexity",
    b: "Generic confidence advice",
    d: "As an ACC-credentialed coach with the International Coaching Federation, a Certified Diversity Professional specializing in gender, and trained in gender balance at INSEAD, I bring both coaching expertise and systems insight. This enables me to support clients navigating diverse organizational cultures, leadership expectations, and life transitions — including parenthood.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <HighPerformanceSection />
      <ProgressNarrativeSection />
      <SectionSeam
        from="warm"
        into="blush"
        intensity="default"
        fromFill={SURFACE.warm}
        intoFill={SURFACE.blush}
      />
      <MotherhoodSection />
      <StrategicWayForwardSection />
      <SectionSeam
        from="blush"
        into="cream"
        intensity="default"
        fromFill={SURFACE.blush}
        intoFill={SURFACE.creamSoft}
      />
      <HowISupportSection />
      <SectionSeam
        from="cream"
        into="blush"
        intensity="soft"
        fromFill={SURFACE.creamSoft}
        intoFill={SURFACE.blushApproach}
      />
      <WhyDifferentSection />
      <VariantLabel
        name="Variant A — for client review"
        note="Quote beside the portrait · intersection line under the heading · 03 removed · principles as tiles"
      />
      <WhyDifferentVariantA />
      <VariantLabel
        name="Variant B — for client review"
        note="Quote card on the portrait · centred story line · principles as pill tabs"
      />
      <WhyDifferentVariantB />
      <SectionSeam
        from="blush"
        into="warm"
        intensity="soft"
        fromFill={SURFACE.blushApproach}
        intoFill={SURFACE.warmPathways}
      />
      <TwoPathwaysSection />
      <SectionSeam
        from="warm"
        into="blush"
        intensity="default"
        fromFill={SURFACE.warmPathways}
        intoFill={CLOSING_SURFACE.founder}
      />
      <VariantLabel
        name="Option 1 — Figma layout"
        note="Founder, Ready to move forward and footer exactly as in Figma · cushion removed from the photo"
      />
      <ClosingFigma />
      <VariantLabel
        name="Option 2 — for client review"
        note="She leans on the dark band · call to action and footer share one dark surface"
      />
      <ClosingLeanOnBand />
      <VariantLabel
        name="Option 3 — for client review"
        note="One warm canvas · she leans on a dark call-to-action card · light footer"
      />
      <ClosingLeanOnCard />
    </>
  );
}

const AMNA_TYPE = {
  fontSize: "clamp(4.25rem, 11vw, 9.5rem)",
  letterSpacing: "-0.06em",
} as const;

const IMRAN_TYPE = {
  fontSize: "clamp(4rem, 10.4vw, 9rem)",
  letterSpacing: "-0.05em",
} as const;

/* ---------------- HERO — Marie-style banner ---------------- */

function Hero() {
  return (
    <section className="relative overflow-x-clip bg-[var(--warm-cream)]">
      <Container className="relative pt-3 md:pt-4 lg:pt-5">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-6 lg:gap-8">
          <div className="relative z-10 md:col-span-5">
            <Reveal variant="fade-up" duration="slow" delay={60}>
              <h1 className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-foreground">
                <span
                  className="block"
                  style={{ fontSize: "clamp(1.4rem, 2.1vw, 1.95rem)", marginBottom: "0.12em" }}
                >
                  Strategic Leadership
                </span>
                <span
                  className="block"
                  style={{ fontSize: "clamp(1.4rem, 2.1vw, 1.95rem)", marginBottom: "0.2em" }}
                >
                  Coaching for
                </span>
                <span style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)", lineHeight: 0.95 }}>
                  <em className="type-display-accent not-italic text-[1.34em] text-gold-warm">
                    High-Potential
                  </em>{" "}
                  <span className="font-serif font-light">Women</span>
                </span>
              </h1>
            </Reveal>

            <Reveal variant="fade-in" delay={140}>
              <p className="mt-7 max-w-md type-lead font-light text-copy">
                I help ambitious women navigate bias, strengthen executive presence, and
                accelerate their careers using evidence-based gender strategy, strengths
                science, and systemic insights — not just anecdotal advice.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={220} duration="fast">
              <div className="mt-9 flex max-w-md flex-col gap-3">
                <Link
                  to="/contact"
                  className="cta-primary w-full justify-between text-left lg:whitespace-nowrap"
                  onClick={() => track("strategic_clarity_call", { section: "hero_intro" })}
                >
                  Book a Strategic Clarity Call <span aria-hidden className="cta-arrow">→</span>
                </Link>
                <Link
                  to="/organizations"
                  className="cta-secondary w-full justify-between text-left lg:whitespace-nowrap"
                  onClick={() => track("organisational_engagement", { section: "hero_intro" })}
                >
                  For Corporate &amp; HR Enquiries <span aria-hidden className="cta-arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <HeroPortraitLockup />
          </div>
        </div>

        <CredentialsBand />
      </Container>
    </section>
  );
}

/**
 * Seated cutout with AMNA / IMRAN split across the figure: some letters sit
 * behind her, some in front. Crop matches the last signed-off lockup; a soft
 * oval wash keeps the field from reading empty.
 */
function HeroPortraitLockup() {
  const nameRow =
    "flex justify-center whitespace-nowrap font-serif font-light uppercase leading-[0.82] text-gold-warm";
  const nameStack =
    "pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-[20%]";

  const amnaBehind = (
    <>
      <span className="opacity-0">A</span>
      <span>m</span>
      <span className="opacity-0">n</span>
      <span className="opacity-0">a</span>
    </>
  );
  const imranBehind = (
    <>
      <span className="opacity-0">I</span>
      <span>m</span>
      <span className="opacity-0">r</span>
      <span>a</span>
      <span className="opacity-0">n</span>
    </>
  );
  const amnaFront = (
    <>
      <span>A</span>
      <span className="opacity-0">m</span>
      <span>n</span>
      <span>a</span>
    </>
  );
  const imranFront = (
    <>
      <span>I</span>
      <span className="opacity-0">m</span>
      <span>r</span>
      <span className="opacity-0">a</span>
      <span>n</span>
    </>
  );

  return (
    <div className="relative isolate mx-auto w-full max-w-[42rem] lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] z-0 h-[78%] w-[84%] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, color-mix(in oklch, white 70%, transparent) 0%, color-mix(in oklch, var(--gold) 16%, transparent) 38%, transparent 72%)",
        }}
      />

      {/* Behind her: only the middle letters the figure is meant to cover */}
      <div aria-hidden className={cn(nameStack, "z-[1]")}>
        <span className={nameRow} style={AMNA_TYPE}>
          {amnaBehind}
        </span>
        <span className={cn(nameRow, "-mt-[0.06em]")} style={IMRAN_TYPE}>
          {imranBehind}
        </span>
      </div>

      {/* Crop box has no z-index, so it cannot swallow the name. The image is
          the only z-2 layer: transparent pixels show the behind letters. */}
      <div className="hero-enter relative mx-auto aspect-[5/6] w-[min(100%,30rem)] overflow-hidden md:w-[min(100%,34rem)] lg:w-[min(94%,38rem)]">
        <img
          src={heroPortrait}
          alt="Amna Imran — Executive Coach"
          draggable={false}
          className="absolute left-1/2 top-[-38%] z-[2] h-[240%] w-auto max-w-none -translate-x-1/2 select-none object-contain"
          style={{
            filter: "drop-shadow(0 18px 36px color-mix(in oklch, var(--charcoal) 12%, transparent))",
          }}
        />
      </div>

      {/* In front of her — enough of the name to read across the figure */}
      <div aria-hidden className={cn(nameStack, "z-[3]")}>
        <span className={nameRow} style={AMNA_TYPE}>
          {amnaFront}
        </span>
        <span className={cn(nameRow, "-mt-[0.06em]")} style={IMRAN_TYPE}>
          {imranFront}
        </span>
      </div>
    </div>
  );
}

/* ---------------- CREDENTIALS ---------------- */

function CredentialsBand() {
  /* `scale` normalises apparent logo size — each mark carries a different amount
     of internal padding, so matching heights alone makes some look smaller than
     others. Tune these by eye rather than by measured height. */
  const items = [
    { logo: icfLogo, label: "ICF ACC Certified", scale: 1.76 },
    { logo: gallupLogo, label: "Gallup Certified CliftonStrengths Coach", scale: 1.5 },
    { logo: cdpLogo, label: "Certified Diversity Professional (CDP®)", scale: 1.62 },
    { logo: inseadLogo, label: "INSEAD-trained Gender Specialist", scale: 1.53 },
  ];
  return (
    <div className="relative pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(2.5rem,5vw,4rem)]">
      {/* Centred label on the introduction's own axis, tying the two together */}
      <Reveal variant="fade-in" duration="slow">
        <div className="mb-8 flex items-center justify-center gap-4 md:mb-10">
          <span
            aria-hidden
            className="h-px w-10 bg-[color-mix(in_oklch,var(--gold)_30%,transparent)]"
          />
          <span className="eyebrow text-copy-muted" style={{ letterSpacing: "0.22em" }}>
            Credentials
          </span>
          <span
            aria-hidden
            className="h-px w-10 bg-[color-mix(in_oklch,var(--gold)_30%,transparent)]"
          />
        </div>
      </Reveal>
      <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
        {items.map((c, i) => (
          <Reveal key={c.label} delay={i * 60} variant="fade-in" duration="fast" as="li">
            <div
              className={cn(
                "flex flex-col items-center gap-4 px-4 text-center md:px-8",
                i > 0 && "md:border-l",
              )}
              style={i > 0 ? { borderColor: "color-mix(in oklch, var(--gold) 8%, transparent)" } : {}}
            >
              <div className="flex h-24 w-full items-center justify-center md:h-28">
                <img
                  src={c.logo}
                  alt={c.label}
                  loading="lazy"
                  className="h-16 w-auto max-w-[65%] object-contain md:h-[4.5rem] md:max-w-[240px]"
                  style={{ transform: `scale(${c.scale})`, transformOrigin: "center" }}
                />
              </div>
              {/* Larger than the caption step per review, with tracking eased
                  back so the longer marks still hold two lines. */}
              <span className="eyebrow max-w-[15rem] text-[0.9375rem] leading-[1.45] tracking-[0.11em] text-copy">
                {c.label}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- HIGH PERFORMANCE ALONE ---------------- */

function HighPerformanceSection() {
  return (
    <Section
      as="section"
      surface="warm"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
    >
      {/* Soft atmospheric wash — parallax depth */}
      <ParallaxLayer speed={0.14} className="pointer-events-none absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 15% 20%, color-mix(in oklch, var(--gold-subtle) 55%, transparent), transparent 70%), radial-gradient(ellipse 55% 45% at 90% 75%, color-mix(in oklch, var(--blush-subtle) 70%, transparent), transparent 65%)",
          }}
        />
      </ParallaxLayer>

      <Container className="relative">
        <Reveal variant="fade-in" duration="slow">
          <p className="eyebrow text-gold-ink mb-5">The performance paradox</p>
          <h2 className="type-display max-w-4xl font-light">
            High Performance Alone,
            <br />
            <span className="text-foreground/90">Does Not </span>
            <em className="type-display-accent text-gold-warm">Guarantee</em>
            <br />
            Progression
          </h2>
        </Reveal>

        {/* Split: numbered formula vs narrative — intentional asymmetry. The
            formula reveals step by step, then the conclusion lands after it. */}
        <div className="relative mt-10 md:mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-start">
          {/* Connector — carries the eye from the formula across to its outcome. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[41.666%] top-16 bottom-16 hidden w-px bg-gradient-to-b from-transparent via-[color-mix(in_oklch,var(--gold)_45%,transparent)] to-transparent lg:block"
          />

          {/* Formula — large numerals, hairline spine */}
          <div className="lg:col-span-5">
            <div className="relative">
              <Reveal variant="fade-in">
                <p className="eyebrow text-gold-ink mb-6">The traditional formula</p>
              </Reveal>
              <div
                aria-hidden
                className="absolute left-[1.25rem] top-12 bottom-2 w-px bg-gradient-to-b from-[var(--gold)] via-[color-mix(in_oklch,var(--gold)_40%,transparent)] to-transparent"
              />
              <ol className="relative space-y-0">
                {TRADITIONAL.map((t, i) => (
                  <Reveal
                    key={t}
                    as="li"
                    variant="fade-up"
                    duration="slow"
                    delay={i * 100}
                    className="relative flex gap-4 pb-6 last:pb-0"
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--warm-cream)] font-serif italic text-[1rem] text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1.5 font-serif text-[length:var(--text-lead)] leading-snug text-foreground">
                      {t}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* Stalls — oversized word + body, revealed after the formula completes */}
          <div className="lg:col-span-7 lg:pl-8 xl:pl-14">
            <Reveal variant="fade-up" duration="slow" delay={TRADITIONAL.length * 100}>
              <h3 className="font-serif font-light text-[clamp(1.6rem,1.5vw+0.95rem,2.45rem)] leading-[1.15] tracking-[-0.02em] text-foreground">
                Yet progression often{" "}
                <em className="type-display-accent whitespace-nowrap text-gold-warm">stalls</em>
              </h3>
            </Reveal>
            <Reveal variant="fade-in" duration="slow" delay={TRADITIONAL.length * 100 + 150}>
              <div className="mt-6 max-w-xl space-y-4 type-body text-copy">
                <p>
                  — sometimes subtly, sometimes abruptly. Research across organizations shows that
                  advancement depends on far more than performance alone. Factors such as{" "}
                  <span className="emphasis-mark">visibility</span>,{" "}
                  <span className="emphasis-mark">sponsorship</span>,{" "}
                  <span className="emphasis-mark">perceived leadership presence</span>, and{" "}
                  <span className="emphasis-mark">alignment with informal power structures</span>{" "}
                  play decisive roles.
                </p>
                <p>
                  Without visibility into these patterns, stalled progress can feel{" "}
                  <span className="emphasis-mark">personal rather than systemic</span> — leading many
                  capable professionals to work harder while seeing diminishing returns.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* The inward story is the consequence of stalled progression, so it
            closes this chapter rather than opening a new one. */}
        <ChapterDivider className="my-14 md:my-16" />
        <InternalNarratives />
      </Container>
    </Section>
  );
}

/* ---------------- CHAPTER FURNITURE ---------------- */

function ChapterDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center gap-4", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[color-mix(in_oklch,var(--gold)_42%,transparent)]" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold-deep)]" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[color-mix(in_oklch,var(--gold)_42%,transparent)]" />
    </div>
  );
}

/**
 * Closing statement for a chapter. Both script phrases share one size, so the
 * statement and its payoff read as a pair instead of two different voices.
 */
function ChapterQuote({
  lead,
  accent,
  sub,
  subAccent,
}: {
  lead: ReactNode;
  accent: ReactNode;
  sub: ReactNode;
  subAccent?: ReactNode;
}) {
  const statement =
    "font-serif font-light text-[clamp(1.6rem,1.5vw+0.95rem,2.45rem)] leading-[1.2] tracking-[-0.02em] text-foreground";
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <div aria-hidden className="flex items-center justify-center gap-4">
        <span className="h-px w-14 bg-gradient-to-r from-transparent to-[color-mix(in_oklch,var(--gold)_55%,transparent)]" />
        <span className="translate-y-2 font-serif text-[2.5rem] leading-none text-[color-mix(in_oklch,var(--gold)_60%,transparent)]">
          “
        </span>
        <span className="h-px w-14 bg-gradient-to-l from-transparent to-[color-mix(in_oklch,var(--gold)_55%,transparent)]" />
      </div>
      <blockquote className="mt-3">
        <p className={statement}>
          {lead}
          <em className="type-display-accent mt-1 block text-gold-warm">{accent}</em>
        </p>
        <p className="mx-auto mt-5 max-w-xl type-lead text-copy">{sub}</p>
        {subAccent && (
          <p className={cn(statement, "mt-1")}>
            <em className="type-display-accent block text-gold-warm">{subAccent}</em>
          </p>
        )}
      </blockquote>
    </figure>
  );
}

/* ---------------- COMMON INTERNAL NARRATIVES ---------------- */

function InternalNarratives() {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <Reveal variant="fade-in" duration="slow" className="lg:col-span-4">
          <p className="eyebrow text-gold-ink mb-5">The quieter story</p>
          <h2 className="font-serif font-light text-[clamp(2.1rem,2.6vw+0.7rem,3.4rem)] leading-[1.02] tracking-[-0.03em] text-foreground">
            Common internal{" "}
            <em className="type-display-accent text-gold-warm">narratives</em>
          </h2>
          <p className="mt-5 max-w-sm type-body text-copy">
            When performance does not convert into progression, the mind often turns the gap
            inward.
          </p>
        </Reveal>

        <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {INTERNAL_NARRATIVES.map((q, i) => (
            <Reveal
              key={q}
              as="li"
              delay={i * 110}
              variant="fade-up"
              duration="slow"
              className="relative overflow-hidden border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_55%,transparent)] px-6 pb-6 pt-5"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 -top-5 select-none font-serif text-[6.5rem] leading-none text-[color-mix(in_oklch,var(--gold)_13%,transparent)]"
              >
                “
              </span>
              <span className="block font-serif text-[0.95rem] italic text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden className="mt-3 block h-px w-8 bg-[color-mix(in_oklch,var(--gold)_55%,transparent)]" />
              <blockquote className="relative mt-4">
                <p className="font-serif italic text-[clamp(1.2rem,0.8vw+0.95rem,1.5rem)] leading-[1.35] text-foreground">
                  {q}
                </p>
              </blockquote>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal variant="fade-in" duration="slow" delay={120} className="mt-14 md:mt-16">
        <ChapterQuote
          lead="The challenge is not a lack of"
          accent="ambition or ability"
          sub="— but a lack of access to the unwritten rules of"
          subAccent="advancement."
        />
      </Reveal>
    </div>
  );
}

/* ---------------- PROGRESS NARRATIVE ---------------- */

function ProgressNarrativeSection() {
  const [activeGap, setActiveGap] = useState(0);

  return (
    <Section
      as="section"
      surface="warm"
      pad="none"
      /* overflow-x-clip rather than overflow-hidden: hidden would make this a
         scroll container and stop the detail panel from sticking. */
      className="relative z-10 overflow-x-clip section-pad-top-major section-pad-bottom-major"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 85% 8%, color-mix(in oklch, var(--gold-subtle) 40%, transparent), transparent 70%)",
        }}
      />

      <Container className="relative">
        {/* Intro, the question and the eight gaps are one composition: the
            intro sets up the claim, the gaps answer it, the quote closes it. */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal variant="fade-in" duration="slow" className="lg:col-span-6">
            <p className="eyebrow text-gold-ink mb-5">Beneath the surface</p>
            <h2 className="type-display font-light">
              The Progress Narrative
              <br />
              <span className="text-foreground/85">&amp; the </span>
              <em className="type-display-accent text-gold-warm">Hidden Reality</em>
            </h2>
          </Reveal>
          <Reveal delay={80} variant="fade-in" duration="slow" className="lg:col-span-6">
            <div className="max-w-xl space-y-4 type-body text-copy lg:border-l lg:border-[color-mix(in_oklch,var(--gold)_35%,transparent)] lg:pl-8">
              <p>
                On the surface, it appears that gender equality at work has largely been achieved.
                Women are highly educated, widely represented in professional roles, and many
                organizations publicly champion diversity.
              </p>
              <p>
                Yet research in organizational behavior and leadership studies reveals persistent
                gaps beneath this progress narrative.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade-in" duration="slow" className="mt-10 md:mt-12">
          <div className="flex flex-col gap-3 border-y border-[color-mix(in_oklch,var(--gold)_26%,transparent)] py-6 text-center md:flex-row md:items-center md:justify-between md:gap-10 md:text-left">
            <p className="shrink-0 font-serif italic text-[clamp(1.5rem,1.2vw+1rem,2.2rem)] leading-tight text-gold-warm">
              So why does this persist?
            </p>
            <p className="max-w-xl type-body text-copy">
              Because almost none of it is written down. These are the eight patterns research
              keeps finding — and the reason capable women stall without ever being told why.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12 md:mt-14">
          {/* Mirrors the selected gap; keyed so each change replays the fade. */}
          <span
            key={activeGap}
            aria-hidden
            className="hero-enter-soft pointer-events-none absolute -top-10 right-0 hidden select-none font-serif font-light leading-none tracking-[-0.04em] text-[clamp(7rem,13vw,11rem)] text-[color-mix(in_oklch,var(--gold)_10%,transparent)] md:block"
          >
            {String(activeGap + 1).padStart(2, "0")}
          </span>
          <Reveal variant="fade-in" duration="slow">
            <div className="relative mb-8 max-w-2xl md:mb-10">
              <p className="eyebrow text-gold-ink mb-4">What research keeps finding</p>
              <h3 className="font-serif font-light text-[clamp(2.1rem,2.6vw+0.7rem,3.4rem)] leading-[1.02] tracking-[-0.03em] text-foreground">
                Eight persistent <em className="type-display-accent text-gold-warm">gaps</em>
              </h3>
              <p className="mt-4 text-[length:var(--text-small)] text-copy-muted">
                Select a gap to see how it operates in practice.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fade-up" duration="slow">
            <SelectablePanel
              variant="numbered"
              density="compact"
              label="Eight persistent gaps"
              listClassName="lg:col-span-7"
              panelClassName="lg:col-span-5 lg:sticky lg:top-28 lg:self-start lg:border lg:border-t-2 lg:border-[color-mix(in_oklch,var(--gold)_22%,transparent)] lg:border-t-[color:var(--gold)] lg:bg-[color-mix(in_oklch,var(--background)_60%,transparent)] lg:p-8 lg:shadow-[var(--shadow-soft)]"
              items={GAPS.map((g) => ({
                label: g.t,
                meta: "How it operates",
                detail: <p>{g.d}</p>,
              }))}
              onSelect={(index) => {
                setActiveGap(index);
                track("gap_selected", {
                  section: "eight_persistent_gaps",
                  position: index + 1,
                });
              }}
            />
          </Reveal>

          <Reveal variant="fade-in" duration="slow" className="mt-8 md:mt-10">
            <ChapterQuote
              lead="These dynamics are rarely"
              accent="explicit or intentional"
              sub="— they are embedded in everyday organizational processes: performance reviews, leadership selection, project allocation, and informal influence channels."
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- MOTHERHOOD + PSYCHOLOGICAL IMPACT ---------------- */

/**
 * The five impacts are conceptually central, so they behave like content rather
 * than decoration: each pill selects and reveals a short explanation beneath the
 * row. Uses the shared tabs hook for roving tabindex and arrow-key support, but
 * keeps the pill layout rather than the SelectablePanel two-column shape.
 */
function ImpactPills() {
  const { active, listProps, getItemProps, panelProps } = useSelectableList(PSYCH_IMPACT.length, {
    orientation: "horizontal",
  });
  const panelState = usePanelTransition(active);
  const current = PSYCH_IMPACT[active];

  return (
    <div>
      <Reveal delay={80} variant="fade-up">
        <div {...listProps} aria-label="The psychological impact" className="flex flex-wrap gap-3">
          {PSYCH_IMPACT.map(({ t, Icon }, i) => (
            <button
              key={t}
              {...getItemProps(i)}
              className="selectable-item inline-flex w-fit max-w-full items-center gap-3 rounded-full border border-[color-mix(in_oklch,var(--gold)_22%,transparent)] bg-[color-mix(in_oklch,var(--background)_70%,transparent)] px-5 py-3 text-[length:var(--text-body)] leading-snug data-[active=true]:border-[var(--gold-deep)] data-[active=true]:bg-[color-mix(in_oklch,var(--gold-subtle)_75%,var(--background))]"
            >
              <Icon size={20} strokeWidth={1.75} className="shrink-0 text-gold-deep" />
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div
        {...panelProps}
        data-state={panelState}
        className="selectable-panel mt-7 border-t border-[color-mix(in_oklch,var(--gold)_28%,transparent)] pt-6"
      >
        <p className="type-body-emphasis text-copy">{current.d}</p>
      </div>
    </div>
  );
}

function MotherhoodSection() {
  return (
    <Section
      as="section"
      surface="blush"
      pad="none"
      className="relative overflow-x-clip section-pad-top-major section-pad-bottom-major"
      style={{ background: "color-mix(in oklch, var(--blush-subtle) 62%, var(--warm-cream))" }}
    >
      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-10">
        <Reveal variant="fade-in" duration="slow" className="md:col-span-5">
          <p className="eyebrow text-gold-ink mb-6">Life transitions</p>
          <h2 className="type-display max-w-4xl font-light">
            The{" "}
            <em className="type-display-accent not-italic text-gold-warm">
              Motherhood
            </em>{" "}
            <span className="block sm:inline">Penalty</span>
            <br />
            <span className="text-foreground/90">and Life Transitions</span>
          </h2>
          <span aria-hidden className="mt-8 hidden h-px w-24 bg-gradient-to-r from-[var(--gold)] to-transparent md:block" />
        </Reveal>

        <div className="max-w-2xl space-y-5 type-body text-copy md:col-span-7 md:mt-10 md:border-l md:border-[color-mix(in_oklch,var(--gold)_35%,transparent)] md:pl-8">
          {/* Three deliberately different weights rather than three identical
              paragraphs: the finding, the contrast that lands it, then the
              conclusion. Review flagged this block as paragraph-heavy. */}
          <Reveal variant="fade-in">
            <p>
              Research across regions consistently shows that career interruptions associated
              with caregiving — particularly motherhood — can significantly alter advancement
              trajectories. Even when women return with equal or greater capability, they may be
              perceived as{" "}
              <span className="emphasis-mark">
                less committed, less available, or less leadership-ready
              </span>
              .
            </p>
          </Reveal>
          <Reveal delay={100} variant="fade-in">
            <p className="font-serif text-[length:var(--text-lead)] leading-snug text-foreground">
              Meanwhile, men often experience neutral or even positive career effects from
              fatherhood —{" "}
              <em className="type-display-accent not-italic italic text-gold-warm">
                the fatherhood bonus
              </em>
              .
            </p>
          </Reveal>
          <Reveal delay={160} variant="fade-in">
            <p>
              These patterns persist{" "}
              <span className="emphasis-mark">despite formal policies</span> designed to support
              work-life balance.
            </p>
          </Reveal>
        </div>
        </div>

        {/* Psychological impact — same surface */}
        <div className="relative mt-14 md:mt-20">
          <Reveal variant="fade-in">
            <div className="mb-10 md:mb-14 max-w-2xl md:mx-auto md:text-center">
              <p className="eyebrow text-gold-ink mb-3">What it feels like</p>
              <h3 className="type-h1">
                The{" "}
                <em className="type-display-accent not-italic text-gold-warm">Psychological</em>{" "}
                impact
              </h3>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[1fr_1.15fr] md:items-start md:gap-12 max-w-5xl mx-auto">
            <Reveal variant="fade-in">
              <p className="max-w-sm type-body">
                When the path forward is{" "}
                <em className="not-italic font-serif italic text-[1.15em] md:text-[1.2em] text-gold-ink">
                  opaque and high-risk
                </em>
                , even the most capable women start to doubt{" "}
                <em className="not-italic font-serif italic text-[1.15em] md:text-[1.2em] text-gold-ink">
                  not their talent — but their belonging.
                </em>
              </p>
            </Reveal>

            <ImpactPills />
          </div>

          <Reveal variant="fade-in" duration="slow" delay={120} className="mt-14 md:mt-20">
            <SectionQuote>
              Over time, this leads not to quitting ambition — but to{" "}
              <em className="italic text-gold-warm">
                disengagement, burnout, and premature exit
              </em>{" "}
              <em className="type-display-accent not-italic text-gold-warm">
                from a game whose rules were never explained.
              </em>
            </SectionQuote>
          </Reveal>

          {/* Dark connector into the solution section — the only charcoal note
              in an otherwise blush chapter, so the eye is pulled forward. */}
          <Reveal variant="fade-in" duration="slow" delay={200}>
            <div
              aria-hidden
              className="mt-12 flex flex-col items-center md:mt-16"
            >
              <span className="block h-16 w-px bg-gradient-to-b from-transparent to-[color-mix(in_oklch,var(--charcoal)_55%,transparent)] md:h-24" />
              <span className="mt-1 block h-2 w-2 rotate-45 bg-[color-mix(in_oklch,var(--charcoal)_65%,transparent)]" />
            </div>
          </Reveal>
        </div>

      </Container>
    </Section>
  );
}

/* ---------------- A MORE STRATEGIC WAY FORWARD ---------------- */

/**
 * Own section, but deliberately not a visual break: it keeps the blush surface
 * and picks up the arc motif from the section above so the chapter still reads
 * as one continuous argument. The six requirements are a real step interaction —
 * the list is the route, the panel is the current step.
 */
function StrategicWayForwardSection() {
  return (
    <Section
      as="section"
      surface="blush"
      pad="none"
      className="relative overflow-x-clip section-pad-bottom-major"
      style={{ background: "color-mix(in oklch, var(--blush-subtle) 62%, var(--warm-cream))" }}
    >
      {/* Motif carried over from the motherhood section above. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px]"
      >
        <ParallaxLayer speed={0.14} className="h-full w-full">
          <div className="h-full w-full rounded-full border border-[color-mix(in_oklch,var(--gold)_16%,transparent)]" />
        </ParallaxLayer>
      </div>

      <Container className="relative z-10">
        <Reveal variant="fade-in" duration="slow">
          <h2 className="type-display max-w-4xl font-light">
            A More Strategic Way{" "}
            <em className="type-display-accent not-italic text-gold-warm">
              Forward
            </em>
          </h2>
          <p className="type-body mt-8 max-w-2xl text-copy md:ml-[18%] md:border-l md:border-[color-mix(in_oklch,var(--gold)_35%,transparent)] md:pl-8">
            Understanding these dynamics is not about assigning blame or fostering pessimism. It is
            about recognizing that career progression occurs within complex systems — and that
            success requires both individual excellence and strategic navigation.
          </p>
          <p className="type-body mt-5 max-w-2xl text-foreground md:ml-[18%] md:pl-8">
            Advancement at senior levels depends on more than performance. It requires:
          </p>
        </Reveal>

        <Reveal variant="fade-up" className="mt-14 md:mt-20">
          <SelectablePanel
            variant="step"
            label="What advancement at senior levels requires"
            listClassName="lg:col-span-6"
            panelClassName="lg:col-span-6 lg:sticky lg:top-28 lg:self-start"
            items={FORWARD.map((f, i) => ({
              label: f.t,
              meta: `Step ${String(i + 1).padStart(2, "0")} of ${String(FORWARD.length).padStart(2, "0")}`,
              detail: (
                <>
                  <h3 className="font-serif font-light text-[length:var(--text-heading-2)] leading-[1.05] tracking-[-0.02em] text-foreground">
                    {f.t}
                  </h3>
                  <p className="mt-6 text-copy">{f.d}</p>
                </>
              ),
            }))}
            onSelect={(index) =>
              track("strategic_step_selected", {
                section: "strategic_way_forward",
                position: index + 1,
              })
            }
          />
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- HOW I SUPPORT ---------------- */

/**
 * Floor and contact shadow for a full-length cut-out. Values are percentages
 * of the image box, measured from where the feet sit in each source file, so
 * they stay under her feet at every rendered size.
 */
function PortraitFloor({
  feetTop,
  feetLeft,
  feetWidth,
}: {
  feetTop: number;
  feetLeft: number;
  feetWidth: number;
}) {
  return (
    <>
      <div
        aria-hidden
        className="absolute left-0 right-0 h-[8%] -translate-y-1/2 rounded-[50%]"
        style={{
          top: `${feetTop}%`,
          background:
            "radial-gradient(closest-side, color-mix(in oklch, var(--gold) 30%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute h-[4%] -translate-y-1/2 rounded-[50%] bg-black/15 blur-xl"
        style={{ top: `${feetTop}%`, left: `${feetLeft - 8}%`, width: `${feetWidth + 16}%` }}
      />
      <div
        aria-hidden
        className="absolute z-10 h-[1.6%] -translate-y-1/2 rounded-[50%] bg-black/40 blur-[5px]"
        style={{ top: `${feetTop}%`, left: `${feetLeft}%`, width: `${feetWidth}%` }}
      />
    </>
  );
}

/**
 * Restores the client-approved structure: heading, intro lead, the numbered
 * SUPPORT_FOCUS list, then the two programmes flanking a centre portrait.
 * Each card shows its summary until the reader opens the detail, which then
 * takes the summary's place.
 */
function ProgrammeColumn({
  title,
  kicker,
  tone,
  summary,
  detailLabel,
  detail,
  ctaLabel,
  ctaHash,
  delay,
  className,
}: {
  title: React.ReactNode;
  kicker: string;
  tone: "dark" | "gold";
  summary: React.ReactNode;
  detailLabel: string;
  detail: React.ReactNode;
  ctaLabel: string;
  /** Section id on /work-with-me this programme's CTA should land on. */
  ctaHash: string;
  delay?: number;
  className?: string;
}) {
  const dark = tone === "dark";
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Reveal
      as="article"
      variant="fade-up"
      delay={delay}
      /* On lg the two programmes share the grid's three rows (title, card,
         CTA) through subgrid, so both cards start, end and measure the same
         even though the titles differ in length. */
      className={cn(
        "relative z-20 flex flex-col lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:justify-items-center lg:text-center",
        className,
      )}
    >
      <div className="flex w-full flex-col items-center lg:h-full lg:justify-end">
        <h3
          className={cn(
            "font-serif leading-[1.05] text-gold-deep",
            dark ? "type-h2" : "type-h3",
          )}
        >
          {title}
        </h3>
        <div className="mt-3 w-full max-w-[26rem]">
          <Hairline tone="gold" />
          <p className="pt-3 eyebrow text-foreground">{kicker}</p>
        </div>
      </div>

      {/* Summary and detail share one grid cell, so the card is always sized to
          the longer of the two. Opening swaps the text in place instead of
          growing the card, which kept resizing the row and shrinking the
          portrait beside it. The gold panel is too light for offwhite copy, so
          its emphasis is carried by weight rather than colour. */}
      <div
        className={cn(
          "relative mt-6 flex w-full flex-1 flex-col p-8 text-left md:p-10",
          /* Base styles colour every <p> secondary grey, which vanished on the
             dark panel, so the panel colour has to reach the paragraphs. */
          dark
            ? "border-l-4 border-l-[var(--gold)] text-background [&_p]:text-background/90 shadow-[0_30px_80px_color-mix(in_oklch,var(--charcoal)_22%,transparent)]"
            : "border-r-4 border-r-foreground/25 text-foreground [&_p]:text-foreground shadow-[0_30px_80px_color-mix(in_oklch,var(--gold)_24%,transparent)]",
        )}
        style={{
          background: dark
            ? "var(--foreground)"
            : "color-mix(in oklch, var(--gold) 88%, var(--foreground))",
        }}
      >
        <div className="grid flex-1 [grid-template-areas:'stack']">
          <div
            aria-hidden={open}
            className={cn(
              "[grid-area:stack] self-center transition-[opacity,visibility] duration-700 ease-out",
              open ? "invisible opacity-0" : "visible opacity-100",
            )}
          >
            <p className="font-serif font-light text-[clamp(1.3rem,0.5vw+1rem,1.6rem)] leading-[1.45]">
              {summary}
            </p>
          </div>
          <div
            id={panelId}
            aria-hidden={!open}
            className={cn(
              "[grid-area:stack] space-y-4 text-[length:var(--text-small)] leading-[1.7] transition-[opacity,visibility] duration-700 ease-out",
              open ? "visible opacity-100" : "invisible opacity-0",
            )}
          >
            {detail}
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => {
            if (!open) track("programme_explored", { section: "programmes", programme: ctaHash });
            setOpen((v) => !v);
          }}
          className={cn(
            "mt-8 flex w-full cursor-pointer items-center justify-between gap-4 border-t pt-5 text-left font-serif text-[clamp(1.4rem,0.6vw+1.05rem,1.8rem)] leading-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
            dark
              ? "border-background/20 text-gold-warm hover:text-background"
              : "border-foreground/25 text-foreground hover:text-foreground/75",
          )}
        >
          <span>{detailLabel}</span>
          <span
            aria-hidden
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-current font-sans text-xl leading-none transition-transform duration-500",
              open && "rotate-45",
            )}
          >
            +
          </span>
        </button>
      </div>

      {/* Deep-links to this programme's own section. Both CTAs previously landed
          on the top of /work-with-me, so two differently named buttons went to
          the same place. */}
      <Link
        to="/work-with-me"
        hash={ctaHash}
        className="cta-primary mt-8 self-start lg:justify-self-center"
        onClick={() => track("programme_explored", { section: "programmes", programme: ctaHash })}
      >
        {ctaLabel} <span aria-hidden className="cta-arrow">→</span>
      </Link>
    </Reveal>
  );
}

function HowISupportSection() {
  return (
    <Section
      as="section"
      surface="cream"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
      style={{ background: "color-mix(in oklch, var(--cream) 55%, var(--background))" }}
    >
      <Container className="relative z-10">
        <Reveal variant="fade-in" duration="slow">
          <p className="eyebrow text-gold-ink mb-6">Programs</p>
          <h2 className="type-display max-w-4xl font-light">
            How I Support{" "}
            <span className="text-foreground/90">High-Potential</span>
            <br />
            <em className="type-display-accent text-gold-warm">Women</em>
          </h2>
        </Reveal>

        <Reveal delay={80} variant="fade-up" className="mt-10 md:mt-12">
          <p className="max-w-3xl type-body text-copy">
            I work with ambitious professionals who want their impact, influence, and career
            trajectory to reflect their true capability — without stepping away from roles they have
            invested years building.
          </p>
          <p className="mt-6 max-w-4xl type-lead text-foreground">
            My approach integrates coaching with{" "}
            <em className="not-italic font-normal text-gold-ink">
              evidence-based gender insight, strengths science,
            </em>{" "}
            and a deep understanding of organizational dynamics to help clients:
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-x-12 sm:grid-cols-2">
          {SUPPORT_FOCUS.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={60 + i * 40}
              variant="fade-up"
              duration="fast"
              className="flex items-baseline gap-4 border-t border-[color-mix(in_oklch,var(--gold)_28%,transparent)] py-4"
            >
              <span
                aria-hidden
                className="font-serif italic leading-none text-gold-deep text-[length:var(--text-lead)]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="type-body text-copy">{item}</span>
            </Reveal>
          ))}
        </ul>

        {/* Two programmes flanking the centre portrait */}
        <div className="relative mt-16 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-[1fr_13rem_1fr] lg:grid-rows-[auto_1fr_auto] lg:gap-x-6 lg:gap-y-0 xl:grid-cols-[1fr_15rem_1fr] xl:gap-x-8">
          <ProgrammeColumn
            className="lg:col-start-1 lg:row-start-1"
            tone="dark"
            title={
              <>
                ELEVATE<sup className="align-super text-[0.45em]">™</sup>
              </>
            }
            kicker="Strategic Advancement Program"
            ctaLabel="Explore ELEVATE"
            ctaHash="elevate"
            detailLabel="What we work on"
            summary={
              <>
                A structured six-month engagement designed to help{" "}
                <em className="italic text-gold-warm">high-potential women</em> translate capability
                into progression within complex organizational environments.
              </>
            }
            detail={
              <>
                <p>
                  Through the <em className="italic text-gold-warm">ELEVATE Framework</em>, we work
                  systematically across{" "}
                  <em className="italic text-gold-warm">
                    leadership presence, visibility, influence, advancement strategy, and long-term
                    sustainability
                  </em>{" "}
                  — equipping you to move forward with clarity, confidence, and strategic intent.
                </p>
                <p>
                  Whether self-funded or sponsored by your organization, the program provides a
                  clear roadmap for advancing without burnout or compromise.
                </p>
              </>
            }
          />

          {/* Centre portrait. On lg it is taken out of the grid so its height
              cannot stretch the card rows; it stands on the grid's floor and its
              empty upper canvas rises into the space above. pointer-events-none
              keeps that canvas from blocking anything it overlaps. */}
          <div className="pointer-events-none relative z-30 order-first -mt-24 flex justify-center sm:-mt-32 lg:absolute lg:inset-x-0 lg:bottom-0 lg:order-none lg:mt-0">
            <Reveal variant="scale" duration="slow" className="relative">
              <PortraitFloor feetTop={96} feetLeft={37} feetWidth={31} />
              <img
                src={programmePortrait}
                alt="Amna Imran"
                draggable={false}
                loading="lazy"
                className="relative z-10 h-[520px] w-auto max-w-none select-none object-contain object-bottom sm:h-[640px] lg:-mb-4 lg:h-[960px] xl:h-[1060px]"
              />
            </Reveal>
          </div>

          <ProgrammeColumn
            className="lg:col-start-3 lg:row-start-1"
            tone="gold"
            delay={140}
            title={
              <>
                Lead &amp; Thrive Through Motherhood
                <sup className="align-super text-[0.45em]">™</sup>
              </>
            }
            kicker="Evidence-Informed Coaching Program"
            ctaLabel={"Explore Lead & Thrive"}
            ctaHash="lead-thrive"
            detailLabel="How it protects your trajectory"
            summary={
              <>
                Support for high-potential women through the{" "}
                <strong className="font-semibold">
                  profound transition into working parenthood
                </strong>
                .
              </>
            }
            detail={
              <>
                <p>
                  Grounded in research on the motherhood penalty and organizational dynamics, this
                  program helps protect{" "}
                  <strong className="font-semibold">leadership trajectory</strong> while navigating
                  the{" "}
                  <strong className="font-semibold">
                    identity, visibility, and confidence shifts
                  </strong>{" "}
                  that often accompany maternity leave and return-to-work.
                </p>
                <p>
                  Rather than asking women to scale back ambition or overcompensate, we focus on{" "}
                  <strong className="font-semibold">
                    strategic positioning, stakeholder alignment, and sustainable leadership
                  </strong>{" "}
                  — so motherhood becomes an integrated{" "}
                  <strong className="font-semibold">chapter of growth</strong>.
                </p>
              </>
            }
          />
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- WHY MY APPROACH IS DIFFERENT ---------------- */

const WHY_SURFACE = "color-mix(in oklch, var(--blush-subtle) 58%, var(--warm-cream))";

/**
 * A gold line that draws down through the numbered stages as the reader
 * scrolls, lighting each node as it arrives, so 01 → 02 → 03 read as one story.
 * The track is measured between the first and last node centres, and
 * re-measured on resize because the selectable panel changes stage heights.
 */
function StoryRail({
  children,
  className,
  centered = false,
}: {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const track = el?.querySelector<HTMLElement>("[data-rail-track]");
    const fill = el?.querySelector<HTMLElement>("[data-rail-fill]");
    if (!el || !track || !fill) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const update = () => {
      raf = 0;
      const nodes = [...el.querySelectorAll<HTMLElement>("[data-rail-node]")];
      if (nodes.length < 2) return;
      const top = el.getBoundingClientRect().top;
      const centres = nodes.map((n) => {
        const r = n.getBoundingClientRect();
        return r.top + r.height / 2 - top;
      });
      const first = centres[0];
      const span = centres[centres.length - 1] - first;
      track.style.top = `${first}px`;
      track.style.height = `${span}px`;

      // The line's tip sits at 60% of the viewport height.
      const reach = reduce ? Number.POSITIVE_INFINITY : window.innerHeight * 0.6 - top;
      const progress = Math.min(1, Math.max(0, (reach - first) / span));
      fill.style.transform = `scaleY(${progress})`;
      nodes.forEach((n, i) => n.toggleAttribute("data-active", reach >= centres[i] - 1));
    };
    const schedule = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    const observer = new ResizeObserver(schedule);
    observer.observe(el);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        aria-hidden
        data-rail-track
        className={cn(
          "pointer-events-none absolute w-px -translate-x-1/2 bg-[color-mix(in_oklch,var(--gold)_24%,transparent)]",
          centered ? "left-1/2" : "left-6 md:left-7",
        )}
      >
        <div
          data-rail-fill
          className="h-full w-full origin-top bg-[var(--gold-deep)] transition-transform duration-700 ease-out"
          style={{ transform: "scaleY(0)" }}
        />
      </div>
      {children}
    </div>
  );
}

function StoryStage({
  index,
  title,
  children,
  className,
}: {
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-[3rem_1fr] gap-x-5 md:grid-cols-[3.5rem_1fr] md:gap-x-8", className)}>
      <div className="relative z-10 flex justify-center">
        <span
          data-rail-node
          className="grid h-12 w-12 place-items-center rounded-full border border-[color-mix(in_oklch,var(--gold)_45%,transparent)] bg-[var(--why-surface)] font-serif text-[1.15rem] text-gold-deep transition-colors duration-700 data-active:border-[var(--gold-deep)] data-active:bg-[var(--gold-deep)] data-active:text-background md:h-14 md:w-14 md:text-[1.35rem]"
        >
          {index}
        </span>
      </div>
      <div className="min-w-0">
        <Reveal variant="fade-up" duration="slow">
          <h3 className="pt-2 font-serif font-light text-[length:var(--text-heading-1)] leading-[1.1] tracking-[-0.02em] text-foreground md:pt-2.5">
            {title}
          </h3>
        </Reveal>
        {children}
      </div>
    </div>
  );
}

const WHY_OFFERS = [
  {
    title: "Leadership Coaching",
    body: "ICF ACC-credentialed executive coaching grounded in real organisational insight — not generic personal development.",
  },
  {
    title: "DE&I Consultancy",
    body: "Gender strategy and inclusive leadership design that protects advancement pathways inside complex systems.",
  },
  {
    title: "CliftonStrengths Assessment",
    body: "Gallup-trained strengths science to build on what already drives effectiveness under pressure.",
  },
];

const WHY_ARCH_BACKGROUND =
  "linear-gradient(to bottom, color-mix(in oklch, var(--blush) 48%, transparent), color-mix(in oklch, var(--blush) 14%, transparent))";

function WhyVsHeader({ a, b }: { a: string; b: string }) {
  return (
    <span className="flex flex-wrap items-baseline gap-x-3">
      <span className="text-gold-ink">{a}</span>
      <span
        className="type-display-accent normal-case leading-none tracking-normal text-gold-warm"
        style={{ fontSize: "2.6rem" }}
      >
        Vs
      </span>
      <span className="text-copy-muted">{b}</span>
    </span>
  );
}

/** Temporary divider naming each layout option so the client can compare. */
function VariantLabel({ name, note }: { name: string; note: string }) {
  return (
    <div className="bg-foreground px-6 py-4 text-center text-background">
      <p className="text-[0.8rem] font-medium uppercase tracking-[0.22em] text-gold-warm">{name}</p>
      <p className="mt-1 text-[0.85rem] text-background/80">{note}</p>
    </div>
  );
}

/** The section as approved before the latest round of client feedback. */
function WhyDifferentSection() {
  const principles = COMPARISON.map((c) => ({
    label: c.a,
    meta: `Not ${c.b}`,
    detail: c.d,
  }));

  return (
    <Section
      as="section"
      surface="blush"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
      style={{ background: WHY_SURFACE, ["--why-surface" as string]: WHY_SURFACE }}
    >
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="relative z-20 lg:col-span-6 lg:pt-16">
            <Reveal variant="fade-up">
              <h2 className="type-display font-light">
                Why My Approach
                <br />
                <em className="type-display-accent text-gold-warm">Is Different</em>
              </h2>
            </Reveal>

            <Reveal delay={80} variant="fade-up">
              <p className="mt-8 max-w-xl type-body text-copy md:border-l md:border-[color-mix(in_oklch,var(--gold)_38%,transparent)] md:pl-8">
                Most coaching focuses on personal development in isolation — confidence, mindset, or
                communication skills. While these matter, they do not fully explain why highly capable
                women often struggle to translate performance into progression.
              </p>
            </Reveal>
          </div>

          {/* The arch, floor and shadow are percentages of the image itself,
              because the cut-out has a lot of empty canvas and they have to
              track her figure, not the column. */}
          <div className="relative -mt-20 flex justify-center sm:-mt-28 lg:col-span-6 lg:-mt-16 lg:justify-end lg:pr-6 xl:-mt-40 xl:pr-12">
            <Reveal variant="scale" duration="slow" className="relative">
              <div
                aria-hidden
                className="absolute bottom-[5%] left-[16%] right-[14%] top-[16%] rounded-t-[999px]"
                style={{ background: WHY_ARCH_BACKGROUND }}
              />
              <PortraitFloor feetTop={94.5} feetLeft={40} feetWidth={32} />
              <img
                src={approachPortrait}
                alt="Amna Imran"
                draggable={false}
                loading="lazy"
                className="relative z-10 h-[400px] w-auto max-w-none select-none object-contain object-bottom sm:h-[480px] md:h-[540px] lg:h-[640px] xl:h-[720px]"
              />
            </Reveal>
          </div>
        </div>

        <StoryRail className="mt-16 md:mt-20">
          <StoryStage index="01" title="What I bring">
            <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
              {WHY_OFFERS.map((offer, i) => (
                <Reveal key={offer.title} delay={60 + i * 70} variant="fade-up">
                  <div
                    className={
                      i > 0
                        ? "md:border-l md:border-[color-mix(in_oklch,var(--gold)_28%,transparent)] md:pl-8"
                        : ""
                    }
                  >
                    <h4 className="font-serif text-[length:var(--text-heading-3)] leading-snug text-foreground">
                      {offer.title}
                    </h4>
                    <p className="mt-4 type-body text-copy">{offer.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </StoryStage>

          <StoryStage index="02" title="How I work" className="mt-20 md:mt-24">
            <Reveal variant="fade-up">
              <p className="mt-5 max-w-2xl type-lead text-foreground">
                Five principles separate this from generic career advice. Select one to see what it
                means in practice.
              </p>
            </Reveal>

            <Reveal delay={80} variant="fade-up" className="mt-10">
              <SelectablePanel
                label="Principles behind my approach"
                variant="label"
                items={principles}
                listClassName="lg:pr-6"
                panelClassName="lg:border-l lg:border-[color-mix(in_oklch,var(--gold)_30%,transparent)] lg:pl-10"
                onSelect={(index) =>
                  track("methodology_principle_selected", {
                    section: "why_my_approach_is_different",
                    principle: COMPARISON[index]?.a,
                    position: index + 1,
                  })
                }
              />
            </Reveal>

            <Reveal delay={120} variant="fade-up">
              <Link to="/work-with-me" className="cta-secondary mt-10">
                See how we would work together <span aria-hidden className="cta-arrow">→</span>
              </Link>
            </Reveal>
          </StoryStage>

          <StoryStage index="03" title="Where it lands" className="mt-20 md:mt-24">
            <Reveal variant="fade-up" delay={80}>
              <p className="mt-6 max-w-3xl font-serif font-light text-[length:var(--text-heading-2)] leading-[1.4] text-foreground">
                My work sits at the intersection of{" "}
                <em className="type-display-accent text-gold-warm">Individual capability</em> and{" "}
                <em className="type-display-accent text-gold-warm">Organizational reality.</em>
              </p>
            </Reveal>
          </StoryStage>
        </StoryRail>

        <Reveal variant="fade-in" duration="slow" className="relative z-20">
          <div aria-hidden className="mx-auto mt-10 flex flex-col items-center md:mt-14">
            <span className="block h-14 w-px bg-gradient-to-b from-transparent via-[color-mix(in_oklch,var(--gold)_50%,transparent)] to-[color-mix(in_oklch,var(--gold)_50%,transparent)] md:h-20" />
            <span className="block h-1.5 w-1.5 rounded-full bg-[var(--gold-deep)]" />
          </div>
        </Reveal>

        <div className="relative z-20 mt-6 flex justify-center md:mt-8">
          <Reveal variant="fade-in" duration="slow">
            <SectionQuote
              sub={
                <>
                  You need a strategy that works
                  <br />
                  in the environment you&apos;re operating in.
                </>
              }
            >
              <em className="type-display-accent not-italic italic text-gold-warm">
                You don&apos;t need to change who you are.
              </em>
            </SectionQuote>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Variant A: quote beside the portrait, intersection line under the heading,
 * 03 removed, principles as bordered tiles.
 */
function WhyDifferentVariantA() {
  const offers = WHY_OFFERS;

  // The "Vs" pairs become the selectable principles: label is what I do,
  // meta sets it against the approach it replaces, detail is the explanation.
  const principles = COMPARISON.map((c, i) => ({
    label: c.a,
    meta: <WhyVsHeader a={c.a} b={c.b} />,
    detail: (
      <>
        <span
          aria-hidden
          className="pointer-events-none absolute right-8 top-4 hidden select-none font-serif text-[5.5rem] leading-none text-[color-mix(in_oklch,var(--gold)_16%,transparent)] lg:block"
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        {c.d}
      </>
    ),
  }));

  return (
    <Section
      as="section"
      surface="blush"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
      style={{ background: WHY_SURFACE, ["--why-surface" as string]: WHY_SURFACE }}
    >
      <Container className="relative">
        <StoryRail>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="relative z-20 lg:col-span-7">
            <Reveal variant="fade-up">
              <h2 className="type-display font-light">
                Why My Approach
                <br />
                <em className="type-display-accent text-gold-warm">Is Different</em>
              </h2>
            </Reveal>

            <Reveal delay={60} variant="fade-up">
              <p className="mt-6 max-w-xl font-serif font-light text-[length:var(--text-heading-3)] leading-[1.45] text-foreground">
                My work sits at the intersection of{" "}
                <em className="type-display-accent text-gold-warm">Individual capability</em> and{" "}
                <em className="type-display-accent text-gold-warm">Organizational reality.</em>
              </p>
            </Reveal>

            <Reveal delay={120} variant="fade-up">
              <p className="mt-8 max-w-xl type-body text-copy md:border-l md:border-[color-mix(in_oklch,var(--gold)_38%,transparent)] md:pl-8">
                Most coaching focuses on personal development in isolation — confidence, mindset, or
                communication skills. While these matter, they do not fully explain why highly capable
                women often struggle to translate performance into progression.
              </p>
            </Reveal>

            {/* 01 — the three disciplines behind the work */}
            <StoryStage index="01" title="What I bring" className="mt-14 md:mt-16">
              <div className="mt-6 grid gap-6 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {offers.map((offer, i) => (
                  <Reveal key={offer.title} delay={60 + i * 70} variant="fade-up">
                    <div className="border-t border-[color-mix(in_oklch,var(--gold)_35%,transparent)] pt-5">
                      <h4 className="font-serif text-[length:var(--text-heading-3)] leading-snug text-foreground">
                        {offer.title}
                      </h4>
                      <p className="mt-3 text-[length:var(--text-small)] font-light leading-[1.65] text-copy">
                        {offer.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </StoryStage>
          </div>

          {/* Portrait with the closing quote beside her. The cut-out carries
              wide transparent margins, so --ph drives both the image height
              and negative margins that trim that empty canvas, leaving the
              quote room beside the figure itself. The arch, floor and shadow
              are percentages of the image box, so they track her at every
              size. */}
          <div className="relative flex flex-col items-center gap-8 lg:col-span-5 lg:-mt-24 xl:-mt-32 xl:flex-row xl:items-end xl:justify-end xl:gap-10">
            <Reveal
              variant="fade-up"
              duration="slow"
              delay={200}
              className="relative z-20 order-2 max-w-[22rem] text-center xl:order-1 xl:mb-24 xl:flex-1 xl:text-right"
            >
              <figure>
                <span
                  aria-hidden
                  className="block font-serif text-[3.5rem] leading-[0.6] text-[color-mix(in_oklch,var(--gold)_60%,transparent)]"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 font-serif font-light text-[clamp(1.2rem,0.9vw+0.85rem,1.6rem)] leading-[1.25] text-foreground">
                  <em className="type-display-accent block text-gold-warm">
                    You don&apos;t need to change who you are.
                  </em>
                  <span className="mt-4 block text-[length:var(--text-lead)] leading-[1.45]">
                    You need a strategy that works in the environment you&apos;re operating in.
                  </span>
                </blockquote>
                <div
                  aria-hidden
                  className="mx-auto mt-6 h-px w-16 bg-[var(--gold)] xl:ml-auto xl:mr-0"
                />
              </figure>
            </Reveal>

            <div className="order-1 -mt-24 shrink-0 [--ph:440px] sm:-mt-32 sm:[--ph:520px] lg:mt-0 lg:[--ph:720px] xl:order-2 xl:[--ph:860px]">
              <Reveal
                variant="scale"
                duration="slow"
                className="relative ml-[calc(var(--ph)*-0.18)] mr-[calc(var(--ph)*-0.2)]"
              >
                <div
                  aria-hidden
                  className="absolute bottom-[5%] left-[24%] right-[27%] top-[16%] rounded-t-[999px]"
                  style={{
                    background:
                      "linear-gradient(to bottom, color-mix(in oklch, var(--blush) 48%, transparent), color-mix(in oklch, var(--blush) 14%, transparent))",
                  }}
                />
                <PortraitFloor feetTop={94.5} feetLeft={40} feetWidth={32} />
                <img
                  src={approachPortrait}
                  alt="Amna Imran"
                  draggable={false}
                  loading="lazy"
                  className="relative z-10 h-[var(--ph)] w-auto max-w-none select-none object-contain object-bottom"
                />
              </Reveal>
            </div>
          </div>
        </div>

        {/* 02 — the principles, one description at a time */}
        <StoryStage index="02" title="How I work" className="mt-20 md:mt-24">
          <Reveal variant="fade-up">
            <p className="mt-5 max-w-2xl type-lead text-foreground">
              Five principles separate this from generic career advice. Select one to see what it
              means in practice.
            </p>
          </Reveal>

          <Reveal delay={80} variant="fade-up" className="mt-10">
            <SelectablePanel
              label="Principles behind my approach"
              variant="label"
              items={principles}
              className="principles"
              listClassName="lg:pr-2"
              panelClassName="relative lg:self-start lg:border lg:border-t-2 lg:border-[color-mix(in_oklch,var(--gold)_26%,transparent)] lg:border-t-[color:var(--gold-deep)] lg:bg-[color-mix(in_oklch,var(--offwhite)_80%,transparent)] lg:p-10 lg:pr-28 lg:shadow-[0_24px_60px_color-mix(in_oklch,var(--charcoal)_8%,transparent)]"
              onSelect={(index) =>
                track("methodology_principle_selected", {
                  section: "why_my_approach_variant_a",
                  principle: COMPARISON[index]?.a,
                  position: index + 1,
                })
              }
            />
          </Reveal>

          <Reveal delay={120} variant="fade-up">
            <Link to="/work-with-me" className="cta-secondary mt-10">
              See how we would work together <span aria-hidden className="cta-arrow">→</span>
            </Link>
          </Reveal>
        </StoryStage>
        </StoryRail>
      </Container>
    </Section>
  );
}

/** Centred numbered heading used as a rail node in Variant B. */
function CentredStageHead({ index, title }: { index: string; title: string }) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <span
        data-rail-node
        className="grid h-14 w-14 place-items-center rounded-full border border-[color-mix(in_oklch,var(--gold)_45%,transparent)] bg-[var(--why-surface)] font-serif text-[1.35rem] text-gold-deep transition-colors duration-700 data-active:border-[var(--gold-deep)] data-active:bg-[var(--gold-deep)] data-active:text-background"
      >
        {index}
      </span>
      <Reveal variant="fade-up" duration="slow">
        <h3 className="mt-5 font-serif font-light text-[length:var(--text-heading-1)] leading-[1.1] tracking-[-0.02em] text-foreground">
          {title}
        </h3>
      </Reveal>
    </div>
  );
}

/** Small dot a centred rail starts from. */
function RailStart() {
  return (
    <span
      data-rail-node
      aria-hidden
      className="relative z-10 mx-auto block h-2 w-2 rounded-full bg-[color-mix(in_oklch,var(--gold)_55%,transparent)] transition-colors duration-700 data-active:bg-[var(--gold-deep)]"
    />
  );
}

/**
 * Variant B: centred editorial layout. The quote is a card resting on the
 * portrait's arch, the disciplines are cards, the principles are pill tabs
 * above one detail card, and a scroll-drawn line joins intro → 01 → 02.
 */
function WhyDifferentVariantB() {
  const [active, setActive] = useState(0);
  const tabs = useSelectableList(COMPARISON.length, {
    orientation: "horizontal",
    value: active,
    onValueChange: setActive,
    onSelect: (index) =>
      track("methodology_principle_selected", {
        section: "why_my_approach_variant_b",
        principle: COMPARISON[index]?.a,
        position: index + 1,
      }),
  });
  const panelState = usePanelTransition(active);
  const current = COMPARISON[active];

  return (
    <Section
      as="section"
      surface="blush"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
      style={{ background: WHY_SURFACE, ["--why-surface" as string]: WHY_SURFACE }}
    >
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="relative z-20 lg:col-span-6">
            <Reveal variant="fade-up">
              <h2 className="type-display font-light">
                Why My Approach
                <br />
                <em className="type-display-accent text-gold-warm">Is Different</em>
              </h2>
            </Reveal>
            <Reveal delay={60} variant="fade-up">
              <p className="mt-6 max-w-xl font-serif font-light text-[length:var(--text-heading-3)] leading-[1.45] text-foreground">
                My work sits at the intersection of{" "}
                <em className="type-display-accent text-gold-warm">Individual capability</em> and{" "}
                <em className="type-display-accent text-gold-warm">Organizational reality.</em>
              </p>
            </Reveal>
            <Reveal delay={120} variant="fade-up">
              <p className="mt-8 max-w-xl type-body text-copy md:border-l md:border-[color-mix(in_oklch,var(--gold)_38%,transparent)] md:pl-8">
                Most coaching focuses on personal development in isolation — confidence, mindset, or
                communication skills. While these matter, they do not fully explain why highly capable
                women often struggle to translate performance into progression.
              </p>
            </Reveal>
          </div>

          <div className="relative -mt-20 flex flex-col items-center sm:-mt-28 lg:col-span-6 lg:-mt-24 lg:items-end">
            <Reveal variant="scale" duration="slow" className="relative">
              <div
                aria-hidden
                className="absolute bottom-[5%] left-[16%] right-[14%] top-[16%] rounded-t-[999px]"
                style={{ background: WHY_ARCH_BACKGROUND }}
              />
              <PortraitFloor feetTop={94.5} feetLeft={40} feetWidth={32} />
              <img
                src={approachPortrait}
                alt="Amna Imran"
                draggable={false}
                loading="lazy"
                className="relative z-10 h-[400px] w-auto max-w-none select-none object-contain object-bottom sm:h-[480px] md:h-[540px] lg:h-[680px] xl:h-[760px]"
              />
            </Reveal>

            {/* Rests on the lower-left of the arch on desktop, so the quote reads
                as hers; stacks under the portrait on smaller screens. */}
            <Reveal
              variant="fade-up"
              duration="slow"
              delay={240}
              className="relative z-20 mt-6 w-full max-w-sm lg:absolute lg:bottom-[10%] lg:-left-6 lg:mt-0 lg:w-[14rem] xl:-left-8 xl:w-[15.5rem]"
            >
              <figure className="border border-t-2 border-[color-mix(in_oklch,var(--gold)_26%,transparent)] border-t-[color:var(--gold-deep)] bg-[var(--offwhite)] p-7 shadow-[0_24px_60px_color-mix(in_oklch,var(--charcoal)_10%,transparent)]">
                <span
                  aria-hidden
                  className="block font-serif text-[3rem] leading-[0.6] text-[color-mix(in_oklch,var(--gold)_60%,transparent)]"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 font-serif font-light text-[clamp(1.15rem,0.7vw+0.9rem,1.45rem)] leading-[1.25] text-foreground">
                  <em className="type-display-accent block text-gold-warm">
                    You don&apos;t need to change who you are.
                  </em>
                  <span className="mt-4 block text-[length:var(--text-body)] leading-[1.5]">
                    You need a strategy that works in the environment you&apos;re operating in.
                  </span>
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* intro → 01 */}
        <StoryRail centered className="mt-16 md:mt-20">
          <RailStart />
          <div className="h-16 md:h-20" />
          <CentredStageHead index="01" title="What I bring" />
        </StoryRail>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHY_OFFERS.map((offer, i) => (
            <Reveal key={offer.title} delay={60 + i * 90} variant="fade-up" duration="slow">
              <div className="group relative h-full border border-[color-mix(in_oklch,var(--gold)_26%,transparent)] bg-[color-mix(in_oklch,var(--offwhite)_55%,transparent)] p-7 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-[color-mix(in_oklch,var(--gold)_60%,transparent)] hover:shadow-[0_18px_40px_color-mix(in_oklch,var(--charcoal)_8%,transparent)] md:p-8">
                <span
                  aria-hidden
                  className="absolute left-0 top-7 h-8 w-[3px] bg-[var(--gold)] transition-[height] duration-500 group-hover:h-12"
                />
                <h4 className="font-serif text-[length:var(--text-heading-3)] leading-snug text-foreground">
                  {offer.title}
                </h4>
                <p className="mt-4 text-[length:var(--text-small)] font-light leading-[1.65] text-copy">
                  {offer.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 01 → 02 */}
        <StoryRail centered className="mt-14 md:mt-16">
          <RailStart />
          <div className="h-16 md:h-20" />
          <CentredStageHead index="02" title="How I work" />
        </StoryRail>

        <Reveal variant="fade-up">
          <p className="mx-auto mt-5 max-w-2xl text-center type-lead text-foreground">
            Five principles separate this from generic career advice. Select one to see what it
            means in practice.
          </p>
        </Reveal>

        <Reveal delay={80} variant="fade-up">
          <div
            {...tabs.listProps}
            aria-label="Principles behind my approach"
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {COMPARISON.map((c, i) => (
              <button
                key={c.a}
                {...tabs.getItemProps(i)}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-[color-mix(in_oklch,var(--gold)_40%,transparent)] bg-[color-mix(in_oklch,var(--offwhite)_55%,transparent)] py-2 pl-5 pr-2 font-serif text-[length:var(--text-lead)] text-foreground transition-[background-color,border-color,color,box-shadow] duration-500 hover:border-[var(--gold-deep)] hover:shadow-[0_10px_24px_color-mix(in_oklch,var(--charcoal)_8%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-deep)] data-[active=true]:border-[var(--gold-deep)] data-[active=true]:bg-[var(--gold-deep)] data-[active=true]:text-background"
              >
                {c.a}
                <span
                  aria-hidden
                  className="grid h-8 w-8 place-items-center rounded-full border border-current font-sans text-base leading-none transition-transform duration-500 group-hover:translate-x-0.5 group-data-[active=true]:rotate-90"
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div
          {...tabs.panelProps}
          data-state={panelState}
          className="selectable-panel relative mx-auto mt-10 max-w-3xl border border-t-2 border-[color-mix(in_oklch,var(--gold)_26%,transparent)] border-t-[color:var(--gold-deep)] bg-[color-mix(in_oklch,var(--offwhite)_80%,transparent)] p-8 pr-10 shadow-[0_24px_60px_color-mix(in_oklch,var(--charcoal)_8%,transparent)] md:p-12 md:pr-32"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute right-8 top-5 hidden select-none font-serif text-[6rem] leading-none text-[color-mix(in_oklch,var(--gold)_16%,transparent)] md:block"
          >
            {String(active + 1).padStart(2, "0")}
          </span>
          {current && (
            <>
              <p className="eyebrow mb-5">
                <WhyVsHeader a={current.a} b={current.b} />
              </p>
              <div className="type-body-emphasis">{current.d}</div>
            </>
          )}
        </div>

        <Reveal delay={120} variant="fade-up" className="mt-10 flex justify-center">
          <Link to="/work-with-me" className="cta-secondary">
            See how we would work together <span aria-hidden className="cta-arrow">→</span>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- TWO PATHWAYS ---------------- */

/**
 * Both pathways share one baseline, one height and one padding scale — the
 * only difference between them is surface tone. A stretched link overlay makes
 * each whole card clickable while keeping exactly one link per card.
 */
function PathwayCard({
  eyebrow,
  title,
  titleAccent,
  programmes,
  cta,
  to,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  programmes: string[];
  cta: string;
  to: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "pathway-card group relative flex h-full flex-col p-8 transition-[transform,box-shadow,border-color] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] hover:-translate-y-1.5 md:p-10",
        dark
          ? "pathway-card-dark bg-foreground text-background"
          : "border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)] hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-8 h-10 w-1 bg-[var(--gold)] transition-[height] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] group-hover:h-16"
      />

      <p className={cn("eyebrow relative z-10", dark ? "text-gold" : "text-copy-muted")}>
        {eyebrow}
      </p>
      <h3
        className={cn(
          "relative z-10 mt-5 max-w-md font-serif font-light type-h2 leading-[1.08] tracking-[-0.02em]",
          dark ? "text-background" : "text-foreground",
        )}
      >
        {title}{" "}
        <em className="type-display-accent not-italic italic text-gold-warm">{titleAccent}</em>
      </h3>

      <div
        className={cn(
          "relative z-10 my-7 h-px w-full",
          dark ? "bg-background/15" : "bg-[color-mix(in_oklch,var(--gold)_30%,transparent)]",
        )}
      />

      <ul className="relative z-10 space-y-3">
        {programmes.map((item) => (
          <li
            key={item}
            className={cn(
              "flex gap-3 text-[length:var(--text-body)] leading-[1.55]",
              dark ? "text-background/90" : "text-copy",
            )}
          >
            <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-[var(--gold)]" />
            {item}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-auto pt-9">
        <Link
          to={to}
          className={cn(
            dark ? "cta-primary-invert" : "cta-primary",
            "px-5 tracking-[0.08em] xl:whitespace-nowrap",
          )}
          onClick={() =>
            track(dark ? "organisational_engagement" : "strategic_clarity_call", {
              section: "choose_the_pathway",
            })
          }
        >
          {cta} <span aria-hidden className="cta-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}

function TwoPathwaysSection() {
  return (
    <Section
      as="section"
      surface="warm"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
      style={{ background: "color-mix(in oklch, var(--warm-cream) 88%, var(--cream))" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-[420px] w-[420px]"
      >
        <ParallaxLayer speed={0.18} className="h-full w-full">
          <div className="h-full w-full rounded-full border border-[color-mix(in_oklch,var(--gold)_14%,transparent)]" />
        </ParallaxLayer>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-20 h-[380px] w-[380px]"
      >
        <ParallaxLayer speed={0.1} className="h-full w-full">
          <div className="h-full w-full rounded-full border border-[color-mix(in_oklch,var(--blush)_25%,transparent)]" />
        </ParallaxLayer>
      </div>

      <Container className="relative">
        <Reveal variant="fade-up">
          <h2 className="type-display max-w-4xl font-light">
            Choose the pathway that
            <br />
            <em className="type-display-accent not-italic text-gold-warm">
              fits your context.
            </em>
          </h2>
        </Reveal>

        {/* Shared baseline: both cards start and end on the same lines, and a
            hairline rail across the top ties them to one decision. */}
        <div className="relative mt-[60px]">
          <div
            aria-hidden
            className="absolute -top-8 left-0 hidden h-px w-full bg-[color-mix(in_oklch,var(--gold)_28%,transparent)] lg:block"
          />
          <div
            aria-hidden
            className="absolute -top-8 left-1/2 hidden h-8 w-px -translate-x-1/2 bg-[color-mix(in_oklch,var(--gold)_28%,transparent)] lg:block"
          />

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal as="article" variant="fade-up" className="flex flex-col">
              <PathwayCard
                eyebrow="For Individuals"
                title="Accelerate Your Leadership"
                titleAccent="Trajectory"
                programmes={[
                  "ELEVATE™ Strategic Advancement Program",
                  "Lead & Thrive Through Motherhood™",
                ]}
                cta="Book a Strategic Clarity Call"
                to="/contact"
              />
            </Reveal>

            <Reveal delay={120} as="article" variant="fade-up" className="flex flex-col">
              <PathwayCard
                dark
                eyebrow="For Organizations"
                title="Develop & Retain High-Potential"
                titleAccent="Women"
                programmes={[
                  "Sponsored 1:1 Coaching",
                  "Leadership Workshops",
                  "Strengths-Based Team Development",
                  "DEI Consultancy",
                ]}
                cta="Schedule an Organizational Consultation"
                to="/organizations"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- FOUNDER · CTA · FOOTER (client review options) ---------------- */

const CLOSING_NAV = [
  ["/work-with-me", "Work With Me"],
  ["/organizations", "Organizations"],
  ["/about", "About"],
  ["/insights", "Insights"],
  ["/contact", "Contact"],
] as const;

const CLOSING_CREDENTIALS = [
  { logo: icfLogo, label: "ICF ACC Certified", wide: false },
  { logo: gallupLogo, label: "Gallup Certified CliftonStrengths Coach", wide: false },
  { logo: cdpLogo, label: "Certified Diversity Professional (CDP®)", wide: false },
  { logo: inseadLogo, label: "Gender Specialist trained at INSEAD", wide: true },
];

const CLOSING_SURFACE = {
  founder: "color-mix(in oklch, var(--cream) 55%, var(--background))",
  footer: "var(--warm-cream)",
} as const;

function FounderLeaningPortrait({ className }: { className?: string }) {
  return (
    <Reveal variant="fade-up" duration="slow" className={cn("relative", className)}>
      <img
        src={founderLeaning}
        alt="Amna Imran — Founder"
        className="block h-auto w-full select-none"
        draggable={false}
      />
    </Reveal>
  );
}

function ClosingCtaButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full flex-col gap-4 sm:w-[26rem] sm:whitespace-nowrap", className)}>
      <Link
        to="/contact"
        className="cta-primary-invert justify-between px-6 tracking-[0.12em]"
        onClick={() => track("strategic_clarity_call", { section: "final_cta" })}
      >
        Book a Strategic Clarity Call <span aria-hidden className="cta-arrow">→</span>
      </Link>
      <Link
        to="/organizations"
        className="cta-secondary-invert justify-between px-6 tracking-[0.12em]"
        onClick={() => track("organisational_engagement", { section: "final_cta" })}
      >
        For Corporate &amp; HR Enquiries <span aria-hidden className="cta-arrow">→</span>
      </Link>
    </div>
  );
}

function ClosingFooterColumns({ dark = false }: { dark?: boolean }) {
  const muted = dark ? "text-background/75" : "text-copy";
  const link = dark
    ? "text-background/80 hover:text-background"
    : "text-copy hover:text-foreground";
  return (
    <div className="grid gap-12 md:grid-cols-12 md:gap-x-10">
      <div className="md:col-span-5">
        <Link to="/" aria-label="Amna Imran home" className="inline-flex items-center gap-3.5">
          <img
            src={logoMark}
            alt=""
            aria-hidden
            className={cn("h-10 w-auto shrink-0", dark && "brightness-0 invert opacity-90")}
            draggable={false}
          />
          <span>
            <span
              className={cn(
                "block font-serif text-[1.6rem] leading-none tracking-[-0.01em]",
                dark ? "text-background" : "text-foreground",
              )}
            >
              Amna Imran
            </span>
            <span className={cn("eyebrow mt-2 block", dark ? "text-gold" : "text-copy-muted")}>
              Coaching · Consulting
            </span>
          </span>
        </Link>
        <p className={cn("mt-6 max-w-sm text-[length:var(--text-small)] leading-[1.7]", muted)}>
          Executive coaching and organizational consulting for high potential women navigating
          advancement in complex environments.
        </p>
      </div>

      <nav aria-label="Footer" className="md:col-span-3">
        <p className={cn("eyebrow mb-5", dark ? "text-gold" : "text-copy-muted")}>Navigate</p>
        <ul className="space-y-3">
          {CLOSING_NAV.map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                className={cn("text-[length:var(--text-small)] transition-colors", link)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="space-y-4 md:col-span-4">
        {CLOSING_CREDENTIALS.map((c) => (
          <li key={c.label} className="flex items-center gap-4">
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
                dark ? "bg-background" : "bg-background/70",
              )}
            >
              <img
                src={c.logo}
                alt=""
                aria-hidden
                loading="lazy"
                className={c.wide ? "h-10 w-auto max-w-none object-left" : "h-8 w-8 object-contain"}
              />
            </span>
            <span className={cn("text-[length:var(--text-small)] leading-snug", muted)}>
              {c.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingLegal({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "mt-14 flex flex-col gap-3 border-t pt-8 text-[length:var(--text-small)] sm:flex-row sm:items-center sm:justify-between",
        dark
          ? "border-background/15 text-background/70"
          : "border-[color-mix(in_oklch,var(--foreground)_12%,transparent)] text-copy-muted",
      )}
    >
      <div>© {new Date().getFullYear()} Amna Imran. All rights reserved.</div>
      <div className={cn("eyebrow", dark ? "text-gold" : "text-foreground")}>
        Strategy · Coaching · Advancement
      </div>
    </div>
  );
}

function ClosingFooterLight({ background }: { background: string }) {
  return (
    <footer style={{ background }}>
      <Container className="py-16 md:py-20">
        <Reveal variant="fade-up" duration="slow">
          <ClosingFooterColumns />
          <ClosingLegal />
        </Reveal>
      </Container>
    </footer>
  );
}

/** Option 1 — the Figma layout as supplied, with the cushion cropped out of the photo. */
function ClosingFigma() {
  return (
    <>
      <section style={{ background: CLOSING_SURFACE.founder }}>
        <Container>
          <div className="grid grid-cols-1 items-end gap-10 pt-14 md:grid-cols-12 md:gap-x-12 md:pt-20">
            <FounderLeaningPortrait className="order-last mx-auto w-full max-w-[24rem] md:order-first md:col-span-5 md:mx-0 md:max-w-none lg:col-span-4 lg:col-start-2" />
            <div className="md:col-span-7 md:self-center lg:col-span-6">
              <Reveal variant="fade-up">
                <h2 className="type-display font-serif font-light text-gold-warm">Amna Imran.</h2>
                <p className="mt-6 max-w-xl text-copy">
                  Gender-informed leadership strategist helping high-potential women progress
                  without burnout or compromise.
                </p>
                <Link
                  to="/about"
                  className="link-underline mt-8 font-sans text-[length:var(--text-small)] uppercase tracking-[0.16em]"
                  onClick={() => track("founder_story_opened", { section: "founder_statement" })}
                >
                  Read the Founder Story <span aria-hidden className="cta-arrow">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-foreground text-background">
        <Container className="flex flex-col gap-10 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between">
          <Reveal variant="fade-up">
            <h2 className="type-display font-light text-background">
              Ready to move forward
              <br />
              <span className="text-gold-warm">strategically?</span>
            </h2>
          </Reveal>
          <Reveal delay={100} variant="fade-up">
            <ClosingCtaButtons />
          </Reveal>
        </Container>
      </section>

      <ClosingFooterLight background={CLOSING_SURFACE.footer} />
    </>
  );
}

/**
 * Option 2 — she leans on the dark band itself, and the call to action and the
 * footer share that one dark surface, so the close reads as a single piece.
 */
function ClosingLeanOnBand() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: CLOSING_SURFACE.founder }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full border border-[color-mix(in_oklch,var(--gold)_18%,transparent)]"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 items-end gap-10 pt-16 md:grid-cols-12 md:gap-x-10 md:pt-24">
            <div className="pb-4 md:col-span-6 md:self-center md:pb-16">
              <Reveal variant="fade-up">
                <h2 className="type-display font-light">
                  Amna
                  <br />
                  <em className="type-display-accent not-italic text-gold-warm">Imran.</em>
                </h2>
              </Reveal>
              <Reveal delay={80} variant="fade-up">
                <blockquote className="mt-7 max-w-md border-l-2 border-[color-mix(in_oklch,var(--gold)_45%,transparent)] pl-7">
                  <p className="font-serif font-light text-[length:var(--text-lead)] leading-[1.45] text-foreground">
                    Gender-informed leadership strategist helping high-potential women progress
                    without burnout or compromise.
                  </p>
                </blockquote>
              </Reveal>
              <Reveal delay={140} variant="fade-up" duration="fast">
                <Link
                  to="/about"
                  className="cta-secondary mt-9"
                  onClick={() => track("founder_story_opened", { section: "founder_statement" })}
                >
                  Read the Founder Story <span aria-hidden className="cta-arrow">→</span>
                </Link>
              </Reveal>
            </div>
            <FounderLeaningPortrait className="mx-auto w-full max-w-[26rem] md:col-span-6 md:mx-0 md:max-w-[34rem] md:justify-self-end" />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-foreground text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 85% 0%, color-mix(in oklch, var(--gold) 16%, transparent), transparent 60%)",
          }}
        />
        <Container className="relative pt-16 md:pt-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <Reveal variant="fade-up">
              <h2 className="type-display font-light text-background">
                Ready to move forward
                <br />
                <em className="type-display-accent not-italic text-gold-warm">strategically?</em>
              </h2>
            </Reveal>
            <Reveal delay={100} variant="fade-up">
              <ClosingCtaButtons />
            </Reveal>
          </div>

          <div className="mt-16 flex items-center gap-4 md:mt-20" aria-hidden>
            <span className="h-px flex-1 bg-background/15" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold)]" />
            <span className="h-px flex-1 bg-background/15" />
          </div>

          <footer className="py-14 md:py-16">
            <Reveal variant="fade-up" duration="slow">
              <ClosingFooterColumns dark />
              <ClosingLegal dark />
            </Reveal>
          </footer>
        </Container>
      </section>
    </>
  );
}

/**
 * Option 3 — one warm canvas from the founder statement to the footer. She leans
 * on a dark call-to-action card set into that canvas instead of a full-width band.
 */
function ClosingLeanOnCard() {
  return (
    <section className="relative overflow-hidden" style={{ background: CLOSING_SURFACE.footer }}>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-[30rem] w-[30rem] rounded-full border border-[color-mix(in_oklch,var(--gold)_16%,transparent)]"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-end gap-10 pt-16 md:grid-cols-12 md:gap-x-12 md:pt-24">
          <FounderLeaningPortrait className="order-last mx-auto w-full max-w-[24rem] md:order-first md:col-span-5 md:mx-0 md:max-w-none lg:col-span-4 lg:col-start-2" />
          <div className="md:col-span-7 md:self-center md:pb-16 lg:col-span-6">
            <Reveal variant="fade-up">
              <p className="eyebrow text-gold-ink mb-5">Amna Imran</p>
              <h2 className="type-h1 max-w-xl font-serif font-light text-foreground">
                Gender-informed leadership strategist helping high-potential women progress
                without{" "}
                <em className="type-display-accent not-italic text-gold-warm">burnout or compromise.</em>
              </h2>
            </Reveal>
            <Reveal delay={120} variant="fade-up" duration="fast">
              <Link
                to="/about"
                className="link-underline mt-9"
                onClick={() => track("founder_story_opened", { section: "founder_statement" })}
              >
                Read the Founder Story <span aria-hidden className="cta-arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="relative overflow-hidden border-l-4 border-l-[var(--gold)] bg-foreground px-8 py-12 text-background shadow-[0_30px_80px_color-mix(in_oklch,var(--charcoal)_22%,transparent)] md:px-14 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-24 h-[26rem] w-[26rem] rounded-full border border-[color-mix(in_oklch,var(--gold)_16%,transparent)]"
          />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <Reveal variant="fade-up">
              <h2 className="type-display font-light text-background">
                Ready to move forward
                <br />
                <em className="type-display-accent not-italic text-gold-warm">strategically?</em>
              </h2>
            </Reveal>
            <Reveal delay={100} variant="fade-up">
              <ClosingCtaButtons />
            </Reveal>
          </div>
        </div>

        <footer className="py-16 md:py-20">
          <Reveal variant="fade-up" duration="slow">
            <ClosingFooterColumns />
            <ClosingLegal />
          </Reveal>
        </footer>
      </Container>
    </section>
  );
}
