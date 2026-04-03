"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ──────────────────────────────────────────────────────────────────────

const importantLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Price List", href: "/price-list" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
];

const serviceLinks = [
    { label: "Hair", href: "/services/hair" },
    { label: "Nails", href: "/services/nails" },
    { label: "Skin", href: "/services/skin" },
    { label: "Makeup", href: "/services/makeup" },
    { label: "Massage", href: "/services/massage" },
];

const locations = [
    "Mayfair", "Knightsbridge", "Chelsea", "Kensington",
    "Belgravia", "Marylebone", "Notting Hill", "Canary Wharf",
    "Shoreditch", "Richmond", "Hampstead", "Fulham",
];

// ─── Sub-components ────────────────────────────────────────────────────────────

const GoldDivider = () => (
    <div className="w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
);

const FooterLink = ({ href, children }) => (
    <Link
        href={href}
        className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300"
    >
        <span className="w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-3" />
        {children}
    </Link>
);

const ColHeading = ({ children }) => (
    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-6">
        {children}
    </h3>
);

// ─── Main Footer ───────────────────────────────────────────────────────────────

const Footer = () => {
    const footerRef = useRef(null);
    const topRef = useRef(null);
    const noteRef = useRef(null);
    const locRef = useRef(null);
    const bottomRef = useRef(null);

    // ── GSAP scroll-triggered stagger reveal ────────────────────────────────
    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = [topRef.current, noteRef.current, locRef.current, bottomRef.current];

            sections.forEach((el) => {
                if (!el) return;
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.85,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // Stagger children inside top grid
            gsap.fromTo(
                topRef.current?.querySelectorAll(".footer-col") || [],
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.12,
                    duration: 0.75,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: topRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-[#000000] text-white">

            {/* ── Top gold hairline ── */}
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#D4AF37] to-transparent" />

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 1 — Brand + Links + Services + Contact
            ════════════════════════════════════════════════════════════════ */}
            <div ref={topRef} className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

                    {/* ── Column 1: Brand ── */}
                    <div className="footer-col flex flex-col gap-6 lg:col-span-1">
                        {/* Logo */}
                        <Link href="/" className="inline-block w-fit">
                            <Image
                                src="/images/black_vv.png"
                                alt="Velvet Veil"
                                width={150}
                                height={40}
                                style={{ width: "auto", height: "128px" }}
                            />
                        </Link>

                        {/* Description */}
                        <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                            Velvet Veil is a luxury unisex salon dedicated to delivering premium beauty
                            services in a comfortable and modern environment.
                        </p>

                        {/* Book Now CTA */}
                        <Link
                            href="/book"
                            className="inline-flex w-fit items-center gap-2.5 px-6 py-3 border border-white/15 text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_4px_24px_rgba(212,175,55,0.3)] transition-all duration-400"
                        >
                            Book Now
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>

                        {/* Social row */}
                        <div className="flex items-center gap-3 pt-1">
                            {[
                                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                                { label: "TikTok", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
                            ].map(({ label, path }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-neutral-500 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Column 2: Important Links ── */}
                    <div className="footer-col">
                        <ColHeading>Quick Links</ColHeading>
                        <ul className="flex flex-col gap-3.5">
                            {importantLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <FooterLink href={href}>{label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Column 3: Services ── */}
                    <div className="footer-col">
                        <ColHeading>Our Services</ColHeading>
                        <ul className="flex flex-col gap-3.5">
                            {serviceLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <FooterLink href={href}>{label}</FooterLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Column 4: Contact ── */}
                    <div className="footer-col">
                        <ColHeading>Get In Touch</ColHeading>
                        <ul className="flex flex-col gap-5">
                            {/* Address */}
                            <li className="flex gap-3">
                                <span className="mt-0.5 shrink-0 text-[#D4AF37]">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    14 Sloane Street, Knightsbridge<br />London, SW1X 9BZ, UK
                                </p>
                            </li>
                            {/* Phone */}
                            <li className="flex gap-3 items-center">
                                <span className="shrink-0 text-[#D4AF37]">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <a href="tel:+442071234567" className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300">
                                    +44 20 7123 4567
                                </a>
                            </li>
                            {/* Email */}
                            <li className="flex gap-3 items-center">
                                <span className="shrink-0 text-[#D4AF37]">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <a href="mailto:hello@velvetveil.co.uk" className="text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors duration-300">
                                    hello@velvetveil.co.uk
                                </a>
                            </li>
                            {/* Hours */}
                            <li className="flex gap-3">
                                <span className="mt-0.5 shrink-0 text-[#D4AF37]">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    Mon – Sat: 9:00 am – 8:00 pm<br />
                                    Sunday: 10:00 am – 6:00 pm
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <GoldDivider />

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2 — Important Note
            ════════════════════════════════════════════════════════════════ */}
          
            <GoldDivider />

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 3 — Locations
            ════════════════════════════════════════════════════════════════ */}
            <div ref={locRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-6">
                    Areas We Serve
                </p>
                <div className="flex flex-wrap gap-2.5">
                    {locations.map((city) => (
                        <span
                            key={city}
                            className="px-4 py-1.5 text-xs text-neutral-400 border border-white/8 rounded-full hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300 cursor-default"
                        >
                            {city}
                        </span>
                    ))}
                </div>
            </div>


            {/* ═══════════════════════════════════════════════════════════════
                SECTION 4 — Bottom Bar
            ════════════════════════════════════════════════════════════════ */}
            <div ref={bottomRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-neutral-500 tracking-wide">
                        © 2026 Velvet Veil Salon. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        <Link href="/terms" className="text-xs text-neutral-500 hover:text-[#D4AF37] transition-colors duration-300">
                            Terms & Conditions
                        </Link>
                        <span className="w-px h-3 bg-white/10" />
                        <Link href="/privacy" className="text-xs text-neutral-500 hover:text-[#D4AF37] transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <span className="w-px h-3 bg-white/10" />
                        <Link href="/sitemap" className="text-xs text-neutral-500 hover:text-[#D4AF37] transition-colors duration-300">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;