"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Navbar from "@/app/components/Navbar";
import { urbanist } from "../fonts";

// ─── Variant Row ───────────────────────────────────────────────────────────────

const VariantRow = React.forwardRef(({ variant }, ref) => (
    <div
        ref={ref}
        className="group/row flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 px-4 py-4 rounded-xl hover:bg-[#FAFAF8] transition-colors duration-200 border border-transparent hover:border-neutral-100"
    >
        <div className="flex items-start gap-3 min-w-0">
            <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover/row:bg-[#D4AF37] transition-colors duration-300" />
            <div className="min-w-0">
                <p className="text-sm font-semibold text-neutral-800 leading-snug">{variant.name}</p>
                {variant.duration && variant.duration !== "—" && (
                    <p className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                        <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {variant.duration}
                    </p>
                )}
            </div>
        </div>
        <div className="flex items-center gap-3 pl-5.5 sm:pl-0 shrink-0">
            {variant.price && (
                <span className="text-base font-bold text-neutral-900 min-w-14 sm:text-right">
                    {variant.price}
                </span>
            )}
            <Link
                href="/book"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full hover:bg-[#D4AF37] hover:scale-105 hover:shadow-[0_4px_16px_rgba(212,175,55,0.35)] active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
                Book Now
            </Link>
        </div>
    </div>
));
VariantRow.displayName = "VariantRow";

// ─── Accordion Item ────────────────────────────────────────────────────────────

const AccordionItem = ({ service, isOpen, onToggle }) => {
    const bodyRef  = useRef(null);
    const rowsRef  = useRef([]);
    const didMount = useRef(false);

    useEffect(() => {
        const body = bodyRef.current;
        if (!body) return;
        if (!didMount.current) {
            gsap.set(body, { height: 0, opacity: 0, overflow: "hidden" });
            didMount.current = true;
            return;
        }
        if (isOpen) {
            gsap.set(body, { overflow: "hidden" });
            const h = body.scrollHeight;
            gsap.fromTo(body,
                { height: 0, opacity: 0 },
                { height: h, opacity: 1, duration: 0.44, ease: "power3.out",
                  onComplete: () => gsap.set(body, { overflow: "visible" }) }
            );
            gsap.fromTo(rowsRef.current.filter(Boolean),
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, stagger: 0.05, duration: 0.28, delay: 0.14, ease: "power2.out" }
            );
        } else {
            gsap.set(body, { overflow: "hidden" });
            gsap.to(body, { height: 0, opacity: 0, duration: 0.32, ease: "power3.in" });
        }
    }, [isOpen]);

    return (
        <article className={`rounded-2xl border overflow-hidden transition-all duration-300 bg-white ${
            isOpen
                ? "border-[#D4AF37]/35 shadow-[0_4px_28px_rgba(212,175,55,0.10)]"
                : "border-neutral-100 hover:border-neutral-200 hover:shadow-sm"
        }`}>
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between px-5 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40"
            >
                <div className="flex items-center gap-3 min-w-0 flex-1 mr-4">
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <p className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-neutral-900" : "text-neutral-700 group-hover:text-neutral-900"}`}>
                                {service.name}
                            </p>
                            {service.popular && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider shrink-0">
                                    ✦ Popular
                                </span>
                            )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                            <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                                <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {service.summary}
                            </span>
                            <span className="w-px h-3 bg-neutral-200 shrink-0" />
                            <span className={`text-xs font-semibold transition-colors duration-300 ${isOpen ? "text-[#D4AF37]" : "text-neutral-500"}`}>
                                From {service.from}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                    <span className="hidden sm:block text-xs text-neutral-400 font-medium">
                        {service.variants.length} option{service.variants.length > 1 ? "s" : ""}
                    </span>
                    <span className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen ? "border-[#D4AF37]/40 bg-[#D4AF37]/8 rotate-180" : "border-neutral-200 group-hover:border-[#D4AF37]/40"
                    }`}>
                        <svg className={`w-3.5 h-3.5 transition-colors duration-300 ${isOpen ? "text-[#D4AF37]" : "text-neutral-400 group-hover:text-[#D4AF37]"}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </div>
            </button>

            <div ref={bodyRef} style={{ height: 0, opacity: 0 }}>
                <div className="h-px mx-5 bg-linear-to-r from-[#D4AF37]/30 via-neutral-100 to-transparent" />
                <div className="px-3 pb-3 pt-2 space-y-0.5">
                    {service.variants.map((v, vi) => (
                        <VariantRow key={vi} variant={v} ref={(el) => (rowsRef.current[vi] = el)} />
                    ))}
                </div>
            </div>
        </article>
    );
};

// ─── Category Section ──────────────────────────────────────────────────────────

