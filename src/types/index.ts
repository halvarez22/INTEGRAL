export type ServiceId = 
  | 'paneles-solares' 
  | 'pavimentacion' 
  | 'almacenamiento-bess' 
  | 'iluminacion-led' 
  | 'inteligencia-artificial';

export interface ServiceSubOffer {
  id: string;
  name: string;
  description: string;
  specs: string[];
  recommendedFor: string;
}

export interface ServiceItem {
  id: ServiceId;
  name: string;
  shortName: string;
  headline: string;
  tagline: string;
  description: string;
  accentColor: string; // Tailwind hex or class
  glowColor: string;
  icon: string;
  imagePath: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  subOffers: ServiceSubOffer[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  standards: string[];
  mockupPresetId: string;
}

export type PrototypeDevice = 'mobile' | 'web';

export type PrototypeScreenId = 'solar' | 'paving' | 'lighting' | 'ai';

export interface PrototypeScreen {
  id: PrototypeScreenId;
  title: string;
  subtitle: string;
  serviceId: ServiceId;
  badge: string;
  kpis: {
    label: string;
    value: string;
    unit?: string;
    trend?: string;
    status: 'good' | 'optimal' | 'warning';
  }[];
}

export interface RoiCalculationResult {
  monthlySavingsMxn: number;
  annualSavingsMxn: number;
  paybackPeriodYears: number;
  co2ReductionTonsPerYear: number;
  roiPercentage: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: ServiceId | 'general';
  estimatedBudget: string;
  message: string;
  honeypot: string; // SSD anti-spam bot trap
}

export interface FormValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
  general?: string;
}

export type FaqCategory = 'all' | 'solar' | 'paving' | 'lighting';

export interface FaqItem {
  id: string;
  category: 'solar' | 'paving' | 'lighting';
  question: string;
  answer: string;
  tags: string[];
}
