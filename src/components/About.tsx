"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stack } from "@/data/stack";
import { aboutConfig } from "@/data/config";
import { parseMarkup } from "@/lib/parseMarkup";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
          <p className="section-label">About</p>
          <h2 className="section-title">
            {parseMarkup(aboutConfig.heading)}
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="about-bio"
          >
            {aboutConfig.bio.map((paragraph, i) => (
              <p key={i}>{parseMarkup(paragraph)}</p>
            ))}
          </motion.div>

          {/* Right — Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            {stack.map((category, catIdx) => (
              <div
                key={category.category}
                className={catIdx > 0 ? "mt-7" : ""}
              >
                <p className="stack-label">{category.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item, itemIdx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + catIdx * 0.1 + itemIdx * 0.04,
                      }}
                      className="chip"
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
