import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute w-full h-full object-cover"
  >
    <source src="/videos/bg_video.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full text-white">
    <h1 className="text-5xl font-poppins">Velvet Veil</h1>
  </div>
</section>
    
    </>
  )
}

export default Hero