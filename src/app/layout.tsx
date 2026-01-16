import type { Metadata } from "next";
import { Raleway, Lora } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Arealplan Olav Talle | Arealplanlegger Beitostølen i Innlandet",
  description: "Arealplan Olav Talle tilbyr profesjonelle arealplanleggingstjenester fra Beitostølen i Innlandet. Reguleringsplaner, konsekvensutredninger, skiløypeplanlegging og planprosesser.",
  keywords: ["arealplanlegger", "beitostølen", "innlandet", "reguleringsplan", "arealplanlegging", "skiløypeplanlegging", "prosjektledelse", "olav talle"],
  openGraph: {
    title: "Arealplan Olav Talle | Arealplanlegger Beitostølen",
    description: "Profesjonelle arealplanleggingstjenester fra Beitostølen i Innlandet. Reguleringsplaner, konsekvensutredninger, skiløypeplanlegging og prosjektledelse.",
    url: "https://olavtalle.no",
    siteName: "Arealplan Olav Talle",
    locale: "nb_NO",
    type: "website",
  },
  alternates: {
    canonical: "https://olavtalle.no",
  },
};

// Schema.org JSON-LD strukturerte data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://olavtalle.no/#business",
      "name": "Arealplan Olav Talle",
      "description": "Profesjonelle arealplanleggingstjenester fra Beitostølen i Innlandet",
      "url": "https://olavtalle.no",
      "telephone": "+47 99 23 22 30",
      "email": "post@olavtalle.no",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Beitostølen",
        "addressRegion": "Innlandet",
        "addressCountry": "NO"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 61.2524,
          "longitude": 8.9147
        },
        "geoRadius": "200000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Arealplanleggingstjenester",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Arealplanlegging",
              "description": "Regulering og omregulering av nye/eksisterende områder for hytter, boliger, veger, friluftsområder",
              "url": "https://olavtalle.no/#arealplanlegging"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Skiløypeplanlegging",
              "description": "Planlegging av konkurranseanlegg og skiløyper i hytteområder",
              "url": "https://olavtalle.no/#skiloypeplanlegging"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Prosjektledelse",
              "description": "Saksgang av reguleringsplaner fra utarbeidelse av planforslag til godkjent plan",
              "url": "https://olavtalle.no/#prosjektledelse"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Konsekvensutredninger",
              "description": "Utredning av konsekvenser for miljø, samfunn og omgivelser"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kommuneplanarbeid",
              "description": "Bistand til kommuner med arealdel, planprogram og planstrategier"
            }
          }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://olavtalle.no/#person",
      "name": "Olav Talle",
      "jobTitle": "Arealplanlegger",
      "worksFor": {
        "@id": "https://olavtalle.no/#business"
      },
      "url": "https://olavtalle.no/#om"
    },
    {
      "@type": "WebSite",
      "@id": "https://olavtalle.no/#website",
      "url": "https://olavtalle.no",
      "name": "Arealplan Olav Talle",
      "publisher": {
        "@id": "https://olavtalle.no/#business"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${raleway.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
