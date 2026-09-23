import React from "react";
import { Fence, Trees, Sparkles, ArrowUpRight, Check } from "lucide-react";
import { SERVICE_CATEGORIES } from "../data/content";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "fencing-installation":
        return <Fence className="w-6 h-6 text-[#809618]" />;
      case "garden-landscaping":
        return <Trees className="w-6 h-6 text-[#809618]" />;
      case "maintenance-cleaning":
        return <Sparkles className="w-6 h-6 text-[#809618]" />;
      default:
        return <Fence className="w-6 h-6 text-[#809618]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#809618] inline-block" />
            <span className="text-[#809618] font-bold text-xs sm:text-sm tracking-widest uppercase">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight">
            Everything You Need For Your Garden.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From complete structural fencing and shed foundations to ground
            landscaping and outdoor cleaning, we offer a dedicated range of
            outdoor services under one roof.
          </p>
        </div>

        {/* 3 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-[#F5F6F0] p-8 lg:p-10 flex flex-col justify-between border-t-4 border-[#809618] hover:border-[#151515] transition-all duration-200 group"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shadow-xs border border-[#E5E7DC]">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-2xl font-black tracking-tight text-[#809618]/50 group-hover:text-[#809618] transition-colors">
                    {category.categoryNumber}
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#151515] tracking-tight mb-3">
                  {category.title}
                </h3>

                {/* Category Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {category.description}
                </p>

                {/* Clean Service List */}
                <div className="space-y-3 pt-6 border-t border-[#E5E7DC]">
                  {category.services.map((service) => (
                    <div
                      key={service}
                      onClick={() => onSelectService(service)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onSelectService(service);
                        }
                      }}
                      className="flex items-center justify-between p-2.5 -mx-2.5 hover:bg-white transition-colors cursor-pointer group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-none bg-[#809618]/15 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#809618] transition-colors">
                          <Check className="w-3 h-3 text-[#809618] group-hover/item:text-white transition-colors" />
                        </div>
                        <span className="text-sm font-semibold text-[#151515] group-hover/item:text-[#809618] transition-colors">
                          {service}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-gray-400 group-hover/item:text-[#809618] transition-colors opacity-0 group-hover/item:opacity-100 flex items-center gap-1">
                        <span>Quote</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-8 mt-6">
                <button
                  onClick={() => onSelectService(category.services[0])}
                  className="w-full py-3 px-4 bg-white border border-[#E5E7DC] hover:border-[#809618] hover:bg-[#809618] hover:text-white text-[#151515] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire About {category.title.split(" ")[0]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
