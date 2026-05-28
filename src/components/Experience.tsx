"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-3">
            03 / Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-[7px] top-2 bottom-2 w-[1px] bg-border" />

          <div className="space-y-14">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="relative pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-[2px] border-navy bg-offwhite z-10" />

                {/* Date */}
                <p className="font-mono text-xs tracking-wider text-muted mb-1">
                  {exp.dateRange}
                </p>

                {/* Role & Company */}
                <h3 className="font-serif text-xl text-ink mb-0.5">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm tracking-wide text-navy mb-4">
                  {exp.company}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="relative pl-4 text-sm text-muted leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-[1px] before:bg-border-strong"
                    >
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
