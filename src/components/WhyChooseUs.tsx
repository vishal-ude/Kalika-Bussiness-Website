import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/content';
import { Layers, Award, Factory, Headphones } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-7 h-7" />;
      case 'Award':
        return <Award className="w-7 h-7" />;
      case 'Factory':
        return <Factory className="w-7 h-7" />;
      case 'Headphones':
      default:
        return <Headphones className="w-7 h-7" />;
    }
  };

  return (
    <section id="why-us" className="w-full bg-primary-container px-margin-mobile lg:px-margin-desktop py-space-xl relative overflow-hidden">
      {/* Ambient Copper Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-on-tertiary-container/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-space-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-tertiary-fixed">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed" />
            <span>THE INDUSTRIAL EDGE</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase leading-tight">
            WHY BUILDERS CHOOSE KALIKA.
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Decades of metallurgical discipline, unified trading networks, and dependable manufacturing ensure your development milestones run on schedule and within budget.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`bg-surface-container-high/60 backdrop-blur-md p-space-lg rounded-xl flex items-start gap-space-md shadow-lg border-l-2 ${
                item.accentBorder ? 'border-on-tertiary-container' : 'border-outline-variant'
              }`}
            >
              <div className="w-14 h-14 rounded bg-surface-container flex items-center justify-center text-tertiary-fixed shrink-0 shadow-inner">
                {getIcon(item.iconName)}
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

