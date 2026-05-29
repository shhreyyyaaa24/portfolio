"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceConfig } from "@/data/config";
import { parseMarkup } from "@/lib/parseMarkup";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            {parseMarkup(experienceConfig.heading)}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {experienceConfig.items.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className="timeline-dot" />

                {/* Date */}
                <p className="tl-meta">{exp.dateRange}</p>

                {/* Role & Company */}
                <h3 className="tl-role">{exp.role}</h3>
                <p className="tl-company">
                  {exp.company} · {exp.type}
                </p>

                {/* Bullets */}
                <ul>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="tl-bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
