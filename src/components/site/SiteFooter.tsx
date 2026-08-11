import { Link } from "@tanstack/react-router";
import { Container, Reveal } from "./primitives";
import icfLogo from "@/assets/icf-acc.png";
import gallupLogo from "@/assets/gallup-strengths.png";
import cdpLogo from "@/assets/cdp.png";
import inseadLogo from "@/assets/insead.png";
import logoSrc from "@/assets/logo.png";

const NAV = [
  ["/work-with-me", "Work With Me"],
  ["/organizations", "Organizations"],
  ["/about", "About"],
  ["/insights", "Insights"],
  ["/contact", "Contact"],
] as const;

const CREDENTIALS = [
  { logo: icfLogo, label: "ICF ACC", markOnly: false },
  { logo: gallupLogo, label: "Gallup", markOnly: false },
  { logo: cdpLogo, label: "CDP®", markOnly: false },
  { logo: inseadLogo, label: "INSEAD", markOnly: true },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 0% 0%, color-mix(in oklch, var(--gold) 14%, transparent), transparent 60%)",
        }}
      />

      <Container className="relative py-14 md:py-16">
        {/* Masthead row */}
        <Reveal variant="fade-up" duration="slow" className="flex flex-col gap-8 border-b border-background/15 pb-10 md:flex-row md:items-end md:justify-between md:gap-10">
          <Link to="/" aria-label="Amna Imran home" className="inline-flex items-center gap-3.5 group">
            <img
              src={logoSrc}
              alt=""
              aria-hidden
              className="h-10 w-auto shrink-0 brightness-0 invert opacity-90"
              draggable={false}
            />
            <span className="font-serif text-[clamp(1.5rem,3vw,2.1rem)] leading-none tracking-[-0.02em] text-background group-hover:text-background/85 transition-colors">
              Amna{" "}
              <em className="type-display-accent not-italic font-light italic text-gold-warm">
                Imran.
              </em>
            </span>
          </Link>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-1 gap-y-2">
              {NAV.map(([to, label], i) => (
                <li key={to} className="flex items-center">
                  {i > 0 && (
                    <span aria-hidden className="mx-2.5 text-gold/50 select-none">
                      ·
                    </span>
                  )}
                  <Link
                    to={to}
                    className="text-[13px] uppercase tracking-[0.16em] text-background/70 transition-colors hover:text-background"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        {/* Mission + credentials */}
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8 md:items-start">
          <Reveal variant="fade-up" delay={80} className="md:col-span-5 max-w-sm type-body text-background/65 md:border-l md:border-[color-mix(in_oklch,var(--gold)_40%,transparent)] md:pl-6">
            <p>
              Executive coaching and organizational consulting for high-potential women navigating
              advancement in complex environments.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={140} className="md:col-span-7 md:pl-4">
            <p className="eyebrow text-gold mb-5">Credentials</p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
              {CREDENTIALS.map((c) => (
                <li key={c.label} className="flex items-center gap-2.5">
                  <span className="flex h-8 w-10 shrink-0 items-center justify-center">
                    {c.markOnly ? (
                      <span className="block h-7 w-7 overflow-hidden rounded-full bg-background/10">
                        <img
                          src={c.logo}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          className="h-7 w-auto max-w-none object-left"
                        />
                      </span>
                    ) : (
                      <img
                        src={c.logo}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="h-7 w-7 object-contain"
                      />
                    )}
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.14em] text-background/55">
                    {c.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="fade-in" delay={200} className="mt-12 flex flex-col gap-3 border-t border-background/12 pt-6 text-[12px] text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Amna Imran. All rights reserved.</div>
          <div className="eyebrow text-gold/70">Strategy · Coaching · Advancement</div>
        </Reveal>
      </Container>
    </footer>
  );
}
