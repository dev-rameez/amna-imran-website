import { cn } from "@/lib/utils";
import { useEffect, useId, useRef, useState } from "react";

export function Container({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-6 md:px-10", className)} style={style}>
      {children}
    </div>
  );
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
 * Section-ending pull quote — large, visible, editorial.
 * Use at the close of narrative sections for a stronger presence than body type.
 */
export function SectionQuote({
  children,
  sub,
  className,
}: {
  children: React.ReactNode;
  /** Secondary line, revealed just after the main one. */
  sub?: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "relative mx-auto max-w-[50rem] px-4 py-10 text-center md:px-8 md:py-14",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none font-serif text-[5rem] leading-none text-gold/40 md:text-[6.25rem]"
      >
        “
      </span>
      <div className="relative pt-7 font-serif text-[clamp(2rem,4.2vw,3.8rem)] leading-[1.24] tracking-[-0.02em] text-foreground md:pt-9">
        <Reveal variant="fade-in" duration="slow">
          {children}
        </Reveal>
        {sub && (
          <Reveal variant="fade-in" duration="slow" delay={340}>
            <span className="mt-4 block font-light text-[0.62em] leading-[1.45] text-copy">
              {sub}
            </span>
          </Reveal>
        )}
      </div>
    </blockquote>
  );
}

/**
 * Soft layered hill/wave seam between sections.
 * `from` paints the outgoing surface; `into` fills the rising hills of the next surface.
 * Content never straddles two backgrounds.
 */
type SeamTone = "cream" | "blush" | "warm" | "dark" | "background";

const SEAM_FILL: Record<SeamTone, string> = {
  cream: "color-mix(in oklch, var(--cream) 55%, var(--background))",
  blush: "color-mix(in oklch, var(--blush-subtle) 55%, var(--warm-cream))",
  warm: "color-mix(in oklch, var(--warm-cream) 88%, var(--cream))",
  dark: "var(--foreground)",
  background: "var(--background)",
};

export function SectionSeam({
  from,
  into,
  fromFill: fromOverride,
  intoFill: intoOverride,
  className,
  intensity = "default",
}: {
  from: SeamTone;
  into: SeamTone;
  /** Exact colour of the section above, when it differs from the tone preset. */
  fromFill?: string;
  /** Exact colour of the section below, when it differs from the tone preset. */
  intoFill?: string;
  className?: string;
  intensity?: "soft" | "default" | "bold";
}) {
  const fromFill = fromOverride ?? SEAM_FILL[from];
  const intoFill = intoOverride ?? SEAM_FILL[into];
  const height =
    intensity === "soft"
      ? "h-12 md:h-16"
      : intensity === "bold"
        ? "h-24 md:h-32"
        : "h-16 md:h-24";

  return (
    <div
      aria-hidden
      className={cn("section-seam pointer-events-none relative z-[5] -mb-px", className)}
      style={{ background: fromFill }}
    >
      <div className={cn("relative w-full overflow-hidden", height)}>
        <svg
          className="absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ color: intoFill }}
        >
          <path
            fill="currentColor"
            d="M0 72 C180 28 320 96 480 64 C640 32 780 8 960 40 C1140 72 1280 20 1440 48 L1440 120 L0 120 Z"
          />
        </svg>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ color: intoFill }}
        >
          <path
            fill="currentColor"
            d="M0 88 C200 48 360 110 540 78 C720 46 880 18 1080 52 C1240 78 1340 40 1440 58 L1440 120 L0 120 Z"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * Light parallax for decorative layers. Disabled when reduced motion is preferred.
 */
export function ParallaxLayer({
  children,
  className,
  speed = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH;
      el.style.transform = `translate3d(0, ${progress * speed * 100}px, 0)`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

/**
 * Subtle scroll reveal — fade-up when the element enters the viewport.
 * Falls back to immediately visible on no-JS or reduced motion.
 */
type RevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "bridge";
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
  as?: "div" | "section" | "article" | "header" | "li" | "span";
  variant?: RevealVariant;
  duration?: RevealDuration;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  // Stretch stagger so slower reveals still feel sequential.
  const pacedDelay = Math.round(delay * 1.45);
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
      // Start a touch earlier so the slower motion finishes while still on screen.
      { rootMargin: "0px 0px -2% 0px", threshold: 0.05 },
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
      style={{ transitionDelay: `${pacedDelay}ms` }}
      className={cn("reveal-base", durationClass, stateClass, className)}
    >
      {children}
    </Comp>
  );
}

/* ---------------- SELECTABLE PANELS ----------------
 * Several sections are "a list of items, one detail panel" (the persistent
 * gaps, the six-step path, the differentiators). They share behaviour but not
 * layout, so behaviour lives in useSelectableList and the common layout lives
 * in SelectablePanel. Sections needing a bespoke layout should use the hook
 * directly rather than adding another variant here.
 */

type SelectableOrientation = "vertical" | "horizontal";

/**
 * ARIA tabs behaviour: single selection, roving tabindex, arrow/Home/End keys,
 * and ids wired between each item and the shared panel.
 */
export function useSelectableList(
  count: number,
  {
    orientation = "vertical",
    initial = 0,
  }: { orientation?: SelectableOrientation; initial?: number } = {},
) {
  const [active, setActive] = useState(initial);
  const baseId = useId();
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const moveTo = (index: number) => {
    if (count === 0) return;
    const next = (index + count) % count;
    setActive(next);
    itemRefs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const prevKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (event.key === nextKey) {
      event.preventDefault();
      moveTo(active + 1);
    } else if (event.key === prevKey) {
      event.preventDefault();
      moveTo(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      moveTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      moveTo(count - 1);
    }
  };

  const listProps = {
    role: "tablist" as const,
    "aria-orientation": orientation,
    onKeyDown,
  };

  const getItemProps = (index: number) => ({
    ref: (node: HTMLButtonElement | null) => {
      itemRefs.current[index] = node;
    },
    id: `${baseId}-item-${index}`,
    type: "button" as const,
    role: "tab" as const,
    "aria-selected": index === active,
    "aria-controls": `${baseId}-panel`,
    tabIndex: index === active ? 0 : -1,
    onClick: () => setActive(index),
  });

  const panelProps = {
    id: `${baseId}-panel`,
    role: "tabpanel" as const,
    "aria-labelledby": `${baseId}-item-${active}`,
    tabIndex: 0,
  };

  return { active, setActive, listProps, getItemProps, panelProps };
}

/**
 * Replays the panel's enter transition whenever `key` changes. Returns the
 * value for `data-state`, which .selectable-panel styles against.
 */
/**
 * Below the panel's side-by-side breakpoint the detail sits underneath the list,
 * so selecting a low item would otherwise update something off-screen. Brings
 * the panel into view on selection — never on first render, and only when the
 * layout is stacked.
 */
function usePanelIntoView(active: number, panelRef: React.RefObject<HTMLDivElement | null>) {
  const previous = useRef(active);
  useEffect(() => {
    if (previous.current === active) return;
    previous.current = active;

    const stacked = window.matchMedia("(max-width: 1023px)").matches;
    if (!stacked) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panelRef.current?.scrollIntoView({
      block: "nearest",
      behavior: reduced ? "auto" : "smooth",
    });
  }, [active, panelRef]);
}

/**
 * Replays the panel's enter transition whenever `key` changes. Returns the
 * value for `data-state`, which .selectable-panel styles against.
 */
export function usePanelTransition(key: unknown) {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    setEntered(false);
    const raf = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(raf);
  }, [key]);
  return entered ? "entered" : "entering";
}

