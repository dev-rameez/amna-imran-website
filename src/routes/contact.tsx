import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow, Hairline, Reveal } from "@/components/site/primitives";

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

function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--hairline)]/60">
        <Container className="pt-16 md:pt-24 pb-14 md:pb-20">
          <Reveal><Eyebrow>Contact</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 leading-[1.05] text-[clamp(2.1rem,4.2vw,3rem)] max-w-4xl">
              <span className="voice-serif-light text-foreground">Begin with a strategic </span>
              <span className="voice-serif-italic">conversation.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-[15px] md:text-[16px] text-foreground/75 leading-relaxed font-light">
              Whether you are exploring private coaching or organizational support, the first step is
              a confidential conversation to understand your context, goals, and the most appropriate
              pathway.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* PATHWAYS */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-stretch">
            <Reveal as="article" className="relative h-full border border-[var(--hairline)] bg-background p-8 md:p-10 flex flex-col">
              <span aria-hidden className="absolute left-0 top-0 h-1 w-24 bg-[var(--gold)]" />
              <div className="eyebrow text-[var(--gold)]">For Individuals</div>
              <h2 className="mt-5 font-serif text-[1.85rem] md:text-[2rem] leading-tight text-foreground">
                Book a Strategic Clarity Call
              </h2>
              <p className="mt-5 text-[15px] text-foreground/75 leading-relaxed font-light flex-1">
                For high-performing women preparing for promotion, navigating complex organizational
                dynamics, or protecting leadership trajectory through transition.
              </p>
              <a href="#book" className="mt-8 self-start inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] hover:bg-foreground/90 transition-colors">
                Book a Strategic Clarity Call <span aria-hidden>→</span>
              </a>
            </Reveal>

            <Reveal delay={100} as="article" className="relative h-full border border-[var(--hairline)] bg-foreground text-background p-8 md:p-10 flex flex-col">
              <span aria-hidden className="absolute left-0 top-0 h-1 w-24 bg-[var(--gold)]" />
              <div className="eyebrow text-[var(--gold)]">For Organizations</div>
              <h2 className="mt-5 font-serif text-[1.85rem] md:text-[2rem] leading-tight text-background">
                Schedule an Organizational Consultation
              </h2>
              <p className="mt-5 text-[15px] text-background/80 leading-relaxed font-light flex-1">
                For HR, L&amp;D, DEI, and talent leaders exploring coaching, workshops, strengths
                development, or structural advancement support.
              </p>
              <a href="#book" className="mt-8 self-start inline-flex items-center gap-2 bg-background text-foreground px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--cream)] transition-colors">
                Schedule an Organizational Consultation <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* BOOKING EMBED */}
      <section id="book" className="py-14 md:py-20 bg-[var(--cream)] border-y border-[var(--hairline)]/60">
        <Container>
          <Eyebrow>Schedule</Eyebrow>
          <h2 className="mt-5 max-w-2xl leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
            <span className="voice-serif-light text-foreground">Book a </span>
            <span className="voice-serif-italic">time.</span>
          </h2>
          <div className="mt-8 border border-[var(--hairline)] bg-background min-h-[240px] flex flex-col items-center justify-center px-8 py-12 text-center">
            <div className="eyebrow text-copy-muted">Booking Embed</div>
            <p className="mt-4 max-w-md font-serif italic text-foreground/75 text-lg leading-relaxed">
              Calendly or booking system embed to be added here.
            </p>
          </div>
        </Container>
      </section>

      {/* ENQUIRY FORM */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>Message</Eyebrow>
              <h2 className="mt-5 leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
                <span className="voice-serif-light text-foreground">Prefer to send a </span>
                <span className="voice-serif-italic">message?</span>
              </h2>
              <p className="mt-5 text-[15px] text-foreground/75 leading-relaxed font-light">
                Share a few details and we will respond with a recommended next step.
              </p>
            </div>

            <form className="md:col-span-7 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow text-copy-muted">Full Name</label>
                  <input id="name" type="text" required className="mt-2.5 w-full bg-transparent border-0 border-b border-foreground/30 px-0 py-2.5 text-[15px] focus:outline-none focus:border-foreground transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow text-copy-muted">Email Address</label>
                  <input id="email" type="email" required className="mt-2.5 w-full bg-transparent border-0 border-b border-foreground/30 px-0 py-2.5 text-[15px] focus:outline-none focus:border-foreground transition-colors" />
                </div>
              </div>

              <div>
                <span className="eyebrow text-copy-muted">I am enquiring as</span>
                <div className="mt-3 flex flex-wrap gap-3">
                  {["Individual", "Organization"].map((v) => (
                    <label key={v} className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-[var(--hairline)] cursor-pointer text-[13px] text-foreground/80 hover:border-foreground/60 has-[:checked]:border-foreground has-[:checked]:bg-foreground has-[:checked]:text-background transition-colors">
                      <input type="radio" name="enquirer" value={v} className="accent-foreground h-3.5 w-3.5" />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="eyebrow text-copy-muted">Area of Interest</label>
                <select id="interest" className="mt-2.5 w-full bg-transparent border-0 border-b border-foreground/30 px-0 py-2.5 text-[15px] focus:outline-none focus:border-foreground transition-colors">
                  <option value="">Select an option</option>
                  {INTEREST.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow text-copy-muted">Message</label>
                <textarea id="message" rows={4} className="mt-2.5 w-full bg-transparent border border-foreground/25 px-3 py-3 text-[15px] focus:outline-none focus:border-foreground transition-colors" />
              </div>

              <Hairline />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="type-micro">Your message will be reviewed confidentially.</p>
                <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background uppercase text-xs tracking-[0.22em] hover:bg-foreground/90 transition-colors">
                  Send Enquiry <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>

    </>
  );
}
