import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BusinessHighlights } from './components/BusinessHighlights';
import { AboutSection } from './components/AboutSection';
import { ProductGrid } from './components/ProductGrid';
import { Product3DModal } from './components/Product3DModal';
import { ManufacturingSection } from './components/ManufacturingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BrandPartners } from './components/BrandPartners';
import { GallerySection } from './components/GallerySection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RfqModal } from './components/RfqModal';
import { ProductItem } from './types';
import { CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqDefaultCategory, setRfqDefaultCategory] = useState<string | undefined>();
  const [product3dModalOpen, setProduct3dModalOpen] = useState(false);
  const [selectedProduct3d, setSelectedProduct3d] = useState<ProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenRfq = (productCategory?: string) => {
    setRfqDefaultCategory(productCategory);
    setRfqModalOpen(true);
  };

  const handleOpen3D = (product: ProductItem) => {
    setSelectedProduct3d(product);
    setProduct3dModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-on-surface">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-space-sm bg-surface-container-high px-space-md py-space-sm rounded-lg shadow-2xl border-l-4 border-on-tertiary-container animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-5 h-5 text-tertiary-fixed shrink-0" />
          <span className="font-body-sm text-body-sm text-on-surface">{toastMessage}</span>
        </div>
      )}

      {/* Sticky Navbar */}
      <Navbar onOpenRfq={() => handleOpenRfq()} />

      <main className="w-full">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Business Highlights */}
        <BusinessHighlights />

        {/* Section 3: About Us */}
        <AboutSection />

        {/* Section 4: Products Grid */}
        <ProductGrid onOpen3D={handleOpen3D} onOpenRfq={handleOpenRfq} />

        {/* Section 5: Manufacturing */}
        <ManufacturingSection />

        {/* Section 6: Why Choose Kalika */}
        <WhyChooseUs />

        {/* Section 7: Our Brands */}
        <BrandPartners />

        {/* Section 8: Gallery & Lightbox */}
        <GallerySection />

        {/* Section 9: CTA */}
        <CtaSection onOpenRfq={() => handleOpenRfq()} />

        {/* Section 10: Contact & RFQ */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        defaultCategory={rfqDefaultCategory}
        onShowToast={showToast}
      />

      <Product3DModal
        isOpen={product3dModalOpen}
        onClose={() => setProduct3dModalOpen(false)}
        product={selectedProduct3d}
        onRequestQuote={() => handleOpenRfq(selectedProduct3d?.title)}
      />
    </div>
  );
};

export default App;

