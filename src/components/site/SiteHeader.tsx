import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./primitives";
import logoSrc from "@/assets/logo.png";

type NavItem = {
  to: "/work-with-me" | "/organizations" | "/organizations-figma" | "/about" | "/about-v2" | "/insights" | "/contact" | "/contact-v2";
  label: string;
  children?: readonly { to: NavItem["to"]; label: string }[];
};

/* The Organizations, About and Contact dropdowns are review-only; drop the children once the client picks a version. */
const NAV: readonly NavItem[] = [
  { to: "/work-with-me", label: "Work With Me" },
  {
    to: "/organizations",
    label: "Organizations",
    children: [
      { to: "/organizations", label: "Current version" },
      { to: "/organizations-figma", label: "Figma version" },
    ],
  },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", label: "About" },
      { to: "/about-v2", label: "About Version Two" },
    ],
  },
  { to: "/insights", label: "Insights" },
  {
    to: "/contact",
    label: "Contact",
    children: [
      { to: "/contact", label: "Contact" },
      { to: "/contact-v2", label: "Contact Form Version 2" },
    ],
  },
];

const NAV_LINK = cn(
  "relative py-2 text-[length:var(--text-small)] font-medium tracking-wide text-foreground/90 transition-colors hover:text-foreground",
  "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--gold-deep)] after:transition-transform after:duration-[var(--motion-interaction)] after:ease-[var(--ease-out-soft)] hover:after:scale-x-100",
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-deep)]",
);

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
            <span className="hidden sm:flex lg:hidden xl:flex flex-col leading-none">
              <span className="text-[0.625rem] uppercase tracking-[0.22em] text-copy-muted">
                Coaching · Consulting
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV.map((item) => {
              const active =
                pathname === item.to || !!item.children?.some((c) => c.to === pathname);
              if (!item.children) {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(NAV_LINK, active && "text-foreground after:scale-x-100")}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.to} className="group/menu relative">
                  <Link
                    to={item.to}
                    aria-haspopup="true"
                    className={cn(NAV_LINK, "inline-flex items-center gap-1.5", active && "text-foreground after:scale-x-100")}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className="text-[0.6rem] text-copy-muted transition-transform duration-300 group-hover/menu:rotate-180 group-focus-within/menu:rotate-180"
                    >
                      ▾
                    </span>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] duration-300 group-hover/menu:visible group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:opacity-100">
                    <div className="min-w-[13rem] border border-[color-mix(in_oklch,var(--gold)_25%,transparent)] bg-background py-2 shadow-[0_18px_40px_-24px_color-mix(in_oklch,var(--charcoal)_45%,transparent)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.to + c.label}
                          to={c.to}
                          className={cn(
                            "block px-5 py-2.5 text-[length:var(--text-small)] text-foreground/85 transition-colors hover:bg-[color-mix(in_oklch,var(--gold)_10%,transparent)] hover:text-foreground focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--gold-deep)]",
                            pathname === c.to && "text-gold-ink",
                          )}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
            {NAV.map((item) =>
              item.children ? (
                <div key={item.to} className="flex flex-col">
                  <p className="py-2.5 text-[length:var(--text-body)] text-foreground/90">{item.label}</p>
                  <div className="ml-1 flex flex-col border-l border-[color-mix(in_oklch,var(--gold)_40%,transparent)] pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.to + c.label}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "py-2.5 text-[length:var(--text-body)] text-foreground/75 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-deep)]",
                          pathname === c.to && "text-gold-ink",
                        )}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  /* py-2.5 rather than py-1: at body size that lifts the tap
                     target from roughly 30px to 41px, which is a comfortable
                     thumb target without changing the menu's spacing rhythm. */
                  className="py-2.5 text-[length:var(--text-body)] text-foreground/90 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-deep)]"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/contact" onClick={() => setOpen(false)} className="cta-secondary mt-2 w-full">
              Book a Call <span aria-hidden className="cta-arrow">→</span>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
