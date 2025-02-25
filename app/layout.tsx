import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/CookieConsent";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eufrosine",
  description: "Agua pura y refrescante, representa salud y bienestar, un recurso esencial para la vida. Purificada con tecnología avanzada: ultrafiltración, ósmosis inversa, esterilización ultravioleta y ozonización",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="description" content="Eufrosine, agua de mesa pura y refrescante. Distribución en Huacho, Hualmay y Huaura. Calidad garantizada." />
        <meta name="keywords" content="agua de mesa, agua purificada, Huacho, Hualmay, Huaura, agua embotellada, agua saludable" />
        <meta name="author" content="Eufrosine" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="Eufrosine - Agua de Mesa en Huacho, Hualmay y Huaura" />
        <meta property="og:description" content="Eufrosine ofrece agua de mesa pura y de alta calidad en Huacho, Hualmay y Huaura. ¡Hidratación saludable para tu familia!" />
        <meta property="og:image" content="../app/img/banner1.png" />
        <meta property="og:url" content="https://www.eufrosine.com/" />
        <meta property="og:type" content="business.business" />
        
        {/* Datos estructurados JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Eufrosine",
          "description": "Eufrosine, agua de mesa pura y refrescante. Distribución en Huacho, Hualmay y Huaura.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Huacho, Hualmay, Huaura",
            "addressCountry": "PE"
          },
          "url": "https://www.eufrosine.com",
          "telephone": "+51 987 654 321"
        }) }} />
      </head>
      <body className={`${urbanist.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar/>
          {children}
          <Footer/>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );

}
