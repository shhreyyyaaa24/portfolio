"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experienceConfig } from "@/data/config";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <p className="section-label">04 / Experience</p>
          <h2 className="section-heading font-heading text-4xl sm:text-5xl font-bold">
            Work <span className="gradient-text">history.</span>
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative pl-8 sm:pl-10">
          {/* Vertical Timeline Line */}
          <div className="timeline-line" />

          <div className="space-y-16">
            {experienceConfig.map((item, idx) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Bullet dot */}
                <div className="timeline-dot group-hover:bg-accent group-hover:scale-125 transition-all duration-300" />

                {/* Main Card */}
                <div className="glass-card p-10 md:p-12 hover:border-accent/30 relative">
                  {/* Floating Date range for desktop */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl text-ink flex flex-wrap items-center gap-3">
                        {item.role}
                        <span className="text-accent text-base font-medium">
                          @ {item.company}
                        </span>
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-sm text-ink-3">
                        <span className="flex items-center gap-2">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Briefcase size={14} />
                          {item.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={14} />
                          {item.dateRange}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-4 mb-8 text-base text-ink-2 leading-relaxed list-none">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 hover:text-ink transition-colors duration-200">
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags / Technologies used */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip text-xs py-2 px-3 bg-bg-elevated font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
