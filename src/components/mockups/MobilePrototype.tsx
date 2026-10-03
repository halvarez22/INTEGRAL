import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Sun, 
  BatteryCharging, 
  Lightbulb, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Sparkles,
  Wifi,
  Sliders,
  AlertCircle
} from 'lucide-react';

export const MobilePrototype: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'solar' | 'paving' | 'lighting' | 'ai'>('solar');
  const [solarDimmer, setSolarDimmer] = useState<number>(85);
  const [lightLevel, setLightLevel] = useState<number>(65);
  const [aiScanActive, setAiScanActive] = useState<boolean>(true);

  const isEn = language === 'en';

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] aspect-[9/18.5] bg-slate-950 rounded-[44px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-4 border-slate-700/60 dark:border-slate-800 transition-all duration-300">
      {/* Outer Phone Frame Accents */}
      <div className="absolute -left-[7px] top-24 w-[3px] h-9 bg-slate-600 rounded-l" />
      <div className="absolute -left-[7px] top-36 w-[3px] h-9 bg-slate-600 rounded-l" />
      <div className="absolute -right-[7px] top-28 w-[3px] h-14 bg-slate-600 rounded-r" />

      {/* Screen Container */}
      <div className="relative w-full h-full bg-[#0a1220] rounded-[34px] overflow-hidden flex flex-col text-slate-100 select-none border border-white/5 font-sans">
        
        {/* Dynamic Island / Top Bezel */}
        <div className="relative pt-2.5 px-6 flex items-center justify-between text-[11px] font-medium text-slate-400 z-20">
          <span>12:45</span>
          <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[8px] text-slate-400 font-mono">GID-OS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3 h-3 text-slate-300" />
            <span className="text-[10px] font-semibold text-emerald-400">100%</span>
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xs">
              G
            </div>
            <div>
              <p className="text-[11px] font-bold text-white tracking-wide">GID Mobile Cloud</p>
              <p className="text-[9px] text-slate-400">{isEn ? 'Business Telemetry' : 'Telemetría de Negocio'}</p>
            </div>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
            {isEn ? 'Online' : 'En línea'}
          </span>
        </div>

        {/* Screen Content Body */}
        <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-3 scrollbar-none">
          
          {/* TAB 1: SOLAR & BESS */}
          {activeTab === 'solar' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/15 via-blue-900/20 to-transparent border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-amber-400">{isEn ? 'Bajío Solar Plant' : 'Planta Solar Bajío'}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">ID: PS-048</span>
                </div>
                
                <div className="mt-2.5 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-white font-mono">412.8</span>
                    <span className="text-xs text-amber-400 ml-1 font-semibold">kW</span>
                    <p className="text-[10px] text-slate-400">{isEn ? 'Instant Power' : 'Potencia Instantánea'}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-emerald-400 font-mono">+94.2%</span>
                    <p className="text-[10px] text-slate-400">{isEn ? 'Grid Efficiency' : 'Eficiencia CFE'}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-2.5 space-y-1">
                  <div className="flex justify-between text-[9px] text-slate-300">
                    <span>{isEn ? 'Daily: 2,490 kWh' : 'Generación diaria: 2,490 kWh'}</span>
                    <span>{isEn ? 'Target: 2,600 kWh' : 'Meta: 2,600 kWh'}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>

              {/* BESS Battery Storage Card */}
              <div className="p-3 rounded-2xl bg-slate-900/70 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <BatteryCharging className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">BESS LiFePO4</p>
                    <p className="text-[10px] text-slate-400">{isEn ? '120 kWh Storage' : 'Almacenamiento 120 kWh'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-emerald-400 font-mono">92%</span>
                  <p className="text-[9px] text-slate-400">{isEn ? 'Charging' : 'Cargando'}</p>
                </div>
              </div>

              {/* Inverter Status */}
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-900/50 border border-white/5">
                  <p className="text-[9px] text-slate-400">{isEn ? 'Inverter 1' : 'Inversor 1'}</p>
                  <p className="text-xs font-bold text-emerald-400">99.2% {isEn ? 'Optimal' : 'Óptimo'}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/50 border border-white/5">
                  <p className="text-[9px] text-slate-400">{isEn ? 'Inverter 2' : 'Inversor 2'}</p>
                  <p className="text-xs font-bold text-emerald-400">98.8% {isEn ? 'Optimal' : 'Óptimo'}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PAVING & ROAD QUALITY */}
          {activeTab === 'paving' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-900/20 via-slate-900 to-transparent border border-blue-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400">{isEn ? 'Highway Tranche SLP-QRO' : 'Tramo Autopista SLP-QRO'}</span>
                  <span className="text-[10px] text-slate-400">KM 42+500</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-white font-mono">1.38</span>
                    <span className="text-xs text-blue-400 ml-1">IRI</span>
                    <p className="text-[10px] text-slate-400">{isEn ? 'Roughness Index' : 'Índice de Rugosidad'}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                    {isEn ? 'World Class' : 'Clase Mundial'}
                  </span>
                </div>
              </div>

              {/* Compaction Telemetry */}
              <div className="p-3 rounded-2xl bg-slate-900/70 border border-white/10 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-semibold">{isEn ? 'Continuous Compaction' : 'Compactación Continua'}</span>
                  <span className="text-emerald-400 font-mono font-bold">98.4% Proctor</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '98%' }} />
                </div>
                <p className="text-[9px] text-slate-400">
                  {isEn ? 'Dynapac paver with digital laser telemetry' : 'Extendedora Dynapac con telemetría láser digital'}
                </p>
              </div>

              {/* Surface Status */}
              <div className="p-2.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">{isEn ? 'Asphalt Temp' : 'Temp Mezcla'}</span>
                <span className="font-mono text-amber-400 font-bold">148 °C</span>
              </div>
            </div>
          )}

          {/* TAB 3: SMART LIGHTING LED */}
          {activeTab === 'lighting' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-900/20 via-slate-900 to-transparent border border-emerald-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">{isEn ? 'North Circuit LED' : 'Circuito Norte LED'}</span>
                  <span className="text-[10px] text-slate-400">128 {isEn ? 'poles' : 'postes'}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-white font-mono">{lightLevel}%</span>
                    <p className="text-[10px] text-slate-400">{isEn ? 'Current Dimming' : 'Flujo Luminoso Actual'}</p>
                  </div>
                  <span className="text-xs text-emerald-400 font-bold font-mono">-72% kWh</span>
                </div>
              </div>

              {/* Interactive Dimmer Slider */}
              <div className="p-3 rounded-2xl bg-slate-900/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-300">{isEn ? 'Remote Telemanagement' : 'Atenuación Remota'}</span>
                  <span className="text-emerald-400 font-mono">{lightLevel}%</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="100" 
                  value={lightLevel} 
                  onChange={(e) => setLightLevel(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[9px] text-slate-500">
                  <span>{isEn ? 'Eco 20%' : 'Eco 20%'}</span>
                  <span>{isEn ? 'City 65%' : 'Ciudad 65%'}</span>
                  <span>{isEn ? 'Max 100%' : 'Max 100%'}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AI DIGITAL TWIN */}
          {activeTab === 'ai' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-900/20 via-slate-900 to-transparent border border-cyan-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-bold text-cyan-400">GID Neural Vision</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">v4.2</span>
                </div>
                <p className="mt-2 text-xs text-white font-medium">
                  {isEn ? 'Automated Pavement Scanner' : 'Escaneo Inteligente de Pavimentos'}
                </p>
                <p className="text-[10px] text-slate-400">
                  {isEn ? 'PCI Computer Vision 4K Model' : 'Modelo de visión artificial PCI en tiempo real'}
                </p>
              </div>

              {/* AI Scan Toggle */}
              <div className="p-3 rounded-2xl bg-slate-900/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">{isEn ? 'Continuous AI Telemetry' : 'Monitoreo Continuo IA'}</span>
                  <button
                    onClick={() => setAiScanActive(!aiScanActive)}
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                      aiScanActive ? 'bg-cyan-500' : 'bg-slate-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      aiScanActive ? 'translate-x-4' : 'translate-x-0'
                    }`} />
                  </button>
                </div>
                <div className="flex justify-between text-[10px] pt-1 border-t border-white/5">
                  <span className="text-slate-400">{isEn ? 'Inference Latency' : 'Latencia de inferencia'}</span>
                  <span className="font-mono text-cyan-400 font-bold">38 ms</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">{isEn ? 'Anomalies Detected' : 'Anomalías detectadas'}</span>
                  <span className="font-mono text-emerald-400 font-bold">0 {isEn ? 'Critical' : 'Críticas'}</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation Tab Bar */}
        <div className="p-2 border-t border-white/10 bg-slate-900/90 backdrop-blur-md grid grid-cols-4 gap-1 text-center">
          <button
            onClick={() => setActiveTab('solar')}
            className={`py-1 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
              activeTab === 'solar' ? 'bg-amber-500/15 text-amber-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span className="text-[8px] font-bold">Solar</span>
          </button>

          <button
            onClick={() => setActiveTab('paving')}
            className={`py-1 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
              activeTab === 'paving' ? 'bg-blue-500/15 text-blue-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span className="text-[8px] font-bold">{isEn ? 'Paving' : 'Vial'}</span>
          </button>

          <button
            onClick={() => setActiveTab('lighting')}
            className={`py-1 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
              activeTab === 'lighting' ? 'bg-emerald-500/15 text-emerald-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span className="text-[8px] font-bold">LED</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`py-1 rounded-lg flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
              activeTab === 'ai' ? 'bg-cyan-500/15 text-cyan-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="text-[8px] font-bold">AI Twin</span>
          </button>
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="pb-1.5 flex justify-center bg-slate-950">
          <div className="w-24 h-1 bg-slate-600 rounded-full" />
        </div>

      </div>
    </div>
  );
};
