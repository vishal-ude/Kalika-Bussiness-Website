import React, { useState } from 'react';
import { ProductItem } from '../types';
import { X, FileText, CheckCircle2 } from 'lucide-react';

interface Product3DModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const Product3DModal: React.FC<Product3DModalProps> = ({
  product,
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [rotationAngle, setRotationAngle] = useState(24);

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-surface-dim/85 backdrop-blur-md flex items-center justify-center p-margin-mobile animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-surface-container rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] border border-outline-variant/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
          type="button"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 3D Canvas / Dynamic CAD Visualizer */}
        <div className="md:w-3/5 bg-surface-container-lowest p-space-md flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <span className="font-code-spec text-code-spec uppercase px-space-xs py-0.5 rounded bg-surface-container-high text-tertiary-fixed tracking-wider">
              3D Metallurgical Visualizer
            </span>
            <span className="font-code-spec text-code-spec text-on-surface-variant">
              {product.cadRef}
            </span>
          </div>

          {/* Dynamic SVG Geometric Wireframe Simulated in 3D Angle */}
          <div className="relative w-full h-72 md:h-96 flex items-center justify-center">
            <div
              className="transition-transform duration-100 flex items-center justify-center"
              style={{ transform: `rotate(${rotationAngle}deg) scale(1.1)` }}
            >
              <svg
                className="w-56 h-56 text-tertiary drop-shadow-[0_10px_20px_rgba(217,119,54,0.3)]"
                viewBox="0 0 200 200"
              >
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8">
                  <ellipse className="stroke-tertiary-fixed" cx="100" cy="40" rx="60" ry="20" />
                  <ellipse className="stroke-primary" cx="100" cy="160" rx="60" ry="20" />
                  <line className="stroke-outline" x1="40" x2="40" y1="40" y2="160" />
                  <line className="stroke-outline" x1="160" x2="160" y1="40" y2="160" />
                  {/* Diagonal ribs */}
                  <path className="stroke-tertiary-fixed-dim" d="M45,70 Q100,85 155,70" strokeWidth="2.5" />
                  <path className="stroke-tertiary-fixed-dim" d="M45,95 Q100,110 155,95" strokeWidth="2.5" />
                  <path className="stroke-tertiary-fixed-dim" d="M45,120 Q100,135 155,120" strokeWidth="2.5" />
                  <path className="stroke-tertiary-fixed-dim" d="M45,145 Q100,160 155,145" strokeWidth="2.5" />
                  <line className="stroke-outline-variant" strokeDasharray="4 4" x1="100" x2="100" y1="20" y2="180" />
                </g>
              </svg>
            </div>
          </div>

          {/* Interactive Rotation Slider */}
          <div className="z-10 flex flex-col gap-space-xs bg-surface-container-high/90 backdrop-blur-md p-space-sm rounded">
            <div className="flex justify-between items-center text-code-spec font-code-spec text-on-surface-variant">
              <span>AZIMUTH ROTATION</span>
              <span>{rotationAngle}° ORTHOGONAL</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              value={rotationAngle}
              onChange={(e) => setRotationAngle(Number(e.target.value))}
              className="w-full accent-on-tertiary-container cursor-pointer"
            />
          </div>
        </div>

        {/* Specs Sidebar */}
        <div className="md:w-2/5 p-space-lg flex flex-col justify-between bg-surface-container-high border-t md:border-t-0 md:border-l border-outline-variant/30">
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-widest">
              {product.department}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              {product.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {product.description}
            </p>

            <div className="mt-space-sm space-y-space-xs">
              <h4 className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider">
                Engineering Attributes
              </h4>
              <div className="flex flex-col gap-1 text-code-spec font-code-spec text-on-surface-variant">
                {Object.values(product.technicalSpecs).map((spec, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-outline-variant/20">
                    <span>{spec.label}:</span>
                    <span className="text-on-surface font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-space-md flex flex-col gap-space-xs">
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="w-full bg-on-tertiary-container hover:bg-tertiary text-white hover:text-on-tertiary py-space-sm font-label-md text-label-md uppercase tracking-wider rounded transition-all shadow-glow-copper flex items-center justify-center gap-space-xs"
              type="button"
            >
              <FileText className="w-4 h-4" />
              <span>Request Instant Yard Rate</span>
            </button>
            <div className="flex items-center justify-center gap-1 text-center font-code-spec text-[11px] text-outline pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-tertiary-fixed" />
              <span>Factory test certificate (MTC) supplied with every manifest.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

