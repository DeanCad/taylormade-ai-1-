/* =============================================================
   CONTACT SECTION — Get In Touch
   Deep Space Noir Design — form + contact details
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { trackFormSubmit } from "@/hooks/useAnalytics";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    interest: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit("contact_form");
    try {
      const response = await fetch("https://formspree.io/f/xvzvqdwy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", business: "", interest: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      label: "Dean Cadwallader",
      value: "0414 905 553",
      href: "tel:0414905553",
      color: "#00D4FF",
    },
    {
      icon: Phone,
      label: "Robbie Cadwallader",
      value: "0468 449 529",
      href: "tel:0468449529",
      color: "#00D4FF",
    },
    {
      icon: Mail,
      label: "Dean — General Manager",
      value: "dean@aitaylormade.com",
      href: "mailto:dean@aitaylormade.com",
      color: "#FFB547",
    },
    {
      icon: Mail,
      label: "Robbie — Technical",
      value: "robbie@aitaylormade.com",
      href: "mailto:robbie@aitaylormade.com",
      color: "#FFB547",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Perth, Western Australia",
      href: null,
      color: "#00D4FF",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Get In Touch</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Let's Talk About{" "}
            <span className="text-[#00D4FF]">Your Business</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-xl mx-auto">
            No sales scripts. No pressure. Just an honest conversation about how AI can work for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="font-display font-700 text-white text-xl mb-6">
              Reach Us Directly
            </h3>
            <div className="space-y-4 mb-8">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-[#1E2A3D] bg-[#0F1829] hover:border-[#00D4FF]/30 transition-all duration-200 group">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${detail.color}12`, border: `1px solid ${detail.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: detail.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-[#6B7A99] mb-0.5">{detail.label}</div>
                      <div className="font-display font-600 text-[#B0BDD0] group-hover:text-[#00D4FF] transition-colors text-sm">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                );
                return detail.href ? (
                  <a key={detail.value} href={detail.href}>{content}</a>
                ) : (
                  <div key={detail.value}>{content}</div>
                );
              })}
            </div>

            {/* Trust signals */}
            <div className="p-5 rounded-xl border border-[#FFB547]/20 bg-[#0F1829]">
              <h4 className="font-display font-700 text-[#FFB547] mb-3 text-sm">Why Choose Taylormade?</h4>
              <ul className="space-y-2">
                {[
                  "Australian family business — Perth based",
                  "No offshore helplines — ever",
                  "You'll always have our full attention",
                  "Real people who know your name",
                  "No lock-in contracts",
                  "Australian data sovereignty available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#8A97B0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB547] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            {submitted ? (
              <div className="card-navy p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#00D4FF]" />
                </div>
                <h3 className="font-display font-700 text-white text-xl mb-3">Message Sent!</h3>
                <p className="text-[#8A97B0] text-sm leading-relaxed">
                  Thanks for reaching out. Dean or Robbie will be in touch with you shortly. We look forward to learning about your business.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-navy p-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-600 text-[#6B7A99] mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-lg bg-[#080C14] border border-[#1E2A3D] text-white placeholder-[#3D4F6B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                disabled={submitted}
              />
                  </div>
                  <div>
                    <label className="block text-xs font-display font-600 text-[#6B7A99] mb-1.5 uppercase tracking-wider">
                      Phone Number
                    </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="04XX XXX XXX"
                className="w-full px-4 py-3 rounded-lg bg-[#080C14] border border-[#1E2A3D] text-white placeholder-[#3D4F6B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                disabled={submitted}
              />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-600 text-[#6B7A99] mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  placeholder="john@yourbusiness.com.au"
                className="w-full px-4 py-3 rounded-lg bg-[#080C14] border border-[#1E2A3D] text-white placeholder-[#3D4F6B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                disabled={submitted}
              />
                </div>

                <div>
                  <label className="block text-xs font-display font-600 text-[#6B7A99] mb-1.5 uppercase tracking-wider">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Your Business Pty Ltd"
                className="w-full px-4 py-3 rounded-lg bg-[#080C14] border border-[#1E2A3D] text-white placeholder-[#3D4F6B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                disabled={submitted}
              />
                </div>

                <div>
                  <label className="block text-xs font-display font-600 text-[#6B7A99] mb-1.5 uppercase tracking-wider">
                    I'm Interested In
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#080C14] border border-[#1E2A3D] text-white text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
                  disabled={submitted}
                >
                  <option value="" className="text-[#3D4F6B]">Select a service...</option>
                    <option value="ai-receptionist">AI Receptionist (Voice Agent)</option>
                    <option value="ai-chat">AI Chat Agent</option>
                    <option value="ai-bundle">AI Voice + Chat Bundle</option>
                    <option value="web-design">Web Design & Hosting</option>
                    <option value="workflow">Workflow Automation</option>
                    <option value="custom">Custom AI Solution</option>
                    <option value="not-sure">Not sure — need advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-display font-600 text-[#6B7A99] mb-1.5 uppercase tracking-wider">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What does your business do? What challenges are you facing? What would you like to improve?"
                className="w-full px-4 py-3 rounded-lg bg-[#080C14] border border-[#1E2A3D] text-white placeholder-[#3D4F6B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all resize-none"
                disabled={submitted}
              />
                </div>

                <button type="submit" disabled={submitted} className="btn-cyan w-full inline-flex items-center justify-center gap-2 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-xs text-[#6B7A99] text-center">
                  We'll get back to you within one business day. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
