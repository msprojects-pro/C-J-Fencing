import React from "react";
import { Phone, Mail, Share2, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "../data/content";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101010] text-gray-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/5 flex items-center justify-center border-l-4 border-[#809618]">
              <span className="text-white font-extrabold text-sm tracking-tight">
                C<span className="text-[#809618]">&</span>J
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg tracking-tight leading-none">
                C&J
              </span>
              <span className="text-[#809618] font-bold text-[10px] tracking-wider uppercase leading-tight">
                Fencing & Gardening
              </span>
            </div>
          </div>

          {/* Clean Anchor Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-wider text-gray-400" aria-label="Footer Navigation">
            <a href="#hero" className="hover:text-[#809618] transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-[#809618] transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-[#809618] transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-[#809618] transition-colors">
              Our Work
            </a>
            <a href="#contact" className="hover:text-[#809618] transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#809618]" />
          </button>
        </div>

        {/* Contact info and copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={COMPANY_INFO.phoneHref}
              className="flex items-center gap-1.5 hover:text-gray-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#809618]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.emailHref}
              className="flex items-center gap-1.5 hover:text-gray-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#809618]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={COMPANY_INFO.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-300 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#809618]" />
              <span>{COMPANY_INFO.facebookName}</span>
            </a>
          </div>

          <p>
            © {new Date().getFullYear()} C&J Fencing Gardening. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
