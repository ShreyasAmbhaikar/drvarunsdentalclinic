import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { BackToTopFloat } from "@/components/landing/back-to-top-float";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.seoDescription,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/home-dental-clinic-hero-viman-nagar.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} dental clinic`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    images: ["/images/home-dental-clinic-hero-viman-nagar.webp"]
  },
  icons: {
    icon: [
      {
        url: siteConfig.images.logo,
        type: "image/png"
      }
    ],
    shortcut: siteConfig.images.logo,
    apple: siteConfig.images.logo
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#B85F0D",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} data-scroll-behavior="smooth" className={plusJakartaSans.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PXN97FFN');
            `,
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5ZQYRLSYZZ"
          strategy="lazyOnload"
        />
        <Script
          id="ga4-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5ZQYRLSYZZ');
            `,
          }}
        />
      </head>
      <body id="page-top" className={plusJakartaSans.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXN97FFN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="canvas-wrapper relative">
          <Header />
          {children}
          <Footer />
        </div>
        <BackToTopFloat />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
