/* =============================================================
   WHAT WE DO SECTION — AI-First Solutions
   Deep Space Noir Design — alternating layout with service cards
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Mic, MessageSquare, Settings, Globe, BarChart3, Wrench } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Mic,
    title: "AI Voice Agents",
    subtitle: "Never Miss Another Call",
    description:
      "AI receptionists that answer every call, qualify leads and book appointments in a natural Australian voice — 24/7, no missed calls, ever. Your business stays open even when you're not.",
    features: ["Natural Australian voices", "Lead qualification", "Calendar booking", "24/7 availability"],
    accent: "#00D4FF",
  },
  {
    num: "02",
    icon: MessageSquare,
    title: "AI Chat Agents",
    subtitle: "Always-On Website Intelligence",
    description:
      "Intelligent website assistants trained on your business — handling enquiries, support and lead capture around the clock. Converts visitors into customers while you sleep.",
    features: ["Trained on your data", "Lead capture", "FAQ handling", "Website integration"],
    accent: "#00D4FF",
  },
  {
    num: "03",
    icon: Settings,
    title: "Workflow Automation",
    subtitle: "Eliminate the Admin Drain",
    description:
      "Eliminate the admin that drains your team. We map, build and deploy automated workflows that connect your systems seamlessly — saving hours every single week.",
    features: ["CRM integration", "Calendar automation", "System connections", "Custom workflows"],
    accent: "#FFB547",
  },
  {
    num: "04",
    icon: Globe,
    title: "Web Design & Hosting",
    subtitle: "Professional Online Presence",
    description:
      "Professional websites built, hosted and maintained by our Tech Department — with quarterly reports and ongoing support included. Mobile-first, fast, and built to convert.",
    features: ["Custom design", "Mobile-first build", "Hosting & SSL", "Ongoing maintenance"],
    accent: "#FFB547",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Business Intelligence",
    subtitle: "Know Your Numbers in Real Time",
    description:
      "Custom dashboards and automated reporting so you always know exactly where your business stands — in real time. Data-driven decisions made simple.",
    features: ["Custom dashboards", "Automated reports", "Performance tracking", "Real-time insights"],
    accent: "#00D4FF",
  },
  {
    num: "06",
    icon: Wrench,
    title: "Tech Support",
    subtitle: "Your Dedicated Tech Department",
    description:
      "Dedicated Tech Department support for all your systems. We keep everything running so you never worry about the tech — and you can focus on what you do best.",
    features: ["Priority support", "System monitoring", "Issue resolution", "Ongoing optimisation"],
    accent: "#FFB547",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;
  const isCyan = service.accent === "#00D4FF";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="card-navy p-7 h-full group">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}30` }}
          >
            <Icon className="w-6 h-6" style={{ color: service.accent }} />
          </div>
          <span
            className="font-mono-brand text-2xl font-700 opacity-20 group-hover:opacity-40 transition-opacity"
            style={{ color: service.accent }}
          >
            {service.num}
          </span>
        </div>

        {/* Content */}
        <div className="mb-1">
          <span className="section-label text-[10px]" style={{ color: service.accent }}>
            {service.subtitle}
          </span>
        </div>
        <h3 className="font-display font-700 text-white text-xl mb-3 group-hover:text-[#00D4FF] transition-colors">
          {service.title}
        </h3>
        <p className="text-[#8A97B0] text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-[#6B7A99]">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.accent }} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-we-do" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">AI-First Solutions</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            What We Do
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto leading-relaxed">
            Every solution is engineered specifically for your business. Not copied. Not templated.{" "}
            <span className="text-[#00D4FF] font-600">Taylormade.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.num} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
