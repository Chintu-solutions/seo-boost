import React, { useState } from "react";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Local Restaurant Chain",
    industry: "Food & Beverage",
    duration: "3 months",
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
    duration: "4 months",
    image: "/case-study-2.jpg", // Add your image to public folder
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
    duration: "3 to 6 months",
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
    duration: "6+ months",
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

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-blue-950/30 to-slate-950/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
            Success Stories
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

        {/* Case Study Navigation */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(study)}
              className={`px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeCase.id === study.id
                  ? "bg-blue-500/20 text-white"
                  : "hover:bg-blue-500/10 text-blue-100/70"
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-50 group-hover:opacity-50 transition duration-300" />
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={activeCase.image}
                alt={activeCase.title}
                className="object-contain"
                height={700}
                width={700}
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Header Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {activeCase.title}
              </h3>
              <div className="flex gap-4 text-blue-100/70">
                <span>{activeCase.industry}</span>
                <span>•</span>
                <span>{activeCase.duration}</span>
              </div>
            </div>

            {/* Challenge */}
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">
                Challenge
              </h4>
              <p className="text-blue-100/70">{activeCase.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Solution
              </h4>
              <ul className="space-y-3">
                {activeCase.solution.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-blue-100/70"
                  >
                    <LinkIcon className="h-5 w-5 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(activeCase.results).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/5 p-4 rounded-lg text-center"
                >
                  <div className="text-sm text-blue-100/60 capitalize mb-1">
                    {key}
                  </div>
                  <div className="text-xl font-bold text-blue-100">{value}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm" />
              <blockquote className="relative bg-white/5 p-6 rounded-lg">
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
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
