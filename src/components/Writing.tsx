"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { articles, mediumProfileUrl } from "@/data/articles";

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="writing" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-3">
            04 / Writing
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink">
            Recent articles
          </h2>
        </motion.div>

        {/* Article List */}
        <div className="space-y-0">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="group flex items-center justify-between py-5 border-b border-border hover:border-border-strong transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg text-ink group-hover:text-navy transition-colors truncate pr-4">
                  {article.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="font-mono text-xs text-muted hidden sm:block">
                  {formatDate(article.date)}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted group-hover:text-navy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href={mediumProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-navy hover:text-navy-light transition-colors"
          >
            View all articles
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
