export interface StackCategory {
  category: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Java", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs", "PostgreSQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Git"],
  },
];
