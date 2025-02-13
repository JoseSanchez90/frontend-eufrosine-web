import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body className={`${urbanist.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );

}
