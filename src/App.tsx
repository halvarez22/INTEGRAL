/**
 * @license
 * Grupo Integral de Soluciones y Desarrollo S.A. de C.V.
 * Landing Page Corporativa con Arquitectura Desacoplada Anti-God-Object
 * Alineada a SSD (ISO/IEC 27034), SQA y Principios U-First
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { ServicesMenuSection } from './components/services/ServicesMenuSection';
import { MockupShowcaseSection } from './components/mockups/MockupShowcaseSection';
import { RoiCalculatorSection } from './components/calculator/RoiCalculatorSection';
import { AboutSection } from './components/about/AboutSection';
import { FaqSection } from './components/faq/FaqSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { ServiceId } from './types';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<ServiceId | 'general'>('general');
  const [quoteNote, setQuoteNote] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceId: ServiceId) => {
    setSelectedServiceForQuote(serviceId);
    scrollToSection('contacto');
  };

  const handleQuoteWithEstimate = (serviceId: ServiceId, note: string) => {
    setSelectedServiceForQuote(serviceId);
    setQuoteNote(note);
    scrollToSection('contacto');
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 dark:bg-[#070e1a] dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-amber-500/30 selection:text-amber-300 overflow-x-hidden antialiased">
          
          {/* Navigation Bar */}
          <Navbar onRequestQuote={() => scrollToSection('contacto')} />

          {/* Main Content Sections */}
          <main className="flex-1">
            {/* Hero Section */}
            <HeroSection
              onExploreServices={() => scrollToSection('servicios')}
              onRequestQuote={() => scrollToSection('contacto')}
            />

            {/* Dedicated Services Menu Section */}
            <ServicesMenuSection
              onSelectServiceForQuote={handleSelectServiceForQuote}
            />

            {/* UI/UX Digital Business Mockups Showcase */}
            <MockupShowcaseSection />

            {/* Interactive ROI Calculator */}
            <RoiCalculatorSection
              onQuoteWithEstimate={handleQuoteWithEstimate}
            />

            {/* About, Standards & Case Studies */}
            <AboutSection />

            {/* Technical FAQ Accordion */}
            <FaqSection onContactEngineering={() => scrollToSection('contacto')} />

            {/* SSD ISO/IEC 27034 Sanitized Contact & Requisition */}
            <ContactSection
              initialServiceInterest={selectedServiceForQuote}
              initialNote={quoteNote}
            />
          </main>

          {/* Footer */}
          <Footer />

        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
