import React, { useState, useEffect, useCallback } from "react";
import {
  TrendingUp,
  Target,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const stories = [
  {
    company: "Local Restaurant Chain",
    result: "250% increase in backlinks",
    description:
      "Achieved top rankings for local food delivery keywords through high-authority podcast mentions and Google stack implementation",
    icon: TrendingUp,
    gradient: "from-blue-500 to-purple-500",
    bgClass: "bg-blue-500/10",
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
    bgClass: "bg-purple-500/10",
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
    bgClass: "bg-pink-500/10",
    stats: {
      traffic: "+200%",
      keywords: "40+",
      time: "3 months",
    },
  },
];

const SliderCard = ({
  story: { company, result, description, icon: Icon, gradient, bgClass, stats },
  isActive,
}: any) => (
  <div
    className={`group relative w-full transition-all duration-700 ${
      isActive ? "scale-100 opacity-100" : "scale-95 opacity-50"
    }`}
  >
    {/* Enhanced Gradient Border with Animation */}
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300
      ${isActive ? "animate-pulse" : ""}`}
    />

    {/* Main Card Content */}
    <div
      className="relative h-full bg-gradient-to-b from-slate-900/95 to-slate-900/70 backdrop-blur-xl p-8 rounded-xl border border-white/10
      transform transition-all duration-500 group-hover:translate-y-[-5px]"
    >
      {/* Header Section with Animated Icon */}
      <div className="flex items-start justify-between mb-8">
        <div className="relative">
          <div
            className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-3xl blur-sm opacity-60 
            group-hover:opacity-100 transition duration-300 ${
              isActive ? "animate-pulse" : ""
            }`}
          />
          <div
            className="relative w-16 h-16 bg-slate-900/90 rounded-2xl flex items-center justify-center border border-white/10
            transform transition-all duration-500 group-hover:rotate-[360deg]"
          >
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Animated Result Badge */}
        <div
          className={`relative px-4 py-2 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 backdrop-blur-sm
          transform transition-all duration-500 group-hover:scale-105`}
        >
          <div className="text-sm font-medium text-white whitespace-nowrap">
            {result}
          </div>
        </div>
      </div>

      {/* Company Name & Description with Animation */}
      <div className="space-y-4 mb-8">
        <h3 className="text-2xl font-bold text-white group-hover:translate-x-1 transition-transform">
          {company}
        </h3>
        <p
          className="text-blue-100/70 leading-relaxed transform transition-all duration-500 
          group-hover:text-blue-100"
        >
          {description}
        </p>
      </div>

      {/* Enhanced Stats Section */}
      <div className="grid grid-cols-3 gap-4 relative">
        <div
          className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-lg opacity-0 
          group-hover:opacity-5 transition-opacity duration-300`}
        />
        {Object.entries(stats).map(([key, value]: any, index) => (
          <div
            key={key}
            className="relative p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group/stat
              transform transition-all duration-500 hover:translate-y-[-5px]"
          >
            {/* Enhanced Stat Highlight */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 
              group-hover/stat:opacity-10 rounded-lg transition-opacity duration-300`}
            />

            {/* Animated Stat Content */}
            <div className="relative">
              <p className="text-sm text-blue-100/60 capitalize mb-1">{key}</p>
              <p
                className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent 
                transform transition-all duration-300 group-hover/stat:scale-110`}
              >
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Enhanced Hover Effect */}
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 
      group-hover:opacity-10 rounded-xl transition-all duration-500 blur-xl`}
    />
  </div>
);

const SliderButton = ({ direction, onClick, disabled }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 ${
      direction === "prev" ? "-left-5" : "-right-5"
    } -translate-y-1/2 p-3 rounded-full backdrop-blur-lg
      bg-white/10 text-white/80 hover:bg-white/20 hover:text-white 
      disabled:opacity-50 disabled:cursor-not-allowed
      transition-all duration-300 z-10 hover:scale-110`}
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-6 h-6" />
    ) : (
      <ChevronRight className="w-6 h-6" />
    )}
  </button>
);

const SliderIndicator = ({ total, current, onClick }: any) => (
  <div className="flex justify-center gap-2 mt-8">
    {[...Array(total)].map((_, idx) => (
      <button
        key={idx}
        onClick={() => onClick(idx)}
        className={`transition-all duration-500 
          ${
            current === idx
              ? "w-8 h-2 bg-gradient-to-r from-blue-500 to-purple-500"
              : "w-2 h-2 bg-white/20 hover:bg-white/40"
          } 
          rounded-full hover:scale-110`}
      />
    ))}
  </div>
);

export default function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <section
      id="success"
      className="relative py-24 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-slate-950/95" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        {/* Enhanced Animated Background */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${stories[currentSlide].bgClass} blur-3xl opacity-20 animate-pulse`}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
            <span className="text-blue-400 font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
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

        {/* Enhanced Slider Section */}
        <div className="relative px-8 group">
          <SliderButton
            direction="prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          />

          <div className="overflow-hidden rounded-xl">
            <div
              className="transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {stories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-4">
                    <SliderCard
                      story={story}
                      isActive={currentSlide === index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SliderButton
            direction="next"
            onClick={nextSlide}
            disabled={currentSlide === stories.length - 1}
          />

          <SliderIndicator
            total={stories.length}
            current={currentSlide}
            onClick={setCurrentSlide}
          />
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923060739550"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-300" />
            <button className="relative px-8 py-3 bg-slate-900 rounded-full text-blue-100 hover:bg-slate-800 transition-all duration-300 flex items-center gap-2">
              Start Your Success Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
