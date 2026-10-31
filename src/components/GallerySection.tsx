import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'steel' | 'sheets' | 'facility'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="w-full bg-background px-margin-mobile lg:px-margin-desktop py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
              OPERATIONAL PROOF
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase leading-tight">
              YARD & MANUFACTURING GALLERY
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Live visual documentation from our central logistics yards and manufacturing production floors.
            </p>
          </div>

          <div className="flex flex-wrap gap-space-xs bg-surface-container p-1 rounded border border-outline-variant/30">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${
                activeTab === 'all'
                  ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              All Visuals
            </button>
            <button
              onClick={() => setActiveTab('steel')}
              className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${
                activeTab === 'steel'
                  ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Steel Yard
            </button>
            <button
              onClick={() => setActiveTab('sheets')}
              className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${
                activeTab === 'sheets'
                  ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Cement Roofing
            </button>
            <button
              onClick={() => setActiveTab('facility')}
              className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${
                activeTab === 'facility'
                  ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Plant & Hardware
            </button>
          </div>
        </div>

        {/* Image Grid with Parallax Depth Reaction */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="gallery-item group relative h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer border border-outline-variant/20 hover:border-on-tertiary-container/50 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-surface-dim/20 to-transparent p-space-md flex flex-col justify-end">
                <span className="font-code-spec text-[11px] text-tertiary-fixed uppercase">
                  {item.location}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-md text-headline-md text-on-surface uppercase">
                    {item.title}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-surface-container-high/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Lightbox Viewer */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-surface-dim/95 backdrop-blur-xl flex flex-col items-center justify-center p-margin-mobile animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-tertiary-fixed transition-colors"
            type="button"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center gap-space-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[75vh] rounded-xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/30">
              <img
                src={selectedItem.image}
                alt={selectedItem.imageAlt}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="text-center flex flex-col gap-1">
              <span className="font-code-spec text-code-spec text-tertiary-fixed uppercase">
                {selectedItem.location}
              </span>
              <h4 className="font-headline-md text-headline-md text-on-surface uppercase">
                {selectedItem.title}
              </h4>
              <p className="font-body-sm text-body-sm text-secondary">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

