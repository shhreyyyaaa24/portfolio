"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="border-t border-border py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted tracking-wide">
          © {new Date().getFullYear()} [YOUR_NAME]
        </p>
        <p className="font-mono text-xs text-muted tracking-wide">
          Built with Next.js
        </p>
      </div>
    </motion.footer>
  );
}
