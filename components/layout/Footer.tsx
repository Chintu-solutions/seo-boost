// components/layout/Footer.tsx
import React from "react";
import {
  Globe2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Podcast,
  Cloud,
  Database,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Podcast Backlinks", icon: Podcast, href: "#podcast-backlinks" },
    { name: "Cloud Platform Links", icon: Cloud, href: "#cloud-backlinks" },
    { name: "Google Stack SEO", icon: Database, href: "#google-stack" },
    { name: "Local Citations", icon: MapPin, href: "#local-citations" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/iumairanwarr",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/umair-anwar-local-seo-outreaching-expert/",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Instagram,
      href: "#",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Twitter,
      href: "#",
      color: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <footer className="relative bg-slate-950 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-slate-950/95" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-500" />
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                  <Globe2 className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Umair SEO
              </span>
            </div>
            <p className="text-blue-100/70 leading-relaxed">
              Transforming businesses through expert Off-page SEO strategies and
              premium backlink solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 hover:scale-110 transition-transform duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg opacity-20 group-hover:opacity-40 blur-sm transition duration-300`}
                  />
                  <Icon className="relative h-5 w-5 text-blue-100/80 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-blue-100/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Icon className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/923060739550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <Phone className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                  WhatsApp: +92 306 0739550
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/iumairanwarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <MessageCircle className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                  Facebook Messenger
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/umair-anwar-local-seo-outreaching-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ExternalLink className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-blue-200/10">
          <div className="text-center">
            <p className="text-blue-100/60">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://www.linkedin.com/in/umair-anwar-local-seo-outreaching-expert/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Umair SEO
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </footer>
  );
}
