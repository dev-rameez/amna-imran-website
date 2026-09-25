import { cn } from "@/lib/utils";
import { Container, Reveal, SectionSeam } from "@/components/site/primitives";

/** Surfaces shared with the homepage so every page reads as one site. */
export const PAGE_SURFACE = {
  warm: "var(--warm-cream)",
  cream: "color-mix(in oklch, var(--cream) 55%, var(--background))",
  blush: "color-mix(in oklch, var(--blush-subtle) 58%, var(--warm-cream))",
  sand: "color-mix(in oklch, var(--warm-cream) 88%, var(--cream))",
  dark: "var(--foreground)",
} as const;

export type PageSurface = keyof typeof PAGE_SURFACE;

/** A short label set in the headline script accent, for signature-style captions. */
export const SCRIPT_LABEL =
  "type-display-accent block text-[2.1rem] tracking-normal md:text-[2.4rem] leading-none text-gold-warm";

/** Script accent used in every headline on the homepage. */
export function Accent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <em className={cn("type-display-accent not-italic text-gold-warm", className)}>{children}</em>;
}

export function Seam({
  from,
  into,
  intensity = "default",
}: {
  from: PageSurface;
  into: PageSurface;
  intensity?: "soft" | "default" | "bold";
}) {
  return (
    <SectionSeam
      from={from === "dark" ? "dark" : "warm"}
      into={into === "dark" ? "dark" : "warm"}
      fromFill={PAGE_SURFACE[from]}
      intoFill={PAGE_SURFACE[into]}
      intensity={intensity}
    />
  );
}

/* Glows sit well inside the section so they never meet a seam as a hard edge. */
const SECTION_GLOW: Record<PageSurface, string> = {
  warm: "radial-gradient(ellipse 45% 32% at 14% 32%, color-mix(in oklch, var(--gold-subtle) 55%, transparent), transparent 70%), radial-gradient(ellipse 40% 30% at 88% 68%, color-mix(in oklch, var(--blush-subtle) 60%, transparent), transparent 70%)",
  cream: "radial-gradient(ellipse 45% 32% at 86% 30%, color-mix(in oklch, var(--gold-subtle) 55%, transparent), transparent 70%), radial-gradient(ellipse 40% 30% at 10% 70%, color-mix(in oklch, var(--blush-subtle) 50%, transparent), transparent 70%)",
  blush: "radial-gradient(ellipse 45% 32% at 12% 30%, color-mix(in oklch, var(--background) 60%, transparent), transparent 70%), radial-gradient(ellipse 40% 30% at 88% 70%, color-mix(in oklch, var(--gold-subtle) 50%, transparent), transparent 70%)",
  sand: "radial-gradient(ellipse 45% 32% at 88% 30%, color-mix(in oklch, var(--blush-subtle) 55%, transparent), transparent 70%), radial-gradient(ellipse 40% 30% at 12% 70%, color-mix(in oklch, var(--gold-subtle) 55%, transparent), transparent 70%)",
  dark: "radial-gradient(ellipse 45% 32% at 12% 30%, color-mix(in oklch, var(--gold) 13%, transparent), transparent 70%), radial-gradient(ellipse 40% 30% at 88% 70%, color-mix(in oklch, var(--gold) 9%, transparent), transparent 70%)",
};

export function PageSection({
  surface,
  id,
  className,
  containerClassName,
  children,
}: {
  surface: PageSurface;
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-x-clip py-16 md:py-24",
        surface === "dark" && "text-background",
        className,
      )}
      style={{ background: PAGE_SURFACE[surface] }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: SECTION_GLOW[surface] }} />
      <Container className={cn("relative", containerClassName)}>{children}</Container>
    </section>
  );
}

