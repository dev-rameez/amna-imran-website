import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container, Hairline, Reveal } from "@/components/site/primitives";
import {
  Accent,
  CtaArrow,
  ONE_LINE_CTA,
  PageHeading,
  PageHero,
  PageSection,
  Seam,
} from "@/components/site/page-kit";
import {
  CARD,
  CREDENTIAL_LOGOS,
  MOVES_NEEDLE,
  NOT_WORKING,
  OFFERINGS,
  OUTCOMES,
  PARTNER_CRITERIA,
  RESEARCH_OUTCOMES,
  SOUND_FAMILIAR,
  STATS,
} from "@/components/site/organizations-content";
import portrait from "@/assets/amna-hero-v2.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/organizations-figma")({
  head: () => ({
    meta: [
      { title: "For Organizations | Advance & Retain High-Potential Women Leaders" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/organizations" }],
  }),
  component: OrganizationsFigma,
});

const GOLD_BORDER = "border-[color-mix(in_oklch,var(--gold)_30%,transparent)]";

function DiagnosisAccordion({
  items,
  badge,
  badgeClass,
}: {
  items: { t: string; d: string }[];
  badge: string;
  badgeClass: string;
}) {
  return (
    <Accordion type="single" collapsible defaultValue="item-0" className="mt-8 flex flex-col gap-3">
      {items.map((item, i) => (
        <Reveal key={item.t} delay={i * 80} duration="slow">
          <AccordionItem
            value={`item-${i}`}
            className={cn(
              CARD,
              "transition-colors duration-500 data-[state=open]:border-l-2 data-[state=open]:border-l-[var(--gold)] data-[state=open]:bg-background",
            )}
          >
            <AccordionTrigger className="group px-5 py-5 hover:no-underline md:px-6 [&>svg]:hidden">
              <div className="flex flex-1 flex-col gap-3 text-left sm:flex-row sm:items-center sm:gap-5">
                <span className={cn("inline-flex w-fit shrink-0 items-center px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em]", badgeClass)}>
                  {badge}
                </span>
                <span className="font-serif font-light type-h3 leading-tight text-foreground">{item.t}</span>
              </div>
              <span aria-hidden className="ml-4 text-xl font-light text-foreground/40 transition-colors group-data-[state=open]:text-[var(--gold)]">
                <span className="group-data-[state=open]:hidden">+</span>
                <span className="hidden group-data-[state=open]:inline">×</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-6 pt-0 md:px-6">
              <div className="border-t border-[var(--hairline)]/70 pt-4">
                <p className="max-w-3xl type-body text-copy">{item.d}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Reveal>
      ))}
    </Accordion>
  );
}

function OrganizationsFigma() {
  const [diagnose, setDiagnose] = useState<"not" | "moves">("not");
  const toggleClass = (active: boolean) =>
    cn(
      "flex-1 px-5 py-3.5 font-sans text-[length:var(--text-small)] font-medium uppercase tracking-[0.16em] transition-colors duration-500 md:flex-none md:px-6",
      active ? "bg-foreground text-background" : "bg-background/70 text-copy hover:text-foreground",
    );

  return (
    <>
      <PageHero
        title={
          <>
            The investment is real.
            <br />
            <Accent>The returns have not been.</Accent>
          </>
        }
        lead={
          <p>
            A decade of DEI programs. The pipeline is still broken. Here is what the research says
            about why — and what actually changes things.
          </p>
        }
        actions={
          <Link to="/contact" className={cn("cta-primary w-full sm:w-auto sm:self-start", ONE_LINE_CTA)}>
            Schedule an Organizational Consultation <CtaArrow />
          </Link>
        }
        aside={
          <Reveal
            variant="fade-up"
            duration="slow"
            delay={140}
            className="relative mx-auto h-[22rem] w-[17rem] sm:h-[26rem] sm:w-[20rem] lg:h-[32rem] lg:w-[24rem]"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-t-full"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, color-mix(in oklch, var(--gold-subtle) 70%, transparent), transparent 72%)",
              }}
            />
            <div aria-hidden className="absolute inset-[6%] rounded-t-full border border-[color-mix(in_oklch,var(--gold)_30%,transparent)]" />
            <div className="absolute inset-0 overflow-hidden rounded-t-full">
              <img
                src={portrait}
                alt="Amna Imran"
                className="absolute inset-0 h-full w-full scale-[1.35] select-none object-cover object-[50%_70%]"
                draggable={false}
              />
            </div>
          </Reveal>
        }
      />

      <Seam from="warm" into="sand" intensity="soft" />

      {/* STATS BAND */}
      <PageSection surface="sand" className="py-8 md:py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 120}
              duration="slow"
              as="div"
              className={cn(CARD, "px-6 py-10 text-center transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)]")}
            >
              <div className="font-serif font-light text-[3rem] leading-none text-gold-warm md:text-[3.5rem]">
                {s.n}
                <span className="text-[1.4rem] text-copy-muted md:text-[1.6rem]">{s.suffix}</span>
              </div>
              <p className="mx-auto mt-5 max-w-[16rem] type-body text-copy">{s.l}</p>
              <p className="mt-4 type-micro">{s.s}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Seam from="sand" into="cream" intensity="soft" />

      {/* DIAGNOSIS */}
      <PageSection surface="cream" className="py-12 md:py-16">
        <PageHeading>
          The diagnostic is clear — the <Accent>prescriptions have not been.</Accent>
        </PageHeading>

        <Reveal duration="slow" delay={100}>
          <div className={cn("mt-12 inline-flex w-full border md:w-auto", GOLD_BORDER)}>
            <button type="button" onClick={() => setDiagnose("not")} className={toggleClass(diagnose === "not")}>
              What isn't working
            </button>
            <button
              type="button"
              onClick={() => setDiagnose("moves")}
              className={cn(toggleClass(diagnose === "moves"), "border-l", GOLD_BORDER)}
            >
              What moves the needle
            </button>
          </div>
        </Reveal>

        {diagnose === "not" ? (
          <DiagnosisAccordion key="not" items={NOT_WORKING} badge="Low Yield" badgeClass="bg-[#efd9d6] text-[#8a4a3f]" />
        ) : (
          <DiagnosisAccordion key="moves" items={MOVES_NEEDLE} badge="High Impact" badgeClass="bg-[#d8e3d1] text-[#4a6b3d]" />
        )}
      </PageSection>

      <Seam from="cream" into="sand" intensity="soft" />

      {/* SOUNDS FAMILIAR + THE ENGAGEMENTS */}
      <PageSection surface="sand" className="py-12 md:py-16">
        <Reveal duration="slow">
          <div className="text-center">
            <h2 className="type-h1 font-serif font-light text-foreground">
              <Accent>Sounds familiar?</Accent>
            </h2>
            <div className="mx-auto mt-5 h-px w-16 bg-[var(--gold)]/60" />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {SOUND_FAMILIAR.map((q, i) => (
            <Reveal
              key={q}
              delay={i * 120}
              duration="slow"
              as="article"
              className={cn(
                "border-l border-[var(--gold)]/60 pl-6 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[var(--gold)]",
                i === 1 && "md:mt-10",
              )}
            >
              <div aria-hidden className="select-none font-serif text-5xl leading-none text-[var(--gold)]">
                &ldquo;
              </div>
              <blockquote className="mt-1 font-serif italic text-[clamp(1.15rem,0.7vw+0.95rem,1.4rem)] leading-[1.4] text-foreground">
                {q}
              </blockquote>
              <p className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-copy-muted">
                <span aria-hidden className="h-px w-6 bg-foreground/25" />
                From conversations with HR leaders
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <PageHeading>
            The engagements<span className="text-gold-warm">.</span>
          </PageHeading>
          <Reveal delay={100} duration="slow">
            <p className="mt-6 max-w-2xl type-body text-copy">
              Four ways to move from intention to measurable outcome. Designed for HR, L&amp;D,
              and leadership teams ready to go beyond programs — into structural change that
              actually retains and advances talent.
            </p>
          </Reveal>
        </div>

        <Reveal duration="slow" delay={160}>
          <Tabs defaultValue="coaching" className="mt-12 w-full">
            <TabsList className={cn("grid h-auto w-full grid-cols-2 gap-0 rounded-none border bg-transparent p-0 md:grid-cols-4", GOLD_BORDER)}>
              {OFFERINGS.map((o, i) => (
                <TabsTrigger
                  key={o.key}
                  value={o.key}
                  className={cn(
                    "rounded-none border-[color-mix(in_oklch,var(--gold)_30%,transparent)] bg-background/70 px-3 py-3.5 font-sans text-[length:var(--text-small)] font-medium uppercase tracking-[0.14em] text-copy transition-colors duration-500 data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none",
                    i % 2 === 0 && "border-r",
                    i < 2 && "max-md:border-b",
                    i === 1 && "md:border-r",
                  )}
                >
                  {o.tab}
                </TabsTrigger>
              ))}
            </TabsList>
            {OFFERINGS.map((o) => (
              <TabsContent
                key={o.key}
                value={o.key}
                className={cn("mt-0 border border-t-0 bg-background data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-700", GOLD_BORDER)}
              >
                <div className="p-7 md:p-12">
                  <p className="eyebrow text-gold-ink">{o.badge}</p>
                  <h3 className="mt-4 font-serif font-light type-h1 text-foreground">{o.title}</h3>
                  <p className="mt-3 font-serif italic text-[length:var(--text-lead)] text-gold-warm">{o.tagline}</p>
                  <Hairline className="my-8" />
                  <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    {[
                      { label: "Focus areas", items: o.focus },
                      { label: "Delivery", items: o.delivery },
                    ].map((col) => (
                      <div key={col.label}>
                        <p className="eyebrow text-gold-ink">{col.label}</p>
                        <ul className="mt-4 border-t border-[var(--hairline)]/70">
                          {col.items.map((f) => (
                            <li key={f} className="flex items-center gap-3 border-b border-[var(--hairline)]/70 py-3 type-body text-copy">
                              <span aria-hidden className="text-[10px] text-[var(--gold)]">◆</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <p className="eyebrow text-copy-muted">Best for</p>
                    <p className="mt-3 max-w-2xl type-body text-copy">{o.bestFor}</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </PageSection>

      <Seam from="sand" into="dark" intensity="soft" />

      {/* WHAT THE RESEARCH SAYS */}
      <PageSection surface="dark" className="py-12 md:py-16">
        <Reveal duration="slow">
          <p className="eyebrow text-gold">What the research says happens when this works</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {RESEARCH_OUTCOMES.map((r, i) => (
            <Reveal
              key={r.l}
              delay={i * 120}
              duration="slow"
              as="div"
              className="border border-background/15 px-6 py-10 text-center transition-colors duration-500 hover:border-[var(--gold)]"
            >
              <div className="font-serif font-light text-[3.5rem] leading-none text-gold-warm md:text-[4.5rem]">{r.n}</div>
              <p className="mx-auto mt-6 max-w-[240px] type-body text-background/85">{r.l}</p>
              <p className="mt-5 font-serif italic text-[length:var(--text-small)] text-background/55">{r.s}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Seam from="dark" into="cream" intensity="soft" />

      {/* OUTCOMES */}
      <PageSection surface="cream" className="py-12 md:py-16">
        <PageHeading>
          What partners typically <Accent>achieve.</Accent>
        </PageHeading>
        <div className="mt-12 max-w-3xl border-t border-[var(--hairline)]">
          {OUTCOMES.map((o, i) => (
            <Reveal
              key={o.l}
              delay={i * 70}
              duration="slow"
              as="div"
              className="flex items-center gap-6 border-b border-[var(--hairline)] py-5 transition-[padding] duration-500 hover:pl-3 md:gap-10 md:py-6"
            >
              <span aria-hidden className="w-8 shrink-0 text-center font-serif font-light text-[1.75rem] leading-none text-gold-warm md:w-10 md:text-[2rem]">
                {o.n}
              </span>
              <p className="font-serif text-[length:var(--text-lead)] leading-snug text-foreground">{o.l}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Seam from="cream" into="sand" intensity="soft" />

      {/* ORGANIZATIONS SERIOUS ABOUT PROGRESSION */}
      <PageSection surface="sand" className="py-12 md:py-16">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <PageHeading size="h1">
              Organizations serious about <Accent>progression.</Accent>
            </PageHeading>
            <Reveal delay={100} duration="slow">
              <p className="mt-7 max-w-md type-body text-copy">
                If your organization is committed to strengthening its leadership pipeline through
                strategic, evidence-based coaching and consulting, I welcome a conversation.
              </p>
            </Reveal>
            <Reveal delay={180} duration="slow">
              <Link to="/contact" className={cn("cta-primary mt-10 w-full sm:w-auto", ONE_LINE_CTA)}>
                Schedule an Organizational Consultation <CtaArrow />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={120} duration="slow">
            <div className={cn(CARD, "p-7 md:p-10")}>
              <p className="eyebrow text-copy-muted">We partner with organizations that:</p>
              <div className="mt-6 h-px w-full bg-[color-mix(in_oklch,var(--gold)_30%,transparent)]" />
              <ol className="mt-6 space-y-5">
                {PARTNER_CRITERIA.map((c, i) => (
                  <li key={c} className="flex gap-5">
                    <span className="w-7 shrink-0 font-serif italic text-[1.1rem] leading-[1.4] text-gold-warm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="type-body text-copy">{c}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <Seam from="sand" into="cream" intensity="soft" />

      {/* TRAINING BEHIND METHODOLOGY */}
      <PageSection surface="cream" className="py-12 md:py-16">
        <PageHeading>
          The training behind the <Accent>methodology.</Accent>
        </PageHeading>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {CREDENTIAL_LOGOS.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 100}
              duration="slow"
              as="article"
              className={cn(CARD, "flex flex-col items-center p-5 text-center transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)] md:p-6")}
            >
              <div className="flex h-28 w-full items-center justify-center md:h-40">
                <img src={c.logo} alt={c.label} loading="lazy" className="max-h-full w-auto max-w-full object-contain" />
              </div>
              <div className="mt-5 h-px w-full bg-[var(--hairline)]" />
              <p className="mt-4 text-[length:var(--text-small)] leading-snug text-copy">{c.label}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Seam from="cream" into="dark" intensity="soft" />

      {/* BEGIN */}
      <section className="bg-foreground text-background">
        <Container className="py-14 md:py-20">
          <Reveal variant="fade-up" duration="slow" className="max-w-3xl">
            <p className="eyebrow text-gold">Begin</p>
            <h2 className="mt-5 type-display font-serif font-light text-background">
              Strengthen the pipeline. Support the leaders <Accent>already within it.</Accent>
            </h2>
            <p className="mt-7 max-w-xl type-body text-background/75">
              If your organization is committed to developing and retaining high-potential women,
              the next step is a strategic conversation.
            </p>
          </Reveal>
          <Reveal delay={120} variant="fade-up" duration="slow">
            <div className="mt-10 flex w-full flex-col gap-4 sm:w-fit sm:min-w-[28rem]">
              <Link to="/contact" className={cn("cta-primary-invert", ONE_LINE_CTA)}>
                Schedule an Organizational Consultation <CtaArrow />
              </Link>
              <Link to="/work-with-me" className={cn("cta-secondary-invert", ONE_LINE_CTA)}>
                Explore Individual Coaching <CtaArrow />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
