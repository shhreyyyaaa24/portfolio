"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/Icons";

const socials = [
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
  {
    label: "Email",
    href: "mailto:[YOUR_EMAIL]",
    icon: Mail,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-3xl w-full text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-6"
        >
          Software Engineer
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight text-ink mb-6"
        >
          I build systems that
          <br />
          <span className="text-navy">scale and last.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Full-stack engineer focused on distributed systems, clean architecture,
          and shipping products that matter.
        </motion.p>

        {/* CTA Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              id={`hero-link-${social.label.toLowerCase()}`}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-navy hover:bg-navy hover:text-white text-ink transition-all duration-300 font-mono text-xs tracking-wider uppercase"
            >
              <social.icon
                size={14}
                className="group-hover:scale-110 transition-transform"
              />
              {social.label}
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-border-strong mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
