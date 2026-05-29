"use client";

import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Compass } from "lucide-react";
import { navLinks } from "@/data/config";

export default function RecruiterTour() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        const nextStep = (currentStep + 1) % navLinks.length;
        setCurrentStep(nextStep);
        const nextLink = navLinks[nextStep];
        const sectionId = nextLink.href.replace("#", "");
        const targetElement = document.getElementById(sectionId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (nextLink.href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 4000); // Wait 4 seconds per section
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  // Handle initial auto-scroll teaser
  useEffect(() => {
    const timer = setTimeout(() => {
      // Gentle initial peek at the about section
      const aboutElement = document.getElementById("about");
      if (aboutElement && window.scrollY === 0) {
        aboutElement.scrollIntoView({ behavior: "smooth", block: "start" });
        // Smoothly scroll back to hero after a moment
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 1500);
      }
    }, 2000); // Trigger 2 seconds after initial load
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetTour = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="tour-btn flex items-center gap-3">
      <div className="flex items-center gap-1.5 border-r border-white/20 pr-2">
        <Compass size={14} className={isPlaying ? "animate-spin" : ""} />
        <span>Tour Mode</span>
      </div>

      <button
        onClick={togglePlay}
        className="bg-transparent border-none text-white hover:text-accent-2 cursor-pointer flex items-center justify-center p-0.5"
        title={isPlaying ? "Pause Tour" : "Start Tour"}
      >
        {isPlaying ? <Pause size={14} fill="white" /> : <Play size={14} fill="white" />}
      </button>

      <button
        onClick={resetTour}
        className="bg-transparent border-none text-white hover:text-accent-2 cursor-pointer flex items-center justify-center p-0.5"
        title="Reset Tour"
      >
        <RotateCcw size={14} />
      </button>

      {isPlaying && (
        <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">
          {currentStep + 1}/{navLinks.length}
        </span>
      )}
    </div>
  );
}
