import { Language } from './translations';

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  service: string;
  location: string;
  headline: string;
  metrics: {
    metric: string;
    label: string;
  }[];
  challenge: string;
  solution: string;
  standardsComplied: string[];
}

const CASE_STUDIES_ES: CaseStudy[] = [
  {
    id: 'parque-industrial-solar',
    client: 'Consorcio Logístico del Bajío',
    sector: 'Manufactura y Logística',
    service: 'Paneles Solares & Almacenamiento BESS',
    location: 'Querétaro, Qro.',
    headline: 'Autoconsumo fotovoltaico de 480 kWp con reducción del 91% en factura CFE',
    metrics: [
      { metric: '$3.4M MXN', label: 'Ahorro anual en energía' },
      { metric: '3.1 Años', label: 'Periodo de retorno de inversión' },
      { metric: '520 Ton', label: 'CO2 evitadas por año' },
    ],
    challenge: 'Costos elevados en tarifa GDMTH durante horas punta y necesidad de cumplir metas corporativas ESG para clientes multinacionales.',
    solution: 'Instalación de 880 módulos bifaciales TOPCon de 585W combinados con contenedor de almacenamiento BESS LiFePO4 de 400 kWh para Peak Shaving en horario punta y cumplimiento de Código de Red 2.0.',
    standardsComplied: ['NOM-001-SEDE-2012', 'NFPA 855 (BESS)', 'Código de Red 2.0 (CRE)'],
  },
  {
    id: 'autopista-pavimentacion-calidad',
    client: 'Red Carretera Centro-Norte',
    sector: 'Infraestructura Carretera',
    service: 'Pavimentación Asfáltica & Control Digital',
    location: 'San Luis Potosí - Guanajuato',
    headline: 'Rehabilitación y tendido de 85,000 m² de carpeta asfáltica de alto desempeño',
    metrics: [
      { metric: '1.4 IRI', label: 'Índice de Rugosidad Internacional' },
      { metric: '+12 Años', label: 'Extensión de vida útil estimada' },
      { metric: '0 Incidentes', label: 'Seguridad durante 45 días de obra' },
    ],
    challenge: 'Vialidad con tránsito pesado de 14,000 vehículos/día presentando roderas profundas y fatiga estructural severa.',
    solution: 'Fresado milimétrico de 7 cm, aplicación de geomalla de refuerzo y colocación de mezcla asfáltica en caliente con polímero PG 76-22 con control láser continuo.',
    standardsComplied: ['Normativa SCT N-CMT-4', 'AASHTO M-320', 'ISO 9001:2015'],
  },
  {
    id: 'smart-city-alumbrado',
    client: 'Municipio Metropolitano',
    sector: 'Gobierno & Servicios Públicos',
    service: 'Iluminación LED Smart City & Telegestión',
    location: 'Monterrey, N.L.',
    headline: 'Modernización de 12,000 luminarias viales con telegestión IoT y ahorro del 71%',
    metrics: [
      { metric: '71.4%', label: 'Disminución de consumo eléctrico' },
      { metric: '< 15 Min', label: 'Tiempo de detección y reporte de fallas' },
      { metric: '100% LED', label: 'Cobertura vial con luz uniforme' },
    ],
    challenge: 'Red obsoleta de vapor de sodio con alto índice de fallas nocturnas, elevados costos de mantenimiento y zonas oscuras inseguras.',
    solution: 'Reemplazo con luminarias LED de 90W a 150W con óptica vial Tipo II, zócalo Zhaga y nodos de comunicación celular NB-IoT conectados a plataforma cloud central.',
    standardsComplied: ['NOM-031-ENER-2019', 'IES LM-80', 'Zhaga Book 18'],
  },
];

const CASE_STUDIES_EN: CaseStudy[] = [
  {
    id: 'parque-industrial-solar',
    client: 'Bajío Logistics Consortium',
    sector: 'Manufacturing & Logistics',
    service: 'Solar Panels & BESS Storage',
    location: 'Querétaro, Mexico',
    headline: '480 kWp Solar PV self-consumption with 91% reduction in monthly utility billing',
    metrics: [
      { metric: '$190K USD', label: 'Annual energy savings' },
      { metric: '3.1 Years', label: 'Investment payback period' },
      { metric: '520 Tons', label: 'CO2 emissions avoided/yr' },
    ],
    challenge: 'Heavy utility billing surcharges during peak hours and the requirement to satisfy ESG corporate benchmarks for global supply chain partners.',
    solution: 'Turnkey installation of 880 bifacial 585W TOPCon modules coupled with an industrial 400 kWh LiFePO4 BESS storage container for peak shaving and Grid Code compliance.',
    standardsComplied: ['NOM-001-SEDE-2012', 'NFPA 855 (BESS)', 'Grid Code 2.0 (CRE)'],
  },
  {
    id: 'autopista-pavimentacion-calidad',
    client: 'North-Central Highway Network',
    sector: 'Highway Infrastructure',
    service: 'Asphalt Paving & Digital Laser Grading',
    location: 'San Luis Potosí - Guanajuato',
    headline: 'Rehabilitation and continuous paving of 85,000 m² high-performance asphalt',
    metrics: [
      { metric: '1.4 IRI', label: 'International Roughness Index' },
      { metric: '+12 Years', label: 'Estimated pavement life extension' },
      { metric: 'Zero Incidents', label: 'Safety track record across 45 work days' },
    ],
    challenge: 'Heavy freight corridor carrying 14,000 commercial vehicles/day with severe structural fatigue and deep wheel-path rutting.',
    solution: '7 cm precision cold milling, high-modulus fiberglass reinforcement geogrid, and continuous paving with polymer-modified PG 76-22 hot asphalt.',
    standardsComplied: ['SCT Highway Standard N-CMT-4', 'AASHTO M-320', 'ISO 9001:2015'],
  },
  {
    id: 'smart-city-alumbrado',
    client: 'Metropolitan Municipality',
    sector: 'Public Sector & Smart Cities',
    service: 'Smart City LED Lighting & Telemanagement',
    location: 'Monterrey, Mexico',
    headline: 'Modernization of 12,000 roadway fixtures with IoT telemanagement and 71% savings',
    metrics: [
      { metric: '71.4%', label: 'Drop in municipal power demand' },
      { metric: '< 15 Min', label: 'Outage detection & dispatch speed' },
      { metric: '100% LED', label: 'High-uniformity roadway illumination' },
    ],
    challenge: 'Obsolete high-pressure sodium fixtures with high nocturnal failure rates, inflated maintenance overhead, and dangerous dark corridors.',
    solution: 'Replacement with 90W to 150W LED luminaires featuring Type II roadway optics, Zhaga sockets, and NB-IoT cellular nodes connected to our central cloud operations portal.',
    standardsComplied: ['NOM-031-ENER-2019', 'IES LM-80', 'Zhaga Book 18'],
  },
];

export const getCaseStudies = (lang: Language): CaseStudy[] => {
  return lang === 'en' ? CASE_STUDIES_EN : CASE_STUDIES_ES;
};

export const CASE_STUDIES: CaseStudy[] = CASE_STUDIES_ES;
