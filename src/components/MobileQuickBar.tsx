import React from "react";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "../data/content";

interface MobileQuickBarProps {
  onQuoteClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onQuoteClick,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#151515] border-t border-white/10 p-2 shadow-2xl flex items-center gap-2">
      <a
        href={COMPANY_INFO.phoneHref}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#252525] text-white py-3 px-2 text-xs font-bold tracking-wide transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#809618]" />
        <span>Call</span>
      </a>

      <a
        href={COMPANY_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#151515] py-3 px-2 text-xs font-bold tracking-wide transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5 text-[#809618]" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onQuoteClick}
        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#809618] active:bg-[#718514] text-white py-3 px-2 text-xs font-bold tracking-wide transition-colors"
      >
        <span>Quote</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
