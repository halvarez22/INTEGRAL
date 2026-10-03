import React from 'react';

interface LogoProps {
  variant?: 'compact' | 'horizontal' | 'full';
  className?: string;
  showServicesIcons?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  showServicesIcons = false,
}) => {
  // Vector reproduction of the Grupo Integral (GID) monogram
  const Monogram = ({ size = 44 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="Grupo Integral GID Monograma"
    >
      <defs>
        {/* Navy metallic gradient */}
        <linearGradient id="gidNavyGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F3865" />
          <stop offset="50%" stopColor="#0B2545" />
          <stop offset="100%" stopColor="#051427" />
        </linearGradient>

        {/* Golden amber metallic gradient */}
        <linearGradient id="gidGoldGrad" x1="60" y1="10" x2="60" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5BE38" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B38E22" />
        </linearGradient>

        {/* Silver slate gradient for 3D depth */}
        <linearGradient id="gidSlateGrad" x1="0" y1="60" x2="120" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4A5568" />
          <stop offset="100%" stopColor="#2D3748" />
        </linearGradient>
      </defs>

      {/* Left 'G' arc curve */}
      <path
        d="M 52 24 C 30 24 16 38 16 60 C 16 82 30 96 52 96 C 58 96 64 94 68 91 L 68 76 C 64 78 59 79 53 79 C 39 79 32 70 32 60 C 32 50 39 41 53 41 C 58 41 62 42 66 45 L 75 32 C 69 27 61 24 52 24 Z"
        fill="url(#gidNavyGrad)"
      />

      {/* Center '1' / 'I' Golden Spire */}
      <path
        d="M 54 28 L 66 12 L 66 76 L 54 76 Z"
        fill="url(#gidGoldGrad)"
      />

      {/* Right 'D' loop arc */}
      <path
        d="M 68 24 L 84 24 C 98 24 108 38 108 60 C 108 82 98 96 84 96 L 68 96 L 68 79 L 83 79 C 91 79 93 71 93 60 C 93 49 91 41 83 41 L 68 41 Z"
        fill="url(#gidNavyGrad)"
      />

      {/* Lower sleek dynamic swoosh shadow */}
      <path
        d="M 68 84 C 84 84 98 88 104 96 C 96 98 80 100 68 98 Z"
        fill="url(#gidSlateGrad)"
        opacity="0.6"
      />
    </svg>
  );

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <Monogram size={36} />
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-[0.25em] text-amber-500 uppercase leading-none">
            GRUPO
          </span>
          <span className="text-base font-extrabold tracking-wider text-slate-900 dark:text-white leading-tight font-sans">
            INTEGR<span className="text-amber-500">A</span>L
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <Monogram size={44} />
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="h-px w-3 bg-amber-500/70" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-amber-500 dark:text-amber-400 uppercase">
              GRUPO
            </span>
            <span className="h-px w-3 bg-amber-500/70" />
          </div>
          <span className="text-xl font-black tracking-widest text-slate-900 dark:text-white font-sans uppercase">
            INTEGR<span className="text-amber-500">A</span>L
          </span>
          <span className="text-[9px] font-medium tracking-[0.18em] text-slate-500 dark:text-slate-400 uppercase -mt-0.5">
            Soluciones y Desarrollo
          </span>
        </div>
      </div>
    );
  }

  // Full variant (Hero or About)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Monogram size={72} />

      <div className="mt-3 flex items-center justify-center gap-3 w-full max-w-[280px]">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500 to-amber-500" />
        <span className="text-xs font-bold tracking-[0.35em] text-amber-500 dark:text-amber-400 uppercase">
          GRUPO
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-500 to-amber-500" />
      </div>

      <h1 className="mt-1 text-3xl md:text-4xl font-black tracking-[0.18em] text-slate-900 dark:text-white uppercase font-sans">
        INTEGR<span className="text-amber-500">A</span>L
      </h1>

      <p className="mt-1 text-xs md:text-sm font-semibold tracking-[0.25em] text-slate-600 dark:text-slate-300 uppercase">
        DE SOLUCIONES Y DESARROLLO
      </p>

      {showServicesIcons && (
        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 grid grid-cols-5 gap-3 md:gap-6 text-center max-w-2xl">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">Paneles Solares</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">Pavimentación</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm15 3h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-1v-4zM9 11l2-2v6m0-3h3" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">Almacenamiento BESS</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">Iluminación LED</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tight">Inteligencia Artificial</span>
          </div>
        </div>
      )}
    </div>
  );
};
