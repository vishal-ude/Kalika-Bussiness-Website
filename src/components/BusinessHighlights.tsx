import React from 'react';
import { HIGHLIGHTS } from '../data/content';
import { ShieldCheck, Layers, Factory, Users } from 'lucide-react';

export const BusinessHighlights: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Factory':
        return <Factory className="w-6 h-6" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  return (
    <section className="w-full bg-surface-container-low px-margin-mobile lg:px-margin-desktop py-space-xl border-y border-outline-variant/20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.id}
            className="group bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm hover:-translate-y-1 transition-all duration-300 border border-outline-variant/15 hover:border-outline-variant/40"
          >
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-tertiary-fixed group-hover:bg-on-tertiary-container group-hover:text-white transition-colors">
              {getIcon(item.iconName)}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
              {item.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {item.description}
            </p>
            <span className="font-code-spec text-code-spec text-tertiary-fixed-dim uppercase tracking-wider mt-auto pt-space-xs">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

