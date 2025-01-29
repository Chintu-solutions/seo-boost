import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Linkedin,
  Globe2,
  Award,
  TrendingUp,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    text: "High-Authority Backlinks",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Award,
    text: "Premium Podcast Features",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    text: "Strategic Google Stack",
    gradient: "from-pink-500 to-red-500",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat"
          style={{
            opacity: "0.3",
            transform: isVisible ? "scale(1.05)" : "scale(1)",
            transition: "transform 10s ease-out",
          }}
        />

        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-blue-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />

        {/* Animated Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />

        {/* Additional Animated Elements */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                opacity: 0.1,
              }}
            >
              <Star className="text-white w-4 h-4" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div
          className="text-center space-y-12 transform transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}"
        >
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
              <span
                className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent inline-block
                transform transition-all duration-700 hover:scale-105"
              >
                Dominate Local Rankings with
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block mt-2
                transform transition-all duration-700 hover:scale-105"
              >
                Premium Off-Page SEO
              </span>
            </h1>

            {/* Features Section */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm
                    transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity`}
                    />
                    <feature.icon className="w-5 h-5 text-white relative" />
                  </div>
                  <span className="text-blue-100/90 text-sm sm:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Subheading */}
          <p
            className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed
            transform transition-all duration-700 hover:text-white"
          >
            Boost your local business visibility with proven Off-page SEO
            strategies
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/923060739550"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-green-500 via-green-400 to-green-600 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-300" />
              <button className="relative px-8 py-4 bg-slate-900/80 rounded-full text-white hover:bg-slate-800 transition-all duration-300 flex items-center gap-2">
                Connect on WhatsApp
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-300" />
              <button className="relative px-8 py-4 bg-slate-900/80 rounded-full text-white hover:bg-slate-800 transition-all duration-300 flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}
