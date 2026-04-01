"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { poppins } from "../fonts";
import Topbar from "./ui/Topbar";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
    {
        name: "Hair",
        image: "/images/services_images/hair.png",
        desc: "Cuts, color, highlights & restorative treatments.",
        sub: ["Cut & Styling", "Color & Highlights", "Treatments"],
        href: "/services/hair",
    },
    {
        name: "Nails",
        image: "/images/services_images/nail.png",
        desc: "Manicure & pedicure for perfectly polished nails.",
        sub: ["Manicure", "Pedicure"],
        href: "/services/nails",
    },
    {
        name: "Face",
        image: "/images/services_images/face.png",
        desc: "Rejuvenating facials and precise threading.",
        sub: ["Facial", "Threading"],
        href: "/services/face",
    },
    {
        name: "Massage",
        image: "/images/services_images/massage.png",
        desc: "Classic massage for full-body relaxation.",
        sub: ["Classic Massage"],
        href: "/services/massage",
    },
    {
        name: "Makeup",
        image: "/images/services_images/makeup.png",
        desc: "Flawless looks for every occasion.",
        sub: [],
        href: "/services/makeup",
    },
];

const navLinks = [
    { label: "Price List", href: "/price-list" },
    { label: "Offers", href: "/offers" },
    { label: "Contact", href: "/contact" },
];

// ─── Mega Menu ─────────────────────────────────────────────────────────────────
const MegaMenu = ({ visible }) => (
    <div
        aria-hidden={!visible}
        className={`
            absolute left-1/2 -translate-x-1/2 top-[calc(100%+20px)]
            bg-white border border-[#D4AF37] rounded-2xl
            shadow-[0_20px_60px_-8px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.03)]
            transition-all duration-300 ease-out origin-top
            ${visible
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-[0.98] -translate-y-1 pointer-events-none"
            }
        `}
        style={{ width: "660px" }}
    >
        {/* Top gold hairline */}
        <div className="h-0.5 w-full rounded-t-2xl bg-linear-to-r from-transparent via-[#000000] to-transparent" />

        {/* Service Cards Grid */}
        <div className="p-4 grid grid-cols-5 gap-2.5">
            {services.map((service, i) => (
                <Link
                    key={i}
                    href={service.href}
                    className="group flex flex-col rounded-xl overflow-hidden   transition-all duration-200"
                >
                    <div className="relative w-full overflow-hidden bg-neutral-100" style={{ aspectRatio: "4/3" }}>
                        <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            sizes="200px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
                    </div>

                    <div className="p-2.5 flex-1 flex flex-col gap-0.5">
                        <p className="text-[13px] font-semibold text-neutral-700 group-hover:text-[#D4AF37] transition-colors duration-200 leading-tight">
                            {service.name}
                        </p>
                        <p className="text-[10.5px] text-neutral-400 leading-relaxed line-clamp-2">
                            {service.desc}
                        </p>
                    </div>
                </Link>
            ))}
        </div>

        {/* Footer */}
        <div className="px-5 pb-6  gap-3 flex justify-center items-center">
            <div>
                <Link
                    href="/services"
                    className="group relative flex items-center gap-3 bg-black py-2.5 px-5 rounded-full overflow-hidden duration-200 active:scale-95"
                >
                    <span className="relative flex items-center gap-2 text-[12px] font-semibold  text-white uppercase font-urbanist transition-colors duration-300">
                        View all services
                        <svg
                            className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </Link>
            </div>
            <div>
                <Link
                    href="/services"
                    className="group relative flex items-center gap-3 bg-black py-2.5 px-5 rounded-full overflow-hidden duration-200 active:scale-95"
                >
                    <span className="relative flex items-center gap-2 text-[12px] font-semibold  text-white uppercase font-urbanist transition-colors duration-300">
                        Book Now
                        <svg
                            className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    </div>
);

