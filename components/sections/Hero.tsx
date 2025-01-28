import React from "react";
import { ArrowRight, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Since we can't use external images, you'll need to add this image to your public folder */}
        <div
          className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat"
          style={{
            opacity: "0.4", // Adjust this value to control image transparency
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-blue-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center animate-fade-in">
          {/* Main heading with gradient text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent inline-block">
              Dominate Local Rankings with
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block mt-2">
              Premium Off-Page SEO
            </span>
          </h1>

          {/* Subheading with enhanced visibility */}
          <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Specialist in High-Authority Backlinks: Podcast, Cloud Platform &
            Google Stack.
            <br className="hidden sm:block" />
            Boost your local business visibility with proven Off-page SEO
            strategies.
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/923060739550"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-green-500 via-green-400 to-green-600 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-300" />
              <button className="relative px-8 py-4 bg-slate-900/80 rounded-full text-white hover:bg-slate-800 transition-colors duration-300 flex items-center gap-2">
                Connect on WhatsApp
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-300" />
              <button className="relative px-8 py-4 bg-slate-900/80 rounded-full text-white hover:bg-slate-800 transition-colors duration-300 flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}
