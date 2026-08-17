import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./primitives";
import logoSrc from "@/assets/logo.png";

const NAV = [
  { to: "/work-with-me", label: "Work With Me" },
  { to: "/organizations", label: "Organizations" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const { pathname } = useLocation();

  /* Compact the header once the hero starts leaving, so it takes less of the
     viewport while scrolling. Skipped entirely under reduced-motion. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-background/85 backdrop-blur transition-[background-color,border-color,box-shadow] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] supports-[backdrop-filter]:bg-background/70",
        compact
          ? "border-[var(--hairline)] shadow-[0_10px_30px_-24px_color-mix(in_oklch,var(--charcoal)_45%,transparent)]"
          : "border-[var(--hairline)]/60",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)]",
            compact ? "h-16" : "h-20",
          )}
        >
          <Link to="/" aria-label="Amna Imran home" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Amna Imran"
              className={cn(
                "w-auto select-none transition-[height] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)]",
                compact ? "h-11 md:h-12" : "h-14 md:h-16",
              )}
              draggable={false}
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[length:var(--text-caption)] uppercase tracking-[0.28em] text-copy-muted">
                Coaching · Consulting
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative py-2 text-[length:var(--text-small)] font-medium tracking-wide text-foreground/90 transition-colors hover:text-foreground",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--gold-deep)] after:transition-transform after:duration-[var(--motion-interaction)] after:ease-[var(--ease-out-soft)] hover:after:scale-x-100",
                  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-deep)]",
                  pathname === item.to && "text-foreground after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="cta-secondary px-5 py-3">
              Book a Call <span aria-hidden className="cta-arrow">→</span>
            </Link>
          </div>

          <button
            className="lg:hidden -mr-2 p-3 transition-colors hover:text-[var(--gold-deep)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-deep)]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-[var(--hairline)]/60 bg-background">
          <Container className="py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-1 text-[length:var(--text-body)] text-foreground/90 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-deep)]"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="cta-secondary mt-2 w-full">
              Book a Call <span aria-hidden className="cta-arrow">→</span>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
