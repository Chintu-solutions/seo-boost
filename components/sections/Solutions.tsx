import React from "react";
import { Podcast, Cloud, Link, Globe2, Building, Shield } from "lucide-react";

const services = [
  {
    icon: Podcast,
    title: "Podcast Backlinks",
    description:
      "High-authority backlinks from popular podcast platforms and directories",
    gradient: "from-purple-500 to-pink-500",
    delay: 0,
  },
  {
    icon: Cloud,
    title: "Cloud Platform Links",
    description:
      "Premium backlinks from trusted cloud service platforms and repositories",
    gradient: "from-blue-500 to-purple-500",
    delay: 100,
  },
  {
    icon: Link,
    title: "Google Stack",
    description:
      "Strategic backlinks using Google's own properties for maximum impact",
    gradient: "from-red-500 to-orange-500",
    delay: 200,
  },
  {
    icon: Globe2,
    title: "Local Citations",
    description:
      "Build authoritative local citations to dominate regional searches",
    gradient: "from-green-500 to-teal-500",
    delay: 300,
  },
  {
    icon: Building,
    title: "Business Profiles",
    description:
      "Create and optimize high-authority business profile backlinks",
    gradient: "from-blue-500 to-cyan-500",
    delay: 400,
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description:
      "Monitor and maintain your backlink profile for long-term authority",
    gradient: "from-indigo-500 to-purple-500",
    delay: 500,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-blue-950/30 to-slate-950/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
              Premium Off-Page SEO
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Boost your domain authority with our comprehensive off-page SEO
            strategies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${service.delay}ms`,
              }}
            >
              {/* Card Gradient Border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300`}
              />

              {/* Card Content */}
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl p-8 rounded-lg flex flex-col">
                {/* Icon with gradient background */}
                <div className="relative w-16 h-16 mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300`}
                  />
                  <div className="relative h-full bg-slate-900/90 rounded-2xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
