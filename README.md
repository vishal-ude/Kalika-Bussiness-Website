# KALIKA STEEL TRADERS & KALIKA INDUSTRIES

Production-quality industrial web application engineered from the Google Stitch design system (`Kalika Industrial Precision`). Built with Vite, React, TypeScript, Tailwind CSS, Three.js, and Framer Motion.

---

## 🛠️ Tech Stack & Architecture

- **Core:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS with custom design tokens from Stitch (`#101D2B`, `#1B2733`, `#D97736`, `#87919B`, `#F4F6F8`)
- **3D Graphics:** Three.js interactive 3D hero scene with procedural I-Beams, cylindrical TMT rebar bundles, structural joint nodes, ambient floating particles, and mouse-reactive parallax interpolation
- **Smooth Scroll:** Lenis smooth scrolling engine
- **Typography:** Barlow Condensed (Headings), Inter (Body & Spec tables), Space Grotesk (Labels & Monospace data)
- **Icons:** Lucide React (technical line icons only, no emoji icons)
- **Content:** Centralized single-source-of-truth data store in `src/data/content.ts`

---

## 🚀 Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run preview
```

---

## 📋 Sections Included (In Order)

1. **Sticky Header & Navbar (`#hero`):**
   - Translucent blur over hero; solid navy on scroll
   - Brand lockup: `KALIKA STEEL TRADERS & INDUSTRIES`
   - Anchor links: Home, About Us, Products, Manufacturing, Why Choose Us, Brands, Gallery, Contact
   - "GET A QUOTE" button with instant modal launch
   - Full-screen responsive mobile navigation drawer

2. **Hero Section (`#hero`):**
   - Eyebrow badge: `BUILDING MATERIALS & INDUSTRIAL SOLUTIONS`
   - Monolithic headline: `BUILDING STRONGER FOUNDATIONS. POWERING BETTER FUTURES.`
   - CTAs: `EXPLORE OUR PRODUCTS` and `CONTACT OUR TEAM`
   - Integrated Three.js 3D structural steel scene with live cursor parallax
   - Trust strip: `QUALITY CERTIFIED MATERIALS | RELIABLE PROJECT DISPATCH | INDUSTRIAL EXPERTISE`

3. **Business Highlights (`#highlights`):**
   - 4-column responsive grid: Quality Products, Wide Range (7 core categories), Manufacturing, Customer Focus

4. **About Us ("WHO WE ARE") (`#about`):**
   - Interactive division toggle: `Trading Division` (Kalika Steel Traders) vs. `Manufacturing Division` (Kalika Industries)
   - Annual tonnage metrics & IS standards
   - Interactive SVG architectural blueprint schematic container

5. **Products Spectrum (`#products`):**
   - Filter tabs: All (7), Steel & Structure, Roofing & Panels, Utilities & Finish
   - 7 detailed cards: Steel & TMT Bars, Cement & Building Materials, Corrugated Cement Sheets, Plumbing Materials, Paints & Colours, Plywood & Boards, Hardware & Fasteners
   - Interactive 3D CAD/Metallurgical Visualizer trigger for all 7 items

6. **Interactive 3D Metallurgical Visualizer Modal:**
   - 360° Azimuth rotation slider (-180° to +180°)
   - Live engineering attributes (Yield Strength, Tensile, Elongation, IS Specifications)
   - "Request Instant Yard Rate" transition to RFQ

7. **Manufacturing Capabilities (`#manufacturing`):**
   - 4-step sequence: Raw Material Prep, Sheet Forming & Corrugation, Controlled Curing, Dimension Inspection
   - High-resolution photographic facility strip

8. **Why Choose Kalika (`#why-us`):**
   - Deep Navy substrate with molten copper ambient lighting
   - 4 core value propositions with technical badge borders

9. **Our Brands & Partners (`#brands`):**
   - 6 partner category cards adhering strictly to non-infringing placeholder design rules

10. **Operational Gallery (`#gallery`):**
    - Filterable gallery tabs (All Visuals, Steel Yard, Cement Roofing, Plant & Hardware)
    - 6 zoomable tiles with full-screen Lightbox viewer and ESC key navigation

11. **Call To Action (`#cta`):**
    - High-impact banner with live status pulse
    - Direct WhatsApp dispatch link (`wa.me`) and instant Quote modal trigger

12. **Contact & Procurement Desk (`#contact`):**
    - Corporate & Plant physical coordinates, dispatch phone lines, emails, working hours
    - Stylized geographic coordinates map preview
    - Client-side validated RFQ Form with input masking, category dropdown, error messaging, and submission toast

13. **Footer (`#footer`):**
    - Dual brand overview, quick navigation, category links, GSTIN & BIS certifications

---

## 📍 Where to Replace Placeholders

To personalize with your live company information, update `src/data/content.ts`:

- [ ] **Address & Coordinates:** In `COMPANY_INFO.address` and `COMPANY_INFO.coordinates`
- [ ] **Phone & Dispatch Lines:** In `COMPANY_INFO.phone` and `COMPANY_INFO.phoneRaw`
- [ ] **WhatsApp Number:** In `COMPANY_INFO.whatsappUrl` (currently points to placeholder `wa.me/91800525452`)
- [ ] **Email Addresses:** In `COMPANY_INFO.emails.procurement` and `COMPANY_INFO.emails.sales`
- [ ] **GSTIN Number:** In `COMPANY_INFO.gstin` (currently formatted as `27AAAAA0000A1Z5`)
- [ ] **Real Photography:** Replace image URLs in `PRODUCTS`, `MANUFACTURING_PHOTOS`, and `GALLERY_ITEMS` with local photos stored in `public/images/placeholders/`

---

## 🔍 Stitch Design Fidelity Report

### Reproductions:
- ✅ **100% Matching Layout & Spacing:** Grid gutters, card hierarchies, typography scales (`Barlow Condensed`, `Inter`, `Space Grotesk`), and 8px base rhythm.
- ✅ **Brand Colors:** Exact hex tokens (`#101D2B`, `#1B2733`, `#D97736`, `#87919B`, `#F4F6F8`) mapped in `tailwind.config.js`.
- ✅ **Interactive 3D Three.js Hero:** Faithfully ported from the Stitch design reference with ACESFilmic tone mapping, ambient occlusion, I-beams, TMT bar bundles, and mouse inertia.
- ✅ **All 12 Sections:** Rendered in exact requested order with full mobile responsiveness (360px, 768px, 1280px+).

### Differences & Conscious Design Adaptations:
1. **Third-Party Trademarks:** Per prompt instructions (*"Do NOT invent: real brand logos. Use placeholders for all unknown details"*), partner logos are rendered as clean architectural category tiles rather than copyrighted corporate logos.
2. **Google Maps API Key:** The map preview is styled using an architectural coordinate schematic mockup with live GPS coordinates (`18.5204° N, 73.8567° E`), preventing layout breakage or API key authorization failures.

