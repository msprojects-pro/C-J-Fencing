import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../data/content";

interface OurWorkProps {
  onQuoteClick: () => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onQuoteClick }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="work" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#809618] inline-block" />
              <span className="text-[#809618] font-bold text-xs sm:text-sm tracking-widest uppercase">
                OUR WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight">
              See What A Garden Transformation Can Do.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore examples of fencing, turf renewal, stone slabbing,
              timber installations, and garden maintenance across various outdoor
              spaces.
            </p>
          </div>

          <div className="text-xs text-gray-500 md:text-right max-w-xs">
            <span className="inline-block w-2 h-2 bg-[#809618] mr-2" />
            <span>
              Demonstration portfolio gallery. Real project photos can replace these demo images anytime.
            </span>
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] lg:auto-rows-[300px]">
          {GALLERY_ITEMS.map((item, index) => {
            const isFeatured = index === 0;
            const isWide = index === 5;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative group overflow-hidden bg-[#151515] cursor-pointer ${
                  isFeatured
                    ? "md:col-span-2 md:row-span-2"
                    : isWide
                    ? "md:col-span-2"
                    : ""
                }`}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                aria-label={`View details for ${item.title}`}
              >
                {/* Background Image with Zoom on Hover */}
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark bottom scrim for readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Top Right Quick Action / Zoom */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/90 text-[#151515] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                  <ZoomIn className="w-4 h-4 text-[#809618]" />
                </div>

                {/* Green accent line - Animates on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#809618] w-0 group-hover:w-full transition-all duration-300 ease-in-out z-20" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between z-10">
                  <div>
                    {/* Quiet Category metadata without pills */}
                    <p className="text-xs font-bold text-[#809618] uppercase tracking-wider mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2 max-w-md hidden sm:block">
                      {item.description}
                    </p>
                  </div>

                  {/* Small arrow */}
                  <div className="w-8 h-8 bg-white/20 group-hover:bg-[#809618] text-white flex items-center justify-center flex-shrink-0 ml-4 transition-colors duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Planning a Garden Project? CTA Bar */}
        <div className="mt-16 bg-[#F5F6F0] border-l-4 border-[#809618] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-[#151515] tracking-tight">
              Planning a garden project?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Contact us with your outdoor ideas or requirements for a free,
              no-obligation quote.
            </p>
          </div>

          <button
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2 bg-[#809618] hover:bg-[#718514] active:bg-[#627410] text-white px-8 py-4 text-sm font-bold tracking-wide transition-all shadow-sm flex-shrink-0 cursor-pointer"
          >
            <span>Get A Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox / Modal for Close Inspection */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xs"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#151515] text-white max-w-4xl w-full border border-white/20 relative shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[320px] sm:h-[480px]">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.alt}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-[#809618] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-[#151515] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#809618] uppercase tracking-wider block mb-1">
                  {selectedItem.category}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedItem.title}
                </h4>
                <p className="text-sm text-gray-300 mt-1 max-w-xl">
                  {selectedItem.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedItem(null);
                  onQuoteClick();
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#809618] hover:bg-[#718514] text-white px-6 py-3 text-sm font-bold tracking-wide transition-colors flex-shrink-0 cursor-pointer"
              >
                <span>Enquire About This</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
