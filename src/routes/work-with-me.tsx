import { createFileRoute, Link } from "@tanstack/react-router";
import { Hairline, Reveal } from "@/components/site/primitives";
import {
  Accent,
  ChapterDivider,
  CtaArrow,
  PageCta,
  PageQuote,
  PageHeading,
  PageHero,
  PageSection,
  Seam,
  VariantLabel,
} from "@/components/site/page-kit";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import portrait from "@/assets/amna-work-with-me.png";

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

const LT_DESIGNED_TO = [
  "Protect your leadership positioning before leave",
  "Maintain visibility and influence during absence",
  "Re-establish executive presence upon return",
  "Navigate perception shifts proactively",
  "Build a sustainable model of ambition that integrates caregiving",
];

const NUMERAL =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] font-serif italic text-[1rem] text-gold-deep";

function ProgramCard({
  eyebrow,
  title,
  body,
  cta,
  href,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  cta: string;
  href: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col p-8 transition-[transform,box-shadow,border-color] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] hover:-translate-y-1.5 md:p-10",
        dark
          ? "bg-foreground text-background"
          : "border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)] hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-8 h-10 w-1 bg-[var(--gold)] transition-[height] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] group-hover:h-16"
      />
      <p className={cn("eyebrow", dark ? "text-gold" : "text-copy-muted")}>{eyebrow}</p>
      <h3
        className={cn(
          "mt-5 max-w-md font-serif font-light type-h2 leading-[1.08] tracking-[-0.02em]",
          dark ? "text-background" : "text-foreground",
        )}
      >
        {title}
      </h3>
      <p className={cn("mt-5 type-body", dark ? "text-background/80" : "text-copy")}>{body}</p>
      <div className="mt-auto pt-9">
        <a href={href} className={cn(dark ? "cta-primary-invert" : "cta-primary", "whitespace-nowrap px-5 tracking-[0.08em]")}>
          {cta} <CtaArrow down />
        </a>
      </div>
    </div>
  );
}

/**
 * Six months as one journey: each step sits on a gold progress line, the line
 * grows as the step reveals, and the final month is the filled destination.
 */
function ElevateJourney() {
  return (
    <ol className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
      {ELEVATE_TIMELINE.map((step, i) => {
        const destination = i === ELEVATE_TIMELINE.length - 1;
        return (
          <Reveal key={step.m} as="li" delay={(i % 3) * 140} duration="slow" className="group relative pt-10">
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
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-5 select-none font-serif font-light leading-none text-[5rem] text-background/[0.06] transition-colors duration-700 group-hover:text-[color-mix(in_oklch,var(--gold)_22%,transparent)]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="eyebrow text-gold">{step.m}</p>
            <h3 className="mt-3 max-w-xs pr-16 font-serif font-light type-h2 leading-tight text-background">
              {step.t}
            </h3>
            <p className="mt-4 max-w-sm type-body text-background/75">{step.d}</p>
          </Reveal>
        );
      })}
    </ol>
  );
}

