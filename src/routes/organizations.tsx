import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container, Eyebrow, Hairline, Reveal } from "@/components/site/primitives";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import icfLogo from "@/assets/icf-acc.png";
import gallupLogo from "@/assets/gallup-strengths.png";
import cdpLogo from "@/assets/cdp.png";
import inseadLogo from "@/assets/insead.png";

export const Route = createFileRoute("/organizations")({
  head: () => ({
    meta: [
      { title: "For Organizations | Advance & Retain High-Potential Women Leaders" },
      { name: "description", content: "Coaching, workshops, and consulting that strengthen leadership pipelines and advance high-potential women within complex organizations." },
      { property: "og:title", content: "Organizations — Leadership Pipeline & Advancement" },
      { property: "og:description", content: "Evidence-based coaching and consulting for HR, L&D, DEI, and talent leaders." },
      { property: "og:url", content: "/organizations" },
    ],
    links: [{ rel: "canonical", href: "/organizations" }],
  }),
  component: Organizations,
});

const STATS = [
  { n: "81", suffix: " / 100", l: "women promoted per 100 men at first step to manager", s: "McKinsey Women in the Workplace 2024" },
  { n: "29%", suffix: "", l: "of C-suite roles globally held by women", s: "McKinsey Women in the Workplace 2025" },
  { n: "50yr", suffix: "+", l: "to global gender parity at current pace", s: "McKinsey / LeanIn 2024" },
];

const NOT_WORKING = [
  {
    t: "Unconscious bias training",
    d: "Broadly delivered, rarely translates into behaviour change. HBR research confirms: attitude shifts do not equal promotion shifts.",
  },
  {
    t: "Awareness-led DEI programs",
    d: "Good intentions without accountability structures, measurable targets, or ties to performance metrics. Intent without infrastructure.",
  },
  {
    t: "Mentorship without sponsorship",
    d: "Women get advice. Men get advocacy. Having a mentor does not replicate what active sponsorship delivers for career advancement.",
  },
  {
    t: "Cutting what was working",
    d: "Remote flexibility, formal sponsorship, targeted development — being scaled back precisely when retention of women and minorities depends on them.",
  },
];

const MOVES_NEEDLE = [
  {
    t: "Behaviour-based training",
    d: "Tied to specific decision moments — hiring panels, promotion reviews, feedback. Framed as an opportunity for managers, not a compliance exercise.",
  },
  {
    t: "Embedded sponsorship",
    d: "Not one-off initiatives — sponsorship woven into career development infrastructure and held accountable at leadership level over time.",
  },
  {
    t: "De-biased promotion processes",
    d: "McKinsey's top-performing companies share one trait: bias is addressed at the decision point — not in the training room weeks before.",
  },
  {
    t: "Individual + systemic coaching",
    d: "Equipping leaders to navigate complex structures while the organization simultaneously addresses those structures. Both levels, at once.",
  },
];

const SOUND_FAMILIAR = [
  "We have ERGs and training — but our senior pipeline is still male-dominated.",
  "High-potential women are leaving before we can promote them.",
  "We don't know if our DEI spend is actually doing anything.",
];

