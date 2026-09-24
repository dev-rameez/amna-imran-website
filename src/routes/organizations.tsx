import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Hairline, Reveal } from "@/components/site/primitives";
import {
  Accent,
  CtaArrow,
  PageCta,
  PageHeading,
  PageHero,
  PageSection,
  Seam,
} from "@/components/site/page-kit";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
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

const NUMERAL =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] font-serif italic text-[1rem] text-gold-deep";

const CARD =
  "border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)]";

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
          className={cn(
            CARD,
            "data-[state=open]:border-l-2 data-[state=open]:border-l-[var(--gold)] data-[state=open]:bg-background transition-colors duration-500",
          )}
        >
          <AccordionTrigger className="px-6 py-5 hover:no-underline [&>svg]:hidden group">
            <div className="flex items-center gap-5 flex-1 text-left">
              <span className={`inline-flex shrink-0 items-center px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] font-medium ${badgeClass}`}>
                {badge}
              </span>
              <span className="font-serif font-light type-h3 text-foreground leading-tight">
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
              <p className="type-body text-copy max-w-3xl">{item.d}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Organizations() {
  const [diagnose, setDiagnose] = useState<"not" | "moves">("not");
  const toggleClass = (active: boolean) =>
    cn(
      "flex-1 md:flex-none px-6 py-3.5 font-sans text-[length:var(--text-small)] font-medium uppercase tracking-[0.16em] transition-colors duration-500",
      active ? "bg-foreground text-background" : "bg-background/70 text-copy hover:text-foreground",
    );
  return (
    <>
      <PageHero
        eyebrow="For Organizations"
        title={
          <>
            The investment is real.
            <br />
            The returns <Accent>have not been.</Accent>
          </>
        }
        lead={
          <p>
            A decade of DEI programs. The pipeline is still broken. Here is what the research says
            about why — and what actually changes things.
          </p>
        }
        actions={
          <Link to="/contact" className="cta-primary w-full justify-between px-6 text-left tracking-[0.12em] lg:whitespace-nowrap">
            Schedule an Organizational Consultation <CtaArrow />
          </Link>
        }
      >
        <div className="relative mt-16 md:mt-20 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {STATS.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 100}
              duration="slow"
              as="div"
              className={`relative pl-6 border-l-2 border-[var(--gold)]/50 ${i === 1 ? "sm:mt-8" : ""}`}
            >
              <div className="font-serif font-light text-[3rem] md:text-[4rem] text-gold-warm leading-none">
                {s.n}<span className="text-copy-muted text-[1.5rem] md:text-[2rem]">{s.suffix}</span>
              </div>
              <p className="mt-4 type-body text-copy max-w-xs">{s.l}</p>
              <p className="type-micro mt-3">{s.s}</p>
            </Reveal>
          ))}
        </div>
      </PageHero>

      <Seam from="warm" into="cream" />

      {/* DIAGNOSIS — toggle + accordion */}
      <PageSection surface="cream">
        <PageHeading>
          The diagnostic is clear — the <Accent>prescriptions have not been.</Accent>
        </PageHeading>

        <div className="mt-12 inline-flex w-full border border-[color-mix(in_oklch,var(--gold)_30%,transparent)] md:w-auto">
          <button onClick={() => setDiagnose("not")} className={toggleClass(diagnose === "not")}>
            What isn't working
          </button>
          <button
            onClick={() => setDiagnose("moves")}
            className={cn(toggleClass(diagnose === "moves"), "border-l border-[color-mix(in_oklch,var(--gold)_30%,transparent)]")}
          >
            What moves the needle
          </button>
        </div>

        {diagnose === "not" ? (
          <DiagnosisAccordion items={NOT_WORKING} badge="Low Yield" badgeTone="low" />
        ) : (
          <DiagnosisAccordion items={MOVES_NEEDLE} badge="High Impact" badgeTone="high" />
        )}
      </PageSection>

      <Seam from="cream" into="sand" />

      {/* CORPORATE OFFERINGS — Sounds Familiar */}
      <PageSection surface="sand">
        <PageHeading>
          Four ways to move from <Accent>intention</Accent> to measurable outcome.
        </PageHeading>
        <Reveal delay={100} duration="slow">
          <p className="mt-6 max-w-3xl type-lead font-light text-copy">
            Designed for HR, L&amp;D, and leadership teams ready to go beyond programs &mdash; into
            structural change that actually retains and advances talent.
          </p>
        </Reveal>

        <Reveal duration="slow">
          <div className="mt-20 text-center">
            <h3 className="type-h1 font-serif font-light text-foreground">
              <Accent>Sounds familiar?</Accent>
            </h3>
            <div className="mx-auto mt-5 h-px w-16 bg-[var(--gold)]/60" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:gap-6 md:grid-cols-3">
          {SOUND_FAMILIAR.map((q, i) => (
            <Reveal
              key={q}
              delay={i * 100}
              duration="slow"
              as="div"
              className={`group pl-6 border-l border-[var(--gold)]/60 hover:border-[var(--gold)] hover:-translate-y-1 transition-all duration-500 ${
                i === 1 ? "md:mt-14" : i === 2 ? "md:mt-7" : ""
              }`}
            >
              <div className="font-serif text-[var(--gold)] text-6xl leading-none -mt-2 mb-2 select-none">
                &ldquo;
              </div>
              <p className="font-serif italic text-[clamp(1.2rem,0.8vw+0.95rem,1.5rem)] leading-[1.35] text-foreground">
                {q}
              </p>
              <p className="eyebrow mt-5 text-copy-muted">From conversations with HR leaders</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Seam from="sand" into="cream" />

      {/* CORPORATE ENGAGEMENTS */}
      <PageSection surface="cream">
        <Reveal duration="slow">
          <Tabs defaultValue="coaching" className="w-full">
            <TabsList className="flex flex-wrap h-auto p-0 bg-transparent gap-0 border border-[color-mix(in_oklch,var(--gold)_30%,transparent)] rounded-none w-full">
              {OFFERINGS.map((o) => (
                <TabsTrigger
                  key={o.key}
                  value={o.key}
                  className="flex-1 min-w-[140px] rounded-none py-3.5 px-3 font-sans text-[length:var(--text-small)] font-medium uppercase tracking-[0.16em] bg-background/70 text-copy border-r border-[color-mix(in_oklch,var(--gold)_30%,transparent)] last:border-r-0 data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
                >
                  {o.tab}
                </TabsTrigger>
              ))}
            </TabsList>
            {OFFERINGS.map((o) => (
              <TabsContent key={o.key} value={o.key} className="mt-0 border border-t-0 border-[color-mix(in_oklch,var(--gold)_30%,transparent)] bg-background">
                <div className="p-8 md:p-12">
                  <div>
                    <p className="eyebrow text-gold-ink">{o.badge}</p>
                    <h3 className="mt-4 font-serif font-light type-h1 text-foreground">{o.title}</h3>
                    <p className="mt-3 font-serif italic text-gold-warm text-[length:var(--text-lead)]">{o.tagline}</p>
                  </div>
                  <Hairline className="my-8" />
                  <div className="grid gap-8 md:grid-cols-2">
                    {[
                      { label: "Focus areas", items: o.focus },
                      { label: "Delivery", items: o.delivery },
                    ].map((col) => (
                      <div key={col.label}>
                        <p className="eyebrow text-gold-ink">{col.label}</p>
                        <ul className="mt-4 space-y-3">
                          {col.items.map((f) => (
                            <li key={f} className="flex gap-3 text-[length:var(--text-body)] leading-[1.55] text-copy">
                              <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-[var(--gold)]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Hairline className="my-8" />
                  <div>
                    <p className="eyebrow text-copy-muted">Best for</p>
                    <p className="mt-3 type-body text-copy max-w-2xl">{o.bestFor}</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </PageSection>

      <Seam from="cream" into="sand" />

      {/* WHAT THE RESEARCH SAYS */}
      <PageSection surface="sand">
        <Reveal duration="slow">
          <p className="eyebrow text-gold-ink">What the research says happens when this works</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {RESEARCH_OUTCOMES.map((r, i) => (
            <Reveal
              key={r.l}
              delay={i * 100}
              duration="slow"
              as="div"
              className={`relative text-center px-6 py-8 ${i === 1 ? "md:-translate-y-4" : ""}`}
            >
              {i > 0 && (
                <span aria-hidden className="hidden md:block absolute left-0 top-8 bottom-8 w-px bg-[color-mix(in_oklch,var(--gold)_25%,transparent)]" />
              )}
              <div className="font-serif font-light text-[4rem] md:text-[5rem] text-gold-warm leading-none">{r.n}</div>
              <p className="mt-6 type-body text-copy max-w-[260px] mx-auto">{r.l}</p>
              <p className="type-micro mt-5 font-serif italic">{r.s}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Seam from="sand" into="cream" />

      {/* OUTCOMES — editorial list */}
      <PageSection surface="cream">
        <PageHeading>
          What partners typically <Accent>achieve.</Accent>
        </PageHeading>
        <div className="mt-14 max-w-4xl border-t border-[var(--hairline)]">
          {OUTCOMES.map((o, i) => (
            <Reveal
              key={o.l}
              delay={i * 60}
              duration="slow"
              as="div"
              className="group flex items-center gap-6 md:gap-10 py-6 md:py-7 border-b border-[var(--hairline)] hover:pl-3 transition-[padding] duration-500"
            >
              <div className="w-14 md:w-16 shrink-0 font-serif font-light text-[2.5rem] md:text-[3rem] text-gold-warm leading-none text-center">
                {o.n}
              </div>
              <p className="font-serif text-[length:var(--text-lead)] text-foreground leading-snug">{o.l}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Seam from="cream" into="sand" />

      {/* ORGANIZATIONS SERIOUS ABOUT PROGRESSION */}
      <PageSection surface="sand">
        <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
          <div>
            <PageHeading>
              Organizations serious about <Accent>progression.</Accent>
            </PageHeading>
            <Reveal delay={100} duration="slow">
              <p className="mt-7 max-w-md type-body text-copy">
                Leadership equity is not achieved through intention alone. It requires deliberate
                development, structured support, and informed navigation of organizational realities.
              </p>
              <p className="mt-5 max-w-md type-body text-copy">
                If your organization is committed to strengthening its leadership pipeline through
                strategic, evidence-based coaching and consulting, I welcome a conversation.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} duration="slow">
            <div className={cn(CARD, "p-8 md:p-10")}>
              <p className="eyebrow text-copy-muted">We partner with organizations that:</p>
              <div className="mt-6 h-px w-full bg-[color-mix(in_oklch,var(--gold)_30%,transparent)]" />
              <ul className="mt-6 space-y-5">
                {PARTNER_CRITERIA.map((c, i) => (
                  <li key={c} className="flex items-center gap-5">
                    <span className={NUMERAL}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="type-body text-copy">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <Seam from="sand" into="cream" />

      {/* TRAINING BEHIND METHODOLOGY */}
      <PageSection surface="cream">
        <PageHeading>
          The training behind the <Accent>methodology.</Accent>
        </PageHeading>
        <div className="relative mt-14 grid gap-y-10 gap-x-6 grid-cols-2 md:grid-cols-4">
          {CREDENTIAL_LOGOS.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 100}
              duration="slow"
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
              <p className="eyebrow min-h-[2.5rem] max-w-[15rem] leading-[1.45] tracking-[0.11em] text-copy">{c.label}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageCta
        title={
          <>
            Strengthen the pipeline. Support the leaders <Accent>already within it.</Accent>
          </>
        }
        body="A confidential discussion to explore your leadership goals, current challenges, and how structured advancement coaching could support your talent strategy."
        actions={
          <>
            <Link to="/contact" className="cta-primary-invert justify-between px-6 text-left tracking-[0.12em]">
              Schedule an Organizational Consultation <CtaArrow />
            </Link>
            <Link to="/work-with-me" className="cta-secondary-invert justify-between px-6 text-left tracking-[0.12em]">
              Explore Individual Coaching <CtaArrow />
            </Link>
          </>
        }
      />
    </>
  );
}
