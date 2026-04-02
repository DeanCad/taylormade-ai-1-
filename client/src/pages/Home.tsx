/* =============================================================
   HOME PAGE — Taylormade AI Agency
   Design: Deep Space Noir
   Assembles all sections in order
   ============================================================= */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechBanner from "@/components/TechBanner";
import WhatWeDo from "@/components/WhatWeDo";
import AIAgentsSection from "@/components/AIAgentsSection";
import VoiceDemosSection from "@/components/VoiceDemosSection";
import AITeamSection from "@/components/AITeamSection";
import WebDesignSection from "@/components/WebDesignSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";
import BlogSection from "@/components/BlogSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ComparisonSection from "@/components/ComparisonSection";
import LiveChatWidget from "@/components/LiveChatWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <HeroSection />
      <TechBanner />
      <WhatWeDo />
      <AIAgentsSection />
      <VoiceDemosSection />
      <AITeamSection />
      <WebDesignSection />
      <PricingSection />
      <ComparisonSection />
      <CTASection />
      <TrustSection />
      <CaseStudiesSection />
      <BlogSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <LiveChatWidget />
    </div>
  );
}
