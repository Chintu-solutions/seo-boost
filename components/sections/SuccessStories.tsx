import React from "react";
import { TrendingUp, Target, Award } from "lucide-react";

const stories = [
  {
    company: "Local Restaurant Chain",
    result: "250% increase in backlinks",
    description:
      "Achieved top rankings for local food delivery keywords through high-authority podcast mentions and Google stack implementation",
    icon: TrendingUp,
    gradient: "from-blue-500 to-purple-500",
    stats: {
      traffic: "+156%",
      keywords: "50+",
      time: "3 months",
    },
  },
  {
    company: "E-commerce Store",
    result: "185% boost in domain authority",
    description:
      "Secured premium backlinks from cloud platforms and industry-leading podcast features",
    icon: Target,
    gradient: "from-purple-500 to-pink-500",
    stats: {
      traffic: "+194%",
      keywords: "75+",
      time: "4 months",
    },
  },
  {
    company: "Service Business",
    result: "300% ROI increase",
    description:
      "Dominated local service rankings with strategic Google stack implementation and local citations",
    icon: Award,
    gradient: "from-pink-500 to-red-500",
    stats: {
      traffic: "+200%",
      keywords: "40+",
      time: "3 months",
    },
  },
];

export default function SuccessStories() {
  return (
    <section id="success" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-slate-950/95" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
              Client Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            See how our off-page SEO strategies have transformed businesses like
            yours
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group relative">
              {/* Card Gradient Border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${story.gradient} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300`}
              />

              {/* Card Content */}
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl p-8 rounded-lg">
                {/* Icon with gradient background */}
                <div className="relative w-16 h-16 mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${story.gradient} rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300`}
                  />
                  <div className="relative h-full bg-slate-900/90 rounded-2xl flex items-center justify-center">
                    <story.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Company and Result */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {story.company}
                </h3>
                <p
                  className={`text-lg font-semibold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent mb-4`}
                >
                  {story.result}
                </p>
                <p className="text-blue-100/70 mb-6">{story.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-200/10">
                  <div className="text-center">
                    <p className="text-sm text-blue-100/60">Traffic</p>
                    <p className="text-lg font-bold text-blue-100">
                      {story.stats.traffic}
                    </p>
                  </div>
                  <div className="text-center border-l border-r border-blue-200/10">
                    <p className="text-sm text-blue-100/60">Keywords</p>
                    <p className="text-lg font-bold text-blue-100">
                      {story.stats.keywords}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-blue-100/60">Timeline</p>
                    <p className="text-lg font-bold text-blue-100">
                      {story.stats.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923060739550"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-300" />
            <button className="relative px-8 py-3 bg-slate-900 rounded-full text-blue-100 hover:bg-slate-800 transition-colors duration-300">
              Start Your Success Story
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
