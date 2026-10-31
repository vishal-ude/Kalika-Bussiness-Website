import React, { useState } from 'react';
import { ABOUT_DIVISIONS } from '../data/content';
import { Check, ShieldAlert, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeDivision, setActiveDivision] = useState<'trade' | 'mfg'>('trade');
  const current = ABOUT_DIVISIONS[activeDivision];

  return (
    <section id="about" className="w-full bg-background px-margin-mobile lg:px-margin-desktop py-space-xl">
      <div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
            <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase leading-tight">
            BUILDING TRUST THROUGH QUALITY AND COMMITMENT.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Kalika Steel Traders and Kalika Industries operate as a unified commercial and industrial enterprise, supplying India’s civil construction, infrastructure, industrial warehousing, and residential developments with structural assurance and metallurgical integrity.
          </p>
        </div>

        {/* Interactive Division Selector & Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Division Details Column */}
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            {/* Toggle Pill Control */}
            <div className="flex p-1 bg-surface-container rounded self-start border border-outline-variant/30">
              <button
                onClick={() => setActiveDivision('trade')}
                className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-all ${
                  activeDivision === 'trade'
                    ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                type="button"
              >
                Trading Division
              </button>
              <button
                onClick={() => setActiveDivision('mfg')}
                className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-all ${
                  activeDivision === 'mfg'
                    ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                type="button"
              >
                Manufacturing Division
              </button>
            </div>

            {/* Dynamic Division Content Panel */}
            <div className="bg-surface-container p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md border border-outline-variant/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-widest">
                  {current.subtitle}
                </span>
                <span className="font-code-spec text-code-spec text-on-surface-variant">
                  {current.network}
                </span>
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                {current.title}
              </h3>

              <p className="font-body-md text-body-md text-on-surface-variant">
                {current.description}
              </p>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                {current.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-surface-container-high p-space-sm rounded flex flex-col">
                    <span className="font-headline-md text-headline-md text-on-surface">
                      {metric.value}
                    </span>
                    <span className="font-code-spec text-code-spec text-on-surface-variant">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              <ul className="space-y-space-xs pt-space-xs text-body-sm font-body-sm text-secondary">
                {current.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-space-xs">
                    <Check className="w-4 h-4 text-tertiary-fixed shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architectural Blueprint Graphic Container */}
          <div className="lg:col-span-6 relative bg-surface-container-lowest p-space-lg rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[420px] border border-outline-variant/30">
            {/* Background Blueprint Grid Pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#bac8db" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#archGrid)" />
            </svg>

            {/* Blueprint Header Overlay */}
            <div className="relative z-10 flex items-center justify-between pb-space-sm border-b border-outline-variant/30">
              <div className="flex items-center gap-space-xs">
                <Cpu className="w-4 h-4 text-tertiary-fixed" />
                <span className="font-code-spec text-code-spec uppercase text-on-surface">
                  SYS ARCHITECTURE SPEC // PL-2025
                </span>
              </div>
              <span className="font-code-spec text-code-spec text-primary">SCALE 1:50 METRIC</span>
            </div>

            {/* Central Architectural Schematics */}
            <div className="relative z-10 py-space-lg flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 rounded-full border border-dashed border-tertiary-fixed flex items-center justify-center p-space-sm relative">
                <div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center text-tertiary-fixed shadow-inner">
                  <ShieldAlert className="w-12 h-12" />
                </div>
                <span className="absolute -top-2 bg-on-tertiary-container text-white px-2 py-0.5 rounded text-[10px] font-code-spec uppercase font-semibold">
                  Unified Hub
                </span>
              </div>
              <h4 className="mt-space-md font-headline-md text-headline-md text-on-surface uppercase">
                360° Construction Supply Chain
              </h4>
              <p className="font-body-sm text-body-sm text-secondary max-w-sm mt-space-xs">
                Single-window coordination linking raw mill metallurgy directly with job-site execution teams.
              </p>
            </div>

            {/* Blueprint Footer Metrics */}
            <div className="relative z-10 pt-space-sm border-t border-outline-variant/30 grid grid-cols-3 gap-space-sm text-center">
              <div>
                <span className="block font-headline-md text-headline-md text-tertiary-fixed">100%</span>
                <span className="block font-code-spec text-[11px] text-on-surface-variant uppercase">
                  Quality Assured
                </span>
              </div>
              <div>
                <span className="block font-headline-md text-headline-md text-on-surface">24/7</span>
                <span className="block font-code-spec text-[11px] text-on-surface-variant uppercase">
                  Plant Dispatch
                </span>
              </div>
              <div>
                <span className="block font-headline-md text-headline-md text-on-surface">Tier 1</span>
                <span className="block font-code-spec text-[11px] text-on-surface-variant uppercase">
                  Channel Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

