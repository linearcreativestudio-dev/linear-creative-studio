import type { Metadata } from "next";
import { Syne, Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import PageLoader from "../components/PageLoader";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linear Creative | Design & Desenvolvimento",
  description: "Design estratégico e desenvolvimento de alto impacto para marcas que querem destacar-se. Web Development, Automações, MVP e Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${syne.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}>
        <PageLoader />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
