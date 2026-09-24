import { createFileRoute } from "@tanstack/react-router";
import { Hairline, Reveal } from "@/components/site/primitives";
import {
  Accent,
  CtaArrow,
  PageHeading,
  PageHero,
  PageSection,
  Seam,
} from "@/components/site/page-kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Amna | Book a Strategic Leadership Conversation" },
      { name: "description", content: "Book a Strategic Clarity Call or schedule an Organizational Consultation." },
      { property: "og:title", content: "Contact — Begin a Strategic Conversation" },
      { property: "og:description", content: "Begin with a strategic conversation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
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

const FIELD =
  "mt-2.5 w-full bg-transparent border-0 border-b border-foreground/30 px-0 py-2.5 text-[length:var(--text-body)] focus:outline-none focus:border-foreground transition-colors";

function PathCard({
  eyebrow,
  title,
  body,
  cta,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col p-8 transition-[transform,box-shadow,border-color] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] hover:-translate-y-1.5 md:p-10",
        dark
          ? "bg-foreground text-background"
          : "border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)] hover:border-[color-mix(in_oklch,var(--gold)_45%,transparent)]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-8 h-10 w-1 bg-[var(--gold)] transition-[height] duration-[var(--motion-interaction)] ease-[var(--ease-out-soft)] group-hover:h-16"
      />
      <p className={cn("eyebrow", dark ? "text-gold" : "text-copy-muted")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-5 max-w-md font-serif font-light type-h2 leading-[1.08] tracking-[-0.02em]",
          dark ? "text-background" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-5 type-body flex-1", dark ? "text-background/80" : "text-copy")}>{body}</p>
      <div className="mt-auto pt-9">
        <a href="#book" className={cn(dark ? "cta-primary-invert" : "cta-primary", "px-5 text-left tracking-[0.08em]")}>
          {cta} <CtaArrow />
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
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

      <Seam from="warm" into="cream" />

      {/* PATHWAYS */}
      <PageSection surface="cream">
        <PageHeading>
          Two ways to <Accent>begin.</Accent>
        </PageHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2 items-stretch">
          <Reveal duration="slow">
            <PathCard
              eyebrow="For Individuals"
              title="Book a Strategic Clarity Call"
              body="For high-performing women preparing for promotion, navigating complex organizational dynamics, or protecting leadership trajectory through transition."
              cta="Book a Strategic Clarity Call"
            />
          </Reveal>
          <Reveal delay={100} duration="slow">
            <PathCard
              dark
              eyebrow="For Organizations"
              title="Schedule an Organizational Consultation"
              body="For HR, L&D, DEI, and talent leaders exploring coaching, workshops, strengths development, or structural advancement support."
              cta="Schedule an Organizational Consultation"
            />
          </Reveal>
        </div>
      </PageSection>

      <Seam from="cream" into="sand" />

      {/* BOOKING EMBED */}
      <PageSection surface="sand" id="book">
        <PageHeading eyebrow="Schedule">
          Book a <Accent>time.</Accent>
        </PageHeading>
        <Reveal variant="fade-up" delay={160} duration="slow">
          <div className="mt-10 border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-background min-h-[240px] flex flex-col items-center justify-center px-8 py-12 text-center">
            <p className="eyebrow text-copy-muted">Booking Embed</p>
            <p className="mt-4 max-w-md font-serif italic text-[length:var(--text-lead)] text-copy leading-relaxed">
              Calendly or booking system embed to be added here.
            </p>
          </div>
        </Reveal>
      </PageSection>

      <Seam from="sand" into="cream" />

      {/* ENQUIRY FORM */}
      <PageSection surface="cream">
        <div className="grid gap-10 md:gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <PageHeading eyebrow="Message" size="h1">
              Prefer to send a <Accent>message?</Accent>
            </PageHeading>
            <Reveal delay={100} duration="slow">
              <p className="mt-5 type-body text-copy">
                Share a few details and we will respond with a recommended next step.
              </p>
            </Reveal>
          </div>

          <Reveal variant="fade-up" delay={120} duration="slow" className="md:col-span-7">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow text-copy-muted">Full Name</label>
                  <input id="name" type="text" required className={FIELD} />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow text-copy-muted">Email Address</label>
                  <input id="email" type="email" required className={FIELD} />
                </div>
              </div>

              <div>
                <span className="eyebrow text-copy-muted">I am enquiring as</span>
                <div className="mt-3 flex flex-wrap gap-3">
                  {["Individual", "Organization"].map((v) => (
                    <label key={v} className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-[color-mix(in_oklch,var(--gold)_30%,transparent)] cursor-pointer text-[length:var(--text-small)] text-copy hover:border-foreground/60 has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-background transition-colors">
                      <input type="radio" name="enquirer" value={v} className="accent-foreground h-3.5 w-3.5" />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="eyebrow text-copy-muted">Area of Interest</label>
                <select id="interest" className={FIELD}>
                  <option value="">Select an option</option>
                  {INTEREST.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow text-copy-muted">Message</label>
                <textarea id="message" rows={4} className="mt-2.5 w-full bg-background/60 border border-foreground/25 px-3 py-3 text-[length:var(--text-body)] focus:outline-none focus:border-foreground transition-colors" />
              </div>

              <Hairline />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="type-micro">Your message will be reviewed confidentially.</p>
                <button type="submit" className="cta-primary justify-between">
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