function WhoThisIsForSplit() {
  return (
    <PageSection surface="cream">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <PageHeading size="h1" eyebrow="Who This Is For">
            Designed for high-performing women approaching advancement{" "}
            <Accent>intentionally.</Accent>
          </PageHeading>
          <Reveal duration="slow" delay={120}>
            <div className="mt-10 h-px w-24 bg-[var(--gold)]/70" />
            <p className="mt-8 max-w-md font-serif font-light text-[length:var(--text-lead)] leading-snug text-foreground">
              You may be self-funding your development — or sponsored by your organization.
              Either way, the work is{" "}
              <em className="italic text-gold-warm">structured, strategic, and advancement-focused.</em>
            </p>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <div
            aria-hidden
            className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-[var(--gold)] via-[color-mix(in_oklch,var(--gold)_40%,transparent)] to-transparent"
          />
          <ol className="relative">
            {FOR_YOU.map((f, i) => (
              <Reveal
                key={f}
                as="li"
                delay={i * 100}
                duration="slow"
                className="group relative flex items-center gap-6 py-5 md:py-6"
              >
                <span
                  className={cn(
                    NUMERAL,
                    "relative z-10 bg-[var(--cream)] transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-background",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="flex-1 font-serif font-light text-[length:var(--text-lead)] leading-snug text-foreground transition-transform duration-500 group-hover:translate-x-1">
                  {f}
                </p>
                {i < FOR_YOU.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-16 right-0 h-px bg-[color-mix(in_oklch,var(--gold)_22%,transparent)]"
                  />
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </PageSection>
  );
}

function WorkWithMe() {
  return (
    <>
      <PageHero
        eyebrow="For Individuals"
        size="h1"
        title={
          <>
            Strategic coaching for women ready to advance with{" "}
            <Accent>clarity, visibility, and influence.</Accent>
          </>
        }
        lead={
          <>
            <p className="type-body text-copy">
              For high-performing professionals preparing for promotion, navigating complex
              organizational dynamics, or protecting leadership trajectory through major career
              transitions.
            </p>
            <p className="font-serif italic text-foreground">
              This is not generic confidence coaching. It is{" "}
              <em className="italic text-gold-warm">evidence-informed advancement strategy</em>{" "}
              for women operating within real organizational systems.
            </p>
          </>
        }
        actions={
          <>
            <Link to="/contact" className="cta-primary w-full justify-between text-left lg:whitespace-nowrap max-lg:px-5 max-lg:text-[0.75rem] max-lg:tracking-[0.1em]">
              Book a Strategic Clarity Call <CtaArrow />
            </Link>
            <Link
              to="/organizations"
              className="link-underline mt-3 self-start font-sans text-[length:var(--text-small)] uppercase tracking-[0.12em] sm:tracking-[0.16em] lg:whitespace-nowrap"
            >
              Exploring corporate support? Visit Organizations <CtaArrow />
            </Link>
          </>
        }
        aside={
          <Reveal variant="fade-up" duration="slow" delay={140} className="relative mx-auto flex w-full max-w-[22rem] justify-center">
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 top-[12%] rounded-t-full"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, color-mix(in oklch, var(--gold-subtle) 70%, transparent), transparent 72%)",
              }}
            />
            <div aria-hidden className="absolute inset-x-[8%] bottom-0 top-[6%] rounded-t-full border border-[color-mix(in_oklch,var(--gold)_30%,transparent)]" />
            <img
              src={portrait}
              alt="Amna Imran"
              className="relative block h-[22rem] w-auto select-none sm:h-[28rem] lg:h-[34rem]"
              draggable={false}
            />
          </Reveal>
        }
      />

      <Seam from="warm" into="cream" />

      <VariantLabel
        name="Option 1 — current layout"
        note="Staggered cards"
      />
      {/* WHO THIS IS FOR — staggered cluster */}
      <PageSection surface="cream">
        <PageHeading eyebrow="Who This Is For">
          Designed for high-performing women approaching advancement{" "}
          <Accent>intentionally.</Accent>
        </PageHeading>

        <div className="mt-14 grid gap-x-6 gap-y-4 md:grid-cols-2 md:gap-y-6 lg:grid-cols-12 lg:items-start">
          {FOR_YOU.map((f, i) => {
            const layout = [
              "lg:col-span-5",
              "lg:col-span-7 lg:mt-8",
              "lg:col-span-6 lg:-mt-2",
              "lg:col-span-6 lg:mt-6",
              "lg:col-span-7",
              "lg:col-span-5 lg:mt-10",
              "md:col-span-2 lg:col-span-8 lg:ml-10",
            ][i];
            return (
              <Reveal
                key={f}
                delay={i * 60}
                duration="slow"
                as="article"
                className={`${layout} group bg-background/60 border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] px-5 py-5 sm:px-7 sm:py-6 flex items-center gap-5 transition-all duration-500 hover:-translate-y-1 hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)] hover:bg-background`}
              >
                <span className={cn(NUMERAL, "transition-colors duration-500 group-hover:bg-[var(--gold)] group-hover:text-background")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="type-body text-copy">{f}</p>
              </Reveal>
            );
          })}
        </div>

        <ChapterDivider className="mx-auto mt-16 max-w-3xl md:mt-20" />
        <PageQuote className="mt-10">
          You may be self-funding your development — or sponsored by your organization. Either
          way, the work is{" "}
          <em className="italic text-gold-warm">structured, strategic, and advancement-focused.</em>
        </PageQuote>
      </PageSection>

      <VariantLabel
        name="Option 2 — for client review"
        note="Heading stays on the left · the seven points read as one numbered list joined by a gold line"
      />
      <WhoThisIsForSplit />

      {/* PROGRAM OVERVIEW */}
      <PageSection surface="cream" className="pt-4 md:pt-8">
        <PageHeading eyebrow="Programs">
          Two Programs. One <Accent>Strategic Foundation.</Accent>
        </PageHeading>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal duration="slow">
            <ProgramCard
              dark
              eyebrow="Signature Program"
              title={
                <>
                  ELEVATE<span className="text-[var(--gold)]">™</span> Strategic Advancement Program
                </>
              }
              body="A six-month, evidence-based coaching program to translate capability into recognised progression."
              cta="Explore ELEVATE"
              href="#elevate"
            />
          </Reveal>
          <Reveal delay={100} duration="slow">
            <ProgramCard
              eyebrow="Career Continuity"
              title={
                <>
                  Lead &amp; Thrive Through Motherhood<span className="text-[var(--gold)]">™</span>
                </>
              }
              body="Strategic career continuity for high-potential women through maternity leave, re-entry, and identity transition."
              cta="Explore Lead & Thrive"
              href="#lead-thrive"
            />
          </Reveal>
        </div>
      </PageSection>

      {/* ELEVATE DETAILED — timeline */}
      <PageSection surface="dark" id="elevate">
        <PageHeading dark eyebrow="Signature Program">
          ELEVATE<span className="text-[var(--gold)]">™</span> —{" "}
          <Accent>Strategic Advancement Program</Accent>
        </PageHeading>
        <Reveal delay={140} duration="slow">
          <p className="mt-8 max-w-2xl type-body text-background/80">
            High-performing women are passed over every day — not because they lack capability,
            but because advancement is shaped by visibility, perception, and sponsorship as
            much as it is by results. ELEVATE is a six-month, evidence-based coaching program
            designed to change that.
          </p>
        </Reveal>

        <Reveal duration="slow">
          <div className="mt-14 border border-background/20 bg-background/5 p-7 md:p-9 max-w-4xl">
            <p className="eyebrow text-gold">Who this is for</p>
            <p className="mt-5 font-serif font-light text-[clamp(1.4rem,1vw+1rem,1.85rem)] leading-snug text-background">
              Senior women who are performing well and ready to move with intention.
            </p>
            <p className="mt-5 type-body text-background/80 max-w-3xl">
              Whether your career has plateaued, a promotion decision is approaching, or you want
              to build something that is as sustainable as it is ambitious.
            </p>
          </div>
        </Reveal>

        <Reveal duration="slow">
          <div className="mt-16 max-w-3xl">
            <p className="font-serif italic text-[clamp(1.5rem,1.2vw+1rem,2.2rem)] leading-tight text-gold-warm">
              A system, not just sessions.
            </p>
            <p className="mt-5 type-body text-background/80">
              Grounded in research from HBR, INSEAD, McKinsey, and Gallup, ELEVATE gives you the
              strategy, tools, and clarity to move from high performer to recognised leader. Over
              six months and up to twelve private sessions, you will build a complete advancement
              strategy — and leave with three formal deliverables you own, keep, and return to long
              after the program ends.
            </p>
          </div>
        </Reveal>

        <ChapterDivider className="mt-16 md:mt-20" />
        <ElevateJourney />

        <ChapterDivider className="mt-20" />

        {/* Deliverables */}
        <div className="mt-16">
          <Reveal>
            <p className="eyebrow text-gold">What you leave with</p>
            <Hairline className="mt-4 bg-background/20" />
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {DELIVERABLES.map((d, i) => (
              <Reveal key={d} delay={i * 100} duration="slow" as="div" className="flex items-center gap-4 border border-background/25 p-5 md:block md:p-7">
                <span className={cn(NUMERAL, "text-gold")}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif font-light type-h3 text-background leading-snug md:mt-5">{d}</h3>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal duration="slow">
          <div className="relative mt-20 overflow-hidden border border-background/15 bg-background/[0.04] p-6 md:p-10">
            <div className="relative grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <p className="eyebrow text-gold">ELEVATE Experience</p>
                <h3 className="mt-5 font-serif font-light type-h1 text-background max-w-3xl">
                  What participants typically experience.
                </h3>
                <p className="mt-5 max-w-2xl text-[length:var(--text-small)] text-background/60 leading-relaxed italic">
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
                        <p className="type-body text-background/75 max-w-xl">{p.d}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </Reveal>
      </PageSection>

      {/* LEAD & THRIVE THROUGH MOTHERHOOD */}
      <PageSection surface="cream" id="lead-thrive">
        <PageHeading eyebrow="Career Continuity">
          Lead &amp; Thrive Through <Accent>Motherhood.</Accent>
        </PageHeading>
        <Reveal delay={60} duration="slow">
          <p className="mt-4 font-serif italic text-gold-warm text-[clamp(1.2rem,0.8vw+0.95rem,1.5rem)]">
            Strategic Career Continuity for High-Potential Women
          </p>
        </Reveal>

        <Reveal delay={80} duration="slow">
          <p className="mt-10 max-w-3xl font-serif font-light text-[clamp(1.4rem,1vw+1rem,1.85rem)] leading-snug text-foreground">
            Becoming a working parent is not simply a logistical shift. It is a{" "}
            <em className="italic text-gold-warm">profound identity transition.</em>
          </p>
        </Reveal>

        <Reveal delay={140} duration="slow">
          <p className="mt-8 max-w-2xl type-body text-copy">
            Research consistently shows that while most expecting mothers intend to re-engage
            fully with their careers, a significant portion leave the workforce within a year of
            having a child. The gap between intention and outcome is not about ambition. It is
            about structure, support, and strategic navigation.
          </p>
        </Reveal>

        {/* Large stat callouts */}
        <div className="mt-14 grid gap-px bg-[var(--hairline)] border border-[var(--hairline)] md:grid-cols-2 lg:grid-cols-3">
          <Reveal as="div" duration="slow" className="bg-background p-8 md:p-10">
            <div className="font-serif font-light text-[3.5rem] md:text-[4.5rem] text-gold-warm leading-none">
              75%
            </div>
            <p className="mt-4 type-body text-copy">
              of expecting mothers intend to re-engage fully with their careers.
            </p>
            <p className="mt-3 type-micro">Source label to confirm</p>
          </Reveal>
          <Reveal delay={80} as="div" duration="slow" className="bg-background p-8 md:p-10">
            <div className="font-serif font-light text-[3.5rem] md:text-[4.5rem] text-gold-warm leading-none">
              43%
            </div>
            <p className="mt-4 type-body text-copy">
              leave the workforce within a year of having a child.
            </p>
            <p className="mt-3 type-micro">Source label to confirm</p>
          </Reveal>
          <Reveal delay={160} as="div" duration="slow" className="flex flex-col justify-end bg-background p-8 md:col-span-2 md:p-10 lg:col-span-1">
            <div className="font-serif font-light text-[clamp(1.3rem,0.6vw+1.05rem,1.6rem)] text-foreground leading-snug">
              How a return is managed often matters more than the length of leave.
            </div>
            <p className="mt-4 type-micro">Harvard Business Review</p>
          </Reveal>
        </div>

        <Reveal delay={120} duration="slow">
          <div className="mt-12 max-w-2xl border-l-2 border-[var(--gold)] pl-6 space-y-3">
            <p className="type-body text-copy">
              Mothers report significantly higher stress levels than other employees — and stress
              increases further for those with more than one child.
            </p>
            <p className="type-body text-copy">
              Without deliberate preparation and repositioning, this transition can quietly disrupt
              leadership trajectory.
            </p>
          </div>
        </Reveal>

        <ChapterDivider className="mt-20" />

        {/* A Different Approach */}
        <div className="mt-16 grid gap-10 lg:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PageHeading as="h3" size="h1">
              A Different Approach to <Accent>Working Parenthood.</Accent>
            </PageHeading>
            <Reveal delay={80} duration="slow">
              <p className="mt-6 type-body text-copy">
                Most return-to-work support focuses on emotional adjustment or work-life balance
                alone. This program approaches the transition strategically.
              </p>
              <p className="mt-5 font-serif font-light text-[length:var(--text-lead)] leading-snug text-foreground">
                Lead &amp; Thrive Through Motherhood is designed to:
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
              {LT_DESIGNED_TO.map((it, i) => (
                <Reveal key={it} as="li" delay={i * 100} duration="slow" className="flex items-center gap-5 py-4">
                  <span className={NUMERAL}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-[length:var(--text-lead)] text-foreground leading-snug">
                    {it}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <PageQuote
          className="mt-20"
          sub="With evidence-based tools and structured preparation, this transition can become an integrated chapter of leadership growth — not a derailment."
        >
          Motherhood should not require professional self-erasure.
          <em className="mt-1 block italic text-gold-warm">
            Nor should it demand overcompensation through exhaustion.
          </em>
        </PageQuote>

        {/* Designed For + Outcomes */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {[
            { label: "Designed For", items: LT_DESIGNED_FOR },
            { label: "The Outcome — Clients leave with", items: LT_OUTCOMES },
          ].map((block, i) => (
            <Reveal
              key={block.label}
              delay={i * 100}
              duration="slow"
              as="div"
              className="border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)] p-8 md:p-10"
            >
              <p className="eyebrow text-gold-ink">{block.label}</p>
              <div className="my-6 h-px w-full bg-[color-mix(in_oklch,var(--gold)_30%,transparent)]" />
              <ul className="space-y-3">
                {block.items.map((d) => (
                  <li key={d} className="flex gap-3 text-[length:var(--text-body)] leading-[1.55] text-copy">
                    <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-[var(--gold)]" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <ChapterDivider className="mx-auto mt-16 max-w-3xl" />
        <Reveal duration="slow">
          <p className="mx-auto mt-10 max-w-3xl text-center font-serif font-light text-[clamp(1.3rem,0.9vw+1rem,1.65rem)] leading-snug text-foreground">
            When transition is handled intentionally,{" "}
            <em className="italic text-gold-warm">retention improves, satisfaction increases, and leadership continuity is preserved.</em>
          </p>
        </Reveal>
      </PageSection>

      <PageCta
        title={
          <>
            Ready to Advance With
            <br />
            <Accent>Intention?</Accent>
          </>
        }
        actions={
          <>
            <Link to="/contact" className="cta-primary-invert justify-between px-6 text-left tracking-[0.12em] max-sm:px-5 max-sm:text-[0.75rem] max-sm:tracking-[0.1em]">
              Book a Strategic Clarity Call <CtaArrow />
            </Link>
            <Link to="/organizations" className="cta-secondary-invert justify-between px-6 text-left tracking-[0.12em] max-sm:px-5 max-sm:text-[0.75rem] max-sm:tracking-[0.1em]">
              Exploring organizational support? <CtaArrow />
            </Link>
          </>
        }
      />
    </>
  );
}
