/* =============================================================
   ABOUT SECTION — Family Business Story + Team
   Deep Space Noir Design — Perth image, team cards with glow
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Shield, Heart, Users } from "lucide-react";

const PERTH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503117367/TsVExGa2vF37ogbjeBYWyC/perth-australia-bBk8syAxrNPn3CuhYDiXm5.webp";

const team = [
  {
    name: "Dean Cadwallader",
    role: "General Manager & Founder",
    email: "dean@aitaylormade.com",
    phone: "0414 905 553",
    bio: "Dean leads client relationships and business strategy, ensuring every solution delivers real results. When you call, Dean answers.",
    initial: "D",
    color: "#00D4FF",
  },
  {
    name: "Robbie Cadwallader",
    role: "Technical Department Manager & Founder",
    email: "robbie@aitaylormade.com",
    phone: "0468 449 529",
    bio: "Robbie heads all technical design, build and deployment. Every AI agent and website is built with Robbie's personal attention to detail.",
    initial: "R",
    color: "#FFB547",
  },
];

const values = [
  { icon: Heart, title: "Family Owned", description: "Australian family business based in Perth — not a faceless corporation." },
  { icon: Users, title: "Real People", description: "You'll always speak to Dean or Robbie. No offshore helplines, ever." },
  { icon: Shield, title: "Full Attention", description: "Every enquiry gets our complete focus. You're never just a ticket number." },
];

export default function AboutSection() {
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
    <section id="about" className="py-24 bg-[#0F1829]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Our Story</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            A Perth Family Business{" "}
            <span className="text-[#00D4FF]">You Can Trust</span>
          </h2>
        </div>

        {/* Story + Perth Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="text-[#B0BDD0] text-lg leading-relaxed mb-6">
              We're a family-run agency based in Perth, and we take pride in building genuine relationships with our clients. Every solution is built specifically for your business — not copied, not recycled.
            </p>
            <p className="text-[#8A97B0] leading-relaxed mb-8">
              When you work with us, you get Dean and Robbie — real people who answer the phone, know your name and care about your results. No offshore helplines. No ticket queues. Just honest, expert service from people who genuinely want to see your business succeed.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="font-display font-700 text-white mb-1">{title}</h4>
                    <p className="text-sm text-[#6B7A99]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Perth Image */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#FFB547]/20">
              <img
                src={PERTH_IMG}
                alt="Perth, Western Australia skyline at sunset"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="font-display font-700 text-white text-lg">Perth, Western Australia</div>
                <div className="section-label text-[10px] mt-1">Our Home Base</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-display font-700 text-white text-2xl">
              The People Behind the Technology
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`card-navy p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-display font-800"
                    style={{
                      background: `${member.color}15`,
                      border: `2px solid ${member.color}30`,
                      color: member.color,
                    }}
                  >
                    {member.initial}
                  </div>
                  <div>
                    <h4 className="font-display font-700 text-white">{member.name}</h4>
                    <div className="section-label text-[10px] mt-0.5" style={{ color: member.color }}>
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#8A97B0] leading-relaxed mb-5">{member.bio}</p>

                {/* Contact */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2.5 text-sm text-[#6B7A99] hover:text-[#00D4FF] transition-colors group"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0 group-hover:text-[#00D4FF]" style={{ color: member.color }} />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-sm text-[#6B7A99] hover:text-[#00D4FF] transition-colors group"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" style={{ color: member.color }} />
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
