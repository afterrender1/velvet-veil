"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { urbanist } from "../fonts"; // uncomment in your project

const services = [
    {
        name: "Hair",
        image: "/images/services_images/man_hair.jpg",
        href: "/services/hair",
    },
    {
        name: "Color",
        image: "/images/services_images/hair_color.jpg",
        href: "/services/color",
    },
    {
        name: "Makeup",
        image: "/images/services_images/women_makeup.jpg",
        href: "/services/makeup",
    },
    {
        name: "Nail",
        image: "/images/services_images/nailcare.jpg",
        href: "/services/nail",
    },
    {
        name: "Massage",
        image: "/images/services_images/massagecare2.jpg",
        href: "/services/massage",
    },
    {
        name: "Face",
        image: "/images/services_images/facecare2.jpg",
        href: "/services/face",
    },
];

const SLIDE_DURATION = 5000;
const TOTAL_SLIDES = 2;

export default function ServicesHighlight() {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const trackRef = useRef(null);
    const timerBarRef = useRef(null);
    const timerTweenRef = useRef(null);
    const autoPlayRef = useRef(null);

    // ── Timer bar ──────────────────────────────────────────────────────────
    const startTimerBar = useCallback(() => {
        if (timerTweenRef.current) timerTweenRef.current.kill();
        gsap.set(timerBarRef.current, { scaleX: 0, transformOrigin: "left center" });
        timerTweenRef.current = gsap.to(timerBarRef.current, {
            scaleX: 1,
            duration: SLIDE_DURATION / 1000,
            ease: "none",
        });
    }, []);

    // ── Slide transition ───────────────────────────────────────────────────
    const goTo = useCallback(
        (next) => {
            if (isAnimating || next === current) return;
            setIsAnimating(true);

            const cards = trackRef.current?.querySelectorAll(".service-card");

            gsap.to(cards, {
                opacity: 0,
                x: 20,
                stagger: 0.06,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    setCurrent(next);
                    setIsAnimating(false);
                },
            });
        },
        [current, isAnimating]
    );

    // Enter new cards whenever `current` changes
    useEffect(() => {
        const cards = trackRef.current?.querySelectorAll(".service-card");
        if (!cards) return;
        gsap.fromTo(
            cards,
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.7,
                ease: "power3.out",
            }
        );
        startTimerBar();
    }, [current, startTimerBar]);

    // ── Auto-play ──────────────────────────────────────────────────────────
    useEffect(() => {
        if (isHovered) {
            clearInterval(autoPlayRef.current);
            timerTweenRef.current?.pause();
            return;
        }
        timerTweenRef.current?.resume();
        autoPlayRef.current = setInterval(() => {
            goTo((current + 1) % TOTAL_SLIDES);
        }, SLIDE_DURATION);
        return () => clearInterval(autoPlayRef.current);
    }, [current, isHovered, goTo]);

    const visibleServices = services.slice(current * 3, current * 3 + 3);

    return (
        <section
            // className={`py-16 md:py-24 bg-white ${urbanist.className}`}
            className={`py-16 md:py-24 bg-white ${urbanist.className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* ── Timer bar ── */}
            <div className="max-w-350 mx-auto px-6 mb-3 ">
                <div className="h-1.5 bg-gray-100 relative overflow-hidden">
                    <div ref={timerBarRef} className="absolute inset-0 rounded-full  bg-black origin-left" />
                </div>
            </div>

            {/* ── Cards grid ── */}
            <div className="max-w-450 mx-auto px-6">
                <div
                    ref={trackRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
                >
                    {visibleServices.map((service, i) => (
                        <Link
                            key={`${current}-${i}`}
                            href={service.href}
                            className="service-card relative group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative bg-white w-full h-80 sm:h-150">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    className="object-cover object-top rounded transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-6 left-6 right-6 text-center">
                                <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest mb-2">
                                    {service.name}
                                </h3>
                                <span className="inline-block mt-2">
                                    <span className="group inline-flex items-center gap-2 px-4 py-2 border border-white text-white text-sm font-semibold uppercase rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all duration-300">
                                        Learn More
                                        <svg
                                            className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* ── Dots + arrows ── */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={() => goTo((current - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)}
                    disabled={isAnimating}
                    aria-label="Previous"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#000000] hover:text-[#000000] transition-all duration-300 disabled:opacity-40"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Slide ${i + 1}`}
                        className={`rounded-full transition-all duration-500 ${i === current
                            ? "w-7 h-2 bg-[#000000]"
                            : "w-2 h-2 bg-gray-300 hover:bg-[#0000]/50"
                            }`}
                    />
                ))}

                <button
                    onClick={() => goTo((current + 1) % TOTAL_SLIDES)}
                    disabled={isAnimating}
                    aria-label="Next"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#000000] hover:text-[#000000] transition-all duration-300 disabled:opacity-40"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}