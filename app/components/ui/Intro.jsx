import React from 'react'
import { poppins , inter } from '@/app/fonts'

const Intro = () => {
    return (
        <section className="relative py-20 md:py-32 bg-white overflow-hidden font-urbanist">

    

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Left Content: The Bold Statement */}
                <div className="lg:col-span-7 flex flex-col items-start">
                    <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.5em] mb-6">
                        Our Philosophy
                    </span>

                    <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-black">
                        The Art <br />
                        <span className="text-white [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
                            of Healthy
                        </span> <br />
                        Hair.
                    </h2>

                    <p className={`font-poppins text-gray-400 text-sm md:text-base mt-8 max-w-md leading-relaxed ${inter.className}`}>
                        We’ve traded the traditional salon noise for a world of tranquility and expertise.
                        Step into a space where creativity meets clinical precision.
                    </p>
                </div>

                {/* Right Content: The Detail & CTA */}
                <div className={`lg:col-span-5 flex flex-col space-y-12 border-l border-gray-100 pl-8 md:pl-12 ${inter.className}`}>
                    <div className="space-y-6">
                        <p className="font-poppins text-gray-600 text-lg leading-relaxed italic">
                            "Ensuring every guest leaves feeling confident, radiant, and redefined."
                        </p>
                        <p className="font-poppins text-gray-500 text-sm leading-relaxed">
                            Our talented team delivers personalized treatments and exceptional service,
                            ensuring every guest leaves feeling confident and radiant. Experience
                            the care that makes Velvet Veil the ultimate destination.
                        </p>
                    </div>

                    {/* Minimalist Action Link */}
                    <a1
                        href="tel:+13434534535"
                        className="group flex items-center gap-6 self-start"
                    >
                        <div className="w-14 h-14 rounded-full border border-black flex items-center justify-center group-hover:bg-black transition-all duration-500">
                            <svg
                                className="w-5 h-5 text-black group-hover:text-white group-hover:rotate-12 transition-all duration-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.27 1.11l-2.2 2.2z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase">Consultation</span>
                            <span className="text-lg font-bold tracking-tighter text-black">+134 3453 4535</span>
                        </div>
                    </a1>
                </div>
            </div>
        </section>
    )
}

export default Intro