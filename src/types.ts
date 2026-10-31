export interface ProductItem {
  id: string;
  category: 'steel' | 'roofing' | 'utilities';
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  specCode: string;
  specs: string[];
  footerNote: string;
  cadRef: string;
  department: string;
  technicalSpecs: {
    spec1: { label: string; value: string };
    spec2: { label: string; value: string };
    spec3: { label: string; value: string };
    spec4: { label: string; value: string };
  };
}

export interface HighlightItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  tag: string;
}

export interface ManufacturingStep {
  step: string;
  title: string;
  description: string;
  stage: string;
  iconName: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentBorder?: boolean;
}

export interface BrandPartner {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  category: 'steel' | 'sheets' | 'facility';
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface RfqFormData {
  fullName: string;
  phone: string;
  email: string;
  category: string;
  quantity: string;
  notes: string;
}

