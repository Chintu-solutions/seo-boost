import React, { useState } from "react";
import { Phone, Mail, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong!",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
                  Ready to Boost Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Online Presence?
                </span>
              </h2>
              <p className="text-lg text-blue-100/80 leading-relaxed">
                Get in touch with our Off-page SEO experts for a free
                consultation and discover how we can help your business dominate
                local rankings.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+923060739550"
                className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 blur-sm transition duration-300" />
                  <Phone className="relative h-6 w-6 text-blue-400" />
                </div>
                <span className="text-blue-100">+92 306 0739550</span>
              </a>

              <a
                href="mailto:contact@seoboost.com"
                className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 blur-sm transition duration-300" />
                  <Mail className="relative h-6 w-6 text-blue-400" />
                </div>
                <span className="text-blue-100">iumairanwarr@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300" />
            <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-blue-200/10 bg-white/5 text-blue-100 placeholder-blue-100/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-blue-200/10 bg-white/5 text-blue-100 placeholder-blue-100/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-blue-200/10 bg-white/5 text-blue-100 placeholder-blue-100/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors duration-300"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`p-3 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative flex items-center justify-center"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300" />
                  <div className="relative w-full px-8 py-3 bg-slate-900 rounded-lg flex items-center justify-center gap-2 text-blue-100 hover:bg-slate-800 transition-colors duration-300">
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
