/* =============================================================
   AI AGENTS SECTION — Voice & Chat Agents
   Deep Space Noir Design — split layout with visual
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Phone, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

const AI_TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503117367/TsVExGa2vF37ogbjeBYWyC/ai-team-visual-MbD6pcGYeVkLX2eZ4mRzpm.webp";

const voiceFeatures = [
  "Answers every inbound call professionally",
  "Routes enquiries to the right person",
  "Takes messages and books appointments",
  "Natural Australian voice — not robotic",
  "Dedicated Australian business phone number",
  "Qualifies leads and updates your CRM",
];

const chatFeatures = [
  "Trained on your specific business data",
  "Handles FAQs, enquiries and complaints",
  "Captures leads and books appointments",
  "Website and social media integration",
  "Instant responses — zero wait times",
  "Monthly performance reporting",
];

function FeatureList({ features, accent }: { features: string[]; accent: string }) {
  return (
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accent }} />
          <span className="text-sm text-[#8A97B0]">{f}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AIAgentsSection() {
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
    <section id="ai-agents" className="py-24 bg-[#0F1829]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Our Core Services</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            AI Agents Built for{" "}
            <span className="text-[#00D4FF]">Your Business</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto">
            We supply AI agents for small businesses across Australia — custom-built, not off-the-shelf.
          </p>
        </div>

        {/* Main visual + agents */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#00D4FF]/20 glow-cyan">
              <img
                src={AI_TEAM_IMG}
                alt="AI Agent Team Visualization"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-[#080C14]/90 backdrop-blur-sm border border-[#00D4FF]/30 rounded-xl p-4">
                  <div className="font-mono-brand text-[10px] text-[#00D4FF] mb-1">ACTIVE STATUS</div>
                  <div className="font-display font-700 text-white text-sm">AI Agents Online 24/7</div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-[#6B7A99]">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Cards */}
          <div
            className={`space-y-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Voice Agent */}
            <div className="card-navy p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <div>
                  <div className="section-label text-[10px]">Voice Agent</div>
                  <h3 className="font-display font-700 text-white">AI Receptionist</h3>
                </div>
              </div>
              <p className="text-sm text-[#8A97B0] mb-4 leading-relaxed">
                Our flagship product. A voice AI that answers every call, qualifies leads, and books appointments — in a natural Australian voice, around the clock.
              </p>
              <FeatureList features={voiceFeatures} accent="#00D4FF" />
            </div>

            {/* Chat Agent */}
            <div className="card-navy p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFB547]/10 border border-[#FFB547]/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#FFB547]" />
                </div>
                <div>
                  <div className="section-label text-[10px]" style={{ color: "#FFB547" }}>Chat Agent</div>
                  <h3 className="font-display font-700 text-white">Website Chat AI</h3>
                </div>
              </div>
              <p className="text-sm text-[#8A97B0] mb-4 leading-relaxed">
                An intelligent chat assistant trained on your business data — handling enquiries, support and lead capture on your website, 24/7.
              </p>
              <FeatureList features={chatFeatures} accent="#FFB547" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <p className="text-[#8A97B0] mb-4">
            Need something more specific? We can deliver any required AI agent for your small business.
          </p>
          <button
            onClick={() => handleNavClick("#pricing")}
            className="btn-cyan inline-flex items-center gap-2"
          >
            View AI Agent Pricing
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
