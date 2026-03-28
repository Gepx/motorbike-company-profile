import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/layouts/Nav";
import Footer from "@/components/layouts/Footer";
import ScrollToTop from "@/components/layouts/ScrollToTop";
import { poppins } from "@/lib/fonts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://honda-motor.vercel.app";

export const viewport: Viewport = {
  themeColor: "#cc141a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Honda Motor — Authorized Honda Motorcycle Dealer",
    template: "%s | Honda Motor",
  },
  description:
    "Your trusted authorized Honda motorcycle dealer. Explore the latest Honda models, genuine parts, certified service, and flexible financing options. Visit our showroom today!",
  keywords: [
    "Honda motorcycle",
    "Honda dealer",
    "authorized Honda dealer",
    "Honda Batam",
    "motorcycle dealership",
    "Honda Matic",
    "Honda Sport",
    "Honda Cub",
    "buy Honda motorcycle",
    "Honda genuine parts",
    "Honda service center",
    "motorcycle financing",
  ],
  authors: [{ name: "Honda Motor Dealer" }],
  creator: "Honda Motor Dealer",
  publisher: "Honda Motor Dealer",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: siteUrl,
    siteName: "Honda Motor — Authorized Dealer",
    title: "Honda Motor — Authorized Honda Motorcycle Dealer",
    description:
      "Your trusted authorized Honda motorcycle dealer. Explore the latest models, genuine parts, certified service, and flexible financing.",
    images: [
      {
        url: "/assets/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Honda Motor Showroom — Authorized Dealer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honda Motor — Authorized Honda Motorcycle Dealer",
    description:
      "Explore the latest Honda motorcycles with the best deals. Genuine parts, certified service, and flexible financing.",
    images: ["/assets/images/hero.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MotorcycleDealer",
  name: "Honda Motor — Authorized Dealer",
  description:
    "Authorized Honda motorcycle dealer offering the latest models, genuine parts, certified service, and flexible financing.",
  url: siteUrl,
  image: `${siteUrl}/assets/images/hero.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batam",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 1.0456,
    longitude: 104.0305,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "15:00",
    },
  ],
  sameAs: [],
  priceRange: "$$",
  brand: {
    "@type": "Brand",
    name: "Honda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col border-x-2">
        <Nav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
