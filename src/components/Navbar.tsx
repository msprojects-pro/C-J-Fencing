import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "../data/content";

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-3 group text-left"
            aria-label="C&J Fencing Gardening Home"
          >
            <div className="w-10 h-10 bg-[#151515] flex items-center justify-center border-l-4 border-[#809618] transition-transform group-hover:scale-105">
              <span className="text-white font-extrabold text-sm tracking-tight">
                C<span className="text-[#809618]">&</span>J
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#151515] font-extrabold text-lg sm:text-xl tracking-tight leading-none group-hover:text-[#809618] transition-colors">
                C&J
              </span>
              <span className="text-[#809618] font-bold text-[10px] sm:text-xs tracking-wider uppercase leading-tight">
                Fencing & Gardening
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-[#151515] hover:text-[#809618] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#809618] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={COMPANY_INFO.phoneHref}
              className="flex items-center gap-2 text-sm font-bold text-[#151515] hover:text-[#809618] transition-colors"
              title="Call C&J Fencing Gardening"
            >
              <div className="w-7 h-7 rounded-full bg-[#F5F6F0] flex items-center justify-center text-[#809618]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2 bg-[#809618] hover:bg-[#718514] active:bg-[#627410] text-white px-5 py-2.5 text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onQuoteClick}
              className="bg-[#809618] text-white px-3.5 py-2 text-xs font-bold tracking-wide shadow-sm"
            >
              Get Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#151515] hover:text-[#809618] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#809618]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 pt-4 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3 mb-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-semibold text-[#151515] hover:text-[#809618] transition-colors py-2 border-b border-gray-50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#809618] text-xs font-bold">→</span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href={COMPANY_INFO.phoneHref}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#151515] text-white text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#809618]" />
              <span>Call {COMPANY_INFO.phoneFormatted}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#809618] text-[#151515] hover:bg-[#F5F6F0] text-sm font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#809618]" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#809618] text-white text-sm font-bold transition-colors shadow-sm"
            >
              <span>Request A Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
