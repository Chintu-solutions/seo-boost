// src/components/portfolio/SkypeButton.tsx
import React from "react";
import { MessageSquare } from "lucide-react";

interface SkypeButtonProps {
  skypeId: string;
}

export const SkypeButton = ({ skypeId }: SkypeButtonProps) => {
  const openSkypeChat = () => {
    // Modern Skype URI format
    window.location.href = `skype:${skypeId}?chat`;
  };

  return (
    <button
      onClick={openSkypeChat}
      className="inline-flex items-center gap-2 bg-[#00aff0] hover:bg-[#00a0e0] text-white px-4 py-2 rounded-md transition-all duration-200"
    >
      <MessageSquare className="h-4 w-4" />
      Chat on Skype
    </button>
  );
};
