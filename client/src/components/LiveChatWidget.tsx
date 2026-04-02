/* =============================================================
   LIVE CHAT WIDGET — Floating Chat Button
   Deep Space Noir Design — collapsible chat widget
   ============================================================= */

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";
import { trackChatWidgetInteraction } from "@/hooks/useAnalytics";

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ type: "user" | "bot"; text: string }>>([
    {
      type: "bot",
      text: "Hi! 👋 Welcome to Taylormade AI Agency. How can we help you today?",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    trackChatWidgetInteraction("message_sent");

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: message }]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! We specialize in AI voice agents, chat agents, and web design for Australian businesses.",
        "Our AI agents are available 24/7 and can handle customer calls, lead qualification, and appointment booking.",
        "Most businesses see ROI within 2–3 months. Would you like to learn more about pricing?",
        "You can also call Dean at 0414 905 553 or Robbie at 0468 449 529 for a quick chat.",
        "What service are you most interested in? Voice agents, chat agents, web design, or workflow automation?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { type: "bot", text: randomResponse }]);
    }, 500);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    trackChatWidgetInteraction(isOpen ? "close" : "open");
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] bg-[#080C14] border border-[#1E2A3D] rounded-2xl shadow-2xl shadow-black/50 flex flex-col h-[600px] z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00D4FF] to-[#0099CC] p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-display font-700 text-[#080C14] text-sm">
                Taylormade AI Agency
              </h3>
              <p className="text-xs text-[#080C14]/70">We typically reply in minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-[#080C14]" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.type === "user"
                      ? "bg-[#00D4FF] text-[#080C14] font-display font-600"
                      : "bg-[#0F1829] text-[#B0BDD0] border border-[#1E2A3D]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-3 border-t border-[#1E2A3D] space-y-2">
            <div className="flex gap-2">
              <a
                href="tel:0414905553"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#0F1829] border border-[#1E2A3D] text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all text-xs font-display font-600"
              >
                <Phone className="w-4 h-4" />
                Call Dean
              </a>
              <a
                href="mailto:hello@taylormadeai.com.au"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#0F1829] border border-[#1E2A3D] text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all text-xs font-display font-600"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-[#1E2A3D]">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-lg bg-[#0F1829] border border-[#1E2A3D] text-white placeholder-[#3D4F6B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:ring-1 focus:ring-[#00D4FF]/20 transition-all"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-[#00D4FF] text-[#080C14] hover:bg-[#00D4FF]/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-[#3D4F6B] mt-2">
              💡 For urgent matters, call Dean: 0414 905 553
            </p>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099CC] text-[#080C14] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40 glow-cyan"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" fill="currentColor" />
        )}
      </button>
    </>
  );
}
