/* =========================================================================
   CONTENT — single source of truth for all copy + placeholders.
   Edit words here; you should rarely need to touch the components.
   Every value you must personalize is marked with [REPLACE] in comments.
   ========================================================================= */

export const brand = {
  name: "Northbound Studio", // [REPLACE] company name
  tagline: "Web development, done right.", // [REPLACE] optional one-liner
  email: "contact@rikisec.com", // contact email (used in Nav, Contact, Footer)
  // Formspree endpoint — submissions are emailed to contact@rikisec.com.
  formEndpoint: "https://formspree.io/f/mnjydknd",
  socials: [
    { label: "Twitter / X", href: "https://twitter.com/your-handle" }, // [REPLACE]
    { label: "LinkedIn", href: "https://www.linkedin.com/company/your-company" }, // [REPLACE]
    { label: "GitHub", href: "https://github.com/your-org" }, // [REPLACE]
    { label: "Dribbble", href: "https://dribbble.com/your-handle" }, // [REPLACE]
  ],
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Web Applications · Custom Software · Websites",
  // The headline is split so we can style the accent line differently.
  headlineTop: "We build the web",
  headlineAccent: "your business deserves.",
  sub: "We're a senior web development studio that turns ambitious ideas into fast, beautiful, revenue-generating products — shipped on time, built to scale, and crafted to make you look like the smartest company in the room.",
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "See our work", href: "#work" },
  microProof: "Trusted by founders, marketers, and product teams who refuse to settle.",
};

// Trust strip — placeholder client wordmarks + headline stats.
export const trust = {
  line: "Teams who ship with us",
  // [REPLACE] with real client names (text renders as elegant wordmarks).
  logos: ["Aperture", "Northwind", "Vellum", "Cobalt&Co", "Lumen", "Fjord", "Atlas Labs"],
  stats: [
    { value: 120, suffix: "+", label: "Projects delivered" }, // [REPLACE]
    { value: 98, suffix: "%", label: "Clients who return" }, // [REPLACE]
    { value: 6, suffix: "wk", label: "Avg. time to launch" }, // [REPLACE]
    { value: 100, suffix: "%", label: "On-time delivery" }, // [REPLACE]
  ],
};

export const services = {
  eyebrow: "What we do",
  title: "Everything you need to win online.",
  sub: "One senior team for the whole journey — strategy, design, engineering, and launch. No hand-offs, no finger-pointing, no surprises.",
  items: [
    {
      tag: "01",
      title: "Web Applications",
      copy: "Dashboards, SaaS platforms, and portals that feel instant and never buckle under growth. We sweat the details so your users stay, convert, and come back.",
      points: ["SaaS & dashboards", "Real-time & data-heavy UIs", "Built to scale"],
    },
    {
      tag: "02",
      title: "Custom Software",
      copy: "Off-the-shelf tools holding you back? We build software shaped around how you actually work — automating the busywork and unlocking what competitors can't.",
      points: ["Internal tools", "APIs & integrations", "Workflow automation"],
    },
    {
      tag: "03",
      title: "Websites",
      copy: "Marketing sites that don't just look stunning — they sell. Fast, SEO-ready, and engineered to turn visitors into customers from the very first scroll.",
      points: ["Marketing & brand sites", "SEO & performance", "Conversion-focused"],
    },
    {
      tag: "04",
      title: "Anything Else You Need",
      copy: "Got a problem that doesn't fit a neat box? That's our favorite kind. Tell us the outcome you want and we'll architect the smartest way to get you there.",
      points: ["E-commerce", "AI features", "We'll figure it out"],
    },
  ],
};

export const why = {
  eyebrow: "Why choose us",
  title: "The safe choice that still feels exciting.",
  sub: "Hiring a dev team is a risk. We've built our entire studio to take that risk off the table — so you get the polish of a top agency without the anxiety.",
  pillars: [
    {
      title: "Senior people, start to finish",
      copy: "No juniors learning on your budget. The people who scope your project are the ones who build it.",
    },
    {
      title: "Communication you'll actually feel",
      copy: "Clear timelines, weekly progress you can see, and a direct line to your team. You'll never wonder where things stand.",
    },
    {
      title: "Fixed scope, no nasty surprises",
      copy: "We agree on price and timeline up front. If something changes, you hear it from us first — never on the invoice.",
    },
    {
      title: "Built to outlast us",
      copy: "Clean, documented, standards-based code. If you ever move on, your next team will thank you — not curse our name.",
    },
  ],
  statement:
    "We measure our work by your results — revenue earned, hours saved, customers won. Beautiful is the baseline; impact is the point.",
};

