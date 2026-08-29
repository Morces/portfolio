/**
 * Central content source for the portfolio.
 *
 * Everything the site renders lives here so copy changes never require touching
 * a component. Skill proficiency numbers are informed estimates — adjust freely.
 *
 * @typedef {Object} SocialLink
 * @property {string} id
 * @property {'github'|'linkedin'|'twitter'|'instagram'|'email'|'website'} platform
 * @property {string} label
 * @property {string} url
 * @property {string} handle
 * @property {boolean} [featured]
 *
 * @typedef {Object} ProfileStat
 * @property {string} value
 * @property {string} label
 * @property {string} [subtext]
 *
 * @typedef {Object} EngineeringPrinciple
 * @property {string} title
 * @property {string} description
 * @property {'Layers'|'ShieldCheck'|'Zap'|'Activity'} icon
 *
 * @typedef {Object} ProfileData
 * @property {string} name
 * @property {string} roleTitle
 * @property {string} tagline
 * @property {string} statusText
 * @property {boolean} isAvailableForHire
 * @property {string} location
 * @property {string} timezone
 * @property {string} email
 * @property {string} avatarUrl
 * @property {string} resumeUrl
 * @property {string} bioIntro
 * @property {string[]} bioParagraphs
 * @property {EngineeringPrinciple[]} engineeringPrinciples
 * @property {ProfileStat[]} stats
 * @property {SocialLink[]} socials
 * @property {{ label: string, value: string }[]} quickFacts
 *
 * @typedef {Object} ProjectMetric
 * @property {string} label
 * @property {string} value
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} tagline
 * @property {string} description
 * @property {string} [fullDescription]
 * @property {string} category
 * @property {string[]} tags
 * @property {string[]} [highlights]
 * @property {ProjectMetric[]} [metrics]
 * @property {string[]} [architecture]
 * @property {string} [githubUrl]
 * @property {string} [liveDemoUrl]
 * @property {boolean} featured
 * @property {string} [image]
 * @property {string} year
 * @property {string} [role]
 *
 * @typedef {Object} SkillItem
 * @property {string} name
 * @property {number} level
 * @property {'Proficient'|'Advanced'|'Expert'} levelLabel
 * @property {number} years
 * @property {boolean} [featured]
 *
 * @typedef {Object} SkillCategory
 * @property {string} id
 * @property {string} title
 * @property {'Layout'|'Server'|'Database'|'Cloud'|'Cpu'|'Code'} icon
 * @property {string} description
 * @property {SkillItem[]} skills
 *
 * @typedef {Object} ExperienceItem
 * @property {string} id
 * @property {string} role
 * @property {string} company
 * @property {string} [companyUrl]
 * @property {string} location
 * @property {string} period
 * @property {string} type
 * @property {string} description
 * @property {string[]} achievements
 * @property {string[]} technologies
 *
 * @typedef {Object} EducationItem
 * @property {string} id
 * @property {string} degree
 * @property {string} institution
 * @property {string} location
 * @property {string} period
 * @property {string} [honors]
 * @property {string[]} [activities]
 *
 * @typedef {Object} CertificateItem
 * @property {string} id
 * @property {string} title
 * @property {string} issuer
 * @property {string} period
 */

