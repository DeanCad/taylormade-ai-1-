/* =============================================================
   CTA SECTION — High-Conversion Call to Action
   Deep Space Noir Design — dramatic background with glow
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Phone, ArrowRight, Zap } from "lucide-react";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503117367/TsVExGa2vF37ogbjeBYWyC/cta-bg-d2GwTTZSyCebSKLgJUVASw.webp";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/95 via-[#080C14]/85 to-[#080C14]/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/80 via-transparent to-[#080C14]/80" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00D4FF]/5 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#0099CC] flex items-center justify-center pulse-glow">
            <Zap className="w-8 h-8 text-[#080C14]" fill="currentColor" />
          </div>
        </div>

        {/* Label */}
        <span className="section-label mb-4 block">The Taylormade Difference</span>

        {/* Headline */}
        <h2
          className="font-display font-800 text-white mb-6 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Most businesses know AI can help them.{" "}
          <span className="text-[#00D4FF]">They just don't know where to start.</span>
        </h2>

        {/* Body */}
        <p className="text-lg text-[#8A97B0] leading-relaxed mb-4 max-w-2xl mx-auto">
          Or who to trust. The Taylormade AI Agency exists to change that. We're not a faceless tech company — we're Dean and Robbie, a family business based in Perth, and we care about your results.
        </p>
        <p className="text-lg text-[#B0BDD0] font-600 mb-10 max-w-xl mx-auto">
          Don't wait any longer. Call us now to find out how your business can benefit from available AI technology — you will be surprised.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0414905553"
            className="btn-cyan inline-flex items-center justify-center gap-2 text-base px-8 py-4 pulse-glow"
          >
            <Phone className="w-5 h-5" />
            Call Dean: 0414 905 553
          </a>
          <a
            href="tel:0468449529"
            className="btn-outline-cyan inline-flex items-center justify-center gap-2 text-base px-8 py-4"
          >
            <Phone className="w-5 h-5" />
            Call Robbie: 0468 449 529
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-sm text-[#6B7A99]">
          Australian family business · No offshore helpline · Real people who answer the phone
        </p>
      </div>
    </section>
  );
}
