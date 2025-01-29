import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Users, Globe, Target } from "lucide-react";

const problems = [
  {
    text: "Your competitors are outranking you on Google",
    description:
      "Watch competitors rank while you remain stuck on page 2 or 3.",
    icon: TrendingUp,
    color: "from-blue-400 to-blue-600",
    image: "/A.Moses & Sons Ltd.webp",
    stats: [
      { label: "Current Ranking", value: "Page 2-3" },
      { label: "Lost Traffic", value: "60%" },
      { label: "Missed Leads", value: "45%" },
    ],
  },
  {
    text: "Potential customers can't find your business online",
    description:
      "Missing out on valuable customers due to poor online visibility",
    icon: Users,
    color: "from-purple-400 to-purple-600",
    image: "/background.png",
    stats: [
      { label: "Search Visibility", value: "15%" },
      { label: "Local Reach", value: "25%" },
      { label: "Brand Awareness", value: "30%" },
    ],
  },
  {
    text: "You're missing out on valuable organic traffic",
    description:
      "Organic traffic is the most cost-effective way to grow your business",
    icon: Globe,
    color: "from-pink-400 to-pink-600",
    image: "/Cloud stack Backlinks.png",
    stats: [
      { label: "Monthly Visitors", value: "-65%" },
      { label: "Bounce Rate", value: "85%" },
      { label: "Conversion Loss", value: "40%" },
    ],
  },
  {
    text: "Your marketing ROI is lower than it could be",
    description: "Paying more for marketing while getting less in return",
    icon: Target,
    color: "from-indigo-400 to-indigo-600",
    image: "/background.png",
    stats: [
      { label: "Marketing ROI", value: "-35%" },
      { label: "Ad Spend Waste", value: "45%" },
      { label: "Cost per Lead", value: "+75%" },
    ],
  },
];

export default function ProblemStatement() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProblem = problems[activeIndex];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-slate-950/95" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
                  Why Your Business Needs
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Professional Off-Page SEO
                </span>
              </h2>
              <p className="text-lg text-blue-100/80 leading-relaxed">
                In today&apos;s digital landscape, visibility is everything.
                Without proper off-page SEO strategies:
              </p>
            </div>

            <ul className="space-y-4">
              {problems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-pointer
                    ${
                      activeIndex === index
                        ? "bg-white/10 shadow-lg shadow-blue-500/10"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                >
                  <div className="relative mt-1">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${
                        item.color
                      } rounded-full 
                      ${
                        activeIndex === index
                          ? "opacity-40"
                          : "opacity-20 group-hover:opacity-30"
                      }
                      blur-sm transition duration-300`}
                    />
                    <item.icon className="relative h-6 w-6 text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <span
                      className={`text-blue-100/90 group-hover:text-white transition-colors duration-300 
                      ${activeIndex === index ? "text-white" : ""}`}
                    >
                      {item.text}
                    </span>
                    {activeIndex === index && (
                      <p className="text-sm text-blue-100/70">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Section */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
                <Image
                  src={activeProblem.image}
                  alt={activeProblem.text}
                  width={800}
                  height={600}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {activeProblem.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                  >
                    <div className="text-sm text-blue-100/70">{stat.label}</div>
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}