/** @type {ProfileData} */
export const profile = {
  name: "Moses Karani",
  roleTitle: "Software Engineer",
  tagline:
    "I build efficient, innovative, and user-centric software — turning complex product requirements into responsive interfaces and reliable, production-ready services.",
  statusText: "Available for full-time and contract software engineering roles",
  isAvailableForHire: true,
  location: "Nairobi, Kenya · Remote",
  timezone: "East Africa Time (EAT / UTC+3)",
  email: "morcescodex@gmail.com",
  avatarUrl: "/me-edited.png",
  resumeUrl: "/Moses Karani.pdf",
  bioIntro:
    "Dynamic software engineer with 4+ years of professional experience, a strong drive for learning, and a detail-oriented approach to building full-stack products.",
  bioParagraphs: [
    "I work across the stack — designing responsive, accessible front-end interfaces in React and Next.js, and wiring them to RESTful Node.js services with an eye on performance and maintainability. On several projects I've owned the full lifecycle solo, from architecture and database design through to deployment and ongoing support.",
    "My day-to-day sits inside an agile workflow: code reviews, sprint planning, and QA cycles to keep delivery quality consistent. I've led React front-end development, optimized shared component libraries across multiple apps, and integrated Node.js back-ends so data flows cleanly between client and server.",
    "Away from the keyboard I'm usually reading about emerging technology, doing photography, or hiking. I care about meaningful projects and collaborative teams where I can keep levelling up.",
  ],
  engineeringPrinciples: [
    {
      title: "User-Centric Interfaces",
      description:
        "Translating complex workflows into intuitive, accessible screens — role-based views, sensible defaults, and layouts non-technical users can navigate without a manual.",
      icon: "Zap",
    },
    {
      title: "Clean, Maintainable Code",
      description:
        "Reusable components, clear domain boundaries, and readable implementations that the next engineer (often future me) can extend without friction.",
      icon: "ShieldCheck",
    },
    {
      title: "End-to-End Ownership",
      description:
        "Comfortable taking a product from architecture and database design through REST API integration, deployment, and the fixes that keep it stable in production.",
      icon: "Layers",
    },
    {
      title: "Collaborative Delivery",
      description:
        "Working inside agile cycles with cross-functional teams — code reviews, sprint planning, and QA — to ship consistently rather than heroically.",
      icon: "Activity",
    },
  ],
  stats: [
    {
      value: "4+",
      label: "Years Experience",
      subtext: "Professional full-stack engineering",
    },
    {
      value: "20+",
      label: "Projects Shipped",
      subtext: "Client and product work",
    },
    { value: "5", label: "Companies", subtext: "Agencies and product teams" },
    {
      value: "12+",
      label: "Live Products",
      subtext: "In production use today",
    },
  ],
  quickFacts: [
    { label: "Daily Driver", value: "JavaScript, TypeScript, React, Node.js" },
    { label: "Work Style", value: "Agile, cross-functional, high ownership" },
    { label: "Education", value: "Moringa School · BSc, JKUAT" },
  ],
  socials: [
    {
      id: "github",
      platform: "github",
      label: "GitHub",
      url: "https://github.com/Morces",
      handle: "@Morces",
      featured: true,
    },
    {
      id: "linkedin",
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/moseskarani/",
      handle: "in/moseskarani",
      featured: true,
    },
    {
      id: "twitter",
      platform: "twitter",
      label: "X / Twitter",
      url: "https://twitter.com/morces_c",
      handle: "@morces_c",
      featured: false,
    },
    {
      id: "instagram",
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/morces_k/",
      handle: "@morces_k",
      featured: false,
    },
  ],
};

/**
 * Projects. The Projects section shows the first 6, with a "View more" control
 * for the rest. Order here = display order, so keep the strongest first and
 * mark them `featured: true`.
 *
 * `githubUrl`, `image`, `metrics`, and `architecture` are optional and only
 * render when present. Projects with no `image` show a gradient initials tile —
 * drop a screenshot in `public/portfolio/` and set `image` to swap it in.
 * Categories are derived from the data (currently: Full-Stack, Frontend,
 * Integrations).
 * @type {Project[]}
 */
