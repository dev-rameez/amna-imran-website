import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Container,
  Eyebrow,
  Hairline,
  Reveal,
} from "@/components/site/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import amnaAboutRealization from "@/assets/amna-about-realization.png";
import amnaFullPortrait from "@/assets/amna-full-portrait.png";

export const Route = createFileRoute("/work-with-me")({
  head: () => ({
    meta: [
      { title: "Work With Amna | Executive Coaching for Women Ready to Advance" },
      {
        name: "description",
        content:
          "Private executive coaching for women preparing for promotion, navigating complex organizational dynamics, or protecting leadership trajectory through transitions.",
      },
      { property: "og:title", content: "Work With Me — Strategic Coaching for High-Potential Women" },
      {
        property: "og:description",
        content:
          "Evidence-informed advancement strategy for women operating within real organizational systems.",
      },
      { property: "og:url", content: "/work-with-me" },
    ],
    links: [{ rel: "canonical", href: "/work-with-me" }],
  }),
  component: WorkWithMe,
});

const FOR_YOU = [
  "Deliver consistent results but sense progression has slowed",
  "Are preparing for promotion or stepping into a senior leadership role",
  "Want greater visibility, influence, and executive presence",
  "Feel capable but unclear about the unwritten rules of advancement",
  "Are navigating complex organizational dynamics and want a clearer strategy",
  "Are transitioning into or returning from parenthood and want to protect long-term career trajectory",
  "Value evidence-based insight over motivational rhetoric",
];

const ELEVATE_TIMELINE = [
  {
    m: "Month 1",
    t: "Evidence & Direction",
    d: "An honest diagnosis of your advancement reality and a personalised Leadership Advancement Roadmap.",
  },
  {
    m: "Month 2",
    t: "Leadership Presence",
    d: "The specific, coachable behaviours that signal readiness to decision-makers.",
  },
  {
    m: "Month 3",
    t: "Executive Visibility & Voice",
    d: "Ensuring your work is seen, understood, and championed by the right people. Includes your Stakeholder Influence Plan.",
  },
  {
    m: "Month 4",
    t: "Advancement Strategy",
    d: "Promotion readiness, career narrative, and the political fluency to walk into any senior conversation prepared.",
  },
  {
    m: "Month 5",
    t: "Thriving Sustainability",
    d: "The dimension most programs miss. Redesigning how you invest your energy so ambition doesn't cost you your wellbeing.",
  },
  {
    m: "Month 6",
    t: "Empowered Leadership",
    d: "Your leadership identity, 12–24 month career roadmap, and Strategic Career Progression Plan.",
  },
];

const DELIVERABLES = [
  "Leadership Advancement Roadmap",
  "Stakeholder Influence Plan",
  "Strategic Career Progression Plan",
];

const PARTICIPANT_EXPERIENCE = [
  {
    t: "Increased confidence and authority in senior settings",
    d: "Participants commonly report feeling steadier in board-level, executive, and high-stakes conversations — recognised, heard, and taken seriously.",
  },
  {
    t: "Greater strategic visibility with decision-makers",
    d: "Work becomes visible to the people who shape promotion conversations, not only those who experience it day-to-day.",
  },
  {
    t: "A clear, actionable path to their next role or level",
    d: "Ambiguity gives way to a defined trajectory — with the language, narrative, and behaviours to support it.",
  },
  {
    t: "Deeper, more intentional sponsorship relationships",
    d: "Stakeholder strategy becomes deliberate rather than incidental: who, why, how, and what they advocate for on your behalf.",
  },
  {
    t: "Readiness for promotion — with the evidence and narrative to back it",
    d: "Promotion conversations stop feeling like a hopeful ask and start feeling like a logical next step.",
  },
  {
    t: "Reduced burnout, sustained ambition, and boundaries that protect both",
    d: "A sustainable model of high performance — ambition without self-erasure or overcompensation.",
  },
];

const LT_DESIGNED_FOR = [
  "Women preparing for maternity leave",
  "Women currently on leave planning re-entry",
  "Professionals returning to leadership roles",
  "Organizations committed to retaining high-potential women",
];

