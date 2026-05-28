export interface Experience {
  dateRange: string;
  role: string;
  company: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    dateRange: "[START_DATE] — Present",
    role: "Software Engineer I",
    company: "[COMPANY_1]",
    bullets: [
      "Designed and implemented scalable microservices handling 50K+ daily transactions across distributed systems.",
      "Led migration of legacy monolith to event-driven architecture, reducing latency by 40% and improving system resilience.",
      "Built internal developer tooling that reduced deployment time from 45 minutes to under 8 minutes.",
      "Collaborated cross-functionally with product and design to ship 3 major features impacting 200K+ users.",
    ],
  },
  {
    dateRange: "[START_DATE_2] — [END_DATE_2]",
    role: "Software Engineering Intern",
    company: "[COMPANY_2]",
    bullets: [
      "Developed a real-time analytics dashboard using React and D3.js, providing actionable insights for the ops team.",
      "Optimized database queries resulting in a 60% reduction in average API response time.",
      "Wrote comprehensive integration tests increasing code coverage from 52% to 89%.",
    ],
  },
  {
    dateRange: "[START_DATE_3] — [END_DATE_3]",
    role: "Software Engineering Intern",
    company: "[COMPANY_3]",
    bullets: [
      "Built a RESTful API service in Python/FastAPI serving 15+ internal consumers.",
      "Implemented automated CI/CD pipelines using GitHub Actions, reducing manual release overhead by 70%.",
    ],
  },
];
