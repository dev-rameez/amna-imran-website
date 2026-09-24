import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/primitives";
import {
  Accent,
  ChapterDivider,
  PAGE_SURFACE,
  PageHero,
  PageSection,
  Seam,
} from "@/components/site/page-kit";
import { cn } from "@/lib/utils";
import portrait from "@/assets/amna-insights.png";

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

/** Cover surfaces cycle through the site palette so the grid reads as one set. */
const COVERS = ["blush", "dark", "sand"] as const;

function ArticleCover({ index }: { index: number }) {
  const surface = COVERS[index % COVERS.length];
  const dark = surface === "dark";
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden border border-[color-mix(in_oklch,var(--gold)_22%,transparent)]"
      style={{ background: PAGE_SURFACE[surface] }}
    >
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          opacity: 0.7,
          background: dark
            ? "radial-gradient(ellipse at 30% 25%, color-mix(in oklch, var(--gold) 22%, transparent), transparent 65%)"
            : "radial-gradient(ellipse at 30% 25%, color-mix(in oklch, var(--gold-subtle) 80%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-3 border transition-colors duration-700",
          dark
            ? "border-background/15 group-hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)]"
            : "border-[color-mix(in_oklch,var(--gold)_25%,transparent)] group-hover:border-[color-mix(in_oklch,var(--gold)_55%,transparent)]",
        )}
      />
      <span aria-hidden className="absolute left-7 top-7 h-1.5 w-1.5 rotate-45 bg-[var(--gold-deep)]" />
      <span
        aria-hidden
        className="absolute left-12 right-7 top-[31px] h-px origin-left scale-x-[0.35] bg-gradient-to-r from-[var(--gold)] to-transparent transition-transform duration-700 group-hover:scale-x-100"
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-3 right-6 select-none font-serif font-light leading-none text-[7rem] transition-colors duration-700 md:text-[8rem]",
          dark
            ? "text-background/[0.08] group-hover:text-[color-mix(in_oklch,var(--gold)_30%,transparent)]"
            : "text-[color-mix(in_oklch,var(--gold)_18%,transparent)] group-hover:text-[color-mix(in_oklch,var(--gold)_35%,transparent)]",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        containerClassName="pb-6 md:pb-8"
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
        aside={
          <Reveal variant="fade-up" duration="slow" delay={140} className="relative mx-auto flex w-full max-w-[20rem] justify-center">
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 top-[10%] rounded-t-full"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, color-mix(in oklch, var(--gold-subtle) 70%, transparent), transparent 72%)",
              }}
            />
            <div aria-hidden className="absolute inset-x-[6%] bottom-0 top-[4%] rounded-t-full border border-[color-mix(in_oklch,var(--gold)_30%,transparent)]" />
            <img
              src={portrait}
              alt="Amna Imran"
              className="relative block h-[20rem] w-auto select-none sm:h-[24rem] lg:h-[28rem]"
              draggable={false}
            />
          </Reveal>
        }
      />

      <Seam from="warm" into="cream" intensity="soft" />

      {/* ARTICLES */}
      <PageSection surface="cream" className="pt-8 pb-14 md:pt-10 md:pb-20">
        <ChapterDivider className="mx-auto max-w-3xl" />
        <Reveal variant="fade-in" duration="slow">
          <p className="mt-6 text-center font-serif italic text-[clamp(1.3rem,0.9vw+1rem,1.65rem)] text-foreground">
            Six perspectives — <em className="italic text-gold-warm">coming soon.</em>
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
          {ARTICLES.map((a, i) => (
            <Reveal
              key={a.t}
              delay={(i % 3) * 120}
              duration="slow"
              variant="fade-up"
              as="article"
              className={cn("group", i % 3 === 1 && "lg:mt-12")}
            >
              <a href="#" className="block transition-transform duration-500 hover:-translate-y-1">
                <ArticleCover index={i} />
                <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="eyebrow text-gold-ink">{a.cat}</span>
                  <span aria-hidden className="h-1 w-1 rotate-45 bg-[var(--gold)]" />
                  <span className="eyebrow text-copy-muted">{a.date}</span>
                </div>
                <h2 className="mt-3 font-serif font-light type-h2 leading-tight text-foreground">
                  <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-700 group-hover:bg-[length:100%_1px]">
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
