"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillsConfig } from "@/data/config";
import { Code2, Layout, Database, Cloud, Brain, Terminal, Server } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  "AI / ML": Brain,
  "Core CS": Terminal,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <p className="section-label">02 / Technical Skills</p>
          <h2 className="section-heading font-heading text-4xl sm:text-5xl font-bold">
            My <span className="gradient-text">toolbox & expertise.</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {skillsConfig.map((category, catIdx) => {
            const Icon = iconMap[category.category] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + catIdx * 0.05 }}
                className="glass-card p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-xl bg-accent-glow flex items-center justify-center text-accent shrink-0">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-semibold text-base text-ink tracking-wide uppercase">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item) => (
                      <span key={item} className="chip text-sm py-2 px-3">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