const OFFERINGS = [
  {
    key: "coaching",
    tab: "1:1 Coaching",
    badge: "Sponsored Leadership Coaching",
    title: "ELEVATE Strategic Advancement Program",
    tagline: "Six- or twelve-month coaching for high-potential women in succession pipelines.",
    focus: ["Leadership presence", "Visibility & sponsorship", "Advancement positioning", "Influence & negotiation", "Sustainable performance"],
    delivery: ["6 or 12-month programs", "ICF-credentialed coach", "360 assessment included", "Progress reporting for HR"],
    bestFor: "Emerging and mid-senior leaders in succession or development pipelines.",
  },
  {
    key: "workshops",
    tab: "Workshops",
    badge: "Workshops & Strategic Sessions",
    title: "Leadership Workshops & Strategic Sessions",
    tagline: "Custom in-person or virtual sessions for groups up to 40.",
    focus: ["Sponsorship vs. mentorship", "Leadership double bind", "Evaluation bias", "Career transitions", "Sustainable ambition"],
    delivery: ["Half or full-day format", "In-person or virtual", "Up to 40 participants", "Custom to your context"],
    bestFor: "Women's networks, manager groups, leadership cohorts, HR and L&D teams.",
  },
  {
    key: "strengths",
    tab: "Strengths",
    badge: "Gallup CliftonStrengths Certified",
    title: "Strengths-Based Team Development",
    tagline: "Compound what already makes teams exceptional.",
    focus: ["Team collaboration", "Role alignment", "Leadership self-awareness", "Performance optimization"],
    delivery: ["Individual assessments", "Team debrief session", "Manager coaching add-on", "Action planning included"],
    bestFor: "New or restructured teams, high-performance units, leadership cohorts.",
  },
  {
    key: "dei",
    tab: "DEI Consultancy",
    badge: "Structural Inclusion & Advancement",
    title: "Structural Inclusion & Advancement Strategy",
    tagline: "Move from awareness to structural, measurable change.",
    focus: ["Promotion process audit", "Sponsorship access gaps", "Leadership criteria review", "Pipeline integrity", "Attrition risk mapping"],
    delivery: ["Discovery & data review", "Findings report", "Strategic recommendations", "Implementation support"],
    bestFor: "HR and DEI leads wanting to move from awareness to structural, measurable change.",
  },
];

const RESEARCH_OUTCOMES = [
  { n: "40%", l: "reduction in attrition after customized DEI programs", s: "McKinsey case data" },
  { n: "30%", l: "increase in women in leadership roles", s: "McKinsey case data" },
  { n: "5×", l: "more likely to retain talent in inclusive cultures", s: "HBR / Deloitte" },
];

const OUTCOMES = [
  { n: "+", l: "Stronger mid-level leadership pipeline" },
  { n: "↑", l: "Increased promotion readiness" },
  { n: "↑", l: "Improved retention of high-potential women" },
  { n: "↑", l: "Greater leadership confidence and visibility" },
  { n: "↓", l: "Reduced burnout risk during critical career stages" },
  { n: "=", l: "Clear alignment between individual growth and business objectives" },
];

const PARTNER_CRITERIA = [
  "Recognize the importance of strengthening progression, not just recruitment",
  "Invest in structured leadership development",
  "Seek measurable advancement impact",
  "Value evidence-based approaches over symbolic initiatives",
  "Support confidentiality while maintaining accountability",
];

const CREDENTIAL_LOGOS = [
  { logo: icfLogo, label: "ICF ACC Certified", scale: 1.76 },
  { logo: gallupLogo, label: "Gallup Certified CliftonStrengths Coach", scale: 1.5 },
  { logo: cdpLogo, label: "Certified Diversity Professional (CDP®)", scale: 1.62 },
  { logo: inseadLogo, label: "Gender Specialist trained at INSEAD", scale: 1.53 },
];

