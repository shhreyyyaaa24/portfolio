"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { writingConfig } from "@/data/config";
import { parseMarkup } from "@/lib/parseMarkup";

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (dateStr: string, platform: string) => {
    const date = new Date(dateStr);
    const formatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
    return `${platform} · ${formatted}`;
  };

  return (
    <section
      id="writing"
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
          <p className="section-label">Writing</p>
          <h2 className="section-title">
            {parseMarkup(writingConfig.heading)}
          </h2>
        </motion.div>

        {/* Article List */}
        <div>
          {writingConfig.items.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.15 + i * 0.06,
              }}
              className="article-item"
            >
              <span className="article-title">{article.title}</span>
              <span className="article-meta">
                {formatDate(article.date, article.platform)}
              </span>
            </motion.a>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-6"
        >
          <a
            href={writingConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            All articles →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
