import { Poppins, Urbanist , Merienda } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
});
export const merienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-merienda",
});