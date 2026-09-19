# RoyalTechLabs — Doorstep TV Repair & Electronics Diagnostic Platform

An ultra-modern, high-performance web platform built for **RoyalTechLabs Electronics LLC**, specializing in 24/7 doorstep television repair, precision diagnostics, and micro-soldering across **Dubai, Sharjah, and Ajman (UAE)**.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- **Typography**: [Google Fonts (Montserrat & Poppins)](https://fonts.google.com/)
- **Smooth Scrolling**: [Lenis Smooth Scroll v1](https://github.com/darkroomengineering/lenis) + GSAP ScrollTrigger
- **Animations**: [GSAP 3](https://gsap.com/) & hardware-accelerated 3D CSS transforms
- **Icons**: [Lucide React](https://lucide.dev/)
- **Lead Generation**: WhatsApp Direct API, Tel Link Integration, and [Web3Forms](https://web3forms.com/) AJAX

---

## 🚀 Key Features

1. **Brand Marquee with Official Logos**:
   - Seamless, infinite hardware-accelerated glide for Samsung, LG, Sony, TCL, Hisense, Philips, Panasonic, Sharp, and Hitachi logos.
   - Continuous uninterrupted scrolling without hover stops.

2. **Interactive Fault Telemetry & Diagnostic Console**:
   - 8 live TV fault simulators (Black Screen with Sound, Dead TV / No Power, Vertical/Horizontal Lines, Distorted Audio, Screen Flickering, Bootloop/Wi-Fi Failure, HDMI No Signal, and Color Matrix Distortion).
   - Real-time engineering evaluation, probable cause breakdowns, and instant WhatsApp booking with pre-filled symptom diagnosis.

3. **Doorstep Service Journey (Stacked Sticky Scrolling)**:
   - 3-stage service breakdown (Intake & Telemetry, Mobile Lab Dispatch, On-Site Fix & 4K Quality Test).
   - Sticky pinned left headline and stacked sticky stage cards.

4. **Live Metropolitan Dispatch Coverage**:
   - Full coverage mapping across Dubai, Sharjah, and Ajman with live radar blinking indicators on all community locations.
   - Live location search filter.

5. **Customer Reviews & Testimonials Carousel**:
   - Interactive testimonials carousel with auto-sliding, touch gestures, and pagination dots.

6. **SEO & Structured Data**:
   - Full JSON-LD schema (`LocalBusiness`, `Service`, `FAQPage`), OpenGraph cards, canonical tags, and dynamic sitemap/robots.

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: v18.18 or higher (v20+ recommended)
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# 1. Clone repository
git clone <your-github-repo-url>
cd royaltechlabs

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local

# 4. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
# Generate optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` in the Environment Variables section.
4. Deploy!

---

## 📄 License & Contact

- **Company**: RoyalTechLabs Electronics LLC
- **Workshop**: Industrial Area 6 behind Macro Emirates, Sharjah, UAE
- **Phone / WhatsApp**: +971 56 470 4098
- **Email**: royaltechlabs9@gmail.com
