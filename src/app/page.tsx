"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResumePanel from "@/components/ResumePanel";
import About from "@/components/About";
// import Gallery from "@/components/Gallery";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import RecruiterTour from "@/components/RecruiterTour";
import { siteConfig } from "@/data/config";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <CursorFollower />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <main className="relative">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        {/* <Gallery /> */}
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Writing />
        <Contact />
      </main>
      <RecruiterTour />
      <Footer />
      <ResumePanel
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl={siteConfig.resumeUrl}
      />
    </>
  );
}