const LT_OUTCOMES = [
  "A strategic transition plan",
  "Clear stakeholder alignment",
  "Re-entry visibility strategy",
  "Sustainable performance framework",
  "Reduced self-doubt and increased clarity",
];

/**
 * ELEVATE vertical timeline — a scroll-driven gold gradient spine that fills
 * as the section scrolls past a viewport anchor, lighting up each month's
 * serif numeral as the fill reaches it. Works in all browsers (JS-driven);
 * respects prefers-reduced-motion by rendering fully filled and static.
 */
const SPINE_INSET = 8; // px — top/bottom breathing room for the spine

function ElevateTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState<boolean[]>(() =>
    ELEVATE_TIMELINE.map(() => false),
  );

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fill.style.height = `${container.offsetHeight - SPINE_INSET * 2}px`;
      setActive(ELEVATE_TIMELINE.map(() => true));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      const p = Math.max(0, Math.min(1, (anchor - rect.top) / rect.height));
      const span = container.offsetHeight - SPINE_INSET * 2;
      const fillPx = p * span;
      fill.style.height = `${fillPx}px`;

      const fillBottom = rect.top + SPINE_INSET + fillPx;
      setActive((prev) => {
        let changed = false;
        const next = numberRefs.current.map((el, i) => {
          if (!el) return prev[i] ?? false;
          const r = el.getBoundingClientRect();
          const on = r.top + r.height / 2 <= fillBottom + 2;
          if (on !== prev[i]) changed = true;
          return on;
        });
        return changed ? next : prev;
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-20 max-w-4xl">
      {/* spine — track */}
      <div
        aria-hidden
        className="absolute left-[2.25rem] w-0.5 -translate-x-1/2 bg-background/20 md:left-16"
        style={{ top: SPINE_INSET, bottom: SPINE_INSET }}
      />
      {/* spine — gold gradient fill (height set on scroll) */}
      <div
        ref={fillRef}
        aria-hidden
        className="absolute left-[2.25rem] w-0.5 -translate-x-1/2 md:left-16"
        style={{
          top: SPINE_INSET,
          height: 0,
          backgroundImage:
            "linear-gradient(to bottom, var(--gold), var(--gold-deep))",
        }}
      />
      <ol className="relative space-y-12 md:space-y-16">
        {ELEVATE_TIMELINE.map((step, i) => (
          <Reveal
            key={step.m}
            delay={i * 60}
            as="li"
            className="relative grid grid-cols-[4.5rem_minmax(0,1fr)] gap-8 md:grid-cols-[8rem_minmax(0,34rem)] md:gap-12"
          >
            <div className="relative flex justify-center">
              <div
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
                className={cn(
                  "relative z-10 self-start bg-foreground px-1 py-1.5 font-serif italic text-[3rem] leading-[0.72] md:text-[3.9rem] transition-[color,opacity] duration-500 ease-out",
                  active[i]
                    ? "text-[var(--gold)] opacity-100"
                    : "text-background/25 opacity-60",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div>
              <div className="eyebrow text-[var(--gold)]">{step.m}</div>
              <h3 className="mt-3 font-serif text-[1.65rem] md:text-[1.85rem] leading-tight text-background">
                {step.t}
              </h3>
              <p className="mt-4 text-[14.5px] md:text-[15px] text-background/75 leading-relaxed">
                {step.d}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function WorkWithMe() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-158px] left-[-10vw] right-[-10vw] h-52 rounded-t-[100%] bg-[var(--cream)] md:bottom-[-225px] md:h-80"
        />
        <Container className="relative grid gap-12 pt-16 pb-20 md:pt-28 md:pb-32 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="relative max-w-4xl">
            <Reveal>
              <Eyebrow>For Individuals</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                Strategic coaching for women ready to advance with{" "}
                <em className="text-[var(--gold)] not-italic font-light">
                  clarity, visibility, and influence.
                </em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                For high-performing professionals preparing for promotion, navigating complex
                organizational dynamics, or protecting leadership trajectory through major career
                transitions.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-2xl font-serif italic text-xl md:text-2xl leading-snug text-foreground/85">
                This is not generic confidence coaching. It is{" "}
                <span className="text-[var(--gold)] not-italic font-normal">
                  evidence-informed advancement strategy
                </span>{" "}
                for women operating within real organizational systems.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-12 flex flex-nowrap items-center gap-x-6">
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-[0.22em] shadow-[0_18px_45px_rgba(36,32,28,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90"
                >
                  Book a Strategic Clarity Call <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/organizations"
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap border-b border-[var(--gold)]/70 pb-1 text-[11px] uppercase tracking-[0.22em] transition-all duration-300 hover:border-foreground hover:text-foreground"
                >
                  Exploring corporate support? Visit Organizations <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180} className="relative hidden min-h-[520px] lg:block">
            <div className="absolute left-[-28px] top-[56px] z-20 h-[140px] w-[128px] overflow-hidden bg-[var(--cream)] xl:left-[-36px] xl:top-[54px] xl:h-[170px] xl:w-[150px]">
              <img
                src={amnaFullPortrait}
                alt=""
                className="h-[128%] w-full object-cover object-[43%_36%]"
              />
            </div>
            <div className="absolute right-10 top-[118px] h-[289px] w-[204px] overflow-hidden bg-[var(--gold)]/75 xl:h-[332px] xl:w-[238px]">
              <img
                src={amnaAboutRealization}
                alt=""
                className="absolute bottom-0 left-[47%] h-[118%] max-w-none -translate-x-1/2 object-contain"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-[var(--hairline)]/60 pt-6 pb-20 md:pt-8 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-5vw] top-12 hidden font-serif text-[9rem] leading-none text-foreground/[0.035] lg:block"
        >
          clarity
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-3vw] bottom-20 hidden font-serif text-[8rem] leading-none text-[var(--gold)]/[0.08] lg:block"
        >
          visibility
        </div>
        <Container className="relative">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow>Who This Is For</Eyebrow>
              <h2 className="mt-6 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                Designed for high-performing women approaching advancement{" "}
                <em className="text-[var(--gold)] italic font-light">intentionally.</em>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-4 md:grid-cols-2 md:gap-y-5">
            {FOR_YOU.map((f, i) => (
                <Reveal key={f} delay={i * 60} as="article" className={`group relative flex min-h-[118px] items-center gap-6 bg-background/70 px-8 py-6 transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:shadow-[0_18px_45px_rgba(36,32,28,0.08)] ${i === 6 ? "md:max-w-[34rem]" : ""}`}>
                  <span aria-hidden className="absolute left-0 top-7 h-[calc(100%-3.5rem)] w-px bg-[var(--gold)]/85" />
                  <span className="shrink-0 font-serif italic text-[var(--gold)]/80 text-2xl md:text-[1.8rem] leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] md:text-[16px] text-foreground/85 leading-relaxed font-light">{f}</p>
                </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 h-px w-24 bg-[var(--gold)]/70" />
            <p className="mt-8 max-w-3xl font-serif text-2xl md:text-[1.85rem] leading-snug text-foreground/90">
              You may be self-funding your development — or sponsored by your organization. Either
              way, the work is{" "}
              <em className="text-[var(--gold)] not-italic">
                structured, strategic, and advancement-focused.
              </em>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Programs</Eyebrow>
            <h2 className="mt-6 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground max-w-3xl">
              Two Programs. <span className="text-[var(--gold)] font-light">One</span>{" "}
              <em className="text-[var(--gold)] not-italic font-light">Strategic Foundation.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal as="article" className="relative bg-foreground text-background p-8 md:p-10 flex flex-col">
              <div className="absolute top-0 left-0 h-1 w-24 bg-[var(--gold)]" />
              <div className="eyebrow text-[var(--gold)]">Signature Program</div>
              <h3 className="mt-5 font-serif text-[1.85rem] md:text-[2.1rem] leading-tight text-background">
                ELEVATE<span className="text-[var(--gold)]">™</span> Strategic Advancement Program
              </h3>
              <p className="mt-4 text-[15px] text-background/80 leading-relaxed font-light">
                A six-month, evidence-based coaching program to translate capability into recognised
                progression.
              </p>
              <a
                href="#elevate"
                className="mt-8 self-start inline-flex items-center gap-2 border-b border-background/50 pb-1 text-[11px] uppercase tracking-[0.22em] text-background hover:border-background"
              >
                Explore ELEVATE <span aria-hidden>↓</span>
              </a>
            </Reveal>
            <Reveal delay={100} as="article" className="relative bg-[var(--cream)]/70 border border-[var(--hairline)] p-8 md:p-10 flex flex-col">
              <div className="absolute top-0 left-0 h-1 w-24 bg-[var(--gold)]" />
              <div className="eyebrow text-[var(--gold)]">Career Continuity</div>
              <h3 className="mt-5 font-serif text-[1.85rem] md:text-[2.1rem] leading-tight text-foreground">
                Lead &amp; Thrive Through Motherhood<span className="text-[var(--gold)]">™</span>
              </h3>
              <p className="mt-4 text-[15px] text-foreground/75 leading-relaxed font-light">
                Strategic career continuity for high-potential women through maternity leave,
                re-entry, and identity transition.
              </p>
              <a
                href="#lead-thrive"
                className="mt-8 self-start inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[11px] uppercase tracking-[0.22em] text-foreground hover:border-foreground"
              >
                Explore Lead &amp; Thrive <span aria-hidden>↓</span>
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ELEVATE DETAILED — timeline */}
      <section id="elevate" className="bg-foreground text-background py-20 md:py-32 scroll-mt-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              <Reveal>
                <Eyebrow className="text-[var(--gold)]">ELEVATE™</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-background">
                  ELEVATE<span className="text-[var(--gold)]">™</span> — Strategic Advancement Program
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-8 max-w-2xl text-[15px] md:text-[16px] text-background/80 leading-relaxed font-light">
                  High-performing women are passed over every day — not because they lack capability,
                  but because advancement is shaped by visibility, perception, and sponsorship as
                  much as it is by results. ELEVATE is a six-month, evidence-based coaching program
                  designed to change that.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="mt-14 border border-background/20 bg-background/5 p-7 md:p-9 max-w-4xl">
              <div className="eyebrow text-[var(--gold)]">Who this is for</div>
              <p className="mt-5 font-serif text-2xl md:text-[1.85rem] leading-snug text-background">
                Senior women who are performing well and ready to move with intention.
              </p>
              <p className="mt-5 text-[15px] md:text-[16px] text-background/80 leading-relaxed font-light max-w-3xl">
                Whether your career has plateaued, a promotion decision is approaching, or you want
                to build something that is as sustainable as it is ambitious.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 max-w-3xl">
              <p className="font-serif italic text-2xl md:text-[1.85rem] leading-snug text-[var(--gold)]">
                A system, not just sessions.
              </p>
              <p className="mt-5 text-[15px] md:text-[16px] text-background/80 leading-relaxed font-light">
                Grounded in research from HBR, INSEAD, McKinsey, and Gallup, ELEVATE gives you the
                strategy, tools, and clarity to move from high performer to recognised leader. Over
                six months and up to twelve private sessions, you will build a complete advancement
                strategy — and leave with three formal deliverables you own, keep, and return to long
                after the program ends.
              </p>
            </div>
          </Reveal>

          {/* Vertical timeline */}
          <ElevateTimeline />

          {/* Deliverables */}
          <div className="mt-20">
            <Reveal>
              <div className="eyebrow text-[var(--gold)]">What you leave with</div>
              <Hairline className="mt-4 bg-background/20" />
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {DELIVERABLES.map((d, i) => (
                <Reveal key={d} delay={i * 70} as="div" className="border border-background/25 p-7">
                  <div className="font-serif italic text-[var(--gold)] text-xl md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-serif text-[20px] text-background leading-snug">{d}</h3>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="relative mt-20 overflow-hidden border border-background/15 bg-background/[0.04] p-6 md:p-10">
              <div className="relative grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
              <div className="eyebrow text-[var(--gold)]">ELEVATE Experience</div>
              <h3 className="mt-5 font-serif text-3xl md:text-4xl leading-tight text-background max-w-3xl">
                What participants typically experience.
              </h3>
              <p className="mt-5 max-w-2xl text-[14px] text-background/60 leading-relaxed italic">
                Results vary by individual. These reflect what participants commonly report — not
                guarantees.
              </p>
            </div>
                <div className="md:col-span-7">
            <Accordion type="single" collapsible className="border-t border-background/20">
              {PARTICIPANT_EXPERIENCE.map((p) => (
                <AccordionItem key={p.t} value={p.t} className="border-b border-background/20 transition-colors duration-300 data-[state=open]:bg-background/[0.06]">
                  <AccordionTrigger className="px-3 py-6 text-left hover:no-underline group transition-colors duration-300 hover:bg-background/[0.05]">
                    <div className="flex items-baseline pr-4">
                      <span className="font-serif text-[18px] md:text-[20px] text-background leading-snug">
                        {p.t}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-3">
                    <p className="text-[15px] text-background/75 leading-relaxed max-w-xl">{p.d}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* LEAD & THRIVE THROUGH MOTHERHOOD */}
      <section
        id="lead-thrive"
        className="border-t border-[var(--hairline)]/60 py-20 md:py-32 scroll-mt-24"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <Container>
          <Reveal>
            <Eyebrow>Career Continuity</Eyebrow>
            <h2 className="mt-6 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground max-w-3xl">
              Lead &amp; Thrive Through{" "}
              <em
                className="inline-block text-[var(--gold)] not-italic text-[3rem] leading-[0.85] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.4rem]"
                style={{
                  fontFamily: '"Rastanty Cortez", cursive',
                  fontFeatureSettings: "normal",
                  fontVariantLigatures: "none",
                  fontWeight: 700,
                }}
              >
                Motherhood.
              </em>
            </h2>
            <p className="mt-4 font-serif italic text-[var(--gold)] text-xl md:text-2xl">
              Strategic Career Continuity for High-Potential Women
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-10 max-w-3xl font-serif text-2xl md:text-[1.85rem] leading-snug text-foreground">
              Becoming a working parent is not simply a logistical shift. It is a{" "}
              <em className="text-[var(--gold)] not-italic font-light">profound identity transition.</em>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-[15px] md:text-[16px] text-foreground/75 leading-relaxed font-light">
              Research consistently shows that while most expecting mothers intend to re-engage
              fully with their careers, a significant portion leave the workforce within a year of
              having a child. The gap between intention and outcome is not about ambition. It is
              about structure, support, and strategic navigation.
            </p>
          </Reveal>

          {/* Large stat callouts */}
          <div className="mt-14 grid gap-px bg-[var(--hairline)] border border-[var(--hairline)] md:grid-cols-3">
            <Reveal as="div" className="flex flex-col bg-background p-8 md:p-10">
              <div className="font-serif text-[3.5rem] md:text-[4.5rem] text-[var(--gold)] leading-none">
                75%
              </div>
              <p className="mt-4 text-[14px] md:text-[15px] text-foreground/80 leading-relaxed">
                of expecting mothers intend to re-engage fully with their careers.
              </p>
              <p className="mt-auto pt-8 text-[11px] text-foreground/45">Source label to confirm</p>
            </Reveal>
            <Reveal delay={80} as="div" className="flex flex-col bg-background p-8 md:p-10">
              <div className="font-serif text-[3.5rem] md:text-[4.5rem] text-[var(--gold)] leading-none">
                43%
              </div>
              <p className="mt-4 text-[14px] md:text-[15px] text-foreground/80 leading-relaxed">
                leave the workforce within a year of having a child.
              </p>
              <p className="mt-auto pt-8 text-[11px] text-foreground/45">Source label to confirm</p>
            </Reveal>
            <Reveal delay={160} as="div" className="flex flex-col bg-background p-8 md:p-10">
              <div className="text-[21px] md:text-[22.5px] text-foreground/80 leading-relaxed">
                How a return is managed often matters more than the length of leave.
              </div>
              <p className="mt-auto pt-8 text-[11px] text-foreground/45">Harvard Business Review</p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-12 max-w-2xl border-l-2 border-[var(--gold)] pl-6 space-y-3">
              <p className="text-[15px] text-foreground/80 leading-relaxed">
                Mothers report significantly higher stress levels than other employees — and stress
                increases further for those with more than one child.
              </p>
              <p className="text-[15px] text-foreground/80 leading-relaxed">
                Without deliberate preparation and repositioning, this transition can quietly disrupt
                leadership trajectory.
              </p>
            </div>
          </Reveal>

          {/* A Different Approach */}
          <div className="mt-24 grid gap-12 md:gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.06] text-foreground">
                  A Different Approach to{" "}
                  <em className="text-[var(--gold)] not-italic font-light">Working Parenthood.</em>
                </h3>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 text-[15px] md:text-[16px] text-foreground/75 leading-relaxed">
                  Most return-to-work support focuses on emotional adjustment or work-life balance
                  alone. This program approaches the transition strategically.
                </p>
                <p className="mt-5 font-serif text-[1.35rem] md:text-[1.65rem] leading-snug text-foreground">
                  Lead &amp; Thrive Through Motherhood is designed to:
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal>
                <ul className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
                  {[
                    "Protect your leadership positioning before leave",
                    "Maintain visibility and influence during absence",
                    "Re-establish executive presence upon return",
                    "Navigate perception shifts proactively",
                    "Build a sustainable model of ambition that integrates caregiving",
                  ].map((it, i) => (
                    <li key={it} className="flex items-baseline gap-6 py-4">
                      <span className="font-serif italic text-[var(--gold)] text-xl md:text-2xl shrink-0 w-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-[18px] md:text-[20px] text-foreground leading-snug">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="mt-16 max-w-3xl space-y-4">
              <p className="font-serif text-2xl md:text-[1.85rem] leading-snug text-foreground">
                Motherhood should not require professional self-erasure.
              </p>
              <p className="font-serif italic text-2xl md:text-[1.85rem] leading-snug text-[var(--gold)]">
                Nor should it demand overcompensation through exhaustion.
              </p>
              <p className="text-[15px] md:text-[16px] text-foreground/75 leading-relaxed">
                With evidence-based tools and structured preparation, this transition can become an
                integrated chapter of leadership growth — not a derailment.
              </p>
            </div>
          </Reveal>

          {/* Designed For + Outcomes */}
          <div className="mt-20 grid gap-10 md:grid-cols-2">
            <Reveal as="div" className="bg-background border border-[var(--hairline)] p-8 md:p-10">
              <div className="eyebrow text-[var(--gold)]">Designed For</div>
              <Hairline className="my-5" />
              <ul className="space-y-3.5">
                {LT_DESIGNED_FOR.map((d) => (
                  <li key={d} className="flex gap-4 text-foreground/85">
                    <span aria-hidden className="mt-2.5 h-px w-5 bg-[var(--gold)] shrink-0" />
                    <span className="text-[15px] leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} as="div" className="bg-[var(--cream)]/80 border border-[var(--hairline)] p-8 md:p-10">
              <div className="eyebrow text-[var(--gold)]">The Outcome — Clients leave with</div>
              <Hairline className="my-5" />
              <ul className="space-y-3.5">
                {LT_OUTCOMES.map((o) => (
                  <li key={o} className="flex gap-4 text-foreground/85">
                    <span aria-hidden className="mt-2.5 h-px w-5 bg-[var(--gold)] shrink-0" />
                    <span className="text-[15px] leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-16 max-w-3xl font-serif text-xl md:text-[1.65rem] leading-snug text-foreground">
              When transition is handled intentionally,{" "}
              <em className="text-[var(--gold)] not-italic">retention improves, satisfaction increases, and leadership continuity is preserved.</em>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32"
          style={{ color: "var(--cream)" }}
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M0 0H1440V118C1220 60 995 18 725 10C430 1 205 45 0 114V0Z"
            />
          </svg>
        </div>
        <Container className="relative py-20 pt-20 md:py-28 md:pt-[6.5rem]">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow className="text-[var(--gold)]">Begin</Eyebrow>
              <h2 className="mt-6 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-background">
                Ready to Advance With{" "}
                <em className="text-[var(--gold)] not-italic font-light">Intention?</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--cream)] transition-colors"
                >
                  Book a Strategic Clarity Call <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/organizations"
                  className="inline-flex items-center gap-2 border-b border-background/50 pb-1 text-[11px] uppercase tracking-[0.22em] text-background hover:border-background"
                >
                  Exploring organizational support? <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
