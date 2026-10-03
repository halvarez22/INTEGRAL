import { FaqItem } from '../types';
import { Language } from './translations';

const FAQ_DATA_ES: FaqItem[] = [
  // SOLAR & BESS
  {
    id: 'solar-cfe-interconexion',
    category: 'solar',
    question: '¿Cómo se gestiona el proceso de interconexión con CFE y cuánto tiempo toma?',
    answer: 'Grupo Integral gestiona el trámite llave en mano ante CFE Distribución y CENACE conforme al Manual de Interconexión G0100-04. Incluye la memoria de cálculo, planos eléctricos bajo NOM-001-SEDE-2012, estudio de impacto en red (para media tensión) y la instalación del medidor bidireccional digital homologado. Para sistemas comerciales e industriales en media tensión (GDMTH/GDMTO), el proceso toma habitualmente entre 4 y 8 semanas hábiles.',
    tags: ['CFE', 'Interconexión', 'Medición Neta', 'GDMTH'],
  },
  {
    id: 'solar-beneficios-fiscales',
    category: 'solar',
    question: '¿Qué beneficios fiscales y deducción acelerada aplican para sistemas solares y BESS?',
    answer: 'Conforme al Artículo 34, Fracción XIII de la Ley del Impuesto sobre la Renta (LISR), las inversiones en maquinaria y equipo para la generación de energía proveniente de fuentes renovables o sistemas de cogeneración de electricidad eficiente son 100% deducibles de impuestos en el primer año fiscal. Además, las empresas pueden acreditar el 100% del IVA correspondiente al proyecto, lo que reduce drásticamente el período real de amortización a entre 2.5 y 3.5 años.',
    tags: ['LISR Art. 34', 'Deducción 100%', 'Finanzas', 'ROI'],
  },
  {
    id: 'solar-bess-peak-shaving',
    category: 'solar',
    question: '¿Cómo opera el almacenamiento BESS para reducir la tarifa CFE (Peak Shaving)?',
    answer: 'Los sistemas de baterías BESS (Battery Energy Storage Systems) de grado industrial se cargan durante las horas base o con excedentes de generación solar (cuando la energía es más económica o gratuita) y se descargan automáticamente mediante un sistema inteligente EMS durante las horas punta de CFE (habitualmente entre 18:00 y 22:00 hrs). Esto aplana la curva de demanda máxima registrada, mitigando hasta un 40% el cargo por capacidad y potencia en la factura eléctrica.',
    tags: ['BESS', 'Peak Shaving', 'Almacenamiento', 'LiFePO4'],
  },
  {
    id: 'solar-compatibilidad-techumbres',
    category: 'solar',
    question: '¿Qué requerimientos estructurales y de fijación exigen las cubiertas industriales?',
    answer: 'Realizamos un levantamiento topográfico y estructural para verificar que la cubierta soporte la carga viva y muerta adicional (~15 a 20 kg/m²). En techumbres de lámina engargolada tipo KR-18 o KR-24 utilizamos abrazaderas de aluminio anodizado no invasivas (Standing Seam Clamps) que sujetan los módulos sin perforar la lámina, garantizando cero filtraciones pluviales y resistencia a vientos de hasta 180 km/h bajo estándares ASCE 7.',
    tags: ['Estructuras', 'KR-18', 'ASCE 7', 'Cubiertas'],
  },

  // PAVIMENTACIÓN & ROADBUILDER
  {
    id: 'paving-roadbuilder-tsw-estabilizacion',
    category: 'paving',
    question: '¿Cómo funciona la estabilización de suelos y control de polvo con Top-Seal White (TSW)?',
    answer: 'Top-Seal White (TSW) es una emulsión polimérica líquida no petrolera desarrollada en The University of Texas at Austin. Se diluye en agua y se aplica con equipo convencional (pipa y motoconformadora) para compactar y cementar las partículas del suelo o subrasante. Incrementa drásticamente la capacidad de soporte (CBR), crea una matriz sólida y flexible impermeable al agua, y elimina el 100% de emisiones de polvo sin generar grietas por retracción como ocurre con la cal o el cemento.',
    tags: ['RoadBuilder', 'TSW', 'Estabilización', 'Control de Polvo', 'UT Austin'],
  },
  {
    id: 'paving-roadbuilder-tsb-superficie',
    category: 'paving',
    question: '¿Qué ventajas ofrece Top-Seal Black (TSB) frente a una carpeta asfáltica tradicional?',
    answer: 'Top-Seal Black (TSB) genera una superficie de rodadura continua tipo asfalto de color negro profundo sin emplear productos petroleros ni requerir plantas de asfalto en caliente. Se aplica en frío (~0.5 L/m²), eliminando riesgos de quemaduras para las cuadrillas y emisiones de humos tóxicos o VOCs. Es la solución ideal para sellar bases estabilizadas con TSW y para proyectos de reciclado en frío en sitio (CIR/FDR), proporcionando excelente adherencia, menor distancia de frenado y una apertura al tráfico en cuestión de pocas horas.',
    tags: ['RoadBuilder', 'TSB', 'Superficie de Rodadura', 'Cero Emisiones', 'Reciclado en Frío'],
  },
  {
    id: 'paving-roadbuilder-sx-prime-mc30',
    category: 'paving',
    question: '¿Por qué sustituir el asfalto cortado MC-30 por la imprimación ecológica SX Prime (TP)?',
    answer: 'El asfalto rebajado tradicional MC-30 contiene altos porcentajes de solventes volátiles derivados del petróleo (queroseno) que emiten compuestos orgánicos volátiles (VOCs) dañinos y presentan elevados tiempos de evaporación. SX Prime (TP) es una imprimación líquida ecológica no petrolera con penetración ultra-profunda en bases granulares y subrasantes, que fija finos, sella la base y promueve una adherencia superior con la capa de rodadura en una fracción del tiempo de espera y con 0% emisiones nocivas.',
    tags: ['RoadBuilder', 'SX Prime', 'Reemplazo MC-30', 'Imprimación', 'Sin VOCs'],
  },
  {
    id: 'paving-roadbuilder-sx-fog-preservacion',
    category: 'paving',
    question: '¿En qué consiste el tratamiento de preservación y rejuvenecimiento vial con SX Fog (TF)?',
    answer: 'SX Fog (TF) es un tratamiento preventivo tipo fog seal de bajísimo costo formulado para extender la vida útil de pavimentos asfálticos y riegos de sello existentes. Aplicado en una tasa ligera de aprox. 0.45 L/m² (0.1 gal/yd²), penetra y sella microfisuras capilares, frena la oxidación química y el envejecimiento causado por la radiación solar, y devuelve una tonalidad negra uniforme y renovada, posponiendo reencarpetados costosos por varios años.',
    tags: ['RoadBuilder', 'SX Fog', 'Fog Seal', 'Preservación', 'Rejuvenecimiento'],
  },

  // ILUMINACIÓN LED
  {
    id: 'led-ahorro-energetico',
    category: 'lighting',
    question: '¿Cuánto ahorro energético real genera la sustitución de vapor de sodio por LED vial?',
    answer: 'La sustitución de luminarias tradicionales de vapor de sodio de alta presión (HPS de 150W-250W) por luminarias LED viales de última generación (50W-90W) genera un ahorro directo comprobado de entre 65% y 75% en el consumo de kWh. Adicionalmente, las luminarias LED cuentan con factor de potencia superior a 0.95, eliminando penalizaciones por reactivos, y ofrecen una eficacia luminosa certificada de 160 a 185 lúmenes por Watt.',
    tags: ['Ahorro', 'Eficiencia', 'Lúmenes/Watt', 'Retorno'],
  },
  {
    id: 'led-telegestion-zhaga',
    category: 'lighting',
    question: '¿Cómo opera el sistema de telegestión inteligente (Zhaga / NEMA 7-pins) en Smart Cities?',
    answer: 'Cada luminaria se equipa con un receptáculo normalizado Zhaga Book 18 o NEMA de 7 pines donde se monta un nodo de comunicación inalámbrica (LoRaWAN o NB-IoT). Los nodos se comunican de forma bidireccional con nuestra plataforma cloud centralizada, permitiendo programar encendidos astronómicos, regular intensidades al 50% en horas de bajo tráfico, recibir alertas inmediatas de luminarias apagadas y medir el consumo eléctrico en tiempo real sobre un mapa GIS.',
    tags: ['Zhaga', 'Smart City', 'LoRaWAN', 'GIS'],
  },
  {
    id: 'led-vida-util-garantias',
    category: 'lighting',
    question: '¿Cuál es la vida útil certificada y la protección contra sobretensiones y clima?',
    answer: 'Nuestras luminarias cuentan con certificación IES LM-80 y TM-21 que avalan una vida útil L70B10 de más de 100,000 horas (más de 22 años a 12 horas diarias de operación). Tienen carcasa de aluminio inyectado a presión ADC12 con sellado IP66 contra polvo y lluvia torrencial, resistencia a impactos IK09/IK10, y supresores de sobretensión integrados de 10 kV / 10 kA para proteger los drivers electrónicos contra descargas atmosféricas e inestabilidad de red.',
    tags: ['IP66', 'IK09', '100,000 hrs', 'Supresor 10kV'],
  },
];

