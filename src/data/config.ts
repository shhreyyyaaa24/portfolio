/**
 * ─────────────────────────────────────────────────────────
 * Portfolio Configuration — Edit this file to personalise
 * your entire portfolio. All components read from here.
 * ─────────────────────────────────────────────────────────
 */

// ── Personal Info ──────────────────────────────────────

export const siteConfig = {
  name: "Shreya Tiwari",
  initials: "ST",
  title: "Software Engineer",
  tagline:
    "Building scalable systems, intelligent CI/CD pipelines, and polished user experiences — from GCP infrastructure to React Native frontends.",
  email: "shhreyyyaa1@gmail.com",
  copyrightYear: new Date().getFullYear(),
  resumeUrl: "/resume.pdf", // link to downloadable resume PDF
};

// ── Social Links ───────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  iconType: "email" | "github" | "linkedin" | "medium" | "twitter";
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shhreyyyaaa24/", iconType: "linkedin" },
  { label: "GitHub", href: "https://github.com/shhreyyyaaa24", iconType: "github" },
  { label: "Medium", href: "https://medium.com/@shhreyyyaa1", iconType: "medium" },
  { label: "Email", href: "mailto:you@email.com", iconType: "email" },
];

// ── Navigation ─────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

// ── Hero Section ───────────────────────────────────────

export const heroConfig = {
  greeting: "Hi, I'm",
  name: "Shreya Tiwari",
  roles: ["Software Engineer", "Full-Stack Developer", "Cloud & DevOps"],
  description:
    "Software Engineer at UKG building intelligent CI/CD systems with LLMs, AST-aware embeddings, and GCP infrastructure. Previously at OYO Rooms. B.Tech from IGDTUW (9.18 CGPA).",
  ctaLabel: "Get in touch",
  resumeLabel: "View Resume",
};

// ── About Section ──────────────────────────────────────

export const aboutConfig = {
  paragraphs: [
    "I'm a Software Engineer at Ultimate Kronos Group (UKG), where I build intelligent CI/CD test selection systems using LangChain, AST-aware embeddings, and LLM orchestration — reducing CI latency while preserving correctness.",
    "Previously at OYO Rooms, I owned frontend for the G6 Lead Management System using React Native and Redux Toolkit, cutting code duplication by 40% and improving load times by 35%.",
    "I hold a B.Tech in Electronics & Communication Engineering from Indira Gandhi Delhi Technical University for Women with a 9.18 CGPA. I'm passionate about system design, cloud infrastructure, and building tools that make engineering teams faster.",
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    university: "Indira Gandhi Delhi Technical University for Women",
    location: "Delhi, India",
    cgpa: "9.18",
    duration: "Aug 2021 – May 2025",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
};

// ── Skills ─────────────────────────────────────────────

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsConfig: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React.js", "React Native", "Redux Toolkit", "Context API", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Spring Boot", "Hibernate", "RESTful APIs", "Microservices"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL (pgvector)", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "Compute Engine", "VM Autoscaling", "Cloud Monitoring", "Docker", "Linux", "Git", "GitHub Actions"],
  },
  {
    category: "AI / ML",
    items: ["LangChain", "LLM Orchestration", "AST-aware Embeddings", "Semantic Search", "AI Agents"],
  },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"],
  },
];

// ── Experience ─────────────────────────────────────────

export interface ExperienceItem {
  dateRange: string;
  role: string;
  company: string;
  location: string;
  type: string;
  bullets: string[];
  tags: string[];
}

export const experienceConfig: ExperienceItem[] = [
  {
    dateRange: "Aug 2025 — Present",
    role: "Software Engineer",
    company: "Ultimate Kronos Group (UKG)",
    location: "Noida",
    type: "Full-time",
    tags: ["GCP", "LangChain", "PostgreSQL", "Python"],
    bullets: [
      "Reduced GCP costs by 20–25% via VM right-sizing, autoscaling, and committed-use discounts; built Linux-based automation for VM lifecycle management on Compute Engine.",
      "Built a code-aware test selection system that executes only semantically impacted tests, reducing CI latency while preserving correctness via an LLM-orchestrated decision layer using LangChain and Claude 3.5 Sonnet.",
      "Indexed test files as AST-aware embeddings and matched them with code diffs via semantic similarity to identify impacted tests across large-scale codebases.",
      "Stored embeddings in PostgreSQL with pgvector and ran cosine similarity searches; added confidence-based fallback for production safety.",
      "Conducted code reviews for the test selection system, enforcing best practices on testability and accuracy; contributed to internal technical documentation.",
    ],
  },
  {
    dateRange: "Jan 2025 — Jul 2025",
    role: "Software Developer Intern",
    company: "OYO Rooms",
    location: "Gurugram",
    type: "Internship",
    tags: ["React Native", "Redux", "Performance"],
    bullets: [
      "Developed a scalable Lead Management System for G6 brand using React Native and Redux Toolkit, reducing code duplication by 40% in UI layer.",
      "Built a generic listing page where backend configuration controlled headers, filters, tables, and pagination, enabling rapid feature updates without frontend redeploys.",
      "Implemented lazy loading, code splitting, and paginated data fetch, cutting initial load times by 35% and improving responsiveness.",
      "Managed global state using Redux Toolkit and handled API calls via custom middleware for consistent and predictable data flow.",
    ],
  },
];

