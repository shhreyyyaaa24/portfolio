"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/Icons";
import { contactConfig, socialLinks, siteConfig, type SocialLink } from "@/data/config";
import { parseMarkup } from "@/lib/parseMarkup";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  email: Mail,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  medium: MediumIcon,
};

function ContactButton({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.iconType] ?? Mail;
  const isEmail = link.iconType === "email";

  return (
    <a
      href={isEmail ? `mailto:${siteConfig.email}` : link.href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="btn btn-ghost"
      id={`contact-link-${link.label.toLowerCase()}`}
    >
      <Icon size={14} />
      {isEmail ? siteConfig.email : link.label}
    </a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding text-center" ref={ref}>
      <div className="max-w-[520px] mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-label text-center"
        >
          Contact
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="contact-tagline"
        >
          {parseMarkup(contactConfig.heading)}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-sub"
        >
          {contactConfig.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {/* Primary email button */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="btn btn-primary"
          >
            <Mail size={14} />
            {siteConfig.email}
          </a>
          {/* Other socials */}
          {socialLinks
            .filter((l) => l.iconType !== "email")
            .map((link) => (
              <ContactButton key={link.label} link={link} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
