import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#servicios' },
    { label: t.nav.prototypes, href: '#mockups' },
    { label: t.nav.calculator, href: '#calculadora' },
    { label: t.nav.about, href: '#nosotros' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-md' 
          : 'bg-white/85 dark:bg-transparent backdrop-blur-md dark:backdrop-blur-none border-b border-slate-200/80 dark:border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 1 row, 3 zones */}
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#" 
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg shrink-0"
            aria-label="Grupo Integral Inicio"
          >
            <Logo variant="compact" />
          </a>

          {/* Zone 2: Clean Text Nav Links */}
          <nav 
            className="hidden md:flex items-center gap-7 text-sm font-bold text-slate-800 dark:text-slate-200"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap focus:outline-none focus-visible:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Language Switcher + Theme Toggle + Primary CTA) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher Component */}
            <LanguageSwitcher />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 hover:text-amber-600 dark:hover:text-white transition-all shadow-xs"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Primary Action */}
            <button
              onClick={onRequestQuote}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-amber-500/20 transition-all whitespace-nowrap"
            >
              <span>{t.nav.quoteBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white shadow-xs"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Glassmorphic) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#070e1a]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-4 pt-2 pb-6 space-y-3 animate-fadeIn shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-amber-500/10 hover:text-amber-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between px-3 py-2 border-t border-slate-200 dark:border-white/10">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t.nav.services === 'Services' ? 'Language' : 'Idioma'}
            </span>
            <LanguageSwitcher />
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>{t.nav.mobileQuoteBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
