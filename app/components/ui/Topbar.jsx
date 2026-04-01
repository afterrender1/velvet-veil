"use client";

import React, { useState } from "react";
import { urbanist } from "@/app/fonts";

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`w-full px-4 mt-2 lg:mt-3 ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto bg-neutral-900 text-white rounded-2xl md:rounded-full transition-all duration-300 overflow-hidden shadow-sm">
                <div className="px-5 py-1.5 md:px-10 md:py-0 md:h-9 flex flex-col md:flex-row items-start md:items-start justify-between gap-0 md:gap-4">

                    {/* Main Row: Address & Toggle Button */}
                    <div className="w-full md:w-auto flex items-center justify-between md:justify-center h-full">
                        <div className="flex items-center gap-2 text-neutral-300">
                            <svg
                                className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 1117.657 16.657z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-[10px] xs:text-[11px] sm:text-xs tracking-wide whitespace-nowrap">
                                18 Whitechurch Lane, London. E1 7QR
                            </span>
                        </div>

                        {/* Mobile Dropdown Trigger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-1 text-[#D4AF37] focus:outline-none flex items-center justify-center"
                            aria-label="Toggle Contact Info"
                        >
                            <svg
                                className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Smooth Dropdown Wrapper */}
                    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2 mb-2' : 'grid-rows-[0fr] opacity-0 md:opacity-100 md:grid-rows-[1fr]'}`}>
                        <div className="overflow-hidden h-full">
                            <div className="flex flex-col md:flex-row items-start gap-2.5 sm:gap-6 text-neutral-400 md:h-full">

                                {/* Email */}
                                <a
                                    href="mailto:info@maryamhairandbeauty.co.uk"
                                    className="group flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                                >
                                    <svg
                                        className="w-3 h-3 shrink-0 text-[#D4AF37]"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-[10px] xs:text-[11px] sm:text-xs lowercase tracking-tight">
                                        info@maryamhairandbeauty.co.uk
                                    </span>
                                </a>

                                {/* Phone */}
                                <a
                                    href="tel:+442037309118"
                                    className="group flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                                >
                                    <svg
                                        className="w-3 h-3 shrink-0 text-[#D4AF37]"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-[10px] xs:text-[11px] sm:text-xs font-medium">
                                        +44 203-730-9118
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Topbar;