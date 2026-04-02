/* =============================================================
   TECH BANNER — Scrolling technology partner logos
   Deep Space Noir Design
   ============================================================= */

const technologies = [
  { name: "OpenAI", icon: "🤖" },
  { name: "Twilio", icon: "📞" },
  { name: "Vapi AI", icon: "🎙️" },
  { name: "Make.com", icon: "⚙️" },
  { name: "Zapier", icon: "⚡" },
  { name: "Google Cloud", icon: "☁️" },
  { name: "AWS", icon: "🔧" },
  { name: "HubSpot", icon: "📊" },
  { name: "Salesforce", icon: "💼" },
  { name: "Calendly", icon: "📅" },
  { name: "Stripe", icon: "💳" },
  { name: "Shopify", icon: "🛒" },
  { name: "WordPress", icon: "🌐" },
  { name: "React", icon: "⚛️" },
  { name: "n8n", icon: "🔗" },
  { name: "Anthropic", icon: "🧠" },
];

// Duplicate for seamless loop
const items = [...technologies, ...technologies];

export default function TechBanner() {
  return (
    <section className="py-8 bg-[#0F1829] border-y border-[#00D4FF]/10 overflow-hidden">
      <div className="mb-4 text-center">
        <span className="section-label">Technologies &amp; Platforms We Work With</span>
      </div>
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F1829] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F1829] to-transparent z-10 pointer-events-none" />

        <div className="scroll-banner flex items-center gap-8 w-max">
          {items.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#1E2A3D] bg-[#080C14]/50 hover:border-[#00D4FF]/30 hover:bg-[#0F1829] transition-all duration-300 whitespace-nowrap group"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="font-display font-600 text-sm text-[#6B7A99] group-hover:text-[#B0BDD0] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
