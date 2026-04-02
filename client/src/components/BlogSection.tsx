/* =============================================================
   BLOG SECTION — Thought Leadership
   Deep Space Noir Design — article cards with read time
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Real Cost of Missed Calls: Why 24/7 AI Receptionists Matter",
    excerpt: "Every missed call is a lost opportunity. Discover how AI voice agents ensure your business never misses another customer enquiry — even at 3am on a Sunday.",
    category: "AI Agents",
    readTime: 6,
    date: "March 28, 2026",
    color: "#00D4FF",
  },
  {
    id: 2,
    title: "From Manual to Automated: How Workflow Automation Saves 20+ Hours Per Week",
    excerpt: "Stop wasting time on repetitive tasks. Learn how Australian businesses are using AI-powered automation to reclaim their time and focus on growth.",
    category: "Automation",
    readTime: 8,
    date: "March 25, 2026",
    color: "#FFB547",
  },
  {
    id: 3,
    title: "Voice vs Chat: Which AI Agent Is Right for Your Business?",
    excerpt: "Not all AI agents are created equal. We break down the pros and cons of voice receptionists versus chat agents — and help you choose the right fit.",
    category: "AI Agents",
    readTime: 5,
    date: "March 22, 2026",
    color: "#00D4FF",
  },
  {
    id: 4,
    title: "Web Design Trends 2026: What Actually Converts (And What Doesn't)",
    excerpt: "Forget the hype. We share the design principles that actually drive conversions for Australian small businesses — backed by real data.",
    category: "Web Design",
    readTime: 7,
    date: "March 19, 2026",
    color: "#FFB547",
  },
  {
    id: 5,
    title: "Australian Data Sovereignty: What You Need to Know About AI and Privacy",
    excerpt: "Your business data matters. Here's everything Australian business owners need to know about data sovereignty, compliance, and choosing the right AI provider.",
    category: "Compliance",
    readTime: 9,
    date: "March 16, 2026",
    color: "#00D4FF",
  },
  {
    id: 6,
    title: "Lead Qualification at Scale: How AI Agents Qualify 100+ Leads While You Sleep",
    excerpt: "Tired of manual lead qualification? Discover how AI agents automatically qualify leads, book appointments, and feed hot prospects straight into your CRM.",
    category: "Sales",
    readTime: 6,
    date: "March 13, 2026",
    color: "#FFB547",
  },
];

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
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
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <a href={`/blog/${post.id}`} className="card-navy p-6 h-full flex flex-col group hover:border-[#00D4FF]/50 transition-all duration-300 block">
        {/* Meta */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#1E2A3D]">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono-brand tracking-wider"
            style={{ background: `${post.color}15`, color: post.color, border: `1px solid ${post.color}30` }}
          >
            {post.category}
          </div>
          <div className="flex items-center gap-1 text-xs text-[#6B7A99]">
            <Clock className="w-3 h-3" />
            {post.readTime} min read
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-700 text-white text-lg mb-3 leading-snug group-hover:text-[#00D4FF] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#8A97B0] leading-relaxed mb-5 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1E2A3D]">
          <div className="flex items-center gap-1.5 text-xs text-[#6B7A99]">
            <Calendar className="w-3 h-3" />
            {post.date}
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-display font-600 text-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity">
            Read More
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  const filteredPosts = selectedCategory
    ? blogPosts.filter((p) => p.category === selectedCategory)
    : blogPosts;

  return (
    <section id="blog" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Insights & Guides</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            The Taylormade{" "}
            <span className="text-[#00D4FF]">Blog</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto">
            Expert insights on AI agents, workflow automation, web design, and how to grow your Australian small business.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-display font-600 transition-all duration-200 ${
              selectedCategory === null
                ? "bg-[#00D4FF] text-[#080C14]"
                : "border border-[#1E2A3D] text-[#8A97B0] hover:border-[#00D4FF]/30"
            }`}
          >
            All Articles
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-display font-600 transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#00D4FF] text-[#080C14]"
                  : "border border-[#1E2A3D] text-[#8A97B0] hover:border-[#00D4FF]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <p className="text-[#8A97B0] mb-4">
            Want AI insights delivered to your inbox? Subscribe to our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com.au"
              className="flex-1 px-4 py-3 rounded-lg bg-[#0F1829] border border-[#1E2A3D] text-white placeholder-[#3D4F6B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
            />
            <button className="btn-cyan px-6 py-3 text-sm whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
