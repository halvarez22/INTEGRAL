import React, { useState } from 'react';
import { getServicesData } from '../../constants/servicesData';
import { ServiceId, ServiceItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceDetailModal } from './ServiceDetailModal';
import { 
  Sun, 
  Layers, 
  BatteryCharging,
  Lightbulb, 
  Cpu, 
  ArrowRight, 
  FileText, 
  Sparkles,
  Smartphone
} from 'lucide-react';

interface ServicesMenuSectionProps {
  onSelectServiceForQuote: (serviceId: ServiceId) => void;
}

export const ServicesMenuSection: React.FC<ServicesMenuSectionProps> = ({
  onSelectServiceForQuote,
}) => {
  const { language, t } = useLanguage();
  const servicesList = getServicesData(language);
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('paneles-solares');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const currentService = servicesList.find((s) => s.id === selectedServiceId) || servicesList[0];

  const getServiceIcon = (id: ServiceId, className = 'w-5 h-5') => {
    switch (id) {
      case 'paneles-solares':
        return <Sun className={className} />;
      case 'pavimentacion':
        return <Layers className={className} />;
      case 'almacenamiento-bess':
        return <BatteryCharging className={className} />;
      case 'iluminacion-led':
        return <Lightbulb className={className} />;
      case 'inteligencia-artificial':
        return <Cpu className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-transparent">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-500 tracking-widest uppercase mb-3">
            <span>{t.services.badge}</span>
            <span className="text-slate-400">·</span>
            <span>GID Grupo Integral</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans text-balance">
            {t.services.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {t.services.subtitle}
          </p>
        </div>

        {/* The Requested Service Menu Navigation Hub */}
        <div className="mb-10">
          <div className="flex items-center justify-start sm:justify-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 shadow-sm overflow-x-auto scrollbar-none max-w-4xl mx-auto">
            {servicesList.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold scale-[1.02]'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                  aria-pressed={isSelected}
                >
                  {getServiceIcon(service.id, isSelected ? 'w-4 h-4 text-slate-950' : 'w-4 h-4 text-amber-500')}
                  <span>{service.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Service Detailed Showcase Card (Glass Morphing Effect) */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/90 dark:border-white/10 transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Column: Photographic Asset with Glass Scrim */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-white/10 bg-slate-900">
                <img
                  src={currentService.imagePath}
                  alt={currentService.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glass Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="glass-pill px-3 py-1 rounded-full text-xs font-bold text-amber-600 dark:text-amber-400">
                    {t.services.certifiedPill}
                  </span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-sm tracking-wide">
                    {currentService.tagline}
                  </p>
                </div>
              </div>

              {/* Metrics Ribbon */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {currentService.metrics.slice(0, 2).map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xs">
                    <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                      {m.label}
                    </p>
                    <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-amber-400 font-mono mt-0.5">
                      {m.value}
                    </p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400 truncate mt-0.5">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Column: Dedicated Sub-Menu for this Service */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  <span>{t.services.divisionBadge}</span>
                  <span>·</span>
                  <span>{currentService.shortName}</span>
                </div>

                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {currentService.headline}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {currentService.description}
                </p>
              </div>

              {/* The Sub-Menu for this Service Offering */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                    {t.services.menuHeader} {currentService.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {t.services.activeCount}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.subOffers.map((subOffer) => (
                    <div
                      key={subOffer.id}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-amber-500/60 shadow-xs hover:shadow-md transition-all group/sub"
                    >
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <div>
                          <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover/sub:text-amber-600 dark:group-hover/sub:text-amber-400 transition-colors">
                            {subOffer.name}
                          </h5>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                            {subOffer.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveModalService(currentService)}
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-transparent border border-slate-300 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-500/50 text-xs font-bold text-slate-800 dark:text-white hover:bg-amber-500/5 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span>{t.services.techSheetBtn}</span>
                </button>

                <a
                  href="#mockups"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-xs font-bold text-slate-800 dark:text-white border border-slate-200 dark:border-transparent transition-all flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{t.services.tryPrototypeBtn}</span>
                </a>

                <button
                  onClick={() => onSelectServiceForQuote(currentService.id)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all ml-auto cursor-pointer"
                >
                  <span>{t.services.requestProposalBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Modal deep dive */}
        <ServiceDetailModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onSelectForQuote={(id) => onSelectServiceForQuote(id as ServiceId)}
        />

      </div>
    </section>
  );
};
