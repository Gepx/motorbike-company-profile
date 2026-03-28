import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layouts/Nav";
import Footer from "@/components/layouts/Footer";
import ScrollToTop from "@/components/layouts/ScrollToTop";
import { poppins } from "@/lib/fonts";

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
        <ScrollToTop />
      </body>
    </html>
  );
}
