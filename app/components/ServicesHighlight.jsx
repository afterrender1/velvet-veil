"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { poppins , urbanist } from "../fonts";

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
        href: "/services/day-spa",
    },
];

const ServicesHighlight = () => {
    return (
        <section className={`py-16 md:py-24 bg-white ${urbanist.className}`}>
            <div className="max-w-450 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                {services.map((service, i) => (
                    <Link
                        key={i}
                        href={service.href}
                        className="relative group overflow-hidden  shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Image */}
                        <div className="relative bg-black/80  w-full h-80 sm:h-150">
                            <Image
                                src={service.image}
                                alt={service.name}
                                fill
                                className="object-cover object-top py-3.5 px-3 transition-transform duration-500 group-hover:scale-105"
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
        </section>
    );
};

export default ServicesHighlight;