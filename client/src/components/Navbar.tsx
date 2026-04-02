/* =============================================================
   NAVBAR — Deep Space Noir Design
   Sticky top nav with glass effect, brand logo, and nav links
   ============================================================= */

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { trackCTAClick } from "@/hooks/useAnalytics";

const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "AI Agents", href: "#ai-agents" },
  { label: "AI Team", href: "#ai-team" },
  { label: "Web Design", href: "#web-design" },
  { label: "Pricing", href: "#pricing" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C14]/95 backdrop-blur-md border-b border-[#00D4FF]/10 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            className="flex items-center gap-2.5 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="/favicon.png" alt="Taylormade AI Agency" className="w-9 h-9 group-hover:scale-105 transition-transform" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-800 text-white text-sm tracking-wide">TAYLORMADE</span>
              <span className="font-mono-brand text-[10px] text-[#00D4FF] tracking-[0.2em]">AI AGENCY</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.slice(0, 5).map((link) => (
              <button
                key={`desktop-nav-${link.href}`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-display font-500 text-[#B0BDD0] hover:text-[#00D4FF] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00D4FF] group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </button>
            ))}
            <div className="h-6 w-px bg-[#1E2A3D] mx-1" />
            {navLinks.slice(5).map((link) => (
              <button
                key={`desktop-nav-secondary-${link.href}`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-display font-500 text-[#B0BDD0] hover:text-[#00D4FF] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00D4FF] group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:0414905553" className="btn-cyan text-sm py-2.5 px-5" onClick={() => trackCTAClick("call_dean_navbar")}>
              Call Us Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#B0BDD0] hover:text-[#00D4FF] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#080C14]/98 backdrop-blur-md border-t border-[#00D4FF]/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <div key={`mobile-nav-${link.href}`}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-display font-500 text-[#B0BDD0] hover:text-[#00D4FF] hover:bg-[#0F1829] rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
                {i === 4 && <div className="h-px bg-[#1E2A3D] my-2" />}
              </div>
            ))}
            <div className="pt-3">
              <a href="tel:0414905553" className="btn-cyan block text-center text-sm">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
