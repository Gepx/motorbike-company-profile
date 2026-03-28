import { Montserrat, Inter, Poppins } from "next/font/google";

export const poppins = Poppins({
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
