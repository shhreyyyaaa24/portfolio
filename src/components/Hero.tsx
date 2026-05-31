"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { heroConfig, socialLinks, siteConfig } from "@/data/config";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/Icons";
import { useEffect, useState } from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  email: Mail, github: GitHubIcon, linkedin: LinkedInIcon, medium: MediumIcon,
};

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % heroConfig.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to about section after 5 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection && !hasScrolled) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        setHasScrolled(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasScrolled]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="hero-glow bg-gradient-1 top-1/4 -left-40" />
      <div className="hero-glow bg-gradient-2 bottom-1/4 -right-40" />

      <div className="max-w-4xl w-full relative z-10">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm text-accent mb-6 tracking-wide"
        >
          {heroConfig.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">{heroConfig.name}</span>
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="h-12 mb-8 overflow-hidden"
        >
          <motion.p
            key={roleIdx}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-light text-ink-2"
          >
            {heroConfig.roles[roleIdx]}
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-ink-2 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
        >
          {heroConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a href={`mailto:${siteConfig.email}`} className="btn-primary">
            <Mail size={16} />
            {heroConfig.ctaLabel}
          </a>
          <a href={siteConfig.resumeUrl} className="btn-outline">
            {heroConfig.resumeLabel}
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center gap-4"
        >
          {socialLinks.filter(l => l.iconType !== "email").map((link) => {
            const Icon = iconMap[link.iconType] ?? Mail;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink-3 hover:text-accent hover:border-accent transition-all duration-300"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={20} className="text-ink-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