export const projects = [
  {
    id: "septiq",
    title: "Septiq",
    tagline:
      "City-wide smart sanitation platform — dispatch, payments, tracking",
    description:
      "A platform connecting customers to licensed exhauster operators and approved treatment facilities for safe wastewater disposal across Nairobi. Book on demand or schedule ahead, pay only after verified completion.",
    fullDescription:
      "Septiq digitises septic-tank emptying end to end. Customers register their tanks (location, capacity, property details), request or schedule a service, and the system auto-assigns the nearest available exhauster with the right truck size. Payment runs through M-Pesa or card with instant invoicing and digital receipts, and the whole trip — from pickup to verified disposal at an approved facility — is tracked in real time. There's a separate operator onboarding flow and a companion mobile app. I built both the REST API and the web front-end.",
    category: "Full-Stack",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "M-Pesa",
      "Tailwind CSS",
    ],
    highlights: [
      "Designed and built the REST API powering customer, operator, and dispatch workflows.",
      "Implemented smart job assignment that matches each request to the nearest available exhauster with a suitable truck size.",
      "Integrated M-Pesa and card payments with instant invoicing, digital receipts, and pay-on-verified-completion.",
      "Built real-time trip tracking and verified-disposal tracking from pickup through to an approved treatment facility.",
    ],
    liveDemoUrl: "https://septiq.co/",
    featured: true,
    image: "/portfolio/septiq.png",
    year: "2025",
    role: "Full-Stack Developer — API & web front-end",
  },
  {
    id: "mkombozi-hms",
    title: "Mkombozi Hospital Management System",
    tagline: "Role-based hospital operations platform in daily clinical use",
    description:
      "A comprehensive hospital management system in active use by a hospital in Tanzania — streamlining patient records, appointments, billing, and clinical workflows for staff across departments.",
    fullDescription:
      "Mkombozi HMS digitises the core operations of a working hospital: patient registration, appointment scheduling, billing, and clinical records. I owned the front-end and quality assurance, building role-based interfaces for admin, clinician, and reception staff and making sure the system held up under real-world use across departments. Built with React on the front-end and Node.js (Express) on the back-end.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Express", "REST APIs", "QA"],
    highlights: [
      "Built responsive, role-based front-end interfaces (admin, clinician, reception) that turn complex hospital workflows into intuitive screens.",
      "Implemented and maintained QA processes — manual test cases and bug tracking — to ensure reliability across patient registration, appointments, and billing.",
      "Worked closely with the Express back-end team to integrate APIs for patient data, scheduling, and billing, keeping real-time data accurate between client and server.",
      "Supported UAT with hospital staff, gathering feedback and iterating on the interface to improve day-to-day usability for non-technical users.",
    ],
    liveDemoUrl: "https://mkombozihealthcare.co.tz",
    featured: false,
    image: "/portfolio/mkombozi.png",
    year: "2024",
    role: "Front-End Development & QA",
  },
  {
    id: "ticketiko",
    title: "Ticketiko",
    tagline: "End-to-end event management and ticketing platform",
    description:
      "An all-in-one event management and ticketing platform taken from concept through to a live production product — event creation, ticket tiers, checkout, and order management.",
    fullDescription:
      "Ticketiko is an event and ticketing platform I built end to end, solo. I owned the full development lifecycle — from architecture and database design through to deployment and ongoing fixes — handling both the React front-end and the Node.js (Express) back-end. The focus throughout was a smooth, reliable purchase flow and data consistency between client and server. It runs in production at ticketiko.com.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Express", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Owned the entire development lifecycle solo — architecture, database design, front-end, back-end, and deployment.",
      "Designed and built core event and ticketing features: event creation, ticket tiers, checkout, and order management.",
      "Built and integrated REST APIs for events, ticketing, and payments, ensuring data consistency between client and server.",
      "Managed the full path to production, including deployment and ongoing fixes, resulting in a stable platform live at ticketiko.com.",
    ],
    liveDemoUrl: "https://www.ticketiko.com/",
    featured: true,
    image: "/portfolio/ticketiko.png",
    year: "2024",
    role: "Full-Stack Developer — end-to-end ownership",
  },
  {
    id: "naidrive",
    title: "NaiDrive",
    tagline: "Premium automotive marketplace for the Kenyan market",
    description:
      "A car marketplace where buyers search verified, certified vehicle listings by make, model, budget and location, book 150-point inspections, and tap into financing and insurance partners.",
    fullDescription:
      "NaiDrive is a premium automotive marketplace built for Kenya. Buyers filter listings by brand, body style, model, price in KES and location, browse a featured showcase and limited-time deals, and view full vehicle detail — year, transmission, fuel, verified and certified status. Around the listings sit value-added services: car financing with bank and micro-finance partners, motor insurance quotes with instant cover notes, 150-point certified inspections with official reports, and a service marketplace of vetted mechanics, detailers and parts suppliers. There's a research hub of reviews, comparisons and buying guides, plus user accounts and a dark mode.",
    category: "Full-Stack",
    tags: ["Next.js", "React", "Node.js", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Built the vehicle search and filtering experience (make, model, body style, budget, location) over a verified-listings catalogue.",
      "Implemented the featured showcase, limited-time deals, and detailed vehicle pages with verified / certified status.",
      "Wired in value-added service flows: financing, insurance quotes, and bookable 150-point inspections.",
      "Added user accounts and a light/dark theme across the marketplace.",
    ],
    liveDemoUrl: "https://naidrive.vercel.app/",
    featured: true,
    image: "/portfolio/naidrive.png",
    year: "2025",
    role: "Full-Stack Developer",
  },
  {
    id: "zkbiotime-dynamics",
    title: "ZKBioTime → Dynamics 365 Business Central",
    tagline:
      "One-way biometric attendance sync into Business Central for payroll",
    description:
      "A Node.js middleware service that pulls biometric attendance from ZKBioTime's REST API and posts it into Microsoft Dynamics 365 Business Central on a schedule, so payroll runs on real clock data instead of manual entry.",
    fullDescription:
      "ZKBioTime collects attendance from biometric devices (fingerprint / face). Dynamics 365 Business Central runs HR, payroll and finance. I built the one-way bridge between them: a Node.js middleware service, deployed on the client's on-prem server and triggered by cron, that reads attendance transactions and daily timecards from ZKBioTime's REST API and writes them into Business Central through its API endpoints. It maps each employee between the two systems, normalises punches into per-day attendance records, and runs incrementally and idempotently so a re-run never drops or duplicates a record.",
    category: "Integrations",
    tags: [
      "Node.js",
      "REST APIs",
      "Dynamics 365 Business Central",
      "ZKBioTime",
      "Cron",
      "On-Prem",
    ],
    highlights: [
      "Built a Node.js middleware service (cron-triggered, on-prem) that syncs attendance one-way from ZKBioTime into Dynamics 365 Business Central.",
      "Consumed ZKBioTime's REST API for attendance transactions and daily timecards, with token handling and pagination.",
      "Mapped employees between ZKBioTime and Business Central and normalised raw punches into per-day attendance records for payroll.",
      "Made every run incremental and idempotent — a last-processed watermark plus retry / back-off — so scheduled re-runs never double-post.",
    ],
    architecture: [
      "Cron job on the on-prem server invokes the Node.js sync worker on a fixed schedule.",
      "Pull phase: page through ZKBioTime's REST API for transactions since the last watermark.",
      "Transform phase: resolve employee mapping, aggregate punches into daily attendance, apply shift rules.",
      "Push phase: upsert attendance records into Business Central via its API, with retry / back-off and a run log for the payroll team.",
    ],
    featured: true,
    image: "",
    year: "2025",
    role: "Integration Engineer",
  },
  {
    id: "ogiek-peoples",
    title: "Ogiek Peoples Website",
    tagline:
      "Digital home for an Indigenous community's story and land-rights work",
    description:
      "A content-managed site for the Ogiek people of Kenya — culture and history, land-rights advocacy, news and press, and community initiatives.",
    fullDescription:
      "The Ogiek Peoples website presents the history, culture and ongoing land-rights struggle of the Ogiek Indigenous community, alongside news, press coverage and programme updates. It's built on a headless CMS so the community's team can publish and update content without touching code, with a typed Next.js front-end for performance and maintainability.",
    category: "Frontend",
    tags: ["Next.js", "TypeScript", "Strapi", "Tailwind CSS"],
    highlights: [
      "Built a typed Next.js front-end against a Strapi headless CMS so non-technical staff can manage all content.",
      "Structured content models for culture / history, news and press, and programme pages.",
      "Focused on fast, accessible reading experiences for a content-heavy advocacy site.",
    ],
    liveDemoUrl: "https://www.ogiekpeoples.org/",
    featured: true,
    image: "/portfolio/ogiek.png",
    year: "2024",
    role: "Front-End Development",
  },
  {
    id: "gongaa-fm",
    title: "Gongaa FM",
    tagline:
      "Community radio connecting the African diaspora with the continent",
    description:
      "A community-driven online radio platform — live streaming, shows and schedules, music and cultural projects — linking the African diaspora back to the continent.",
    fullDescription:
      "Gongaa FM is an internet radio platform for a diaspora-focused station. It streams live audio, presents the show schedule and presenters, and highlights music and cultural projects. The front-end is React with an audio streaming player; a Node.js back-end serves schedule and content data.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "Audio Streaming", "REST APIs"],
    highlights: [
      "Built the live-radio listening experience with a persistent audio player.",
      "Presented dynamic show schedules, presenters, and cultural-project content.",
      "Integrated a React front-end with Node.js services for schedule and content data.",
    ],
    liveDemoUrl: "https://www.gongaafm.com/",
    featured: false,
    image: "/portfolio/gongaafm.png",
    year: "2023",
    role: "Full-Stack Developer",
  },
  {
    id: "zkbiotime-seamlesshr",
    title: "ZKBioTime ⇄ SeamlessHR Integration",
    tagline: "Two-way sync between biometric attendance and SeamlessHR",
    description:
      "A Node.js middleware that keeps ZKBioTime and SeamlessHR in step both ways — pushing biometric attendance into SeamlessHR, and syncing employee and leave data back into ZKBioTime — on a scheduled cron run.",
    fullDescription:
      "SeamlessHR is a pan-African HR and payroll platform. I built a two-way integration between it and ZKBioTime, running as a Node.js middleware service on the client's on-prem server and triggered by cron. Outbound, it reads punches from ZKBioTime's REST API, converts them into SeamlessHR's attendance shape — present / absent / late, first-in / last-out, worked hours — per each company's shift configuration, and posts them through SeamlessHR's authenticated REST API. Inbound, it pulls employee records and approved leave from SeamlessHR back into ZKBioTime so the attendance side always reflects the current roster and who's legitimately off. Employee matching, pagination, rate limits and partial-failure recovery are all handled, with a local ledger of synced records for audit and safe re-runs.",
    category: "Integrations",
    tags: [
      "Node.js",
      "REST APIs",
      "SeamlessHR",
      "ZKBioTime",
      "Two-Way Sync",
      "Cron",
      "On-Prem",
    ],
    highlights: [
      "Built a bidirectional Node.js middleware (cron-triggered, on-prem) linking ZKBioTime and SeamlessHR.",
      "Outbound: translated ZKBioTime punches into SeamlessHR's attendance model (present / absent / late, first-in / last-out, worked hours) per company shift rules and posted them via its authenticated REST API.",
      "Inbound: synced employee records and approved leave from SeamlessHR back into ZKBioTime so attendance always reflects the live roster.",
      "Handled employee matching, pagination, rate limits and partial-failure recovery, with a local synced-record ledger for audit and re-runs.",
    ],
    architecture: [
      "Single cron-driven Node.js worker on the on-prem server runs both sync directions per cycle.",
      "Outbound leg: ZKBioTime REST API → transform to SeamlessHR attendance shape → SeamlessHR REST API.",
      "Inbound leg: SeamlessHR REST API (employees, approved leave) → reconcile → ZKBioTime.",
      "Shared employee-mapping table and a synced-record ledger keep both legs idempotent and auditable.",
    ],
    featured: false,
    image: "",
    year: "2025",
    role: "Integration Engineer",
  },
  {
    id: "sourichant-notary",
    title: "Sourichant Notary Network",
    tagline: "Booking and information hub for notary services",
    description:
      "A website for a notary network where clients learn about services and book appointments, backed by a fast Next.js front-end.",
    fullDescription:
      "The Sourichant Notary Network site lets prospective clients understand the range of notary services on offer and request or book appointments, with informational pages covering process and requirements. Built with Next.js for performance and straightforward content updates.",
    category: "Frontend",
    tags: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Built the marketing and services pages plus an appointment-request flow.",
      "Structured clear, scannable information around notary processes and requirements.",
    ],
    liveDemoUrl: "https://www.sourichantnotarynetwork.ai/",
    featured: false,
    image: "/portfolio/sourichant.png",
    year: "2024",
    role: "Front-End Development",
  },
  {
    id: "omani-luxe-abaya",
    title: "Omani Luxe Abaya",
    tagline: "E-commerce storefront for luxury silk modest fashion",
    description:
      "An online store for handcrafted silk abayas, scarves and hijabs — collections, new arrivals, bestsellers, product detail with size guides, ratings and reviews.",
    fullDescription:
      "Omani Luxe Abaya is a premium modest-fashion storefront. It presents curated collections, new arrivals and bestsellers, with product pages carrying detailed size guides (length in inches plus letter sizes), fabric information, ratings and verified reviews. Shopping touches include stock states (new / sold out), free-shipping thresholds, a 14-day returns policy and WhatsApp concierge support, targeted at the Kenya and East Africa market.",
    category: "Frontend",
    tags: ["Next.js", "React", "Tailwind CSS", "E-commerce"],
    highlights: [
      "Built the catalogue experience — collections, new arrivals, bestsellers — with filterable product grids.",
      "Implemented product detail pages with size guides, fabric info, ratings and reviews.",
      "Handled stock states, free-shipping thresholds, and returns / concierge messaging.",
    ],
    liveDemoUrl: "https://omani-luxe-abaya.vercel.app/",
    featured: false,
    image: "/portfolio/omani.png",
    year: "2026",
    role: "Front-End Development",
  },
  {
    id: "bridgewise-africa",
    title: "Bridge Wise Africa",
    tagline:
      "Portfolio site for a conference secretariat & event production firm",
    description:
      "A corporate site for a pan-African event management and conference secretariat company — featured case studies, upcoming and recent events, and a services breakdown.",
    fullDescription:
      "Bridge Wise Africa delivers strategic secretariat and event-management services for high-level, multi-stakeholder convenings. The site presents featured case studies (Africa Global PR Week, the State of PR in Africa report launch, the Africa Digital Finance Summit and more), an upcoming and recent events section, and a structured catalogue of professional services, with individual case-study pages.",
    category: "Frontend",
    tags: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Built the case-study system — index plus detail pages — for the company's event portfolio.",
      "Implemented an events section covering upcoming and past conferences.",
      "Laid out the services catalogue and overall brand presentation.",
    ],
    liveDemoUrl: "https://bridgewise.africa/",
    featured: false,
    image: "/portfolio/bridgewise.png",
    year: "2025",
    role: "Front-End Development",
  },
  {
    id: "gowriters",
    title: "GoWriters Publishing",
    tagline: "Multilingual book discovery and publishing platform",
    description:
      "A publishing platform where readers browse a curated catalogue of books by genre and authors, with a multilingual interface (English, German, French, Portuguese).",
    fullDescription:
      "GoWriters Publishing is a digital catalogue and discovery platform for books from emerging authors. Readers explore featured titles and browse by genre — fiction, non-fiction, mystery, romance — with author pages and account sign-in. The interface is fully localised across English, German, French and Portuguese.",
    category: "Frontend",
    tags: ["Next.js", "React", "i18n", "Tailwind CSS"],
    highlights: [
      "Built the book catalogue and discovery UI with genre browsing and featured titles.",
      "Implemented a four-language localised interface (EN / DE / FR / PT).",
      "Added reader account sign-in and author pages.",
    ],
    liveDemoUrl: "https://www.gowriters.co/",
    featured: false,
    image: "/portfolio/gowriters.png",
    year: "2026",
    role: "Front-End Development",
  },
  {
    id: "horn-africa-institute",
    title: "Horn Africa Institute",
    tagline: "Website for a women-led regional development organisation",
    description:
      "A site for a regional, women-led development organisation working to empower and protect the rights of pastoralist women and girls across the Horn of Africa.",
    fullDescription:
      "The Horn Africa Institute website presents the organisation's mission, programmes and impact around the rights of pastoralist women and girls across the Horn of Africa, along with news and ways to get involved. Built on WordPress so staff can maintain content directly.",
    category: "Frontend",
    tags: ["WordPress", "PHP", "Bootstrap"],
    highlights: [
      "Built and themed the WordPress site around the organisation's programmes and impact.",
      "Set up content structures the team can maintain without a developer.",
    ],
    liveDemoUrl: "https://www.hornafricainstitute.co.ke/",
    featured: false,
    image: "/portfolio/hoa.png",
    year: "2023",
    role: "Web Development",
  },
  {
    id: "prevail",
    title: "PRevail",
    tagline: "Unified dashboard for brand and PR activity management",
    description:
      "A web application that streamlines the management of brands and all PR activities in one place — campaigns, brands, and day-to-day PR workflows in a single dashboard.",
    fullDescription:
      "PRevail brings brand and public-relations management into a single dashboard. I handled front-end development: building responsive, reusable React components for managing brands, campaigns, and PR activities, and translating product and design requirements into clean, maintainable UI. I worked closely with the back-end team to integrate data through REST APIs, keeping the focus on usability and performance across the platform's core workflows.",
    category: "Frontend",
    tags: ["React", "JavaScript", "REST APIs"],
    highlights: [
      "Built responsive, reusable React components for managing brands, campaigns, and PR activities in one dashboard.",
      "Translated product and design requirements into clean, maintainable UI, integrating data through REST APIs with the back-end team.",
      "Focused on usability and performance across the platform's core day-to-day PR management workflows.",
    ],
    liveDemoUrl: "https://prevail.africa",
    featured: false,
    image: "/portfolio/prevail.png",
    year: "2023",
    role: "Front-End Development",
  },
  {
    id: "betterversion",
    title: "Betterversion",
    tagline: "Website for a charitable non-profit organisation",
    description:
      "A site for a registered charitable association supporting disadvantaged individuals through education, health, social support, and community development — with events, a gallery, and donations.",
    fullDescription:
      "Betterversion e.V. is a charitable organisation running programmes across education and empowerment, intercultural exchange and community building, social and charitable assistance, senior care, and refugee and migrant integration. The website presents the organisation's purpose and approach, its programme areas, an events section and photo gallery, contact details and a donation path, with a multilingual interface.",
    category: "Frontend",
    tags: ["Next.js", "React", "Tailwind CSS", "i18n"],
    highlights: [
      "Built the programme, events, and gallery sections around the organisation's areas of work.",
      "Implemented a multilingual interface and a clear donation call-to-action.",
    ],
    liveDemoUrl: "https://betterversionec.org/",
    featured: false,
    image: "/portfolio/bettterversion.png",
    year: "2024",
    role: "Front-End Development",
  },
  {
    id: "baraka-galla-ranch",
    title: "Baraka Galla Ranch",
    tagline: "Agri-tourism site for a goat farm with bookable tours",
    description:
      "A marketing site for a sustainable goat-farming ranch offering educational farm tours — with a booking flow, team and gallery pages, and FAQs.",
    fullDescription:
      "Baraka Galla Ranch runs premium goat farming and educational agricultural experiences. The site introduces the ranch and its work in sustainable livestock farming, showcases the farm and team, carries a gallery and FAQ, and lets visitors book a weekend farm tour through a scheduling flow.",
    category: "Frontend",
    tags: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Built the marketing pages — about, the farm, team, gallery, FAQ — around the ranch's story.",
      "Implemented a farm-visit booking flow with fixed weekend tour slots.",
    ],
    liveDemoUrl: "https://www.barakafarmskenya.com/",
    featured: false,
    image: "/portfolio/baraka.png",
    year: "2025",
    role: "Front-End Development",
  },
];

