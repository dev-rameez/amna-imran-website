import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/primitives";
import { Accent, PageHero, PageSection, Seam } from "@/components/site/page-kit";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Leadership Strategy, Gender Equity & Career Advancement" },
      { name: "description", content: "Articles on women's advancement, sponsorship, organizational strategy, and the architecture of senior progression." },
      { property: "og:title", content: "Insights — Writing on Advancement & Strategy" },
      { property: "og:description", content: "Essays on advancement, sponsorship, and the systems women navigate." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const ARTICLES = [
  { cat: "Leadership Advancement", date: "Coming soon", t: "The Unwritten Rules of Advancement" },
  { cat: "Gender & Systems", date: "Coming soon", t: "The Leadership Double Bind" },
  { cat: "Sponsorship & Visibility", date: "Coming soon", t: "Visibility Without Overexposure" },
  { cat: "Motherhood & Career Continuity", date: "Coming soon", t: "Motherhood Is a Leadership Transition" },
  { cat: "Strengths-Based Leadership", date: "Coming soon", t: "Strengths-Led Leadership Is Not Soft" },
  { cat: "Organizations & Inclusion", date: "Coming soon", t: "Progression, Not Just Representation" },
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Perspectives on advancement, <Accent>Gender &amp; Strategy.</Accent>
          </>
        }
        lead={
          <p>
            Research-informed perspectives on leadership advancement, gender, and organizational systems.
          </p>
        }
      />

      <Seam from="warm" into="cream" />

      {/* ARTICLES */}
      <PageSection surface="cream">
        <Reveal variant="fade-in" duration="slow">
          <p className="mb-10 font-serif italic text-[length:var(--text-lead)] text-foreground">
            Six perspectives — coming soon.
          </p>
        </Reveal>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.t} delay={i * 80} duration="slow" variant="fade-up" as="article" className="group">
              <a href="#" className="block transition-transform duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cream)] border border-[color-mix(in_oklch,var(--gold)_20%,transparent)]">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-1 w-0 bg-[var(--gold)] transition-all duration-700 group-hover:w-full"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,_rgba(184,154,106,0.25),_transparent_70%)]" />
                  <div className="absolute inset-3 border border-[var(--hairline)]" />
                  <div className="absolute left-4 top-4 eyebrow text-copy-muted">Thumbnail</div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="eyebrow text-gold-ink">{a.cat}</span>
                  <span aria-hidden className="eyebrow text-copy-muted">·</span>
                  <span className="eyebrow text-copy-muted">{a.date}</span>
                </div>
                <h2 className="mt-3 font-serif font-light type-h3 text-foreground">
                  <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-500 group-hover:after:w-full">
                    {a.t}
                  </span>
                </h2>
              </a>
            </Reveal>
          ))}
        </div>
      </PageSection>
    </>
  );
}
