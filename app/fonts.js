import {
    Poppins, Urbanist, Merienda,
    Inter, Montserrat, Playfair_Display,
    Lato, Roboto, Open_Sans,
    Oswald, Raleway, Nuaduan,
    Bodoni_Moda, Cormorant_Garamond, Cinzel,
    Lora, Quicksand, Syne,
    DM_Sans, Fraunces, Jost,
    Prata
} from "next/font/google";

// --- EXISTING FONTS ---
export const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-poppins" });
export const urbanist = Urbanist({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-urbanist" });
export const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-merienda" });

// --- LUXURY & EDITORIAL SERIFS (Perfect for Velvet Veil Headers) ---
export const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
export const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" });
export const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-cormorant" });
export const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-cinzel" });
export const prata = Prata({ subsets: ["latin"], weight: ["400"], variable: "--font-prata" });
export const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

// --- MODERN & CLEAN SANS (Best for UI and Body) ---
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
export const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
export const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
export const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
export const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-syne" });

// --- ESSENTIAL CLASSICS ---
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
export const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
export const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });
export const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
export const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
export const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });