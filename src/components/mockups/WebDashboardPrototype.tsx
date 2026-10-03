import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Sun, 
  Lightbulb, 
  Cpu, 
  Layers, 
  RefreshCw, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

export const WebDashboardPrototype: React.FC = () => {
  const { language } = useLanguage();
  const [activeView, setActiveView] = useState<'overview' | 'solar' | 'paving' | 'lighting' | 'ai'>('overview');
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('7d');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [generationOffset, setGenerationOffset] = useState<number>(0);

  const isEn = language === 'en';

  const triggerSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setGenerationOffset((prev) => (prev === 0 ? 14.5 : 0));
      setIsSimulating(false);
    }, 600);
  };

  return (
    <div className="w-full bg-slate-950 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-slate-800 overflow-hidden font-sans text-slate-100 text-xs">
      
      {/* Browser Chrome Header */}
      <div className="bg-slate-900 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline-block">
            GID Enterprise Operations Portal v3.4
          </span>
        </div>

        {/* URL Bar */}
        <div className="flex-1 max-w-md mx-3 px-3 py-1 bg-slate-950 rounded-lg border border-white/5 flex items-center justify-between text-[11px] text-slate-300 font-mono">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-emerald-400 font-bold">https://</span>
            <span className="truncate">cloud.grupointegral.com/control-tower/{activeView}</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold uppercase">
            SSD ISO-27034
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={triggerSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all disabled:opacity-50 cursor-pointer"
            title={isEn ? "Recalculate predictive telemetry" : "Recalcular algoritmos predictivos"}
          >
            <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
            <span className="hidden md:inline">{isEn ? 'Simulate Load' : 'Simular Carga'}</span>
          </button>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="flex flex-col md:flex-row min-h-[380px] bg-[#070e1a]">
        
        {/* Sidebar */}
        <div className="w-full md:w-48 bg-slate-900/60 p-3 border-r border-white/5 space-y-1 shrink-0">
          <div className="px-2 py-1 mb-2">
            <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{isEn ? 'GID Modules' : 'Módulos GID'}</p>
          </div>

          <button
            onClick={() => setActiveView('overview')}
            className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors cursor-pointer ${
              activeView === 'overview' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{isEn ? 'Control Tower' : 'Torre de Control'}</span>
          </button>

          <button
            onClick={() => setActiveView('solar')}
            className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors cursor-pointer ${
              activeView === 'solar' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Solar & BESS</span>
          </button>

          <button
            onClick={() => setActiveView('paving')}
            className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors cursor-pointer ${
              activeView === 'paving' ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30 font-bold' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isEn ? 'Paving Works' : 'Infraestructura Vial'}</span>
          </button>

          <button
            onClick={() => setActiveView('lighting')}
            className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors cursor-pointer ${
              activeView === 'lighting' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Smart City LED</span>
          </button>

          <button
            onClick={() => setActiveView('ai')}
            className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors cursor-pointer ${
              activeView === 'ai' ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 font-bold' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{isEn ? 'Digital Twins' : 'Gemelos Digitales'}</span>
          </button>

          <div className="pt-4 mt-4 border-t border-white/5 px-2">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SQA Verified ISO-9001</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-5 space-y-4 overflow-y-auto">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
            <div>
              <h4 className="text-base font-bold text-white tracking-tight">
                {activeView === 'overview' && (isEn ? 'Integrated Operations & Telemetry Center' : 'Centro Integral de Operaciones y Telemetría')}
                {activeView === 'solar' && (isEn ? 'Solar PV & BESS Storage Telemetry' : 'Telemetría de Parques Solares y Autoconsumo')}
                {activeView === 'paving' && (isEn ? 'Highway Quality & Compaction Telemetry' : 'Monitoreo de Calidad y Pavimentación Vial')}
                {activeView === 'lighting' && (isEn ? 'Metropolitan Smart LED Lighting Network' : 'Red Metropolitana de Telegestión LED')}
                {activeView === 'ai' && (isEn ? 'Predictive AI Models & Computer Vision' : 'Modelos Predictivos y Visión Computacional')}
              </h4>
              <p className="text-[11px] text-slate-400">
                {isEn ? 'Real-time MQTT telemetry synchronized via TLS 1.3 encryption' : 'Datos sincronizados en tiempo real mediante brokers MQTT con encriptación TLS 1.3'}
              </p>
            </div>

            {/* Timeframe Buttons */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/5 self-start sm:self-auto">
              <button
                onClick={() => setTimeRange('24h')}
                className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                  timeRange === '24h' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? '24 Hours' : '24 Horas'}
              </button>
              <button
                onClick={() => setTimeRange('7d')}
                className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                  timeRange === '7d' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? '7 Days' : '7 Días'}
              </button>
              <button
                onClick={() => setTimeRange('30d')}
                className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                  timeRange === '30d' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? '30 Days' : '30 Días'}
              </button>
            </div>
          </div>

          {/* KPI Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-medium uppercase">{isEn ? 'Total Active Power' : 'Potencia Total Activa'}</span>
                <Zap className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <p className="mt-1 text-lg sm:text-xl font-black text-white font-mono">
                {(1480 + generationOffset).toFixed(1)} <span className="text-xs text-amber-400 font-sans">kW</span>
              </p>
              <span className="text-[9px] text-emerald-400 font-medium">↑ +8.4% {isEn ? 'vs projected' : 'vs meta proyectada'}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-medium uppercase">{isEn ? 'Monthly Utility Savings' : 'Ahorro Mensual CFE'}</span>
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <p className="mt-1 text-lg sm:text-xl font-black text-white font-mono">
                {isEn ? '$16,200 USD' : '$284,500 MXN'}
              </p>
              <span className="text-[9px] text-emerald-400 font-medium">{isEn ? '92.4% tariff offset' : '92.4% tarifa amortizada'}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-medium uppercase">{isEn ? 'Connected Smart LEDs' : 'Nodos LED Telegestionados'}</span>
                <Lightbulb className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="mt-1 text-lg sm:text-xl font-black text-white font-mono">
                12,450 <span className="text-xs text-emerald-400 font-sans">{isEn ? 'nodes' : 'puntos'}</span>
              </p>
              <span className="text-[9px] text-emerald-400 font-medium">99.8% {isEn ? 'uptime zero-faults' : 'operatividad sin fallas'}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-[10px] font-medium uppercase">{isEn ? 'Critical Alerts' : 'Alertas Críticas'}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="mt-1 text-lg sm:text-xl font-black text-emerald-400 font-mono">
                0 {isEn ? 'Active' : 'Activas'}
              </p>
              <span className="text-[9px] text-slate-400 font-medium">{isEn ? 'All subsystems normal' : 'Todos los subsistemas en rango'}</span>
            </div>
          </div>

          {/* Interactive Simulated Chart Bar */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-xs">{isEn ? 'Solar PV vs Grid Load Curve' : 'Curva de Generación Solar vs Consumo de Red'}</p>
                <p className="text-[10px] text-slate-400">{isEn ? 'Peak demand spikes shaved by BESS storage system' : 'Picos de demanda absorbidos por el sistema BESS'}</p>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="flex items-center gap-1 text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> {isEn ? 'Solar PV' : 'Solar Directo'}
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> {isEn ? 'BESS Peak Shaving' : 'BESS Peak Shaving'}
                </span>
              </div>
            </div>

            {/* Visual Bar Graph */}
            <div className="h-28 flex items-end justify-between gap-1.5 pt-4">
              {[35, 48, 62, 78, 92, 98, 95, 88, 74, 60, 45, 30].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="w-full bg-slate-800 rounded-t h-full flex items-end overflow-hidden">
                    <div 
                      className="w-full bg-gradient-to-t from-amber-500 to-amber-300 transition-all duration-500 group-hover:brightness-110"
                      style={{ height: `${Math.min(100, h + (generationOffset ? 5 : 0))}%` }}
                    />
                  </div>
                  <span className="text-[8px] font-mono text-slate-400">
                    {i * 2}:00
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
