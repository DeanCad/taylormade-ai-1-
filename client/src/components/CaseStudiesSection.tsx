/* =============================================================
   CASE STUDIES SECTION — Social Proof
   Deep Space Noir Design — project cards with metrics
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Clock, DollarSign, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Local Plumbing Business: 3x More Leads in 60 Days",
    description: "A Perth-based plumbing company was missing 40% of inbound calls. We deployed an AI Voice Receptionist that answers every call, qualifies leads, and books appointments.",
    industry: "Plumbing & Services",
    metrics: [
      { icon: TrendingUp, label: "Leads Captured", value: "+240%" },
      { icon: Clock, label: "Response Time", value: "Instant" },
      { icon: Users, label: "Monthly Calls", value: "1,200+" },
    ],
    result: "Now books 15–20 appointments per week through AI alone. Freed up 10+ hours of admin time.",
    color: "#00D4FF",
  },
  {
    id: 2,
    title: "E-Commerce Store: 35% Conversion Lift with New Website",
    description: "An online retailer had an outdated website with poor mobile experience. We redesigned from scratch with modern UX, faster load times, and integrated Stripe checkout.",
    industry: "E-Commerce",
    metrics: [
      { icon: TrendingUp, label: "Conversion Rate", value: "+35%" },
      { icon: Clock, label: "Page Speed", value: "2.1s" },
      { icon: DollarSign, label: "AOV Increase", value: "+$45" },
    ],
    result: "Site now generates $8K additional revenue per month. Mobile traffic increased 180%.",
    color: "#FFB547",
  },
  {
    id: 3,
    title: "Consulting Firm: AI Chat Agent Handles 60% of Enquiries",
    description: "A management consulting firm was drowning in repetitive client enquiries. We built a custom AI Chat Agent trained on their service offerings and FAQ.",
    industry: "Professional Services",
    metrics: [
      { icon: Users, label: "Enquiries Handled", value: "60%" },
      { icon: Clock, label: "Response Time", value: "<30s" },
      { icon: TrendingUp, label: "Lead Quality", value: "Improved" },
    ],
    result: "Consultants now focus on high-value work. Lead qualification improved by 40%.",
    color: "#00D4FF",
  },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
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
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="card-navy p-7 h-full flex flex-col group">
        {/* Header */}
        <div className="mb-5 pb-5 border-b border-[#1E2A3D]">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono-brand tracking-wider mb-3"
            style={{ background: `${study.color}15`, color: study.color, border: `1px solid ${study.color}30` }}
          >
            {study.industry}
          </div>
          <h3 className="font-display font-700 text-white text-lg leading-snug group-hover:text-[#00D4FF] transition-colors">
            {study.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-[#8A97B0] leading-relaxed mb-6">
          {study.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {study.metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-4 h-4" style={{ color: study.color }} />
                </div>
                <div className="font-display font-700 text-white text-sm">{metric.value}</div>
                <div className="text-xs text-[#6B7A99]">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Result */}
        <div className="mt-auto pt-5 border-t border-[#1E2A3D]">
          <p className="text-sm text-[#B0BDD0] leading-relaxed italic">
            "{study.result}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
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
    <section id="case-studies" className="py-24 bg-[#0F1829]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Real Results</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Case Studies:{" "}
            <span className="text-[#00D4FF]">What We've Built</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto">
            See how Australian businesses are using Taylormade AI and web design to grow faster, serve better, and work smarter.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <p className="text-[#8A97B0] mb-6">
            Your business could be next. Let's discuss how AI and web design can drive growth for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0414905553" className="btn-cyan inline-flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4" />
              Call Dean: 0414 905 553
            </a>
            <a href="#contact" className="btn-outline-cyan inline-flex items-center gap-2 text-sm">
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
