import { createFileRoute } from "@tanstack/react-router";
import { Hairline, Reveal } from "@/components/site/primitives";
import {
  Accent,
  CtaArrow,
  ONE_LINE_CTA,
  PageHeading,
  PageHero,
  PageSection,
  Seam,
} from "@/components/site/page-kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact-v2")({
  head: () => ({
    meta: [
      { title: "Contact Amna | Book a Strategic Leadership Conversation" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactV2,
});

const INTEREST = [
  "ELEVATE™ Strategic Advancement Program",
  "Lead & Thrive Through Motherhood™",
  "Organizational Coaching",
  "Leadership Workshops",
  "DEI Consultancy",
  "Strengths-Based Team Development",
  "Other",
];

const LABEL = "eyebrow text-copy-muted transition-colors duration-500 group-focus-within:text-gold-ink";

/** Underlined field whose gold rule draws in from the left on focus. */
function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <label htmlFor={id} className={LABEL}>
        {label}
      </label>
      <div className="relative mt-2.5">
        {children}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--gold-deep)] transition-transform duration-700 ease-[var(--ease-out-soft)] group-focus-within:scale-x-100"
        />
      </div>
    </div>
  );
}

const INPUT =
  "w-full border-0 border-b border-foreground/25 bg-transparent px-0 py-2.5 text-[length:var(--text-body)] text-foreground focus:outline-none";

function PathCard({
  index,
  eyebrow,
  title,
  body,
  cta,
  dark = false,
}: {
  index: number;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden p-5 sm:p-8 transition-[transform,box-shadow,border-color] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] hover:-translate-y-1.5 md:p-10",
        dark
          ? "bg-foreground text-background"
          : "border border-[color-mix(in_oklch,var(--gold)_25%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)] hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)]",
      )}
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-[3px] w-16 bg-[var(--gold)] transition-[width] duration-700 ease-[var(--ease-out-soft)] group-hover:w-full"
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-6 top-4 select-none font-serif font-light leading-none text-[5.5rem] transition-colors duration-700",
          dark
            ? "text-background/[0.06] group-hover:text-[color-mix(in_oklch,var(--gold)_25%,transparent)]"
            : "text-[color-mix(in_oklch,var(--gold)_14%,transparent)] group-hover:text-[color-mix(in_oklch,var(--gold)_30%,transparent)]",
        )}
      >
        {String(index).padStart(2, "0")}
      </span>
      <p className={cn("eyebrow", dark ? "text-gold" : "text-gold-ink")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-5 max-w-md pr-16 font-serif font-light type-h2 leading-[1.1] tracking-[-0.02em]",
          dark ? "text-background" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-5 flex-1 type-body", dark ? "text-background/80" : "text-copy")}>{body}</p>
      <div className="mt-auto pt-9">
        <a href="#book" className={cn(dark ? "cta-primary-invert" : "cta-primary", "w-full sm:w-auto", ONE_LINE_CTA, "max-sm:gap-2 max-sm:px-3 max-sm:tracking-[0.02em]")}>
          {cta} <CtaArrow />
        </a>
      </div>
    </div>
  );
}

