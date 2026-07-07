import { createFileRoute } from "@tanstack/react-router";
import { Container, Reveal } from "@/components/site/primitives";

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

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center overflow-hidden select-none"
          style={{ zIndex: 0 }}
        >
          <div
            className="font-serif font-light leading-none tracking-[-0.02em] whitespace-nowrap"
            style={{
              fontSize: "clamp(4rem, 14vw, 12rem)",
              color: "color-mix(in oklch, var(--gold) 8%, transparent)",
              transform: "translateX(12%)",
            }}
          >
            insights
          </div>
        </div>

        <Container className="relative pt-16 md:pt-24 pb-16 md:pb-24" style={{ zIndex: 10 }}>
          <div className="max-w-3xl">
            <Reveal variant="fade-in" duration="slow">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-10" style={{ background: "var(--gold)" }} />
                <span className="eyebrow" style={{ color: "var(--gold)", letterSpacing: "0.22em" }}>
                  Insights
                </span>
              </div>
            </Reveal>

            <Reveal variant="slide-right" duration="slow" delay={80}>
              <h1 className="leading-[1.05] text-[clamp(2.1rem,4.2vw,3.2rem)]">
                <span className="voice-serif-light text-foreground">Perspectives on advancement, </span>
                <em className="voice-serif-italic text-[var(--gold)] not-italic font-light">Gender &amp; Strategy.</em>
              </h1>
            </Reveal>

            <Reveal variant="fade-in" delay={180}>
              <div
                className="mt-8 mb-7"
                style={{ height: "1px", width: "3rem", background: "var(--gold)", opacity: 0.65 }}
              />
              <p
                className="font-light leading-relaxed text-foreground/75 text-[15px] md:text-[16px] max-w-xl"
                style={{
                  borderLeft: "1px solid color-mix(in oklch, var(--gold) 38%, transparent)",
                  paddingLeft: "1.25rem",
                }}
              >
                Research-informed perspectives on leadership advancement, gender, and organizational systems.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ARTICLES */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal variant="fade-in" duration="slow">
            <div className="flex items-center gap-4 mb-10">
              <div style={{ height: "1px", width: "3rem", background: "var(--gold)", opacity: 0.65 }} />
              <p className="font-serif italic text-[18px] md:text-[20px] text-foreground/85">
                Six perspectives — coming soon.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.t} delay={i * 70} variant="fade-up" as="article" className="group">
                <a href="#" className="block transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cream)] border border-[var(--hairline)]/70">
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-1 w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,_rgba(184,154,106,0.25),_transparent_70%)]" />
                    <div className="absolute inset-3 border border-[var(--hairline)]" />
                    <div className="absolute left-4 top-4 eyebrow text-foreground/45">Thumbnail</div>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-foreground/55">
                    <span className="text-[var(--gold)]">{a.cat}</span>
                    <span aria-hidden>·</span>
                    <span>{a.date}</span>
                  </div>
                  <h2 className="mt-3 font-serif text-[20px] md:text-[22px] text-foreground leading-snug">
                    <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-300 group-hover:after:w-full">
                      {a.t}
                    </span>
                  </h2>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
