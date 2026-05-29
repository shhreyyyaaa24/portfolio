"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/data/config";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 border-t border-border bg-bg/50 backdrop-blur-sm relative z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-3">
        <span>
          © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-accent no-underline transition-colors duration-200">
            Back to top
          </a>
          <span>•</span>
          <span>Built with craft & Next.js</span>
        </div>
      </div>
    </motion.footer>
  );
}
