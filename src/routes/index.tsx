import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container, Reveal, Section, SectionQuote, SectionSeam, ParallaxLayer } from "@/components/site/primitives";
import { Frown, HelpCircle, Scale, Unplug, History, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroCutout from "@/assets/amna-support.png";
import approachPortrait from "@/assets/amna-approach.png";
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

const PSYCH_IMPACT = [
  { t: "Exhausted by competing demands", Icon: Unplug },
  { t: "Torn between self and expectations", Icon: Scale },
  { t: "Inadequate despite results", Icon: Frown },
  { t: "Unsure how to advocate", Icon: HelpCircle },
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
      <HeroIntro />
      <CredentialsStrip />
      <HighPerformanceSection />
      <InternalNarrativesSection />
      <ProgressNarrativeSection />
      <MotherhoodSection />
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
        minHeight: "640px",
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
            fontSize: "clamp(4.5rem, 20vw, 16rem)",
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
            fontSize: "clamp(3.75rem, 18vw, 14rem)",
            letterSpacing: "0.12em",
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
            fontSize: "clamp(3.75rem, 18vw, 14rem)",
            letterSpacing: "0.12em",
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

      {/* Standing portrait — full banner height */}
      <div
        className="hero-enter absolute inset-0 z-[2] flex items-end justify-center pointer-events-none overflow-hidden"
        style={{ animationDelay: "220ms" }}
      >
        <img
          src={heroCutout}
          alt="Amna Imran — Executive Coach"
          draggable={false}
          className="select-none object-contain object-bottom"
          style={{
            height: "100%",
            width: "auto",
            maxWidth: "100vw",
            transform: "scale(1.12)",
            transformOrigin: "bottom center",
            filter: "drop-shadow(0 16px 40px color-mix(in oklch, var(--charcoal) 12%, transparent))",
          }}
        />
      </div>

      <div
        aria-hidden
        className="hero-enter-soft pointer-events-none absolute inset-x-0 bottom-8 z-[4] flex justify-center"
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
      <Container className="py-14 md:py-20">
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
            <p
              className="mx-auto mt-7 max-w-2xl font-light leading-relaxed text-foreground/75"
              style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)" }}
            >
              I help ambitious women navigate bias, strengthen executive presence, and
              accelerate their careers using evidence-based gender strategy, strengths
              science, and systemic insights — not just anecdotal advice.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={220} duration="fast">
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-x-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-foreground/90 hover:-translate-y-0.5 px-7 py-4"
              >
                Book a Strategic Clarity Call <span aria-hidden>→</span>
              </Link>
              <Link
                to="/organizations"
                className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:text-[var(--gold)] border-b border-[var(--gold)] pb-0.5"
              >
                For Corporate &amp; HR Enquiries <span aria-hidden>→</span>
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
          <div className="flex items-center gap-4 mb-8 md:mb-10">
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
                className={`flex flex-col items-center text-center gap-5 px-4 md:px-8 ${
                  i > 0 ? "md:border-l" : ""
                }`}
                style={i > 0 ? { borderColor: "color-mix(in oklch, var(--gold) 8%, transparent)" } : {}}
              >
                <div className="h-20 md:h-24 flex items-center justify-center w-full">
                  <img
                    src={c.logo}
                    alt={c.label}
                    loading="lazy"
                    className="object-contain h-14 md:h-16 w-auto max-w-[220px]"
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

        {/* Split: numbered formula vs narrative — intentional asymmetry */}
        <div className="mt-14 md:mt-20 grid gap-14 lg:grid-cols-12 lg:gap-10 lg:items-start">
          {/* Formula — large numerals, hairline spine */}
          <Reveal variant="fade-up" className="lg:col-span-5">
            <div className="relative">
              <p className="eyebrow text-gold mb-8">The traditional formula</p>
              <div
                aria-hidden
                className="absolute left-[1.15rem] top-14 bottom-2 w-px bg-gradient-to-b from-[var(--gold)] via-[color-mix(in_oklch,var(--gold)_40%,transparent)] to-transparent"
              />
              <ol className="relative space-y-0">
                {TRADITIONAL.map((t, i) => (
                  <li key={t} className="relative flex gap-5 pb-8 last:pb-0">
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--warm-cream)] font-serif italic text-[15px] text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1.5 font-serif text-[clamp(1.15rem,1.6vw,1.45rem)] leading-snug text-foreground">
                      {t}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Stalls — oversized word + body */}
          <Reveal variant="fade-up" delay={100} className="lg:col-span-7 lg:pl-8 xl:pl-14">
            <h3 className="font-serif text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.025em] text-foreground">
              Yet progression often
              <span className="mt-1 block type-display-accent text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.85] text-gold-warm">
                stalls
              </span>
            </h3>
            <div className="mt-8 max-w-xl space-y-5 type-body text-copy md:text-[1.05em]">
              <p>
                — sometimes subtly, sometimes abruptly. Research across organizations shows that
                advancement depends on far more than performance alone. Factors such as{" "}
                <strong className="font-medium text-foreground">
                  visibility, sponsorship, perceived leadership presence, and alignment with
                  informal power structures
                </strong>{" "}
                play decisive roles.
              </p>
              <p>
                Without visibility into these patterns, stalled progress can feel personal rather
                than systemic — leading many capable professionals to work harder while seeing
                diminishing returns.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- COMMON INTERNAL NARRATIVES ---------------- */

function InternalNarrativesSection() {
  const quotes = [
    "I need one more qualification.",
    "Maybe I'm not confident enough.",
    "Others seem to be doing something I'm not.",
    "Perhaps I'm not leadership material after all.",
  ];

  return (
    <Section
      as="section"
      surface="cream"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
      style={{ background: "color-mix(in oklch, var(--cream) 82%, var(--background))" }}
    >
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
                <Reveal key={q} delay={i * 60} variant="fade-up" duration="fast">
                  <li
                    className={`relative py-7 border-b border-[color-mix(in_oklch,var(--gold)_18%,transparent)] last:border-b-0 sm:border-b-0 ${
                      i < 2 ? "sm:border-b sm:border-[color-mix(in_oklch,var(--gold)_22%,transparent)]" : ""
                    } ${
                      i % 2 === 0
                        ? "sm:pr-6 sm:border-r sm:border-[color-mix(in_oklch,var(--gold)_18%,transparent)]"
                        : "sm:pl-6"
                    }`}
                  >
                    <span className="eyebrow text-gold/80 mb-4 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <blockquote>
                      <p className="font-serif italic text-[clamp(1.2rem,2vw,1.55rem)] leading-[1.3] tracking-[-0.01em] text-foreground">
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

        <Reveal variant="fade-in" duration="slow" delay={100} className="mt-16 md:mt-20">
          <SectionQuote>
            The challenge is not a lack of{" "}
            <em className="italic text-gold-warm">ambition or ability</em>
            <span className="mt-3 block font-light text-[0.72em] leading-[1.4] text-copy">
              — but a lack of access to the unwritten rules of{" "}
              <em className="type-display-accent not-italic text-gold-warm text-[1.15em]">
                advancement
              </em>
              .
            </span>
          </SectionQuote>
        </Reveal>
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
      surface="warm"
      pad="none"
      className="relative z-10 overflow-hidden section-pad-top-major section-pad-bottom-major"
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

        {/* Gaps — same cream surface; hierarchy via type only */}
        <div className="relative mt-14 md:mt-20">
          <Reveal variant="fade-in">
            <div className="mb-10 md:mb-14 max-w-2xl">
              <p className="eyebrow text-gold mb-3">What research keeps finding</p>
              <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] text-foreground">
                Eight persistent{" "}
                <em className="type-display-accent not-italic text-gold-warm">gaps</em>
              </h3>
            </div>
          </Reveal>

          <ol className="grid sm:grid-cols-2 sm:gap-x-12 lg:gap-x-16">
            {gaps.map((g, i) => (
              <Reveal key={g} delay={i * 40} variant="fade-up" duration="fast" as="li" className="h-full">
                <div className="grid h-full grid-cols-[2.75rem_1fr] gap-x-4 border-t border-[color-mix(in_oklch,var(--gold)_22%,transparent)] py-7 md:grid-cols-[3rem_1fr] md:gap-x-5 md:py-8">
                  <span
                    aria-hidden
                    className="pt-0.5 font-serif text-[1.35rem] leading-none tracking-tight text-gold-warm md:text-[1.55rem]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-[clamp(1.05rem,1.6vw,1.3rem)] leading-snug text-foreground">
                    {g}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="fade-in" duration="slow" delay={100} className="mt-12 md:mt-16">
            <SectionQuote>
              These dynamics are rarely{" "}
              <em className="italic text-gold-warm">explicit or intentional</em>
              <span className="mt-3 block font-light text-[0.72em] leading-[1.4] text-copy">
                — they are embedded in everyday organizational processes: performance reviews,
                leadership selection, project allocation, and informal influence channels.
              </span>
            </SectionQuote>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- MOTHERHOOD + PSYCHOLOGICAL IMPACT + WAY FORWARD ---------------- */

function MotherhoodSection() {
  const [active, setActive] = useState(0);

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
              <p className="max-w-sm text-[14px] md:text-[15px] leading-relaxed text-copy font-light">
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

            <Reveal delay={80} variant="fade-up">
              <ul className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3 sm:items-start">
                {PSYCH_IMPACT.map(({ t, Icon }) => (
                  <li
                    key={t}
                    className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[color-mix(in_oklch,var(--gold)_22%,transparent)] bg-[color-mix(in_oklch,var(--background)_70%,transparent)] px-3.5 py-2 text-[12px] leading-snug text-copy md:text-[13px]"
                  >
                    <Icon size={13} strokeWidth={1.75} className="shrink-0 text-gold-deep" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal variant="fade-in" duration="slow" className="mt-14 md:mt-20">
            <SectionQuote>
              Over time, this leads not to quitting ambition — but to{" "}
              <em className="italic text-gold-warm">disengaging from</em>{" "}
              <em className="type-display-accent not-italic text-gold-warm">
                a game whose rules were never explained.
              </em>
            </SectionQuote>
          </Reveal>
        </div>

        {/* Way Forward — continues the same chapter, same surface */}
        <div className="relative mt-16 md:mt-24">
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

          <div className="relative z-10 mt-14 md:mt-20 grid gap-10 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-24">
              <Reveal variant="scale" duration="slow">
                <div className="relative min-h-[300px] border-l border-[var(--gold)] p-8 md:p-10 md:pr-14">
                  <div className="font-serif italic text-[clamp(3.7rem,8vw,7rem)] leading-none text-[color-mix(in_oklch,var(--gold)_36%,transparent)]">
                    {String(active + 1).padStart(2, "0")} / 06
                  </div>
                  <h3 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] relative -mt-2 ml-5 leading-[1.05] md:ml-10 text-foreground">
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
                          type="button"
                          onMouseEnter={() => setActive(i)}
                          onFocus={() => setActive(i)}
                          onClick={() => setActive(i)}
                          className={`group w-full text-left flex items-center gap-6 md:gap-7 py-4 pr-4 pl-0 transition-all duration-300 border-b ${
                            isActive
                              ? "border-[var(--gold)] md:translate-x-4"
                              : "border-[color-mix(in_oklch,var(--hairline)_45%,transparent)] hover:border-[color-mix(in_oklch,var(--gold)_55%,transparent)] hover:translate-x-2"
                          }`}
                        >
                          <span
                            className={`relative z-10 shrink-0 inline-flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full border border-[var(--gold)] text-[15px] font-serif italic transition-colors ${
                              isActive
                                ? "text-background bg-[var(--gold)]"
                                : "bg-transparent text-copy-muted"
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
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- HOW I SUPPORT ---------------- */

/* ---------------- HOW I SUPPORT — magazine spread ---------------- */

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

        <div className="mt-10 md:mt-14 grid grid-cols-1 gap-x-10 lg:gap-x-14 md:grid-cols-2 md:grid-rows-[auto_1fr_auto]">
          {/* ELEVATE — title */}
          <Reveal variant="fade-up" className="md:col-start-1 md:row-start-1">
            <p className="font-serif text-[clamp(2.2rem,3.5vw,3.25rem)] leading-none text-gold-warm text-center md:text-left">
              ELEVATE<sup className="text-lg align-super">™</sup>
            </p>
            <p className="mt-3 eyebrow text-foreground text-center md:text-left">
              Strategic Advancement Program
            </p>
            <div className="mt-2 mb-6 mx-auto md:mx-0 h-px w-16 bg-[var(--gold)]" />
          </Reveal>

          {/* ELEVATE — body */}
          <Reveal variant="fade-up" className="h-full md:col-start-1 md:row-start-2">
            <div
              className="h-full space-y-4 p-7 md:p-8 text-[15px] md:text-[16px] leading-[1.55] text-background"
              style={{ background: "var(--foreground)" }}
            >
              <p>
                A structured 6 month engagement designed to help{" "}
                <em className="italic text-gold-warm">high-potential women</em> translate
                capability into progression within complex organizational environments.
              </p>
              <p>
                Through the{" "}
                <em className="italic text-gold-warm">ELEVATE Framework</em>, we work
                systematically across{" "}
                <em className="italic text-gold-warm">
                  leadership presence, visibility, influence, advancement strategy, and long-term
                  sustainability
                </em>{" "}
                — equipping you to move forward with clarity, confidence, and strategic intent.
              </p>
              <p className="text-background/80">
                Whether self-funded or sponsored by your organization, the program provides a clear
                roadmap for advancing without burnout or compromise.
              </p>
            </div>
          </Reveal>

          {/* ELEVATE — CTA */}
          <Reveal variant="fade-up" className="md:col-start-1 md:row-start-3">
            <Link
              to="/work-with-me"
              className="mt-5 mb-12 inline-flex items-center gap-2 font-serif text-[17px] text-foreground border-b border-[color-mix(in_oklch,var(--gold)_55%,transparent)] pb-0.5 hover:border-foreground transition-colors md:mb-0"
            >
              Find out more <span aria-hidden>→</span>
            </Link>
          </Reveal>

          {/* Motherhood — title */}
          <Reveal delay={100} variant="fade-up" className="md:col-start-2 md:row-start-1">
            <p className="font-serif text-[clamp(1.75rem,2.8vw,2.55rem)] leading-[1.05] text-gold-warm text-center md:text-left">
              Lead &amp; Thrive Through Motherhood<sup className="text-lg align-super">™</sup>
            </p>
            <p className="mt-3 eyebrow text-foreground text-center md:text-left">
              Evidence-Informed Coaching Program
            </p>
            <div className="mt-2 mb-6 mx-auto md:mx-0 h-px w-16 bg-[var(--gold)]" />
          </Reveal>

          {/* Motherhood — body */}
          <Reveal delay={100} variant="fade-up" className="h-full md:col-start-2 md:row-start-2">
            <div
              className="h-full space-y-4 p-7 md:p-8 text-[15px] md:text-[16px] leading-[1.55]"
              style={{ background: "color-mix(in oklch, var(--gold) 88%, var(--foreground))" }}
            >
              <p className="text-background">
                Support high-potential women through the{" "}
                <em className="italic text-foreground">profound transition into working parenthood.</em>
              </p>
              <p className="text-background">
                Grounded in research on the motherhood penalty and organizational dynamics, this
                program helps protect{" "}
                <em className="italic text-foreground">leadership trajectory</em> while navigating
                the{" "}
                <em className="italic text-foreground">
                  identity, visibility, and confidence shifts
                </em>{" "}
                that often accompany maternity leave and return-to-work.
              </p>
              <p className="text-background">
                Rather than asking women to scale back ambition or overcompensate, we focus on{" "}
                <em className="italic text-foreground">
                  strategic positioning, stakeholder alignment, and sustainable leadership
                </em>{" "}
                — so motherhood becomes an integrated{" "}
                <em className="italic text-foreground">chapter of growth</em>.
              </p>
            </div>
          </Reveal>

          {/* Motherhood — CTA */}
          <Reveal delay={100} variant="fade-up" className="md:col-start-2 md:row-start-3">
            <Link
              to="/work-with-me"
              className="mt-5 inline-flex items-center gap-2 font-serif text-[17px] text-foreground border-b border-[color-mix(in_oklch,var(--gold)_55%,transparent)] pb-0.5 hover:border-foreground transition-colors"
            >
              Find out more <span aria-hidden>→</span>
            </Link>
          </Reveal>
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

  const forList = [
    "Evidence-Based",
    "System-Aware",
    "Strengths-Led",
    "Advancement-Focused",
  ];
  const againstList = [
    "Anecdotal",
    "System-Blaming",
    "Deficit-Focused",
    "Just Insight-Focused",
  ];

  return (
    <Section
      as="section"
      surface="blush"
      pad="none"
      className="relative overflow-hidden section-pad-top-major section-pad-bottom-major"
      style={{ background: "color-mix(in oklch, var(--blush-subtle) 58%, var(--warm-cream))" }}
    >
      <Container className="relative">
        <div className="relative lg:min-h-[640px] xl:min-h-[720px]">
          {/* Heading + lead */}
          <div className="relative z-20 max-w-xl lg:max-w-[min(36rem,52%)]">
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
              <p className="mt-8 type-body text-copy md:border-l md:border-[color-mix(in_oklch,var(--gold)_38%,transparent)] md:pl-8">
                Most coaching focuses on personal development in isolation — confidence, mindset, or
                communication skills. While these matter, they do not fully explain why highly capable
                women often struggle to translate performance into progression.
              </p>
            </Reveal>
          </div>

          {/* Portrait — after lead on mobile; absolute right on desktop */}
          <div className="relative z-10 mt-10 flex justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[48%] lg:justify-end xl:w-[50%] pointer-events-none">
            <div className="relative self-end">
              <div
                aria-hidden
                className="absolute bottom-3 left-1/2 z-0 h-10 w-[55%] -translate-x-1/2 rounded-full bg-black/12 blur-2xl"
              />
              <Reveal variant="scale" duration="slow">
                <img
                  src={approachPortrait}
                  alt="Amna Imran"
                  draggable={false}
                  className="relative z-10 mx-auto h-[360px] w-auto max-w-none select-none object-contain object-bottom sm:h-[440px] md:h-[500px] lg:h-[640px] xl:h-[720px]"
                />
              </Reveal>
            </div>
          </div>

          {/* Offers + Vs — sit in left column under lead */}
          <div className="relative z-20 mt-12 md:mt-14 max-w-xl lg:max-w-[min(36rem,52%)]">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
              {offers.map((offer, i) => (
                <Reveal key={offer.title} delay={100 + i * 70} variant="fade-up">
                  <div
                    className={
                      i > 0
                        ? "sm:border-l sm:border-[color-mix(in_oklch,var(--gold)_28%,transparent)] sm:pl-5"
                        : ""
                    }
                  >
                    <h3 className="whitespace-nowrap font-serif font-semibold text-[clamp(0.95rem,1.2vw,1.15rem)] leading-snug text-foreground">
                      {offer.title}
                    </h3>
                    <p className="mt-3 type-micro text-copy-muted">{offer.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180} variant="fade-up">
              <div className="mt-12 md:mt-14 grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
                <ul className="space-y-2.5 text-right">
                  {forList.map((item) => (
                    <li
                      key={item}
                      className="font-serif text-[15px] md:text-[17px] leading-snug text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span
                  aria-hidden
                  className="type-display-accent not-italic text-[clamp(2.4rem,5vw,3.5rem)] leading-none text-gold-warm px-1"
                >
                  Vs
                </span>
                <ul className="space-y-2.5 text-left">
                  {againstList.map((item) => (
                    <li
                      key={item}
                      className="font-serif text-[15px] md:text-[17px] leading-snug text-copy-muted/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/work-with-me"
                className="mt-8 inline-flex items-center gap-2 font-serif text-[16px] md:text-[17px] text-foreground border-b border-[color-mix(in_oklch,var(--gold)_55%,transparent)] pb-0.5 hover:border-foreground transition-colors pointer-events-auto"
              >
                Designed for Real-World Complexity <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120} variant="fade-up">
          <p className="type-lead mt-14 md:mt-20 max-w-3xl text-center mx-auto text-foreground">
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

        <div className="relative z-20 mt-12 md:mt-16 flex justify-center">
          <Reveal variant="fade-in" duration="slow">
            <SectionQuote>
              <em className="type-display-accent not-italic italic text-gold-warm">
                You don&apos;t need to change who you are.
              </em>
              <span className="mt-3 block font-light not-italic text-[0.72em] leading-[1.4] text-copy">
                You need a strategy that works
                <br />
                in the environment you&apos;re operating in.
              </span>
            </SectionQuote>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- TWO PATHWAYS ---------------- */

function TwoPathwaysSection() {
  const individualPrograms = [
    "ELEVATE™ Strategic Advancement Program",
    "Lead & Thrive Through Motherhood™",
  ];
  const orgPrograms = [
    "Sponsored 1:1 Coaching",
    "Leadership Workshops",
    "Strengths-Based Team Development",
    "DEI Consultancy",
  ];

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

        <div className="relative mt-[60px] grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-0">
          {/* Individuals */}
          <Reveal
            as="article"
            variant="fade-up"
            className="relative z-10 flex flex-col lg:col-span-7 lg:pr-10"
          >
            <div
              className="relative flex h-full flex-col border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)] p-8 md:p-10 lg:pr-16"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute right-6 top-4 select-none font-serif text-[clamp(4.5rem,10vw,7.5rem)] leading-none text-[color-mix(in_oklch,var(--gold)_12%,transparent)]"
              >
                01
              </span>
              <p className="eyebrow text-copy-muted relative z-10">For Individuals</p>
              <h3 className="relative z-10 mt-5 max-w-md font-serif font-light text-[clamp(1.75rem,3vw,2.65rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
                Accelerate Your Leadership{" "}
                <em className="type-display-accent not-italic italic text-gold-warm">Trajectory</em>
              </h3>
              <div className="relative z-10 my-7 h-px w-16 bg-[var(--gold)]" />
              <ul className="relative z-10 flex-1 space-y-0">
                {individualPrograms.map((item) => (
                  <li
                    key={item}
                    className="border-t border-[color-mix(in_oklch,var(--gold)_18%,transparent)] py-3.5 font-serif text-[15px] md:text-[16px] leading-snug text-copy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="relative z-10 mt-8 self-start inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] transition-all duration-300 hover:bg-foreground/90 hover:-translate-y-0.5"
              >
                Book a Strategic Clarity Call <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          {/* Organizations — overlaps, sits higher */}
          <Reveal
            delay={120}
            as="article"
            variant="fade-up"
            className="relative z-20 flex flex-col lg:col-span-6 lg:col-start-7 lg:-ml-6 lg:-mt-6 xl:-ml-10"
          >
            <div
              className="relative flex h-full flex-col bg-foreground p-8 text-background md:p-10"
              style={{ boxShadow: "0 28px 70px color-mix(in oklch, var(--charcoal) 18%, transparent)" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-8 h-10 w-1 bg-[var(--gold)]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-6 top-4 select-none font-serif text-[clamp(4.5rem,10vw,7.5rem)] leading-none text-background/10"
              >
                02
              </span>
              <p className="eyebrow relative z-10 text-gold">For Organizations</p>
              <h3 className="relative z-10 mt-5 max-w-md font-serif font-light text-[clamp(1.75rem,3vw,2.65rem)] leading-[1.05] tracking-[-0.02em] text-background">
                Develop &amp; Retain High-Potential{" "}
                <em className="type-display-accent not-italic italic text-gold-warm">Women</em>
              </h3>
              <div className="relative z-10 my-7 h-px w-16 bg-[var(--gold)]" />
              <ul className="relative z-10 flex-1 space-y-0">
                {orgPrograms.map((item) => (
                  <li
                    key={item}
                    className="border-t border-background/15 py-3.5 font-serif text-[15px] md:text-[16px] leading-snug text-background/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/organizations"
                className="relative z-10 mt-8 self-start inline-flex items-center gap-2 border border-background/55 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-background hover:text-foreground"
              >
                Schedule an Organizational Consultation <span aria-hidden>→</span>
              </Link>
            </div>
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
          {/* Copy — vertically centered with portrait */}
          <div className="relative z-20 py-8 md:col-span-5 md:py-0 lg:col-span-5 md:pr-0">
            <Reveal variant="fade-up">
              <p className="eyebrow text-gold mb-3">Founder</p>
              <h2 className="font-serif font-semibold text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.9] tracking-[-0.035em] text-foreground">
                Amna
                <br />
                <em className="type-display-accent not-italic font-light italic text-[clamp(2.9rem,6.5vw,5.25rem)] leading-[0.85] text-gold-warm">
                  Imran.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={80} variant="fade-up">
              <p className="mt-5 max-w-sm type-body text-copy md:border-l md:border-[color-mix(in_oklch,var(--gold)_38%,transparent)] md:pl-8">
                Gender-informed leadership strategist helping high-potential women progress without
                burnout or compromise.
              </p>
            </Reveal>

            <Reveal delay={140} variant="fade-up" duration="fast">
              <Link
                to="/about"
                className="mt-5 inline-flex items-center gap-2 border-b border-[var(--gold)] pb-1 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground"
              >
                Read the Founder Story <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          {/* Portrait — pulled toward copy, flush bottom */}
          <div className="relative z-10 h-[360px] sm:h-[420px] md:col-span-7 md:col-start-6 md:h-[480px] lg:h-[520px]">
            <Reveal variant="scale" duration="slow" className="h-full">
              <div className="relative h-full overflow-hidden">
                <img
                  src={founderPortrait}
                  alt="Amna Imran — Founder"
                  className="absolute bottom-0 left-1/2 h-[125%] w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom md:left-0 md:translate-x-0"
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
            <p className="mx-auto mt-6 max-w-md type-body text-background/70">
              Whether you are advancing your own leadership or building pathways for women in your
              organization — the work starts with a clear conversation.
            </p>
          </Reveal>

          <Reveal delay={100} variant="fade-up" className="mt-10 w-full max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-background px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-foreground transition-all duration-300 hover:bg-[var(--cream)] hover:-translate-y-0.5"
              >
                Book a Clarity Call <span aria-hidden>→</span>
              </Link>
              <Link
                to="/organizations"
                className="inline-flex flex-1 items-center justify-center gap-2 border border-background/50 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-background hover:text-foreground"
              >
                Corporate &amp; HR <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