/** Section headline in the homepage voice: light serif with a script accent. */
export function PageHeading({
  as: Tag = "h2",
  eyebrow,
  className,
  dark,
  size,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  eyebrow?: React.ReactNode;
  className?: string;
  dark?: boolean;
  /** `h1` for long sentence-length headlines. */
  size?: "display" | "h1";
  children: React.ReactNode;
}) {
  return (
    <Reveal variant="fade-in" duration="slow">
      {eyebrow && <p className={cn("eyebrow mb-5", dark ? "text-gold" : "text-gold-ink")}>{eyebrow}</p>}
      <Tag
        className={cn(
          size === "h1" ? "type-h1" : "type-display",
          "max-w-4xl font-serif font-light",
          dark ? "text-background" : "text-foreground",
          className,
        )}
      >
        {children}
      </Tag>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  aside,
  size = "display",
  inlineActions = false,
  eyebrowScript = false,
  containerClassName,
  asideAlign = "center",
  className,
  children,
}: {
  /** Overrides for the hero's padding, e.g. a tighter bottom on short pages. */
  containerClassName?: string;
  /** Pin the portrait to the bottom of the hero instead of vertically centering it. */
  asideAlign?: "center" | "end";
  className?: string;
  eyebrow?: React.ReactNode;
  /** Set the eyebrow in the gold script accent instead of small caps. */
  eyebrowScript?: boolean;
  title: React.ReactNode;
  size?: "display" | "h1";
  lead?: React.ReactNode;
  actions?: React.ReactNode;
  /** Buttons side by side from `sm`, wrapping if the column is too narrow. */
  inlineActions?: boolean;
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className={cn("relative", className ?? "overflow-x-clip")} style={{ background: PAGE_SURFACE.warm }}>
      <Container className={cn("relative pt-12 pb-14 md:pt-20 md:pb-20", containerClassName)}>
        <div
          className={cn(
            "grid gap-12 md:gap-10",
            aside && "md:grid-cols-12",
            aside && (asideAlign === "end" ? "md:items-end" : "md:items-center"),
          )}
        >
          <div className={cn(aside ? (asideAlign === "end" ? "md:col-span-8" : "md:col-span-7") : "max-w-4xl")}>
            {eyebrow && (
              <Reveal variant="fade-in" duration="slow">
                <p className={cn(eyebrowScript ? cn(SCRIPT_LABEL, "mb-4") : "eyebrow text-gold-ink mb-5")}>{eyebrow}</p>
              </Reveal>
            )}
            <Reveal variant="fade-up" duration="slow" delay={60}>
              <h1
                className={cn(
                  size === "h1" ? "type-h1" : "type-display",
                  "font-serif font-light text-foreground",
                )}
              >
                {title}
              </h1>
            </Reveal>
            {lead && (
              <Reveal variant="fade-in" duration="slow" delay={140}>
                <div className="mt-7 max-w-2xl space-y-5 type-lead font-light text-copy">{lead}</div>
              </Reveal>
            )}
            {actions && (
              <Reveal variant="fade-up" delay={220} duration="fast">
                <div
                  className={cn(
                    "mt-9 flex flex-col gap-3",
                    inlineActions ? "sm:flex-row sm:flex-wrap" : "max-w-md",
                  )}
                >
                  {actions}
                </div>
              </Reveal>
            )}
          </div>
          {aside && (
            <div className={cn("md:col-span-5", asideAlign === "end" && "md:col-span-4")}>{aside}</div>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}

/** Closing band — same dark "Ready to move forward" layout as the homepage. */
export function PageCta({
  title,
  body,
  actions,
  inlineActions = false,
  from,
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
  actions: React.ReactNode;
  /** Buttons side by side from `sm`, wrapping if the band is too narrow. */
  inlineActions?: boolean;
  /** Surface of the section above, so the band waves in instead of cutting in. */
  from?: Exclude<PageSurface, "dark">;
}) {
  return (
    <>
    {from && <Seam from={from} into="dark" intensity="soft" />}
    <section className="relative overflow-hidden bg-foreground text-background">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: SECTION_GLOW.dark }} />
      <Container className="relative flex flex-col gap-10 py-16 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <Reveal variant="fade-up" className="max-w-2xl">
          <h2 className="type-display font-serif font-light text-background">{title}</h2>
          {body && <p className="mt-6 max-w-xl text-background/75">{body}</p>}
        </Reveal>
        <Reveal delay={100} variant="fade-up">
          <div
            className={cn(
              "flex w-full flex-col gap-4",
              inlineActions ? "sm:flex-row sm:flex-wrap" : "sm:w-fit sm:min-w-[28rem]",
            )}
          >
            {actions}
          </div>
        </Reveal>
      </Container>
    </section>
    </>
  );
}

/** Hairline with a gold diamond — the homepage's break between parts of one chapter. */
export function ChapterDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center gap-4", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[color-mix(in_oklch,var(--gold)_42%,transparent)]" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold-deep)]" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[color-mix(in_oklch,var(--gold)_42%,transparent)]" />
    </div>
  );
}

/** Centred closing statement for a chapter, in the homepage quote style. */
export function PageQuote({
  children,
  sub,
  className,
}: {
  children: React.ReactNode;
  sub?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal variant="fade-in" duration="slow" className={className}>
      <figure className="quote-voice mx-auto max-w-3xl text-center">
        <div aria-hidden className="flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[color-mix(in_oklch,var(--gold)_55%,transparent)]" />
          <span className="translate-y-2 font-serif text-[2.5rem] leading-none text-[color-mix(in_oklch,var(--gold)_60%,transparent)]">
            “
          </span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[color-mix(in_oklch,var(--gold)_55%,transparent)]" />
        </div>
        <blockquote className="mt-3 font-serif font-light type-h1 leading-[1.3] tracking-[-0.01em] text-foreground">
          {children}
        </blockquote>
        {sub && <p className="mx-auto mt-5 max-w-xl type-body text-copy">{sub}</p>}
      </figure>
    </Reveal>
  );
}

/** Review-only bar naming a design option; remove once the client picks one. */
export function VariantLabel({ name, note }: { name: string; note: string }) {
  return (
    <div className="bg-foreground px-6 py-4 text-center text-background">
      <p className="text-[0.8rem] font-medium uppercase tracking-[0.22em] text-gold-warm">{name}</p>
      <p className="mt-1 text-[0.85rem] text-background/80">{note}</p>
    </div>
  );
}

/** Keeps long CTA labels on one line down to a 320px phone. */
export const ONE_LINE_CTA =
  "justify-between gap-6 whitespace-nowrap px-5 text-left tracking-[0.08em] max-sm:gap-3 max-sm:px-4 max-sm:text-[0.625rem] max-sm:tracking-[0.05em]";

export function CtaArrow({ down }: { down?: boolean }) {
  return (
    <span aria-hidden className="cta-arrow">
      {down ? "↓" : "→"}
    </span>
  );
}