// ─── Mobile Accordion ──────────────────────────────────────────────────────────
const ServiceAccordion = ({ onClose }) => {
    const [open, setOpen] = useState(false);
    const bodyRef = useRef(null);

    useEffect(() => {
        if (!bodyRef.current) return;
        if (open) {
            gsap.fromTo(
                bodyRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.32, ease: "power2.out" }
            );
        } else {
            gsap.to(bodyRef.current, {
                height: 0, opacity: 0,
                duration: 0.24, ease: "power2.in",
            });
        }
    }, [open]);

    return (
        <div className="border-b border-neutral-100">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center py-4 text-sm font-semibold text-neutral-800 focus:outline-none"
                aria-expanded={open}
            >
                Services
                <span
                    className="text-[#D4AF37] text-lg leading-none transition-transform duration-300"
                    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}
                >
                    +
                </span>
            </button>

            <div ref={bodyRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
                <div className="pb-4 grid grid-cols-2 gap-2">
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            href={service.href}
                            onClick={onClose}
                            className="group flex flex-col rounded-xl overflow-hidden border border-neutral-100 hover:border-[#D4AF37]/40 bg-neutral-50"
                        >
                            <div className="relative w-full overflow-hidden bg-neutral-100" style={{ aspectRatio: "4/3" }}>
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    sizes="140px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-2">
                                <p className="text-xs font-semibold text-neutral-800">{service.name}</p>
                                {service.sub.length > 0 && (
                                    <p className="text-[10px] text-neutral-400 mt-0.5 leading-relaxed">
                                        {service.sub.join(" · ")}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ─── Main Navbar ───────────────────────────────────────────────────────────────
const Navbar = () => {
    const [showMega, setShowMega] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const megaTimerRef = useRef(null);
    const drawerRef = useRef(null);
    const overlayRef = useRef(null);
    const drawerItemsRef = useRef(null);

    // ── NEW: ref for the <header> element ────────────────────────────────────
    const headerRef = useRef(null);

    // ── NEW: Shutter-open entrance animation (runs once on mount) ─────────────
    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        // Set initial hidden state immediately — no flicker
        gsap.set(header, { y: "-110%", opacity: 0 });

        // Animate down into place
        gsap.to(header, {
            y: "0%",
            opacity: 1,
            duration: 0.9,
            delay: 0.15,          // intentional pause — feels luxurious
            ease: "expo.out",
        });
    }, []); // empty deps → runs once only
    // ─────────────────────────────────────────────────────────────────────────

    const openDrawer = () => {
        setMobileOpen(true);
        document.body.style.overflow = "hidden";
        gsap.set(drawerRef.current, { x: "-100%" });
        gsap.set(overlayRef.current, { opacity: 0, display: "block" });
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(drawerRef.current, { x: "0%", duration: 0.42, ease: "power3.out" });
        gsap.fromTo(
            drawerItemsRef.current?.children || [],
            { opacity: 0, x: -14 },
            { opacity: 1, x: 0, stagger: 0.055, duration: 0.28, delay: 0.22, ease: "power2.out" }
        );
    };

    const closeDrawer = () => {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" });
        gsap.to(drawerRef.current, {
            x: "-100%", duration: 0.36, ease: "power3.in",
            onComplete: () => {
                setMobileOpen(false);
                document.body.style.overflow = "";
                gsap.set(overlayRef.current, { display: "none" });
            },
        });
    };

    const handleMouseEnter = () => {
        if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
        setShowMega(true);
    };
    const handleMouseLeave = () => {
        megaTimerRef.current = setTimeout(() => setShowMega(false), 120);
    };

    return (
        <>
            {/* ── ref added to <header> — only change to JSX ── */}
            <header ref={headerRef} className={`fixed top-0 w-full z-50 ${poppins.className}`}>
                <div className="absolute inset-0 bg-white/80 lg:bg-white/90 backdrop-blur-sm border-b rounded-b-4xl rounded-t-sm border-neutral-200/60 shadow-[0_1px_12px_rgba(0,0,0,0.06)]" />

                <nav className="relative max-w-7xl mx-auto px-6 lg:px-10">
                    <Topbar />
                    <div className="flex justify-between items-center h-15 lg:h-20">

                        {/* Logo */}
                       <Link href="/" className="shrink-0">
    <Image
        src="/images/vvv.png"
        alt="Velvet Veil"
        width={160}
        height={36}
        priority
        className="w-auto h-20 md:h-30.5" // Mobile pe h-10 (40px) aur desktop pe 66px
    />
</Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">

                            {/* Services + Mega */}
                            <div
                                className="relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-[#D4AF37] transition-colors duration-200 focus:outline-none"
                                    aria-haspopup="true"
                                    aria-expanded={showMega}
                                >
                                    Services
                                    <svg
                                        className={`w-3.5 h-3.5 transition-transform duration-300 ${showMega ? "rotate-180" : ""}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <MegaMenu visible={showMega} />
                            </div>

                            {navLinks.map(({ label, href }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-sm font-medium text-neutral-700 hover:text-[#D4AF37] transition-colors duration-200"
                                >
                                    {label}
                                </Link>
                            ))}

                            <span className="w-px h-5 bg-neutral-200" aria-hidden />

                            <Link
                                href="/book"
                                className="inline-flex items-center px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[#D4AF37] hover:shadow-[0_4px_20px_rgba(212,175,55,0.35)]"
                            >
                                Book Now
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={openDrawer}
                            className="md:hidden flex flex-col gap-1.25 justify-center items-end w-10 h-10 focus:outline-none"
                            aria-label="Open menu"
                        >
                            <span className="w-6 h-[1.5px] bg-neutral-800 block rounded-full" />
                            <span className="w-4 h-[1.5px] bg-neutral-800 block rounded-full" />
                            <span className="w-6 h-[1.5px] bg-neutral-800 block rounded-full" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Overlay */}
            <div
                ref={overlayRef}
                style={{ display: "none" }}
                onClick={closeDrawer}
                className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm"
                aria-hidden="true"
            />

            {/* Off-canvas Drawer */}
            <aside
                ref={drawerRef}
                style={{ transform: "translateX(-100%)" }}
                className="fixed top-0 left-0 z-70 h-full w-[82%] max-w-85 bg-white shadow-2xl flex flex-col"
                aria-label="Mobile navigation"
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-1 border-b border-neutral-100">
                    <Link href="/" onClick={closeDrawer}>
                        <Image
                            src="/images/vvv.png"
                            alt="Velvet Veil"
                            width={200}
                            height={30}
                            style={{ width: "auto", height: "90px" }}
                        />
                    </Link>
                    <button
                        onClick={closeDrawer}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors duration-150 focus:outline-none"
                        aria-label="Close menu"
                    >
                        <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Gold accent */}
                <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

                {/* Drawer Body */}
                <div ref={drawerItemsRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
                    <ServiceAccordion onClose={closeDrawer} />
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={closeDrawer}
                            className="flex items-center py-4 text-sm font-semibold text-neutral-800 border-b border-neutral-100 hover:text-[#D4AF37] transition-colors duration-150"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Drawer Footer */}
                <div className="px-6 py-6 border-t border-neutral-100">
                    <Link
                        href="/book"
                        onClick={closeDrawer}
                        className="block w-full text-center py-3.5 bg-neutral-900 text-white text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4AF37] transition-colors duration-300"
                    >
                        Book Now
                    </Link>
                    <p className="text-center text-[11px] text-neutral-400 mt-3 tracking-wide">
                        Luxury beauty, redefined.
                    </p>
                </div>
            </aside>
        </>
    );
};

export default Navbar;