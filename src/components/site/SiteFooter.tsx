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
          <Link
            to="/"
            aria-label="Amna Imran home"
            className="group inline-flex items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-warm)]"
          >
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
                    className="text-[length:var(--text-small)] uppercase tracking-[0.16em] text-background/80 transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-warm)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        {/* Band 2 — mission, contact and credentials.
            CONTENT GAP: there are no contact details (email / phone) and no social
            profile links anywhere in this footer. Both need to be supplied before
            launch; the contact column below is deliberately a route link only
            rather than invented placeholder data. */}
        <div className="mt-12 grid gap-10 border-b border-background/15 pb-12 md:grid-cols-12 md:gap-8 md:items-start">
          <Reveal variant="fade-up" delay={80} className="md:col-span-4 max-w-sm md:border-l md:border-[color-mix(in_oklch,var(--gold)_40%,transparent)] md:pl-6">
            <p className="type-body text-background/80">
              Executive coaching and organizational consulting for high-potential women navigating
              advancement in complex environments.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={120} className="md:col-span-3">
            <p className="eyebrow text-gold mb-5">Get in touch</p>
            <Link
              to="/contact"
              className="text-[length:var(--text-small)] text-background/80 underline decoration-[color-mix(in_oklch,var(--gold)_55%,transparent)] underline-offset-[6px] transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-warm)]"
            >
              Book a Strategic Clarity Call
            </Link>
          </Reveal>

          <Reveal variant="fade-up" delay={160} className="md:col-span-5">
            <p className="eyebrow text-gold mb-5">Credentials</p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
              {CREDENTIALS.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-12 shrink-0 items-center justify-center">
                    {c.markOnly ? (
                      <span className="block h-9 w-9 overflow-hidden rounded-full bg-background/10">
                        <img
                          src={c.logo}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          className="h-9 w-auto max-w-none object-left"
                        />
                      </span>
                    ) : (
                      <img
                        src={c.logo}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="h-9 w-9 object-contain"
                      />
                    )}
                  </span>
                  <span className="text-[length:var(--text-small)] uppercase tracking-[0.14em] text-background/80">
                    {c.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Band 3 — legal */}
        <Reveal variant="fade-in" delay={200} className="mt-8 flex flex-col gap-3 text-[length:var(--text-small)] text-background/70 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Amna Imran. All rights reserved.</div>
          <div className="eyebrow text-gold/70">Strategy · Coaching · Advancement</div>
        </Reveal>
      </Container>
    </footer>
  );
}