const FAQ_DATA_EN: FaqItem[] = [
  // SOLAR & BESS
  {
    id: 'solar-cfe-interconexion',
    category: 'solar',
    question: 'How is the grid interconnection process with utility CFE handled and how long does it take?',
    answer: 'Grupo Integral handles the complete turnkey interconnection filing before utility CFE and CENACE pursuant to interconnection code G0100-04. This includes electrical calculations, certified blueprints under NOM-001-SEDE-2012 / NEC standards, grid impact studies (for medium voltage), and formal installation of the bidirectional revenue meter. For commercial and industrial installations connected at medium voltage, the full permitting process typically takes between 4 and 8 business weeks.',
    tags: ['Utility Grid', 'Interconnection', 'Net Metering', 'Commercial Tariff'],
  },
  {
    id: 'solar-beneficios-fiscales',
    category: 'solar',
    question: 'What tax incentives and accelerated depreciation apply to solar and BESS installations?',
    answer: 'Pursuant to Article 34, Fraction XIII of the Mexican Income Tax Law (LISR) and international green asset codes, capital investments in renewable energy generation machinery, solar PV equipment, and efficient BESS storage are 100% tax-deductible in the first fiscal year. Furthermore, corporations can credit 100% of project VAT, which drastically shortens actual investment amortization down to 2.5 to 3.5 years.',
    tags: ['Tax Incentives', '100% Deduction', 'ROI', 'CapEx'],
  },
  {
    id: 'solar-bess-peak-shaving',
    category: 'solar',
    question: 'How do BESS battery storage systems operate to reduce power bills (Peak Shaving)?',
    answer: 'Industrial-grade Battery Energy Storage Systems (BESS) charge during base hours when electricity is cheapest or from excess on-site solar generation, then automatically discharge via an intelligent EMS platform during expensive grid peak hours (typically 6:00 PM to 10:00 PM). This flattens maximum measured demand peaks, mitigating up to 40% of power and capacity surcharges on utility bills.',
    tags: ['BESS', 'Peak Shaving', 'Energy Storage', 'LiFePO4'],
  },
  {
    id: 'solar-compatibilidad-techumbres',
    category: 'solar',
    question: 'What structural roof specifications are required for commercial and industrial plants?',
    answer: 'We carry out full structural and topographic assessments to ensure the roof easily supports the additional dead and live load (~15 to 20 kg/m²). For standing-seam industrial metal roofs (KR-18 / KR-24), we deploy non-penetrating anodized aluminum standing-seam clamps that secure the racking without roof penetrations, ensuring zero water leaks and hurricane-rated wind resistance up to 180 km/h under ASCE 7 structural standards.',
    tags: ['Structural', 'Standing Seam', 'ASCE 7', 'Industrial Rooftop'],
  },

  // PAVING
  {
    id: 'paving-asfalto-vs-concreto',
    category: 'paving',
    question: 'What is the technical difference between hot-mix asphalt and MR-45 hydraulic concrete?',
    answer: 'Hot-mix asphalt is a flexible pavement structure engineered with stone aggregates and polymer-modified asphalt binder (PG 76-22); it provides superior ride smoothness, fast traffic reopening (4 to 8 hours), and a 12 to 15-year lifecycle with scheduled surface care. MR-45 hydraulic concrete is a rigid pavement formulation designed for heavy flexural loads (>45 kg/cm²), reinforced with load transfer dowel bars and structural macrofibers; it is built for continuous heavy freight traffic (ESAL >10 million) with a service lifespan exceeding 25 to 30 years.',
    tags: ['Asphalt', 'MR-45', 'Concrete', 'AASHTO'],
  },
  {
    id: 'paving-tiempos-curado',
    category: 'paving',
    question: 'What are the paving execution, curing times, and roadway traffic reopening schedules?',
    answer: 'For hot-mix asphalt, continuous laying with our Vögele pavers and Dynapac vibratory rollers allows traffic reopening on the very same day once the mat cools below 50°C (usually 4 to 6 hours after compaction). For standard hydraulic concrete, curing takes 7 to 14 days to attain 80%-100% design flexural strength; alternatively, we offer Fast-Track admixtures that enable traffic reopening in 24 to 48 hours for critical facility access.',
    tags: ['Curing', 'Fast-Track', 'Traffic Reopening', 'Paver Fleet'],
  },
  {
    id: 'paving-pruebas-calidad',
    category: 'paving',
    question: 'What laboratory quality assurance standards and field compaction testing are conducted?',
    answer: 'Every paving project is supervised by certified quality laboratories under SCT and ASTM standards: Marshall stability and flow testing, air void analysis (VTM), continuous field compaction verification via nuclear or electromagnetic gauges (ensuring 98% Modified Proctor density), aggregate grading, and laser profilometer International Roughness Index certification (IRI < 1.6 m/km).',
    tags: ['Highway Standards', 'Laboratory', 'IRI', 'Proctor Density'],
  },

  // LED LIGHTING
  {
    id: 'led-ahorro-energetico',
    category: 'lighting',
    question: 'How much actual energy savings is achieved by transitioning from sodium vapor to street LEDs?',
    answer: 'Replacing conventional high-pressure sodium street lamps (150W-250W HPS) with high-efficiency roadway LEDs (50W-90W) delivers certified direct electricity reductions between 65% and 75% in kWh consumption. Furthermore, our roadway fixtures achieve a power factor >0.95, eliminating reactive energy utility penalties, while providing certified luminous efficacy of 160 to 185 lumens per Watt.',
    tags: ['Energy Savings', 'Efficiency', 'Lumens/Watt', 'Payback'],
  },
  {
    id: 'led-telegestion-zhaga',
    category: 'lighting',
    question: 'How does intelligent Smart City telemanagement operate (Zhaga / NEMA 7-pins)?',
    answer: 'Each roadway fixture is fitted with a standardized Zhaga Book 18 or 7-pin NEMA socket hosting a wireless IoT communication node (LoRaWAN or cellular NB-IoT). Nodes communicate bidirectionally with our central cloud platform, allowing automated astronomical dusk-to-dawn switching, midnight scheduled dimming to 50% during low traffic hours, instant failure alerts, and metered electrical usage displayed on an interactive GIS map.',
    tags: ['Zhaga', 'Smart City', 'LoRaWAN', 'GIS Mapping'],
  },
  {
    id: 'led-vida-util-garantias',
    category: 'lighting',
    question: 'What is the certified operating lifespan and weather protection rating for exterior fixtures?',
    answer: 'Our roadway fixtures are verified under IES LM-80 and TM-21 standards with a certified L70B10 lifespan exceeding 100,000 hours (more than 22 years at 12 operating hours/day). They feature die-cast ADC12 aluminum housings with IP66 dust and rain tightness, IK09/IK10 impact resistance, and built-in 10 kV / 10 kA surge suppressors to safeguard electronic drivers against lightning strikes and electrical grid instability.',
    tags: ['IP66', 'IK09', '100,000 hrs', 'Surge Suppressor'],
  },
];

export const getFaqData = (lang: Language): FaqItem[] => {
  return lang === 'en' ? FAQ_DATA_EN : FAQ_DATA_ES;
};

export const FAQ_DATA: FaqItem[] = FAQ_DATA_ES;
