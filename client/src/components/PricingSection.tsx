/* =============================================================
   PRICING SECTION — 3-Tier AI Agents + 3-Tier Web Design
   Deep Space Noir Design — elevated middle card with glow
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Phone, Star, Zap } from "lucide-react";

const aiPlans = [
  {
    name: "GENESIS",
    tagline: "Single AI Receptionist",
    description: "One dedicated AI employee for your most critical business function — Customer Service.",
    price: "$249",
    period: "per month",
    setup: "from $999",
    setupLabel: "one-off setup fee",
    popular: false,
    features: [
      "One custom AI Voice Agent or chat FAQ agent",
      "Trained on your business data",
      "Website or social media integration",
      "Monthly performance report",
      "Tech Department support",
    ],
    cta: "Get Started",
    accent: "#00D4FF",
  },
  {
    name: "KINETIC",
    tagline: "Voice & Chat",
    description: "A coordinated AI team covering your phone line and website — the most popular choice for Australian Small Businesses.",
    price: "$399",
    period: "per month",
    setup: "from $1,499",
    setupLabel: "one-off setup fee",
    popular: true,
    features: [
      "AI agents for voice + chat",
      "Receptionist and website chat agents",
      "Dedicated Australian business phone number",
      "Natural Australian voices — not robotic",
      "CRM & calendar integration",
      "Workflow automation setup",
      "Monthly report + quarterly strategy review",
      "Priority Tech Department support",
    ],
    cta: "Most Popular — Get Started",
    accent: "#00D4FF",
  },
  {
    name: "VANGUARD",
    tagline: "Fully Custom",
    description: "Fully optioned and customised for your business. Every AI agent, every integration, every workflow — built to your exact specifications.",
    price: "Contact Us",
    period: "for pricing",
    setup: "Custom",
    setupLabel: "setup fee",
    popular: false,
    features: [
      "Unlimited custom AI agents",
      "Full workflow automation suite",
      "Advanced CRM & third-party integrations",
      "Dedicated account manager",
      "Priority support & SLA",
      "Australian data sovereignty options",
      "Quarterly strategy sessions",
      "Custom reporting & dashboards",
    ],
    cta: "Contact for Pricing",
    accent: "#FFB547",
  },
];

const webPlans = [
  {
    name: "ESSENTIAL",
    tagline: "Starter Site",
    description: "A clean, professional 1–6 page website to get your business online fast.",
    price: "$149",
    period: "per month",
    setup: "from $1,499",
    setupLabel: "one-off setup fee",
    popular: false,
    features: [
      "Up to 6 pages custom design",
      "Domain registration included",
      "Hosting & SSL certificate",
      "Mobile Friendly Build",
      "Quarterly performance report",
      "Minor monthly alterations included",
    ],
    cta: "Get Started",
    accent: "#00D4FF",
    note: "Complete redesigns quoted separately.",
  },
  {
    name: "BUSINESS PRO",
    tagline: "Most Popular",
    description: "A fully featured website with blog, SEO and booking system — built to grow with you.",
    price: "$199",
    period: "per month",
    setup: "from $2,499",
    setupLabel: "one-off setup fee",
    popular: true,
    features: [
      "Up to 10 pages, premium custom design",
      "Blog & content management",
      "SEO foundation setup",
      "Booking or enquiry system",
      "Google Analytics integration",
      "Quarterly report + priority alterations",
      "Minor monthly alterations included",
    ],
    cta: "Most Popular — Get Started",
    accent: "#00D4FF",
    note: "Complete redesigns quoted separately.",
  },
  {
    name: "PREMIUM",
    tagline: "Custom Build",
    description: "Fully custom with eCommerce, advanced integrations and professional copywriting.",
    price: "$299",
    period: "per month",
    setup: "Contact Us",
    setupLabel: "for setup fee",
    popular: false,
    features: [
      "Unlimited pages, fully bespoke design",
      "eCommerce or membership functionality",
      "CRM & third-party integrations",
      "Professional copywriting included",
      "Advanced SEO setup",
      "Priority Tech Department",
      "Priority monthly alterations",
      "Quarterly strategy reporting",
    ],
    cta: "Contact for Pricing",
    accent: "#FFB547",
    note: "Complete redesigns quoted separately.",
  },
];

function PlanCard({ plan, index }: { plan: typeof aiPlans[0]; index: number }) {
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

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isContact = plan.price === "Contact Us";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className={`relative h-full rounded-2xl p-7 flex flex-col transition-all duration-300 ${
          plan.popular
            ? "bg-gradient-to-b from-[#0F1829] to-[#0A1220] border-2 border-[#00D4FF]/50 shadow-[0_0_40px_rgba(0,212,255,0.2)]"
            : "bg-[#0F1829] border border-[#1E2A3D] hover:border-[#00D4FF]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
        }`}
      >
        {/* Popular badge */}
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#00D4FF] text-[#080C14]">
              <Star className="w-3 h-3" fill="currentColor" />
              <span className="font-mono-brand text-[11px] font-700 tracking-wider">MOST POPULAR</span>
            </div>
          </div>
        )}

        {/* Plan name */}
        <div className="mb-5">
          <div className="section-label text-[10px] mb-1" style={{ color: plan.accent }}>
            {plan.tagline}
          </div>
          <h3 className="font-display font-800 text-white text-2xl tracking-wide">{plan.name}</h3>
          <p className="text-sm text-[#6B7A99] mt-2 leading-relaxed">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-5 pb-5 border-b border-[#1E2A3D]">
          <div className="flex items-end gap-2">
            <span className="font-display font-800 text-white" style={{ fontSize: isContact ? "1.5rem" : "2.5rem", color: plan.popular ? "#00D4FF" : "white" }}>
              {plan.price}
            </span>
            {!isContact && (
              <span className="text-sm text-[#6B7A99] mb-2">{plan.period}</span>
            )}
          </div>
          <div className="mt-1">
            <span className="font-mono-brand text-xs text-[#FFB547]">{plan.setup}</span>
            <span className="text-xs text-[#6B7A99] ml-1">{plan.setupLabel}</span>
          </div>
          {!isContact && (
            <div className="mt-1">
              <span className="text-xs text-[#6B7A99]">Billed monthly · No lock-in contract</span>
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 flex-1 mb-6">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.accent }} />
              <span className="text-sm text-[#8A97B0]">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={handleContact}
          className={`w-full py-3 rounded-lg font-display font-700 text-sm transition-all duration-300 ${
            plan.popular
              ? "btn-cyan"
              : plan.accent === "#FFB547"
              ? "border border-[#FFB547]/40 text-[#FFB547] hover:bg-[#FFB547]/10 hover:border-[#FFB547]"
              : "border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Transparent Pricing</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Simple, Honest{" "}
            <span className="text-[#00D4FF]">Pricing</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto">
            No hidden fees. No lock-in contracts. All prices in AUD.
          </p>
        </div>

        {/* AI Agent Pricing */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1E2A3D]" />
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#00D4FF]/20 bg-[#0F1829]">
              <Zap className="w-4 h-4 text-[#00D4FF]" />
              <span className="font-display font-700 text-white text-sm">AI Agent Plans</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1E2A3D]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {aiPlans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          <p className="text-center text-xs text-[#6B7A99] mt-6">
            AI voice packages include a dedicated Australian business phone number provisioned via our telco partner.{" "}
            <span className="text-[#00D4FF]">Ask us about Australian Data Sovereignty services.</span>
          </p>
        </div>

        {/* Web Design Pricing */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1E2A3D]" />
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFB547]/20 bg-[#0F1829]">
              <Phone className="w-4 h-4 text-[#FFB547]" />
              <span className="font-display font-700 text-white text-sm">Web Design Plans</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1E2A3D]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {webPlans.map((plan, index) => (
              <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          <p className="text-center text-xs text-[#6B7A99] mt-6">
            All plans include hosting, domain and maintenance. Complete redesigns are quoted separately.
          </p>
        </div>
      </div>
    </section>
  );
}
