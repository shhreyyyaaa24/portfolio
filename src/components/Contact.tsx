"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/Icons";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:[YOUR_EMAIL]",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "[LINKEDIN_URL]",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "[GITHUB_URL]",
    icon: GitHubIcon,
  },
  {
    label: "Medium",
    href: "[MEDIUM_URL]",
    icon: MediumIcon,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-3"
        >
          05 / Contact
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl text-ink mb-4"
        >
          Let&apos;s connect
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-[15px] leading-relaxed mb-10 max-w-md mx-auto"
        >
          I&apos;m always open to new opportunities, collaborations, or just a
          good conversation about engineering. Reach out anytime.
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              id={`contact-link-${link.label.toLowerCase()}`}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-navy hover:bg-navy hover:text-white text-ink transition-all duration-300 font-mono text-xs tracking-wider uppercase"
            >
              <link.icon
                size={14}
                className="group-hover:scale-110 transition-transform"
              />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
