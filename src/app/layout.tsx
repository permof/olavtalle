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
  title: "Olav Talle | Arealplanlegger i Innlandet",
  description: "Olav Talle tilbyr profesjonelle arealplanleggingstjenester i Innlandet. Kontakt meg for reguleringsplaner, konsekvensutredninger og planprosesser.",
  keywords: ["arealplanlegger", "innlandet", "reguleringsplan", "arealplanlegging", "olav talle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${raleway.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
