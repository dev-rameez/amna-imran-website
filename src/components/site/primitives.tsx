import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-6 md:px-10", className)}>{children}</div>;
}

export function Eyebrow({ children, number, className }: { children: React.ReactNode; number?: string; className?: string }) {
  // Section eyebrow labels have been removed site-wide per client direction.
  // Component intentionally renders nothing while preserving the API surface.
  void number;
  void children;
  void className;
  return null;
}

export function Hairline({ className, tone }: { className?: string; tone?: "default" | "gold" }) {
  return <div className={cn(tone === "gold" ? "hairline-gold" : "hairline", className)} />;
}

type SectionSurface = "default" | "cream" | "warm" | "panel" | "blush" | "paper";
type SectionPad = "none" | "hero" | "major" | "minor";
type SectionFlow = "both" | "top" | "bottom";

export function Section({
  as: Tag = "section",
  surface = "default",
  pad,
  flow,
  className,
  style,
  children,
}: {
  as?: "section" | "div";
  surface?: SectionSurface;
  pad?: SectionPad;
  flow?: SectionFlow;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const surfaceClass = {
    default: "section-surface-default",
    cream: "section-surface-cream",
    warm: "section-surface-warm",
    panel: "section-surface-panel",
    blush: "section-surface-blush",
    paper: "section-surface-paper",
  }[surface];

  const padClass =
    pad && pad !== "none"
      ? { hero: "section-pad-hero", major: "section-pad-major", minor: "section-pad-minor" }[pad]
      : undefined;

  const flowClass =
    flow === "both"
      ? "section-flow-top section-flow-bottom"
      : flow === "top"
        ? "section-flow-top"
        : flow === "bottom"
          ? "section-flow-bottom"
          : undefined;

  const Comp = Tag as React.ElementType;
  return (
    <Comp className={cn(surfaceClass, padClass, flowClass, className)} style={style}>
      {children}
    </Comp>
  );
}

type EditorialCardVariant = "editorial" | "rail" | "dark" | "elevated" | "panel" | "ghost";

export function EditorialCard({
  variant = "editorial",
  accent,
  className,
  children,
}: {
  variant?: EditorialCardVariant;
  accent?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const variantClass = {
    editorial: "card-editorial",
    rail: "card-rail",
    dark: "card-dark",
    elevated: "card-elevated",
    panel: "card-panel",
    ghost: "card-ghost",
  }[variant];

  return <div className={cn(variantClass, accent && "card-gold-accent", className)}>{children}</div>;
}

/**
 * Subtle scroll reveal — fade-up when the element enters the viewport.
 * Falls back to immediately visible on no-JS or reduced motion.
 */
type RevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
type RevealDuration = "default" | "fast" | "slow";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "fade-up",
  duration = "default",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "li";
  variant?: RevealVariant;
  duration?: RevealDuration;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const durationClass = {
    default: "reveal-duration-default",
    fast: "reveal-duration-fast",
    slow: "reveal-duration-slow",
  }[duration];
  const stateClass = shown ? `reveal-from-${variant}-shown` : `reveal-from-${variant}-hidden`;

  const Comp = Tag as unknown as React.ElementType;
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal-base", durationClass, stateClass, className)}
    >
      {children}
    </Comp>
  );
}

/**
 * Founder portrait placeholder — labelled with the expected filename so the
 * client can drop in the final image without ambiguity.
 */
export function FounderPlaceholder({
  filename,
  caption,
  ratio = "aspect-[4/5]",
  className,
  tone = "warm",
}: {
  filename: string;
  caption?: string;
  ratio?: string;
  className?: string;
  tone?: "warm" | "neutral" | "dark";
}) {
  const bg =
    tone === "dark"
      ? "bg-[linear-gradient(160deg,#2d2620_0%,#3b332a_60%,#4a4036_100%)]"
      : tone === "neutral"
        ? "bg-[linear-gradient(160deg,#e9e1d4_0%,#d8ccba_60%,#c4b69e_100%)]"
        : "bg-[linear-gradient(160deg,#efd9d6_0%,#e8c9c5_45%,#dcb6b1_100%)]";
  const dark = tone === "dark";
  return (
    <figure className={cn("group relative", className)}>
      <div
        className={cn(ratio, "relative overflow-hidden border border-[var(--hairline)]", bg)}
        role="img"
        aria-label={caption ?? filename}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,_rgba(255,255,255,0.35),_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[radial-gradient(ellipse_at_50%_100%,_rgba(0,0,0,0.22),_transparent_70%)]" />
        <div className="absolute inset-4 border border-white/30" />
        <div className={cn("absolute left-4 top-4 eyebrow", dark ? "text-white/70" : "text-foreground/60")}>
          Photo
        </div>
        <div className={cn("absolute bottom-4 right-4 eyebrow font-mono", dark ? "text-white/65" : "text-foreground/55")}>
          {filename}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 eyebrow text-foreground/50">{caption}</figcaption>
      )}
    </figure>
  );
}

