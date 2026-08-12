import { useState } from "react";
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
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-[var(--hairline)]/60">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" aria-label="Amna Imran home" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Amna Imran"
              className="h-12 md:h-14 w-auto select-none"
              draggable={false}
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[9px] uppercase tracking-[0.32em] text-foreground/60">
                Coaching · Consulting
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-[15px] font-medium tracking-wide text-foreground/85 hover:text-foreground transition-colors",
                  pathname === item.to && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-foreground px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
            >
              Book a Call <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
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
                className="text-base text-foreground/80 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 border border-foreground px-4 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              Book a Call <span aria-hidden>→</span>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
