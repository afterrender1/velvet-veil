"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { merienda } from '../fonts'

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered reveal for hero text
            gsap.fromTo(
                '.hero-content > *',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'power4.out',
                    delay: 0.5
                }
            )
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={heroRef} className={`relative h-screen w-full overflow-hidden ${merienda.className}`}>
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover scale-105" // slight scale to prevent edges
            >
                <source src="/videos/bg_video1.mp4" type="video/mp4" />
            </video>

            {/* Luxury linear Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center hero-content">

                {/* Established Date Tag */}
                <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 text-[#D4AF37] font-poppins font-medium">
                    Established 1997
                </span>

                {/* Main Salon Title */}
                <h1 className="text-6xl md:text-8xl  tracking-tighter uppercase mb-4">
                    Velvet <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-300 to-[#D4AF37]">Veil</span>
                </h1>

                {/* Tagline */}
                <p className="text-sm md:text-lg font-light tracking-[0.2em] uppercase max-w-2xl text-gray-200 font-poppins mb-8">
                    High style in a relaxed atmosphere
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 items-center">
                    <button className="bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all duration-500 rounded-full shadow-xl active:scale-95">
                        Book Appointment
                    </button>

                    <a
                        href="tel:+134 34534535"
                        className="flex items-center gap-3 group bg-black/20 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="w-7 h-7 bg-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.27 1.11l-2.2 2.2z" />
                            </svg>
                        </div>
                        <span className="text-sm font-bold tracking-widest uppercase">+134 3453 4535</span>
                    </a>
                </div>
            </div>

        
        </section>
    )
}

export default Hero