export function PortraitPlaceholder({
  caption = "Portrait — to be added",
  ratio = "aspect-[4/5]",
  className,
}: { caption?: string; ratio?: string; className?: string }) {
  return (
    <figure className={cn("group relative", className)}>
      <div
        className={cn(
          ratio,
          "relative overflow-hidden border border-[var(--hairline)] bg-[var(--cream)]",
        )}
        role="img"
        aria-label={caption}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_25%,_rgba(184,154,106,0.18),_transparent_60%)]" />
        <div className="absolute inset-4 border border-[var(--hairline)]/80" />
        <div className="absolute left-4 top-4 eyebrow text-foreground/50">Image</div>
        <div className="absolute bottom-4 right-4 eyebrow text-foreground/50">Placeholder</div>
      </div>
      <figcaption className="mt-3 eyebrow text-foreground/50">{caption}</figcaption>
    </figure>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  number?: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow number={number}>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-4xl md:text-5xl leading-[1.05] text-foreground">{title}</h2>
      {intro && <p className="mt-5 text-lg md:text-xl text-foreground/70 leading-relaxed font-light">{intro}</p>}
    </header>
  );
}

export function CTALink({
  href,
  variant = "primary",
  children,
  className,
}: { href: string; variant?: "primary" | "outline" | "underline"; children: React.ReactNode; className?: string }) {
  const base = "inline-flex items-center gap-2 text-sm tracking-wide transition-all duration-300";
  const styles = {
    primary:
      "px-7 py-4 bg-foreground text-background hover:bg-foreground/90 uppercase text-xs tracking-[0.18em]",
    outline:
      "px-7 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background uppercase text-xs tracking-[0.18em]",
    underline:
      "border-b border-foreground/40 pb-1 hover:border-foreground text-foreground uppercase text-xs tracking-[0.18em]",
  } as const;
  return (
    <a href={href} className={cn(base, styles[variant], className)}>
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export function DualCTA({
  eyebrow = "Begin",
  title,
  primaryLabel = "Book a Strategic Clarity Call",
  primaryHref = "/contact",
  secondaryLabel = "For Organizations",
  secondaryHref = "/organizations",
  variant = "dark",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light";
}) {
  const dark = variant === "dark";
  return (
    <section className={cn(dark ? "bg-foreground text-background" : "bg-[var(--cream)] text-foreground")}>
      <Container className="py-24 md:py-32">
        <div className="max-w-3xl">
          <div className={cn("eyebrow", dark ? "text-background/60" : "text-foreground/60")}>{eyebrow}</div>
          <h2 className={cn("mt-6 text-4xl md:text-6xl leading-[1.05]", dark ? "text-background" : "text-foreground")}>
            {title}
          </h2>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={primaryHref}
              className={cn(
                "inline-flex items-center gap-2 px-7 py-4 uppercase text-xs tracking-[0.18em] transition-colors",
                dark
                  ? "bg-background text-foreground hover:bg-[var(--cream)]"
                  : "bg-foreground text-background hover:bg-foreground/90",
              )}
            >
              {primaryLabel} <span aria-hidden>→</span>
            </a>
            <a
              href={secondaryHref}
              className={cn(
                "inline-flex items-center gap-2 px-7 py-4 uppercase text-xs tracking-[0.18em] border transition-colors",
                dark
                  ? "border-background/40 text-background hover:bg-background hover:text-foreground"
                  : "border-foreground/40 text-foreground hover:bg-foreground hover:text-background",
              )}
            >
              {secondaryLabel} <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