export type SelectableEntry = {
  label: React.ReactNode;
  detail: React.ReactNode;
  /** Small label above the detail copy, e.g. "Why this matters". */
  meta?: React.ReactNode;
};

export function SelectablePanel({
  items,
  variant = "label",
  tone = "light",
  label,
  className,
  listClassName,
  panelClassName,
  footer,
}: {
  items: SelectableEntry[];
  /** numbered = 01/02 numerals, step = numerals plus a progress rail, label = type only. */
  variant?: "numbered" | "step" | "label";
  tone?: "light" | "dark";
  /** Accessible name for the list of choices. */
  label: string;
  className?: string;
  listClassName?: string;
  panelClassName?: string;
  footer?: React.ReactNode;
}) {
  const { active, listProps, getItemProps, panelProps } = useSelectableList(items.length);
  const panelState = usePanelTransition(active);
  const panelRef = useRef<HTMLDivElement>(null);
  usePanelIntoView(active, panelRef);
  const showMarker = variant !== "label";
  const current = items[active];

  return (
    <div
      className={cn(
        "grid gap-10 lg:grid-cols-12 lg:gap-12",
        tone === "dark" && "selectable-tone-dark",
        className,
      )}
    >
      <div className={cn("lg:col-span-5", listClassName)}>
        {variant === "step" && (
          <div
            aria-hidden
            className="mb-6 h-px w-full bg-[color-mix(in_oklch,var(--hairline)_60%,transparent)]"
          >
            <div
              className="h-px bg-[var(--gold-deep)] transition-[width] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)]"
              style={{ width: `${((active + 1) / items.length) * 100}%` }}
            />
          </div>
        )}
        <div {...listProps} aria-label={label} className="relative flex flex-col">
          {variant === "step" && <span aria-hidden className="selectable-path" />}
          {items.map((item, i) => (
            <button
              key={i}
              {...getItemProps(i)}
              className={cn(
                "selectable-item selectable-row flex items-start gap-4 py-4",
                i > 0 && "border-t border-[color-mix(in_oklch,var(--hairline)_45%,transparent)]",
              )}
            >
              {showMarker ? (
                <span
                  aria-hidden
                  className={cn(
                    "selectable-marker mt-0.5",
                    variant === "step" ? "h-11 w-11 text-[1.05rem]" : "h-9 w-9 text-[0.95rem]",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : (
                <span aria-hidden className="selectable-bar mt-[0.85em]" />
              )}
              <span className="font-serif text-[length:var(--text-heading-3)] leading-snug">
                {item.label}
              </span>
              {/* Chevron only appears on hover or when selected, so the row reads
                  as choosable without adding permanent furniture to the list. */}
              <span
                aria-hidden
                className="selectable-chevron ml-auto mt-[0.6em] font-serif text-[0.9rem] leading-none"
              >
                →
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={panelRef}
        {...panelProps}
        data-state={panelState}
        className={cn("selectable-panel lg:col-span-7", panelClassName)}
      >
        {current?.meta && <p className="eyebrow text-gold mb-4">{current.meta}</p>}
        <div className="type-body-emphasis">{current?.detail}</div>
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </div>
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
