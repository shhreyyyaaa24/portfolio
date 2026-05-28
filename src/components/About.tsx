"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stack } from "@/data/stack";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-3">
            01 / About
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink">
            A bit about me
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-muted leading-relaxed text-[15px] mb-6">
              I&apos;m a full-stack Software Engineer with a deep interest in
              building reliable, scalable systems. I thrive at the intersection
              of backend engineering and product thinking — designing APIs and
              services that are as thoughtful under the hood as they are on the
              surface.
            </p>
            <p className="text-muted leading-relaxed text-[15px] mb-6">
              My day-to-day involves writing TypeScript and Go, working with
              distributed architectures, and collaborating closely with
              cross-functional teams to ship features that have real user impact.
            </p>
            <p className="text-muted leading-relaxed text-[15px]">
              Outside of work, I write about software engineering on Medium,
              contribute to open source, and explore the latest in systems
              design. I believe great engineering is invisible — it just works.
            </p>
          </motion.div>

          {/* Right — Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {stack.map((category, catIdx) => (
              <div key={category.category}>
                <p className="font-mono text-xs tracking-wider uppercase text-muted mb-3">
                  {category.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + catIdx * 0.1 + itemIdx * 0.04,
                      }}
                      className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-full border border-border text-ink bg-surface hover:border-navy hover:text-navy transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
