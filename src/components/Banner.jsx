'use client'
import React from 'react'
import Image from 'next/image'

const Banner = () => {
  const items = [
    "Hand-Collected Every Morning",
    "Pasture-Raised",
    "Farm Fresh",
    "Hand-Picked",
    "100% Natural",
    "Organic Feed",
    "Free Range",
    "Premium Quality"
  ];

  return (
    <div className="bg-yellow-400 py-6 overflow-hidden relative">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-40%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>

      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set */}
        {items.map((item, index) => (
          <div key={`first-${index}`} className="flex items-center px-8 gap-6">
            <span className="text-black font-bold text-lg md:text-xl">
              {item}
            </span>

            {/* Egg Image */}
            <Image
              src="/banner/eggs87.svg"
              alt="Egg icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <div key={`second-${index}`} className="flex items-center px-8 gap-6">
            <span className="text-black font-bold text-lg md:text-xl">
              {item}
            </span>

            {/* Egg Image */}
            <Image
              src="/banner/eggs87.svg"
              alt="Egg icon"
              width={40}
              height={40}
              className="object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner
