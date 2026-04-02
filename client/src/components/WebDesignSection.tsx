/* =============================================================
   WEB DESIGN SECTION — Professional Websites
   Deep Space Noir Design — split layout with web design visual
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, Search, BarChart2, Shield, Headphones, ArrowRight } from "lucide-react";

const WEB_DESIGN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503117367/TsVExGa2vF37ogbjeBYWyC/web-design-visual-WSFw2GydnoBdFKLSvB9TpY.webp";

const features = [
  { icon: Globe, title: "Custom Design", description: "Every website is designed from scratch for your brand — no templates." },
  { icon: Smartphone, title: "Mobile-First", description: "Built to look and perform perfectly on every device." },
  { icon: Search, title: "SEO Ready", description: "Foundation SEO setup to help your business get found online." },
  { icon: BarChart2, title: "Performance Reports", description: "Quarterly reports so you always know how your site is performing." },
  { icon: Shield, title: "Hosting & SSL", description: "Secure hosting with SSL certificate included in every plan." },
  { icon: Headphones, title: "Ongoing Support", description: "Monthly alterations and dedicated Tech Department support." },
];

export default function WebDesignSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="web-design" className="py-24 bg-[#0F1829]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Web Design & Hosting</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Professional Websites{" "}
            <span className="text-[#FFB547]">Built to Convert</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto">
            We design, build and host professional websites for small businesses — with ongoing support and quarterly reports included.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features grid */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="card-navy p-5 group"
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FFB547]/10 border border-[#FFB547]/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#FFB547]" />
                    </div>
                    <h4 className="font-display font-700 text-white text-sm mb-1.5 group-hover:text-[#FFB547] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-[#6B7A99] leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => handleNavClick("#pricing")}
                className="btn-outline-cyan inline-flex items-center gap-2 text-sm"
                style={{ borderColor: "#FFB547", color: "#FFB547" }}
              >
                View Web Design Pricing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#FFB547]/20">
              <img
                src={WEB_DESIGN_IMG}
                alt="Web Design and Development"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/60 to-transparent" />
              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[
                  { value: "3", label: "Tiers" },
                  { value: "100%", label: "Custom" },
                  { value: "AU", label: "Hosted" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-[#080C14]/90 backdrop-blur-sm border border-[#FFB547]/20 rounded-xl p-3 text-center">
                    <div className="font-display font-800 text-[#FFB547] text-lg">{value}</div>
                    <div className="font-mono-brand text-[9px] text-[#6B7A99] tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
