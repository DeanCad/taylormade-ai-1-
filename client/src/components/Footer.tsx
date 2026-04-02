/* =============================================================
   FOOTER — Deep Space Noir Design
   Company info, team contacts, quick links, trust signals
   ============================================================= */

import { Phone, Mail, MapPin, Zap, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

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

const aiServices = [
  "AI Voice Receptionist",
  "AI Chat Agent",
  "Sales Lead Qualifier",
  "Workflow Automation",
  "Business Intelligence",
  "Custom AI Solutions",
];

const webServices = [
  "Essential Starter Site",
  "Business Pro Site",
  "Premium Custom Build",
  "Web Hosting & Maintenance",
  "SEO Foundation",
  "eCommerce Solutions",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050810] border-t border-[#00D4FF]/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#0099CC] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#080C14]" fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-800 text-white text-sm tracking-wide">TAYLORMADE</span>
                <span className="font-mono-brand text-[10px] text-[#00D4FF] tracking-[0.2em]">AI AGENCY</span>
              </div>
            </div>

            <p className="text-sm text-[#6B7A99] leading-relaxed mb-5">
              Australian family-owned AI agency based in Perth. We build custom AI agents and professional websites for small businesses across Australia.
            </p>

            {/* Trust badges */}
            <div className="space-y-2 mb-5">
              {[
                "🇦🇺 Australian Owned & Operated",
                "🔒 Australian Data Sovereignty",
                "📞 No Offshore Helplines",
              ].map((badge) => (
                <div key={badge} className="text-xs text-[#6B7A99] flex items-center gap-2">
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {[
                { icon: Linkedin, url: "https://linkedin.com/company/taylormade-ai-agency", label: "LinkedIn" },
                { icon: Facebook, url: "https://facebook.com/taylormadeaiagency", label: "Facebook" },
                { icon: Instagram, url: "https://instagram.com/taylormadeaiagency", label: "Instagram" },
                { icon: Twitter, url: "https://twitter.com/taylormadeai", label: "Twitter" },
              ].map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-[#1E2A3D] flex items-center justify-center text-[#6B7A99] hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-700 text-white mb-5 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[#6B7A99] hover:text-[#00D4FF] transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-700 text-white mb-5 text-sm tracking-wide">AI Services</h4>
            <ul className="space-y-2.5 mb-6">
              {aiServices.map((s) => (
                <li key={s} className="text-sm text-[#6B7A99]">{s}</li>
              ))}
            </ul>
            <h4 className="font-display font-700 text-white mb-3 text-sm tracking-wide">Web Design</h4>
            <ul className="space-y-2.5">
              {webServices.map((s) => (
                <li key={s} className="text-sm text-[#6B7A99]">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-white mb-5 text-sm tracking-wide">Contact Us</h4>
            <div className="space-y-4">
              {/* Dean */}
              <div>
                <div className="text-xs font-mono-brand text-[#00D4FF] mb-1.5 tracking-wider">DEAN CADWALLADER</div>
                <div className="text-xs text-[#6B7A99] mb-2">General Manager & Founder</div>
                <a href="tel:0414905553" className="flex items-center gap-2 text-sm text-[#8A97B0] hover:text-[#00D4FF] transition-colors mb-1">
                  <Phone className="w-3.5 h-3.5 text-[#00D4FF]" />
                  0414 905 553
                </a>
                <a href="mailto:dean@aitaylormade.com" className="flex items-center gap-2 text-sm text-[#8A97B0] hover:text-[#00D4FF] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#00D4FF]" />
                  dean@aitaylormade.com
                </a>
              </div>

              {/* Robbie */}
              <div>
                <div className="text-xs font-mono-brand text-[#FFB547] mb-1.5 tracking-wider">ROBBIE CADWALLADER</div>
                <div className="text-xs text-[#6B7A99] mb-2">Technical Manager & Founder</div>
                <a href="tel:0468449529" className="flex items-center gap-2 text-sm text-[#8A97B0] hover:text-[#FFB547] transition-colors mb-1">
                  <Phone className="w-3.5 h-3.5 text-[#FFB547]" />
                  0468 449 529
                </a>
                <a href="mailto:robbie@aitaylormade.com" className="flex items-center gap-2 text-sm text-[#8A97B0] hover:text-[#FFB547] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#FFB547]" />
                  robbie@aitaylormade.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-sm text-[#6B7A99]">
                <MapPin className="w-3.5 h-3.5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                Perth, Western Australia
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0F1829] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#3D4F6B]">
            © {new Date().getFullYear()} Taylormade AI Agency. All rights reserved. ABN: Pending Registration.
          </p>
          <p className="text-xs text-[#3D4F6B]">
            All prices in AUD · Australian family business · Perth, WA
          </p>
        </div>
      </div>
    </footer>
  );
}