export const process = {
  eyebrow: "How we work",
  title: "A clear path from idea to launch.",
  sub: "Four focused stages, zero chaos. You always know what's happening, what's next, and why.",
  steps: [
    {
      no: "01",
      name: "Discover",
      copy: "We dig into your goals, users, and constraints — then map the smartest route to real results before a line of code is written.",
    },
    {
      no: "02",
      name: "Design",
      copy: "We craft interfaces that feel premium and convert hard, validating the look and flow with you before we build.",
    },
    {
      no: "03",
      name: "Build",
      copy: "Senior engineers ship in fast, visible increments. You watch it come to life — and steer along the way.",
    },
    {
      no: "04",
      name: "Launch",
      copy: "We deploy, harden, and hand over with care — plus the support to keep you growing long after go-live.",
    },
  ],
};

// Portfolio — elegant placeholders. [REPLACE] each project with your real work.
export const work = {
  eyebrow: "Selected work",
  title: "Proof, not promises.",
  sub: "A few recent builds. Replace these with your own — the layout is ready for screenshots, case studies, and results.",
  note: "[REPLACE] These are placeholder projects. Swap in your real work in src/data/content.js.",
  projects: [
    {
      title: "Helio Finance",
      category: "Web App · Fintech",
      result: "Cut onboarding time by 63%",
      // Each project gets a tasteful gradient placeholder (no image files needed).
      from: "#1b3a2b",
      to: "#3c6f50",
    },
    {
      title: "Atlas Commerce",
      category: "E-commerce Platform",
      result: "+38% conversion in 90 days",
      from: "#5a4326",
      to: "#a8895c",
    },
    {
      title: "Vellum CMS",
      category: "Custom Software",
      result: "Replaced 4 tools with one",
      from: "#23303a",
      to: "#54707f",
    },
    {
      title: "Fjord Travel",
      category: "Marketing Website",
      result: "2.1s → 0.6s load time",
      from: "#3a2433",
      to: "#7f5470",
    },
    {
      title: "Cobalt Analytics",
      category: "Real-time Dashboard",
      result: "10M events/day, no lag",
      from: "#1f2a44",
      to: "#4a5a86",
    },
    {
      title: "Lumen Health",
      category: "Patient Portal",
      result: "HIPAA-ready in 8 weeks",
      from: "#234038",
      to: "#4f7d6e",
    },
  ],
};

// Testimonials — believable placeholders. [REPLACE] with real quotes + permission.
export const testimonials = {
  eyebrow: "What clients say",
  title: "The kind of partner you tell people about.",
  items: [
    {
      quote:
        "They shipped faster than our last two agencies combined — and it actually worked on launch day. We've sent them three projects since.",
      name: "Jordan Avery", // [REPLACE]
      role: "Founder & CEO", // [REPLACE]
      company: "Helio Finance", // [REPLACE]
    },
    {
      quote:
        "Finally, a team that explains things like adults and delivers like pros. The new site paid for itself in under two months.",
      name: "Mara Lindqvist", // [REPLACE]
      role: "VP of Marketing", // [REPLACE]
      company: "Fjord Travel", // [REPLACE]
    },
    {
      quote:
        "Our internal tool went from a daily headache to something the team genuinely loves. Worth every penny — and then some.",
      name: "Daniel Cho", // [REPLACE]
      role: "Head of Operations", // [REPLACE]
      company: "Vellum", // [REPLACE]
    },
  ],
};

export const finalCta = {
  eyebrow: "Let's build something",
  title: "Your competitors are already moving.",
  sub: "Tell us what you're trying to build. You'll get honest advice, a clear plan, and a team that treats your project like its own — no pressure, no jargon.",
  cta: { label: "Get in touch", href: "#contact" },
};

export const contact = {
  eyebrow: "Start a project",
  title: "Let's talk about what you're building.",
  sub: "Fill this out and we'll get back to you within one business day with next steps. Prefer email? Reach us directly anytime.",
  whatNext: [
    "We reply within 1 business day",
    "A quick call to understand your goals",
    "A clear proposal — scope, timeline, price",
  ],
  successTitle: "Message sent — thank you!",
  successBody:
    "We've got your details and we'll be in touch within one business day. Talk soon.",
};

export const footer = {
  blurb:
    "A senior web development studio building web apps, custom software, and websites that move the needle.",
  columns: [
    {
      heading: "Services",
      links: [
        { label: "Web Applications", href: "#services" },
        { label: "Custom Software", href: "#services" },
        { label: "Websites", href: "#services" },
        { label: "Anything else", href: "#contact" },
      ],
    },
    {
      heading: "Studio",
      links: [
        { label: "Why us", href: "#why" },
        { label: "Process", href: "#process" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
};
