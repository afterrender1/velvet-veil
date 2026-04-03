"use client";

import ServicePricingTemplate from "@/app/components/ServicePricingTemplate";

// ─── Categories ────────────────────────────────────────────────────────────────

const CATEGORIES = [
    { id: "normal",     label: "Normal Polish",     icon: "✦" },
    { id: "gel",        label: "Gel / Shellac",      icon: "◈" },
    { id: "biab",       label: "BIAB",               icon: "◇" },
    { id: "extensions", label: "Nail Extensions",    icon: "◉" },
];

// ─── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
    // ── Normal Polish ──────────────────────────────────────────────────────
    {
        id: 1, category: "normal", popular: true,
        name: "Manicure & Pedicure with Normal Polish",
        summary: "30m – 1h 30m", from: "£20",
        variants: [
            { name: "Express Manicure",          duration: "30m",    price: "£20" },
            { name: "Deluxe Manicure",           duration: "45m",    price: "£25" },
            { name: "Express Pedicure",          duration: "35m",    price: "£30" },
            { name: "Deluxe Pedicure",           duration: "50m",    price: "£42" },
            { name: "Deluxe Manicure & Pedicure",duration: "1h 30m", price: "£60" },
        ],
    },
    // ── Gel / Shellac ──────────────────────────────────────────────────────
    {
        id: 2, category: "gel", popular: true,
        name: "Gel / Shellac Manicure & Pedicure",
        summary: "15m – 1h 45m", from: "£10",
        variants: [
            { name: "Gel / Shellac Removal (Hands or Feet)",         duration: "15m",    price: "£10" },
            { name: "Gel / Shellac Colour (Shape + Buff + Polish)",  duration: "30m",    price: "£22" },
            { name: "Gel / Shellac Manicure",                        duration: "45m",    price: "£30" },
            { name: "Gel / Shellac Manicure with Removal",           duration: "50m",    price: "£35" },
            { name: "Gel / Shellac Manicure with Gel Overlay",       duration: "1h",     price: "£38" },
            { name: "Gel / Shellac with Deluxe Manicure",            duration: "45m",    price: "£40" },
            { name: "Gel / Shellac Express Pedicure",                duration: "45m",    price: "£40" },
            { name: "Gel / Shellac with Deluxe Pedicure",            duration: "50m",    price: "£50" },
            { name: "Gel / Shellac Express Manicure & Pedicure",     duration: "1h 15m", price: "£55" },
            { name: "Gel / Shellac Deluxe Manicure & Pedicure",      duration: "1h 45m", price: "£70" },
        ],
    },
    // ── BIAB ───────────────────────────────────────────────────────────────
    {
        id: 3, category: "biab", popular: false,
        name: "BIAB Manicure (No Extensions)",
        summary: "10m – 1h 15m", from: "£8",
        variants: [
            { name: "Simple Nail Art or French Tips",              duration: "10m",    price: "£8"  },
            { name: "BIAB Removal",                                duration: "15m",    price: "£10" },
            { name: "Gel / Acrylic Extension Removal",             duration: "30m",    price: "£15" },
            { name: "BIAB on Natural Nails (No Colour)",           duration: "50m",    price: "£38" },
            { name: "BIAB Infills — No Colour",                    duration: "1h",     price: "£42" },
            { name: "BIAB on Natural Nails with Gel Colour",       duration: "1h 15m", price: "£45" },
            { name: "BIAB Infills with Gel Colour",                duration: "1h 10m", price: "£50" },
        ],
    },
    // ── Extensions ─────────────────────────────────────────────────────────
    {
        id: 4, category: "extensions", popular: false,
        name: "Nail Extensions — Acrylic",
        summary: "10m – 1h 30m", from: "£8",
        variants: [
            { name: "Big Toes Only",                              duration: "10m",    price: "£8"  },
            { name: "Acrylic Overlay (No Extensions)",            duration: "45m",    price: "£35" },
            { name: "Acrylic Extensions — Short",                 duration: "1h",     price: "£45" },
            { name: "Acrylic Extensions — Medium",                duration: "1h",     price: "£50" },
            { name: "Acrylic Extensions — Long",                  duration: "1h 15m", price: "£55" },
            { name: "Acrylic Infills",                            duration: "1h",     price: "£38" },
            { name: "Acrylic Infills with Gel Colour",            duration: "1h 15m", price: "£45" },
            { name: "Acrylic Removal",                            duration: "30m",    price: "£15" },
        ],
    },
    {
        id: 5, category: "extensions", popular: true,
        name: "Nail Extensions — Builder Gel",
        summary: "45m – 1h 30m", from: "£45",
        variants: [
            { name: "Builder Gel Short Length",               duration: "45m",    price: "£45" },
            { name: "Builder Gel Medium Length",              duration: "1h",     price: "£52" },
            { name: "Builder Gel Long Length",                duration: "1h 15m", price: "£60" },
            { name: "Builder Gel with Gel Colour",            duration: "1h 15m", price: "£55" },
            { name: "Builder Gel Infills",                    duration: "1h",     price: "£40" },
            { name: "Builder Gel Infills with Gel Colour",    duration: "1h 15m", price: "£48" },
        ],
    },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function NailsPage() {
    return (
        <ServicePricingTemplate
            eyebrow="Price List"
            pageTitle="Nails"
            categories={CATEGORIES}
            services={SERVICES}
        />
    );
}