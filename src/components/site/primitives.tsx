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
 * "tabs" is the side-by-side model: one shared panel, roving tabindex, arrow
 * keys. "disclosure" is the stacked model: every item is its own expander with
 * its content directly beneath it, so all items stay in the tab order and
 * arrow keys are not used. Selection state is identical either way — only the
 * ARIA contract and the keyboard model differ.
 */
type SelectableMode = "tabs" | "disclosure";

/**
 * The width at which SelectablePanel can show a list and a panel side by side.
 * Behaviour-only code may test this; layout must not, because a media query
 * cannot be read while rendering on the server. Keep it in step with the `lg:`
 * breakpoint that swaps the two structures.
 */
const SIDE_BY_SIDE_QUERY = "(min-width: 1024px)";

/**
 * Single selection plus the ARIA wiring for whichever interaction model is in
 * play. Visual state is published separately as `data-active`, so the
 * stylesheet does not have to care whether an item is a tab or an expander.
 */
export function useSelectableList(
  count: number,
  {
    orientation = "vertical",
    initial = 0,
    mode = "tabs",
    onSelect,
    value,
    onValueChange,
  }: {
    orientation?: SelectableOrientation;
    initial?: number;
    mode?: SelectableMode;
    /** Fires on a deliberate user selection, by pointer or by key. */
    onSelect?: (index: number) => void;
    /**
     * Pass to drive selection from the caller instead of internally, so two
     * lists rendering the same items can share one selection.
     */
    value?: number;
    onValueChange?: (index: number) => void;
  } = {},
) {
  const [uncontrolled, setUncontrolled] = useState(initial);
  const controlled = value !== undefined;
  const active = controlled ? value : uncontrolled;
  const baseId = useId();
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  /* Every deliberate selection goes through here, so a caller watching for
     selections sees keyboard traversal as well as clicks. */
  const select = (index: number) => {
    if (!controlled) setUncontrolled(index);
    onValueChange?.(index);
    onSelect?.(index);
  };

  const moveTo = (index: number) => {
    if (count === 0) return;
    const next = (index + count) % count;
    select(next);
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

  const tabs = mode === "tabs";

  /* A disclosure list is a labelled group of buttons rather than a tablist: no
     arrow-key handler, because each button is individually tabbable. */
  const listProps = tabs
    ? { role: "tablist" as const, "aria-orientation": orientation, onKeyDown }
    : { role: "group" as const };

  const getItemProps = (index: number) => {
    const isActive = index === active;
    return {
      ref: (node: HTMLButtonElement | null) => {
        itemRefs.current[index] = node;
      },
      id: `${baseId}-item-${index}`,
      type: "button" as const,
      /* The styling hook. Kept separate from the ARIA state so the same CSS
         serves both models. */
      "data-active": isActive ? "true" : "false",
      role: tabs ? ("tab" as const) : undefined,
      "aria-selected": tabs ? isActive : undefined,
      "aria-expanded": tabs ? undefined : isActive,
      /* In disclosure mode only the open item's region is in the DOM, so
         collapsed items must not point at a missing id. */
      "aria-controls": tabs ? `${baseId}-panel` : isActive ? `${baseId}-panel-${index}` : undefined,
      tabIndex: tabs ? (isActive ? 0 : -1) : undefined,
      onClick: () => select(index),
    };
  };

  const panelProps = {
    id: `${baseId}-panel`,
    role: "tabpanel" as const,
    "aria-labelledby": `${baseId}-item-${active}`,
    tabIndex: 0,
  };

  const getPanelProps = (index: number) => ({
    id: `${baseId}-panel-${index}`,
    role: "region" as const,
    "aria-labelledby": `${baseId}-item-${index}`,
  });

  return { active, listProps, getItemProps, panelProps, getPanelProps };
}

/**
 * Safety net for the side-by-side layout: if the viewport is short enough that
 * the panel is below the fold, selecting an item would update something the
 * reader cannot see. Never fires on first render. Redundant in the stacked
 * model, where the detail is already adjacent to the item, so it is skipped
 * below the breakpoint.
 */
function usePanelIntoView(active: number, panelRef: React.RefObject<HTMLDivElement | null>) {
  const previous = useRef(active);
  useEffect(() => {
    if (previous.current === active) return;
    previous.current = active;
    if (!window.matchMedia(SIDE_BY_SIDE_QUERY).matches) return;

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
  /* Starts "entered" so the panel is visible in the server markup: "entering"
     is opacity 0, which would otherwise hide the copy until hydration. The
     transition is for changing selection, so it only replays after the first
     render. */
  const [entered, setEntered] = useState(true);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
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
  onSelect,
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
  /** Called when the reader picks an item, for engagement tracking. */
  onSelect?: (index: number, item: SelectableEntry) => void;
}) {
  /* Both interaction models are always mounted and CSS picks one, so the server
     markup is already correct at every width. Deciding in JS instead would make
     narrow screens receive the side-by-side layout and jump on hydration.
     Selection is held here so the two stay in step, and the hidden one is
     `display: none`, which keeps it out of the tab order and the a11y tree. */
  const [active, setActive] = useState(0);
  const handleSelect = (index: number) => {
    setActive(index);
    onSelect?.(index, items[index]);
  };
  const tabs = useSelectableList(items.length, {
    mode: "tabs",
    value: active,
    onValueChange: handleSelect,
  });
  const disclosure = useSelectableList(items.length, {
    mode: "disclosure",
    value: active,
    onValueChange: handleSelect,
  });

  const panelState = usePanelTransition(active);
  const panelRef = useRef<HTMLDivElement>(null);
  usePanelIntoView(active, panelRef);
  const showMarker = variant !== "label";
  const current = items[active];

  /* Progress rail for the step variant. Shown in both models, because "how far
     through the framework am I" is useful on a phone too. */
  const rail =
    variant === "step" ? (
      <div
        aria-hidden
        className="mb-6 h-px w-full bg-[color-mix(in_oklch,var(--hairline)_60%,transparent)]"
      >
        <div
          className="h-px bg-[var(--gold-deep)] transition-[width] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)]"
          style={{ width: `${((active + 1) / items.length) * 100}%` }}
        />
      </div>
    ) : null;

  const rowContent = (item: SelectableEntry, i: number, chevron: string) => (
    <>
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
      {/* Only appears on hover or when active, so the row reads as choosable
          without adding permanent furniture to the list. Points the way the
          content will actually arrive: alongside, or below. */}
      <span
        aria-hidden
        className="selectable-chevron ml-auto mt-[0.6em] font-serif text-[0.9rem] leading-none"
      >
        {chevron}
      </span>
    </>
  );

  const detail = (item: SelectableEntry) => (
    <>
      {item.meta && <p className="eyebrow text-gold-ink mb-4">{item.meta}</p>}
      <div className="type-body-emphasis">{item.detail}</div>
      {footer && <div className="mt-8">{footer}</div>}
    </>
  );

  return (
    <div className={cn(tone === "dark" && "selectable-tone-dark", className)}>
      {/* Stacked, below lg: each item owns its explanation, so the answer
          appears directly under the row that was tapped rather than below the
          whole list. */}
      <div className="lg:hidden">
        {rail}
        <div
          {...disclosure.listProps}
          aria-label={label}
          className={cn("flex flex-col", listClassName)}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                i > 0 && "border-t border-[color-mix(in_oklch,var(--hairline)_45%,transparent)]",
              )}
            >
              <button
                {...disclosure.getItemProps(i)}
                className="selectable-item selectable-row flex w-full items-start gap-4 py-4"
              >
                {rowContent(item, i, "↓")}
              </button>
              {i === active && (
                <div
                  {...disclosure.getPanelProps(i)}
                  data-state={panelState}
                  className={cn("selectable-panel pb-6 pl-1 pr-1", panelClassName)}
                >
                  {detail(item)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Side by side, lg and up: one shared panel, roving tabindex, arrow keys. */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
        <div className={cn("lg:col-span-5", listClassName)}>
          {rail}
          <div {...tabs.listProps} aria-label={label} className="relative flex flex-col">
            {variant === "step" && <span aria-hidden className="selectable-path" />}
            {items.map((item, i) => (
              <button
                key={i}
                {...tabs.getItemProps(i)}
                className={cn(
                  "selectable-item selectable-row flex items-start gap-4 py-4",
                  i > 0 && "border-t border-[color-mix(in_oklch,var(--hairline)_45%,transparent)]",
                )}
              >
                {rowContent(item, i, "→")}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={panelRef}
          {...tabs.panelProps}
          data-state={panelState}
          className={cn("selectable-panel lg:col-span-7", panelClassName)}
        >
          {current && detail(current)}
        </div>
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

/* CTALink and DualCTA were removed here. Both were unreferenced, and both
   carried their own button styling and their own transition timing
   (transition-all at 300ms) outside the shared motion tokens and the
   .cta-* system. Anything that needs a CTA should use those instead. */
