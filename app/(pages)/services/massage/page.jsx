"use client";

import ServicePricingTemplate from "@/app/components/ServicePricingTemplate";

// ─── Categories ────────────────────────────────────────────────────────────────

const CATEGORIES = [
    { id: "body",       label: "Body Massages",             icon: "◈" },
    { id: "lymphatic",  label: "Lymphatic Drainage",        icon: "◇" },
    { id: "hot",        label: "Hot Stone & Specialist",    icon: "✦" },
];

// ─── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
    // ── Body Massages ──────────────────────────────────────────────────────
    {
        id: 1, category: "body", popular: true,
        name: "Classic Body Massages",
        summary: "20m – 1h", from: "£30",
        variants: [
            { name: "Indian Head Massage",                     duration: "20m", price: "£30" },
            { name: "Neck & Shoulder Massage / Back Massage",  duration: "20m", price: "£35" },
            { name: "Full Body Massage",                       duration: "1h",  price: "£60" },
            { name: "Aromatherapy Massage",                    duration: "1h",  price: "£75" },
            { name: "Swedish Massage",                         duration: "1h",  price: "£80" },
            { name: "Deep Tissue Full Body",                   duration: "1h",  price: "£85" },
            { name: "Sports Massage",                          duration: "1h",  price: "£85" },
        ],
    },
    {
        id: 2, category: "body", popular: false,
        name: "Deep Tissue Massages",
        summary: "35m – 1h", from: "£65",
        variants: [
            { name: "Deep Tissue — Neck, Back & Shoulders (Inc. Glutes)",  duration: "1h",  price: "£69" },
            { name: "Deep Tissue — Full Body",                              duration: "1h",  price: "£85" },
        ],
    },
    // ── Lymphatic Drainage ─────────────────────────────────────────────────
    {
        id: 3, category: "lymphatic", popular: false,
        name: "Lymphatic Drainage Massage",
        summary: "30m – 1h", from: "£50",
        variants: [
            { name: "Face Lymphatic Drainage Massage",          duration: "30m", price: "£50" },
            { name: "Legs Lymphatic Drainage Massage",          duration: "45m", price: "£70" },
            { name: "Lower Body Lymphatic Drainage Massage",    duration: "1h",  price: "£85" },
        ],
    },
    // ── Hot Stone & Specialist ─────────────────────────────────────────────
    {
        id: 4, category: "hot", popular: true,
        name: "Hot Stone Massages",
        summary: "35m – 1h", from: "£65",
        variants: [
            { name: "Hot Stone — Neck, Back & Shoulders",   duration: "35m", price: "£65" },
            { name: "Hot Stone — Full Body",                duration: "1h",  price: "£85" },
        ],
    },
    {
        id: 5, category: "hot", popular: false,
        name: "Specialist Relaxation Packages",
        summary: "1h – 1h 30m", from: "£90",
        variants: [
            { name: "Aromatherapy + Lymphatic Face",                    duration: "1h",     price: "£90"  },
            { name: "Hot Stone + Aromatherapy Full Body",               duration: "1h 30m", price: "£110" },
            { name: "Deep Tissue + Hot Stone Combination",              duration: "1h 30m", price: "£120" },
            { name: "Full Body Swedish + Indian Head Massage",          duration: "1h 30m", price: "£100" },
        ],
    },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MassagePage() {
    return (
        <ServicePricingTemplate
            eyebrow="Price List"
            pageTitle="Massage"
            categories={CATEGORIES}
            services={SERVICES}
        />
    );
}