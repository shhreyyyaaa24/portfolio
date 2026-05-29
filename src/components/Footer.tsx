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
      className="py-6 flex items-center justify-between"
      style={{
        padding: "1.5rem clamp(1.5rem, 5vw, 3rem)",
        borderTop: "0.5px solid var(--color-border)",
      }}
    >
      <span className="footer-text">
        © {siteConfig.copyrightYear} {siteConfig.name}
      </span>
      <span className="footer-text hidden sm:inline">
        Built with craft · Next.js
      </span>
    </motion.footer>
  );
}
