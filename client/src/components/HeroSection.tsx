/* =============================================================
   HERO SECTION — Deep Space Noir Design
   Full-bleed dark hero with neural network bg, split layout
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, Shield, Star } from "lucide-react";
import { trackCTAClick } from "@/hooks/useAnalytics";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503117367/TsVExGa2vF37ogbjeBYWyC/hero-bg-DZpHffawfKGcKx76kYEVUK.webp";

const stats = [
  { value: "24/7", label: "Always On" },
  { value: "100%", label: "Australian Owned" },
  { value: "0", label: "Missed Calls" },
  { value: "∞", label: "Scalability" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "AI Agents That Work While You Sleep.";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [visible]);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/95 via-[#080C14]/80 to-[#080C14]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-[#080C14]/30" />

      {/* Animated particles overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00D4FF]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="section-label">Perth, Western Australia</span>
            <span className="w-8 h-px bg-[#00D4FF]" />
            <span className="section-label">Family Owned &amp; Operated</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`font-display font-800 text-white leading-tight mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.2s", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            <span className="shimmer-text">{typedText}</span>
            <span className="animate-pulse text-[#00D4FF]">|</span>
          </h1>

          {/* Sub-headline */}
          <p
            className={`text-lg sm:text-xl text-[#B0BDD0] leading-relaxed mb-8 max-w-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            Taylormade AI Agency delivers custom AI receptionists, voice agents, and intelligent chat systems — built specifically for your business. No templates. No offshore support. Just Dean and Robbie, and results that matter.
          </p>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            {[
              { icon: Shield, text: "Australian Data Sovereignty" },
              { icon: Star, text: "No Lock-In Contracts" },
              { icon: Phone, text: "Real People Answer" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#0F1829]/60 backdrop-blur-sm">
                <Icon className="w-3.5 h-3.5 text-[#FFB547]" />
                <span className="text-xs font-display font-600 text-[#B0BDD0]">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.6s" }}
          >
            <a href="tel:0414905553" className="btn-cyan inline-flex items-center justify-center gap-2 text-base pulse-glow" onClick={() => trackCTAClick("call_dean_hero")}>
              <Phone className="w-4 h-4" />
              Call Dean: 0414 905 553
            </a>
            <button
              onClick={() => {
                trackCTAClick("explore_services_hero");
                handleNavClick("#what-we-do");
              }}
              className="btn-outline-cyan inline-flex items-center justify-center gap-2 text-base"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.7s" }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-left">
                <div className="font-display font-800 text-[#00D4FF] glow-text-cyan" style={{ fontSize: "2rem" }}>
                  {value}
                </div>
                <div className="text-xs font-mono-brand text-[#6B7A99] tracking-wider uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080C14] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-[#00D4FF] to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
      </div>
    </section>
  );
}
