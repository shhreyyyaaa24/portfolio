"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { aboutConfig } from "@/data/config";

export default function EducationCard() {
  const edu = aboutConfig.education;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="sticky top-32 glass-card p-10 relative overflow-hidden group"
    >
      {/* Background gradient hint */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-xl pointer-events-none" />

      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-10">
        <motion.div
          animate={{ rotateZ: [0, 5, -5, 0], y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-gradient-1 to-accent-2 flex items-center justify-center text-white shrink-0"
        >
          <GraduationCap size={32} />
        </motion.div>
        <div>
          <h3 className="font-semibold text-xl text-ink group-hover:text-accent transition-colors">
            Education
          </h3>
          <p className="text-xs text-accent/80 uppercase tracking-wider font-medium">Excellence</p>
        </div>
      </div>

      {/* University Info */}
      <div className="space-y-6 relative z-10">
        <div>
          <h4 className="font-semibold text-base text-ink mb-2 hover:text-accent transition-colors duration-200">
            {edu.university}
          </h4>
          <p className="text-sm text-ink-3">{edu.location}</p>
        </div>

        {/* Degree */}
        <div className="border-t border-border/50 pt-6">
          <p className="text-sm font-medium text-ink-2 mb-3">
            <span className="text-accent">Bachelor of Technology</span>
          </p>
          <p className="text-sm text-ink-3 leading-relaxed">
            {edu.field}
          </p>
        </div>

        {/* Duration & CGPA */}
        <div className="border-t border-border/50 pt-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-ink-3 uppercase font-semibold tracking-wider mb-1">Duration</p>
            <p className="text-sm font-medium text-ink">{edu.duration}</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-4 py-3 rounded-lg bg-gradient-to-br from-gradient-1/20 to-accent-2/20 border border-accent/30 text-center"
          >
            <p className="text-xs text-accent uppercase font-semibold tracking-wider">CGPA</p>
            <p className="text-lg font-bold text-accent">{edu.cgpa}</p>
          </motion.div>
        </div>

        {/* Coursework */}
        <div className="border-t border-border/50 pt-6">
          <p className="text-xs font-semibold text-ink-2 uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen size={14} className="text-accent" />
            Core Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {edu.coursework.slice(0, 4).map((course) => (
              <motion.span
                key={course}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-xs px-3 py-2 rounded-lg bg-bg-elevated border border-border hover:border-accent/50 text-ink-2 hover:text-accent transition-colors cursor-default"
              >
                {course}
              </motion.span>
            ))}
            {edu.coursework.length > 4 && (
              <span className="text-xs px-3 py-2 rounded-lg bg-bg-elevated border border-border text-ink-3">
                +{edu.coursework.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-1 h-16 bg-gradient-to-b from-gradient-1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
