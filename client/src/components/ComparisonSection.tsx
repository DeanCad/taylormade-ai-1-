/* =============================================================
   COMPARISON SECTION — Staff vs AI Agents
   Deep Space Noir Design — ROI comparison table
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Check, X, TrendingUp } from "lucide-react";

const comparisonData = [
  {
    metric: "Monthly Cost",
    staff: "$4,000–$6,000",
    ai: "$249–$499",
    winner: "ai",
    explanation: "AI agents cost 90% less than hiring a full-time employee",
  },
  {
    metric: "Availability",
    staff: "9am–5pm (40 hrs/week)",
    ai: "24/7/365",
    winner: "ai",
    explanation: "Never miss a call, even at 3am on a Sunday",
  },
  {
    metric: "Setup Time",
    staff: "4–6 weeks (hiring, training)",
    ai: "3–7 days",
    winner: "ai",
    explanation: "Go live faster and start capturing leads immediately",
  },
  {
    metric: "Call Handling Capacity",
    staff: "20–30 calls/day per person",
    ai: "Unlimited simultaneous calls",
    winner: "ai",
    explanation: "Handle call spikes without hiring more staff",
  },
  {
    metric: "Consistency",
    staff: "Varies by mood, experience, fatigue",
    ai: "100% consistent every call",
    winner: "ai",
    explanation: "Every caller gets the same professional experience",
  },
  {
    metric: "Sick Days / Turnover",
    staff: "Yes (costly disruptions)",
    ai: "Never",
    winner: "ai",
    explanation: "No unexpected absences or training new staff",
  },
  {
    metric: "Customization",
    staff: "Limited to staff knowledge",
    ai: "Fully trained on your business",
    winner: "ai",
    explanation: "AI knows your products, pricing, and FAQs perfectly",
  },
  {
    metric: "Lead Qualification",
    staff: "Manual (time-consuming)",
    ai: "Automatic (instant)",
    winner: "ai",
    explanation: "AI qualifies leads and books appointments automatically",
  },
];

function ComparisonRow({ item, index }: { item: typeof comparisonData[0]; index: number }) {
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
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${(index % 4) * 0.05}s` }}
    >
      <div className="border-b border-[#1E2A3D] py-5 last:border-b-0">
        {/* Metric Name */}
        <div className="mb-4">
          <h3 className="font-display font-700 text-white text-lg">{item.metric}</h3>
          <p className="text-xs text-[#6B7A99] mt-1">{item.explanation}</p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Staff Column */}
          <div className="p-4 rounded-lg bg-[#0F1829] border border-[#1E2A3D]">
            <div className="flex items-start gap-3">
              <X className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono-brand text-[#6B7A99] uppercase tracking-wider mb-1">
                  Hiring Staff
                </p>
                <p className="text-sm text-[#B0BDD0] font-display font-600">{item.staff}</p>
              </div>
            </div>
          </div>

          {/* AI Column */}
          <div
            className="p-4 rounded-lg border"
            style={{
              background: "#00D4FF10",
              borderColor: "#00D4FF30",
            }}
          >
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono-brand text-[#00D4FF] uppercase tracking-wider mb-1">
                  Taylormade AI
                </p>
                <p className="text-sm text-[#B0BDD0] font-display font-600">{item.ai}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComparisonSection() {
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
    <section id="comparison" className="py-24 bg-[#0F1829]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">The Real Numbers</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            AI Agents vs. Hiring <span className="text-[#00D4FF]">Staff</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto">
            See why Australian businesses are choosing AI agents over traditional hiring. The numbers speak for themselves.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="card-navy p-8 mb-12">
          {comparisonData.map((item, index) => (
            <ComparisonRow key={item.metric} item={item} index={index} />
          ))}
        </div>

        {/* ROI Callout */}
        <div
          className={`p-8 rounded-lg border transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            background: "#00D4FF10",
            borderColor: "#00D4FF30",
            transitionDelay: "0.3s",
          }}
        >
          <div className="flex items-start gap-4">
            <TrendingUp className="w-8 h-8 text-[#00D4FF] flex-shrink-0" />
            <div>
              <h3 className="font-display font-700 text-white text-lg mb-2">
                Average ROI: 800–1,600% in Year 1
              </h3>
              <p className="text-[#8A97B0] leading-relaxed">
                Most businesses recoup their investment in AI agents within 2–3 months through increased lead capture, reduced admin time, and improved customer satisfaction. After that, it's pure profit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <p className="text-[#8A97B0] mb-6">
            Ready to stop wasting money on traditional hiring?
          </p>
          <a href="#contact" className="btn-cyan inline-flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Calculate Your ROI
          </a>
        </div>
      </div>
    </section>
  );
}
