import React, { useState } from 'react';
import { PRODUCTS } from '../data/content';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  onShowToast: (msg: string) => void;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  defaultCategory,
  onShowToast,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(defaultCategory || PRODUCTS[0].title);
  const [tonnage, setTonnage] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!phone.trim() || !/^\d{10}$/.test(phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Valid 10-digit number is required';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Valid corporate email required';
    }
    if (!tonnage.trim()) errs.tonnage = 'Estimated tonnage / volume required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    onClose();
    onShowToast('RFQ Transmitted! Quotation dispatched to your email.');

    // Reset fields
    setFullName('');
    setPhone('');
    setEmail('');
    setTonnage('');
    setNotes('');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-surface-dim/80 backdrop-blur-md flex items-center justify-center p-margin-mobile animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface-container-high rounded-xl p-space-lg md:p-space-xl shadow-2xl flex flex-col gap-space-md max-h-[90vh] overflow-y-auto border border-outline-variant/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30">
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
              Procurement Gateway
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
              Request Quotation & Project Schedule
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
            type="button"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-space-md pt-space-xs" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                Full Name *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Er. Vikram Deshmukh"
                required
                className={`bg-primary-container px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border ${
                  errors.fullName ? 'border-error' : 'border-outline-variant/30 focus:border-on-tertiary-container'
                } outline-none`}
              />
              {errors.fullName && <span className="text-error text-xs font-code-spec">{errors.fullName}</span>}
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                Contact Number (+91) *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98234XXXXX"
                required
                className={`bg-primary-container px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border ${
                  errors.phone ? 'border-error' : 'border-outline-variant/30 focus:border-on-tertiary-container'
                } outline-none`}
              />
              {errors.phone && <span className="text-error text-xs font-code-spec">{errors.phone}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                Corporate Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="procurement@infra-build.com"
                required
                className={`bg-primary-container px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border ${
                  errors.email ? 'border-error' : 'border-outline-variant/30 focus:border-on-tertiary-container'
                } outline-none`}
              />
              {errors.email && <span className="text-error text-xs font-code-spec">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                Target Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="bg-primary-container px-space-md py-space-sm text-on-surface text-body-sm font-body-sm rounded border border-outline-variant/30 focus:border-on-tertiary-container outline-none"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.title} className="bg-surface-container-high text-on-surface">
                    {p.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Estimated Tonnage / Linear Volume & Project Site *
            </label>
            <input
              type="text"
              value={tonnage}
              onChange={(e) => setTonnage(e.target.value)}
              placeholder="e.g. 85 Metric Tonnes TMT Rebar + 1,200 Cement Sheets to Pune Industrial Corridor"
              required
              className={`bg-primary-container px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border ${
                errors.tonnage ? 'border-error' : 'border-outline-variant/30 focus:border-on-tertiary-container'
              } outline-none`}
            />
            {errors.tonnage && <span className="text-error text-xs font-code-spec">{errors.tonnage}</span>}
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Project Scope / Technical Notes
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Provide IS code criteria, ASTM standards, delivery staging dates..."
              className="bg-primary-container px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border border-outline-variant/30 focus:border-on-tertiary-container outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-space-xs">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-code-spec text-code-spec">
              <ShieldCheck className="w-4 h-4 text-tertiary-fixed" />
              <span>Fast-track response within 180 mins</span>
            </div>

            <button
              type="submit"
              className="bg-on-tertiary-container hover:bg-tertiary text-white hover:text-on-tertiary px-space-lg py-space-sm font-label-md text-label-md uppercase tracking-wider rounded transition-all shadow-glow-copper flex items-center gap-space-xs"
            >
              <span>Transmit RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

