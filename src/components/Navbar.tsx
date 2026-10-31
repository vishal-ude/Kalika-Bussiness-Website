import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../data/content';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenRfq: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRfq }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link tracking based on scroll position
      const sections = ['hero', 'about', 'products', 'manufacturing', 'why-us', 'brands', 'gallery', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-container/90 backdrop-blur-xl shadow-elevation-2 border-b border-outline-variant/30 py-3'
            : 'bg-primary-container/70 backdrop-blur-md border-b border-outline-variant/15 py-4'
        }`}
      >
        <div className="w-full px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">
          {/* Logo & Brand Identity */}
          <a href="#hero" className="flex items-center gap-space-sm shrink-0 group">
            <div className="w-9 h-9 rounded bg-on-tertiary-container flex items-center justify-center text-white shadow-glow-copper group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
              <span className="font-display-hero font-bold text-xl tracking-tight leading-none">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md tracking-wider uppercase text-on-surface leading-none group-hover:text-white transition-colors">
                {COMPANY_INFO.name}
              </span>
              <span className="font-label-caps text-label-caps tracking-widest uppercase text-tertiary-fixed-dim leading-tight">
                {COMPANY_INFO.subName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-space-lg" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-label-md text-label-md transition-colors tracking-wide uppercase relative py-1 ${
                    isActive
                      ? 'text-tertiary-fixed font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-on-tertiary-container rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-space-sm shrink-0">
            <button
              onClick={onOpenRfq}
              className="relative group overflow-hidden rounded bg-on-tertiary-container hover:bg-tertiary px-space-md py-space-sm font-label-md text-label-md font-semibold text-white hover:text-on-tertiary shadow-glow-copper transition-all active:translate-y-px flex items-center gap-space-xs uppercase tracking-wider"
              type="button"
            >
              <FileText className="w-4 h-4 text-white group-hover:text-on-tertiary transition-colors" />
              <span>Get A Quote</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded bg-surface-container flex items-center justify-center text-on-surface hover:text-white hover:bg-surface-container-high transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface-dim/95 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-margin-mobile xl:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-space-sm my-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-headline-lg text-headline-lg text-on-surface hover:text-tertiary-fixed uppercase tracking-wider py-2 border-b border-outline-variant/20 flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-5 h-5 text-on-tertiary-container opacity-60" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-space-md pt-space-lg border-t border-outline-variant/30 mt-auto">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full bg-on-tertiary-container text-white py-space-md rounded font-label-md text-label-md uppercase tracking-wider font-semibold shadow-glow-copper flex items-center justify-center gap-space-xs"
              type="button"
            >
              <FileText className="w-4 h-4" />
              <span>Get A Quote</span>
            </button>
            <div className="text-center font-code-spec text-code-spec text-on-surface-variant">
              <span>{COMPANY_INFO.phone}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

