"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { aboutConfig } from "@/data/config";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="section-label">01 / About Me</p>
          <h2 className="section-heading font-heading text-4xl sm:text-5xl font-bold">
            Driven by curiosity, <br />
            <span className="gradient-text">focused on engineering impact.</span>
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-ink-2 text-base leading-relaxed"
          >
            {aboutConfig.paragraphs.map((para, i) => (
              <p key={i} className="hover:text-ink transition-colors duration-300">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Right: Education Glass Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-ink">Education</h3>
                  <p className="text-xs text-ink-3">Academic Foundation</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-ink hover:text-accent transition-colors duration-200">
                    {aboutConfig.education.university}
                  </h4>
                  <p className="text-xs text-ink-3">{aboutConfig.education.location}</p>
                </div>

                <div className="border-t border-border/50 pt-3">
                  <p className="text-sm font-medium text-ink-2">
                    {aboutConfig.education.degree} in {aboutConfig.education.field}
                  </p>
                  <div className="flex justify-between items-center mt-1 text-xs">
                    <span className="text-ink-3">{aboutConfig.education.duration}</span>
                    <span className="px-2 py-0.5 rounded bg-accent-glow text-accent font-semibold">
                      CGPA: {aboutConfig.education.cgpa}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-3">
                  <p className="text-xs font-semibold text-ink-2 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen size={12} className="text-accent" />
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {aboutConfig.education.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[11px] px-2 py-1 rounded bg-bg-elevated border border-border text-ink-2"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
