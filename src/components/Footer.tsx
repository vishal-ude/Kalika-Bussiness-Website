import React from 'react';
import { COMPANY_INFO, NAV_LINKS, PRODUCTS } from '../data/content';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="w-full bg-primary-container text-on-surface pt-space-xl pb-space-lg shadow-[0_-16px_32px_-8px_rgba(0,5,11,0.40)] border-t border-outline-variant/30">
      <div className="w-full px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-lg pb-space-xl">
          {/* Brand & Divisions Info */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                src="/images/kalika-logo.png"
                alt="Kalika Industries Logo"
                className="h-10 w-auto object-contain rounded border border-outline-variant/30 shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md tracking-wider uppercase text-on-surface leading-none">
                  {COMPANY_INFO.name}
                </span>
                <span className="font-label-caps text-label-caps tracking-widest uppercase text-tertiary-fixed-dim">
                  {COMPANY_INFO.subName}
                </span>
              </div>
            </div>

            <div className="space-y-space-sm">
              <p className="font-body-sm text-body-sm text-tertiary-fixed font-semibold">
                {COMPANY_INFO.marathiTagline}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <strong className="font-semibold text-on-surface uppercase font-label-caps text-label-caps tracking-wider block text-tertiary-fixed">
                  Kalika Steel Traders:
                </strong>
                Premier industrial distributor of certified structural steel, TMT rebar reinforcement systems, and heavy-grade civil construction supplies powering nationwide infrastructure.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <strong className="font-semibold text-on-surface uppercase font-label-caps text-label-caps tracking-wider block text-tertiary-fixed">
                  Kalika Industries:
                </strong>
                State-of-the-art manufacturer of high-tensile corrugated cement sheets, reinforced roofing enclosures, and structural prefabricated building solutions.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h4 className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-space-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Core Categories */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h4 className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
              Core Categories
            </h4>
            <nav className="flex flex-col gap-space-xs">
              {PRODUCTS.map((prod) => (
                <a
                  key={prod.id}
                  href="#products"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {prod.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Corporate & Plant Details */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <h4 className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
              Corporate & Plant
            </h4>
            <div className="flex flex-col gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
              <div className="flex items-start gap-space-xs">
                <MapPin className="w-4 h-4 text-tertiary-fixed shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start gap-space-xs">
                <Phone className="w-4 h-4 text-tertiary-fixed shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-space-xs">
                <Mail className="w-4 h-4 text-tertiary-fixed shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.emails.procurement}</span>
              </div>
              <div className="flex items-start gap-space-xs">
                <ShieldCheck className="w-4 h-4 text-tertiary-fixed shrink-0 mt-0.5" />
                <span className="font-code-spec text-code-spec">
                  GSTIN: {COMPANY_INFO.gstin} | IS: 1786 / IS: 456 CERTIFIED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
            © {new Date().getFullYear()} Kalika Steel Traders & Kalika Industries. All rights reserved. Precision Metallurgical & Building Solutions.
          </p>
          <p className="font-code-spec text-code-spec text-on-primary-container text-center md:text-right">
            {COMPANY_INFO.certifications}
          </p>
        </div>
      </div>
    </footer>
  );
};

