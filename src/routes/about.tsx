import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Container, Eyebrow, Reveal } from "@/components/site/primitives";
import heroPortrait from "@/assets/amna-about-hero.png";
import realizationPortrait from "@/assets/amna-full-portrait.png";

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

const WHY_MATTERS = [
  "Expanding leadership definitions",
  "Leveraging strengths authentically",
  "Understanding systemic patterns",
  "Navigating them strategically",
  "Building influence without self-erasure",
];

const FIVE_SHIFTS = [
  { n: "01.", label: "Expanding", accent: "leadership", tail: "definitions" },
  { n: "02.", label: "Leveraging", accent: "strengths", tail: "authentically" },
  { n: "03.", label: "Understanding", accent: "systemic", tail: "patterns" },
  { n: "04.", label: "Navigating them", accent: "strategically", tail: "" },
  { n: "05.", label: "Building influence without", accent: "self-erasure", tail: "" },
];

const GOLD_UNDERLINE_PATHS = [
  "M1,6 C22,3 34,8 50,5 C68,2 82,8 99,4",
  "M1,5 C18,8 40,3 55,6 C72,9 86,4 99,6",
  "M2,6 C25,4 38,7 52,5 C70,3 84,7 98,5",
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

function GoldKeyword({
  children,
  className = "",
  drawOnLoad = false,
  path = 0,
}: {
  children: ReactNode;
  className?: string;
  drawOnLoad?: boolean;
  path?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isDrawn, setIsDrawn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsDrawn(true);
      return;
    }

    if (drawOnLoad) {
      const frame = window.requestAnimationFrame(() => setIsDrawn(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [drawOnLoad]);

  return (
    <span
      ref={ref}
      className={`gold-keyword ${isDrawn ? "is-drawn" : ""} ${className}`}
    >
      {children}
      <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
        <path d={GOLD_UNDERLINE_PATHS[path % GOLD_UNDERLINE_PATHS.length]} pathLength="1" />
      </svg>
    </span>
  );
}

function PersonalLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.28em] text-foreground/55">
      <span aria-hidden className="h-px w-6 bg-[var(--gold)]" />
      <span>{children}</span>
    </div>
  );
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
      {/* HERO */}
      <section className="border-b border-[var(--hairline)]/60">
        <Container className="pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <Reveal><Eyebrow>About · Amna Imran</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h1 className="mt-7 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                  The goal is not to fix women. It is to equip them to navigate — and ultimately{" "}
                  <GoldKeyword drawOnLoad path={0} className="font-light">influence</GoldKeyword> — the systems in which they lead.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-xl text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                  My work sits at the intersection of individual capability and organizational reality —
                  combining coaching, evidence-based gender insight, strengths science, and systems
                  awareness to help high-potential women progress without compromising authenticity or
                  wellbeing.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground/90 transition-colors">
                    Book a Strategic Clarity Call <span aria-hidden>→</span>
                  </Link>
                  <Link to="/organizations" className="inline-flex items-center gap-2 border border-foreground/40 px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition-colors">
                    For Organizations <span aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5 mt-10">
              <Reveal delay={140}>
                <div className="border border-[var(--hairline)]/70 pt-3 md:pt-4 px-3 md:px-4 pb-0 bg-[var(--cream)]/30 inline-block w-full">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={heroPortrait}
                      alt="Amna Imran portrait"
                      className="absolute inset-0 h-full w-full object-cover object-bottom"
                      style={{ transform: 'scale(1.1)', transformOrigin: 'bottom center' }}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* POSITIONING — At the intersection of capability */}
      <section className="border-b border-[var(--hairline)]/60 py-20 md:py-28">
        <Container>
          <Reveal delay={80}>
            <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground max-w-4xl">
              At the intersection of{" "}
              <em className="text-[var(--gold)] not-italic font-light">capability</em> and organizational reality.
            </h2>
          </Reveal>

          <div className="mt-16 flex flex-col">
            {POSITIONING.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                as="article"
                className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-[var(--gold)]/30 first:border-t-0 last:border-b last:border-[var(--gold)]/30 transition-all"
              >
                <h3 className="md:col-span-5 font-serif italic text-[28px] md:text-[34px] lg:text-[38px] leading-[1.1] text-[var(--gold)] transition-transform duration-500 group-hover:translate-x-2">
                  {p.t}
                </h3>
                <p className="md:col-span-7 text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light self-center">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <p className="mt-16 max-w-3xl font-serif italic text-[18px] md:text-[20px] text-foreground/85 leading-relaxed">
              As an ACC-credentialed coach with the International Coaching Federation, a Certified
              Diversity Professional, and a strengths practitioner trained by Gallup, I combine
              coaching with evidence-based gender insight to help high-potential women navigate
              these dynamics strategically.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* A PERSONAL REALIZATION — letter-style */}
      <section className="bg-[var(--cream)]/70 border-b border-[var(--hairline)]/60 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:gap-16 lg:gap-20 md:grid-cols-12 items-start">
            {/* LEFT — sticky portrait + heading */}
            <div className="md:col-span-5 lg:sticky lg:top-24 self-start">
              <Reveal><Eyebrow>A Personal Note</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                  A Personal{" "}
                  <em className="text-[var(--gold)] not-italic font-light">Realization.</em>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <figure className="mt-6 md:mt-8">
                  <div className="overflow-hidden border border-[var(--hairline)]/70 bg-[var(--cream)]/40 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
                    <img
                      src={realizationPortrait}
                      alt="Amna Imran"
                      className="block h-auto w-full scale-[2] translate-x-[-32px]"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.28em] text-foreground/55">
                    <span aria-hidden className="h-px w-8 bg-[var(--gold)]/60" />
                    A personal note from Amna
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            {/* RIGHT — letter panel */}
            <div className="md:col-span-7">
              <Reveal delay={120}>
                <article className="relative bg-[#FBF7EE] border border-[var(--hairline)]/70 shadow-[0_40px_80px_-40px_rgba(60,40,10,0.18)] px-6 sm:px-10 md:px-14 py-10 md:py-14">
                  {/* top gold rule */}
                  <div aria-hidden className="absolute top-0 left-0 h-px w-24 bg-[var(--gold)]" />

                  {/* Opening */}
                  <PersonalLabel>Lived experience across cultures</PersonalLabel>
                  <p className="mt-5 font-serif italic text-[20px] md:text-[24px] leading-[1.35] text-foreground">
                    My work is shaped not only by research and professional training, but by lived
                    experience across cultures.
                  </p>
                  <p className="mt-6 text-[15px] md:text-[16px] leading-[1.75] font-light text-foreground/90">
                    As an expatriate, I followed my husband's career across countries while raising
                    two boys of my own. With each move came reinvention — professionally, socially,
                    structurally. I witnessed firsthand how mobility, caregiving, and invisible
                    labor shape women's professional trajectories in ways that are rarely
                    acknowledged in leadership conversations.
                  </p>

                  <PersonalDivider />

                  {/* The repeated pattern */}
                  <PersonalLabel>The repeated pattern</PersonalLabel>
                  <p className="mt-5 text-[15px] md:text-[16px] leading-[1.75] font-light text-foreground/90">
                    Across geographies, one pattern repeated itself.
                  </p>
                  <PullQuote>
                    “Brilliant, capable women — highly educated, high-performing — quietly
                    questioning themselves.”
                  </PullQuote>
                  <div className="mt-6 space-y-2 font-serif text-[17px] md:text-[19px] leading-snug text-foreground">
                    <p>Not because they lacked competence.</p>
                    <p className="pl-6 md:pl-8 italic text-[var(--gold)]">
                      But because the environments they were navigating were not designed with them in mind.
                    </p>
                  </div>

                  <PersonalDivider />

                  {/* INSEAD */}
                  <PersonalLabel>What INSEAD helped clarify</PersonalLabel>
                  <p className="mt-5 text-[15px] md:text-[16px] leading-[1.75] font-light text-foreground/90">
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
                    <p className="italic text-[var(--gold)]">The issue was that leadership prototypes were too narrow.</p>
                  </div>

                  <PersonalDivider />

                  {/* The "fix women" narrative */}
                  <PersonalLabel>The “fix-women” narrative</PersonalLabel>
                  <p className="mt-5 text-[15px] md:text-[16px] leading-[1.75] font-light text-foreground/90">
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
                  <p className="mt-6 text-[15px] md:text-[16px] leading-[1.75] font-light text-foreground/90">
                    This “fix-women” narrative overlooks a critical truth: many women are not
                    underperforming — they are operating within systems calibrated to reward a
                    specific style of leadership.
                  </p>

                  <PersonalDivider />

                  {/* Why awareness is clarifying */}
                  <PersonalLabel>Why awareness is clarifying</PersonalLabel>
                  <PullQuote>
                    “Awareness of systemic bias is not disempowering. It is clarifying.”
                  </PullQuote>
                  <p className="mt-6 text-[15px] md:text-[16px] leading-[1.75] font-light text-foreground/90">
                    When women understand how evaluation norms, sponsorship dynamics, caregiving
                    expectations, and leadership prototypes shape progression, self-doubt often
                    gives way to strategic insight.
                  </p>

                  <PersonalDivider />

                  {/* The transformative shift */}
                  <PersonalLabel>The transformative shift</PersonalLabel>
                  <p className="mt-5 font-serif italic text-[20px] md:text-[24px] leading-[1.35] text-foreground">
                    That shift — I have witnessed firsthand — is{" "}
                    <em className="text-[var(--gold)] not-italic font-light">transformative.</em>
                  </p>

                  {/* Sign-off */}
                  <div className="mt-12 flex items-center gap-4">
                    <span aria-hidden className="h-px w-12 bg-[var(--gold)]" />
                    <p className="font-serif italic text-[20px] md:text-[22px] text-foreground">— Amna</p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Headline + intro */}
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow>Why This Matters</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                Equipping women to navigate — and{" "}
                <GoldKeyword drawOnLoad path={0} className="font-light">ultimately influence</GoldKeyword>{" "}
                the systems in which they lead.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 md:mt-10 max-w-2xl">
                <p className="text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                  I do not believe the solution is to reshape women into replicas of a traditional
                  leadership archetype.
                </p>
                <p className="mt-3 font-serif italic text-[18px] md:text-[20px] text-foreground/90 leading-snug">
                  I believe the solution lies in five shifts —
                </p>
              </div>
            </Reveal>
          </div>

          {/* Five shifts — clean two-column */}
          <Reveal delay={100}>
            <ol className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
              {FIVE_SHIFTS.map((s, i) => (
                <li key={s.n} className="group flex gap-5 items-baseline">
                  <div
                    aria-hidden
                    className="shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--gold)]/10"
                  >
                    <span className="font-serif italic text-[var(--gold)] text-[28px] md:text-[34px] leading-none tracking-tight">
                      {s.n}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-[20px] md:text-[24px] lg:text-[26px] leading-[1.25] text-foreground">
                      {s.label}{" "}
                      <GoldKeyword path={(i + 1) % GOLD_UNDERLINE_PATHS.length} className="font-light italic">
                        {s.accent}
                      </GoldKeyword>
                      {s.tail ? <> {s.tail}</> : null}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Supporting note */}
          <Reveal delay={60}>
            <div className="mt-10 md:mt-12 max-w-3xl border-l-2 border-[var(--gold)]/40 pl-6 md:pl-8">
              <p className="text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                Learning evidence-based techniques to operate within complex systems is far more
                powerful than internalizing a narrative of deficiency.
                <br />
                <span className="text-foreground italic font-serif">
                  This perspective shapes every aspect of my work.
                </span>
              </p>
            </div>
          </Reveal>

          {/* Pull quote */}
          <Reveal delay={80}>
            <figure className="mt-10 md:mt-12 max-w-3xl rounded-[2px] bg-[var(--cream)]/85 px-8 py-9 md:px-12 md:py-11">
              <span
                aria-hidden
                className="block font-serif text-[var(--gold)] text-[44px] md:text-[52px] leading-none select-none -mb-2 md:-mb-3"
              >
                "
              </span>
              <blockquote className="font-serif text-xl md:text-2xl lg:text-[1.65rem] leading-[1.3] text-foreground">
                The goal is not to fix women. It is to equip them to navigate — and ultimately{" "}
                <GoldKeyword path={2} className="font-light">influence</GoldKeyword> — the systems in which they lead.
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.28em] text-foreground/55">
                — The Work
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow className="text-[var(--gold)]">Begin</Eyebrow>
            <h2 className="mt-6 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-background">
              Ready to move forward{" "}
              <em className="text-[var(--gold)] not-italic font-light">strategically?</em>
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--cream)] transition-colors">
                Book a Strategic Clarity Call <span aria-hidden>→</span>
              </Link>
              <Link to="/organizations" className="inline-flex items-center gap-2 border border-background/50 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-background hover:bg-background hover:text-foreground transition-colors">
                For Organizations <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
