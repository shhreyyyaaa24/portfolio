"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Terminal, CheckCircle2 } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { projectsConfig } from "@/data/config";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <p className="section-label">05 / Projects</p>
          <h2 className="section-heading font-heading text-4xl sm:text-5xl font-bold">
            Selected <span className="gradient-text">work.</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projectsConfig.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="glass-card flex flex-col justify-between overflow-hidden group hover:border-accent/40"
            >
              {/* Card Header decoration */}
              <div className="h-2 w-full bg-gradient-to-r from-gradient-1 via-gradient-2 to-gradient-3" />

              <div className="p-10 md:p-12 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Icons */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center text-accent shrink-0">
                        <Terminal size={24} />
                      </div>
                      <h3 className="font-semibold text-lg sm:text-xl text-ink group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink-3 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
                          title="View Source Code"
                        >
                          <GitHubIcon size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink-3 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
                          title="View Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-ink-2 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights / Bullets */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-ink-2 leading-relaxed">
                        <CheckCircle2 size={13} className="text-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip text-[10px] !py-0.5 !px-2 bg-bg-elevated font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
