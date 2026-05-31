"use client";

import { motion } from "framer-motion";
import React from "react";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex gap-2 sm:gap-4 border-b border-border/50 overflow-x-auto pb-0 mb-8 md:mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-accent"
                : "text-ink-3 hover:text-ink"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-2"
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 10 }}
            animate={
              activeTab === tab.id
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10, display: "none" }
            }
            transition={{ duration: 0.3 }}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