function DiagnosisAccordion({
  items,
  badge,
  badgeTone,
}: {
  items: { t: string; d: string }[];
  badge: string;
  badgeTone: "low" | "high";
}) {
  const badgeClass =
    badgeTone === "low"
      ? "bg-[#efd9d6] text-[#8a4a3f]"
      : "bg-[#d8e3d1] text-[#4a6b3d]";
  return (
    <Accordion type="single" collapsible defaultValue="item-0" className="mt-10 flex flex-col gap-3">
      {items.map((item, i) => (
        <AccordionItem
          key={item.t}
          value={`item-${i}`}
          className="border-0 bg-background border border-[var(--hairline)] data-[state=open]:border-l-2 data-[state=open]:border-l-[var(--gold)] data-[state=open]:bg-[var(--cream)]/40 transition-colors"
        >
          <AccordionTrigger className="px-6 py-5 hover:no-underline [&>svg]:hidden group">
            <div className="flex items-center gap-5 flex-1 text-left">
              <span className={`inline-flex shrink-0 items-center px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] font-medium ${badgeClass}`}>
                {badge}
              </span>
              <span className="font-serif text-[18px] md:text-[20px] text-foreground leading-tight">
                {item.t}
              </span>
            </div>
            <span aria-hidden className="ml-4 text-foreground/40 text-xl font-light group-data-[state=open]:text-[var(--gold)] transition-colors">
              <span className="group-data-[state=open]:hidden">+</span>
              <span className="hidden group-data-[state=open]:inline">×</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-0">
            <div className="border-t border-[var(--hairline)]/70 pt-4">
              <p className="text-[14.5px] md:text-[15px] text-foreground/75 leading-relaxed max-w-3xl">{item.d}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Organizations() {
  const [diagnose, setDiagnose] = useState<"not" | "moves">("not");
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[var(--hairline)]/60 bg-[var(--background)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-[55%] hidden lg:block"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklch, var(--cream) 96%, var(--gold)) 0%, color-mix(in oklch, var(--cream) 88%, var(--gold-subtle)) 100%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
          <div
            className="absolute left-[42%] top-[15%] bottom-[12%] w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, color-mix(in oklch, var(--gold) 35%, transparent) 30%, color-mix(in oklch, var(--gold) 35%, transparent) 70%, transparent)",
            }}
          />
          <div
            className="absolute left-[6%] w-[32%] h-px bottom-[14%]"
            style={{
              background:
                "linear-gradient(to right, color-mix(in oklch, var(--gold) 50%, transparent), transparent)",
            }}
          />
        </div>

        <Container className="relative pt-20 pb-28 md:pt-28 md:pb-36" style={{ zIndex: 10 }}>
          <div className="max-w-4xl">
            <Reveal variant="fade-in" duration="slow">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-10" style={{ background: "var(--gold)" }} />
                <span className="eyebrow" style={{ color: "var(--gold)", letterSpacing: "0.22em" }}>
                  For Organizations
                </span>
              </div>
            </Reveal>
            <Reveal variant="slide-right" duration="slow" delay={80}>
              <h1 className="leading-[0.95] text-[clamp(2.4rem,5.5vw,4.2rem)]">
                <span className="voice-serif-light block text-foreground">The investment is real.</span>
                <span className="voice-sans-bold block mt-1 text-foreground/90">The returns </span>
                <span className="voice-serif-italic block -mt-1">have not been.</span>
              </h1>
            </Reveal>
            <Reveal variant="fade-in" delay={180}>
              <div
                className="mt-8 mb-2"
                style={{ height: "1px", width: "3rem", background: "var(--gold)", opacity: 0.65 }}
              />
              <p
                className="max-w-2xl text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light"
                style={{
                  borderLeft: "1px solid color-mix(in oklch, var(--gold) 38%, transparent)",
                  paddingLeft: "1.25rem",
                }}
              >
                A decade of DEI programs. The pipeline is still broken. Here is what the research says
                about why — and what actually changes things.
              </p>
            </Reveal>
            <Reveal variant="fade-up" duration="fast" delay={260}>
              <div className="mt-10" style={{ paddingLeft: "1.25rem" }}>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground/90 transition-colors">
                  Schedule an Organizational Consultation <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Stats — no longer a flat grid; staggered, bridges into next section */}
          <div className="relative mt-16 md:mt-20 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {STATS.map((s, i) => (
              <Reveal
                key={s.l}
                delay={i * 80}
                as="div"
                className={`relative pl-6 border-l-2 border-[var(--gold)]/50 ${i === 1 ? "sm:mt-8" : ""}`}
              >
                <div className="font-serif text-[3rem] md:text-[4rem] text-[var(--gold)] leading-none">
                  {s.n}<span className="text-copy-muted text-[1.5rem] md:text-[2rem]">{s.suffix}</span>
                </div>
                <p className="mt-4 text-[14px] md:text-[15px] text-foreground/80 leading-relaxed max-w-xs">{s.l}</p>
                <p className="type-micro mt-3">{s.s}</p>
              </Reveal>
            ))}
          </div>
        </Container>
        {/* Connector bridging hero into the diagnostic panel below */}
        <div aria-hidden className="connector-thread h-24 bottom-0" />
      </section>

      {/* DIAGNOSIS — toggle + accordion */}
      <section className="relative bg-[var(--cream)]/70 border-y border-[var(--hairline)]/60 py-20 md:py-28">
        <Container>
          <Reveal variant="slide-right" duration="slow">
            <h2 className="max-w-3xl leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
              <span className="voice-serif-light text-foreground">The diagnostic is clear</span>
              <span className="voice-sans-bold text-foreground/85"> — the </span>
              <span className="voice-serif-italic">prescriptions have not been.</span>
            </h2>
          </Reveal>

          <div className="mt-12 inline-flex border border-[var(--hairline)] w-full md:w-auto">
            <button
              onClick={() => setDiagnose("not")}
              className={`flex-1 md:flex-none px-6 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors ${diagnose === "not" ? "bg-foreground text-background" : "bg-background text-foreground/70 hover:text-foreground"}`}
            >
              What isn't working
            </button>
            <button
              onClick={() => setDiagnose("moves")}
              className={`flex-1 md:flex-none px-6 py-3 text-[11px] uppercase tracking-[0.22em] border-l border-[var(--hairline)] transition-colors ${diagnose === "moves" ? "bg-foreground text-background" : "bg-background text-foreground/70 hover:text-foreground"}`}
            >
              What moves the needle
            </button>
          </div>

          {diagnose === "not" ? (
            <DiagnosisAccordion items={NOT_WORKING} badge="Low Yield" badgeTone="low" />
          ) : (
            <DiagnosisAccordion items={MOVES_NEEDLE} badge="High Impact" badgeTone="high" />
          )}
        </Container>
      </section>

      {/* CORPORATE OFFERINGS — Sounds Familiar + The Engagements */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <h2 className="leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
                <span className="voice-serif-light text-foreground">Four ways to move from </span>
                <span className="voice-serif-italic">intention</span>
                <span className="voice-serif-light text-foreground"> to </span>
                <span className="voice-sans-bold text-foreground/90">measurable outcome.</span>
              </h2>
              <p className="mt-6 max-w-4xl text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                Designed for HR, L&amp;D, and leadership teams ready to go beyond programs &mdash; into
                structural change that actually retains and advances talent.
              </p>
            </div>
          </Reveal>
          {/* Sounds Familiar — editorial subtitle */}
          <Reveal>
            <div className="mt-20 text-center">
              <h3 className="mt-4 font-serif italic text-3xl md:text-4xl text-[var(--gold)] font-light">
                Sounds familiar?
              </h3>
              <div className="mx-auto mt-5 h-px w-16 bg-[var(--gold)]/60" />
            </div>
          </Reveal>

          {/* Editorial quote trio — staggered, no boxes */}
          <div className="mt-14 grid gap-10 md:gap-6 md:grid-cols-3">
            {SOUND_FAMILIAR.map((q, i) => (
              <Reveal
                key={q}
                delay={i * 80}
                as="div"
                className={`group pl-6 border-l border-[var(--gold)]/60 hover:border-[var(--gold)] hover:-translate-y-1 transition-all duration-500 ${
                  i === 1 ? "md:mt-14" : i === 2 ? "md:mt-7" : ""
                }`}
              >
                <div className="font-serif text-[var(--gold)] text-6xl leading-none -mt-2 mb-2 select-none">
                  &ldquo;
                </div>
                <p className="font-serif italic text-[17px] md:text-[18px] text-foreground/85 leading-relaxed">
                  {q}
                </p>
                <div className="type-micro mt-5 flex items-center gap-3 uppercase tracking-[0.22em]">
                  <span className="h-px w-6 bg-foreground/25" />
                  From conversations with HR leaders
                </div>
              </Reveal>
            ))}
          </div>

          {/* The Engagements — title block */}
        </Container>
      </section>

      {/* CORPORATE ENGAGEMENTS */}
      <section className="bg-[var(--cream)]/70 border-y border-[var(--hairline)]/60 py-20 md:py-28">
        <Container>
          <Reveal className="hidden">
            <div className="max-w-4xl">
              <h2 className="font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground">
                Four ways to move from{" "}
                <em className="text-[var(--gold)] not-italic font-light">
                  intention to measurable outcome.
                </em>
              </h2>
              <p className="mt-6 max-w-4xl text-[15px] md:text-[16px] text-foreground/80 leading-relaxed font-light">
                Designed for HR, L&amp;D, and leadership teams ready to go beyond programs — into
                structural change that actually retains and advances talent.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="hidden">
              <h2 className="mt-6 font-serif text-[2.1rem] sm:text-4xl md:text-[2.6rem] lg:text-[3rem] leading-[1.08] text-foreground max-w-3xl">
                The engagements<em className="text-[var(--gold)] not-italic font-light">.</em>
              </h2>
              <p className="mt-7 max-w-2xl text-[15px] md:text-[16px] text-foreground/75 leading-relaxed font-light">
                Four ways to move from intention to measurable outcome. Designed for HR, L&amp;D,
                and leadership teams ready to go beyond programs — into structural change that
                actually retains and advances talent.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Tabs defaultValue="coaching" className="w-full">
              <TabsList className="flex flex-wrap h-auto p-0 bg-transparent gap-0 border border-[var(--hairline)] rounded-none w-full">
                {OFFERINGS.map((o) => (
                  <TabsTrigger
                    key={o.key}
                    value={o.key}
                    className="flex-1 min-w-[140px] rounded-none py-3 px-3 text-[11px] uppercase tracking-[0.18em] font-medium bg-background text-foreground/70 border-r border-[var(--hairline)] last:border-r-0 data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
                  >
                    {o.tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              {OFFERINGS.map((o) => (
                <TabsContent key={o.key} value={o.key} className="mt-0 border border-t-0 border-[var(--hairline)] bg-background">
                  <div className="p-8 md:p-12">
                    <div>
                      <div className="eyebrow text-[var(--gold)]">{o.badge}</div>
                      <h3 className="mt-4 font-serif text-3xl md:text-[2.2rem] leading-tight text-foreground">{o.title}</h3>
                      <p className="mt-3 font-serif italic text-[var(--gold)] text-[15px]">{o.tagline}</p>
                    </div>
                    <Hairline className="my-8" />
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <div className="eyebrow text-[var(--gold)]">Focus areas</div>
                        <ul className="mt-4 space-y-2">
                          {o.focus.map((f) => (
                            <li key={f} className="flex items-baseline gap-3 text-[14px] text-foreground/80 border-b border-[var(--hairline)]/60 py-1.5">
                              <span aria-hidden className="text-[var(--gold)] text-[10px]">◆</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="eyebrow text-[var(--gold)]">Delivery</div>
                        <ul className="mt-4 space-y-2">
                          {o.delivery.map((d) => (
                            <li key={d} className="flex items-baseline gap-3 text-[14px] text-foreground/80 border-b border-[var(--hairline)]/60 py-1.5">
                              <span aria-hidden className="text-[var(--gold)] text-[10px]">◆</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Hairline className="my-8" />
                    <div>
                      <div className="eyebrow text-foreground/55">Best for</div>
                      <p className="mt-3 text-[15px] text-foreground/80 leading-relaxed max-w-2xl">{o.bestFor}</p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </Container>
      </section>

      {/* WHAT THE RESEARCH SAYS */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="eyebrow text-[var(--gold)]">What the research says happens when this works</div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {RESEARCH_OUTCOMES.map((r, i) => (
              <Reveal
                key={r.l}
                delay={i * 80}
                as="div"
                className={`relative text-center px-6 py-8 ${i === 1 ? "md:-translate-y-4" : ""}`}
              >
                {i > 0 && (
                  <span aria-hidden className="hidden md:block absolute left-0 top-8 bottom-8 w-px bg-[color-mix(in_oklch,var(--gold)_25%,transparent)]" />
                )}
                <div className="font-serif text-[4rem] md:text-[5rem] text-[var(--gold)] leading-none">{r.n}</div>
                <p className="mt-6 text-[15px] md:text-[16px] text-foreground/80 leading-relaxed max-w-[260px] mx-auto">{r.l}</p>
                <p className="type-micro mt-5 font-serif italic">{r.s}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* OUTCOMES — editorial list */}
      <section className="bg-[var(--cream)]/70 border-y border-[var(--hairline)]/60 py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="max-w-3xl leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
              <span className="voice-sans-bold text-foreground/90">What partners typically </span>
              <span className="voice-serif-italic">achieve.</span>
            </h2>
          </Reveal>
          <div className="mt-14 max-w-4xl border-t border-[var(--hairline)]">
            {OUTCOMES.map((o, i) => (
              <Reveal
                key={o.l}
                delay={i * 40}
                as="div"
                className="group flex items-center gap-6 md:gap-10 py-6 md:py-7 border-b border-[var(--hairline)] hover:pl-3 transition-[padding] duration-500"
              >
                <div className="w-14 md:w-16 shrink-0 font-serif text-[2.5rem] md:text-[3rem] text-[var(--gold)] leading-none text-center">
                  {o.n}
                </div>
                <p className="font-serif text-[19px] md:text-[22px] text-foreground leading-snug">{o.l}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ORGANIZATIONS SERIOUS ABOUT PROGRESSION */}
      <section className="bg-background py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
            <Reveal>
              <h2 className="leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
                <span className="voice-serif-light text-foreground">Organizations serious about </span>
                <span className="voice-serif-italic">progression.</span>
              </h2>
              <p className="mt-7 max-w-md text-[15px] md:text-[16px] text-foreground/75 leading-relaxed font-light">
                Leadership equity is not achieved through intention alone. It requires deliberate
                development, structured support, and informed navigation of organizational realities.
              </p>
              <p className="mt-5 max-w-md text-[15px] md:text-[16px] text-foreground/75 leading-relaxed font-light">
                If your organization is committed to strengthening its leadership pipeline through
                strategic, evidence-based coaching and consulting, I welcome a conversation.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="border border-[var(--hairline)] bg-background p-8 md:p-10">
                <div className="eyebrow text-foreground/55">We partner with organizations that:</div>
                <Hairline className="mt-5" />
                <ul className="mt-6 space-y-5">
                  {PARTNER_CRITERIA.map((c, i) => (
                    <li key={c} className="flex items-baseline gap-5">
                      <span className="font-serif italic text-[var(--gold)] text-xl md:text-2xl w-10 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] text-foreground/80 leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* TRAINING BEHIND METHODOLOGY */}
      <section className="bg-[var(--cream)]/70 border-y border-[var(--hairline)]/60 py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="max-w-3xl leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
              <span className="voice-serif-light text-foreground">The training behind the </span>
              <span className="voice-sans-bold text-foreground/90">methodology.</span>
            </h2>
          </Reveal>
          <div className="relative mt-14 grid gap-y-10 gap-x-6 grid-cols-2 md:grid-cols-4">
            {CREDENTIAL_LOGOS.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 60}
                as="article"
                className={`flex flex-col items-center text-center gap-5 px-3 ${
                  i > 0 ? "md:border-l md:border-[color-mix(in_oklch,var(--hairline)_55%,transparent)]" : ""
                }`}
              >
                <div className="flex items-center justify-center w-full h-20 md:h-24">
                  <img
                    src={c.logo}
                    alt={c.label}
                    loading="lazy"
                    className="object-contain h-14 md:h-16 w-auto max-w-[220px]"
                    style={{ transform: `scale(${c.scale})`, transformOrigin: "center" }}
                  />
                </div>
                <p className="type-micro min-h-[2.5rem]">{c.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background">
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              <Reveal variant="fade-in" duration="slow">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[var(--gold)]" />
                  <span className="eyebrow text-[var(--gold)]" style={{ letterSpacing: "0.22em" }}>
                    Begin
                  </span>
                </div>
              </Reveal>
              <Reveal variant="slide-right" duration="slow" delay={80}>
                <h2 className="mt-6 leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
                  <span className="voice-serif-light text-background">Strengthen the pipeline. </span>
                  <span className="voice-sans-bold text-background/90">Support the leaders </span>
                  <span className="voice-serif-italic">already within it.</span>
                </h2>
              </Reveal>
              <Reveal variant="fade-in" delay={180}>
                <p className="mt-8 max-w-2xl text-[15px] md:text-[16px] text-background/70 leading-relaxed font-light">
                  A confidential discussion to explore your leadership goals, current challenges, and
                  how structured advancement coaching could support your talent strategy.
                </p>
              </Reveal>
            </div>
            <Reveal variant="fade-up" duration="fast" delay={260} className="md:col-span-4 flex flex-col gap-4">
              <Link to="/contact" className="inline-flex items-center justify-between gap-2 bg-background text-foreground px-7 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--cream)] transition-colors">
                Schedule an Organizational Consultation <span aria-hidden>→</span>
              </Link>
              <Link to="/work-with-me" className="inline-flex items-center justify-between gap-2 border border-background/50 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-background hover:bg-background hover:text-foreground transition-colors">
                Explore Individual Coaching <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
