import React from "react";
import { ArrowRight, MessageSquare, Phone, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../data/content";

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:py-32 bg-[#151515] overflow-hidden"
    >
      {/* Background Image with Solid Dark Overlay (No Gradient as requested) */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Completed garden transformation with wooden fencing, green lawn and stone patio"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Solid dark overlay with uniform opacity */}
        <div className="absolute inset-0 bg-[#151515] opacity-65" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left py-8 sm:py-12">
        <div className="max-w-3xl">
          {/* Company Brand Tagline */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-[#809618] inline-block" />
            <span className="text-[#809618] font-bold text-xs sm:text-sm tracking-widest uppercase">
              {COMPANY_INFO.name}
            </span>
          </div>

          {/* Hero Label */}
          <p className="text-white/90 font-bold text-xs sm:text-sm tracking-widest uppercase mb-4">
            FENCING • GARDENING • OUTDOOR SERVICES
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Transform Your Garden. Make The Most Of Your Outdoor Space.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-normal mb-8 max-w-2xl">
            Professional fencing, gardening, landscaping and outdoor maintenance
            services for complete garden transformations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-3 bg-[#809618] hover:bg-[#718514] active:bg-[#627410] text-white px-8 py-4 text-base font-bold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={COMPANY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#151515] hover:bg-gray-100 px-7 py-4 text-base font-bold tracking-wide transition-all shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-5 h-5 text-[#809618]" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white px-4 py-4 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#809618]" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Small Visual Highlight - Clean unboxed text layout */}
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center sm:justify-start gap-y-3 gap-x-6 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#809618] flex-shrink-0" />
              <span className="font-semibold text-white">
                Garden Transformations
              </span>
            </div>
            <span className="hidden sm:inline text-white/40" aria-hidden="true">
              ·
            </span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#809618] flex-shrink-0" />
              <span>Fencing & Shed Bases</span>
            </div>
            <span className="hidden sm:inline text-white/40" aria-hidden="true">
              ·
            </span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#809618] flex-shrink-0" />
              <span>Landscaping & Clearance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
