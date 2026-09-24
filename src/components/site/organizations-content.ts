import icfLogo from "@/assets/icf-acc.png";
import gallupLogo from "@/assets/gallup-strengths.png";
import cdpLogo from "@/assets/cdp.png";
import inseadLogo from "@/assets/insead.png";

/** Copy shared by both Organizations pages. `meter` is the share of the hero bar filled; null draws an open-ended line. */
export const STATS = [
  { n: "81", suffix: " / 100", l: "women promoted per 100 men at first step to manager", s: "McKinsey Women in the Workplace 2024", meter: 81 },
  { n: "29%", suffix: "", l: "of C-suite roles globally held by women", s: "McKinsey Women in the Workplace 2025", meter: 29 },
  { n: "50yr", suffix: "+", l: "to global gender parity at current pace", s: "McKinsey / LeanIn 2024", meter: null },
];

export const NOT_WORKING = [
  {
    t: "Unconscious bias training",
    d: "Broadly delivered, rarely translates into behaviour change. HBR research confirms: attitude shifts do not equal promotion shifts.",
  },
  {
    t: "Awareness-led DEI programs",
    d: "Good intentions without accountability structures, measurable targets, or ties to performance metrics. Intent without infrastructure.",
  },
  {
    t: "Mentorship without sponsorship",
    d: "Women get advice. Men get advocacy. Having a mentor does not replicate what active sponsorship delivers for career advancement.",
  },
  {
    t: "Cutting what was working",
    d: "Remote flexibility, formal sponsorship, targeted development — being scaled back precisely when retention of women and minorities depends on them.",
  },
];

export const MOVES_NEEDLE = [
  {
    t: "Behaviour-based training",
    d: "Tied to specific decision moments — hiring panels, promotion reviews, feedback. Framed as an opportunity for managers, not a compliance exercise.",
  },
  {
    t: "Embedded sponsorship",
    d: "Not one-off initiatives — sponsorship woven into career development infrastructure and held accountable at leadership level over time.",
  },
  {
    t: "De-biased promotion processes",
    d: "McKinsey's top-performing companies share one trait: bias is addressed at the decision point — not in the training room weeks before.",
  },
  {
    t: "Individual + systemic coaching",
    d: "Equipping leaders to navigate complex structures while the organization simultaneously addresses those structures. Both levels, at once.",
  },
];

export const SOUND_FAMILIAR = [
  "We have ERGs and training — but our senior pipeline is still male-dominated.",
  "High-potential women are leaving before we can promote them.",
  "We don't know if our DEI spend is actually doing anything.",
];

export const OFFERINGS = [
  {
    key: "coaching",
    tab: "1:1 Coaching",
    badge: "Sponsored Leadership Coaching",
    title: "ELEVATE Strategic Advancement Program",
    tagline: "Six- or twelve-month coaching for high-potential women in succession pipelines.",
    focus: ["Leadership presence", "Visibility & sponsorship", "Advancement positioning", "Influence & negotiation", "Sustainable performance"],
    delivery: ["6 or 12-month programs", "ICF-credentialed coach", "360 assessment included", "Progress reporting for HR"],
    bestFor: "Emerging and mid-senior leaders in succession or development pipelines.",
  },
  {
    key: "workshops",
    tab: "Workshops",
    badge: "Workshops & Strategic Sessions",
    title: "Leadership Workshops & Strategic Sessions",
    tagline: "Custom in-person or virtual sessions for groups up to 40.",
    focus: ["Sponsorship vs. mentorship", "Leadership double bind", "Evaluation bias", "Career transitions", "Sustainable ambition"],
    delivery: ["Half or full-day format", "In-person or virtual", "Up to 40 participants", "Custom to your context"],
    bestFor: "Women's networks, manager groups, leadership cohorts, HR and L&D teams.",
  },
  {
    key: "strengths",
    tab: "Strengths",
    badge: "Gallup CliftonStrengths Certified",
    title: "Strengths-Based Team Development",
    tagline: "Compound what already makes teams exceptional.",
    focus: ["Team collaboration", "Role alignment", "Leadership self-awareness", "Performance optimization"],
    delivery: ["Individual assessments", "Team debrief session", "Manager coaching add-on", "Action planning included"],
    bestFor: "New or restructured teams, high-performance units, leadership cohorts.",
  },
  {
    key: "dei",
    tab: "DEI Consultancy",
    badge: "Structural Inclusion & Advancement",
    title: "Structural Inclusion & Advancement Strategy",
    tagline: "Move from awareness to structural, measurable change.",
    focus: ["Promotion process audit", "Sponsorship access gaps", "Leadership criteria review", "Pipeline integrity", "Attrition risk mapping"],
    delivery: ["Discovery & data review", "Findings report", "Strategic recommendations", "Implementation support"],
    bestFor: "HR and DEI leads wanting to move from awareness to structural, measurable change.",
  },
];

export type Offering = (typeof OFFERINGS)[number];

export const RESEARCH_OUTCOMES = [
  { n: "40%", l: "reduction in attrition after customized DEI programs", s: "McKinsey case data" },
  { n: "30%", l: "increase in women in leadership roles", s: "McKinsey case data" },
  { n: "5×", l: "more likely to retain talent in inclusive cultures", s: "HBR / Deloitte" },
];

export const OUTCOMES = [
  { n: "+", l: "Stronger mid-level leadership pipeline" },
  { n: "↑", l: "Increased promotion readiness" },
  { n: "↑", l: "Improved retention of high-potential women" },
  { n: "↑", l: "Greater leadership confidence and visibility" },
  { n: "↓", l: "Reduced burnout risk during critical career stages" },
  { n: "=", l: "Clear alignment between individual growth and business objectives" },
];

export const PARTNER_CRITERIA = [
  "Recognize the importance of strengthening progression, not just recruitment",
  "Invest in structured leadership development",
  "Seek measurable advancement impact",
  "Value evidence-based approaches over symbolic initiatives",
  "Support confidentiality while maintaining accountability",
];

export const CREDENTIAL_LOGOS = [
  { logo: icfLogo, label: "ICF ACC Certified", scale: 1.76 },
  { logo: gallupLogo, label: "Gallup Certified CliftonStrengths Coach", scale: 1.5 },
  { logo: cdpLogo, label: "Certified Diversity Professional (CDP®)", scale: 1.62 },
  { logo: inseadLogo, label: "Gender Specialist trained at INSEAD", scale: 1.53 },
];

export const NUMERAL =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)] font-serif italic text-[1rem] text-gold-deep";

export const CARD =
  "border border-[color-mix(in_oklch,var(--gold)_20%,transparent)] bg-[color-mix(in_oklch,var(--background)_72%,transparent)]";
