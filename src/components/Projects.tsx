"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { projects } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-3">
            02 / Projects
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink">
            Selected work
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group rounded-xl border border-border bg-surface overflow-hidden hover:border-border-strong hover:shadow-[0_4px_24px_rgba(26,25,22,0.06)] transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-offwhite to-surface-hover overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl border border-border flex items-center justify-center bg-surface group-hover:scale-105 transition-transform duration-300">
                    <span className="font-mono text-xs text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase rounded-full border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-ink mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-2">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-muted hover:text-ink transition-colors"
                  >
                    <GitHubIcon size={13} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-muted hover:text-ink transition-colors"
                  >
                    <ExternalLink size={13} />
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
