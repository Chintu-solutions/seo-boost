// src/components/sections/CaseStudy.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Link as LinkIcon,
  TrendingUp,
  Target,
  DollarSign,
  Award,
  ArrowRight,
  ChevronRight,
  Globe,
} from "lucide-react";

const ResultIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "backlinks":
      return <LinkIcon className="h-5 w-5 text-blue-400" />;
    case "traffic":
      return <TrendingUp className="h-5 w-5 text-green-400" />;
    case "rankings":
      return <Target className="h-5 w-5 text-purple-400" />;
    case "roi":
      return <DollarSign className="h-5 w-5 text-yellow-400" />;
    default:
      return null;
  }
};

const caseStudies = [
  {
    id: 1,
    title: "Local Restaurant Chain",
    industry: "Food & Beverage",
    duration: "3 M",
    image: "/background.png",
    challenge:
      "Struggling to compete with established restaurants in the area, with low online visibility and minimal backlink profile.",
    solution: [
      "Implemented podcast outreach strategy",
      "Created Google stack properties",
      "Built high-authority local citations",
      "Developed cloud platform backlinks",
    ],
    results: {
      backlinks: "+250%",
      traffic: "+185%",
      rankings: "Top 3",
      roi: "312%",
    },
    testimonial: {
      text: "The off-page SEO strategy transformed our online presence. Our reservations have doubled since implementing these changes.",
      author: "John Smith",
      position: "Owner",
    },
  },
  {
    id: 2,
    title: "E-commerce Store",
    industry: "Fashion Retail",
    duration: "4 M",
    image: "/case-study-2.jpg",
    challenge:
      "New online store struggling to gain traction in a competitive market with no established domain authority.",
    solution: [
      "Strategic podcast appearances",
      "Authority site backlinks",
      "Social profile optimization",
      "Industry directory listings",
    ],
    results: {
      backlinks: "+320%",
      traffic: "+245%",
      rankings: "Top 5",
      roi: "280%",
    },
    testimonial: {
      text: "Within months, our organic traffic skyrocketed and our conversion rates improved significantly.",
      author: "Sarah Johnson",
      position: "Marketing Director",
    },
  },
  {
    id: 3,
    title: "A.Moses & Sons Ltd",
    industry: "Construction Equipment",
    duration: "3 M",
    image: "/A.Moses & Sons Ltd.webp",
    challenge:
      "A.Moses & Sons Ltd is a Home Products Store. We followed a specific marketing strategy with focus on key services to overcome the competition and successfully ranked many profitable keywords on Google Page 1.",
    solution: [
      "Strategic podcast appearances",
      "Authority site backlinks",
      "Industry directory listings",
    ],
    results: {
      backlinks: "+120%",
      traffic: "+105%",
      rankings: "Top 3",
      roi: "100%",
    },
    testimonial: {
      text: "Within months, our organic traffic skyrocketed and our conversion rates improved significantly.",
      author: "Adnan Ajmal",
      position: "Marketing Director",
    },
  },
  {
    id: 4,
    title: "MRG Appartments",
    industry: "Property & Rental service",
    duration: "6+ M",
    image: "MRG Appartments.webp",
    challenge:
      "MRG Appartments is a Property & Rental service Provider. We followed a specific marketing strategy with focus on key services to overcome the competition and successfully ranked many profitable keywords on Google Page 1.",
    solution: [
      "Implemented podcast outreach strategy",
      "Created Google stack properties",
      "Built high-authority local citations",
      "Developed cloud platform backlinks",
    ],
    results: {
      backlinks: "+70%",
      traffic: "+185%",
      rankings: "Top 5",
      roi: "95%",
    },
    testimonial: {
      text: "The off-page SEO strategy transformed our online presence. Our reservations have doubled since implementing these changes.",
      author: "John Smith",
      position: "Owner",
    },
  },
];
export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(caseStudies[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-blue-950/30 to-slate-950/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        {/* Dynamic Background based on active case */}
        <div
          className={`absolute inset-0 transition-all duration-1000 opacity-20 blur-3xl`}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
            <span className="text-blue-400 font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Real results from our comprehensive off-page SEO strategies
          </p>
        </div>

        {/* Centered Tab Navigation */}
        <div className="flex flex-col items-center mb-16 w-full px-4">
          <div className="relative w-auto">
            {/* Gradient Background Wrapper to prevent cropping */}
            <div className="absolute inset-0 -z-10">
              <div className="w-full h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
            </div>

            {/* Navigation Bar */}
            <nav className="relative flex w-full justify-center gap-2 p-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-white/10 overflow-hidden">
              <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide">
                {caseStudies.map((study) => (
                  <button
                    key={study.id}
                    onClick={() => setActiveCase(study)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                      activeCase.id === study.id
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg"
                        : "hover:bg-white/5 text-blue-100/70"
                    }`}
                  >
                    <span className="relative flex items-center gap-2">
                      {study.title}
                      {activeCase.id === study.id && (
                        <ChevronRight className="w-4 h-4 animate-bounce" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300" />
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-slate-900/50">
              <Image
                src={activeCase.image}
                alt={activeCase.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Enhanced Info Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div
                className="px-6 py-3 rounded-full bg-slate-900/90 backdrop-blur-sm border border-white/10
                transform transition-all duration-300 group-hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-white whitespace-nowrap">
                    {activeCase.industry} • {activeCase.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Challenge Card */}
            <div className="transform transition-all duration-500 hover:translate-x-2">
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Challenge
                </h4>
                <p className="text-blue-100/70 leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>
            </div>

            {/* Solution List */}
            <div className="transform transition-all duration-500 hover:translate-x-2">
              <h4 className="text-lg font-semibold text-white mb-4">
                Solution
              </h4>
              <ul className="space-y-3">
                {activeCase.solution.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-blue-100/70 group p-2 rounded-lg
                      hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                      <LinkIcon className="h-5 w-5 text-blue-400 relative" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(activeCase.results).map(([key, value], index) => (
                <div
                  key={key}
                  className="group relative transform transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur" />
                  <div className="relative bg-white/5 p-4 rounded-lg text-center border border-white/10 backdrop-blur-sm">
                    <ResultIcon type={key} />
                    <div className="text-sm text-blue-100/60 capitalize mt-2 mb-1">
                      {key}
                    </div>
                    <div className="text-xl font-bold text-blue-100">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Testimonial */}
            <blockquote className="relative transform transition-all duration-500 hover:-translate-y-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm" />
              <div className="relative bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                <p className="text-blue-100/90 italic mb-4">
                  &quot;{activeCase.testimonial.text}&quot;
                </p>
                <footer className="text-blue-100/70">
                  <strong className="text-white">
                    {activeCase.testimonial.author}
                  </strong>
                  <span className="mx-1">•</span>
                  {activeCase.testimonial.position}
                </footer>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
