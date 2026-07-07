import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container, EditorialCard, Hairline, Reveal, Section } from "@/components/site/primitives";
import { Frown, HelpCircle, Scale, Unplug, History, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroCutout from "@/assets/amna-hero.png";
import supportPortrait from "@/assets/amna-support.png";
import approachPortrait from "@/assets/amna-approach.png";
import founderPortrait from "@/assets/amna-founder.png";
import motherhoodTitleBackground from "@/assets/dark brown background.png";
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

const PSYCH_IMPACT = [
  { t: "Inadequate despite results", Icon: Frown },
  { t: "Unsure how to advocate", Icon: HelpCircle },
  { t: "Torn between self and expectations", Icon: Scale },
  { t: "Exhausted by competing demands", Icon: Unplug },
  { t: "Blamed for stalled progress", Icon: History },
];

const FORWARD = [
  { t: "Strategic visibility to the right decision-makers" },
  { t: "Influential relationships and active sponsorship" },
  { t: "Leadership presence in high-stakes settings" },
  { t: "Positioning for future roles, not just current responsibilities" },
  { t: "Navigating bias without compromising authenticity" },
  { t: "Sustaining ambition without burnout" },
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

const PILLARS = [
  {
    t: "Leadership Coaching",
    d: "ICF credentialed executive coaching for leaders navigating high-stakes, high-pressure environments.",
  },
  {
    t: "DE&I Consultancy",
    d: "Gender strategy and inclusive leadership grounded in INSEAD-trained practice.",
  },
  {
    t: "CliftonStrengths Assessment",
    d: "Gallup CliftonStrengths assessment to compound what already makes you exceptional.",
  },
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
    d: "Using strengths methodology developed by Gallup, we build on what already drives your effectiveness rather than trying to 'fix' perceived weaknesses. This approach produces sustainable confidence grounded in competence. (Gallup statistic to be added once confirmed.)",
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
      <CredentialsStrip />
      <HighPerformanceSection />
      <ProgressNarrativeSection />
      <MotherhoodSection />
      <WayForwardSection />
      <HowISupportSection />
      <WhyDifferentSection />
      <TwoPathwaysSection />
      <TestimonialsSection />
      <FounderSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--background)]"
      style={{ minHeight: "clamp(600px, 92vh, 980px)" }}
    >
      {/* ── Full-bleed right panel (warm cream) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[55%] hidden lg:block"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklch, var(--cream) 96%, var(--gold)) 0%, color-mix(in oklch, var(--cream) 88%, var(--gold-subtle)) 100%)",
        }}
      />

      {/* ── Decorative hairlines ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {/* Vertical gold thread left of copy */}
        <div
          className="absolute left-[42%] top-[15%] bottom-[12%] w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklch, var(--gold) 35%, transparent) 30%, color-mix(in oklch, var(--gold) 35%, transparent) 70%, transparent)",
          }}
        />
        {/* Horizontal accent at bottom of copy column */}
        <div
          className="absolute left-[6%] w-[32%] h-px bottom-[14%]"
          style={{
            background:
              "linear-gradient(to right, color-mix(in oklch, var(--gold) 50%, transparent), transparent)",
          }}
        />
        {/* Faint circle behind portrait */}
        <div
          className="absolute right-[4%] top-[8%] rounded-full border"
          style={{
            width: "clamp(320px, 36vw, 560px)",
            height: "clamp(320px, 36vw, 560px)",
            borderColor: "color-mix(in oklch, var(--gold) 20%, transparent)",
          }}
        />
      </div>

      {/* ── Watermark name — sits behind everything ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex flex-col justify-center overflow-hidden select-none"
        style={{ zIndex: 0 }}
      >
        <div
          className="font-serif font-light leading-[0.78] tracking-[-0.02em] whitespace-nowrap"
          style={{
            fontSize: "clamp(5rem, 18vw, 18rem)",
            color: "color-mix(in oklch, var(--gold) 9%, transparent)",
            transform: "translateX(-2%)",
          }}
        >
          AMNA
        </div>
        <div
          className="font-serif font-light leading-[0.78] tracking-[-0.02em] whitespace-nowrap"
          style={{
            fontSize: "clamp(5rem, 18vw, 18rem)",
            color: "color-mix(in oklch, var(--gold) 9%, transparent)",
            transform: "translateX(8%)",
          }}
        >
          IMRAN
        </div>
      </div>

      {/* ── Main grid ── */}
      <div
        className="relative mx-auto flex h-full items-center"
        style={{
          maxWidth: "1440px",
          padding: "0 clamp(1.5rem, 5vw, 5rem)",
          minHeight: "clamp(600px, 92vh, 980px)",
          zIndex: 10,
        }}
      >
        {/* LEFT — Copy column */}
        <div
          className="relative w-full lg:w-[45%] flex flex-col justify-center"
          style={{ paddingTop: "clamp(5rem, 10vh, 8rem)", paddingBottom: "clamp(4rem, 8vh, 6rem)" }}
        >
          {/* Eyebrow */}
          <Reveal variant="fade-in" duration="slow">
            <div className="flex items-center gap-4 mb-8">
              <span
                className="h-px w-10"
                style={{ background: "var(--gold)" }}
              />
              <span
                className="eyebrow"
                style={{ color: "var(--gold)", letterSpacing: "0.22em" }}
              >
                Coaching · Consulting
              </span>
            </div>
          </Reveal>

          {/* Headline — three-part mixed voice */}
          <Reveal variant="slide-right" duration="slow" delay={60}>
            <h1 className="leading-[1.0] tracking-[-0.02em]" style={{ maxWidth: "22rem" }}>
              <span
                className="block font-serif font-light text-foreground"
                style={{ fontSize: "clamp(1.45rem, 2.2vw, 2.1rem)", marginBottom: "0.3em" }}
              >
                Strategic Leadership Coaching for
              </span>
              <em
                className="type-display-accent block font-light italic"
                style={{
                  fontSize: "clamp(2.6rem, 6.2vw, 5.4rem)",
                  lineHeight: 0.88,
                  color: "var(--gold-warm)",
                  marginLeft: "-0.03em",
                }}
              >
                High-Potential
              </em>
              <span
                className="block font-serif font-light text-foreground"
                style={{
                  fontSize: "clamp(2.6rem, 6.2vw, 5.4rem)",
                  lineHeight: 0.88,
                  paddingLeft: "0.06em",
                }}
              >
                Women
              </span>
            </h1>
          </Reveal>

          {/* Gold rule + body */}
          <Reveal variant="fade-in" delay={180}>
            <div
              className="mt-8 mb-7"
              style={{ height: "1px", width: "3rem", background: "var(--gold)", opacity: 0.65 }}
            />
            <p
              className="font-light leading-relaxed text-foreground/75"
              style={{
                fontSize: "clamp(0.92rem, 1.05vw, 1.05rem)",
                maxWidth: "30rem",
                borderLeft: "1px solid color-mix(in oklch, var(--gold) 38%, transparent)",
                paddingLeft: "1.25rem",
              }}
            >
              I help ambitious women navigate bias, strengthen executive
              presence, and accelerate their careers using evidence-based gender
              strategy, strengths science, and systemic insights — not just
              anecdotal advice.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal variant="fade-up" delay={260} duration="fast">
            <div
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 sm:gap-x-7 sm:gap-y-3"
              style={{ marginTop: "2.25rem", paddingLeft: "1.25rem" }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-foreground/90 hover:-translate-y-0.5"
                style={{ padding: "1rem 1.75rem" }}
              >
                Book a Strategic Clarity Call <span aria-hidden>→</span>
              </Link>
              <Link
                to="/organizations"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:text-[var(--gold)]"
                style={{ borderBottom: "1px solid var(--gold)", paddingBottom: "0.35rem" }}
              >
                For Corporate &amp; HR Enquiries <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          {/* Scroll cue */}
          <Reveal variant="fade-in" delay={500} duration="slow">
            <div
              className="hidden lg:flex items-center gap-3 mt-16"
              style={{ color: "color-mix(in oklch, var(--foreground) 35%, transparent)" }}
            >
              <div
                className="h-10 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 30%, transparent), transparent)",
                }}
              />
              <span className="eyebrow" style={{ fontSize: "10px", letterSpacing: "0.22em" }}>
                Scroll
              </span>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — Portrait column (desktop only) */}
        <div
          className="hidden lg:block lg:w-[55%] relative self-stretch"
          style={{ minHeight: "clamp(600px, 92vh, 980px)" }}
        >
          <Reveal variant="fade-in" duration="slow" delay={100} className="absolute inset-0">
            <img
              src={heroCutout}
              alt="Amna Imran — Executive Coach"
              draggable={false}
              className="absolute bottom-0 select-none pointer-events-none"
              style={{
                right: "-4%",
                height: "112%",
                width: "auto",
                maxWidth: "none",
                objectFit: "contain",
                objectPosition: "bottom center",
                filter: "drop-shadow(-8px 0 40px color-mix(in oklch, var(--charcoal) 12%, transparent))",
              }}
            />
          </Reveal>
        </div>
      </div>

      {/* ── Mobile portrait strip ── */}
      <div
        className="lg:hidden relative w-full overflow-hidden"
        style={{
          height: "clamp(300px, 65vw, 480px)",
          background:
            "linear-gradient(135deg, color-mix(in oklch, var(--cream) 96%, var(--gold)) 0%, color-mix(in oklch, var(--cream) 88%, var(--gold-subtle)) 100%)",
        }}
      >
        <img
          src={heroCutout}
          alt=""
          aria-hidden
          draggable={false}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none"
          style={{ height: "130%", width: "auto", objectFit: "contain", objectPosition: "bottom" }}
        />
      </div>
    </section>
  );
}

