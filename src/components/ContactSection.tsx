import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS } from '../data/content';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: PRODUCTS[0].title,
    quantity: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.quantity.trim()) errs.quantity = 'Estimated quantity & location required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    onShowToast('Inquiry Received! Our commercial desk will call you shortly.');

    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        category: PRODUCTS[0].title,
        quantity: '',
        notes: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="w-full bg-background px-margin-mobile lg:px-margin-desktop py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
            <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container" />
            <span>COMMERCIAL INQUIRY</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase leading-tight">
            CONNECT WITH OUR LOGISTICS DESK.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Reach out for price inquiries, regional yard distributions, or visit our central corporate hub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
          {/* Left Column: Details & Google Map Location Mockup */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="bg-surface-container p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md border border-outline-variant/20">
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                Corporate & Plant Information
              </h3>
              <div className="space-y-space-md text-body-sm font-body-sm text-on-surface-variant">
                <div className="flex items-start gap-space-sm">
                  <MapPin className="w-5 h-5 text-tertiary-fixed shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface block font-headline-md text-[16px] uppercase">
                      Central Yard & Registered Plant
                    </strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <Phone className="w-5 h-5 text-tertiary-fixed shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface block font-headline-md text-[16px] uppercase">
                      Direct Dispatch Lines
                    </strong>
                    <span>{COMPANY_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <Mail className="w-5 h-5 text-tertiary-fixed shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface block font-headline-md text-[16px] uppercase">
                      Corporate Procurement
                    </strong>
                    <span>
                      {COMPANY_INFO.emails.procurement} / {COMPANY_INFO.emails.sales}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <Clock className="w-5 h-5 text-tertiary-fixed shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface block font-headline-md text-[16px] uppercase">
                      Commercial Hours
                    </strong>
                    <span>{COMPANY_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Map Container Pipeline Mockup */}
            <div className="w-full h-64 bg-surface-container rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center border border-outline-variant/20">
              <div className="absolute inset-0 bg-primary-container/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-space-md text-center">
                <div className="w-12 h-12 rounded-full bg-on-tertiary-container text-white flex items-center justify-center mb-space-xs shadow-glow-copper animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase">
                  Central Plant & Stock Yards
                </h4>
                <p className="font-code-spec text-code-spec text-secondary max-w-xs">
                  Industrial Highway Corridor • Direct Weighbridge Staging
                </p>
                <span className="mt-space-sm px-space-sm py-1 bg-surface-container-high rounded text-tertiary-fixed font-code-spec text-[11px] border border-outline-variant/30">
                  COORDINATES: {COMPANY_INFO.coordinates}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFQ Enquiry Form */}
          <div className="lg:col-span-7 bg-surface-container p-space-lg md:p-space-xl rounded-xl shadow-lg flex flex-col justify-between border border-outline-variant/20">
            <div className="flex flex-col gap-space-xs pb-space-md border-b border-outline-variant/30">
              <span className="font-label-caps text-label-caps uppercase text-on-tertiary-container tracking-widest">
                TRANSPARENT PROCUREMENT
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                Commercial Tender & Material RFQ
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Fill in the technical parameters below. Our pricing analysts respond with detailed schedule quotes.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-space-sm animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-on-tertiary-container/20 flex items-center justify-center text-tertiary-fixed">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase">
                  RFQ Ingestion Confirmed
                </h4>
                <p className="font-body-md text-body-md text-secondary max-w-md">
                  Thank you! Your requirements have been logged in our dispatch schedule. Our procurement desk will contact you within 180 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-space-md pt-space-md" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      Contact Person / Engineer Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Er. Rajesh Mehta"
                      required
                      className={`bg-surface-container-low px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border ${
                        errors.name ? 'border-error' : 'border-outline-variant/30 focus:border-on-tertiary-container'
                      } outline-none`}
                    />
                    {errors.name && <span className="text-error text-xs font-code-spec">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      Mobile Phone Number (+91) *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9890XXXXXX"
                      required
                      className={`bg-surface-container-low px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border ${
                        errors.phone ? 'border-error' : 'border-outline-variant/30 focus:border-on-tertiary-container'
                      } outline-none`}
                    />
                    {errors.phone && <span className="text-error text-xs font-code-spec">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="commercial@developer.com"
                      required
                      className={`bg-surface-container-low px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border ${
                        errors.email ? 'border-error' : 'border-outline-variant/30 focus:border-on-tertiary-container'
                      } outline-none`}
                    />
                    {errors.email && <span className="text-error text-xs font-code-spec">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      Primary Product Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      required
                      className="bg-surface-container-low px-space-md py-space-sm text-on-surface text-body-sm font-body-sm rounded border border-outline-variant/30 focus:border-on-tertiary-container outline-none"
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
                    Estimated Quantity & Unloading Location *
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 120 Tonnes Fe 500D Rebar + 800 Roofing Sheets delivered to Chakan Site"
                    required
                    className={`bg-surface-container-low px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border ${
                      errors.quantity ? 'border-error' : 'border-outline-variant/30 focus:border-on-tertiary-container'
                    } outline-none`}
                  />
                  {errors.quantity && <span className="text-error text-xs font-code-spec">{errors.quantity}</span>}
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Project Scope / Technical Rebar Schedule Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Detail any specific brand preferences, required cutting length, test certificates (MTC)..."
                    className="bg-surface-container-low px-space-md py-space-sm text-on-surface placeholder:text-outline text-body-sm font-body-sm rounded border border-outline-variant/30 focus:border-on-tertiary-container outline-none resize-none"
                  />
                </div>

                <div className="pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <span className="font-code-spec text-code-spec text-on-surface-variant flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-tertiary-fixed" />
                    <span>GSTIN Verification provided on all quotes</span>
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-on-tertiary-container hover:bg-tertiary text-white hover:text-on-tertiary px-space-xl py-space-sm rounded font-label-md text-label-md uppercase tracking-wider font-semibold transition-all shadow-glow-copper flex items-center justify-center gap-space-xs"
                  >
                    <span>SUBMIT RFQ INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

