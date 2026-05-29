"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsConfig } from "@/data/config";
import { parseMarkup } from "@/lib/parseMarkup";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="section-padding section-border"
      ref={ref}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            {parseMarkup(projectsConfig.heading)}
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div
          className="grid gap-px rounded-[10px] overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            border: "0.5px solid var(--color-border)",
            background: "var(--color-border)",
          }}
        >
          {projectsConfig.items.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              className="project-card"
            >
              {/* Image Area */}
              <div className="w-full aspect-video rounded-md bg-bg-card mb-6 flex items-center justify-center overflow-hidden"
                style={{ border: "0.5px solid var(--color-border)" }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-[11px] text-ink-3 tracking-[0.06em]">
                    screenshot coming soon
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="project-title">{project.title}</h3>

              {/* Description */}
              <p className="text-[0.9rem] font-light text-ink-2 leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub →
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
