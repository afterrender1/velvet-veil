"use client";

import ServicePricingTemplate from "@/app/components/ServicePricingTemplate";

// ─── Categories ────────────────────────────────────────────────────────────────

const CATEGORIES = [
    { id: "bridal",     label: "Bridal & Wedding",     icon: "✦" },
    { id: "occasion",   label: "Occasion & Party",     icon: "◈" },
    { id: "editorial",  label: "Editorial & Glam",     icon: "◇" },
    { id: "lesson",     label: "Lessons & Consultations", icon: "◉" },
];

// ─── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
    // ── Bridal & Wedding ───────────────────────────────────────────────────
    {
        id: 1, category: "bridal", popular: true,
        name: "Bridal Makeup",
        summary: "1h 30m – 2h 30m", from: "£120",
        variants: [
            { name: "Bridal Makeup — Soft Glam",               duration: "1h 30m", price: "£120" },
            { name: "Bridal Makeup — Full Glam",               duration: "2h",     price: "£150" },
            { name: "Bridal Makeup — Airbrush Finish",         duration: "2h",     price: "£170" },
            { name: "Bridal Makeup + Hair Styling",            duration: "2h 30m", price: "£220" },
            { name: "Bridal Makeup + Brows & Lashes",          duration: "2h",     price: "£190" },
        ],
    },
    {
        id: 2, category: "bridal", popular: false,
        name: "Bridesmaid Makeup",
        summary: "45m – 1h 15m", from: "£55",
        variants: [
            { name: "Bridesmaid — Natural Look",               duration: "45m",    price: "£55" },
            { name: "Bridesmaid — Soft Glam",                  duration: "1h",     price: "£70" },
            { name: "Bridesmaid — Full Glam",                  duration: "1h 15m", price: "£85" },
        ],
    },
    {
        id: 3, category: "bridal", popular: false,
        name: "Mother of the Bride / Groom",
        summary: "1h – 1h 30m", from: "£80",
        variants: [
            { name: "Classic Elegant Look",                    duration: "1h",     price: "£80"  },
            { name: "Soft Glam with Lashes",                   duration: "1h 15m", price: "£95"  },
            { name: "Full Glam with Airbrush",                 duration: "1h 30m", price: "£115" },
        ],
    },
    {
        id: 4, category: "bridal", popular: false,
        name: "Bridal Trial Makeup",
        summary: "1h – 1h 30m", from: "£90",
        variants: [
            { name: "Bridal Trial — Daytime Look",             duration: "1h",     price: "£90"  },
            { name: "Bridal Trial — Evening / Full Glam",      duration: "1h 30m", price: "£110" },
        ],
    },
    // ── Occasion & Party ───────────────────────────────────────────────────
    {
        id: 5, category: "occasion", popular: true,
        name: "Party & Event Makeup",
        summary: "45m – 1h 30m", from: "£50",
        variants: [
            { name: "Daytime Event — Natural Glow",            duration: "45m",    price: "£50" },
            { name: "Evening Party — Glam Look",               duration: "1h",     price: "£70" },
            { name: "Full Glam — Lashes Included",             duration: "1h 15m", price: "£85" },
            { name: "Red Carpet — Airbrush Finish",            duration: "1h 30m", price: "£110"  },
        ],
    },
    {
        id: 6, category: "occasion", popular: false,
        name: "Prom & Graduation Makeup",
        summary: "45m – 1h 15m", from: "£50",
        variants: [
            { name: "Prom — Natural & Dewy",                   duration: "45m",    price: "£50" },
            { name: "Prom — Glam with Lashes",                 duration: "1h",     price: "£65" },
            { name: "Prom — Full Glam with Airbrush",          duration: "1h 15m", price: "£85" },
        ],
    },
    {
        id: 7, category: "occasion", popular: false,
        name: "Special Occasion — Eid & Festive",
        summary: "1h – 1h 30m", from: "£65",
        variants: [
            { name: "Eid / Festive — Soft Glam",               duration: "1h",     price: "£65"  },
            { name: "Eid / Festive — Full Glam",               duration: "1h 15m", price: "£80"  },
            { name: "Eid / Festive — Heavy Glam with Lashes",  duration: "1h 30m", price: "£100" },
        ],
    },
    // ── Editorial & Glam ───────────────────────────────────────────────────
    {
        id: 8, category: "editorial", popular: false,
        name: "Editorial & Photoshoot Makeup",
        summary: "1h – 2h", from: "£90",
        variants: [
            { name: "Editorial — Clean & Minimal",             duration: "1h",  price: "£90"  },
            { name: "Editorial — Artistic / High Fashion",     duration: "2h",  price: "£150" },
            { name: "Photoshoot — Portrait Glam",              duration: "1h",  price: "£100" },
            { name: "Photoshoot — Airbrush Full Coverage",     duration: "1h 30m", price: "£130" },
        ],
    },
    {
        id: 9, category: "editorial", popular: true,
        name: "Flawless Skin & Airbrush Makeup",
        summary: "1h – 1h 30m", from: "£85",
        variants: [
            { name: "Airbrush Foundation — Natural",           duration: "1h",     price: "£85"  },
            { name: "Airbrush Full Face — Medium Coverage",    duration: "1h",     price: "£100" },
            { name: "Airbrush Full Face — High Coverage Glam", duration: "1h 30m", price: "£130" },
        ],
    },
    // ── Lessons & Consultations ────────────────────────────────────────────
    {
        id: 10, category: "lesson", popular: false,
        name: "Makeup Lessons (1-to-1)",
        summary: "1h – 2h", from: "£70",
        variants: [
            { name: "Beginner Lesson — Basics & Skin Prep",        duration: "1h",  price: "£70"  },
            { name: "Intermediate — Eyes, Lips & Contouring",      duration: "1h 30m", price: "£95"  },
            { name: "Advanced — Full Glam Techniques",             duration: "2h",  price: "£130" },
            { name: "Bespoke 1-to-1 (Any Look, Any Level)",        duration: "2h",  price: "£150" },
        ],
    },
    {
        id: 11, category: "lesson", popular: false,
        name: "Skin & Makeup Consultation",
        summary: "30m – 45m", from: "£35",
        variants: [
            { name: "Skin Type & Tone Analysis",                   duration: "30m", price: "£35" },
            { name: "Product Recommendation Consultation",         duration: "45m", price: "£50" },
            { name: "Colour Matching & Foundation Guide",          duration: "30m", price: "£35" },
        ],
    },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MakeupPage() {
    return (
        <ServicePricingTemplate
            eyebrow="Price List"
            pageTitle="Makeup"
            categories={CATEGORIES}
            services={SERVICES}
        />
    );
}