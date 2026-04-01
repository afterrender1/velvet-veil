"use client";

import React from "react";
import Image from "next/image";
import { urbanist } from "../fonts";

const team = [
    {
        name: "Olivia Carter",
        role: "Senior Hair Stylist",
        image: "/images/team_images/olivia.jpg",
    },
    {
        name: "Ethan Brooks",
        role: "Color Specialist",
        image: "/images/team_images/ethan.jpg",
    },
    {
        name: "Sophia Bennett",
        role: "Makeup Artist",
        image: "/images/team_images/sophia.jpg",
    },
    {
        name: "Liam Parker",
        role: "Massage Therapist",
        image: "/images/team_images/liam.jpg",
    },
];

const MeetTheTeam = () => {
    return (
        <section className={`py-20 bg-neutral-50 ${urbanist.className}`}>
            <div className="max-w-450 mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 uppercase tracking-wide">
                        Meet The Team
                    </h2>
                    <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
                    <p className="text-neutral-500 mt-4 text-sm md:text-base">
                        Our professionals bring passion, precision, and luxury to every service.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">

                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="group relative  overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative w-full h-100 lg:h-150 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                            </div>

                            {/* Info */}
                            <div className="absolute bottom-0 w-full p-0 text-center">
                                <div className="bg-black/20 backdrop-blur-md  py-3 px-2 shadow-md">
                                    <h3 className="text-sm md:text-base font-semibold text-gray-200">
                                        {member.name}
                                    </h3>
                                    <p className="text-[11px] text-[#D4AF37] font-medium mt-1 uppercase tracking-wide">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default MeetTheTeam;