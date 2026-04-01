"use client";

import React from "react";
import { urbanist } from "@/app/fonts";

const Topbar = () => {
    return (
        <div className={`w-full bg-neutral-900 text-white text-[12px] rounded-full mt-3 ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

                {/* Left - Address */}
                <div className="flex items-center gap-2 text-neutral-300">
                    <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243A8 8 0 1117.657 16.657z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>18 Whitechurch Lane, London. E1 7QR</span>
                </div>

                {/* Right - Contact */}
                <div className="flex flex-wrap items-center gap-4 text-neutral-300">

                    {/* Email */}
                    <a
                        href="mailto:info@maryamhairandbeauty.co.uk"
                        className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                    >
                        <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-8 0m8 0l-8 0m-2 4h12M4 6h16" />
                        </svg>
                        info@maryamhairandbeauty.co.uk
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+442037309118"
                        className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                    >
                        <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h10v-2H9.42a.25.25 0 01-.22-.37l.94-1.7h5.45a1 1 0 00.92-.62L21 6H6" />
                        </svg>
                        +44 203-730-9118
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Topbar;