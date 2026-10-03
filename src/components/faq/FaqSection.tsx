import React, { useState, useMemo } from 'react';
import { getFaqData } from '../../constants/faqData';
import { useLanguage } from '../../context/LanguageContext';
import { FaqCategory } from '../../types';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sun, 
  Layers, 
  Lightbulb, 
  MessageSquare, 
  ArrowRight,
  X
} from 'lucide-react';

interface FaqSectionProps {
  onContactEngineering?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactEngineering }) => {
  const { language, t } = useLanguage();
  const allFaqs = useMemo(() => getFaqData(language), [language]);

  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    // Pre-open the first question of the primary topic for instant user engagement
    'solar-cfe-interconexion': true,
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCategoryIcon = (category: string, className = 'w-4 h-4') => {
    switch (category) {
      case 'solar':
        return <Sun className={`${className} text-amber-500`} />;
      case 'paving':
        return <Layers className={`${className} text-blue-500`} />;
      case 'lighting':
        return <Lightbulb className={`${className} text-emerald-500`} />;
      default:
        return <HelpCircle className={`${className} text-amber-500`} />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'solar':
        return t.faq.filterSolar;
      case 'paving':
        return t.faq.filterPaving;
      case 'lighting':
        return t.faq.filterLed;
      default:
        return category;
    }
  };

  // Filter by category and search term
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allFaqs.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      const inQuestion = item.question.toLowerCase().includes(query);
      const inAnswer = item.answer.toLowerCase().includes(query);
      const inTags = item.tags.some((tag) => tag.toLowerCase().includes(query));

      return inQuestion || inAnswer || inTags;
    });
  }, [allFaqs, activeCategory, searchQuery]);

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-transparent border-t border-slate-200/90 dark:border-white/5 transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans text-balance">
            {t.faq.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed text-balance">
            {t.faq.subtitle}
          </p>

          {/* Search Bar Input */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.faq.searchPlaceholder}
                className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold scale-[1.02]'
                  : 'bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              {t.faq.filterAll}
            </button>

            <button
              onClick={() => setActiveCategory('solar')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'solar'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold scale-[1.02]'
                  : 'bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              <Sun className={`w-3.5 h-3.5 ${activeCategory === 'solar' ? 'text-slate-950' : 'text-amber-500'}`} />
              <span>{t.faq.filterSolar}</span>
            </button>

            <button
              onClick={() => setActiveCategory('paving')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'paving'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold scale-[1.02]'
                  : 'bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              <Layers className={`w-3.5 h-3.5 ${activeCategory === 'paving' ? 'text-slate-950' : 'text-blue-500'}`} />
              <span>{t.faq.filterPaving}</span>
            </button>

            <button
              onClick={() => setActiveCategory('lighting')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'lighting'
                  ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                  : 'bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              <Lightbulb className={`w-3.5 h-3.5 ${activeCategory === 'lighting' ? 'text-slate-950' : 'text-emerald-500'}`} />
              <span>{t.faq.filterLed}</span>
            </button>
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = !!openFaqIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'glass-card border-amber-500/50 shadow-md dark:border-amber-500/40'
                      : 'bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15'
                  }`}
                >
                  {/* Accordion Question Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-4 sm:p-5 flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        {getCategoryIcon(faq.category, 'w-4 h-4')}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
                            {getCategoryLabel(faq.category)}
                          </span>
                        </div>
                        <h3 className={`text-sm sm:text-base font-bold transition-colors ${
                          isOpen ? 'text-amber-600 dark:text-amber-400' : 'text-slate-900 dark:text-white'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen 
                        ? 'rotate-180 bg-amber-500 text-slate-950 font-bold' 
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div 
                      id={`faq-answer-${faq.id}`}
                      className="px-4 sm:px-5 pb-5 pt-1 animate-fadeIn"
                    >
                      <div className="pl-11 pr-2 space-y-3.5 border-t border-slate-100 dark:border-white/5 pt-3">
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                          {faq.answer}
                        </p>

                        {/* Keyword Technical Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {faq.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-transparent font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-10 rounded-2xl glass-card text-center space-y-3">
              <HelpCircle className="w-8 h-8 text-amber-500 mx-auto" />
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {t.faq.noResults}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                {t.faq.noResultsSub}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer shadow-sm"
              >
                {t.faq.filterAll}
              </button>
            </div>
          )}
        </div>

        {/* Bottom Callout: Technical Inquiries */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-card border border-slate-200/90 dark:border-white/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-500 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {t.faq.stillHaveQuestions}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {language === 'en' 
                  ? 'Our engineering team is ready to analyze your site survey, electrical single-line diagram, or tender specifications.'
                  : 'Nuestro equipo de ingeniería revisará su levantamiento técnico, diagrama unifilar o pliego de licitación.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onContactEngineering}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>{t.faq.contactEngineeringBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
