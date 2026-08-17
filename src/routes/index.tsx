import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Container,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroCutout from "@/assets/amna-support.png";
import approachPortrait from "@/assets/amna-approach.png";
import programmePortrait from "@/assets/amna-full-portrait.png";
import founderPortrait from "@/assets/amna-about-realization.png";
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

/* DRAFT COPY — pathway qualifiers, written to client brief, awaiting sign-off. */
const INDIVIDUAL_QUALIFIERS = [
  "You are delivering at a high level, but progression has slowed or stalled.",
  "You keep being told you are nearly ready, without being told what is missing.",
  "You are returning from parental leave, or planning to, and want to protect your trajectory.",
];

/* DRAFT COPY — pathway qualifiers, written to client brief, awaiting sign-off. */
const ORG_QUALIFIERS = [
  "Your hiring is close to balanced, but your senior leadership is not.",
  "You are losing high-potential women at the manager-to-director step.",
  "You have the policies in place and want the informal dynamics to match them.",
];

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
      <HeroIntro />
      <CredentialsStrip />
      <HighPerformanceSection />
      <InternalNarrativesSection />
      <ProgressNarrativeSection />
      <MotherhoodSection />
      <StrategicWayForwardSection />
      <SectionSeam from="blush" into="cream" intensity="default" />
      <HowISupportSection />
      <SectionSeam from="cream" into="blush" intensity="soft" />
      <WhyDifferentSection />
      <SectionSeam from="blush" into="warm" intensity="soft" />
      <TwoPathwaysSection />
      <SectionSeam from="warm" into="blush" intensity="default" />
      <FounderSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO — Marie-style banner ---------------- */

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        height: "100svh",
        minHeight: "min(100svh, 560px)",
        maxHeight: "920px",
        background:
          "radial-gradient(ellipse 90% 75% at 50% 40%, color-mix(in oklch, var(--blush) 35%, white) 0%, color-mix(in oklch, var(--blush) 88%, white) 55%, var(--blush) 100%)",
      }}
    >
      {/* Soft center wash — same quiet field as the Marie reference */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-enter-soft"
        style={{
          animationDelay: "0ms",
          background:
            "radial-gradient(ellipse 45% 55% at 50% 48%, color-mix(in oklch, white 45%, transparent) 0%, transparent 70%)",
        }}
      />

      <h1 className="pointer-events-none absolute inset-0 select-none" aria-label="Amna Imran">
        {/* AMNA — outer A's in front of portrait; M & N behind it */}
        <span
          className="hero-enter absolute inset-x-0 top-[max(2.5rem,5vh)] flex justify-center font-serif font-light uppercase leading-none text-white"
          style={{
            fontSize: "clamp(3.25rem, 18vw, 16rem)",
            letterSpacing: "-0.045em",
            animationDelay: "120ms",
          }}
          aria-hidden
        >
          <span className="relative z-[3]">A</span>
          <span className="relative z-[1]">m</span>
          <span className="relative z-[1]">n</span>
          <span className="relative z-[3]">a</span>
        </span>

        {/*
          IMRAN — I/M/A/N behind the portrait; R alone in front.
          R is a separate layer (not inside a transformed parent) so z-index wins.
        */}
        <span
          className="hero-enter absolute inset-x-0 top-[52%] z-[1] flex justify-center font-serif font-light uppercase leading-none text-white w-full"
          style={{
            fontSize: "clamp(2.6rem, 15vw, 14rem)",
            letterSpacing: "clamp(0.04em, 2vw, 0.12em)",
            paddingInline: "2vw",
            animationDelay: "380ms",
          }}
          aria-hidden
        >
          <span>I</span>
          <span>m</span>
          <span className="opacity-0" aria-hidden>
            r
          </span>
          <span>a</span>
          <span>n</span>
        </span>
        <span
          className="hero-enter absolute inset-x-0 top-[52%] z-[3] flex justify-center font-serif font-light uppercase leading-none text-white w-full pointer-events-none"
          style={{
            fontSize: "clamp(2.6rem, 15vw, 14rem)",
            letterSpacing: "clamp(0.04em, 2vw, 0.12em)",
            paddingInline: "2vw",
            animationDelay: "480ms",
          }}
          aria-hidden
        >
          <span className="opacity-0">I</span>
          <span className="opacity-0">m</span>
          <span>r</span>
          <span className="opacity-0">a</span>
          <span className="opacity-0">n</span>
        </span>
      </h1>

      {/* Ambient glow behind Amna — lifts her off the flat blush field so the
          cut-out reads as lit rather than pasted on. */}
      <div
        aria-hidden
        className="hero-enter-soft pointer-events-none absolute inset-x-0 bottom-0 top-[12%] z-[1]"
        style={{
          animationDelay: "260ms",
          background:
            "radial-gradient(ellipse 26% 60% at 50% 72%, color-mix(in oklch, white 62%, transparent) 0%, color-mix(in oklch, white 22%, transparent) 45%, transparent 72%)",
        }}
      />

      {/* Contact shadow — sits under the portrait (same layer, earlier in the
          DOM) so she is planted on the ground rather than hovering. */}
      <div
        aria-hidden
        className="hero-enter-soft pointer-events-none absolute bottom-[6%] left-1/2 z-[2] h-10 w-[min(34rem,60vw)] -translate-x-1/2 rounded-[50%] bg-black/20 blur-2xl md:h-14"
        style={{ animationDelay: "300ms" }}
      />

      {/* Standing portrait — full banner height */}
      <div
        className="hero-enter absolute inset-0 z-[2] flex items-end justify-center pointer-events-none overflow-hidden"
        style={{ animationDelay: "220ms" }}
      >
        <img
          src={heroCutout}
          alt="Amna Imran — Executive Coach"
          draggable={false}
          className="select-none object-contain object-bottom max-w-[min(100vw,42rem)] sm:max-w-none [mask-image:linear-gradient(to_bottom,black_84%,transparent_99%)]"
          style={{
            height: "100%",
            width: "auto",
            transform: "scale(1.06)",
            transformOrigin: "bottom center",
            filter: "drop-shadow(0 16px 40px color-mix(in oklch, var(--charcoal) 12%, transparent))",
          }}
        />
      </div>

      {/* Curve into HeroIntro — the next section's cream sweeps up into the
          hero, which both softens the hard rectangular edge and finishes the
          masking of her lower body. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-12 overflow-hidden md:h-20"
      >
        <div className="absolute -bottom-6 left-1/2 h-[calc(100%+1.5rem)] w-[200%] -translate-x-1/2 rounded-t-[50%] bg-[var(--warm-cream)]" />
      </div>

      <div
        aria-hidden
        className="hero-enter-soft pointer-events-none absolute inset-x-0 z-[4] flex justify-center bottom-[max(5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))] md:bottom-[max(7rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))]"
        style={{ animationDelay: "900ms" }}
      >
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/55 pt-2">
          <span className="hero-scroll-dot block h-1.5 w-1.5 rounded-full bg-white/90" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- HERO INTRO — headline + CTAs below banner ---------------- */

function HeroIntro() {
  return (
    <section className="relative bg-[var(--warm-cream)]">
      {/* Hairline dropping out of the hero's curve, so this block reads as a
          continuation of the hero rather than a detached slab. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-[color-mix(in_oklch,var(--gold)_55%,transparent)] to-transparent md:h-14"
      />
      <Container className="pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-up" duration="slow" delay={60}>
            <h2 className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-foreground">
              <span
                className="block"
                style={{ fontSize: "clamp(1.35rem, 2vw, 1.85rem)", marginBottom: "0.25em" }}
              >
                Strategic Leadership Coaching for
              </span>
              <em
                className="type-display-accent not-italic font-light italic text-gold-warm"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", lineHeight: 0.95 }}
              >
                High-Potential
              </em>{" "}
              <span
                className="font-serif font-light"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", lineHeight: 0.95 }}
              >
                Women
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-in" delay={140}>
            <p className="mx-auto mt-7 max-w-2xl type-lead font-light text-copy">
              I help ambitious women navigate bias, strengthen executive presence, and
              accelerate their careers using evidence-based gender strategy, strengths
              science, and systemic insights — not just anecdotal advice.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={220} duration="fast">
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-x-6">
              <Link to="/contact" className="cta-primary">
                Book a Strategic Clarity Call <span aria-hidden className="cta-arrow">→</span>
              </Link>
              <Link to="/organizations" className="cta-secondary">
                For Corporate &amp; HR Enquiries <span aria-hidden className="cta-arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- CREDENTIALS STRIP ---------------- */

function CredentialsStrip() {
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
    <section
      className="relative z-30"
      style={{
        background: "var(--warm-cream)",
        padding: "clamp(2rem, 4vw, 3rem) 0",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
        {/* Section label */}
        <Reveal variant="fade-in" duration="slow">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="eyebrow" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)", letterSpacing: "0.22em" }}>
              Credentials
            </span>
            <span className="h-px flex-1 max-w-[4rem]" style={{ background: "color-mix(in oklch, var(--gold) 22%, transparent)" }} />
          </div>
        </Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
          {items.map((c, i) => (
            <Reveal key={c.label} delay={i * 60} variant="fade-in" duration="fast" as="li">
              <div
                className={`flex flex-col items-center text-center gap-4 px-4 md:px-8 ${
                  i > 0 ? "md:border-l" : ""
                }`}
                style={i > 0 ? { borderColor: "color-mix(in oklch, var(--gold) 8%, transparent)" } : {}}
              >
                <div className="h-24 md:h-28 flex items-center justify-center w-full">
                  <img
                    src={c.logo}
                    alt={c.label}
                    loading="lazy"
                    className="object-contain h-16 md:h-[4.5rem] w-auto max-w-[240px]"
                    style={{ transform: `scale(${c.scale})`, transformOrigin: "center" }}
                  />
                </div>
                <span className="eyebrow leading-snug max-w-[14rem] text-[length:var(--text-caption)] text-copy">
                  {c.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
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
          <p className="eyebrow text-gold mb-6">The performance paradox</p>
          <h2 className="max-w-5xl font-serif font-light text-[clamp(2.75rem,6.5vw,6.25rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
            High Performance Alone,
            <br />
            <span className="text-foreground/90">Does Not </span>
            <em className="type-display-accent not-italic text-gold-warm">Guarantee</em>
            <br />
            Progression
          </h2>
        </Reveal>

        {/* Split: numbered formula vs narrative — intentional asymmetry. The
            formula reveals step by step, then the conclusion lands after it. */}
        <div className="relative mt-14 md:mt-20 grid gap-14 lg:grid-cols-12 lg:gap-10 lg:items-start">
          {/* Connector — carries the eye from the formula across to its outcome. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[41.666%] top-16 bottom-16 hidden w-px bg-gradient-to-b from-transparent via-[color-mix(in_oklch,var(--gold)_45%,transparent)] to-transparent lg:block"
          />

          {/* Formula — large numerals, hairline spine */}
          <div className="lg:col-span-5">
            <div className="relative">
              <Reveal variant="fade-in">
                <p className="eyebrow text-gold mb-8">The traditional formula</p>
              </Reveal>
              <div
                aria-hidden
                className="absolute left-[1.15rem] top-14 bottom-2 w-px bg-gradient-to-b from-[var(--gold)] via-[color-mix(in_oklch,var(--gold)_40%,transparent)] to-transparent"
              />
              <ol className="relative space-y-0">
                {TRADITIONAL.map((t, i) => (
                  <Reveal
                    key={t}
                    as="li"
                    variant="fade-up"
                    duration="fast"
                    delay={i * 80}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--warm-cream)] font-serif italic text-[1.05rem] text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1.5 font-serif text-[clamp(1.3rem,1.8vw,1.65rem)] leading-snug text-foreground">
                      {t}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* Stalls — oversized word + body, revealed after the formula completes */}
          <div className="lg:col-span-7 lg:pl-8 xl:pl-14">
            <Reveal variant="fade-up" delay={TRADITIONAL.length * 80}>
              <h3 className="font-serif text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.025em] text-foreground">
                Yet progression often
                <span className="mt-1 block type-display-accent text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.85] text-gold-warm">
                  stalls
                </span>
              </h3>
            </Reveal>
            <Reveal variant="fade-in" delay={TRADITIONAL.length * 80 + 120}>
              <div className="mt-8 max-w-xl space-y-5 type-body text-copy md:text-[1.08em]">
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
      </Container>
    </Section>
  );
}

/* ---------------- COMMON INTERNAL NARRATIVES ---------------- */

function InternalNarrativesSection() {
  const quotes = INTERNAL_NARRATIVES;

  return (
    <Section
      as="section"
      surface="cream"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
      style={{ background: "color-mix(in oklch, var(--cream) 82%, var(--background))" }}
    >
      {/* Quiet depth behind the narratives — keeps the section from reading as a
          flat panel without adding anything the eye has to process. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 78% 18%, color-mix(in oklch, var(--gold-subtle) 34%, transparent), transparent 70%), radial-gradient(ellipse 45% 40% at 12% 88%, color-mix(in oklch, var(--blush-subtle) 45%, transparent), transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-end">
          <Reveal variant="fade-in" duration="slow" className="lg:col-span-5">
            <p className="eyebrow text-gold mb-6">The quieter story</p>
            <h2 className="font-serif font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.92] tracking-[-0.035em] text-foreground">
              Common internal{" "}
              <em className="type-display-accent not-italic font-light italic text-[clamp(2.75rem,5.5vw,4.75rem)] leading-[0.85] text-gold-warm">
                narratives
              </em>
            </h2>
            <p className="mt-6 max-w-sm type-body text-copy">
              When performance does not convert into progression, the mind often turns the gap
              inward.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-10">
              {quotes.map((q, i) => (
                <Reveal key={q} delay={i * 120} variant="fade-up" duration="fast">
                  <li
                    className={`group relative py-7 border-b border-[color-mix(in_oklch,var(--gold)_30%,transparent)] last:border-b-0 sm:border-b-0 ${
                      i < 2 ? "sm:border-b sm:border-[color-mix(in_oklch,var(--gold)_30%,transparent)]" : ""
                    } ${
                      i % 2 === 0
                        ? "sm:pr-6 sm:border-r sm:border-[color-mix(in_oklch,var(--gold)_30%,transparent)]"
                        : "sm:pl-6"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="mb-4 block font-serif italic leading-none text-[1.5rem] text-gold-warm transition-colors duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] group-hover:text-gold-deep md:text-[1.85rem]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <blockquote>
                      <p className="font-serif italic text-[clamp(1.4rem,2.3vw,1.85rem)] leading-[1.3] tracking-[-0.01em] text-foreground/85 transition-colors duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] group-hover:text-foreground">
                        <span aria-hidden className="mr-1 text-gold-warm/70 not-italic">
                          “
                        </span>
                        {q}
                      </p>
                    </blockquote>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <Reveal variant="fade-in" duration="slow" delay={100} className="mt-12 md:mt-14">
          <SectionQuote
            sub={
              <>
                — but a lack of access to the unwritten rules of{" "}
                <em className="type-display-accent not-italic text-gold-warm text-[1.15em]">
                  advancement
                </em>
                .
              </>
            }
          >
            The challenge is not a lack of{" "}
            <em className="italic text-gold-warm">ambition or ability</em>
          </SectionQuote>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- PROGRESS NARRATIVE ---------------- */

function ProgressNarrativeSection() {
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
        <Reveal variant="fade-in" duration="slow">
          <p className="eyebrow text-gold mb-6">Beneath the surface</p>
          <h2 className="max-w-5xl font-serif font-light text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
            The Progress Narrative
            <br />
            <span className="text-foreground/85">&amp; the </span>
            <em className="type-display-accent not-italic text-gold-warm">Hidden Reality</em>
          </h2>
        </Reveal>

        <Reveal delay={80} variant="fade-in">
          <div className="mt-10 max-w-2xl space-y-5 type-body text-copy md:mt-12 md:text-[1.05em]">
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

        {/* Transition moment — turns the intro's claim into the question the
            eight gaps then answer, so the list is not encountered cold. */}
        <Reveal variant="fade-in" duration="slow" className="mt-16 md:mt-24">
          <div className="border-y border-[color-mix(in_oklch,var(--gold)_28%,transparent)] py-10 text-center md:py-14">
            <p className="font-serif font-light italic text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-gold-warm">
              So why does this persist?
            </p>
            <p className="mx-auto mt-5 max-w-xl type-body text-copy">
              Because almost none of it is written down. These are the eight patterns research
              keeps finding — and the reason capable women stall without ever being told why.
            </p>
          </div>
        </Reveal>

        {/* Gaps — same cream surface; hierarchy via type only */}
        <div className="relative mt-14 md:mt-20">
          <Reveal variant="fade-in">
            <div className="mb-10 md:mb-14 max-w-2xl">
              <p className="eyebrow text-gold mb-3">What research keeps finding</p>
              <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] text-foreground">
                Eight persistent{" "}
                <em className="type-display-accent not-italic text-gold-warm">gaps</em>
              </h3>
              <p className="mt-4 text-[length:var(--text-small)] text-copy-muted">
                Select a gap to see how it operates in practice.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fade-up">
            <SelectablePanel
              variant="numbered"
              label="Eight persistent gaps"
              listClassName="lg:col-span-7"
              panelClassName="lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
              items={GAPS.map((g) => ({
                label: g.t,
                meta: "How it operates",
                detail: <p>{g.d}</p>,
              }))}
            />
          </Reveal>

          <Reveal variant="fade-in" duration="slow" delay={100} className="mt-16 md:mt-20">
            <SectionQuote
              sub="— they are embedded in everyday organizational processes: performance reviews, leadership selection, project allocation, and informal influence channels."
            >
              These dynamics are rarely{" "}
              <em className="italic text-gold-warm">explicit or intentional</em>
            </SectionQuote>
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
              className="selectable-item inline-flex w-fit max-w-full items-center gap-3 rounded-full border border-[color-mix(in_oklch,var(--gold)_22%,transparent)] bg-[color-mix(in_oklch,var(--background)_70%,transparent)] px-5 py-3 text-[length:var(--text-body)] leading-snug aria-selected:border-[var(--gold-deep)] aria-selected:bg-[color-mix(in_oklch,var(--gold-subtle)_75%,var(--background))]"
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
        <p className="type-body text-copy">{current.d}</p>
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
        <Reveal variant="fade-in" duration="slow">
          <p className="eyebrow text-gold mb-6">Life transitions</p>
          <h2 className="max-w-5xl font-serif font-light text-[clamp(2.75rem,6.5vw,6.25rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
            The{" "}
            <em className="type-display-accent not-italic font-light italic text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.85] text-gold-warm">
              Motherhood
            </em>{" "}
            <span className="block sm:inline">Penalty</span>
            <br />
            <span className="text-foreground/90">and Life Transitions</span>
          </h2>
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-5 type-body text-copy md:mt-12 md:ml-auto md:max-w-2xl md:border-l md:border-[color-mix(in_oklch,var(--gold)_35%,transparent)] md:pl-8 md:text-[1.05em]">
          <Reveal variant="fade-in">
            <p>
              Research across regions consistently shows that career interruptions associated
              with caregiving — particularly motherhood — can significantly alter advancement
              trajectories. Even when women return with equal or greater capability, they may be
              perceived as less committed, less available, or less leadership-ready.
            </p>
          </Reveal>
          <Reveal delay={100} variant="fade-in">
            <p>
              Meanwhile, men often experience neutral or even positive career effects from
              fatherhood (the fatherhood bonus).
            </p>
          </Reveal>
          <Reveal delay={160} variant="fade-in">
            <p>
              These patterns persist despite formal policies designed to support work-life balance.
            </p>
          </Reveal>
        </div>

        {/* Psychological impact — same surface */}
        <div className="relative mt-14 md:mt-20">
          <Reveal variant="fade-in">
            <div className="mb-10 md:mb-14 max-w-2xl md:mx-auto md:text-center">
              <p className="eyebrow text-gold mb-3">What it feels like</p>
              <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-foreground">
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
                <em className="not-italic font-serif italic text-[1.15em] md:text-[1.2em] text-gold-deep">
                  opaque and high-risk
                </em>
                , even the most capable women start to doubt{" "}
                <em className="not-italic font-serif italic text-[1.15em] md:text-[1.2em] text-gold-deep">
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
          <h2 className="max-w-5xl font-serif font-light text-[clamp(2.75rem,6.5vw,6.25rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
            A More Strategic Way{" "}
            <em className="type-display-accent not-italic font-light italic text-gold-warm">
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
          />
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- HOW I SUPPORT ---------------- */

/**
 * Restores the client-approved structure: heading, intro lead, the numbered
 * SUPPORT_FOCUS list, then the two programmes flanking a centre portrait.
 * Only a summary paragraph is permanent — the rest sits behind an accordion so
 * the columns stay scannable.
 */
function ProgrammeColumn({
  title,
  kicker,
  tone,
  summary,
  detailLabel,
  detail,
  ctaLabel,
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
  delay?: number;
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <Reveal
      as="article"
      variant="fade-up"
      delay={delay}
      className={cn("relative z-10 flex flex-col", className)}
    >
      <h3
        className={cn(
          "font-serif leading-[1.05] text-gold-deep",
          dark
            ? "text-[clamp(2.1rem,3.2vw,3rem)]"
            : "text-[clamp(1.7rem,2.4vw,2.35rem)]",
        )}
      >
        {title}
      </h3>
      <p className="mt-3 eyebrow text-foreground">{kicker}</p>
      <div aria-hidden className="mt-3 h-px w-16 bg-[var(--gold)]" />

      {/* The gold panel is light enough that offwhite body copy fails contrast,
          so it takes charcoal copy and leans on italics for emphasis instead. */}
      <div
        className={cn(
          "mt-6 flex-1 p-7 text-[length:var(--text-body)] leading-[1.6] md:p-8",
          dark ? "text-background" : "text-foreground",
        )}
        style={{
          background: dark
            ? "var(--foreground)"
            : "color-mix(in oklch, var(--gold) 88%, var(--foreground))",
        }}
      >
        <p className={dark ? "text-background/90" : "text-foreground/90"}>{summary}</p>

        <Accordion type="single" collapsible className="mt-5">
          <AccordionItem
            value="detail"
            className={cn("border-b-0 border-t", dark ? "border-background/20" : "border-foreground/25")}
          >
            <AccordionTrigger
              className={cn(
                "gap-4 py-4 text-[length:var(--text-small)] font-medium uppercase tracking-[0.14em] no-underline hover:no-underline",
                dark
                  ? "text-gold-warm [&>svg]:text-gold-warm"
                  : "text-foreground [&>svg]:text-foreground",
              )}
            >
              {detailLabel}
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "space-y-4 pb-5 text-[length:var(--text-body)] leading-[1.6]",
                dark ? "text-background/90" : "text-foreground/90",
              )}
            >
              {detail}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Link to="/work-with-me" className="cta-primary mt-6 self-start">
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
          <p className="eyebrow text-gold mb-6">Programs</p>
          <h2 className="max-w-5xl font-serif font-light text-[clamp(2.75rem,6.5vw,6.25rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
            How I Support{" "}
            <span className="text-foreground/90">High-Potential</span>
            <br />
            <em className="type-display-accent not-italic font-light italic text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.85] text-gold-warm">
              Women
            </em>
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
            <em className="not-italic font-normal text-gold-deep">
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
        <div className="mt-16 grid items-end gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <ProgrammeColumn
            className="lg:col-span-4"
            tone="dark"
            title={
              <>
                ELEVATE<sup className="align-super text-[0.45em]">™</sup>
              </>
            }
            kicker="Strategic Advancement Program"
            ctaLabel="Explore ELEVATE"
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

          {/* Centre portrait — grounded on an arc with a contact shadow */}
          <div className="order-first lg:order-none lg:col-span-4 lg:self-end">
            <div className="relative mx-auto flex max-w-[22rem] justify-center lg:max-w-none">
              <div
                aria-hidden
                className="absolute inset-x-2 bottom-0 top-10 rounded-t-[999px] lg:top-16"
                style={{
                  background:
                    "linear-gradient(to bottom, color-mix(in oklch, var(--gold-subtle) 70%, transparent), color-mix(in oklch, var(--gold-subtle) 20%, transparent))",
                }}
              />
              <div
                aria-hidden
                className="absolute bottom-1 left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-[50%] bg-black/20 blur-2xl lg:h-10"
              />
              <Reveal variant="scale" duration="slow" className="relative">
                <img
                  src={programmePortrait}
                  alt="Amna Imran"
                  draggable={false}
                  loading="lazy"
                  className="relative z-10 h-[340px] w-auto select-none object-contain object-bottom sm:h-[430px] lg:h-[500px] xl:h-[560px]"
                />
              </Reveal>
            </div>
          </div>

          <ProgrammeColumn
            className="lg:col-span-4 lg:mt-16"
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
            detailLabel="How it protects your trajectory"
            summary={
              <>
                Support for high-potential women through the{" "}
                <em className="italic text-foreground">
                  profound transition into working parenthood
                </em>
                .
              </>
            }
            detail={
              <>
                <p>
                  Grounded in research on the motherhood penalty and organizational dynamics, this
                  program helps protect{" "}
                  <em className="italic text-foreground">leadership trajectory</em> while navigating
                  the{" "}
                  <em className="italic text-foreground">
                    identity, visibility, and confidence shifts
                  </em>{" "}
                  that often accompany maternity leave and return-to-work.
                </p>
                <p>
                  Rather than asking women to scale back ambition or overcompensate, we focus on{" "}
                  <em className="italic text-foreground">
                    strategic positioning, stakeholder alignment, and sustainable leadership
                  </em>{" "}
                  — so motherhood becomes an integrated{" "}
                  <em className="italic text-foreground">chapter of growth</em>.
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

function WhyDifferentSection() {
  const offers = [
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

  // The "Vs" pairs become the selectable principles: label is what I do,
  // meta is the contrast it replaces, detail is the explanation.
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
      style={{ background: "color-mix(in oklch, var(--blush-subtle) 58%, var(--warm-cream))" }}
    >
      <Container className="relative">
        {/* Heading + lead, with the portrait grounded beside them */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="relative z-20 lg:col-span-6">
            <Reveal variant="fade-up">
              <h2 className="font-serif font-light text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
                Why My Approach
                <br />
                <em className="type-display-accent not-italic font-light italic text-[clamp(3rem,7vw,6.5rem)] leading-[0.85] text-gold-warm">
                  Is Different
                </em>
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

          {/* Portrait — seated on an arc panel with a contact shadow so she is
              grounded rather than floating, and masked at the base so the
              cut-out does not end on a hard edge. */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto flex max-w-[26rem] justify-center lg:max-w-none lg:justify-end">
              <div
                aria-hidden
                className="absolute inset-x-4 bottom-0 top-12 rounded-t-[999px] lg:inset-x-10 lg:top-20"
                style={{
                  background:
                    "linear-gradient(to bottom, color-mix(in oklch, var(--blush) 42%, transparent), color-mix(in oklch, var(--blush) 8%, transparent))",
                }}
              />
              <div
                aria-hidden
                className="absolute bottom-1 left-1/2 h-8 w-[62%] -translate-x-1/2 rounded-[50%] bg-black/18 blur-2xl lg:h-11"
              />
              <Reveal variant="scale" duration="slow" className="relative">
                <img
                  src={approachPortrait}
                  alt="Amna Imran"
                  draggable={false}
                  loading="lazy"
                  className="relative z-10 h-[320px] w-auto select-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] sm:h-[420px] md:h-[480px] lg:h-[560px] xl:h-[620px]"
                />
              </Reveal>
            </div>
          </div>
        </div>

        {/* 01 — the three disciplines behind the work */}
        <div className="mt-20 md:mt-24">
          <Reveal variant="fade-up">
            <p className="eyebrow text-gold">
              <span className="text-gold-deep">01</span> — What I bring
            </p>
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {offers.map((offer, i) => (
              <Reveal key={offer.title} delay={60 + i * 70} variant="fade-up">
                <div
                  className={
                    i > 0
                      ? "md:border-l md:border-[color-mix(in_oklch,var(--gold)_28%,transparent)] md:pl-8"
                      : ""
                  }
                >
                  <h3 className="font-serif text-[length:var(--text-heading-3)] leading-snug text-foreground">
                    {offer.title}
                  </h3>
                  <p className="mt-4 type-body text-copy">{offer.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 02 — the principles, one description at a time */}
        <div className="mt-20 md:mt-24">
          <Reveal variant="fade-up">
            <p className="eyebrow text-gold">
              <span className="text-gold-deep">02</span> — How I work
            </p>
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
            />
          </Reveal>

          <Reveal delay={120} variant="fade-up">
            <Link to="/work-with-me" className="cta-secondary mt-10">
              See how we would work together <span aria-hidden className="cta-arrow">→</span>
            </Link>
          </Reveal>
        </div>

        {/* 03 — where it lands */}
        <Reveal variant="fade-up" className="mt-20 md:mt-24">
          <p className="eyebrow text-gold text-center">
            <span className="text-gold-deep">03</span> — Where it lands
          </p>
          <p className="type-lead mt-6 max-w-3xl text-center mx-auto text-foreground">
            My work sits at the intersection of{" "}
            <em className="type-display-accent not-italic text-[1.8rem] md:text-[2.2rem] leading-none align-[-0.12em] text-gold-warm">
              Individual capability
            </em>{" "}
            and{" "}
            <em className="type-display-accent not-italic text-[1.8rem] md:text-[2.2rem] leading-none align-[-0.12em] text-gold-warm">
              Organizational reality.
            </em>
          </p>
        </Reveal>

        {/* Motif carried down from the intersection statement above, so the quote
            reads as a transition out of this section rather than a separate slide. */}
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

/* ---------------- TWO PATHWAYS ---------------- */

/**
 * Both pathways share one baseline, one height and one padding scale — the
 * only difference between them is surface tone. A stretched link overlay makes
 * each whole card clickable while keeping exactly one link per card.
 */
function PathwayCard({
  index,
  eyebrow,
  title,
  titleAccent,
  qualifiers,
  programmes,
  cta,
  to,
  dark = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  qualifiers: string[];
  programmes: string[];
  cta: string;
  to: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col p-8 transition-[transform,box-shadow] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] hover:-translate-y-1.5 md:p-10",
        dark
          ? "bg-foreground text-background"
          : "border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)]",
      )}
      style={{
        boxShadow: dark
          ? "0 28px 70px color-mix(in oklch, var(--charcoal) 18%, transparent)"
          : undefined,
      }}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-8 h-10 w-1 transition-[height] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] group-hover:h-16 bg-[var(--gold)]",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-6 top-4 select-none font-serif text-[clamp(4.5rem,10vw,7.5rem)] leading-none",
          dark ? "text-background/10" : "text-[color-mix(in_oklch,var(--gold)_12%,transparent)]",
        )}
      >
        {index}
      </span>

      <p className={cn("eyebrow relative z-10", dark ? "text-gold" : "text-copy-muted")}>
        {eyebrow}
      </p>
      <h3
        className={cn(
          "relative z-10 mt-5 max-w-md font-serif font-light text-[clamp(1.9rem,3vw,2.75rem)] leading-[1.05] tracking-[-0.02em]",
          dark ? "text-background" : "text-foreground",
        )}
      >
        {title}{" "}
        <em className="type-display-accent not-italic italic text-gold-warm">{titleAccent}</em>
      </h3>

      <div className="relative z-10 my-7 h-px w-16 bg-[var(--gold)]" />

      <p
        className={cn(
          "relative z-10 text-[length:var(--text-small)] uppercase tracking-[0.14em]",
          dark ? "text-background/70" : "text-copy-muted",
        )}
      >
        This is for you if…
      </p>
      <ul className="relative z-10 mt-4 space-y-3">
        {qualifiers.map((q) => (
          <li
            key={q}
            className={cn(
              "flex gap-3 text-[length:var(--text-body)] leading-[1.55]",
              dark ? "text-background/90" : "text-copy",
            )}
          >
            <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-[var(--gold)]" />
            {q}
          </li>
        ))}
      </ul>

      <p
        className={cn(
          "relative z-10 mt-8 text-[length:var(--text-small)] uppercase tracking-[0.14em]",
          dark ? "text-background/70" : "text-copy-muted",
        )}
      >
        What that looks like
      </p>
      <ul className="relative z-10 mt-3 flex-1 space-y-0">
        {programmes.map((item) => (
          <li
            key={item}
            className={cn(
              "border-t py-4 font-serif text-[clamp(1.1rem,1.25vw,1.35rem)] leading-snug",
              dark
                ? "border-background/20 text-background/90"
                : "border-[color-mix(in_oklch,var(--gold)_18%,transparent)] text-copy",
            )}
          >
            {item}
          </li>
        ))}
      </ul>

      <Link
        to={to}
        className={cn(
          "relative z-10 mt-9 self-start",
          dark ? "cta-secondary-invert" : "cta-primary",
        )}
      >
        {cta} <span aria-hidden className="cta-arrow">→</span>
      </Link>
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
          <p className="eyebrow text-gold mb-6">Two pathways</p>
          <h2 className="max-w-4xl font-serif font-light text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
            Choose the pathway that
            <br />
            <em className="type-display-accent not-italic font-light italic text-[clamp(3rem,6.5vw,5.75rem)] leading-[0.85] text-gold-warm">
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
                index="01"
                eyebrow="For Individuals"
                title="Accelerate Your Leadership"
                titleAccent="Trajectory"
                qualifiers={INDIVIDUAL_QUALIFIERS}
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
                index="02"
                eyebrow="For Organizations"
                title="Develop & Retain High-Potential"
                titleAccent="Women"
                qualifiers={ORG_QUALIFIERS}
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

        <Reveal variant="fade-in" duration="slow" className="mt-14 md:mt-20">
          <p className="mx-auto max-w-2xl text-center font-serif font-light text-[clamp(1.5rem,2.8vw,2.35rem)] leading-[1.2] tracking-[-0.02em] text-foreground">
            Two programmes, one{" "}
            <em className="type-display-accent not-italic italic text-gold-warm">
              strategic foundation.
            </em>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- FOUNDER ---------------- */

function FounderSection() {
  return (
    <Section
      as="section"
      surface="blush"
      pad="none"
      className="relative z-10 overflow-hidden py-0"
      style={{ background: "color-mix(in oklch, var(--blush-subtle) 52%, var(--warm-cream))" }}
    >
      <Container className="relative !px-6 md:!px-10 py-0">
        <div className="grid min-h-0 grid-cols-1 items-center gap-4 md:grid-cols-12 md:gap-x-3 lg:gap-x-4">
          {/* Copy — vertically centered with portrait. Explicitly labelled as a
              founder statement so it can never be mistaken for a testimonial. */}
          <div className="relative z-20 py-10 md:col-span-5 md:py-16 lg:col-span-5 md:pr-0 text-center md:text-left">
            <Reveal variant="fade-up">
              <p className="eyebrow text-gold mb-4">A statement from the founder</p>
              <h2 className="font-serif font-semibold text-[clamp(2.75rem,5.8vw,5.25rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
                Amna
                <br />
                <em className="type-display-accent not-italic font-light italic text-[clamp(3.15rem,6.8vw,5.75rem)] leading-[0.85] text-gold-warm">
                  Imran.
                </em>
              </h2>
            </Reveal>

            {/* Statement block — gold rule and display type mark this as her own
                words rather than body copy. */}
            <Reveal delay={80} variant="fade-up">
              <blockquote className="mx-auto mt-7 max-w-sm border-[color-mix(in_oklch,var(--gold)_45%,transparent)] md:mx-0 md:max-w-md md:border-l-2 md:pl-8">
                <p className="font-serif font-light text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.35] tracking-[-0.01em] text-foreground">
                  Gender-informed leadership strategist helping high-potential women progress
                  without{" "}
                  <em className="type-display-accent not-italic italic text-gold-warm">
                    burnout or compromise.
                  </em>
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={140} variant="fade-up" duration="fast">
              <Link to="/about" className="link-underline mt-7">
                Read the Founder Story <span aria-hidden className="cta-arrow">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Portrait — seated on an arc with a contact shadow and a masked base,
              so she is part of the section rather than a PNG cropped by its edge. */}
          <div className="relative z-10 h-[340px] sm:h-[440px] md:col-span-7 md:col-start-6 md:h-[520px] lg:h-[580px]">
            <div
              aria-hidden
              className="absolute inset-x-8 bottom-0 top-16 rounded-t-[999px] md:inset-x-16 md:top-24"
              style={{
                background:
                  "linear-gradient(to bottom, color-mix(in oklch, var(--blush) 38%, transparent), color-mix(in oklch, var(--blush) 6%, transparent))",
              }}
            />
            <div
              aria-hidden
              className="absolute bottom-2 left-1/2 h-9 w-[60%] -translate-x-1/2 rounded-[50%] bg-black/18 blur-2xl md:h-12"
            />
            <Reveal variant="scale" duration="slow" className="h-full">
              <div className="relative h-full overflow-hidden">
                <img
                  src={founderPortrait}
                  alt="Amna Imran — Founder"
                  className="absolute bottom-0 left-1/2 h-[122%] w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)] md:left-0 md:translate-x-0"
                  draggable={false}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <Section
      as="section"
      surface="default"
      pad="none"
      className="relative overflow-hidden bg-foreground text-background"
    >
      {/* Soft transition in from the blush founder section: the pink is carried a
          short way into the dark surface instead of stopping at a hard line. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 md:h-56"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklch, var(--blush-subtle) 42%, var(--foreground)), transparent)",
        }}
      />

      <ParallaxLayer speed={0.08} className="pointer-events-none absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 120%, color-mix(in oklch, var(--gold) 22%, transparent), transparent 55%)",
          }}
        />
      </ParallaxLayer>

      {/* Texture — concentric gold arcs, very low contrast, so the dark panel has
          some material quality without competing with the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/4 left-1/2 h-[min(46rem,90vw)] w-[min(46rem,90vw)] -translate-x-1/2"
      >
        <ParallaxLayer speed={0.12} className="h-full w-full">
          <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklch,var(--gold)_16%,transparent)]" />
          <div className="absolute inset-[12%] rounded-full border border-[color-mix(in_oklch,var(--gold)_11%,transparent)]" />
          <div className="absolute inset-[26%] rounded-full border border-[color-mix(in_oklch,var(--gold)_8%,transparent)]" />
        </ParallaxLayer>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(40%,18rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-70"
      />

      <Container className="relative section-pad-major">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal variant="fade-up">
            <p className="eyebrow text-gold mb-6">Begin here</p>
            <h2 className="font-serif font-light text-[clamp(2.6rem,6vw,5rem)] leading-[0.92] tracking-[-0.035em] text-background">
              Ready to move forward
              <br />
              <em className="type-display-accent not-italic font-light italic text-[clamp(3rem,7vw,5.75rem)] leading-[0.85] text-gold-warm">
                strategically?
              </em>
            </h2>
            <p className="mx-auto mt-7 max-w-xl type-lead font-light text-background/80">
              Whether you are advancing your own leadership or building pathways for women in your
              organization — the work starts with a clear conversation.
            </p>
          </Reveal>

          <Reveal delay={100} variant="fade-up" className="mt-10 w-full max-w-2xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-4">
              <Link to="/contact" className="cta-primary-invert flex-1">
                Book a Strategic Clarity Call{" "}
                <span aria-hidden className="cta-arrow">→</span>
              </Link>
              <Link to="/organizations" className="cta-secondary-invert flex-1">
                Discuss an Organisational Engagement{" "}
                <span aria-hidden className="cta-arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
