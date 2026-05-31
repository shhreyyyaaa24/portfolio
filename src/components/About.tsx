"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { aboutConfig } from "@/data/config";
import Tabs from "@/components/Tabs";
import EducationCard from "@/components/EducationCard";

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
  ];

  return (
    <section id="about" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
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

        {/* Two-column layout: Content + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content (Left - 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Tabs tabs={tabs} defaultTab="about" />
          </motion.div>

          {/* Education Card (Right - 1 col, Sticky) */}
          <div className="lg:col-span-1">
            <EducationCard />
          </div>
        </div>
      </div>
    </section>
  );
}
