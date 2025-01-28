import React from "react";
import { CheckCircle2, TrendingUp, Users, Globe, Target } from "lucide-react";

const problems = [
  {
    text: "Your competitors are outranking you on Google",
    icon: TrendingUp,
    color: "from-blue-400 to-blue-600",
  },
  {
    text: "Potential customers can't find your business online",
    icon: Users,
    color: "from-purple-400 to-purple-600",
  },
  {
    text: "You're missing out on valuable organic traffic",
    icon: Globe,
    color: "from-pink-400 to-pink-600",
  },
  {
    text: "Your marketing ROI is lower than it could be",
    icon: Target,
    color: "from-indigo-400 to-indigo-600",
  },
];

export default function ProblemStatement() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-slate-950/95" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
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

            <ul className="space-y-6">
              {problems.map((item, index) => (
                <li
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="relative mt-1">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-full opacity-20 group-hover:opacity-40 blur-sm transition duration-300`}
                    />
                    <item.icon className="relative h-6 w-6 text-blue-400" />
                  </div>
                  <span className="text-blue-100/90 group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Section */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-lg">
              {/* Analytics Visual */}
              <div className="space-y-6">
                {/* Graph Representation */}
                <div className="h-48 flex items-end justify-between gap-2">
                  {[40, 25, 85, 30, 95, 60, 70].map((height, index) => (
                    <div key={index} className="w-full">
                      <div
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm opacity-80 hover:opacity-100 transition-all duration-300"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Domain Authority", value: "45+" },
                    { label: "Backlink Quality", value: "95%" },
                    { label: "Local Citations", value: "150+" },
                    { label: "Monthly Traffic", value: "10k+" },
                  ].map((metric, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                      <div className="text-sm text-blue-100/70">
                        {metric.label}
                      </div>
                      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
