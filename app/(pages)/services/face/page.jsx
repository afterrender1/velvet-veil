"use client";

import ServicePricingTemplate from "@/app/components/ServicePricingTemplate";

// ─── Categories ────────────────────────────────────────────────────────────────

const CATEGORIES = [
    { id: "facials",    label: "Facials",          icon: "◈" },
    { id: "threading",  label: "Threading",        icon: "✦" },
    { id: "brows",      label: "Brows",            icon: "◇" },
    { id: "facelift",   label: "Face Lift Massage", icon: "◉" },
];

// ─── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
    // ── Facials ────────────────────────────────────────────────────────────
    {
        id: 1, category: "facials", popular: true,
        name: "Facial — Dermalogica",
        summary: "1h – 1h 30m", from: "£75",
        variants: [
            { name: "Dermalogica Pro-Skin 60 (Any Skin Concern)",          duration: "1h",     price: "£75"  },
            { name: "Dermalogica Facial with Face Lift Massage",            duration: "1h 15m", price: "£90"  },
            { name: "Dermalogica Luxury Facial with Face Lift & Neck",      duration: "1h 30m", price: "£100" },
            { name: "Dermalogica Luxury Facial with Lymphatic Drainage",    duration: "1h 30m", price: "£120" },
        ],
    },
    {
        id: 2, category: "facials", popular: false,
        name: "Facial — Deep Cleansing (Skin Concern Treatments)",
        summary: "30m – 1h 20m", from: "£50",
        variants: [
            { name: "LED Light with Booster",                             duration: "30m",    price: "£50"  },
            { name: "Deep Cleanse Facial",                                duration: "45m",    price: "£70"  },
            { name: "Deep Cleanse Micro-Dermabrasion",                    duration: "1h",     price: "£80"  },
            { name: "Deep Cleanse Plus Facial",                           duration: "1h",     price: "£85"  },
            { name: "Deep Cleanse Facial with Face Lift Massage & LED",   duration: "1h 20m", price: "£120" },
        ],
    },
    {
        id: 3, category: "facials", popular: false,
        name: "Facial — Radiofrequency Skin Tightening",
        summary: "1h – 1h 15m", from: "£100",
        variants: [
            { name: "Radiofrequency — Non-Surgical Skin Tightening",              duration: "1h",     price: "£100" },
            { name: "Radiofrequency — Non-Surgical Skin Tightening with Add-on",  duration: "1h 15m", price: "£120" },
        ],
    },
    {
        id: 4, category: "facials", popular: false,
        name: "Facial — Add-On Services (Only with Facials)",
        summary: "15m each", from: "£15",
        variants: [
            { name: "Derma Planning",            duration: "15m", price: "£15" },
            { name: "Face Lift Massage",         duration: "15m", price: "£15" },
            { name: "LED Light Therapy",         duration: "15m", price: "£15" },
            { name: "Shoulder & Neck Massage",   duration: "15m", price: "£15" },
        ],
    },
    {
        id: 5, category: "facials", popular: true,
        name: "Facial — Micro-Needling",
        summary: "20m – 1h 30m", from: "£45",
        variants: [
            { name: "Add-On Neck Area",                          duration: "20m",    price: "£45"  },
            { name: "Micro-Needling — Skin Brightening",         duration: "1h",     price: "£120" },
            { name: "Micro-Needling — Glowing Treatments",       duration: "1h 30m", price: "£130" },
            { name: "Micro-Needling — Scar Removing Treatments", duration: "1h 30m", price: "£150" },
        ],
    },
    {
        id: 6, category: "facials", popular: false,
        name: "Facial — Hydrating",
        summary: "45m – 1h", from: "£70",
        variants: [
            { name: "Hydrating Facial",                          duration: "45m", price: "£70" },
            { name: "Hydrating with Derma Planning",             duration: "1h",  price: "£85" },
            { name: "Hydrating with LED Light",                  duration: "1h",  price: "£85" },
            { name: "Hydrating with Lymphatic Drainage",         duration: "1h",  price: "£85" },
        ],
    },
    {
        id: 7, category: "facials", popular: true,
        name: "Facial — BB Glow (Glow Treatment)",
        summary: "1h – 1h 30m", from: "£120",
        variants: [
            { name: "BB Glow Treatment",                 duration: "1h",     price: "£120" },
            { name: "BB Glow with Deep Clean",           duration: "1h 15m", price: "£150" },
            { name: "BB Glow — Face & Neck",             duration: "1h 30m", price: "£180" },
        ],
    },
    {
        id: 8, category: "facials", popular: false,
        name: "Facial — Microcurrent (Skin Lifting & Tightening)",
        summary: "1h 15m each", from: "£120",
        variants: [
            { name: "Microcurrent Face Lift",                           duration: "1h 15m", price: "£120" },
            { name: "Microcurrent Face Lift with LED Light",            duration: "1h 15m", price: "£130" },
            { name: "Microcurrent Face Lift with Lymphatic Drainage",   duration: "1h 15m", price: "£150" },
            { name: "Microcurrent Face Lift with Neck Lift",            duration: "1h 15m", price: "£150" },
        ],
    },
    {
        id: 9, category: "facials", popular: false,
        name: "Facial — High Frequency (Acne Treatment)",
        summary: "1h – 1h 30m", from: "£100",
        variants: [
            { name: "High Frequency Acne Treatment",                    duration: "1h",     price: "£100" },
            { name: "High Frequency with Deep Cleanse",                 duration: "1h 15m", price: "£120" },
            { name: "High Frequency Deep Clean (Full)",                 duration: "1h 30m", price: "£150" },
        ],
    },
    {
        id: 10, category: "facials", popular: false,
        name: "Facial — Galvanic (Collagen Booster)",
        summary: "1h 15m each", from: "£100",
        variants: [
            { name: "Galvanic Collagen Booster",                        duration: "1h 15m", price: "£100" },
            { name: "Galvanic with LED Light",                          duration: "1h 15m", price: "£120" },
            { name: "Galvanic with Lymphatic Drainage",                 duration: "1h 15m", price: "£120" },
        ],
    },
    {
        id: 11, category: "facials", popular: false,
        name: "Hydra Plus Facial",
        summary: "45m – 1h 30m", from: "£85",
        variants: [
            { name: "Hydra Plus Facial",                                    duration: "45m",    price: "£85"  },
            { name: "Hydra Plus Facial with Skin Booster",                  duration: "1h",     price: "£100" },
            { name: "Hydra Plus Facial with Skin Booster & Lymphatic",      duration: "1h 30m", price: "£130" },
        ],
    },
    // ── Threading ──────────────────────────────────────────────────────────
    {
        id: 12, category: "threading", popular: true,
        name: "Facial Threading",
        summary: "10m – 30m", from: "£12",
        variants: [
            { name: "Chin",                            duration: "10m", price: "£12" },
            { name: "Forehead",                        duration: "10m", price: "£12" },
            { name: "Neck",                            duration: "10m", price: "£12" },
            { name: "Sides of Face",                   duration: "10m", price: "£12" },
            { name: "Upper Lip",                       duration: "10m", price: "£12" },
            { name: "Full Face (Including Eyebrows)",  duration: "30m", price: "£35" },
        ],
    },
    {
        id: 13, category: "threading", popular: false,
        name: "Eyebrow Threading",
        summary: "10m", from: "£15",
        variants: [
            { name: "Eyebrow Threading & Shape", duration: "10m", price: "£15" },
        ],
    },
    // ── Brows ──────────────────────────────────────────────────────────────
    {
        id: 14, category: "brows", popular: false,
        name: "Brows",
        summary: "10m – 1h", from: "£15",
        variants: [
            { name: "Eyebrow Tint",      duration: "10m", price: "£15" },
            { name: "Eyebrow Shape",     duration: "10m", price: "£15" },
            { name: "Brow Lamination",   duration: "1h",  price: "£60" },
        ],
    },
    // ── Face Lift Massage ──────────────────────────────────────────────────
    {
        id: 15, category: "facelift", popular: false,
        name: "Face Lift Massage",
        summary: "20m – 40m", from: "£30",
        variants: [
            { name: "Face Lift Massage",               duration: "20m", price: "£30" },
            { name: "Face Lift Massage with LED Light", duration: "40m", price: "£50" },
        ],
    },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function FacePage() {
    return (
        <ServicePricingTemplate
            eyebrow="Price List"
            pageTitle="Face & Skin"
            categories={CATEGORIES}
            services={SERVICES}
        />
    );
}