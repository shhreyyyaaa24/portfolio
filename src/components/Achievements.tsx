"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievementsConfig } from "@/data/config";
import { Trophy, Award, Star, BookOpen, Users, Zap } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  award: Award,
  star: Star,
  book: BookOpen,
  users: Users,
  zap: Zap,
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="section-label">03 / Achievements</p>
          <h2 className="section-heading font-heading text-4xl sm:text-5xl font-bold">
            Honors, leadership & <span className="gradient-text">milestones.</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsConfig.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-8 flex flex-col justify-between relative group hover:border-accent/40"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-accent-glow flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-base text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
