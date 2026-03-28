import type { Metadata } from "next";
import { Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layouts/Nav";
import Footer from "@/components/layouts/Footer";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Honda Motor",
  description: "Honda Motor Company Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col border-x-2">
        <Nav />
        {children}
        <Footer />

        <Link
          href="#home"
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 p-3.5 bg-white border border-gray-100 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        >
          <ArrowUp
            className="text-gray-600 group-hover:text-red-600 transition-colors"
            size={24}
          />
        </Link>
      </body>
    </html>
  );
}
