export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "[PROJECT_NAME_1]",
    description:
      "A full-stack application built with React and Node.js, featuring real-time data synchronization and role-based access control.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "[GITHUB_URL_1]",
    live: "[LIVE_URL_1]",
    image: "/projects/project-1.png",
  },
  {
    title: "[PROJECT_NAME_2]",
    description:
      "Microservice architecture handling 10K+ requests/sec with automated scaling and comprehensive monitoring dashboards.",
    tags: ["Go", "Docker", "Kubernetes", "Grafana"],
    github: "[GITHUB_URL_2]",
    live: "[LIVE_URL_2]",
    image: "/projects/project-2.png",
  },
  {
    title: "[PROJECT_NAME_3]",
    description:
      "CLI tool for automating deployment pipelines with support for multi-cloud environments and rollback strategies.",
    tags: ["Python", "AWS", "Terraform", "CI/CD"],
    github: "[GITHUB_URL_3]",
    live: "[LIVE_URL_3]",
    image: "/projects/project-3.png",
  },
  {
    title: "[PROJECT_NAME_4]",
    description:
      "Design system and component library with 40+ accessible components, comprehensive docs, and Storybook integration.",
    tags: ["TypeScript", "React", "Storybook", "Tailwind"],
    github: "[GITHUB_URL_4]",
    live: "[LIVE_URL_4]",
    image: "/projects/project-4.png",
  },
];
