import React from 'react';
import { BRAND_PARTNERS } from '../data/content';
import { Building2, Factory, Waves, Droplet, Paintbrush, Hammer } from 'lucide-react';

export const BrandPartners: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-8 h-8" />;
      case 'Factory':
        return <Factory className="w-8 h-8" />;
      case 'Waves':
        return <Waves className="w-8 h-8" />;
      case 'Droplet':
        return <Droplet className="w-8 h-8" />;
      case 'Paintbrush':
        return <Paintbrush className="w-8 h-8" />;
      case 'Hammer':
      default:
        return <Hammer className="w-8 h-8" />;
    }
  };

  return (
    <section id="brands" className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin-desktop py-space-xl">
      <div className="max-w-6xl mx-auto flex flex-col gap-space-xl text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-space-xs max-w-2xl mx-auto">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
            INDUSTRY ALLIANCES
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase">
            BRANDS & PRODUCT PARTNERS
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Associated with premier manufacturing houses and national infrastructure suppliers across India.
          </p>
        </div>

        {/* 6 Partner Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-gutter-sm">
          {BRAND_PARTNERS.map((brand) => (
            <div
              key={brand.id}
              className="bg-surface-container p-space-md rounded-xl shadow-md flex flex-col items-center justify-center gap-space-xs hover:bg-surface-container-high transition-colors border border-outline-variant/15 hover:border-outline-variant/40 group py-6"
            >
              <div className="text-tertiary-fixed group-hover:scale-110 transition-transform">
                {getIcon(brand.iconName)}
              </div>
              <span className="font-headline-md text-[18px] text-on-surface uppercase">
                {brand.title}
              </span>
              <span className="font-code-spec text-[10px] text-on-surface-variant uppercase">
                {brand.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

