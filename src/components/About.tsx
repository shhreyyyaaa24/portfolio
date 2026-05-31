"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { aboutConfig } from "@/data/config";
import Tabs from "@/components/Tabs";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    {
      id: "about",
      label: "About Me",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-6 text-ink-2 text-base leading-relaxed"
        >
          {aboutConfig.paragraphs.map((para, i) => (
            <p key={i} className="hover:text-ink transition-colors duration-300">
              {para}
            </p>
          ))}
        </motion.div>
      ),
    },
    {
      id: "education",
      label: "Education",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="glass-card p-8 md:p-10 relative overflow-hidden"
        >
          {/* Background gradient hint */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none" />

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center text-accent shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-ink">Academic Foundation</h3>
              <p className="text-sm text-ink-3 mt-1">Professional Development</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-base text-ink hover:text-accent transition-colors duration-200">
                {aboutConfig.education.university}
              </h4>
              <p className="text-sm text-ink-3 mt-1">{aboutConfig.education.location}</p>
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="text-base font-medium text-ink-2 mb-3">
                {aboutConfig.education.degree}
              </p>
              <p className="text-sm text-ink-3 mb-4">
                <span className="text-accent font-medium">Field:</span> {aboutConfig.education.field}
              </p>
              <div className="flex flex-wrap gap-4 justify-between">
                <span className="text-sm text-ink-3">
                  <span className="text-accent font-medium">Duration:</span> {aboutConfig.education.duration}
                </span>
                <span className="px-3 py-1 rounded bg-accent-glow text-accent font-semibold text-sm">
                  CGPA: {aboutConfig.education.cgpa}
                </span>
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="text-sm font-semibold text-ink-2 uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen size={14} className="text-accent" />
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {aboutConfig.education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-sm px-3 py-2 rounded bg-bg-elevated border border-border text-ink-2 hover:border-accent/50 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <section id="about" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16 md:mb-20"
        >
          <p className="section-label">01 / About Me</p>
          <h2 className="section-heading font-heading text-4xl sm:text-5xl font-bold">
            Driven by curiosity, <br />
            <span className="gradient-text">focused on impact.</span>
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Tabs tabs={tabs} defaultTab="about" />
        </motion.div>
      </div>
    </section>
  );
}
