"use client";

import React, { useState } from "react";
import Image from "next/image";
import { urbanist } from "../fonts";

const faqs = [
    {
        q: "What services do you offer?",
        a: "Velvet Veil Salon provides professional haircuts, coloring, styling, facials, makeup, nail care, and relaxing massages. We cater to both women and men with tailored treatments.",
    },
    {
        q: "Can men visit the salon?",
        a: "Absolutely! Velvet Veil welcomes all clients. We offer specialized services for men including haircuts, beard grooming, scalp treatments, and styling.",
    },
    {
        q: "How can I book an appointment?",
        a: "Appointments can be booked online via our website, over the phone, or directly at the salon. Walk-ins are welcome subject to availability.",
    },
    {
        q: "Which hair and beauty products do you use?",
        a: "We use only high-quality professional products to ensure your hair, skin, and nails receive premium care with long-lasting results.",
    },
    {
        q: "Is Velvet Veil a ladies-only salon?",
        a: "No, Velvet Veil is a unisex salon providing services for both men and women in a luxurious and welcoming environment.",
    },
    {
        q: "Do you offer custom packages?",
        a: "Yes! We provide personalized packages for events, weddings, and regular beauty maintenance tailored to your needs.",
    },
];

const Faq = () => {
    const [active, setActive] = useState(0);

    return (
        <section className={`py-16 md:py-24 bg-white ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT IMAGE */}
                <div className="relative w-full h-75 sm:h-100 lg:h-155 overflow-hidden ">
                    <Image
                        src="/images/services_images/facecare2.jpg" // replace with your salon image
                        alt="Velvet Veil Salon"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* RIGHT FAQ */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                        Why Choose Velvet Veil Salon
                    </h2>

                    <div className="flex flex-col gap-4">
                        {faqs.map((item, index) => (
                            <div key={index} className="border-b border-gray-200">
                                <button
                                    onClick={() => setActive(active === index ? null : index)}
                                    className="w-full text-left py-4 flex justify-between items-center text-lg md:text-xl font-medium text-black hover:text-[#D4AF37] transition-colors duration-300"
                                >
                                    {item.q}
                                    <span className={`transform transition-transform duration-300 ${active === index ? "rotate-45" : ""}`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-600 ${active === index ? "max-h-40 md:max-h-60" : "max-h-0"}`}
                                >
                                    <p className="text-gray-700 md:text-lg py-2 md:py-4">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;