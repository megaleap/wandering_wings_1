'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const AboutFarm = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={sectionRef}
      className="bg-[#fdeedc] py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      {/* <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.1s;
        }

        .delay-2 {
          animation-delay: 0.2s;
        }

        .delay-3 {
          animation-delay: 0.3s;
        }

        .delay-4 {
          animation-delay: 0.4s;
        }
      `}</style> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Images */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Back Image - Top Left */}
            <div className="absolute top-0 left-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/assets/DSC04057.JPG"
                alt="Natural Farm Trees"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 30vw"
              />
            </div>

            {/* Front Image - Bottom Right (Overlapping) */}
            <div className="absolute -bottom-20 -right-0 w-[70%] h-[80%] rounded-2xl border-white border-4 overflow-hidden shadow-2xl z-20">
              <Image
                src="/assets/DSC04261.JPG"
                alt="Free Range Chickens"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 35vw"
              />
            </div>

            {/* Circular Badge */}
            {/* <div className="absolute top-4 left-4 z-30">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#f5f0e8] shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs md:text-sm font-bold text-gray-800">100%</p>
                  <p className="text-[10px] md:text-xs text-gray-600">Natural</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Header */}
            <div 
              className={`space-y-3 ${isVisible ? 'animate-slide-up delay-1' : 'opacity-0'}`}
            >
              <p className="text-[16px] md:text-base text-[#39251A] uppercase tracking-wider font-small">
                ABOUT OUR FARM
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#39251A] leading-tight">
                From Our Open, Natural Farms to Homes, Stores & Kitchens Across India
              </h2>
            </div>

            {/* Mission Section */}
            <div 
              className={`space-y-4 ${isVisible ? 'animate-slide-up delay-2' : 'opacity-0'}`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#39251A]">
                Our Mission:
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded flex-shrink-0 mt-1"></div>
                  <p className="text-[#39251A] text-sm md:text-base">
                    Give hens the freedom they deserve — a calm, open, natural environment where they can truly live free as a bird.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded flex-shrink-0 mt-1"></div>
                  <p className="text-[#39251A] text-sm md:text-base">
                    Offer clean, fresh, antibiotic-free eggs that families, chefs and retailers can trust every single day.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded flex-shrink-0 mt-1"></div>
                  <p className="text-[#39251A] text-sm md:text-base">
                    Farm responsibly and sustainably, protecting soil, land, and the natural ecosystems that support life on our farm.
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-gray-300" />

            {/* Values Cards */}
            <div 
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 ${isVisible ? 'animate-slide-up delay-3' : 'opacity-0'}`}
            >
              <div className=" rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌿</span>
                </div>
                <div>
                  <p className="font-bold text-[#39251A] text-lg ">
                    Driven by Nature,
                  </p>
                  <p className="text-[#39251A] text-md md:text-lg">
                    Supported by Care
                  </p>
                </div>
              </div>

              <div className=" rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">♻️</span>
                </div>
                <div>
                  <p className="font-bold text-[#39251A] text-lg ">
                    Committed to
                  </p>
                  <p className="text-[#39251A] text-lg ">
                    Sustainable & Ethical Farming
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
           <div className="relative overflow-hidden bg-[#39251A] text-white rounded-2xl py-5 p-4 text-center
                before:absolute before:inset-0 before:bg-yellow-400
                before:translate-y-full before:rounded-t-[100%]
                before:transition-transform before:duration-500 before:ease-out
                hover:before:translate-y-0">
              <div className="bg-[#39251A] text-white rounded-2xl py-5 p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold">20k+</p>
                <p className="text-xs md:text-sm mt-1">Eggs per week</p>
              </div>

              <div className="bg-[#39251A] text-white rounded-2xl py-5 p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold">5000+</p>
                <p className="text-xs md:text-sm mt-1">Happy customers</p>
              </div>

              <div className="bg-[#39251A] text-white rounded-2xl py-5 p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold">100+</p>
                <p className="text-xs md:text-sm mt-1">Locations serviced</p>
              </div>

              <div className="bg-[#39251A] text-white rounded-2xl py-5 p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold">100+</p>
                <p className="text-xs md:text-sm mt-1">Happy farmers</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`pt-4 ${isVisible ? 'animate-slide-up delay-4' : 'opacity-0'}`}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-lg">
                Learn More About Us
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFarm