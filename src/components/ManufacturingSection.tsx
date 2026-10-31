import React from 'react';
import { MANUFACTURING_STEPS, MANUFACTURING_PHOTOS } from '../data/content';
import { Binary, SlidersHorizontal, Droplets, ShieldAlert } from 'lucide-react';

export const ManufacturingSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Binary':
        return <Binary className="w-5 h-5" />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      case 'ShieldAlert':
      default:
        return <ShieldAlert className="w-5 h-5" />;
    }
  };

  return (
    <section id="manufacturing" className="w-full bg-background px-margin-mobile lg:px-margin-desktop py-space-xl">
      <div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
            <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
            <span>OUR MANUFACTURING CAPABILITIES</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase leading-tight">
            ENGINEERING QUALITY. DELIVERING RELIABILITY.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Kalika Industries operates advanced manufacturing facilities dedicated to high-specification corrugated fiber-cement building components. By utilizing continuous slurry homogenization and controlled steam curing, each panel provides uncompromised structural integrity for modern industrial installations.
          </p>
        </div>

        {/* 4-Step Production Line Visual Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {MANUFACTURING_STEPS.map((step) => {
            const isHighlight = step.step === '03';

            return (
              <div
                key={step.step}
                className={`relative bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-2 ${
                  isHighlight ? 'border-on-tertiary-container' : 'border-outline-variant/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-headline-xl text-headline-xl font-bold ${
                      isHighlight ? 'text-tertiary-fixed' : 'text-primary'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isHighlight
                        ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                        : 'bg-surface-container-high text-tertiary-fixed'
                    }`}
                  >
                    {getIcon(step.iconName)}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                  {step.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {step.description}
                </p>

                <span
                  className={`font-code-spec text-code-spec mt-auto pt-space-xs ${
                    isHighlight ? 'text-tertiary-fixed-dim' : 'text-on-surface-variant'
                  }`}
                >
                  {step.stage}
                </span>
              </div>
            );
          })}
        </div>

        {/* Facility Photographic Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {MANUFACTURING_PHOTOS.map((photo, idx) => (
            <div key={idx} className="h-64 rounded-xl overflow-hidden relative group shadow-lg border border-outline-variant/20">
              <img
                src={photo.image}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-surface-dim/40 to-transparent p-space-md flex flex-col justify-end">
                <span className="font-label-caps text-label-caps uppercase text-tertiary-fixed">
                  {photo.label}
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

