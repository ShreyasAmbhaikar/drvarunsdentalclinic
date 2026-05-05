import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-500.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/plus-jakarta-sans/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-800.css";
import "./globals.css";

import type { Metadata, Viewport } from "next";
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
        url: "/images/hero-checkup.jpg",
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
    images: ["/images/hero-checkup.jpg"]
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
    <html lang={siteConfig.language}>
      <body>
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
