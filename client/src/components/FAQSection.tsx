/* =============================================================
   FAQ SECTION — Interactive Accordion
   Deep Space Noir Design — expandable Q&A with smooth animations
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqItems = [
  {
    category: "AI Agents",
    items: [
      {
        q: "How long does it take to get an AI agent live?",
        a: "Most AI agents are live within 3–7 days of onboarding. We handle all the setup, training, and integration — you just need to provide your business data and preferences.",
      },
      {
        q: "Can the AI agent handle complex enquiries?",
        a: "Yes. Our AI agents are trained on your specific business data, FAQs, and processes. They can answer detailed questions, route complex issues to humans, and even book appointments or process orders.",
      },
      {
        q: "What if the AI agent makes a mistake?",
        a: "All conversations are logged and reviewed. If an error occurs, we retrain the agent on that specific scenario. Plus, every AI agent has a human escalation path for complex or sensitive issues.",
      },
      {
        q: "Can I use an AI agent for sales?",
        a: "Absolutely. Our Lead Qualifier AI agents qualify prospects, answer objections, and book appointments — all while you sleep. Many clients see 3x more leads captured.",
      },
    ],
  },
  {
    category: "Web Design",
    items: [
      {
        q: "Do you build websites from scratch or use templates?",
        a: "Every website is custom-designed from scratch for your brand. No templates. We design based on your industry, target audience, and business goals.",
      },
      {
        q: "What's included in the hosting?",
        a: "All our web plans include hosting, SSL certificate, domain registration, and ongoing maintenance. You own your domain — we just manage the hosting.",
      },
      {
        q: "Can you integrate my website with my CRM or booking system?",
        a: "Yes. We integrate with most popular tools — Pipedrive, HubSpot, Calendly, Stripe, and more. Custom integrations are available on our Premium plan.",
      },
      {
        q: "How often can I update my website?",
        a: "All plans include monthly alterations. Need more? Premium plans include priority updates. We can also train you to update content yourself.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    items: [
      {
        q: "Are there lock-in contracts?",
        a: "No. All plans are month-to-month with no lock-in. You can cancel anytime. We believe in earning your business every month.",
      },
      {
        q: "What's included in the setup fee?",
        a: "Setup includes initial configuration, training, testing, and deployment. For AI agents, it includes voice provisioning and CRM integration. For websites, it includes design, build, and launch.",
      },
      {
        q: "Do you offer discounts for annual payments?",
        a: "Yes. Contact Dean or Robbie for annual pricing — we typically offer 10–15% savings for annual commitments.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Absolutely. You can change plans anytime. We'll prorate any charges or credits based on your usage.",
      },
    ],
  },
  {
    category: "Data & Security",
    items: [
      {
        q: "Where is my data stored?",
        a: "By default, data is stored in Australian data centres. We also offer Australian Data Sovereignty options for businesses with strict compliance requirements.",
      },
      {
        q: "Is my business data secure?",
        a: "Yes. All data is encrypted in transit and at rest. We comply with Australian Privacy Principles (APP) and offer SOC 2 compliance on request.",
      },
      {
        q: "Can I export my data?",
        a: "Yes. You can export all your AI agent conversations, website analytics, and business data anytime — no lock-in, no restrictions.",
      },
      {
        q: "Do you comply with GDPR or other regulations?",
        a: "We comply with Australian Privacy Principles. For GDPR compliance or other international regulations, contact us for custom options.",
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        q: "What support do I get?",
        a: "All plans include email support. Kinetic and Vanguard plans include priority support and direct access to our Tech Department. You can also call Dean or Robbie anytime.",
      },
      {
        q: "Do you offer training?",
        a: "Yes. We provide onboarding training for all clients. Premium plans include quarterly strategy sessions.",
      },
      {
        q: "What if I need help on a weekend?",
        a: "For urgent issues, you can always call Dean or Robbie. We're a small team and we're accessible.",
      },
      {
        q: "Can you help me with strategy?",
        a: "Absolutely. Kinetic and Vanguard plans include quarterly strategy reviews. We can also discuss custom consulting on a project basis.",
      },
    ],
  },
];

function FAQAccordion({ item, index }: { item: typeof faqItems[0]["items"][0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-[#1E2A3D] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#00D4FF]/30"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-start justify-between bg-[#0F1829] hover:bg-[#141B28] transition-colors duration-200 group"
      >
        <span className="font-display font-600 text-white text-left group-hover:text-[#00D4FF] transition-colors">
          {item.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#00D4FF] flex-shrink-0 ml-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 py-4 bg-[#080C14] border-t border-[#1E2A3D]">
          <p className="text-sm text-[#8A97B0] leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(faqItems[0].category);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const currentFAQ = faqItems.find((f) => f.category === selectedCategory);

  return (
    <section id="faq" className="py-24 bg-[#0F1829]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center">
              <HelpCircle className="w-7 h-7 text-[#00D4FF]" />
            </div>
          </div>
          <span className="section-label mb-3 block">Common Questions</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Frequently Asked{" "}
            <span className="text-[#00D4FF]">Questions</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto">
            Can't find the answer you're looking for? Call Dean at 0414 905 553 or Robbie at 0468 449 529.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          {faqItems.map((faq) => (
            <button
              key={faq.category}
              onClick={() => setSelectedCategory(faq.category)}
              className={`px-4 py-2 rounded-full text-sm font-display font-600 transition-all duration-200 ${
                selectedCategory === faq.category
                  ? "bg-[#00D4FF] text-[#080C14]"
                  : "border border-[#1E2A3D] text-[#8A97B0] hover:border-[#00D4FF]/30"
              }`}
            >
              {faq.category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div
          className={`space-y-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          {currentFAQ?.items.map((item, index) => (
            <FAQAccordion key={item.q} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 p-6 rounded-2xl border border-[#FFB547]/20 bg-[#080C14] text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <h3 className="font-display font-700 text-white mb-2">Still have questions?</h3>
          <p className="text-sm text-[#8A97B0] mb-4">
            Get in touch with Dean or Robbie — no question is too small.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0414905553" className="btn-cyan text-sm inline-flex items-center justify-center gap-2">
              Call Dean: 0414 905 553
            </a>
            <a href="#contact" className="btn-outline-cyan text-sm inline-flex items-center justify-center gap-2">
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