/* ---------------- CREDENTIALS STRIP ---------------- */

function CredentialsStrip() {
  const items = [
    { logo: icfLogo, label: "ICF ACC Certified", scale: 1.36 },
    { logo: gallupLogo, label: "Gallup Certified CliftonStrengths Coach", scale: 1.16 },
    { logo: cdpLogo, label: "Certified Diversity Professional (CDP®)", scale: 1.24 },
    { logo: inseadLogo, label: "INSEAD-trained Gender Specialist", scale: 1.18 },
  ];
  return (
    <section
      className="relative z-30 border-y"
      style={{
        background: "color-mix(in oklch, var(--background) 97%, var(--cream))",
        borderColor: "color-mix(in oklch, var(--gold) 14%, transparent)",
        padding: "clamp(2rem, 4vw, 3rem) 0",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
        {/* Section label */}
        <Reveal variant="fade-in" duration="slow">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="eyebrow" style={{ color: "color-mix(in oklch, var(--foreground) 45%, transparent)", letterSpacing: "0.22em" }}>
              Credentials
            </span>
            <span className="h-px flex-1 max-w-[4rem]" style={{ background: "color-mix(in oklch, var(--gold) 30%, transparent)" }} />
          </div>
        </Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
          {items.map((c, i) => (
            <Reveal key={c.label} delay={i * 60} variant="fade-in" duration="fast" as="li">
              <div
                className={`flex flex-col items-center text-center gap-4 px-4 md:px-8 ${
                  i > 0 ? "md:border-l" : ""
                }`}
                style={i > 0 ? { borderColor: "color-mix(in oklch, var(--gold) 16%, transparent)" } : {}}
              >
                <div className="h-14 md:h-16 flex items-center justify-center">
                  <img
                    src={c.logo}
                    alt={c.label}
                    loading="lazy"
                    className="object-contain h-10 md:h-12 w-auto max-w-[210px]"
                    style={{ transform: `scale(${c.scale})`, transformOrigin: "center" }}
                  />
                </div>
                <span className="eyebrow leading-snug max-w-[14rem]" style={{ color: "color-mix(in oklch, var(--foreground) 55%, transparent)", fontSize: "10px" }}>
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
    <Section as="section" surface="warm" pad="none" flow="both" className="overflow-hidden section-pad-top-major section-pad-bottom-minor">
      <Container className="relative">
        <Reveal variant="slide-right">
          <h2 className="type-h1 max-w-6xl text-[clamp(2.9rem,7vw,6.4rem)] leading-[0.87] tracking-[-0.045em]">
            <span className="text-gold-warm">High Performance</span>{" "}
            <span>Alone,</span>
            <br />
            <span className="block sm:pl-[1.15em] lg:pl-[1.75em]">
              <span className="text-gold-warm">Does Not </span>
              <em className="font-light italic text-gold-warm">
                Guarantee
              </em>{" "}
              <span>Progression</span>
            </span>
          </h2>
        </Reveal>

        <div className="relative mt-[clamp(3rem,8vw,7rem)] grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24">
          <div className="relative">
            <div className="grid gap-8 md:grid-cols-[0.68fr_1.32fr] md:items-center">
              <Reveal variant="fade-in">
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-52 w-32 -translate-y-1/2 rounded-r-full border-r-[3px] border-t border-b border-[var(--gold-warm)] md:block"
                  />
                  <p className="type-display-accent relative z-10 text-[2.6rem] sm:text-[3.1rem] md:text-[3.45rem] leading-[0.92] text-foreground">
                    The traditional
                    <br />
                    <span className="pl-10 text-gold-warm">
                      formula
                    </span>
                  </p>
                </div>
              </Reveal>

              <ul className="space-y-3">
                {TRADITIONAL.map((t, i) => (
                  <Reveal key={t} delay={i * 50} variant="slide-left" duration="fast">
                    <li
                      className={`relative mx-auto border-l-2 border-[color-mix(in_oklch,var(--gold)_65%,transparent)] px-6 py-4 text-left type-body text-foreground shadow-[var(--shadow-soft)] bg-[color-mix(in_oklch,var(--gold-muted)_72%,transparent)] backdrop-blur-[1px] ${
                        i === 0
                          ? "max-w-[21rem] md:-translate-x-8 md:-rotate-1"
                          : i === 1
                            ? "max-w-[25rem] md:translate-x-2 md:rotate-[0.5deg]"
                            : i === 2
                              ? "max-w-[25rem] md:-translate-x-2"
                              : "max-w-[23rem] md:translate-x-5 md:-rotate-[0.5deg]"
                      }`}
                    >
                      {t}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="relative mt-14 flex flex-col gap-6 md:mt-20 md:flex-row md:items-center">
              <Reveal variant="scale" duration="slow">
                <div className="relative flex h-[220px] w-[220px] shrink-0 items-center justify-center rounded-full border border-[var(--gold-warm)] bg-[var(--gold-muted)] text-right md:-ml-14 md:h-[260px] md:w-[260px] shadow-[0_24px_70px_color-mix(in_oklch,var(--charcoal)_10%,transparent)] before:absolute before:inset-3 before:rounded-full before:border before:border-[color-mix(in_oklch,var(--gold)_28%,transparent)]">
                  <p className="font-serif text-[2.15rem] md:text-[2.45rem] leading-[1.02] text-foreground">
                    <span className="block">Common</span>
                    <span className="block">internal</span>
                    <span className="type-display-accent block -mt-1 text-[2.05rem] md:text-[2.35rem] text-background">
                      narratives
                    </span>
                  </p>
                </div>
              </Reveal>

              <ul className="relative space-y-3 md:-ml-8 md:space-y-4 md:border-l md:border-[color-mix(in_oklch,var(--gold)_28%,transparent)] md:pl-9">
                {INTERNAL_NARRATIVES.map((q, i) => (
                  <Reveal key={q} delay={i * 60} variant="fade-in">
                    <li
                      className={`type-body italic text-copy bg-[color-mix(in_oklch,var(--background)_48%,transparent)] px-4 py-2 ${
                        i === 0
                          ? "max-w-[20rem] md:-translate-x-2"
                          : i === 1
                            ? "max-w-[21rem] md:translate-x-2"
                            : i === 2
                              ? "max-w-[18rem] md:translate-x-5"
                              : "max-w-[19rem] md:translate-x-0"
                      }`}
                    >
                      &ldquo;{q}&rdquo;
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative lg:pt-4 lg:border-l lg:border-[color-mix(in_oklch,var(--gold)_24%,transparent)] lg:pl-12 xl:pl-16">
            <Reveal delay={80} variant="slide-left">
              <p className="type-display-accent text-[3rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.75] text-foreground">
                Yet{" "}
                <span className="text-gold-warm">
                  progression
                </span>
                <br />
                <span className="ml-16 sm:ml-28">often </span>
                <span className="text-gold-warm">stalls</span>
              </p>
            </Reveal>

            <Reveal delay={140} variant="fade-up">
              <div className="mt-10 max-w-[43rem] stack-md type-body text-copy [&>p:first-child]:text-[1.08em] [&>p:first-child]:leading-[1.75]">
                <p>
                  &mdash; sometimes subtly, sometimes abruptly. Research across organizations shows
                  that advancement depends on far more than performance alone. Factors such as{" "}
                  <strong className="text-foreground">
                    visibility, sponsorship, perceived leadership presence, and alignment with
                    informal power structures
                  </strong>{" "}
                  play decisive roles.
                </p>
                <p>
                  Without visibility into these patterns, stalled progress can feel personal rather
                  than systemic &mdash; leading many capable professionals to work harder while
                  seeing diminishing returns.
                </p>
                <p>
                  When these dynamics are unclear, stalled progress can feel personal rather than
                  systemic — leading many capable professionals to work harder while seeing
                  diminishing returns.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220} variant="fade-in" duration="slow">
              <p className="type-lead relative mt-12 md:mt-16 max-w-[44rem] border-y border-[color-mix(in_oklch,var(--gold)_35%,transparent)] py-8 text-center text-foreground">
                <span className="block text-gold-warm">
                  The challenge is not a lack of ambition or ability &mdash;
                </span>
                <span className="block">but a lack of access to the unwritten rules of</span>
                <span className="block">advancement.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function LegacyHighPerformanceSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[var(--cream)]/40">
      <Container className="relative">
        {/* Headline */}
        <Reveal>
          <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] tracking-tight max-w-5xl">
            <span className="text-gold">High Performance</span>
            <span className="text-foreground">&nbsp;Alone,</span>
            <br />
            <span className="text-gold">Does Not</span>{" "}
            <em className="italic font-normal text-foreground">Guarantee</em>{" "}
            <span className="text-foreground">Progression</span>
          </h2>
        </Reveal>

        <div className="relative mt-10 md:mt-14 grid gap-10 md:gap-8 md:grid-cols-12">
          {/* LEFT — traditional formula: label left, boxes right */}
          <div className="md:col-span-5 relative">
            <div className="grid grid-cols-12 gap-4 md:gap-5 items-center">
              <Reveal as="div" className="col-span-12 sm:col-span-5 relative">
                <p
                  className="relative font-serif italic font-light text-[2.2rem] sm:text-[2.6rem] md:text-[2.9rem] leading-[0.95] text-foreground"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  The
                  <br />
                  traditional
                  <br />
                  <span className="pl-4 text-gold">formula</span>
                </p>
              </Reveal>
              <ul className="col-span-12 sm:col-span-7 space-y-3">
                {TRADITIONAL.map((t, i) => (
                  <Reveal key={t} delay={i * 60}>
                    <li
                      className={`rounded-xl px-4 py-3 text-[13px] md:text-[14px] text-background font-medium tracking-wide bg-[var(--gold)] ${
                        i === 0 ? "md:-translate-x-10" : i === 1 ? "md:-translate-x-5" : i === 3 ? "md:-translate-x-5" : ""
                      }`}
                    >
                      {t}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Yet progression stalls */}
          <div className="md:col-span-7 relative md:pl-6">
            <Reveal delay={80}>
              <p
                className="relative font-serif italic font-light leading-[0.95] text-[2.6rem] md:text-[3.4rem]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                <span className="text-foreground">Yet </span>
                <span className="text-gold">progression</span>
                <br />
                <span className="pl-16 text-foreground">often </span>
                <span className="text-gold">stalls</span>
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="relative mt-7 text-[15px] md:text-[16px] text-foreground leading-relaxed font-light max-w-xl">
                — sometimes subtly, sometimes abruptly. Research across organizations shows that
                advancement depends on far more than performance alone. Factors such as{" "}
                <strong className="font-semibold text-gold">
                  visibility, sponsorship, perceived leadership presence, and alignment with
                  informal power structures
                </strong>{" "}
                play decisive roles.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="relative mt-4 text-[15px] text-foreground/85 leading-relaxed max-w-xl">
                Without visibility into these patterns, stalled progress can feel personal rather
                than systemic — leading many capable professionals to work harder while seeing
                diminishing returns.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="relative mt-4 text-[15px] text-foreground/85 leading-relaxed max-w-xl">
                When these dynamics are unclear, stalled progress can feel personal rather than
                systemic - leading many capable professionals to work harder while seeing
                diminishing returns.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Bottom row — narratives circle + closing line */}
        <div className="relative mt-10 md:mt-14 grid gap-10 md:gap-8 md:grid-cols-12 items-end">
          {/* LEFT — small circle with title, quotes wrap around it */}
          <div className="md:col-span-7 relative">
            <div className="relative flex items-center gap-0">
              {/* Compact circle sized to its text */}
              <div
                className="relative shrink-0 rounded-full w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] flex items-center justify-center text-center -mr-8 sm:-mr-10 md:-mr-12 bg-[var(--gold)]"
              >
                <p
                  className="font-serif font-normal text-[2rem] md:text-[2.3rem] leading-[1.15] text-black px-4"
                >
                  Common
                  <br />
                  internal
                  <br />
                  <span className="text-white" style={{ fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none" }}>narratives</span>
                </p>
                {/* Speech bubble tail pointing right */}
                <div
                  className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-0 h-0"
                  style={{
                    borderTop: "16px solid transparent",
                    borderBottom: "16px solid transparent",
                    borderLeft: "22px solid var(--gold)",
                  }}
                />
              </div>
              {/* Quotes wrapping around the circle */}
              <ul className="flex-1 space-y-3 relative z-10 pl-6 md:pl-10">
                {INTERNAL_NARRATIVES.map((q, i) => (
                  <Reveal key={q} delay={i * 60}>
                    <li
                      className={`font-sans italic text-[16px] md:text-[18px] text-foreground leading-snug ${
                        i === 1 ? "md:pl-[26px]" : i === 3 ? "md:pl-2" : ""
                      }`}
                      style={
                        i === 1
                          ? { transform: "translateX(-4px)" }
                          : i === 2
                          ? { transform: "translateX(30px)" }
                          : undefined
                      }
                    >
                      {i === 2 ? (
                        <>"Others seem to be doing<br />something I'm not."</>
                      ) : i === 3 ? (
                        <>"Perhaps I'm not<br />leadership material after all."</>
                      ) : (
                        `"${q}"`
                      )}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — closing line */}
          <div className="md:col-span-5 relative">
            <Reveal>
              <div className="relative px-6 py-5 md:px-8 md:py-6">
                {/* Oval border behind text */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-7 rounded-[50%] border-[3px] border-[#7B3F00] z-10"
                />
                <p className="relative font-serif text-[1.4rem] md:text-[1.9rem] leading-[1.2] max-w-md text-right ml-auto">
                  <span className="text-gold">
                    The challenge is not a lack of ambition or ability
                  </span>{" "}
                  <span className="text-foreground">
                    — but a lack of access to the unwritten rules of advancement.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- PROGRESS NARRATIVE ---------------- */

function ProgressNarrativeSection() {
  const gaps = [
    "Women remain underrepresented in senior leadership despite strong entry-level participation",
    "Promotion decisions often rely more on perceived leadership potential — where gender bias frequently operates",
    "Women are evaluated more on past performance, men more on future potential",
    "Assertive behavior is rewarded in men but can be penalized in women",
    "Leadership norms still reflect traditionally masculine behavioral expectations",
    "Informal networks and sponsorship pathways often exclude women",
    "Visibility opportunities are unevenly distributed",
    "Caregiving responsibilities continue to affect career trajectories disproportionately",
  ];

  return (
    <Section
      as="section"
      surface="cream"
      pad="none"
      flow="top"
      className="relative z-10 overflow-hidden section-pad-top-major section-pad-bottom-major"
    >
      <Container className="relative before:pointer-events-none before:absolute before:-right-32 before:top-10 before:h-[520px] before:w-[520px] before:rounded-full before:border before:border-[color-mix(in_oklch,var(--gold)_16%,transparent)]">
        <Reveal variant="slide-right">
          <h2 className="type-h1 max-w-5xl text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9]">
            <em className="not-italic font-light text-gold">
              The Progress Narrative —
            </em>{" "}
            and the Hidden Reality
          </h2>
        </Reveal>
        <Reveal delay={80} variant="fade-in">
          <p className="type-body mt-8 max-w-3xl text-copy md:ml-[12%] md:border-l md:border-[color-mix(in_oklch,var(--gold)_38%,transparent)] md:pl-8">
            On the surface, it appears that gender equality at work has largely been achieved. Women are highly educated, widely represented in professional roles, and many organizations publicly champion diversity.
          </p>
        </Reveal>
        <Reveal delay={120} variant="fade-in">
          <p className="type-body mt-6 max-w-3xl text-copy md:ml-[12%] md:pl-8">
            Yet research in organizational behavior and leadership studies reveals persistent gaps beneath this progress narrative:
          </p>
        </Reveal>

        <div className="mt-[var(--space-stack-lg)] max-w-6xl">
          <div className="relative grid gap-x-7 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 lg:before:absolute lg:before:left-0 lg:before:right-0 lg:before:top-[1.1rem] lg:before:h-px lg:before:bg-gradient-to-r lg:before:from-transparent lg:before:via-[color-mix(in_oklch,var(--gold)_48%,transparent)] lg:before:to-transparent">
            {gaps.map((g, i) => (
              <Reveal key={g} delay={i * 40} variant="fade-up" duration="fast">
                <EditorialCard variant="rail" className={`relative py-5 pr-3 h-full lg:border-l-0 lg:pl-0 lg:pt-14 ${i % 2 === 1 ? "lg:mt-14" : ""}`}>
                  <div className="flex items-start gap-4 lg:block">
                    <span className="relative z-10 shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-[14px] font-serif italic text-background bg-[var(--gold)] lg:absolute lg:left-0 lg:top-0 lg:ring-8 lg:ring-[var(--cream)]">
                      {i + 1}
                    </span>
                    <p className="type-body text-copy leading-relaxed lg:border-t lg:border-[color-mix(in_oklch,var(--gold)_25%,transparent)] lg:pt-5">
                      {g}
                    </p>
                  </div>
                </EditorialCard>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100} variant="fade-in">
          <p className="type-body mt-[var(--space-stack-lg)] max-w-3xl text-copy md:ml-auto md:border-r md:border-[color-mix(in_oklch,var(--gold)_38%,transparent)] md:pr-8">
            These dynamics are rarely explicit or intentional. They are embedded in everyday organizational processes — performance reviews, leadership selection, project allocation, and informal influence channels.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- MOTHERHOOD PENALTY + PSYCHOLOGICAL IMPACT ---------------- */

function MotherhoodSection() {
  return (
    <Section
      as="section"
      surface="panel"
      pad="none"
      className="relative z-20 -mt-10 md:-mt-20 overflow-visible"
      style={{ background: "color-mix(in oklch, var(--blush-subtle) 45%, var(--warm-panel))" }}
    >
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 top-0 z-10 h-20 w-full text-[var(--cream)] opacity-90 md:h-28"
      >
        <path
          d="M0,0 H1440 V46 C1260,16 1160,94 970,78 C770,61 646,20 460,42 C300,61 158,102 0,74 Z"
          fill="currentColor"
        />
      </svg>
      <div className="relative z-20">
        <div className="relative h-[205px] md:h-[265px]">
          <img
            src={motherhoodTitleBackground}
            alt=""
            aria-hidden
            className="absolute left-[-4vw] top-[-18px] h-[175px] w-[78vw] max-w-none object-fill md:top-[-28px] md:h-[225px] md:w-[62vw] lg:left-[-2vw] lg:w-[54vw]"
            draggable={false}
          />
          <Container className="relative h-full flex items-start justify-start pt-9 md:pt-10">
            <Reveal variant="slide-right" duration="slow">
              <h2 className="type-h1 text-background max-w-4xl text-left md:ml-8 lg:ml-12 leading-[0.92]">
                <span className="text-gold-warm">The </span>
                <span className="type-display-accent text-background text-[3.7rem] md:text-[5.8rem] leading-none">
                  Motherhood
                </span>{" "}
                <em className="not-italic font-light text-gold-warm">
                  Penalty
                </em>
                <span className="block text-[1.55rem] md:text-[2rem]">
                  <span className="text-gold-warm">and</span> Life Transitions
                </span>
              </h2>
            </Reveal>
          </Container>
        </div>

        <Container className="relative -mt-8 md:-mt-14">
          <div className="ml-auto max-w-4xl stack-md border-l border-[color-mix(in_oklch,var(--gold)_35%,transparent)] pl-6 pt-4 md:pl-10">
            <Reveal variant="fade-in">
              <p className="type-body text-copy">
                Research across regions consistently shows that career interruptions associated
                with caregiving — particularly motherhood — can significantly alter advancement
                trajectories. Even when women return with equal or greater capability, they may be
                perceived as less committed, less available, or less leadership-ready.
              </p>
            </Reveal>
            <Reveal delay={100} variant="fade-in">
              <p className="type-body text-copy">
                Meanwhile, men often experience neutral or even positive career effects from
                fatherhood (the fatherhood bonus).
              </p>
            </Reveal>
            <Reveal delay={160} variant="fade-in">
              <p className="type-body text-copy">
                These patterns persist despite formal policies designed to support work-life balance.
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

      <Container className="section-pad-minor relative">
        <Reveal variant="scale" duration="slow">
          <h3 className="text-left md:text-center font-serif leading-[0.85]">
            <span className="text-[2.1rem] md:text-[3rem] text-gold-warm">The </span>
            <span className="type-display-accent text-[3.5rem] md:text-[5rem] text-foreground">
              Psychological
            </span>
            <span className="text-[2.1rem] md:text-[3rem] text-gold-warm"> impact</span>
          </h3>
        </Reveal>

        <div className="mt-[var(--space-stack-lg)] grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center max-w-6xl mx-auto">
          <Reveal variant="slide-right">
            <p className="max-w-md text-[13px] md:text-[14px] uppercase tracking-[0.08em] font-semibold text-foreground leading-relaxed">
              When the path forward is
              <br />
              <em className="normal-case tracking-normal font-serif italic text-[1.2rem] md:text-[1.35rem] font-light text-gold-deep">
                opaque and high-risk,
              </em>
              <br />
              even the most capable women start to doubt
              <br />
              <em className="normal-case tracking-normal font-serif italic text-[1.2rem] md:text-[1.35rem] font-light text-gold-deep">
                not their talent &mdash; but their belonging.
              </em>
            </p>
          </Reveal>

          <Reveal delay={120} variant="fade-up">
            <div className="relative grid gap-3 sm:grid-cols-2 md:rotate-[-1deg]">
              {PSYCH_IMPACT.map(({ t, Icon }, i) => (
                <Reveal key={t} delay={i * 40} variant="fade-in" duration="fast">
                  <span className={`card-ghost inline-flex items-center gap-3 rounded-full px-5 py-3 text-[13px] md:text-[14px] text-copy ${i % 2 === 1 ? "sm:translate-y-5" : ""}`}>
                    <Icon size={15} strokeWidth={1.8} className="text-gold-deep shrink-0" />
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade-in" duration="slow">
          <p className="type-body mt-16 md:mt-24 max-w-3xl mx-auto border-y border-[color-mix(in_oklch,var(--gold)_28%,transparent)] py-8 text-center text-copy">
            Over time, this leads not to quitting ambition &mdash; but to{" "}
            <em className="font-serif italic text-gold-deep">disengaging from</em>
            <br />
            <em className="font-serif italic text-gold-deep">
              a game whose rules were never explained.
            </em>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- WAY FORWARD — interactive ---------------- */

function WayForwardSection() {
  const [active, setActive] = useState(0);
  return (
    <Section as="section" surface="default" pad="none" flow="both" className="overflow-hidden section-pad-top-major section-pad-bottom-major">
      <Container className="relative after:pointer-events-none after:absolute after:-left-48 after:top-1/3 after:h-[520px] after:w-[520px] after:rounded-full after:border after:border-[color-mix(in_oklch,var(--gold)_14%,transparent)]">
        <Reveal variant="slide-right">
          <h2 className="type-h1 max-w-4xl text-[clamp(3rem,7vw,6.2rem)] leading-[0.87]">
            A More Strategic Way{" "}
            <em className="not-italic font-light italic text-gold">
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

        <div className="relative z-10 mt-[var(--space-stack-lg)] grid gap-10 md:grid-cols-12 md:gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-24">
            <Reveal variant="scale" duration="slow">
              <div className="relative min-h-[300px] border-l border-[var(--gold)] bg-[linear-gradient(135deg,color-mix(in_oklch,var(--panel-paper)_92%,transparent),transparent)] p-8 md:p-10 md:pr-14 shadow-[var(--shadow-soft)]">
                <div className="font-serif italic text-[clamp(3.7rem,8vw,7rem)] leading-none text-[color-mix(in_oklch,var(--gold)_36%,transparent)]">
                  {String(active + 1).padStart(2, "0")} / 06
                </div>
                <h3 className="type-h2 relative -mt-2 ml-5 leading-[1.05] md:ml-10">
                  {FORWARD[active].t}
                </h3>
                <div
                  aria-hidden
                  className="absolute -bottom-px left-0 h-0.5 transition-all duration-700 bg-[var(--gold)]"
                  style={{ width: `${((active + 1) / FORWARD.length) * 100}%` }}
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 relative">
            <div
              aria-hidden
              className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[color-mix(in_oklch,var(--gold)_55%,transparent)] to-transparent md:left-[26px]"
            />
            <ul className="space-y-2">
              {FORWARD.map((f, i) => {
                const isActive = active === i;
                return (
                  <li key={f.t}>
                    <Reveal delay={i * 40} variant="fade-in" duration="fast">
                      <button
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        onClick={() => setActive(i)}
                        className={`group w-full text-left flex items-center gap-6 md:gap-7 py-4 pr-4 pl-0 transition-all duration-300 border-b ${
                          isActive
                            ? "bg-[linear-gradient(90deg,color-mix(in_oklch,var(--cream)_68%,transparent),transparent)] border-[var(--gold)] md:translate-x-4"
                            : "bg-transparent border-[color-mix(in_oklch,var(--hairline)_45%,transparent)] hover:border-[color-mix(in_oklch,var(--gold)_55%,transparent)] hover:translate-x-2"
                        }`}
                      >
                        <span
                            className={`relative z-10 shrink-0 inline-flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full border border-[var(--gold)] text-[15px] font-serif italic transition-colors ${
                            isActive ? "text-background bg-[var(--gold)]" : "bg-background text-copy-muted"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-serif text-[17px] md:text-[20px] leading-snug transition-colors ${
                            isActive ? "text-foreground" : "text-copy-muted"
                          }`}
                        >
                          {f.t}
                        </span>
                      </button>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- HOW I SUPPORT ---------------- */

function HowISupportSection() {
  return (
    <Section as="section" surface="cream" pad="none" className="relative overflow-hidden section-pad-top-major section-pad-bottom-major before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-28 before:bg-gradient-to-b before:from-[color-mix(in_oklch,var(--background)_75%,transparent)] before:to-transparent">
      <div className="mx-auto max-w-[1400px] px-[var(--space-container-x)]">
        <Reveal variant="slide-right" duration="slow">
          <h2 className="type-display relative z-20 max-w-6xl leading-[0.82]">
            <span className="block font-light text-gold-warm">
              How I Support High-Potential
            </span>
            <span className="type-display-accent block -mt-2 ml-[1.25em] sm:ml-[2.2em] md:-mt-5 md:ml-[3.8em] text-[clamp(4.2rem,13vw,9.5rem)] leading-none text-foreground">
              Women
            </span>
          </h2>
        </Reveal>

        {false && (
        <Reveal delay={80}>
          <div className="mt-8 md:mt-10 max-w-5xl">
            <p className="max-w-3xl type-body text-copy">
              I work with ambitious professionals who want their impact, influence, and career
              trajectory to reflect their true capability — without stepping away from roles they
              have invested years building.
            </p>
            <p className="mt-5 max-w-4xl type-lead text-foreground">
              My approach integrates coaching with{" "}
              <em className="not-italic font-light text-gold">
                evidence-based gender insight, strengths science,
              </em>{" "}
              and deep understanding of organizational dynamics to help clients:
            </p>
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-3">
              {SUPPORT_FOCUS.map((item, i) => (
                <span
                  key={item}
                  className="card-ghost inline-flex items-center gap-3 px-4 py-3 text-[13px] md:text-[14px] leading-snug text-copy"
                >
                  <span className="font-serif italic text-[18px] leading-none text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        )}

        <div className="relative mt-2 md:mt-4 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-0 items-center">
          <Reveal as="article" variant="fade-up" className="md:col-span-5 md:text-center relative z-20 md:translate-x-6 lg:translate-x-10">
            <div className="font-serif leading-none text-gold text-[clamp(2.4rem,4.2vw,3.6rem)]">
              ELEVATE<sup className="text-xl align-super">™</sup>
            </div>
            <div className="mt-3 mb-4 md:mx-auto max-w-[420px]">
              <Hairline tone="gold" className="mb-2" />
              <div className="pt-2 text-[13px] md:text-[15px] uppercase tracking-[0.18em] text-foreground font-serif text-center">
                Strategic Advancement Program
              </div>
            </div>
            <EditorialCard variant="dark" className="relative overflow-hidden border-0 border-l-4 border-l-[var(--gold)] p-8 md:p-10 space-y-4 text-[16px] md:text-[18px] leading-[1.55] text-left min-h-[420px] shadow-[0_30px_80px_color-mix(in_oklch,var(--charcoal)_22%,transparent)] md:-rotate-[1.25deg]">
              <p>
                A structured 6 month engagement designed to help{" "}
                <em className="italic text-gold">high-potential women</em>{" "}
                translate capability into progression within complex organizational environments.
              </p>
              <p>
                Through the{" "}
                <em className="italic text-gold">ELEVATE Framework</em>, we work
                systematically across{" "}
                <em className="italic text-gold">
                  leadership presence, visibility, influence, advancement strategy, and long-term sustainability
                </em>{" "}
                — equipping you to move forward with clarity, confidence, and strategic intent.
              </p>
              <p className="text-background/85">
                Whether self-funded or sponsored by your organization, the program provides a clear roadmap for advancing without burnout or compromise.
              </p>
            </EditorialCard>
            <Link
              to="/work-with-me"
              className="mt-5 inline-flex items-center gap-2 font-serif text-[18px] text-foreground border-b border-[color-mix(in_oklch,var(--foreground)_45%,transparent)] pb-0.5 hover:border-foreground transition-colors"
            >
              Find out more <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <div className="md:col-span-2 relative z-30 order-first md:order-none flex justify-center md:block md:-ml-36 md:-mr-32 lg:-ml-48 lg:-mr-40 pointer-events-none md:self-end md:-mt-16 lg:-mt-24">
            <div
              aria-hidden
              className="absolute bottom-1 left-1/2 z-0 h-10 w-[78%] -translate-x-1/2 rounded-full bg-black/20 blur-2xl md:bottom-[-4px] md:h-12 md:w-[560px] md:-translate-x-[57%] lg:w-[660px]"
            />
            <Reveal variant="scale" duration="slow">
              <img
                src={supportPortrait}
                alt="Amna Imran"
                draggable={false}
                className="relative z-10 select-none object-contain object-bottom w-[340px] sm:w-[430px] md:w-auto md:h-[760px] lg:h-[900px] xl:h-[980px] md:max-w-none mx-auto md:-mb-12 lg:-mb-16 -translate-x-3 md:-translate-x-8 lg:-translate-x-12"
              />
            </Reveal>
          </div>

          <Reveal delay={120} as="article" variant="fade-up" className="md:col-span-5 md:text-center relative z-20 md:-translate-x-6 lg:-translate-x-10 md:translate-y-16">
            <div className="font-serif leading-[1.05] text-gold text-[clamp(1.9rem,3.2vw,2.9rem)]">
              Lead &amp; Thrive Through Motherhood<sup className="text-xl align-super">™</sup>
            </div>
            <div className="mt-3 mb-4 md:mx-auto max-w-[460px]">
              <Hairline tone="gold" className="mb-2" />
              <div className="pt-2 text-[13px] md:text-[15px] uppercase tracking-[0.18em] text-foreground font-serif text-center">
                Evidence-Informed Coaching Program
              </div>
            </div>
            <div className="card-elevated relative overflow-hidden border-0 border-r-4 border-r-foreground/25 bg-[var(--gold)] text-white p-8 md:p-10 space-y-4 text-[16px] md:text-[18px] leading-[1.55] text-left min-h-[420px] shadow-[0_30px_80px_color-mix(in_oklch,var(--gold)_24%,transparent)] md:rotate-[1.25deg]">
              <p>
                Support high-potential women through the{" "}
                <strong className="font-semibold italic text-foreground">profound transition into working parenthood.</strong>
              </p>
              <p>
                Grounded in research on the motherhood penalty and organizational dynamics, this program helps protect{" "}
                <strong className="font-semibold italic text-foreground">leadership trajectory</strong> while navigating the{" "}
                <strong className="font-semibold italic text-foreground">identity, visibility, and confidence shifts</strong>{" "}
                that often accompany maternity leave and return-to-work.
              </p>
              <p>
                Rather than asking women to scale back ambition or overcompensate, we focus on{" "}
                <strong className="font-semibold italic text-foreground">strategic positioning, stakeholder alignment, and sustainable leadership</strong>{" "}
                — so motherhood becomes an integrated{" "}
                <strong className="font-semibold italic text-foreground">chapter of growth</strong>.
              </p>
            </div>
            <Link
              to="/work-with-me"
              className="mt-5 inline-flex items-center gap-2 font-serif text-[18px] text-foreground border-b border-[color-mix(in_oklch,var(--foreground)_45%,transparent)] pb-0.5 hover:border-foreground transition-colors"
            >
              Find out more <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- WHY MY APPROACH IS DIFFERENT ---------------- */

function WhyDifferentSection() {
  const leftPillars = [
    {
      icon: "🔬",
      label: "Evidence-Based",
      sub: "Research from HBR, INSEAD, McKinsey & Gallup — not anecdotal advice.",
    },
    {
      icon: "⚖️",
      label: "System-Aware",
      sub: "Navigate formal and informal organisational dynamics strategically.",
    },
    {
      icon: "🧠",
      label: "Strengths Science",
      sub: "Gallup-trained methodology — build on what drives your effectiveness.",
    },
  ];
  const rightPillars = [
    {
      icon: "🎯",
      label: "Advancement-Focused",
      sub: "Tangible shifts in positioning, visibility, and promotion readiness.",
    },
    {
      icon: "💼",
      label: "Leadership Coaching",
      sub: "ICF ACC-credentialed coaching grounded in real organisational insight.",
    },
    {
      icon: "🌍",
      label: "DE&I Consultancy",
      sub: "Structural inclusion and advancement strategy for organisations.",
    },
  ];

  return (
    <Section as="section" surface="default" pad="none" className="overflow-hidden section-pad-top-major section-pad-bottom-major">
      <Container className="relative">
        {/* Heading */}
        <Reveal variant="slide-right">
          <h2 className="type-h1 text-[clamp(3rem,6.5vw,6rem)] leading-[0.88] max-w-3xl">
            <span className="text-gold">Why My Approach </span>
            <em className="italic font-light text-foreground">Is Different</em>
          </h2>
        </Reveal>
        <Reveal delay={80} variant="fade-in">
          <p className="mt-8 max-w-3xl type-body text-copy md:border-l md:border-[color-mix(in_oklch,var(--gold)_38%,transparent)] md:pl-8">
            Most coaching focuses on personal development in isolation — confidence, mindset, or
            communication skills. While these matter, they do not fully explain why highly capable
            women often struggle to translate performance into progression.
          </p>
        </Reveal>

        {/* Portrait + Icons grid */}
        <div className="relative mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center">
          {/* LEFT pillars */}
          <div className="flex flex-col gap-8 md:gap-10 md:items-end md:text-right">
            {leftPillars.map((p, i) => (
              <Reveal key={p.label} delay={i * 80} variant="fade-in">
                <div className="flex items-start gap-4 md:flex-row-reverse md:items-start">
                  <div
                    className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full text-xl border"
                    style={{
                      borderColor: "color-mix(in oklch, var(--gold) 35%, transparent)",
                      background: "color-mix(in oklch, var(--cream) 85%, var(--gold-subtle))",
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-serif text-[17px] md:text-[19px] text-foreground leading-snug">{p.label}</div>
                    <p className="mt-1.5 type-micro max-w-[220px]">{p.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CENTRE portrait */}
          <div className="relative mx-auto w-[min(72vw,320px)] md:w-[240px] lg:w-[300px] shrink-0">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(ellipse at center, color-mix(in oklch, var(--cream) 90%, var(--gold-subtle)) 60%, transparent 100%)",
                transform: "scale(1.12)",
              }}
            />
            <Reveal variant="scale" duration="slow">
              <img
                src={approachPortrait}
                alt="Amna Imran"
                draggable={false}
                className="relative z-10 w-full h-auto select-none pointer-events-none"
                style={{
                  transform: "scale(1.35) translateY(6%)",
                  transformOrigin: "bottom center",
                  filter: "drop-shadow(0 12px 40px color-mix(in oklch, var(--charcoal) 14%, transparent))",
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
                }}
              />
            </Reveal>
          </div>

          {/* RIGHT pillars */}
          <div className="flex flex-col gap-8 md:gap-10 md:items-start md:text-left">
            {rightPillars.map((p, i) => (
              <Reveal key={p.label} delay={i * 80 + 40} variant="fade-in">
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full text-xl border"
                    style={{
                      borderColor: "color-mix(in oklch, var(--gold) 35%, transparent)",
                      background: "color-mix(in oklch, var(--cream) 85%, var(--gold-subtle))",
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-serif text-[17px] md:text-[19px] text-foreground leading-snug">{p.label}</div>
                    <p className="mt-1.5 type-micro max-w-[220px]">{p.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Intersection statement */}
        <Reveal delay={120} variant="fade-up">
          <p className="type-lead mt-14 md:mt-20 max-w-3xl text-center mx-auto text-foreground">
            My work sits at the intersection of{" "}
            <em className="type-display-accent not-italic text-[1.8rem] md:text-[2.2rem] leading-none align-[-0.12em] text-gold font-bold">
              Individual capability
            </em>{" "}
            and{" "}
            <em className="type-display-accent not-italic text-[1.8rem] md:text-[2.2rem] leading-none align-[-0.12em] text-gold font-bold">
              Organizational reality.
            </em>
          </p>
        </Reveal>

        {/* Key positioning quote */}
        <div className="relative z-20 mt-16 md:mt-20 flex justify-center">
          <Reveal variant="fade-in" duration="slow">
            <blockquote
              className="relative px-8 py-10 md:px-14 md:py-12 max-w-2xl text-center"
              style={{
                borderLeft: "2px solid var(--gold)",
                borderRight: "2px solid var(--gold)",
                background: "color-mix(in oklch, var(--cream) 55%, transparent)",
              }}
            >
              <span aria-hidden className="absolute left-6 -top-5 font-serif font-bold text-[5rem] leading-none text-gold">"</span>
              <p className="relative font-serif italic type-lead text-gold">
                You don&apos;t need to change who you are.<br />
                You need a strategy that works<br />
                in the environment you&apos;re operating in.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- TWO PATHWAYS ---------------- */

function TwoPathwaysSection() {
  return (
    <Section as="section" surface="cream" pad="none" className="relative overflow-hidden section-pad-top-major section-pad-bottom-major">
      <Container className="relative before:pointer-events-none before:absolute before:-right-44 before:-top-20 before:h-[440px] before:w-[440px] before:rounded-full before:border before:border-[color-mix(in_oklch,var(--gold)_18%,transparent)]">
        <Reveal variant="slide-right">
          <h2 className="type-h1 relative z-10 max-w-4xl text-[clamp(3rem,6vw,5.6rem)] leading-[0.9]">
            Choose the pathway that{" "}
            <em className="not-italic italic font-light text-gold">
              fits your context.
            </em>
          </h2>
        </Reveal>

        <div className="relative z-10 mt-[var(--space-stack-lg)] grid gap-8 md:grid-cols-2 md:gap-0 md:items-start">
          <Reveal as="article" variant="fade-up" className="h-full md:mr-[-2rem] md:mt-12">
            <EditorialCard variant="rail" className="p-8 md:p-10 md:pr-14 flex flex-col h-full min-h-[390px] bg-[color-mix(in_oklch,var(--background)_78%,transparent)] shadow-[var(--shadow-soft)]">
              <div className="eyebrow text-copy-muted">
                For Individuals
              </div>
              <h3 className="type-h2 mt-5 leading-tight">
                Accelerate Your Leadership{" "}
                <em className="not-italic italic font-light text-gold">
                  Trajectory
                </em>
              </h3>
              <Hairline tone="gold" className="my-6" />
              <ul className="space-y-2.5 type-body text-copy flex-1">
                <li className="flex gap-3"><span className="text-gold">—</span> ELEVATE™ Strategic Advancement Program</li>
                <li className="flex gap-3"><span className="text-gold">—</span> Lead &amp; Thrive Through Motherhood™</li>
              </ul>
              <Link
                to="/contact"
                className="mt-8 self-start inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] shadow-[var(--shadow-soft)] hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Strategic Clarity Call <span aria-hidden>→</span>
              </Link>
            </EditorialCard>
          </Reveal>

          <Reveal delay={120} as="article" variant="fade-up" className="h-full relative z-20 md:ml-[-2rem]">
            <EditorialCard variant="dark" accent className="p-8 md:p-10 flex flex-col h-full min-h-[420px] shadow-[0_30px_80px_color-mix(in_oklch,var(--charcoal)_20%,transparent)] md:rotate-[0.75deg]">
              <div className="eyebrow text-background/65">
                For Organizations
              </div>
              <h3 className="type-h2 mt-5 leading-tight text-background">
                Develop &amp; Retain High-Potential{" "}
                <em className="not-italic italic font-light text-gold">
                  Women
                </em>
              </h3>
              <Hairline className="my-6 bg-background/20" />
              <ul className="space-y-2.5 text-[14.5px] text-background/85 flex-1">
                <li className="flex gap-3"><span className="text-gold">—</span> Sponsored 1:1 Coaching</li>
                <li className="flex gap-3"><span className="text-gold">—</span> Leadership Workshops</li>
                <li className="flex gap-3"><span className="text-gold">—</span> Strengths-Based Team Development</li>
                <li className="flex gap-3"><span className="text-gold">—</span> DEI Consultancy</li>
              </ul>
              <Link
                to="/organizations"
                className="mt-8 self-start inline-flex items-center gap-2 border border-background/55 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-background hover:bg-background hover:text-foreground transition-colors"
              >
                Schedule an Organizational Consultation <span aria-hidden>→</span>
              </Link>
            </EditorialCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- CREDIBILITY ---------------- */

function CredibilitySection() {
  const credentials = [
    { logo: icfLogo, label: "ICF ACC Certified", scale: 1.76 },
    { logo: gallupLogo, label: "Gallup Certified CliftonStrengths Coach", scale: 1.5 },
    { logo: cdpLogo, label: "Certified Diversity Professional (CDP®)", scale: 1.62 },
    { logo: inseadLogo, label: "INSEAD-Trained Gender Specialist", scale: 1.53 },
  ];

  return (
    <section className="bg-background border-b border-[var(--hairline)]/70 pt-14 md:pt-20 pb-6 md:pb-8">
      <Container>
        <Reveal>
          <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground max-w-4xl">
            Grounded in coaching, research, and systems insight.
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((credential, i) => (
            <Reveal key={credential.label} delay={i * 70} as="article">
              <div className="border-t border-[var(--hairline)] pt-6">
                <div className="flex h-24 md:h-32 items-center justify-center">
                  <img
                    src={credential.logo}
                    alt={credential.label}
                    loading="lazy"
                    className="h-14 md:h-16 w-auto max-w-[260px] object-contain"
                    style={{ transform: `scale(${credential.scale})`, transformOrigin: "center" }}
                  />
                </div>
                <h3 className="mt-4 mx-auto max-w-[15rem] text-center font-serif text-[18px] md:text-[20px] leading-snug text-foreground/85">
                  {credential.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

function TestimonialsSection() {
  const placeholders = [
    {
      quote:
        "Client testimonial to be added — results-focused, specific outcome, name and title below.",
      name: "Client Name",
      title: "Senior Director, [Company]",
    },
    {
      quote:
        "Client testimonial to be added — results-focused, specific outcome, name and title below.",
      name: "Client Name",
      title: "VP of Operations, [Company]",
    },
    {
      quote:
        "Client testimonial to be added — results-focused, specific outcome, name and title below.",
      name: "Client Name",
      title: "Head of People & Culture, [Company]",
    },
  ];

  return (
    <Section
      as="section"
      surface="warm"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
    >
      {/* Blush decorative circle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full opacity-20"
        style={{ background: "var(--blush)" }}
      />
      <Container className="relative">
        <Reveal variant="slide-right">
          <div className="flex items-center gap-5 mb-12">
            <span className="h-px w-10" style={{ background: "var(--gold)" }} />
            <span className="eyebrow" style={{ color: "var(--gold)", letterSpacing: "0.22em" }}>
              Client Results
            </span>
          </div>
          <h2 className="leading-[1.05] text-[clamp(2rem,4.5vw,3rem)] max-w-2xl">
            <span className="voice-serif-light text-foreground">What clients </span>
            <span className="voice-serif-italic">say.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {placeholders.map((t, i) => (
            <Reveal key={i} delay={i * 80} variant="fade-up" as="article">
              <div
                className="relative h-full flex flex-col p-8 md:p-10"
                style={{
                  background:
                    i === 1
                      ? "color-mix(in oklch, var(--blush-subtle) 70%, var(--offwhite))"
                      : "color-mix(in oklch, var(--offwhite) 90%, var(--cream))",
                  borderTop: `2px solid ${i === 1 ? "var(--blush)" : "var(--gold)"}`,
                }}
              >
                {/* Open quote */}
                <span
                  aria-hidden
                  className="font-serif font-light leading-none select-none"
                  style={{
                    fontSize: "4.5rem",
                    lineHeight: 1,
                    color:
                      i === 1
                        ? "color-mix(in oklch, var(--blush) 55%, transparent)"
                        : "color-mix(in oklch, var(--gold) 40%, transparent)",
                    marginTop: "-0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  "
                </span>
                <p className="font-serif italic text-[15px] md:text-[16px] leading-relaxed text-foreground/80 flex-1">
                  {t.quote}
                </p>
                <div className="mt-8 pt-6 border-t border-[var(--hairline)]/60">
                  <div className="font-serif text-[15px] text-foreground">{t.name}</div>
                  <div className="type-micro mt-1">{t.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note for developer — remove before go-live */}
        <p className="mt-8 type-micro text-center opacity-60 italic">
          Testimonial content to be supplied by client prior to launch.
        </p>
      </Container>
    </Section>
  );
}

/* ---------------- FOUNDER ---------------- */

function FounderSection() {
  return (
    <Section as="section" surface="cream" pad="none" className="relative z-10 overflow-hidden border-t border-[color-mix(in_oklch,var(--blush)_22%,transparent)]" style={{ background: "color-mix(in oklch, var(--blush-subtle) 55%, var(--cream))" }}>
      <Container className="relative section-pad-minor pb-0 md:pb-0">
        <div className="grid min-h-[300px] gap-4 md:min-h-[360px] md:grid-cols-12 md:items-center lg:min-h-[420px]">
          <div className="md:col-span-5">
            <Reveal variant="scale" duration="slow">
              <div className="relative h-[300px] md:h-[360px] lg:h-[420px] overflow-visible">
                <div aria-hidden className="absolute bottom-0 left-[8%] h-[84%] w-[78%] rounded-t-[48%] border border-[color-mix(in_oklch,var(--gold)_30%,transparent)] bg-[color-mix(in_oklch,var(--gold-subtle)_42%,var(--cream))]" />
                <img
                  src={founderPortrait}
                  alt="Amna Imran — Founder"
                  className="absolute bottom-[-55px] left-0 h-[660px] w-auto object-contain object-bottom select-none md:bottom-[-80px] md:h-[840px] lg:bottom-[-110px] lg:h-[990px]"
                  draggable={false}
                />
              </div>
            </Reveal>
          </div>
          <div className="relative z-20 pb-8 md:col-span-7 md:pb-12 md:pl-8 lg:pb-16 lg:pl-12">
            <Reveal variant="slide-left">
              <h2 className="type-h1 text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.85]">
                <em className="not-italic italic font-light text-gold">
                  Amna Imran.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={100} variant="fade-in">
              <p className="type-body mt-8 max-w-xl border-l border-[color-mix(in_oklch,var(--gold)_42%,transparent)] pl-7 text-copy">
                Gender-informed leadership strategist helping high-potential women progress without
                burnout or compromise.
              </p>
            </Reveal>
            <Reveal delay={180} variant="fade-up" duration="fast">
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 border-b border-[var(--gold)] pb-1 text-[11px] uppercase tracking-[0.22em] text-foreground hover:border-foreground transition-colors"
              >
                Read the Founder Story <span aria-hidden>→</span>
              </Link>
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
    <Section as="section" surface="default" pad="none" className="relative overflow-hidden bg-foreground text-background before:pointer-events-none before:absolute before:-right-24 before:-top-44 before:h-[520px] before:w-[520px] before:rounded-full before:border before:border-background/10">
      {/* Blush accent — a warm counterpoint to the dark panel */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-1" style={{ background: "linear-gradient(to bottom, transparent, var(--blush) 40%, var(--blush-deep) 60%, transparent)" }} />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full opacity-10" style={{ background: "var(--blush)" }} />
      <Container className="section-pad-major relative">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <Reveal variant="slide-right">
              <h2 className="type-h1 text-[clamp(3rem,7vw,6.5rem)] leading-[0.86] text-background">
                Ready to move forward{" "}
                <em className="not-italic font-light italic text-gold">
                  strategically?
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} variant="fade-up" className="md:col-span-4 flex flex-col gap-4 md:border-l md:border-background/20 md:pl-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-between gap-2 bg-background text-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] shadow-[var(--shadow-soft)] hover:bg-[var(--cream)] transition-colors"
            >
              Book a Strategic Clarity Call <span aria-hidden>→</span>
            </Link>
            <Link
              to="/organizations"
              className="inline-flex items-center justify-between gap-2 border border-background/50 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-background hover:bg-background hover:text-foreground transition-colors"
            >
              For Corporate &amp; HR Enquiries <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
