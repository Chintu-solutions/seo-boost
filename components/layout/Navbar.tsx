import React from "react";
import { Globe2, Menu } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                <Globe2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SEOBoost
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Nav Links */}
            <div className="flex items-center space-x-6">
              {["Solutions", "Success Stories", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative group"
                >
                  <span className="text-white/80 hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/923060739550"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-300" />
              <button className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:shadow-lg transition duration-300 hover:scale-105 transform">
                Get Started
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-20 group-hover:opacity-40 blur-sm transition duration-300" />
            <div className="relative p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Menu className="h-6 w-6 text-white" />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .bg-animate {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </nav>
  );
}
