/* =============================================================
   AI TEAM SECTION — Digital Workforce
   Deep Space Noir Design — grid of AI employee cards
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import {
  Phone, UserCheck, HeadphonesIcon, CalendarCheck,
  PenTool, Receipt, Database, HelpCircle
} from "lucide-react";

const aiTeam = [
  {
    icon: Phone,
    role: "Front of House",
    name: "Voice Receptionist",
    description: "Answers every inbound call professionally, routes enquiries and takes messages — 24/7.",
    color: "#00D4FF",
    badge: "Most Popular",
  },
  {
    icon: UserCheck,
    role: "Sales",
    name: "Lead Qualifier",
    description: "Engages visitors, qualifies leads and books appointments directly into your calendar.",
    color: "#00D4FF",
    badge: null,
  },
  {
    icon: HeadphonesIcon,
    role: "Customer Service",
    name: "Support Agent",
    description: "Handles enquiries, complaints and tickets instantly — no wait times, no frustration.",
    color: "#FFB547",
    badge: null,
  },
  {
    icon: CalendarCheck,
    role: "Administration",
    name: "Booking Coordinator",
    description: "Manages your calendar, confirms appointments and sends reminders automatically.",
    color: "#FFB547",
    badge: null,
  },
  {
    icon: PenTool,
    role: "Marketing",
    name: "Content Assistant",
    description: "Drafts social posts, emails and product copy in your exact brand voice.",
    color: "#00D4FF",
    badge: null,
  },
  {
    icon: Receipt,
    role: "Finance",
    name: "Invoice Bot",
    description: "Automates invoicing, payment follow-ups and basic financial reporting.",
    color: "#FFB547",
    badge: null,
  },
  {
    icon: Database,
    role: "Operations",
    name: "Data Specialist",
    description: "Captures, processes and organises incoming data across your systems automatically.",
    color: "#00D4FF",
    badge: null,
  },
  {
    icon: HelpCircle,
    role: "Knowledge",
    name: "FAQ & Info Bot",
    description: "Answers your most common questions instantly, drawn from your own business data.",
    color: "#FFB547",
    badge: null,
  },
];

function AIEmployeeCard({ employee, index }: { employee: typeof aiTeam[0]; index: number }) {
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

  const Icon = employee.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
    >
      <div className="card-navy p-6 h-full relative overflow-hidden group">
        {/* Badge */}
        {employee.badge && (
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#FFB547]/15 border border-[#FFB547]/30">
            <span className="font-mono-brand text-[10px] text-[#FFB547] tracking-wider">{employee.badge}</span>
          </div>
        )}

        {/* Glow background */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity blur-2xl"
          style={{ background: employee.color }}
        />

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${employee.color}12`, border: `1px solid ${employee.color}25` }}
        >
          <Icon className="w-6 h-6" style={{ color: employee.color }} />
        </div>

        {/* Role label */}
        <div className="section-label text-[10px] mb-1" style={{ color: employee.color }}>
          {employee.role}
        </div>

        {/* Name */}
        <h3 className="font-display font-700 text-white text-lg mb-3 group-hover:text-[#00D4FF] transition-colors">
          {employee.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#6B7A99] leading-relaxed">
          {employee.description}
        </p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, transparent, ${employee.color}, transparent)` }}
        />
      </div>
    </div>
  );
}

export default function AITeamSection() {
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
    <section id="ai-team" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Digital Workforce</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Meet Your{" "}
            <span className="text-[#00D4FF]">AI Team</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto leading-relaxed">
            Each AI employee is trained and configured for your specific business — your tone, your products, your processes.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiTeam.map((employee, index) => (
            <AIEmployeeCard key={employee.name} employee={employee} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#00D4FF]/20 bg-[#0F1829]">
            <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-sm text-[#8A97B0]">
              All AI employees are custom-trained on your business data before deployment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
