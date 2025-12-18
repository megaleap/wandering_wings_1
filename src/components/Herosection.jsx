import React from 'react'

const Herosection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="flex">
        {/* Top Tagline */}
              <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-10 max-w-5xl ">

        <p className="text-white text-sm md:text-base lg:text-lg font-medium tracking-wider mb-4 md:mb-6">
          Real Eggs. Real Nutrition. Real Health
        </p>

        {/* Main Heading */}
        <div className="flex items-start gap-4 md:gap-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8 max-w-4xl">
            Premium Pasture-Raised Eggs for Every Plate that Demands Quality.
          </h1>
          
          {/* Chicken Icon */}
          <div className="flex-shrink-0 mt-2 md:mt-4">
            <span className="text-6xl md:text-7xl lg:text-8xl">🐔</span>
          </div>
        </div>

        {/* Description */}
        <div className="text-white text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-3xl space-y-2">
          <p>At Wandering Wings, open-pasture farming and herbal-rich feed ensure every egg delivers:</p>
          <p>•Higher Nutrition — more Vitamin D, Omega-3s & natural antioxidants</p>
          <p>• Pure Freshness — clean aroma, no fishy smell.</p>
        </div>

        {/* Bottom Section with CTA and Social Proof */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
          {/* CTA Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-lg">
            Explore Our Farm
            <span className="text-xl">→</span>
          </button>

          {/* Social Proof */}
          <div className="flex items-center gap-4">
            {/* Customer Avatars */}
            <div className="flex -space-x-3">
              <img
                src="/avatar1.jpg"
                alt="Customer 1"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white object-cover"
              />
              <img
                src="/avatar2.jpg"
                alt="Customer 2"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white object-cover"
              />
              <img
                src="/avatar3.jpg"
                alt="Customer 3"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white object-cover"
              />
              <img
                src="/avatar4.jpg"
                alt="Customer 4"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white object-cover"
              />
            </div>

            {/* Trust Text */}
            <div className="text-white">
              <p className="font-semibold text-base md:text-lg">Trusted By More Than</p>
              <p className="font-bold text-lg md:text-xl">2k Clients</p>
            </div>
          </div>
        </div>

        {/* Decorative Badge (Top Right) */}
        <div className="absolute top-20 right-6 md:right-12 lg:right-20">
          <div className="relative">
            {/* Egg Carton Image */}
            <img
              src="/egg-carton.png"
              alt="Premium Eggs"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
            />
            
            {/* Circular Badge */}
            
          </div>
        </div>
</div>
        {/* Small Yellow Dot Decoration */}
        <div>
        <div className="absolute  top-1/2 right-1/3">
        <div className="absolute  ">
              <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                <div className="text-center">
                  <img
                    src="/logo-small.png"
                    alt="Wandering Wings"
                    className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-1"
                  />
                  <p className="text-xs md:text-sm font-bold text-brown-800 leading-tight">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Herosection