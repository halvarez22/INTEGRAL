import React from 'react';
import { Logo } from '../common/Logo';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, ChevronUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Wordmark & Company Info */}
          <div className="md:col-span-4 space-y-4">
            <Logo variant="horizontal" />
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              {t.footer.companyDesc}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-amber-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.footer.isoPill}</span>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.divisionsTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Solar Panels & Self-Consumption' : 'Paneles Solares & Autoconsumo'}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'BESS Energy Storage Systems' : 'Sistemas de Almacenamiento BESS'}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Asphalt & Concrete Paving' : 'Pavimentación Asfáltica & Concreto'}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Smart City LED Roadway Lighting' : 'Iluminación LED & Telegestión Vial'}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Artificial Intelligence & Digital Twins' : 'Inteligencia Artificial & Gemelos Digitales'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Soluciones Digitales */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.solutionsTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#mockups" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Digital Business Prototype Simulator' : 'Simulador de Prototipos de Negocios'}
                </a>
              </li>
              <li>
                <a href="#mockups" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? '4K Operations Web Dashboard' : 'Web Dashboard 4K de Control'}
                </a>
              </li>
              <li>
                <a href="#mockups" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'IoT Mobile Telemetry App' : 'App Móvil de Telemetría IoT'}
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Energy Savings & ROI Calculator' : 'Calculadora de Ahorro y Retorno'}
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Quantified Case Studies & Proof' : 'Casos de Éxito Cuantificados'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  {language === 'en' ? 'Technical FAQ & Standards' : 'Preguntas Frecuentes Técnicas'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Rápido */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.attentionTitle}
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-white font-mono font-bold">+52 (55) 4169-8200</p>
              <p className="text-slate-400">{t.footer.hours}</p>
              <a 
                href="#contacto" 
                className="inline-flex items-center gap-1 text-amber-400 font-semibold hover:underline pt-2"
              >
                <span>{t.footer.biddingLink}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Grupo Integral de Soluciones y Desarrollo S.A. de C.V. {t.footer.rights}
          </p>

          <div className="flex items-center gap-6">
            <a href="#contacto" className="text-slate-500 hover:text-slate-300 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#nosotros" className="text-slate-500 hover:text-slate-300 transition-colors">
              {t.footer.policy}
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
