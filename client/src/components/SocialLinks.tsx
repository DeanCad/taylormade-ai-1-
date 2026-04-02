/* =============================================================
   SOCIAL LINKS — Social Media Icons
   Deep Space Noir Design — reusable social button component
   ============================================================= */

import { Mail, Linkedin, Facebook, Instagram, Twitter, Phone } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/taylormade-ai-agency",
    color: "#0A66C2",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/taylormadeaiagency",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/taylormadeaiagency",
    color: "#E4405F",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/taylormadeai",
    color: "#1DA1F2",
  },
];

interface SocialLinksProps {
  variant?: "icons" | "buttons";
  size?: "sm" | "md" | "lg";
}

export default function SocialLinks({ variant = "icons", size = "md" }: SocialLinksProps) {
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const buttonSizes = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  if (variant === "icons") {
    return (
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="inline-flex items-center justify-center rounded-lg border border-[#1E2A3D] text-[#8A97B0] hover:text-white hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-200"
              style={{
                padding: size === "sm" ? "6px" : size === "md" ? "8px" : "12px",
              }}
            >
              <Icon className={iconSizes[size]} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1E2A3D] text-[#8A97B0] hover:text-white hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-200 text-sm font-display font-500"
          >
            <Icon className="w-4 h-4" />
            {social.name}
          </a>
        );
      })}
    </div>
  );
}
