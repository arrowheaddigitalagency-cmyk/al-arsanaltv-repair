import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import SmoothScroll from "@/components/ui/SmoothScroll";


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#050B14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : siteConfig.url));

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "2i0BCaOHJIRVLBDE6ZnQViEKpR2u5Pu36z_FInFH2Bw",
  },
  icons: {
    icon: [
      { url: "/images/rtl-favicon.png", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/rtl-favicon.png",
    apple: "/images/rtl-favicon.png",
  },
  title: {
    default: `${siteConfig.name} | Doorstep TV Repair & Electronics Lab Dubai, Sharjah & Ajman`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "RoyalTechLabs",
    "TV repair Dubai",
    "TV repair Sharjah",
    "TV repair Ajman",
    "doorstep TV repair Dubai",
    "Samsung TV repair Dubai",
    "LG TV repair Dubai",
    "Sony TV repair Sharjah",
    "LED TV backlight repair",
    "OLED TV repair UAE",
    "QLED TV screen repair",
    "Smart TV repair at home",
    "TV motherboard micro-soldering",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} - 24/7 Doorstep TV Repair in Dubai, Sharjah & Ajman`,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 675,
        alt: `${siteConfig.name} - Doorstep TV Electronics Technician in UAE`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Doorstep TV Repair Dubai`,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}#business`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        image: `${siteConfig.url}/images/hero-technician.jpg`,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.addressStreet,
          addressLocality: siteConfig.addressCity,
          addressRegion: siteConfig.addressRegion,
          addressCountry: siteConfig.addressCountry,
        },
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Sharjah" },
          { "@type": "City", name: "Ajman" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.url}#service`,
        name: "Doorstep Television Repair & Electronics Diagnostics",
        serviceType: "Electronics Repair",
        provider: {
          "@id": `${siteConfig.url}#business`,
        },
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Sharjah" },
          { "@type": "City", name: "Ajman" },
        ],
        description:
          "Precision component-level diagnosis and repair for LED, OLED, QLED, 4K, and Smart TVs of all brands directly inside UAE homes.",
      },
      {
        "@type": "FAQPage",
        mainEntity: siteConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} font-sans`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5D44Z56L');`,
          }}
        />
        {/* End Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BDJJ5QD8LD"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BDJJ5QD8LD');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#0052EA] selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5D44Z56L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
