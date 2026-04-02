/* =============================================================
   VOICE DEMOS SECTION — Hear Our AI Agents
   Deep Space Noir Design — interactive audio player cards
   ============================================================= */

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { trackVoiceDemoPlay } from "@/hooks/useAnalytics";

const voiceDemos = [
  {
    id: 1,
    name: "Kate",
    role: "AI Receptionist",
    description: "Professional, warm, and welcoming. Perfect for first impressions.",
    audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503117367/TsVExGa2vF37ogbjeBYWyC/pasted_file_ndQkNQ_ElevenLabs_2026-04-01T16_39_28_Kate_pvc_sp100_s50_sb75_f2-5_36ce8ad8.mp3",
    accent: "Australian",
    color: "#00D4FF",
  },
  {
    id: 2,
    name: "Ben",
    role: "Support Agent",
    description: "Friendly and helpful. Great for customer support and follow-ups.",
    audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503117367/TsVExGa2vF37ogbjeBYWyC/pasted_file_8ijJG5_ElevenLabs_2026-04-01T18_05_01_Ben_pvc_sp95_s34_sb52_se50_b_m2_592d5189.mp3",
    accent: "Australian",
    color: "#FFB547",
  },
  {
    id: 3,
    name: "Lee",
    role: "Lead Qualifier",
    description: "Confident and authoritative. Ideal for sales and lead qualification calls.",
    audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503117367/TsVExGa2vF37ogbjeBYWyC/pasted_file_xCE7nu_ElevenLabs_2026-04-01T18_10_12_LeeMiddle-AgedAustralianMale_pvc_sp100_s68_sb28_v3_d6e4dbd3.mp3",
    accent: "Australian",
    color: "#00D4FF",
  },
];

function VoiceCard({ demo }: { demo: typeof voiceDemos[0] }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        trackVoiceDemoPlay(demo.name);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="card-navy p-6 h-full flex flex-col group">
      {/* Header */}
      <div className="mb-4 pb-4 border-b border-[#1E2A3D]">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display font-700 text-white text-lg group-hover:text-[#00D4FF] transition-colors">
              {demo.name}
            </h3>
            <p className="text-xs font-mono-brand text-[#6B7A99] tracking-wider mt-0.5">
              {demo.role}
            </p>
          </div>
          <Volume2 className="w-5 h-5" style={{ color: demo.color }} />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#8A97B0] leading-relaxed mb-5 flex-1">
        {demo.description}
      </p>

      {/* Audio Player */}
      <div className="space-y-3 mt-auto">
        {/* Play Button */}
        <button
          onClick={handlePlayPause}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
          style={{
            background: isPlaying ? `${demo.color}20` : `${demo.color}10`,
            border: `1px solid ${demo.color}40`,
            color: demo.color,
          }}
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" fill="currentColor" />
              <span className="font-display font-600 text-sm">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5" fill="currentColor" />
              <span className="font-display font-600 text-sm">Listen</span>
            </>
          )}
        </button>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="w-full h-1.5 bg-[#0F1829] rounded-full overflow-hidden border border-[#1E2A3D]">
            <div
              className="h-full transition-all duration-100 rounded-full"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${demo.color}, ${demo.color}dd)`,
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-[#6B7A99] font-mono-brand">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Accent Badge */}
        <div
          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono-brand tracking-wider"
          style={{ background: `${demo.color}15`, color: demo.color, border: `1px solid ${demo.color}30` }}
        >
          {demo.accent}
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={demo.audioUrl}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
    </div>
  );
}

export default function VoiceDemosSection() {
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
    <section id="voice-demos" className="py-24 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-label mb-3 block">Experience the Difference</span>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Hear Our <span className="text-[#00D4FF]">AI Voices</span>
          </h2>
          <p className="text-[#8A97B0] text-lg max-w-2xl mx-auto">
            Professional Australian voices that sound natural, professional, and trustworthy. Click play to hear your AI agent in action.
          </p>
        </div>

        {/* Voice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {voiceDemos.map((demo, index) => (
            <div
              key={demo.id}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <VoiceCard demo={demo} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <p className="text-[#8A97B0] mb-6">
            Impressed? Let's build a custom AI agent with a voice that matches your brand.
          </p>
          <a href="#contact" className="btn-cyan inline-flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
