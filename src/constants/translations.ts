export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    services: string;
    prototypes: string;
    calculator: string;
    about: string;
    faq: string;
    contact: string;
    quoteBtn: string;
    mobileQuoteBtn: string;
  };
  hero: {
    kickerCiv: string;
    kickerBess: string;
    kickerAi: string;
    headline: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statPaving: string;
    statPavingLabel: string;
    statBess: string;
    statBessLabel: string;
    statLed: string;
    statLedLabel: string;
    statAi: string;
    statAiLabel: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    divisionBadge: string;
    certifiedPill: string;
    menuHeader: string;
    activeCount: string;
    techSheetBtn: string;
    tryPrototypeBtn: string;
    requestProposalBtn: string;
    modalTitle: string;
    modalEngineeringScope: string;
    modalSpecializedOffers: string;
    modalSpecs: string;
    modalStandards: string;
    modalAvailable: string;
    modalClose: string;
    modalQuote: string;
    recommendedFor: string;
  };
  mockups: {
    badge: string;
    title: string;
    subtitle: string;
    webTab: string;
    mobileTab: string;
    antiGodTitle: string;
    antiGodDesc: string;
    ssdTitle: string;
    ssdDesc: string;
    uFirstTitle: string;
    uFirstDesc: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    tabSolar: string;
    tabLighting: string;
    tabPaving: string;
    solarInputLabel: string;
    solarNoteTitle: string;
    solarNoteDesc: string;
    solarYearSavingsLabel: string;
    solarMonthSavingsText: string;
    solarRoiLabel: string;
    solarRoiDetail: string;
    solarCo2Label: string;
    solarCo2Detail: string;
    solarCta: string;
    lightingInputLabel: string;
    lightingNoteTitle: string;
    lightingNoteDesc: string;
    lightingYearSavingsLabel: string;
    lightingKwhSavedText: string;
    lightingLifeLabel: string;
    lightingLifeDetail: string;
    lightingFailuresLabel: string;
    lightingFailuresDetail: string;
    lightingCta: string;
    pavingInputLabel: string;
    pavingNoteTitle: string;
    pavingNoteDesc: string;
    pavingDurationLabel: string;
    pavingSpeedText: string;
    pavingLifeLabel: string;
    pavingLifeDetail: string;
    pavingIriLabel: string;
    pavingIriDetail: string;
    pavingCta: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    sqaTitle: string;
    sqaDesc: string;
    ssdTitle: string;
    ssdDesc: string;
    caseStudiesTitle: string;
    caseStudiesSubtitle: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterSolar: string;
    filterPaving: string;
    filterLed: string;
    noResults: string;
    noResultsSub: string;
    stillHaveQuestions: string;
    contactEngineeringBtn: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    attentionTitle: string;
    emailTitle: string;
    addressTitle: string;
    addressVal: string;
    ssdProtocolTitle: string;
    ssdProtocolDesc: string;
    successTitle: string;
    successDesc: string;
    folioLabel: string;
    sendAnotherBtn: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    serviceLabel: string;
    serviceDefault: string;
    serviceSolar: string;
    serviceBess: string;
    servicePaving: string;
    serviceLed: string;
    serviceAi: string;
    budgetLabel: string;
    budgetBasic: string;
    budgetMedium: string;
    budgetLarge: string;
    budgetMega: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    termsNotice: string;
  };
  footer: {
    companyDesc: string;
    isoPill: string;
    divisionsTitle: string;
    solutionsTitle: string;
    attentionTitle: string;
    hours: string;
    biddingLink: string;
    rights: string;
    privacy: string;
    policy: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  es: {
    nav: {
      services: 'Servicios',
      prototypes: 'Prototipos UI/UX',
      calculator: 'Calculadora ROI',
      about: 'Nosotros',
      faq: 'Preguntas Frecuentes',
      contact: 'Contacto',
      quoteBtn: 'Cotizar',
      mobileQuoteBtn: 'Solicitar Cotización',
    },
    hero: {
      kickerCiv: 'Ingeniería Vial RoadBuilder®',
      kickerBess: 'Almacenamiento BESS & Solar',
      kickerAi: 'Inteligencia Artificial',
      headline: 'Infraestructura de Vanguardia y Soluciones Energéticas Inteligentes',
      tagline: 'Diseñamos y ejecutamos proyectos de paneles solares, almacenamiento BESS, infraestructura vial ecológica RoadBuilder® (TSW, TSB, SX), alumbrado LED inteligente y prototipos digitales con IA.',
      ctaPrimary: 'Cotizar Proyecto Ejecutivo',
      ctaSecondary: 'Explorar Menú de Servicios',
      statPaving: '+450,000',
      statPavingLabel: 'Suelos & Caminos RoadBuilder® (m²)',
      statBess: '+18.5',
      statBessLabel: 'Almacenamiento BESS & Solar',
      statLed: '+35,000',
      statLedLabel: 'Luminarias LED Smart City',
      statAi: '98.7%',
      statAiLabel: 'Precisión Algorítmica IA',
    },
    services: {
      badge: 'Catálogo Corporativo Oficial',
      title: 'Oferta Integral de Servicios Especializados',
      subtitle: 'Explore el menú de soluciones de alta ingeniería para cada una de nuestras divisiones estratégicas. Seleccione una disciplina para consultar especificaciones, alcance y casos de uso.',
      divisionBadge: 'División Estratégica',
      certifiedPill: 'Ingeniería Certificada GID',
      menuHeader: 'Menú de Soluciones Especializadas en',
      activeCount: '4 especialidades activas',
      techSheetBtn: 'Ver Ficha Técnica Completa',
      tryPrototypeBtn: 'Probar Prototipo Digital',
      requestProposalBtn: 'Solicitar Propuesta',
      modalTitle: 'Ficha Técnica Oficial',
      modalEngineeringScope: 'Alcance de Ingeniería y Suministro',
      modalSpecializedOffers: 'Soluciones Especializadas en el Catálogo',
      modalSpecs: 'Parámetros y Especificaciones de Calidad',
      modalStandards: 'Certificaciones y Cumplimiento Normativo',
      modalAvailable: 'Disponibilidad de atención inmediata y levantamiento técnico en sitio.',
      modalClose: 'Cerrar',
      modalQuote: 'Cotizar',
      recommendedFor: 'Recomendado para',
    },
    mockups: {
      badge: 'Diseño UI/UX · Prototipos de Negocios Digitales',
      title: 'Simulador de Interfaces y Telemetría Digital',
      subtitle: 'En Grupo Integral no solo construimos infraestructura física; desarrollamos gemelos digitales, aplicaciones móviles y plataformas web interactivas para supervisar y operar cada proyecto en tiempo real.',
      webTab: 'Web Dashboard 4K',
      mobileTab: 'App Móvil Nativa (iOS / Android)',
      antiGodTitle: 'Arquitectura Anti-God-Object',
      antiGodDesc: 'Microservicios desacoplados y componentes frontend atómicos para escalabilidad sin deuda técnica.',
      ssdTitle: 'SSD ISO/IEC 27034',
      ssdDesc: 'Seguridad integrada desde el diseño: neutralización de entradas, encriptación y telemetría auditada.',
      uFirstTitle: 'U-First Usability & SQA',
      uFirstDesc: 'Garantía de calidad de software (SQA), interfaces accesibles y pruebas continuas de usabilidad.',
    },
    calculator: {
      badge: 'Herramienta de Estimación Rápida · U-First',
      title: 'Calculadora de Retorno de Inversión (ROI)',
      subtitle: 'Calcule al instante el potencial de ahorro energético, amortización y reducción de huella de carbono para sus instalaciones con los estándares de Grupo Integral.',
      tabSolar: 'Paneles Solares & BESS',
      tabLighting: 'Iluminación LED',
      tabPaving: 'Pavimentación Vial',
      solarInputLabel: 'Gasto Mensual Promedio en CFE (Tarifa DAC o GDMTH):',
      solarNoteTitle: 'Cálculo con Módulos TOPCon Tier-1 & BESS:',
      solarNoteDesc: 'Considera mitigación de picos en horas punta (Peak Shaving), inversores de alta eficiencia y deducción fiscal al 100% el primer año (LISR Art. 34 Fracc. XIII).',
      solarYearSavingsLabel: 'Ahorro Estimado al Año',
      solarMonthSavingsText: 'Ahorro mensual de',
      solarRoiLabel: 'Retorno de Inversión',
      solarRoiDetail: '22 años de energía libre',
      solarCo2Label: 'Huella Evitada',
      solarCo2Detail: 'CO2 neutralizado',
      solarCta: 'Solicitar Propuesta para este Ahorro',
      lightingInputLabel: 'Cantidad de Luminarias o Postes a Modernizar:',
      lightingNoteTitle: 'Tecnología LED con Telegestión:',
      lightingNoteDesc: 'Sustituye lámparas de vapor de sodio de 250W por luminarias LED viales de 70W-90W con atenuación inteligente nocturna.',
      lightingYearSavingsLabel: 'Ahorro Eléctrico Anual Proyectado',
      lightingKwhSavedText: 'MWh ahorrados cada año',
      lightingLifeLabel: 'Vida Útil Garantizada',
      lightingLifeDetail: 'L70B10 certificada',
      lightingFailuresLabel: 'Disminución Fallas',
      lightingFailuresDetail: 'Telegestión remota',
      lightingCta: 'Solicitar Proyecto de Iluminación',
      pavingInputLabel: 'Área de Suelo o Camino a Estabilizar/Pavimentar (m²):',
      pavingNoteTitle: 'Tecnología Ecológica RoadBuilder® (TSW / TSB / SX):',
      pavingNoteDesc: 'Formulación no petrolera desarrollada en UT Austin. Ahorro de hasta 40% vs. asfalto/cemento tradicional, 0% emisiones VOC y reapertura al tráfico en pocas horas.',
      pavingDurationLabel: 'Rendimiento de Aplicación Diario',
      pavingSpeedText: 'Rendimiento de hasta 15,000 m²/día con motoconformadora y pipa convencional',
      pavingLifeLabel: 'Durabilidad & Preservación',
      pavingLifeDetail: 'Matriz flexible e impermeable',
      pavingIriLabel: 'Emisiones Solventes y VOCs',
      pavingIriDetail: '0% No Petrolero',
      pavingCta: 'Cotizar Soluciones RoadBuilder®',
    },
    about: {
      badge: 'Sobre Grupo Integral',
      title: 'Infraestructura, Energía y Soluciones Digitales de Alto Rendimiento',
      description: 'En Grupo Integral de Soluciones y Desarrollo S.A. de C.V. (GID), combinamos la distribución y aplicación oficial de soluciones ecológicas RoadBuilder® (SX Systems) para infraestructura vial con proyectos solares y BESS de vanguardia, impulsados por Inteligencia Artificial y telegestión IoT.',
      sqaTitle: 'SQA (Software & Engineering QA)',
      sqaDesc: 'Pruebas exhaustivas, aseguramiento metrológico de obra y estándares continuos de calidad en cada entregable.',
      ssdTitle: 'SSD ISO/IEC 27034',
      ssdDesc: 'Seguridad por diseño implementada en nuestras arquitecturas cloud, telemetría IoT y aplicaciones cliente.',
      caseStudiesTitle: 'Casos de Éxito y Resultados Verificados',
      caseStudiesSubtitle: 'Proyectos ejecutados con métricas cuantitativas comprobadas y cumplimiento normativo integral.',
    },
    faq: {
      badge: 'Resolución Técnica & Consultoría',
      title: 'Preguntas Frecuentes de Ingeniería',
      subtitle: 'Respuestas detalladas a las dudas técnicas más habituales sobre sistemas fotovoltaicos, almacenamiento BESS, soluciones viales RoadBuilder® y luminarias LED inteligentes.',
      searchPlaceholder: 'Buscar tema técnico (ej. RoadBuilder, TSW, TSB, SX Prime, CFE, BESS)...',
      filterAll: 'Todas las Preguntas',
      filterSolar: 'Paneles Solares & BESS',
      filterPaving: 'Pavimentación RoadBuilder®',
      filterLed: 'Iluminación LED',
      noResults: 'No se encontraron preguntas para este término de búsqueda.',
      noResultsSub: 'Intente con palabras clave como RoadBuilder, TSW, TSB, SX Fog, asfalto, CFE o retorno.',
      stillHaveQuestions: '¿Tiene un requerimiento técnico específico o licitación en puerta?',
      contactEngineeringBtn: 'Consultar con Dirección Técnica',
    },
    contact: {
      badge: 'Contacto Directo & Licitaciones',
      title: 'Inicie su Proyecto con Grupo Integral',
      subtitle: 'Solicite una propuesta técnica o presupuesto ejecutivo. Nuestro equipo de ingenieros certificados realizará el análisis preliminar de factibilidad sin costo.',
      attentionTitle: 'Atención a Proyectos',
      emailTitle: 'Correo Electrónico Corporativo',
      addressTitle: 'Oficinas Centrales',
      addressVal: 'Insurgentes Sur, Col. Del Valle, Ciudad de México, CDMX',
      ssdProtocolTitle: 'Protocolo de Confidencialidad y SSD (ISO/IEC 27034)',
      ssdProtocolDesc: 'Toda la información técnica y de costos compartida está protegida bajo estricto acuerdo de no divulgación (NDA). Los datos son transmitidos con cifrado punto a punto TLS 1.3 y tratados conforme a la Ley Federal de Protección de Datos Personales (LFPDPPP).',
      successTitle: 'Solicitud Registrada con Éxito',
      successDesc: 'Su requerimiento técnico ha sido asignado al área de ingeniería correspondiente. Un especialista de Grupo Integral le contactará en menos de 24 horas hábiles.',
      folioLabel: 'Folio de Seguimiento SQA / SSD:',
      sendAnotherBtn: 'Enviar Otra Solicitud',
      nameLabel: 'Nombre Completo *',
      namePlaceholder: 'Ing. Carlos Morales',
      emailLabel: 'Correo Corporativo *',
      emailPlaceholder: 'cmorales@empresa.com',
      phoneLabel: 'Teléfono / WhatsApp *',
      phonePlaceholder: '55 1234 5678',
      companyLabel: 'Empresa / Dependencia',
      companyPlaceholder: 'Consorcio Industrial S.A.',
      serviceLabel: 'Oferta de Servicio de Interés *',
      serviceDefault: 'Requerimiento Integral Multidisciplinario',
      serviceSolar: 'Paneles Solares (Autoconsumo CFE)',
      serviceBess: 'Sistemas de Almacenamiento BESS (Peak Shaving & Respaldo)',
      servicePaving: 'Pavimentación Ecológica RoadBuilder® (TSW, TSB, SX Prime, SX Fog)',
      serviceLed: 'Iluminación LED Inteligente & Telegestión',
      serviceAi: 'Inteligencia Artificial & Prototipos UI/UX',
      budgetLabel: 'Rango de Inversión Estimado',
      budgetBasic: '$200,000 - $800,000 MXN',
      budgetMedium: '$800,000 - $3,500,000 MXN',
      budgetLarge: '$3,500,000 - $15,000,000 MXN',
      budgetMega: '+ $15,000,000 MXN (Licitación / Gran Proyecto)',
      detailsLabel: 'Detalles del Proyecto o Especificaciones Requeridas *',
      detailsPlaceholder: 'Describa el alcance: ubicación geográfica, superficie en m², capacidad fotovoltaica requerida o cronograma estimado...',
      submitBtn: 'Enviar Requerimiento Técnico',
      submittingBtn: 'Validando Cifrado & Enviando...',
      termsNotice: 'Al enviar este formulario acepta los términos de protección y confidencialidad ISO/IEC 27034.',
    },
    footer: {
      companyDesc: 'Grupo Integral de Soluciones y Desarrollo S.A. de C.V. — Soluciones integrales en energía fotovoltaica, almacenamiento BESS, obras de pavimentación vial, iluminación LED Smart City e Inteligencia Artificial aplicada.',
      isoPill: 'Alineación ISO/IEC 27034 & SQA Quality Engineering',
      divisionsTitle: 'Divisiones de Negocio',
      solutionsTitle: 'Innovación UI/UX & Datos',
      attentionTitle: 'Atención',
      hours: 'Lun - Vie: 8:30 a 18:30',
      biddingLink: 'Solicitar Licitación',
      rights: 'Todos los derechos reservados.',
      privacy: 'Aviso de Privacidad',
      policy: 'Política SQA y Seguridad SSD',
    },
  },
  en: {
    nav: {
      services: 'Services',
      prototypes: 'UI/UX Prototypes',
      calculator: 'ROI Calculator',
      about: 'About Us',
      faq: 'FAQ',
      contact: 'Contact',
      quoteBtn: 'Get Quote',
      mobileQuoteBtn: 'Request a Quote',
    },
    hero: {
      kickerCiv: 'RoadBuilder® Paving Systems',
      kickerBess: 'BESS Storage & Solar',
      kickerAi: 'Artificial Intelligence',
      headline: 'Next-Generation Infrastructure and Smart Energy Solutions',
      tagline: 'We engineer and execute eco-friendly RoadBuilder® roadway infrastructure (TSW, TSB, SX), industrial BESS energy storage, smart LED lighting networks, and digital prototypes powered by AI.',
      ctaPrimary: 'Request Project Quote',
      ctaSecondary: 'Explore Services Menu',
      statPaving: '+450,000',
      statPavingLabel: 'RoadBuilder® Soils & Paving (m²)',
      statBess: '+18.5',
      statBessLabel: 'BESS Storage & Solar (MWh)',
      statLed: '+35,000',
      statLedLabel: 'Smart City LED Luminaires',
      statAi: '98.7%',
      statAiLabel: 'AI Algorithmic Accuracy',
    },
    services: {
      badge: 'Official Corporate Catalog',
      title: 'Comprehensive Specialized Services Offering',
      subtitle: 'Explore our high-engineering solutions menu across each of our strategic business units. Select a discipline to inspect technical specs, scope of work, and use cases.',
      divisionBadge: 'Strategic Division',
      certifiedPill: 'GID Certified Engineering',
      menuHeader: 'Specialized Solutions Catalog for',
      activeCount: '4 active specialties',
      techSheetBtn: 'View Full Technical Sheet',
      tryPrototypeBtn: 'Test Digital Prototype',
      requestProposalBtn: 'Request Proposal',
      modalTitle: 'Official Technical Sheet',
      modalEngineeringScope: 'Engineering & Supply Scope',
      modalSpecializedOffers: 'Specialized Catalog Solutions',
      modalSpecs: 'Parameters & Quality Specifications',
      modalStandards: 'Certifications & Regulatory Compliance',
      modalAvailable: 'Immediate response availability and on-site engineering survey.',
      modalClose: 'Close',
      modalQuote: 'Quote',
      recommendedFor: 'Recommended for',
    },
    mockups: {
      badge: 'UI/UX Design · Digital Business Prototypes',
      title: 'Interface Simulator & Real-Time Telemetry',
      subtitle: 'At Grupo Integral, we not only deliver physical infrastructure; we build digital twins, mobile apps, and interactive web platforms to monitor and manage each project in real time.',
      webTab: '4K Web Dashboard',
      mobileTab: 'Native Mobile App (iOS / Android)',
      antiGodTitle: 'Anti-God-Object Architecture',
      antiGodDesc: 'Decoupled microservices and atomic frontend components for scalability without technical debt.',
      ssdTitle: 'SSD ISO/IEC 27034',
      ssdDesc: 'Security built-in by design: input neutralization, encryption, and audited telemetry.',
      uFirstTitle: 'U-First Usability & SQA',
      uFirstDesc: 'Software Quality Assurance (SQA), accessible interfaces, and continuous usability benchmarks.',
    },
    calculator: {
      badge: 'Quick Estimation Tool · U-First',
      title: 'Return on Investment (ROI) Calculator',
      subtitle: 'Instantly calculate energy cost savings, payback amortization periods, and carbon footprint reduction for your facilities with Grupo Integral standards.',
      tabSolar: 'Solar Panels & BESS',
      tabLighting: 'Smart LED Lighting',
      tabPaving: 'Road & Paving Works',
      solarInputLabel: 'Average Monthly Utility Bill (DAC or Commercial Tariff):',
      solarNoteTitle: 'Calculated with TOPCon Tier-1 Modules & BESS:',
      solarNoteDesc: 'Includes peak shaving during high-demand hours, high-efficiency inverters, and 100% tax depreciation benefits.',
      solarYearSavingsLabel: 'Estimated Annual Savings',
      solarMonthSavingsText: 'Monthly savings of',
      solarRoiLabel: 'Payback Period',
      solarRoiDetail: '22 years of free energy',
      solarCo2Label: 'Avoided Footprint',
      solarCo2Detail: 'Neutralized CO2',
      solarCta: 'Request Proposal for this Savings Target',
      lightingInputLabel: 'Number of Fixtures / Light Poles to Modernize:',
      lightingNoteTitle: 'Smart LED Technology with Remote Telemetry:',
      lightingNoteDesc: 'Replaces 250W high-pressure sodium lamps with 70W-90W roadway LEDs featuring intelligent midnight dimming.',
      lightingYearSavingsLabel: 'Projected Annual Electricity Savings',
      lightingKwhSavedText: 'MWh saved annually',
      lightingLifeLabel: 'Guaranteed Lifespan',
      lightingLifeDetail: 'L70B10 certified',
      lightingFailuresLabel: 'Failure Rate Reduction',
      lightingFailuresDetail: 'IoT remote monitoring',
      lightingCta: 'Request Lighting Project Audit',
      pavingInputLabel: 'Roadway or Soil Area to Stabilize/Pave (m²):',
      pavingNoteTitle: 'RoadBuilder® Eco-Technologies (TSW / TSB / SX):',
      pavingNoteDesc: 'Non-petroleum polymer formulation developed at UT Austin. Up to 40% cost savings versus traditional hot-mix asphalt or cement, 0% VOC emissions, and traffic reopening within hours.',
      pavingDurationLabel: 'Daily Application Output',
      pavingSpeedText: 'Application throughput up to 15,000 m²/day using standard graders and water trucks',
      pavingLifeLabel: 'Durability & Preservation',
      pavingLifeDetail: 'Water-impermeable flexible matrix',
      pavingIriLabel: 'VOC & Solvent Emissions',
      pavingIriDetail: '0% Non-Petroleum',
      pavingCta: 'Quote RoadBuilder® Solutions',
    },
    about: {
      badge: 'About Grupo Integral',
      title: 'High-Performance Infrastructure, Clean Energy & Digital Solutions',
      description: 'At Grupo Integral de Soluciones y Desarrollo S.A. de C.V. (GID), we are certified distributors and applicators of RoadBuilder® (SX Systems) eco-friendly roadway solutions alongside commercial solar and BESS energy storage, backed by cutting-edge Artificial Intelligence and IoT telemetry.',
      sqaTitle: 'SQA (Software & Engineering QA)',
      sqaDesc: 'Exhaustive verification, metrological field quality assurance, and strict delivery standards across every milestone.',
      ssdTitle: 'SSD ISO/IEC 27034',
      ssdDesc: 'Security by Design baked into our cloud architectures, IoT telemetry bridges, and client applications.',
      caseStudiesTitle: 'Case Studies & Verified Outcomes',
      caseStudiesSubtitle: 'Proven infrastructure projects executed with quantified performance metrics and comprehensive regulatory compliance.',
    },
    faq: {
      badge: 'Technical Advisory & Engineering FAQ',
      title: 'Frequently Asked Engineering Questions',
      subtitle: 'In-depth answers to common technical inquiries regarding solar PV systems, BESS battery storage, RoadBuilder® eco-paving, and smart LED street lighting networks.',
      searchPlaceholder: 'Search technical inquiry (e.g. RoadBuilder, TSW, TSB, SX Prime, CFE, BESS)...',
      filterAll: 'All Inquiries',
      filterSolar: 'Solar Panels & BESS',
      filterPaving: 'RoadBuilder® Paving',
      filterLed: 'Smart LED Lighting',
      noResults: 'No questions matched your search criteria.',
      noResultsSub: 'Try searching for keywords such as RoadBuilder, TSW, TSB, SX Fog, asphalt, CFE or payback.',
      stillHaveQuestions: 'Have a custom engineering inquiry or upcoming RFP?',
      contactEngineeringBtn: 'Speak with Senior Engineering Staff',
    },
    contact: {
      badge: 'Direct Contact & RFPs',
      title: 'Start Your Project with Grupo Integral',
      subtitle: 'Request a technical proposal or executive quote. Our certified engineering staff will perform a preliminary feasibility assessment at no cost.',
      attentionTitle: 'Project Inquiries',
      emailTitle: 'Corporate Email',
      addressTitle: 'Corporate Headquarters',
      addressVal: 'Insurgentes Sur, Col. Del Valle, Mexico City, CDMX',
      ssdProtocolTitle: 'Confidentiality & SSD Protocol (ISO/IEC 27034)',
      ssdProtocolDesc: 'All technical and costing data shared is protected under a strict Non-Disclosure Agreement (NDA). Data is transmitted with end-to-end TLS 1.3 encryption and handled in full compliance with Privacy and Data Protection regulations.',
      successTitle: 'Inquiry Successfully Submitted',
      successDesc: 'Your engineering request has been routed to the relevant technical division. A Grupo Integral specialist will contact you within 24 business hours.',
      folioLabel: 'SQA / SSD Tracking Reference:',
      sendAnotherBtn: 'Submit Another Inquiry',
      nameLabel: 'Full Name *',
      namePlaceholder: 'Eng. Charles Miller',
      emailLabel: 'Corporate Email *',
      emailPlaceholder: 'cmiller@company.com',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+1 (555) 234-5678',
      companyLabel: 'Company / Organization',
      companyPlaceholder: 'Industrial Logistics Corp.',
      serviceLabel: 'Service Area of Interest *',
      serviceDefault: 'Comprehensive Multi-Disciplinary Scope',
      serviceSolar: 'Solar PV Systems (Self-Consumption)',
      serviceBess: 'BESS Energy Storage Systems (Peak Shaving & Backup)',
      servicePaving: 'RoadBuilder® Eco-Paving (TSW, TSB, SX Prime, SX Fog)',
      serviceLed: 'Smart City LED Lighting & Telemanagement',
      serviceAi: 'Artificial Intelligence & UI/UX Prototypes',
      budgetLabel: 'Estimated Investment Range',
      budgetBasic: '$10,000 - $40,000 USD',
      budgetMedium: '$40,000 - $180,000 USD',
      budgetLarge: '$180,000 - $750,000 USD',
      budgetMega: '+ $750,000 USD (RFP / Major Infrastructure)',
      detailsLabel: 'Project Details & Technical Specifications *',
      detailsPlaceholder: 'Describe the scope: geographic location, surface in m², required PV/BESS capacity, or target timeline...',
      submitBtn: 'Submit Technical Request',
      submittingBtn: 'Encrypting & Dispatching...',
      termsNotice: 'By submitting this request, you agree to our ISO/IEC 27034 confidentiality and data protection standards.',
    },
    footer: {
      companyDesc: 'Grupo Integral de Soluciones y Desarrollo S.A. de C.V. — Comprehensive solutions in solar photovoltaics, BESS energy storage, highway paving, Smart City LED lighting, and applied Artificial Intelligence.',
      isoPill: 'ISO/IEC 27034 Alignment & SQA Quality Engineering',
      divisionsTitle: 'Business Units',
      solutionsTitle: 'UI/UX Innovation & Data',
      attentionTitle: 'Operations',
      hours: 'Mon - Fri: 8:30 AM to 6:30 PM',
      biddingLink: 'Request Public Tender / RFP',
      rights: 'All rights reserved.',
      privacy: 'Privacy Notice',
      policy: 'SQA & SSD Security Policy',
    },
  },
};
