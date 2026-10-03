import React, { useState, useEffect } from 'react';
import { ContactFormData, FormValidationErrors, ServiceId } from '../../types';
import { validateContactForm, submissionRateLimiter } from '../../utils/security';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

interface ContactSectionProps {
  initialServiceInterest?: ServiceId | 'general';
  initialNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceInterest = 'general',
  initialNote = '',
}) => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: initialServiceInterest,
    estimatedBudget: 'Medio',
    message: initialNote,
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [rateLimitMessage, setRateLimitMessage] = useState<string>('');

  useEffect(() => {
    if (initialServiceInterest) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialServiceInterest }));
    }
    if (initialNote) {
      setFormData((prev) => ({ 
        ...prev, 
        message: prev.message ? `${prev.message}\n${initialNote}` : initialNote 
      }));
    }
  }, [initialServiceInterest, initialNote]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRateLimitMessage('');

    // SSD ISO/IEC 27034: Client Rate Limiting Check
    const rateCheck = submissionRateLimiter.canSubmit();
    if (!rateCheck.allowed) {
      setRateLimitMessage(
        language === 'en'
          ? `Security control: Please wait ${rateCheck.waitTimeSeconds} seconds before sending another submission.`
          : `Control de Seguridad: Por favor espere ${rateCheck.waitTimeSeconds} segundos antes de enviar una nueva solicitud.`
      );
      return;
    }

    // Comprehensive Input Validation & Sanitization
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate secure dispatch with SSD envelope
    setTimeout(() => {
      const generatedTicket = `GID-${Date.now().toString(36).toUpperCase()}`;
      setReferenceId(generatedTicket);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 850);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceInterest: 'general',
      estimatedBudget: 'Medio',
      message: '',
      honeypot: '',
    });
    setErrors({});
    setRateLimitMessage('');
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative overflow-hidden bg-slate-100/70 dark:bg-slate-950/60 border-t border-slate-200/90 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Information & Trust Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.contact.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans text-balance">
                {t.contact.title}
              </h2>

              <p className="mt-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-500 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400">{t.contact.attentionTitle}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white font-mono">+52 (55) 4169-8200</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-500 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400">{t.contact.emailTitle}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white font-mono">contacto@grupointegral.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400">{t.contact.addressTitle}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.contact.addressVal}
                  </p>
                </div>
              </div>
            </div>

            {/* SSD ISO/IEC 27034 Guarantee Notice */}
            <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400">
                <Lock className="w-3.5 h-3.5" />
                <span>{t.contact.ssdProtocolTitle}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.contact.ssdProtocolDesc}
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/90 dark:border-white/10">
              
              {isSuccess ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {t.contact.successTitle}
                  </h3>

                  <p className="text-sm text-slate-700 dark:text-slate-300 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 max-w-xs mx-auto border border-slate-200 dark:border-white/10">
                    <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">
                      {t.contact.folioLabel}
                    </p>
                    <p className="text-lg font-mono font-black text-amber-600 dark:text-amber-500 mt-0.5">
                      {referenceId}
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-xs font-bold text-slate-800 dark:text-white transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnotherBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Honeypot field (hidden from real users, traps automated bots per ISO/IEC 27034) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">No llenar este campo:</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  {rateLimitMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{rateLimitMessage}</span>
                    </div>
                  )}

                  {errors.general && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.general}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-1">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t.contact.namePlaceholder}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/60 border text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 shadow-xs ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-white/10 focus:ring-amber-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-500">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-1">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/60 border text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 shadow-xs ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-white/10 focus:ring-amber-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-1">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.phonePlaceholder}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/60 border text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 shadow-xs ${
                          errors.phone
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-white/10 focus:ring-amber-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-rose-500">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-1">
                        {t.contact.companyLabel}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service of Interest */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-1">
                        {t.contact.serviceLabel}
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                      >
                        <option value="general">{t.contact.serviceDefault}</option>
                        <option value="paneles-solares">{t.contact.serviceSolar}</option>
                        <option value="almacenamiento-bess">{t.contact.serviceBess}</option>
                        <option value="pavimentacion">{t.contact.servicePaving}</option>
                        <option value="iluminacion-led">{t.contact.serviceLed}</option>
                        <option value="inteligencia-artificial">{t.contact.serviceAi}</option>
                      </select>
                    </div>

                    {/* Estimated Budget Range */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-1">
                        {t.contact.budgetLabel}
                      </label>
                      <select
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                      >
                        <option value="Básico">{t.contact.budgetBasic}</option>
                        <option value="Medio">{t.contact.budgetMedium}</option>
                        <option value="Mayor">{t.contact.budgetLarge}</option>
                        <option value="Gran Escala">{t.contact.budgetMega}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-1">
                      {t.contact.detailsLabel}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.detailsPlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/60 border text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:ring-2 shadow-xs ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-white/10 focus:ring-amber-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>{t.contact.submittingBtn}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.contact.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-500 text-center">
                    {t.contact.termsNotice}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
