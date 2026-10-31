import React from 'react';
import { HeroThreeScene } from './HeroThreeScene';
import { ArrowRight, Mail, CheckCircle2, Truck, Wrench, ArrowDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[942px] flex flex-col justify-between overflow-hidden bg-primary-container px-margin-mobile lg:px-margin-desktop py-space-lg pt-32"
    >
      {/* Three.js Interactive 3D Architectural Steel Framing */}
      <HeroThreeScene />

      {/* Structural Grid Ambient Lines & Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d97736_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      <div className="absolute -top-32 right-12 w-96 h-96 bg-on-tertiary-container/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Top Content */}
      <div className="relative z-10 max-w-4xl pt-space-lg flex flex-col gap-space-md">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container-high/90 backdrop-blur-md rounded-full border-l-2 border-on-tertiary-container shadow-md">
          <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-fixed">
            BUILDING MATERIALS & INDUSTRIAL SOLUTIONS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero uppercase tracking-tight text-on-surface leading-none">
          BUILDING STRONGER FOUNDATIONS. <br />
          <span className="text-tertiary-fixed">POWERING BETTER FUTURES.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
          {COMPANY_INFO.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
          <a
            href="#products"
            className="group bg-on-tertiary-container hover:bg-tertiary text-white hover:text-on-tertiary px-space-lg py-space-md rounded font-label-md text-label-md uppercase tracking-wider font-semibold transition-all shadow-glow-copper flex items-center gap-space-sm active:translate-y-px"
          >
            <span>EXPLORE OUR PRODUCTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="bg-surface-container-high/70 hover:bg-surface-container text-on-surface hover:text-white px-space-lg py-space-md rounded font-label-md text-label-md uppercase tracking-wider font-semibold transition-all backdrop-blur-md flex items-center gap-space-sm shadow-md"
          >
            <Mail className="w-4 h-4 text-tertiary-fixed" />
            <span>CONTACT OUR TEAM</span>
          </a>
        </div>
      </div>

      {/* Trust Line Bar & Live Specs Strip */}
      <div className="relative z-10 mt-space-xl pt-space-md border-t border-outline-variant/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md bg-surface-container/60 backdrop-blur-md p-space-md rounded-xl shadow-elevation-1">
        <div className="flex flex-wrap items-center gap-space-md text-on-surface">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps tracking-widest uppercase">
            <CheckCircle2 className="w-4 h-4 text-tertiary-fixed shrink-0" />
            <span>QUALITY CERTIFIED MATERIALS</span>
          </div>

          <span className="hidden md:inline text-outline-variant font-code-spec">|</span>

          <div className="flex items-center gap-space-xs font-label-caps text-label-caps tracking-widest uppercase">
            <Truck className="w-4 h-4 text-tertiary-fixed shrink-0" />
            <span>RELIABLE PROJECT DISPATCH</span>
          </div>

          <span className="hidden md:inline text-outline-variant font-code-spec">|</span>

          <div className="flex items-center gap-space-xs font-label-caps text-label-caps tracking-widest uppercase">
            <Wrench className="w-4 h-4 text-tertiary-fixed shrink-0" />
            <span>INDUSTRIAL EXPERTISE</span>
          </div>
        </div>

        {/* Live Batch Compliance Meta Indicator */}
        <div className="flex items-center gap-space-md self-end lg:self-auto font-code-spec text-code-spec text-on-surface-variant">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed" />
            <span>BIS: IS 1786 COMPLIANT</span>
          </span>
          <a
            href="#about"
            className="flex items-center gap-1 text-tertiary-fixed hover:underline uppercase font-label-caps text-label-caps"
          >
            <span>Explore Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

