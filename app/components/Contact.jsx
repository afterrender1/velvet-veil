"use client";

import React from "react";
import { urbanist } from "../fonts";

const Contact = () => {
    return (
        <section id="contact" className={`py-16 md:py-42 bg-white ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">
                        Get in Touch
                    </h2>
                    <p className="text-neutral-500 mt-3 max-w-xl mx-auto">
                        Book your appointment or contact us for any queries. Experience luxury beauty with Velvet Veil.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT: Info */}
                    <div className="bg-black text-white rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-lg">

                        <div>
                            <h3 className="text-2xl font-semibold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-5 text-sm md:text-base">

                                <div>
                                    <p className="text-neutral-400">Address</p>
                                    <p className="font-medium">
                                        18 Whitechurch Lane, London, E1 7QR
                                    </p>
                                </div>

                                <div>
                                    <p className="text-neutral-400">Phone</p>
                                    <p className="font-medium">
                                        +44 203-730-9118
                                    </p>
                                </div>

                                <div>
                                    <p className="text-neutral-400">Email</p>
                                    <p className="font-medium">
                                        info@velvetveil.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-neutral-400">
                            To ensure privacy and comfort, filming inside the salon is not permitted.
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="bg-white border border-neutral-200 rounded-2xl p-8 md:p-10 shadow-sm">

                        <h3 className="text-2xl font-semibold text-black mb-6">
                            Send a Message
                        </h3>

                        <form className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="text-sm text-neutral-600">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full mt-1 px-4 py-3 rounded-lg border border-neutral-200 focus:border-black focus:outline-none transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm text-neutral-600">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full mt-1 px-4 py-3 rounded-lg border border-neutral-200 focus:border-black focus:outline-none transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm text-neutral-600">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full mt-1 px-4 py-3 rounded-lg border border-neutral-200 focus:border-black focus:outline-none transition"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full py-3 rounded-full bg-black text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#D4AF37] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;