function ContactV2() {
  return (
    <>
      <PageHero
        title={
          <>
            Begin with a strategic <Accent>conversation.</Accent>
          </>
        }
        lead={
          <p>
            Whether you are exploring private coaching or organizational support, the first step is
            a confidential conversation to understand your context, goals, and the most appropriate
            pathway.
          </p>
        }
      />

      <Seam from="warm" into="cream" intensity="soft" />

      {/* PATHWAYS */}
      <PageSection surface="cream" className="py-12 md:py-16">
        <div className="grid items-stretch gap-6 md:grid-cols-2 [&>*]:min-w-0">
          <Reveal duration="slow">
            <PathCard
              index={1}
              eyebrow="For Individuals"
              title="Book a Strategic Clarity Call"
              body="For high-performing women preparing for promotion, navigating complex organizational dynamics, or protecting leadership trajectory through transition."
              cta="Book a Strategic Clarity Call"
            />
          </Reveal>
          <Reveal delay={120} duration="slow">
            <PathCard
              dark
              index={2}
              eyebrow="For Organizations"
              title="Schedule an Organizational Consultation"
              body="For HR, L&D, DEI, and talent leaders exploring coaching, workshops, strengths development, or structural advancement support."
              cta="Schedule an Organizational Consultation"
            />
          </Reveal>
        </div>
      </PageSection>

      <Seam from="cream" into="sand" intensity="soft" />

      {/* BOOKING EMBED */}
      <PageSection surface="sand" id="book" className="py-12 md:py-16">
        <PageHeading>
          Book a time<span className="text-gold-warm">.</span>
        </PageHeading>
        <Reveal variant="fade-up" delay={160} duration="slow">
          <div className="relative mt-10 flex min-h-[260px] flex-col items-center justify-center overflow-hidden border border-[color-mix(in_oklch,var(--gold)_25%,transparent)] bg-background px-8 py-14 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(to right, color-mix(in oklch, var(--gold) 10%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--gold) 10%, transparent) 1px, transparent 1px)",
                backgroundSize: "calc(100% / 7) 52px",
                maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
              }}
            />
            <span aria-hidden className="relative mb-5 h-1.5 w-1.5 rotate-45 bg-[var(--gold-deep)]" />
            <p className="relative eyebrow text-gold-ink">Booking Embed</p>
            <p className="relative mt-4 max-w-md font-serif italic text-[length:var(--text-lead)] leading-relaxed text-copy">
              Calendly or booking system embed to be added here.
            </p>
          </div>
        </Reveal>
      </PageSection>

      <Seam from="sand" into="cream" intensity="soft" />

      {/* ENQUIRY FORM */}
      <PageSection surface="cream" className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <PageHeading size="h1">
              Prefer to send a <Accent>message?</Accent>
            </PageHeading>
            <Reveal delay={100} duration="slow">
              <p className="mt-5 max-w-sm type-body text-copy">
                Share a few details and we will respond with a recommended next step.
              </p>
              <div aria-hidden className="mt-8 h-px w-24 bg-[var(--gold)]/70" />
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={120} duration="slow" className="md:col-span-7">
            <form
              className={cn("space-y-8 border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)] p-6 sm:p-8 md:p-10")}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-8 md:grid-cols-2">
                <Field id="v2-name" label="Full Name">
                  <input id="v2-name" type="text" required autoComplete="name" className={INPUT} />
                </Field>
                <Field id="v2-email" label="Email Address">
                  <input id="v2-email" type="email" required autoComplete="email" className={INPUT} />
                </Field>
              </div>

              <fieldset className="group">
                <legend className={LABEL}>I am enquiring as</legend>
                <div className="mt-3 flex flex-wrap gap-3">
                  {["Individual", "Organization"].map((v) => (
                    <label
                      key={v}
                      className="inline-flex cursor-pointer items-center gap-2.5 border border-[color-mix(in_oklch,var(--gold)_30%,transparent)] px-4 py-2.5 text-[length:var(--text-small)] text-copy transition-colors duration-500 hover:border-foreground/60 has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-background has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--gold-deep)]"
                    >
                      <input type="radio" name="v2-enquirer" value={v} className="peer sr-only" />
                      <span
                        aria-hidden
                        className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-current after:h-1.5 after:w-1.5 after:scale-0 after:rounded-full after:bg-[var(--gold)] after:transition-transform after:duration-300 peer-checked:after:scale-100"
                      />
                      {v}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field id="v2-interest" label="Area of Interest">
                <select id="v2-interest" className={cn(INPUT, "cursor-pointer")}>
                  <option value="">Select an option</option>
                  {INTEREST.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="group">
                <label htmlFor="v2-message" className={LABEL}>
                  Message
                </label>
                <textarea
                  id="v2-message"
                  rows={5}
                  className="mt-2.5 w-full border border-foreground/20 bg-background/70 px-4 py-3 text-[length:var(--text-body)] transition-colors duration-500 focus:border-[var(--gold-deep)] focus:outline-none"
                />
              </div>

              <Hairline />

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <p className="type-micro">Your message will be reviewed confidentially.</p>
                <button type="submit" className={cn("cta-primary", ONE_LINE_CTA)}>
                  Send Enquiry <CtaArrow />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </PageSection>
    </>
  );
}
