import React, { useState } from 'react';
import { PRODUCTS } from '../data/content';
import { ProductItem } from '../types';
import { Box, ArrowRight, Wrench, Shield, Package } from 'lucide-react';

interface ProductGridProps {
  onOpen3D: (product: ProductItem) => void;
  onOpenRfq: (productName?: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onOpen3D, onOpenRfq }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'steel' | 'roofing' | 'utilities'>('all');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="products" className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin-desktop py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
              <span>PRODUCT SPECTRUM</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase leading-tight">
              EVERYTHING YOU NEED TO BUILD BETTER.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Explore our curated inventory of heavy industrial steel, building materials, and finishing solutions engineered for uncompromising strength.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-space-xs bg-surface-container p-1 rounded self-start border border-outline-variant/30">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${
                activeFilter === 'all'
                  ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              All (7)
            </button>
            <button
              onClick={() => setActiveFilter('steel')}
              className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${
                activeFilter === 'steel'
                  ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Steel & Structure
            </button>
            <button
              onClick={() => setActiveFilter('roofing')}
              className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${
                activeFilter === 'roofing'
                  ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Roofing & Panels
            </button>
            <button
              onClick={() => setActiveFilter('utilities')}
              className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider rounded transition-colors ${
                activeFilter === 'utilities'
                  ? 'bg-on-tertiary-container text-white shadow-glow-copper'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              type="button"
            >
              Utilities & Finish
            </button>
          </div>
        </div>

        {/* 7 Rich Interactive Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredProducts.map((product) => {
            const isWideCard = product.id === 'hardware';

            if (isWideCard) {
              return (
                <div
                  key={product.id}
                  className="product-card group bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:col-span-2 lg:col-span-3 border border-outline-variant/20 hover:border-on-tertiary-container/50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg p-space-lg items-center">
                    <div className="lg:col-span-7 flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-wider">
                          {product.badge}
                        </span>
                        <button
                          onClick={() => onOpen3D(product)}
                          className="flex items-center gap-1 px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-code-spec text-code-spec hover:text-tertiary-fixed transition-colors"
                          type="button"
                        >
                          <Box className="w-3.5 h-3.5 text-tertiary-fixed" />
                          <span>View in 3D</span>
                        </button>
                      </div>

                      <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                        {product.title}
                      </h3>

                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                        <div className="p-space-xs bg-surface-container-high rounded flex items-center gap-2">
                          <Wrench className="w-4 h-4 text-tertiary-fixed" />
                          <span className="font-code-spec text-code-spec text-on-surface">Tensile Grade 8.8 / 10.9</span>
                        </div>
                        <div className="p-space-xs bg-surface-container-high rounded flex items-center gap-2">
                          <Shield className="w-4 h-4 text-tertiary-fixed" />
                          <span className="font-code-spec text-code-spec text-on-surface">Hot-Dip Galvanized</span>
                        </div>
                        <div className="p-space-xs bg-surface-container-high rounded flex items-center gap-2">
                          <Package className="w-4 h-4 text-tertiary-fixed" />
                          <span className="font-code-spec text-code-spec text-on-surface">Bulk Carton Packs</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 h-48 bg-surface-container-lowest rounded overflow-hidden relative flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                      <button
                        onClick={() => onOpenRfq(product.title)}
                        className="absolute bottom-3 right-3 bg-on-tertiary-container hover:bg-tertiary text-white hover:text-on-tertiary px-space-md py-space-xs rounded font-label-md text-label-md uppercase tracking-wider transition-colors flex items-center gap-1 shadow-md"
                        type="button"
                      >
                        <span>Inquire Bulk Lot</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={product.id}
                className={`product-card group bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${
                  product.id === 'sheets'
                    ? 'border-t-2 border-t-on-tertiary-container border-outline-variant/20'
                    : 'border-outline-variant/20 hover:border-outline-variant/50'
                }`}
              >
                <div className="p-space-lg flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-wider">
                      {product.badge}
                    </span>
                    <button
                      onClick={() => onOpen3D(product)}
                      className="flex items-center gap-1 px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-code-spec text-code-spec hover:text-tertiary-fixed transition-colors"
                      type="button"
                    >
                      <Box className="w-3.5 h-3.5 text-tertiary-fixed" />
                      <span>View in 3D</span>
                    </button>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    {product.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {product.description}
                  </p>

                  <div className="h-44 w-full bg-surface-container-lowest rounded overflow-hidden relative mt-space-xs flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 font-code-spec text-[11px] text-tertiary-fixed-dim bg-surface-container-high/80 px-2 py-0.5 rounded">
                      {product.specCode}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-space-xs text-body-sm font-body-sm text-on-surface-variant">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-space-lg pt-0 flex items-center justify-between border-t border-outline-variant/20 mt-space-sm">
                  <span
                    className={`font-code-spec text-code-spec ${
                      product.id === 'sheets' ? 'text-tertiary-fixed' : 'text-on-surface-variant'
                    }`}
                  >
                    {product.footerNote}
                  </span>
                  <button
                    onClick={() => onOpenRfq(product.title)}
                    className="text-tertiary-fixed hover:text-white font-label-md text-label-md uppercase tracking-wider flex items-center gap-1 transition-colors"
                    type="button"
                  >
                    <span>Request Rates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