/**
 * Skill proficiency is a personal estimate to give the bars shape — tune the
 * `level` / `years` / `levelLabel` values as you see fit.
 * @type {SkillCategory[]}
 */
export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: "Code",
    description:
      "Core languages I reach for day to day, plus a few I've shipped with.",
    skills: [
      {
        name: "JavaScript",
        level: 90,
        levelLabel: "Advanced",
        years: 4,
        featured: true,
      },
      {
        name: "TypeScript",
        level: 82,
        levelLabel: "Advanced",
        years: 3,
        featured: true,
      },
      { name: "Python", level: 72, levelLabel: "Proficient", years: 3 },
      { name: "Ruby", level: 60, levelLabel: "Proficient", years: 1 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    description:
      "Building responsive, accessible interfaces and reusable component systems.",
    skills: [
      {
        name: "React",
        level: 90,
        levelLabel: "Advanced",
        years: 4,
        featured: true,
      },
      {
        name: "Next.js",
        level: 85,
        levelLabel: "Advanced",
        years: 3,
        featured: true,
      },
      { name: "HTML", level: 92, levelLabel: "Advanced", years: 4 },
      { name: "CSS", level: 88, levelLabel: "Advanced", years: 4 },
      {
        name: "Tailwind CSS",
        level: 88,
        levelLabel: "Advanced",
        years: 3,
        featured: true,
      },
      { name: "Angular", level: 58, levelLabel: "Proficient", years: 1 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "Server",
    description:
      "RESTful services, integration work, and full end-to-end ownership.",
    skills: [
      {
        name: "Node.js",
        level: 82,
        levelLabel: "Advanced",
        years: 3,
        featured: true,
      },
      {
        name: "Express",
        level: 82,
        levelLabel: "Advanced",
        years: 3,
        featured: true,
      },
      { name: "REST API Design", level: 88, levelLabel: "Advanced", years: 4 },
      { name: "Django", level: 62, levelLabel: "Proficient", years: 2 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: "Cpu",
    description: "Cross-platform mobile apps with the React Native toolchain.",
    skills: [
      { name: "React Native", level: 72, levelLabel: "Proficient", years: 2 },
      { name: "Expo", level: 70, levelLabel: "Proficient", years: 2 },
    ],
  },
  {
    id: "databases-devops",
    title: "Databases & DevOps",
    icon: "Database",
    description: "Relational data, containerisation, and CI pipelines.",
    skills: [
      {
        name: "PostgreSQL",
        level: 78,
        levelLabel: "Proficient",
        years: 3,
        featured: true,
      },
      { name: "Docker", level: 70, levelLabel: "Proficient", years: 2 },
      { name: "Jenkins", level: 62, levelLabel: "Proficient", years: 2 },
      {
        name: "Git & GitHub",
        level: 90,
        levelLabel: "Advanced",
        years: 4,
        featured: true,
      },
    ],
  },
  {
    id: "practices",
    title: "Ways of Working",
    icon: "Cloud",
    description: "How I collaborate and keep delivery quality consistent.",
    skills: [
      {
        name: "Agile Methodologies",
        level: 85,
        levelLabel: "Advanced",
        years: 3,
        featured: true,
      },
      { name: "Code Review", level: 84, levelLabel: "Advanced", years: 3 },
      {
        name: "QA & Manual Testing",
        level: 80,
        levelLabel: "Advanced",
        years: 3,
      },
    ],
  },
];

/** @type {ExperienceItem[]} */
export const experiences = [
  {
    id: "cojani-labs",
    role: "Software Engineer",
    company: "Cojani Labs",
    location: "Remote",
    period: "Mar 2025 — Present",
    type: "Full-time",
    description:
      "Full-stack feature development across client projects, working with cross-functional teams to turn product requirements into scalable, production-ready code.",
    achievements: [
      "Develop and maintain full-stack features across client projects, collaborating closely with cross-functional teams.",
      "Build responsive, accessible front-end interfaces and integrate them with RESTful back-end services, prioritising performance and maintainability.",
      "Work in an agile cycle — code reviews, sprint planning, and QA — to keep delivery quality consistent.",
    ],
    technologies: ["React", "Node.js", "REST APIs", "Agile"],
  },
  {
    id: "vpmtechlab",
    role: "Software Engineer",
    company: "VPMTechLab",
    location: "Nairobi, Kenya",
    period: "Jan 2025 — Present",
    type: "Contract",
    description:
      "VPMTechLab is a software agency focused on building custom solutions for businesses. Contributing full-stack engineering across client engagements.",
    achievements: [],
    technologies: ["React", "Next.js", "Node.js"],
  },
  {
    id: "exhibit-it",
    role: "Lead Software Engineer",
    company: "Exhibit IT Solutions",
    location: "Nairobi, Kenya",
    period: "Apr 2024 — Jan 2025",
    type: "Full-time",
    description:
      "Exhibit IT Solutions is a technology solutions provider based in Kenya serving the East African region. Led engineering delivery on client software.",
    achievements: [],
    technologies: ["React", "Node.js", "Express"],
  },
  {
    id: "memory-international",
    role: "Software Developer",
    company: "Memory International Limited",
    location: "Mbagathi, Nairobi",
    period: "Mar 2024 — Apr 2024",
    type: "Contract",
    description:
      "Short-term contract delivering web development work for the Memory International team.",
    achievements: [],
    technologies: ["React", "JavaScript"],
  },
  {
    id: "nuri-technologies",
    role: "Software Engineer",
    company: "Nuri Technologies",
    location: "Juja, Kenya",
    period: "Nov 2022 — Jan 2024",
    type: "Full-time",
    description:
      "Nuri builds innovative solutions aimed at improving people's day-to-day activities and promoting efficiency.",
    achievements: [
      "Led React-based front-end page development, enhancing user engagement and efficiency.",
      "Optimised shared components across multiple apps, accelerating feature deployment.",
      "Integrated the Node.js back-end with the front-end, ensuring clean data flow and system synergy.",
    ],
    technologies: ["React", "Node.js", "JavaScript"],
  },
];

/** @type {EducationItem[]} */
export const education = [
  {
    id: "moringa",
    degree: "Software Engineering Bootcamp",
    institution: "Moringa School",
    location: "Nairobi, Kenya",
    period: "Jan 2022 — Jul 2022",
    activities: [
      "Completed the Moringa Core Program in full-stack software development",
      "Introduction to Programming prep track",
    ],
  },
  {
    id: "jkuat",
    degree: "BSc, Analytical Chemistry",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    location: "Juja, Kenya",
    period: "Sep 2017 — Nov 2021",
  },
];

/** @type {CertificateItem[]} */
export const certificates = [
  {
    id: "moringa-fullstack",
    title: "Software Development — Fullstack Certificate",
    issuer: "Moringa School",
    period: "2022",
  },
  {
    id: "moringa-prep",
    title:
      "Software Development — Prep Certificate (Introduction to Programming)",
    issuer: "Moringa School",
    period: "2022",
  },
  {
    id: "jkuat-degree",
    title: "Bachelor's Degree, Analytical Chemistry",
    issuer: "JKUAT",
    period: "2021",
  },
];
