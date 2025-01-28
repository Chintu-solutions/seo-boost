import React from "react";
import {
  Podcast,
  Cloud,
  Link,
  Globe2,
  Building,
  Shield,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Podcast,
    title: "Podcast Backlinks",
    description:
      "High-authority backlinks from popular podcast platforms and directories",
    gradient: "from-purple-500 to-pink-500",
    delay: 0,
    bgImage: "/podcast-bg.jpg", // Add background image for podcasts
  },
  {
    icon: Cloud,
    title: "Cloud Platform Links",
    description:
      "Premium backlinks from trusted cloud service platforms and repositories",
    gradient: "from-blue-500 to-purple-500",
    delay: 100,
    bgImage: "/cloud-bg.jpg", // Add background image for cloud platforms
  },
  {
    icon: Link,
    title: "Google Stack",
    description:
      "Strategic backlinks using Google's own properties for maximum impact",
    gradient: "from-red-500 to-orange-500",
    delay: 200,
    bgImage: "/google-bg.jpg", // Add background image for Google stack
  },
  {
    icon: Globe2,
    title: "Local Citations",
    description:
      "Build authoritative local citations to dominate regional searches",
    gradient: "from-green-500 to-teal-500",
    delay: 300,
    bgImage: "/local-bg.jpg", // Add background image for local citations
  },
  {
    icon: Building,
    title: "Business Profiles",
    description:
      "Create and optimize high-authority business profile backlinks",
    gradient: "from-blue-500 to-cyan-500",
    delay: 400,
    bgImage: "/business-bg.jpg", // Add background image for business profiles
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description:
      "Monitor and maintain your backlink profile for long-term authority",
    gradient: "from-indigo-500 to-purple-500",
    delay: 500,
    bgImage: "/brand-bg.jpg", // Add background image for brand protection
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
              className="group relative h-[400px]"
              style={{
                animationDelay: `${service.delay}ms`,
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 rounded-lg`}
              />

              {/* Card Gradient Border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300`}
              />

              {/* Card Content */}
              <div className="relative h-full backdrop-blur-sm p-8 rounded-lg flex flex-col justify-between z-10">
                {/* Icon with gradient background */}
                <div className="relative w-16 h-16 mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300`}
                  />
                  <div className="relative h-full bg-slate-900/90 rounded-2xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div>
                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-lg group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="mt-6">
                  <button className="group/btn relative px-6 py-2 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 group-hover/btn:bg-white/20 transition-colors duration-300" />
                    <span className="relative flex items-center gap-2 text-white">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
