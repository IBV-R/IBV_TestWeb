export const site = {
  name: "IndusBridge Ventures",
  shortName: "IBV",
  url: "https://www.indusbridgeventures.com",
  description:
    "Indusbridge Ventures invests in & commercialises groundbreaking dual-use tech in sectors of national importance.",
  social: {
    linkedin: "https://www.linkedin.com/company/indusbridge-ventures/",
  },
  contact: {
    emails: {
      info: "info@indusbridgeventures.com",
      careers: "careers@indusbridgeventures.com",
    },
    locations: {
      usa: {
        label: "USA",
        lines: ["1407 Broadway, #1701;", "New York, NY 10018, USA."],
      },
      india: {
        label: "India",
        lines: [
          "Tower 2A, One World Centre,",
          "Senapati Bapat Marg, Lower Parel,",
          "Mumbai, 400013, India.",
        ],
      },
    },
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/thesis", label: "Investment Thesis" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

export const additionalLinks = [
  { href: "/startups", label: "For Startups" },
  { href: "/investors", label: "For Investors" },
  { href: "/i2a", label: "I2A Launchpad" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
] as const;

export const footerLinks = [...navLinks, ...additionalLinks] as const;

export const focusAreas = [
  {
    title: "Defense & Deep Tech",
    description:
      "Breakthrough dual-use, propulsion, hypersonics and defense systems, meeting urgent national security needs and opening premium defense markets.",
  },
  {
    title: "Space Infrastructure & SSA",
    description:
      "Satellites, launch systems, space‑situational awareness & defense — because owning the orbital layer is now the gateway to every modern service and a fast-growing $800B market.",
  },
  {
    title: "AI & Command Infrastructure",
    description:
      "Real-time sensing fused with decision software, turning raw data into faster, smarter actions that create decisive advantage.",
  },
  {
    title: "Cybersecurity & Trust Infrastructure",
    description:
      "Zero-trust networks and secure data layers, essential as cyber losses soar and digital sovereignty becomes a market-maker.",
  },
  {
    title: "Autonomous & Unmanned Systems",
    description:
      "Drones and robotic vehicles across air, land and sea, cutting risk and cost as global demand for automated operations accelerates.",
  },
  {
    title: "Advanced Materials & Manufacturing",
    description:
      "Lighter, stronger and smarter materials produced in India, cutting costs and import reliance across sectors.",
  },
  {
    title: "Quantum Computing & Security",
    description:
      "Next-generation compute, sensing and encryption, poised to unlock new industries and future-proof security.",
  },
  {
    title: "Advanced Communications",
    description:
      "Terahertz, 6G, laser and resilient mesh links, keeping data flowing everywhere and opening multi-billion revenue streams in connectivity.",
  },
  {
    title: "Strategic Energy Systems",
    description:
      "Small, modular reactors, thorium, long-duration storage and micro-grids, powering AI, industry and defense where the grid cannot.",
  },
  {
    title: "Semiconductors & Edge Hardware",
    description:
      "Photonic, neuromorphic and RISC-V chips, delivering local high-performance as global supply chains reshape.",
  },
] as const;

export const portfolioCompanies = [
  {
    title: "Drone Swarm OEM",
    description:
      "India’s first drone-swarm OEM; designed and built an end-to-end stack (airframe, autopilot, swarm OS) with a world record of 5000+ drones in a swarm.",
    tags: ["Autonomy", "Defence"],
  },
  {
    title: "Indigenous UAVs & Loitering Munitions",
    description:
      "Innovative, intelligent, autonomous, indigenous UAVs and loitering munitions — from palm-launch “Hover Bee” recon drones to RECON-90 tactical UAVs with AI target tracking and rapid deployment.",
    tags: ["UAV", "AI"],
  },
  {
    title: "High-Altitude Cargo UAV",
    description:
      "Heavy-lift defense logistics UAVs proven at 19,000 ft in Ladakh — a world altitude record for a cargo drone.",
    tags: ["Logistics", "Unmanned"],
  },
  {
    title: "SatSure‑KaleidEO",
    description:
      "Deploying India’s first private constellation of four AI-enabled microsatellites by 2026, providing on-orbit edge-processed imagery for instant insights. Builds on its SPARTA analytics engine.",
    tags: ["Space", "Earth Observation"],
  },
  {
    title: "Space Propulsion & ULEO Platforms",
    description:
      "Developer of space‑qualified propulsion and air-breathing engine powered satellites for ULEO, and green electric and water-based satellite thrusters (Rudra, Chetak), plus the modular Pushpak orbital platform.",
    tags: ["Propulsion", "Space"],
  },
  {
    title: "Tier‑1 Aerospace Precision Engineering",
    description:
      "Tier-1 precision-engineering supplier to world leading aerospace companies including Boeing, GE and Rolls-Royce; extensive aerospace and defense capabilities from multi-access machining and composites to systems.",
    tags: ["Manufacturing", "Aerospace"],
  },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team = {
  partners: [
    {
      name: "Ravi Kapoor",
      role: "General Partner",
      bio: "Leading investment banker with 600+ investment transactions across industries and global geographies; senior executive roles at Citibank, Merrill Lynch and ICICI.",
    },
    {
      name: "Rahul Devjani",
      role: "General Partner",
      bio: "30 years of global experience as a corporate executive, operator and investor, including 14 years in US aerospace & defense (Pratt & Whitney–Raytheon). Specializes in strategy, BD, open innovation, incubation and tech commercialization.",
    },
    {
      name: "Yogesh Kulkarni",
      role: "General Partner",
      bio: "Strategic growth advisor to leading business houses and UHNI family offices across India, Singapore and UAE; operations scale-up experience across automotive, B2B, process and advanced manufacturing.",
    },
    {
      name: "David Brantner",
      role: "Partner, USA",
      bio: "Senior leader in US aerospace & defense with decades of global experience including CXO roles in multiple $10B+ A&D businesses; extensive strategy and global M&A experience; board advisor to leading aerospace companies and defense-focused PE funds.",
    },
  ],
  investmentCommittee: [
    {
      name: "Sandeep Daga",
      role: "Investment Committee",
      bio: "Seasoned leader with 29+ years across private equity, venture capital and public markets; founder of Nine Rivers Capital; early investor in multiple aerospace and defense SMEs.",
    },
    {
      name: "SG Murali",
      role: "Investment Committee",
      bio: "Ex-CFO of Tata Advanced Systems Limited (TASL). Experienced finance leader with expertise in building ventures at scale in the aerospace and defense ecosystem, including planning, M&A, corporate finance and governance.",
    },
  ],
  strategicAdvisors: [
    {
      name: "Adm Karambir Singh",
      role: "Strategic Advisor",
      bio: "PVSM, AVSM, ADC; served as the 24th Chief of Naval Staff and senior-most serving naval aviator of the Indian Navy (Grey Eagle).",
    },
    {
      name: "Smt. Gargi Kaul",
      role: "Strategic Advisor",
      bio: "Served in senior government roles including Secretary Defense Finance (MoD) and Joint Secretary (Ministry of Civil Aviation); former Whole-Time Director at Adani Airport Holdings; expert in defense finance, procurement and R&D.",
    },
  ],
  advisors: [
    {
      name: "Nirav Khambati",
      role: "Advisor",
      bio: "Industry veteran with 2 decades with the Tata Group (VP, Chairman’s Office) leading strategic initiatives including Tata’s aerospace and communication businesses; recognized as a Young India Leader by the British High Commission.",
    },
    {
      name: "Srinivas Kollipara",
      role: "Advisor",
      bio: "Pioneer in global startup ecosystems and technology innovation; founder & COO of T‑Hub; entrepreneur, angel investor and venture builder; India President of the Global Entrepreneurship Network.",
    },
    {
      name: "Ravin Vyas",
      role: "Principal, BD",
      bio: "Thought leader supporting India’s Atmanirbhar and Make in India missions for defense and homeland security; senior advisor to NFSU, MHA and several universities, incubators and dual-use startups.",
    },
  ],
  operations: [
    {
      name: "Jyoti Devjani",
      role: "Partner, Investor Relations",
      bio: "Entrepreneur and growth advisor with 25 years across hospitality, consumer, wellness, healthcare and retail in India, US, APAC and Australia. Leads investor relations and supports portfolio go-to-market and operational optimization.",
    },
    {
      name: "Apurva Pattanshetti",
      role: "Partner, Governance",
      bio: "Chartered Accountant with a decade of experience in cross‑border structuring, taxation, governance, due diligence and risk advisory.",
    },
    {
      name: "Harshil Joshi",
      role: "Investment Team",
      bio: "Strategy and management consultant with 8+ years in BFSI across India, South Asia and the Middle East; experience in GTM strategy, operating model design, commercial due diligence and building new entities.",
    },
    {
      name: "Preeti Bakshi",
      role: "Marketing",
      bio: "Marketing and project management professional with 14 years in multinational companies across healthcare, automotive, HLS, infrastructure and sustainability; track record in campaigns, brand growth and market opportunity identification.",
    },
    {
      name: "Arya Sambaragimath",
      role: "Analyst",
      bio: "Economics graduate from Ashoka University with a research-driven approach to impact investing, social policy and startup advisory.",
    },
    {
      name: "Rishabh Pote",
      role: "Analyst",
      bio: "Ex-entrepreneur passionate about building valuable ventures in the domain of national security.",
    },
  ],
} satisfies Record<string, TeamMember[]>;
