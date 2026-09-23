import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../data/content";

interface AboutProps {
  onQuoteClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onQuoteClick }) => {
  const highlights = [
    {
      num: "01",
      title: "Garden Transformations",
      desc: "Complete visual and practical makeovers, turning unmanaged yards into functional, enjoyable outdoor living spaces.",
    },
    {
      num: "02",
      title: "Fencing & Outdoor Installation",
      desc: "Sturdy boundary fencing, concrete or timber posts, stable shed bases, and bespoke timber sleeper structures.",
    },
    {
      num: "03",
      title: "Garden Maintenance",
      desc: "Lawn cutting, turf laying, hedge management, tree cutting, surface pressure washing, and organized waste removal.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Large Professional Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative border-4 border-white shadow-xl bg-white">
              <img
                src={IMAGES.aboutTransformation}
                alt="Completed garden transformation showing clean slabbing, fresh lawn and timber garden planters"
                className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover"
                loading="lazy"
              />
              {/* Corner green brand accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#809618]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#809618]" />
            </div>

            {/* Quiet caption badge */}
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500 px-1">
              <span>Outdoor space transformation</span>
              <span className="text-[#809618] font-bold">C&J Standard</span>
            </div>
          </div>

          {/* Right Side: Content & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#809618] inline-block" />
              <span className="text-[#809618] font-bold text-xs sm:text-sm tracking-widest uppercase">
                {COMPANY_INFO.name}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight leading-tight mb-6">
              From Overgrown & Untidy To Clean, Usable Outdoor Space.
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Whether it’s new fencing, a fresh lawn, paving, garden clearance
              or regular maintenance, C&J Fencing Gardening provides practical
              outdoor services to help transform and maintain your garden.
            </p>

            {/* 3 Simple Highlights */}
            <div className="space-y-6 mb-8">
              {highlights.map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-[#E5E7DC] flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black text-[#809618]">
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#151515] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Green Highlighted Statement (Prominent brand feature) */}
            <div className="p-4 sm:p-5 bg-white border-l-4 border-[#809618] shadow-xs mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#809618] flex-shrink-0" />
                <p className="text-base sm:text-lg font-bold text-[#151515]">
                  Professional outdoor services, all in one place.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 bg-[#809618] hover:bg-[#718514] active:bg-[#627410] text-white px-7 py-3.5 text-sm font-bold tracking-wide transition-all shadow-sm cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#151515] hover:text-[#809618] px-4 py-3.5 transition-colors"
              >
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
