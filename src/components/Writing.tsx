"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { writingConfig } from "@/data/config";

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="writing" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="section-label">06 / Writing</p>
          <h2 className="section-heading font-heading text-4xl sm:text-5xl font-bold">
            Engineering <span className="gradient-text font-serif">articles.</span>
          </h2>
        </motion.div>

        {/* Articles List */}
        <div className="space-y-4">
          {writingConfig.items.map((article, idx) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-card p-8 flex items-center justify-between gap-6 group hover:border-accent/40 no-underline"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <BookOpen size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base text-ink group-hover:text-accent transition-colors duration-200 truncate pr-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-ink-3">
                    <span>{article.platform}</span>
                    <span>•</span>
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink-3 group-hover:text-accent group-hover:border-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                <ArrowUpRight size={14} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href={writingConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Read more on Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
}
