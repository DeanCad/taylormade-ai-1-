/* =============================================================
   BLOG POST PAGE — Individual Article View
   Deep Space Noir Design — full article with sidebar
   ============================================================= */

import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Share2, ArrowLeft, MessageCircle } from "lucide-react";

const blogContent: Record<string, any> = {
  "1": {
    title: "The Real Cost of Missed Calls: Why 24/7 AI Receptionists Matter",
    category: "AI Agents",
    date: "March 28, 2026",
    readTime: 6,
    author: "Dean Cadwallader",
    excerpt: "Every missed call is a lost opportunity. Discover how AI voice agents ensure your business never misses another customer enquiry — even at 3am on a Sunday.",
    content: `
## The Hidden Cost of Missed Calls

Every business owner knows the feeling: you're in a meeting, you're on a job site, or you're simply unavailable — and your phone rings. A potential customer calls. They get voicemail. They try again later. They call a competitor instead.

How much is that costing you?

### The Numbers

According to industry research, **40% of small businesses miss 30% or more of their inbound calls**. For a typical service business, that's thousands of dollars in lost revenue every month.

Let's do the math:
- Average business receives 20 inbound calls per day
- 30% missed = 6 missed calls daily
- 20% of missed calls become lost sales = 1.2 lost sales daily
- Average sale value: $500
- **Monthly loss: $18,000**

And that's just the direct revenue loss. You're also losing:
- Customer satisfaction (they had to call back)
- Market intelligence (you don't know what they wanted)
- Competitive advantage (your competitor answered)

### Why Traditional Solutions Don't Work

**Hiring a receptionist?** Costs $3,000–$5,000/month, and they still take breaks, get sick, and can't work 24/7.

**Voicemail?** Customers hate it. Studies show 80% of callers won't leave a message.

**Call forwarding to your mobile?** You're still stuck answering every call personally.

### Enter AI Voice Agents

An AI Voice Receptionist answers every call professionally, 24/7. It:
- Greets callers with your brand voice
- Answers FAQs instantly
- Qualifies leads
- Books appointments directly into your calendar
- Takes detailed messages
- Escalates to you when needed

**Cost:** $249–$399/month (vs. $3,000–$5,000 for a human receptionist)

**Availability:** 24/7/365 (vs. 9–5 for a human)

**Accuracy:** Never forgets a detail, never has a bad day

### The Taylormade Difference

We don't just deploy a generic AI agent. We train it specifically on your business:
- Your products and services
- Your pricing and packages
- Your FAQs and common objections
- Your tone and brand voice
- Your calendar and availability

The result? Callers feel like they're talking to a real team member — because the AI knows your business inside and out.

### Real Results

One of our Perth-based clients, a plumbing company, was missing 40% of inbound calls. After deploying a Taylormade AI Voice Receptionist:
- **Calls answered:** 100% (up from 60%)
- **Appointments booked:** 15–20 per week (automated)
- **Admin time saved:** 10+ hours per week
- **Revenue impact:** +$8,000/month

### Getting Started

Deploying an AI Voice Receptionist takes just 3–7 days:
1. We gather your business information and FAQs
2. We train the AI on your specific needs
3. We provision an Australian business phone number
4. We test and refine until it's perfect
5. You go live

No setup fees hidden in fine print. No lock-in contracts. Just results.

### The Bottom Line

Every missed call is a missed opportunity. With an AI Voice Receptionist, you never miss another one.

**Ready to stop losing calls?** [Call Dean at 0414 905 553](tel:0414905553) or [book a consultation](#contact).
    `,
  },
  "2": {
    title: "From Manual to Automated: How Workflow Automation Saves 20+ Hours Per Week",
    category: "Automation",
    date: "March 25, 2026",
    readTime: 8,
    author: "Robbie Cadwallader",
    excerpt: "Stop wasting time on repetitive tasks. Learn how Australian businesses are using AI-powered automation to reclaim their time and focus on growth.",
    content: `
## The Time Drain

You're a business owner. Your day is packed:
- Client meetings
- Sales calls
- Project management
- Admin work
- Email
- Data entry
- Invoice follow-ups
- Scheduling
- Reporting

And that's just the first half of the day.

The problem? **50–70% of your time is spent on repetitive, low-value tasks** that don't require your expertise.

### What If You Could Automate It?

Workflow automation uses AI and integrations to handle the repetitive stuff automatically. No more manual data entry. No more scheduling back-and-forth. No more chasing invoices.

### Real Examples

**Lead Capture & Qualification:**
- Customer fills out a form on your website
- AI automatically qualifies the lead
- Lead is added to your CRM
- You get a notification
- **Time saved:** 5 minutes per lead × 10 leads/day = 50 minutes/day

**Invoice Follow-Up:**
- Invoice is sent automatically
- After 7 days, AI sends a reminder
- After 14 days, AI sends a final notice
- You only get involved if payment is overdue
- **Time saved:** 30 minutes/day

**Appointment Scheduling:**
- Customer books via your website or AI agent
- Calendar is automatically updated
- Confirmation email is sent
- Reminder is sent 24 hours before
- **Time saved:** 20 minutes/day

**Data Entry:**
- Form submissions automatically populate your CRM
- Emails are automatically tagged and filed
- Invoices are automatically processed
- **Time saved:** 1 hour/day

### The Math

If you save just 20 hours per week through automation:
- That's 1,000 hours per year
- At $100/hour (your time value), that's $100,000/year
- Automation costs: $500–$1,000/month = $6,000–$12,000/year
- **ROI: 800–1,600%**

### Getting Started with Taylormade

We assess your workflow, identify automation opportunities, and implement solutions using:
- AI agents (voice and chat)
- Zapier and Make (workflow automation)
- CRM integrations (Pipedrive, HubSpot, etc.)
- Custom API connections

Most businesses see results within 2–4 weeks.

### The Bottom Line

You didn't start a business to do data entry. Automation frees you to do what you do best: grow your business.

**Ready to reclaim your time?** [Call Robbie at 0468 449 529](tel:0468449529) for a free workflow audit.
    `,
  },
};

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (params?.id && blogContent[params.id]) {
      setPost({ id: params.id, ...blogContent[params.id] });
    }
  }, [params]);

  if (!match || !post) {
    return (
      <div className="min-h-screen bg-[#080C14]">
        <Navbar />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display font-800 text-white text-3xl mb-4">Article Not Found</h1>
            <p className="text-[#8A97B0] mb-6">Sorry, we couldn't find that blog post.</p>
            <a href="/#blog" className="btn-cyan inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-12 bg-gradient-to-b from-[#0F1829] to-[#080C14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/#blog" className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors mb-6 font-display font-600 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>

          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono-brand tracking-wider mb-5"
            style={{ background: "#00D4FF15", color: "#00D4FF", border: "1px solid #00D4FF30" }}
          >
            {post.category}
          </div>

          <h1 className="font-display font-800 text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#8A97B0]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
            <div className="text-[#6B7A99]">By {post.author}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div
              className="text-[#B0BDD0] leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line: string) => {
                    if (line.startsWith("##")) {
                      return `<h2 class="font-display font-700 text-white text-2xl mt-8 mb-4">${line.replace("## ", "")}</h2>`;
                    }
                    if (line.startsWith("###")) {
                      return `<h3 class="font-display font-700 text-white text-xl mt-6 mb-3">${line.replace("### ", "")}</h3>`;
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="ml-6">${line.replace("- ", "")}</li>`;
                    }
                    if (line.trim() === "") {
                      return "";
                    }
                    return `<p>${line}</p>`;
                  })
                  .join(""),
              }}
            />
          </div>

          {/* Share & CTA */}
          <div className="mt-12 pt-8 border-t border-[#1E2A3D]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-700 text-white mb-2">Share this article</h3>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com" },
                    { name: "Twitter", url: "https://twitter.com" },
                    { name: "Facebook", url: "https://facebook.com" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1E2A3D] text-[#8A97B0] hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all text-sm"
                    >
                      <Share2 className="w-4 h-4" />
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#contact" className="btn-cyan inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
