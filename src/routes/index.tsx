import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container, Hairline, Reveal } from "@/components/site/primitives";
import { Frown, HelpCircle, Scale, Unplug, History, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroPortrait from "@/assets/HERO UPDATED.png";
import supportPortrait from "@/assets/amna-support.png";
import approachPortrait from "@/assets/amna-approach.png";
import founderPortrait from "@/assets/amna-founder.png";
import motherhoodTitleBackground from "@/assets/dark brown background.png";
import icfLogo from "@/assets/icf-acc.png";
import gallupLogo from "@/assets/gallup-strengths.png";
import cdpLogo from "@/assets/cdp.png";
import inseadLogo from "@/assets/insead.png";

const GOLD = "#B89A6A";

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

const HIDDEN = [
  {
    tag: "Pipeline",
    t: "THE LEADERSHIP PIPELINE LEAKS AT THE TOP",
    d: "Women remain underrepresented in senior leadership despite strong entry-level participation. Promotion decisions often rely on perceived leadership potential — a measure that can systematically disadvantage women.",
  },
  {
    tag: "Double standard",
    t: "DIFFERENT RULES, DIFFERENT OUTCOMES",
    d: "Women are evaluated on past performance while men are more often promoted on potential. Assertive behaviour that earns men respect can be penalised in women.",
  },
  {
    tag: "Culture",
    t: "THE MOULD WAS NEVER MADE FOR THEM",
    d: "Leadership norms still reflect traditionally masculine expectations. Informal networks and sponsorship pathways — where real advancement happens — routinely exclude women.",
  },
  {
    tag: "Structure",
    t: "INVISIBLE BARRIERS, VISIBLE CONSEQUENCES",
    d: "Visibility opportunities are unevenly distributed. Caregiving responsibilities continue to affect women's trajectories disproportionately — a burden the system quietly ignores.",
  },
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
      <FounderSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-0">
      <Container className="relative pt-2 md:pt-4 pb-0 md:pb-0">
        <div className="grid gap-10 md:gap-6 md:grid-cols-12 items-center">
          {/* LEFT — copy */}
          <div className="md:col-span-5 lg:col-span-5 relative z-30">
            <Reveal>
              <h1 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground text-right">
                Strategic Leadership Coaching for
                <br />
                <em className="italic font-light" style={{ color: GOLD }}>
                  High-Potential Women
                </em>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light text-right">
                I help ambitious women navigate bias, strengthen executive presence, and accelerate
                their careers using evidence-based gender strategy, strengths science, and systemic
                insights — not just anecdotal advice.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 mb-8 md:mb-12 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-foreground/90 transition-colors"
                >
                  Book a Strategic Clarity Call <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/organizations"
                  className="inline-flex items-center gap-2 border-b pb-1 text-[11px] uppercase tracking-[0.22em] text-foreground self-start sm:self-auto"
                  style={{ borderColor: GOLD }}
                >
                  For Corporate &amp; HR Enquiries <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — portrait + readable editorial name */}
          <div className="md:col-span-7 lg:col-span-7 relative flex items-center">
            <div className="relative w-full mb-[-30px] md:mb-[-70px]">
              <img
                src={heroPortrait}
                alt="Amna Imran — Executive Coach"
                className="relative z-20 w-full max-w-[840px] h-auto object-contain select-none pointer-events-none md:ml-auto"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </Container>
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
    <section className="relative z-30 border-y border-[var(--hairline)]/70 bg-[var(--cream)]/70">
      <Container>
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--hairline)]/60">
          {items.map((c) => (
            <li
              key={c.label}
              className="py-6 px-5 flex flex-col items-center text-center gap-3"
            >
              <div className="h-12 md:h-16 flex items-center justify-center">
                <img
                  src={c.logo}
                  alt={c.label}
                  loading="lazy"
                  className="object-contain h-10 md:h-12 w-auto max-w-[210px]"
                  style={{ transform: `scale(${c.scale})`, transformOrigin: "center" }}
                />
              </div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-foreground/65 leading-snug max-w-[14rem]">
                {c.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------- HIGH PERFORMANCE ALONE ---------------- */

function HighPerformanceSection() {
  const titleGold = "#C99700";
  const shapeGold = "#BDA06B";

  return (
    <section className="relative overflow-hidden bg-[#f7f4ee] py-12 md:py-16 lg:py-20">
      <Container className="relative">
        <Reveal>
          <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
            <span style={{ color: titleGold }}>High Performance</span>{" "}
            <span>Alone,</span>
            <br />
            <span className="block pl-[2.15em]">
              <span style={{ color: titleGold }}>Does Not </span>
              <em className="font-light italic" style={{ color: titleGold }}>
                Guarantee
              </em>{" "}
              <span>Progression</span>
            </span>
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div className="relative">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
              <Reveal>
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-48 w-28 -translate-y-1/2 rounded-r-full border-r-[4px] md:block"
                    style={{ borderColor: titleGold }}
                  />
                  <p
                    className="relative z-10 text-[2.6rem] sm:text-[3.1rem] md:text-[3.45rem] leading-[0.92] text-foreground"
                    style={{ fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none" }}
                  >
                    The traditional
                    <br />
                    <span className="pl-10" style={{ color: titleGold }}>
                      formula
                    </span>
                  </p>
                </div>
              </Reveal>

              <ul className="space-y-3">
                {TRADITIONAL.map((t, i) => (
                  <Reveal key={t} delay={i * 50}>
                    <li
                      className={`mx-auto rounded-lg px-6 py-4 text-center text-[15px] md:text-[16px] leading-snug text-black shadow-none ${
                        i === 0
                          ? "max-w-[21rem] md:-translate-x-5"
                          : i === 1
                            ? "max-w-[25rem]"
                            : i === 2
                              ? "max-w-[25rem]"
                              : "max-w-[23rem] md:-translate-x-4"
                      }`}
                      style={{ backgroundColor: shapeGold }}
                    >
                      {t}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="mt-20 flex flex-col gap-6 md:mt-24 md:flex-row md:items-center">
              <Reveal>
                <div
                  className="relative flex h-[220px] w-[220px] shrink-0 items-center justify-center rounded-full border-[3px] text-right md:-ml-20 md:h-[260px] md:w-[260px]"
                  style={{ backgroundColor: shapeGold, borderColor: titleGold }}
                >
                  <p className="font-serif text-[2.15rem] md:text-[2.45rem] leading-[1.02] text-black">
                    <span className="block">Common</span>
                    <span className="block">internal</span>
                    <span
                      className="block -mt-1 text-[2.05rem] md:text-[2.35rem] text-white"
                      style={{ fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none" }}
                    >
                      narratives
                    </span>
                  </p>
                </div>
              </Reveal>

              <ul className="space-y-4 md:-ml-8 md:space-y-5">
                {INTERNAL_NARRATIVES.map((q, i) => (
                  <Reveal key={q} delay={i * 60}>
                    <li
                      className={`font-sans italic text-[15px] md:text-[16px] leading-relaxed text-black ${
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

          <div className="relative lg:pt-8">
            <Reveal delay={80}>
              <p
                className="text-[2.7rem] sm:text-[3.35rem] md:text-[4rem] leading-[0.78] text-black"
                style={{ fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none" }}
              >
                Yet{" "}
                <span style={{ color: titleGold }}>
                  progression
                </span>
                <br />
                <span className="ml-28">often </span>
                <span style={{ color: titleGold }}>stalls</span>
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8 max-w-[46rem] space-y-5 text-[15px] md:text-[16px] leading-relaxed text-black font-light">
                <p>
                  &mdash; sometimes subtly, sometimes abruptly. Research across organizations shows
                  that advancement depends on far more than performance alone. Factors such as{" "}
                  <strong>
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
                  systemic - leading many capable professionals to work harder while seeing
                  diminishing returns.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-20 max-w-[44rem] text-center font-serif text-[1.35rem] md:text-[1.65rem] leading-[1.22] text-black">
                <span className="block" style={{ color: titleGold }}>
                  The challenge is not a lack of ambition or ability &mdash;
                </span>
                <span className="block">but a lack of access to the unwritten rules of</span>
                <span className="block">advancement.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LegacyHighPerformanceSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[var(--cream)]/40">
      <Container className="relative">
        {/* Headline */}
        <Reveal>
          <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] tracking-tight max-w-5xl">
            <span style={{ color: GOLD }}>High Performance</span>
            <span className="text-foreground">&nbsp;Alone,</span>
            <br />
            <span style={{ color: GOLD }}>Does Not</span>{" "}
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
                  <span className="pl-4" style={{ color: GOLD }}>formula</span>
                </p>
              </Reveal>
              <ul className="col-span-12 sm:col-span-7 space-y-3">
                {TRADITIONAL.map((t, i) => (
                  <Reveal key={t} delay={i * 60}>
                    <li
                      className={`rounded-xl px-4 py-3 text-[13px] md:text-[14px] text-background font-medium tracking-wide ${
                        i === 0 ? "md:-translate-x-10" : i === 1 ? "md:-translate-x-5" : i === 3 ? "md:-translate-x-5" : ""
                      }`}
                      style={{ backgroundColor: GOLD }}
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
                <span style={{ color: GOLD }}>progression</span>
                <br />
                <span className="pl-16 text-foreground">often </span>
                <span style={{ color: GOLD }}>stalls</span>
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="relative mt-7 text-[15px] md:text-[16px] text-foreground leading-relaxed font-light max-w-xl">
                — sometimes subtly, sometimes abruptly. Research across organizations shows that
                advancement depends on far more than performance alone. Factors such as{" "}
                <strong className="font-semibold" style={{ color: GOLD }}>
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
                className="relative shrink-0 rounded-full w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] flex items-center justify-center text-center -mr-8 sm:-mr-10 md:-mr-12"
                style={{ backgroundColor: GOLD }}
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
                    borderLeft: `22px solid ${GOLD}`,
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
                  <span style={{ color: GOLD }}>
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
    <section className="relative z-10 overflow-hidden bg-[var(--cream)]/70 border-t border-[var(--hairline)]/60 pt-20 md:pt-28 pb-32 md:pb-44">
      <Container className="relative">
        <Reveal>
          <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground max-w-4xl">
            <em className="not-italic font-light" style={{ color: GOLD }}>
              The Progress Narrative —
            </em>{" "}
            and the Hidden Reality
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light max-w-3xl">
            On the surface, it appears that gender equality at work has largely been achieved. Women are highly educated, widely represented in professional roles, and many organizations publicly champion diversity.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light max-w-3xl">
            Yet research in organizational behavior and leadership studies reveals persistent gaps beneath this progress narrative:
          </p>
        </Reveal>

        <div className="mt-10 max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {gaps.map((g, i) => (
              <Reveal key={g} delay={i * 40}>
                <div className="flex items-start gap-4 p-5 rounded-lg bg-[var(--cream)]/60 border border-[var(--hairline)]/40 h-full">
                  <span
                    className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-[14px] font-serif italic text-background"
                    style={{ backgroundColor: GOLD }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[14.5px] md:text-[15px] text-foreground/85 leading-relaxed">
                    {g}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <p className="mt-10 text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light max-w-3xl">
            These dynamics are rarely explicit or intentional. They are embedded in everyday organizational processes — performance reviews, leadership selection, project allocation, and informal influence channels.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- MOTHERHOOD PENALTY + PSYCHOLOGICAL IMPACT ---------------- */

function MotherhoodSection() {
  return (
    <section className="relative z-20 -mt-24 md:-mt-36 bg-[#f3eddb] overflow-visible border-b border-[var(--hairline)]/60">
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 top-0 z-10 h-24 w-full text-[var(--cream)] opacity-80 md:h-32"
      >
        <path
          d="M0,0 H1440 V46 C1260,16 1160,94 970,78 C770,61 646,20 460,42 C300,61 158,102 0,74 Z"
          fill="currentColor"
        />
      </svg>
      {/* Top dark curved shape */}
      <div className="relative z-20">
        <div className="relative h-[230px] md:h-[320px]">
          <img
            src={motherhoodTitleBackground}
            alt=""
            aria-hidden
            className="absolute left-[-4vw] top-[-22px] h-[190px] w-[64vw] max-w-none object-fill md:top-[-35px] md:h-[260px] md:w-[56vw] lg:left-[-2vw] lg:w-[50vw]"
            draggable={false}
          />
          <Container className="relative h-full flex items-start justify-start pt-10 md:pt-12">
            <Reveal>
              <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.02] text-background max-w-4xl text-left md:ml-12 lg:ml-16">
                <span style={{ color: "#d09b00" }}>The </span>
                <span
                  className="text-background text-[3.6rem] md:text-[5rem] leading-none"
                  style={{ fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none" }}
                >
                  Motherhood
                </span>{" "}
                <em className="not-italic font-light" style={{ color: "#d09b00" }}>
                  Penalty
                </em>
                <span className="block text-[1.55rem] md:text-[2rem]">
                  <span style={{ color: "#d09b00" }}>and</span> Life Transitions
                </span>
              </h2>
            </Reveal>
          </Container>
        </div>

        <Container className="relative -mt-12 md:-mt-24">
          <div className="ml-auto max-w-4xl space-y-5 pt-4">
            <Reveal>
              <p className="text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                Research across regions consistently shows that career interruptions associated
                with caregiving — particularly motherhood — can significantly alter advancement
                trajectories. Even when women return with equal or greater capability, they may be
                perceived as less committed, less available, or less leadership-ready.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                Meanwhile, men often experience neutral or even positive career effects from
                fatherhood (the fatherhood bonus).
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                These patterns persist despite formal policies designed to support work-life balance.
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

    {/* Psychological Impact */}
    <Container className="pt-8 md:pt-12 pb-16 md:pb-20">
      <Reveal>
        <h3 className="text-center font-serif leading-[0.95]">
          <span className="text-[2.1rem] md:text-[3rem]" style={{ color: "#d09b00" }}>The </span>
          <span className="text-[3.5rem] md:text-[5rem] text-black" style={{ fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none" }}>
            Psychological
          </span>
          <span className="text-[2.1rem] md:text-[3rem]" style={{ color: "#d09b00" }}> impact</span>
        </h3>
      </Reveal>

      <div className="mt-10 md:mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center max-w-5xl mx-auto">
        <Reveal>
          <p className="max-w-md text-[13px] md:text-[14px] uppercase tracking-[0.08em] font-semibold text-foreground leading-relaxed">
            When the path forward is
            <br />
            <em className="normal-case tracking-normal font-serif italic text-[1.2rem] md:text-[1.35rem] font-light text-[#9b6f3d]">
              opaque and high-risk,
            </em>
            <br />
            even the most capable women start to doubt
            <br />
            <em className="normal-case tracking-normal font-serif italic text-[1.2rem] md:text-[1.35rem] font-light text-[#9b6f3d]">
              not their talent &mdash; but their belonging.
            </em>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-3 sm:grid-cols-2">
            {PSYCH_IMPACT.map(({ t, Icon }) => (
              <span
                key={t}
                className="inline-flex items-center gap-3 rounded-full border border-[#d6c8ae] bg-[#eadfc9] px-5 py-3 text-[13px] md:text-[14px] text-foreground/85"
              >
                <Icon size={15} strokeWidth={1.8} className="text-[#9b6f3d]" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p
          className="mt-14 md:mt-20 max-w-3xl mx-auto text-center text-[15px] md:text-[16px] leading-relaxed font-light text-foreground/80"
        >
          Over time, this leads not to quitting ambition &mdash; but to{" "}
          <em className="italic text-[#9b6f3d]">disengaging from</em>
          <br />
          <em className="italic text-[#9b6f3d]">
            a game whose rules were never explained.
          </em>
        </p>
      </Reveal>
    </Container>
    </section>
  );
}

/* ---------------- WAY FORWARD — interactive ---------------- */

function WayForwardSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-20 md:py-32">
      <Container>
        <Reveal>
          <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground max-w-3xl">
            A More Strategic Way{" "}
            <em className="not-italic font-light italic" style={{ color: GOLD }}>
              Forward
            </em>
          </h2>
          <p className="mt-7 max-w-2xl text-[15px] md:text-[16px] text-foreground/75 leading-relaxed font-light">
            Understanding these dynamics is not about assigning blame or fostering pessimism. It is
            about recognizing that career progression occurs within complex systems — and that
            success requires both individual excellence and strategic navigation.
          </p>
          <p className="mt-5 max-w-2xl text-[15px] md:text-[16px] text-foreground/85 leading-relaxed font-light">
            Advancement at senior levels depends on more than performance. It requires:
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-14 items-start">
          {/* LEFT — sticky preview panel */}
          <div className="md:col-span-5 md:sticky md:top-24">
            <Reveal>
              <div className="border border-[var(--hairline)] bg-[var(--cream)]/50 p-8 md:p-10 min-h-[280px] relative">
                <div
                  className="font-serif italic text-lg md:text-xl"
                  style={{ color: GOLD }}
                >
                  {String(active + 1).padStart(2, "0")} / 06
                </div>
                <h3 className="mt-5 font-serif text-[1.7rem] md:text-[2rem] leading-[1.15] text-foreground">
                  {FORWARD[active].t}
                </h3>
                <div
                  aria-hidden
                  className="absolute -bottom-px left-0 h-px transition-all duration-700"
                  style={{ width: `${((active + 1) / FORWARD.length) * 100}%`, backgroundColor: GOLD }}
                />
              </div>
            </Reveal>
          </div>

          {/* RIGHT — capability list with connecting line */}
          <div className="md:col-span-7 relative">
            <div
              aria-hidden
              className="absolute left-[18px] top-2 bottom-2 w-px"
              style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}55, transparent)` }}
            />
            <ul className="space-y-3">
              {FORWARD.map((f, i) => {
                const isActive = active === i;
                return (
                  <li key={f.t}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`w-full text-left flex items-center gap-7 py-4 pr-4 pl-2 transition-all duration-300 border-l-2 ${
                        isActive
                          ? "bg-[var(--cream)]/60"
                          : "bg-transparent hover:bg-[var(--cream)]/30"
                      }`}
                      style={{ borderColor: isActive ? GOLD : "transparent" }}
                    >
                      <span
                        className={`relative z-10 shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full border text-[15px] font-serif italic transition-colors ${
                          isActive ? "text-background" : "bg-background text-foreground/70"
                        }`}
                        style={{
                          borderColor: GOLD,
                          backgroundColor: isActive ? GOLD : undefined,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-serif text-[18px] md:text-[20px] leading-snug transition-colors ${
                          isActive ? "text-foreground" : "text-foreground/65"
                        }`}
                      >
                        {f.t}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- HOW I SUPPORT ---------------- */

function HowISupportSection() {
  return (
    <section className="relative bg-[var(--cream)]/60 border-y border-[var(--hairline)]/60 overflow-hidden pt-10 md:pt-14 pb-10 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        {/* TITLE */}
        <Reveal>
          <h2 className="font-serif text-[2.5rem] sm:text-[3.1rem] md:text-[4rem] lg:text-[4.4rem] leading-[0.9] text-foreground max-w-6xl">
            <span className="block font-light" style={{ color: "#d09b00" }}>
              How I Support High-Potential
            </span>
            <span
              className="block -mt-3 ml-[4.6em] text-[4.2rem] sm:text-[5.4rem] md:-mt-6 md:ml-[5.1em] md:text-[7.4rem] lg:-mt-8 lg:ml-[5.15em] lg:text-[8.3rem] leading-none text-black"
              style={{ fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none" }}
            >
              Women
            </span>
          </h2>
        </Reveal>

        {false && (
        <Reveal delay={80}>
          <div className="mt-8 md:mt-10 max-w-5xl">
            <p className="max-w-3xl text-[15px] md:text-[16px] leading-relaxed text-foreground/80 font-light">
              I work with ambitious professionals who want their impact, influence, and career
              trajectory to reflect their true capability — without stepping away from roles they
              have invested years building.
            </p>
            <p className="mt-5 max-w-4xl font-serif text-[1.35rem] md:text-[1.8rem] leading-snug text-foreground">
              My approach integrates coaching with{" "}
              <em className="not-italic font-light" style={{ color: GOLD }}>
                evidence-based gender insight, strengths science,
              </em>{" "}
              and deep understanding of organizational dynamics to help clients:
            </p>
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-3">
              {SUPPORT_FOCUS.map((item, i) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-3 border border-[var(--hairline)] bg-background/55 px-4 py-3 text-[13px] md:text-[14px] leading-snug text-foreground/80"
                >
                  <span className="font-serif italic text-[18px] leading-none" style={{ color: GOLD }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        )}

        {/* COMPOSITION */}
        <div className="relative -mt-28 md:-mt-48 lg:-mt-[17.5rem] grid grid-cols-1 md:grid-cols-12 md:gap-0 items-end">
          {/* ELEVATE */}
          <Reveal as="article" className="md:col-span-5 md:text-center relative z-10">
            <div
              className="font-serif leading-none"
              style={{ color: GOLD, fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)" }}
            >
              ELEVATE<sup className="text-xl align-super">™</sup>
            </div>
            <div className="mt-3 mb-4 md:mx-auto max-w-[420px] border-t border-foreground/40 pt-2 text-[13px] md:text-[15px] uppercase tracking-[0.18em] text-foreground font-serif text-center">
              Strategic Advancement Program
            </div>
            <div
              className="text-white p-8 md:p-10 space-y-4 text-[16px] md:text-[18px] leading-[1.5] text-left"
              style={{ backgroundColor: "#24201C", minHeight: "420px" }}
            >
              <p>
                A structured 6 month engagement designed to help{" "}
                <em className="italic" style={{ color: GOLD }}>high-potential women</em>{" "}
                translate capability into progression within complex organizational environments.
              </p>
              <p>
                Through the{" "}
                <em className="italic" style={{ color: GOLD }}>ELEVATE Framework</em>, we work
                systematically across{" "}
                <em className="italic" style={{ color: GOLD }}>
                  leadership presence, visibility, influence, advancement strategy, and long-term sustainability
                </em>{" "}
                — equipping you to move forward with clarity, confidence, and strategic intent.
              </p>
              <p className="text-white/85">
                Whether self-funded or sponsored by your organization, the program provides a clear roadmap for advancing without burnout or compromise.
              </p>
            </div>
            <Link
              to="/work-with-me"
              className="mt-5 inline-flex items-center gap-2 font-serif text-[18px] text-foreground border-b border-foreground/60 pb-0.5 hover:opacity-80"
            >
              Find out more <span aria-hidden>→</span>
            </Link>
          </Reveal>

          {/* CENTER PORTRAIT */}
          <div className="md:col-span-2 relative z-20 order-first md:order-none flex justify-center md:block md:-ml-28 md:-mr-20 lg:-ml-40 lg:-mr-24 pointer-events-none md:self-end md:-mt-12 lg:-mt-20">
            <div
              aria-hidden
              className="absolute bottom-1 left-1/2 z-0 h-10 w-[78%] -translate-x-1/2 rounded-full bg-black/25 blur-2xl md:bottom-[-4px] md:h-12 md:w-[560px] md:-translate-x-[57%] lg:w-[660px]"
            />
            <img
              src={supportPortrait}
              alt="Amna Imran"
              draggable={false}
              className="relative z-10 select-none object-contain object-bottom w-[360px] sm:w-[480px] md:w-auto md:h-[960px] lg:h-[1140px] xl:h-[1240px] md:max-w-none mx-auto md:-mb-10 lg:-mb-14 -translate-x-3 md:-translate-x-20 lg:-translate-x-28 xl:-translate-x-32"
            />
          </div>

          {/* LEAD & THRIVE */}
          <Reveal delay={120} as="article" className="md:col-span-5 md:text-center relative z-10">
            <div
              className="font-serif leading-[1.05]"
              style={{ color: GOLD, fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)" }}
            >
              Lead &amp; Thrive Through Motherhood<sup className="text-xl align-super">™</sup>
            </div>
            <div className="mt-3 mb-4 md:mx-auto max-w-[460px] border-t border-foreground/40 pt-2 text-[13px] md:text-[15px] uppercase tracking-[0.18em] text-foreground font-serif text-center">
              Evidence-Informed Coaching Program
            </div>
            <div
              className="text-white p-8 md:p-10 space-y-4 text-[16px] md:text-[18px] leading-[1.5] text-left"
              style={{ backgroundColor: "#B89A6A", minHeight: "420px" }}
            >
              <p>
                Support high-potential women through the{" "}
                <strong className="font-semibold italic text-black">profound transition into working parenthood.</strong>
              </p>
              <p>
                Grounded in research on the motherhood penalty and organizational dynamics, this program helps protect{" "}
                <strong className="font-semibold italic text-black">leadership trajectory</strong> while navigating the{" "}
                <strong className="font-semibold italic text-black">identity, visibility, and confidence shifts</strong>{" "}
                that often accompany maternity leave and return-to-work.
              </p>
              <p>
                Rather than asking women to scale back ambition or overcompensate, we focus on{" "}
                <strong className="font-semibold italic text-black">strategic positioning, stakeholder alignment, and sustainable leadership</strong>{" "}
                — so motherhood becomes an integrated{" "}
                <strong className="font-semibold italic text-black">chapter of growth</strong>.
              </p>
            </div>
            <Link
              to="/work-with-me"
              className="mt-5 inline-flex items-center gap-2 font-serif text-[18px] text-foreground border-b border-foreground/60 pb-0.5 hover:opacity-80"
            >
              Find out more <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY MY APPROACH IS DIFFERENT ---------------- */

function WhyDifferentSection() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <Container className="relative">
        {/* Portrait — absolute overlay bridging heading and pillar cards */}
        <img
          src={approachPortrait}
          alt=""
          aria-hidden
          className="pointer-events-none hidden md:block absolute right-[-120px] lg:right-[-220px] top-[100%] lg:top-[108%] -translate-y-1/2 z-10 h-[920px] lg:h-[1120px] w-auto object-cover object-bottom select-none scale-[1.5] origin-bottom"
          draggable={false}
        />
        <div className="relative z-0 md:max-w-[62%]">
            <Reveal>
              <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                <span style={{ color: GOLD }}>Why My Approach </span>
                <em className="italic font-light text-foreground">Is Different</em>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="relative z-20 mt-6 w-[calc(100%/0.62)] max-w-none text-[15px] md:text-[16px] text-foreground/75 leading-relaxed font-light">
                Most coaching focuses on personal development in isolation — confidence, mindset, or communication skills. While these matter, they do not fully explain why highly capable women often struggle to translate performance into progression.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-10 font-serif text-[1.2rem] md:text-[1.55rem] leading-snug text-foreground max-w-2xl text-center">
                My work sits at the intersection of{" "}
                <em className="mx-1.5 inline-block not-italic text-[2rem] md:text-[2.45rem] leading-none align-[-0.16em]" style={{ color: GOLD, fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none", fontWeight: 700 }}>
                  Individual capability
                </em>{" "}
                and{" "}
                <em className="mx-1.5 inline-block not-italic text-[2rem] md:text-[2.45rem] leading-none align-[-0.16em]" style={{ color: GOLD, fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none", fontWeight: 700 }}>
                  Organizational reality
                </em>
              </p>
            </Reveal>
        </div>

        {/* Three pillars */}
        <div className="relative z-0 mt-14 grid gap-6 md:grid-cols-3 md:max-w-[62%]">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 70}
              as="article"
              className="bg-[var(--cream)]/45 p-4 md:p-5 min-h-[190px] relative"
            >
              <div className="h-full min-h-[160px] border border-[#c7baaa]/75 bg-[var(--background)]/70 px-5 py-6 md:px-6 md:py-7 shadow-[inset_1px_1px_0_rgba(255,255,255,0.65),inset_-1px_-1px_0_rgba(36,32,28,0.08),0_2px_0_rgba(36,32,28,0.05)]">
                <h3 className="font-serif text-[1.15rem] md:text-[1.25rem] leading-snug text-foreground">
                  {p.t}
                </h3>
                <p
                  className="mt-6 text-[14px] md:text-[15px] leading-snug"
                  style={{ color: GOLD }}
                >
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quote + comparison */}
        <div className="mt-6 md:mt-8 grid gap-12 md:grid-cols-12 md:gap-10 items-start">
          {/* Comparison */}
          <div className="md:col-span-7 flex justify-start md:-ml-8 lg:-ml-12">
            <div className="relative w-full max-w-[560px] py-2">
              {/* Global "Vs" overlay — sits between row 2 and row 3, never moves */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 text-[4.5rem] md:text-[5.5rem] leading-none z-0 select-none"
                style={{ color: GOLD, fontFamily: '"Rastanty Cortez", cursive', fontFeatureSettings: "normal", fontVariantLigatures: "none", top: "58px", transform: "translateX(-92%)" }}
              >
                Vs
              </span>
              <Accordion type="single" collapsible className="relative z-10 w-full">
                {COMPARISON.map((c, i) => {
                  const isLast = i === COMPARISON.length - 1;
                  return (
                    <AccordionItem key={c.a} value={`c-${i}`} className="border-0">
                      <AccordionTrigger className="py-2.5 hover:no-underline [&>svg]:hidden group">
                        <div className="grid grid-cols-[1fr_96px_1fr_18px] items-center w-full text-left gap-x-2 pr-6">
                          {!isLast ? (
                            <>
                              <span className="font-serif text-[16px] md:text-[18px] text-foreground text-right">
                                {c.a}
                              </span>
                              <span aria-hidden />
                              <span className="font-serif font-semibold italic text-[15px] md:text-[17px] text-foreground/50 text-left">
                                {c.b}
                              </span>
                              <ChevronRight
                                className="h-4 w-4 shrink-0 text-foreground/65 transition-transform group-data-[state=open]:rotate-90 justify-self-end -translate-x-2"
                                aria-hidden
                              />
                            </>
                          ) : (
                            <span className="col-span-4 flex items-center justify-center gap-2">
                              <span className="font-serif text-[16px] md:text-[18px] text-foreground">
                                {c.a}
                              </span>
                              <ChevronRight
                                className="h-4 w-4 text-foreground/65 transition-transform group-data-[state=open]:rotate-90"
                                aria-hidden
                              />
                            </span>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-1 text-[14px] text-foreground/75 leading-relaxed text-center px-2">
                        {c.d}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>

          <div className="relative z-20 md:col-span-5 md:pt-6 md:-ml-32 lg:-ml-48">
            <Reveal>
              <blockquote className="relative pl-4 pr-6">
                <span
                  aria-hidden
                  className="absolute left-0 -top-6 font-serif font-bold text-[6rem] md:text-[7.2rem] leading-none"
                  style={{ color: GOLD }}
                >
                  “
                </span>
                <p
                  className="relative font-serif italic text-[1.45rem] md:text-[1.7rem] leading-[1.4] pl-6 pr-6"
                  style={{ color: GOLD }}
                >
                  You don't need to change who you are.<br />
                  You need a strategy that works<br />
                  <span className="relative">
                    in the environment you're operating in.
                    <span
                      aria-hidden
                      className="absolute left-full top-0 font-serif font-bold text-[6rem] md:text-[7.2rem] leading-none -translate-y-1/4"
                      style={{ color: GOLD }}
                    >
                      ”
                    </span>
                  </span>
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- TWO PATHWAYS ---------------- */

function TwoPathwaysSection() {
  return (
    <section className="py-14 md:py-20 bg-[var(--cream)]/60 border-y border-[var(--hairline)]/60">
      <Container>
        <Reveal>
          <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground max-w-3xl">
            Choose the pathway that{" "}
            <em className="not-italic italic font-light" style={{ color: GOLD }}>
              fits your context.
            </em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Individuals — light */}
          <Reveal as="article" className="bg-background border border-[var(--hairline)] p-8 md:p-10 flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/60">
              For Individuals
            </div>
            <h3 className="mt-5 font-serif text-[1.7rem] md:text-[2rem] leading-tight text-foreground">
              Accelerate Your Leadership{" "}
              <em className="not-italic italic font-light" style={{ color: GOLD }}>
                Trajectory
              </em>
            </h3>
            <Hairline className="my-6" />
            <ul className="space-y-2 text-[14.5px] text-foreground/80">
              <li className="flex gap-3"><span style={{ color: GOLD }}>—</span> ELEVATE™ Strategic Advancement Program</li>
              <li className="flex gap-3"><span style={{ color: GOLD }}>—</span> Lead &amp; Thrive Through Motherhood™</li>
            </ul>
            <Link
              to="/contact"
              className="mt-8 self-start inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground/90 transition-colors"
            >
              Book a Strategic Clarity Call <span aria-hidden>→</span>
            </Link>
          </Reveal>

          {/* Organizations — dark */}
          <Reveal delay={120} as="article" className="bg-foreground text-background p-8 md:p-10 flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.22em] text-background/65">
              For Organizations
            </div>
            <h3 className="mt-5 font-serif text-[1.7rem] md:text-[2rem] leading-tight text-background">
              Develop &amp; Retain High-Potential{" "}
              <em className="not-italic italic font-light" style={{ color: GOLD }}>
                Women
              </em>
            </h3>
            <Hairline className="my-6 bg-background/20" />
            <ul className="space-y-2 text-[14.5px] text-background/85">
              <li className="flex gap-3"><span style={{ color: GOLD }}>—</span> Sponsored 1:1 Coaching</li>
              <li className="flex gap-3"><span style={{ color: GOLD }}>—</span> Leadership Workshops</li>
              <li className="flex gap-3"><span style={{ color: GOLD }}>—</span> Strengths-Based Team Development</li>
              <li className="flex gap-3"><span style={{ color: GOLD }}>—</span> DEI Consultancy</li>
            </ul>
            <Link
              to="/organizations"
              className="mt-8 self-start inline-flex items-center gap-2 border border-background/55 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-background hover:bg-background hover:text-foreground transition-colors"
            >
              Schedule an Organizational Consultation <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
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
    <section className="relative z-10 overflow-hidden bg-[var(--cream)]/60 border-y border-[var(--hairline)]/60 pt-0 pb-0">
      <Container className="relative">
        <div className="grid min-h-[360px] gap-8 md:min-h-[420px] md:grid-cols-12 md:items-center lg:min-h-[470px]">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative h-[360px] md:h-[420px] lg:h-[470px] overflow-hidden">
                <img
                  src={founderPortrait}
                  alt="Amna Imran — Founder"
                  className="absolute bottom-[-55px] left-0 h-[660px] w-auto object-contain object-bottom select-none md:bottom-[-80px] md:h-[810px] lg:bottom-[-110px] lg:h-[960px]"
                  draggable={false}
                />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <Reveal>
              <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                <em className="not-italic italic font-light" style={{ color: GOLD }}>
                  Amna Imran.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-xl text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                Gender-informed leadership strategist helping high-potential women progress without
                burnout or compromise.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 border-b pb-1 text-[11px] uppercase tracking-[0.22em] text-foreground"
                style={{ borderColor: GOLD }}
              >
                Read the Founder Story <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <section className="bg-foreground text-background">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-background">
                Ready to move forward{" "}
                <em className="not-italic font-light italic" style={{ color: GOLD }}>
                  strategically?
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-4 flex flex-col gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-between gap-2 bg-background text-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--cream)] transition-colors"
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
    </section>
  );
}
