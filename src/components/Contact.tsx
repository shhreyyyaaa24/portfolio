"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { contactConfig, socialLinks, siteConfig, type SocialLink } from "@/data/config";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/Icons";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  email: Mail,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  medium: MediumIcon,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding border-b border-border relative overflow-hidden" ref={ref}>
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-label"
        >
          07 / Get In Touch
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="section-heading font-heading text-4xl sm:text-5xl font-bold mb-4"
        >
          {contactConfig.heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-ink-2 text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto"
        >
          {contactConfig.description}
        </motion.p>

        {/* Primary Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card max-w-md mx-auto p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-accent/40"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-accent-glow flex items-center justify-center text-accent">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs text-ink-3 uppercase font-semibold">Drop an Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-ink no-underline hover:text-accent transition-colors duration-200">
                {siteConfig.email}
              </a>
            </div>
          </div>
          <a href={`mailto:${siteConfig.email}`} className="btn-primary !py-2.5 !px-5 text-xs">
            Say Hello
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Secondary Social Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center gap-3 flex-wrap"
        >
          {socialLinks
            .filter((l) => l.iconType !== "email")
            .map((link) => {
              const Icon = iconMap[link.iconType] ?? Mail;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs !py-2 !px-4"
                  id={`contact-link-${link.label.toLowerCase()}`}
                >
                  <Icon size={13} className="text-ink-3 group-hover:text-accent" />
                  {link.label}
                </a>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}
