/* =============================================================
   TRUST SECTION — Why Australian Small Businesses Choose Us
   Deep Space Noir Design — stats + trust signals
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Clock, Phone, Shield, TrendingUp, Users, Zap } from "lucide-react";

const trustPoints = [
  {
    icon: Clock,
    stat: "24/7",
    label: "Always Available",
    description: "Your AI agents never take a day off, never call in sick, and never miss a call.",
    color: "#00D4FF",
  },
  {
    icon: Phone,
    stat: "0",
    label: "Missed Calls",
    description: "Every inbound call is answered professionally, every time — guaranteed.",
    color: "#00D4FF",
  },
  {
    icon: Users,
    stat: "100%",
    label: "Australian Owned",
    description: "Perth-based family business. You'll always speak to Dean or Robbie directly.",
    color: "#FFB547",
  },
  {
    icon: Shield,
    stat: "AU",
    label: "Data Sovereignty",
    description: "Australian data sovereignty options available. Your data stays in Australia.",
    color: "#FFB547",
  },
  {
    icon: TrendingUp,
    stat: "3x",
    label: "Lead Capture",
    description: "Businesses typically see 3x more leads captured with 24/7 AI engagement.",
    color: "#00D4FF",
  },
  {
    icon: Zap,
    stat: "Fast",
    label: "Quick Deployment",
    description: "Most AI agents are live within days of onboarding — not months.",
    color: "#FFB547",
  },
];

export default function TrustSection() {
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

  return (
    <section className="py-20 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">The Numbers Speak</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
            Why Small Businesses{" "}
            <span className="text-[#00D4FF]">Choose Taylormade</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.label}
                className={`card-navy p-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${point.color}12`, border: `1px solid ${point.color}25` }}
                >
                  <Icon className="w-6 h-6" style={{ color: point.color }} />
                </div>
                <div
                  className="font-display font-800 text-3xl mb-1"
                  style={{ color: point.color }}
                >
                  {point.stat}
                </div>
                <div className="font-display font-700 text-white text-sm mb-2">{point.label}</div>
                <p className="text-xs text-[#6B7A99] leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div
          className={`mt-12 p-6 rounded-2xl border border-[#00D4FF]/20 bg-[#0F1829] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-700 text-white text-lg mb-1">
                Ready to see what AI can do for your business?
              </h3>
              <p className="text-sm text-[#8A97B0]">
                No obligation. No jargon. Just a real conversation with Dean or Robbie.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="tel:0414905553" className="btn-cyan inline-flex items-center gap-2 text-sm whitespace-nowrap">
                <Phone className="w-4 h-4" />
                0414 905 553
              </a>
              <a href="mailto:dean@aitaylormade.com" className="btn-outline-cyan inline-flex items-center gap-2 text-sm whitespace-nowrap">
                Email Dean
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