const CategorySection = ({ category, services, openId, onToggle }) => {
    if (!services || services.length === 0) return null;
    return (
        <div className="mb-10 last:mb-0">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-[#D4AF37] text-sm leading-none">{category.icon}</span>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500">{category.label}</h2>
                <span className="flex-1 h-px bg-neutral-100" />
                <span className="text-[11px] text-neutral-400 font-medium">{services.length} service{services.length > 1 ? "s" : ""}</span>
            </div>
            <div className="space-y-3">
                {services.map((service) => (
                    <AccordionItem
                        key={service.id}
                        service={service}
                        isOpen={openId === service.id}
                        onToggle={() => onToggle(service.id)}
                    />
                ))}
            </div>
        </div>
    );
};

// ─── Search Bar ────────────────────────────────────────────────────────────────

const SearchBar = ({ value, onChange }) => (
    <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
            </svg>
        </span>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search services…"
            className="w-full pl-10 pr-10 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 bg-neutral-50 border border-neutral-200 rounded-full focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)] transition-all duration-300"
        />
        {value && (
            <button onClick={() => onChange("")} aria-label="Clear"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-500 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        )}
    </div>
);

// ─── Template ──────────────────────────────────────────────────────────────────

export default function ServicePricingTemplate({ pageTitle, eyebrow, categories, services }) {

    const ALL_TABS = [{ id: "all", label: "All Services", icon: "✦" }, ...categories];

    const [activeCategory, setActiveCategory] = useState("all");
    const [openId, setOpenId]                 = useState(null);
    const [searchQuery, setSearchQuery]       = useState("");
    const headerRef = useRef(null);
    const listRef   = useRef(null);

    useEffect(() => {
        if (headerRef.current)
            gsap.fromTo(headerRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
        if (listRef.current)
            gsap.fromTo(listRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: "power3.out" });
    }, []);

    const filteredServices = useMemo(() => {
        let list = services;
        if (activeCategory !== "all") list = list.filter((s) => s.category === activeCategory);
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            list = list.filter((s) =>
                s.name.toLowerCase().includes(q) ||
                s.variants.some((v) => v.name.toLowerCase().includes(q))
            );
        }
        return list;
    }, [activeCategory, searchQuery, services]);

    const groupedServices = useMemo(() => {
        if (activeCategory !== "all" || searchQuery.trim()) return null;
        const groups = {};
        filteredServices.forEach((s) => {
            if (!groups[s.category]) groups[s.category] = [];
            groups[s.category].push(s);
        });
        return groups;
    }, [activeCategory, filteredServices, searchQuery]);

    const handleToggle   = useCallback((id) => setOpenId((p) => (p === id ? null : id)), []);
    const handleCategory = (id) => { setActiveCategory(id); setOpenId(null); setSearchQuery(""); };

    const totalCount = filteredServices.length;

    return (
        <>
            <Navbar />
            <section className={`bg-white min-h-screen pt-16 md:pt-44 pb-24 ${urbanist.className}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6">

                    {/* Header */}
                    <div ref={headerRef} className="mb-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-7">
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-2">{eyebrow}</p>
                                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">{pageTitle}</h1>
                                <p className="text-sm text-neutral-400 mt-2">Tap any service to see all options and book.</p>
                            </div>
                            <Link href="/book"
                                className="self-start sm:self-center inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 text-white text-[11px] font-semibold uppercase tracking-widest rounded-full hover:bg-[#D4AF37] hover:shadow-[0_6px_28px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap">
                                Make Appointment
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    </div>

                    {/* Sticky Tabs */}
                    <div className="sticky top-18 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 bg-white/95 backdrop-blur-md border-b border-neutral-100 mb-8">
                        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-none">
                            {ALL_TABS.map((cat) => {
                                const count = cat.id === "all" ? services.length : services.filter((s) => s.category === cat.id).length;
                                const isActive = activeCategory === cat.id;
                                return (
                                    <button key={cat.id} onClick={() => handleCategory(cat.id)}
                                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap shrink-0 ${
                                            isActive ? "bg-neutral-900 text-white shadow-sm" : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-800"
                                        }`}>
                                        {cat.label}
                                        <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold transition-colors duration-300 ${isActive ? "bg-white/20 text-white" : "bg-neutral-200 text-neutral-500"}`}>
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* List */}
                    <div ref={listRef}>
                        {searchQuery && (
                            <div className="flex items-center justify-between mb-5">
                                <p className="text-sm text-neutral-500">
                                    {totalCount === 0 ? "No services found" :
                                        <>{totalCount} result{totalCount > 1 ? "s" : ""} for <span className="font-semibold text-neutral-800">&ldquo;{searchQuery}&rdquo;</span></>}
                                </p>
                                <button onClick={() => setSearchQuery("")} className="text-xs text-[#D4AF37] font-semibold hover:underline underline-offset-2">Clear</button>
                            </div>
                        )}

                        {totalCount === 0 && (
                            <div className="text-center py-20">
                                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-neutral-100">
                                    <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
                                    </svg>
                                </div>
                                <p className="text-base font-semibold text-neutral-700 mb-1">No services found</p>
                                <p className="text-sm text-neutral-400">Try a different search or browse all categories.</p>
                                <button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                                    className="mt-5 px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#D4AF37] transition-all duration-300">
                                    View All Services
                                </button>
                            </div>
                        )}

                        {/* Grouped view */}
                        {groupedServices && totalCount > 0 && (
                            <>
                                {categories.map((cat) =>
                                    groupedServices[cat.id]?.length ? (
                                        <CategorySection
                                            key={cat.id}
                                            category={cat}
                                            services={groupedServices[cat.id]}
                                            openId={openId}
                                            onToggle={handleToggle}
                                        />
                                    ) : null
                                )}
                            </>
                        )}

                        {/* Flat filtered view */}
                        {!groupedServices && totalCount > 0 && (
                            <div className="space-y-3">
                                {filteredServices.map((service) => (
                                    <AccordionItem
                                        key={service.id}
                                        service={service}
                                        isOpen={openId === service.id}
                                        onToggle={() => handleToggle(service.id)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-6 py-6 rounded-2xl border border-neutral-100 bg-[#FAFAF8]">
                        <div>
                            <p className="text-sm font-semibold text-neutral-800">Can't find what you're looking for?</p>
                            <p className="text-sm text-neutral-500 mt-0.5">Our team will help you choose the right service.</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <Link href="/contact" className="px-5 py-2.5 border border-neutral-200 text-neutral-700 text-[11px] font-semibold uppercase tracking-wider rounded-full hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-300">
                                Contact Us
                            </Link>
                            <Link href="/book" className="px-5 py-2.5 bg-neutral-900 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full hover:bg-[#D4AF37] hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                                Book a Session
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}