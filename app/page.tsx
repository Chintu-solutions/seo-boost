"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import Solutions from "@/components/sections/Solutions";
import SuccessStories from "@/components/sections/SuccessStories";
import Contact from "@/components/sections/Contact";
import CaseStudies from "@/components/sections/caseStudy";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <ProblemStatement />
      <Solutions />
      <SuccessStories />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}