// ── Projects ───────────────────────────────────────────

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  github?: string;
  live?: string;
}

export const projectsConfig: ProjectItem[] = [
  {
    title: "Cloud Infrastructure Monitoring System",
    description:
      "End-to-end monitoring solution with automated data collection, analysis, and reporting on GCP.",
    tags: ["Python", "System Design", "GCP", "Full-Stack"],
    highlights: [
      "Architected automated data collection, analysis, and reporting pipeline",
      "Developed custom GitHub Actions for reusable workflow components across environments",
      "Implemented comprehensive logging and debugging system for rapid issue triage",
      "Built automated email delivery system with operational reporting",
    ],
    github: "#",
  },
  {
    title: "Modern Expense Tracker",
    description:
      "Full-stack financial management platform with interactive dashboards and smart categorisation.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    highlights: [
      "Built full-stack platform for income tracking, transaction categorization, and recurring expenses",
      "Implemented dynamic category selection with drag-and-drop reordering",
      "Designed interactive dashboards (line, bar, pie charts) for category-wise insights",
    ],
    github: "#",
    live: "#",
  },
];

// ── Achievements ───────────────────────────────────────

export interface AchievementItem {
  title: string;
  description: string;
  icon: "trophy" | "award" | "star" | "book" | "users" | "zap";
}

export const achievementsConfig: AchievementItem[] = [
  {
    title: "IEEE Research Publication",
    description:
      'Co-authored "Blockchain-Driven Cybersecurity and Efficiency Enhancement in SCADA-Based Power Grids", accepted at the 2025 IEEE MP Section International Conference.',
    icon: "book",
  },
  {
    title: "Google DSC Lead — IGDTUW",
    description:
      "Led the Google Developer Student Club chapter, organizing technical workshops, hackathons, and developer community initiatives.",
    icon: "users",
  },
  {
    title: "Google Girl Hackathon Finalist",
    description:
      "Ranked in the top 100 out of 200K+ participants nationwide, demonstrating advanced algorithmic problem-solving.",
    icon: "trophy",
  },
  {
    title: "Myntra HackerRamp: WeForShe 2024",
    description:
      "Qualified in the top 10 teams for an industry-level hackathon focused on scalable e-commerce solutions.",
    icon: "zap",
  },
  {
    title: "OnePlus Open Ears Forum 2024",
    description:
      "Selected among 30 participants across India to contribute product feedback and technology insights.",
    icon: "star",
  },
  {
    title: "Vice President — College Society",
    description:
      "Demonstrated leadership across academic and extracurricular initiatives, driving student engagement and technical events.",
    icon: "award",
  },
];

// ── Writing / Articles ─────────────────────────────────

export interface ArticleItem {
  title: string;
  date: string;
  platform: string;
  url: string;
}

export const writingConfig = {
  profileUrl: "https://medium.com/@yourhandle",
  items: [
    {
      title: "How I Designed a Rate Limiter That Handles 100K req/s",
      date: "2025-03-15",
      platform: "Medium",
      url: "#",
    },
    {
      title: "Choosing Between REST and GraphQL for Your Next API",
      date: "2025-01-22",
      platform: "Medium",
      url: "#",
    },
    {
      title: "A Practical Guide to Database Indexing at Scale",
      date: "2024-11-08",
      platform: "Medium",
      url: "#",
    },
  ] as ArticleItem[],
};

// ── Contact Section ────────────────────────────────────

export const contactConfig = {
  heading: "Let's build something great.",
  description:
    "Open to full-time opportunities, collaborations, and conversations about systems, cloud, and engineering. Reach out anytime.",
};
