import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { FileText, MessageSquare } from 'lucide-react';

interface CtaSectionProps {
  onOpenRfq: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenRfq }) => {
  return (
    <section id="cta" className="w-full bg-surface-container-low px-margin-mobile lg:px-margin-desktop py-space-xl">
      <div className="max-w-6xl mx-auto bg-primary-container rounded-2xl p-space-lg md:p-space-xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg border border-outline-variant/30">
        <div className="relative z-10 max-w-xl flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-tertiary-fixed">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping" />
            <span>ESTIMATION & TENDER SUPPORT</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase leading-none">
            PLANNING YOUR NEXT INFRASTRUCTURE PROJECT?
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Connect directly with our corporate sales and technical desk for prompt delivery logistics, customized bulk tonnage schedules, and official BOQ material breakdowns.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full sm:w-auto">
          <button
            onClick={onOpenRfq}
            className="w-full sm:w-auto bg-on-tertiary-container hover:bg-tertiary text-white hover:text-on-tertiary px-space-lg py-space-md rounded font-label-md text-label-md uppercase tracking-wider font-semibold transition-all shadow-glow-copper flex items-center justify-center gap-space-xs active:translate-y-px"
            type="button"
          >
            <FileText className="w-4 h-4" />
            <span>GET A QUOTE</span>
          </button>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-surface-container-high/80 hover:bg-surface-container text-on-surface hover:text-white px-space-lg py-space-md rounded font-label-md text-label-md uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-space-xs shadow-md border border-outline-variant/30"
          >
            <MessageSquare className="w-4 h-4 text-tertiary-fixed" />
            <span>DIRECT WHATSAPP DESK</span>
          </a>
        </div>

        {/* Background Technical Watermark */}
        <span
          className="absolute -right-8 -bottom-10 font-headline-xl text-[140px] text-surface-container-high/20 select-none uppercase pointer-events-none font-bold"
          aria-hidden="true"
        >
          KALIKA
        </span>
      </div>
    </section>
  );
};

