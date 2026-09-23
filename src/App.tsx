/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { OurWork } from "./components/OurWork";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MobileQuickBar } from "./components/MobileQuickBar";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("");

  const scrollToQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#151515] flex flex-col antialiased selection:bg-[#809618] selection:text-white pb-16 md:pb-0">
      {/* Sticky Header Navigation */}
      <Navbar onQuoteClick={() => scrollToQuote()} />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <Hero onQuoteClick={() => scrollToQuote()} />

        {/* 2. SERVICES SECTION */}
        <Services onSelectService={(service) => scrollToQuote(service)} />

        {/* 3. GARDEN TRANSFORMATIONS / ABOUT */}
        <About onQuoteClick={() => scrollToQuote()} />

        {/* 4. OUR WORK SECTION */}
        <OurWork onQuoteClick={() => scrollToQuote()} />

        {/* 5. CONTACT / QUOTE SECTION */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Floating Bottom Quick Action Bar for Mobile Viewports */}
      <MobileQuickBar onQuoteClick={() => scrollToQuote()} />
    </div>
  );
}
