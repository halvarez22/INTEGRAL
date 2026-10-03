import React from 'react';
import { ServiceItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  const { t } = useLanguage();
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md transition-all animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div 
        className="relative w-full max-w-3xl glass-card rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#0B2545] via-[#0F3865] to-[#0B2545] text-white border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/15 hover:bg-white/25 text-slate-200 hover:text-white transition-colors cursor-pointer"
            aria-label={t.services.modalClose}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <span>{t.services.modalTitle}</span>
            <span>·</span>
            <span>Grupo Integral S.A. de C.V.</span>
          </div>

          <h3 id="modal-service-title" className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
            {service.name}
          </h3>
          <p className="mt-1 text-sm text-slate-200 max-w-xl">
            {service.headline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto bg-slate-50/50 dark:bg-transparent">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-amber-400 uppercase tracking-wider mb-2">
              {t.services.modalEngineeringScope}
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {service.description}
            </p>
          </div>

          {/* Sub-Offerings Grid */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-amber-400 uppercase tracking-wider mb-3">
              {t.services.modalSpecializedOffers}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.subOffers.map((sub) => (
                <div key={sub.id} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xs">
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">{sub.name}</h5>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{sub.description}</p>
                  <p className="mt-2 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                    {t.services.recommendedFor}: {sub.recommendedFor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Table */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-amber-400 uppercase tracking-wider mb-3">
              {t.services.modalSpecs}
            </h4>
            <div className="rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden divide-y divide-slate-200 dark:divide-white/5 shadow-xs">
              {service.technicalSpecs.map((spec, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 text-xs bg-white dark:bg-slate-900/30">
                  <span className="font-semibold text-slate-800 dark:text-slate-300">{spec.label}</span>
                  <span className="font-mono text-slate-950 dark:text-amber-300 mt-0.5 sm:mt-0 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Normative & Standards */}
          <div className="p-4 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.services.modalStandards}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.standards.map((std, i) => (
                <span key={i} className="text-xs text-slate-800 dark:text-slate-300 font-semibold bg-white dark:bg-white/5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10 shadow-2xs">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-950/80 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {t.services.modalAvailable}
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              {t.services.modalClose}
            </button>
            <button
              onClick={() => {
                onSelectForQuote(service.id);
                onClose();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold tracking-wide uppercase shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{t.services.modalQuote} {service.shortName}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
