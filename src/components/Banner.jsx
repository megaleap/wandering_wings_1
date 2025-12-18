'use client'
import React from 'react'

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
        {/* First set of items */}
        {items.map((item, index) => (
          <div key={`first-${index}`} className="flex items-center px-8">
            <span className="text-black font-bold text-lg md:text-xl">
              {item}
            </span>
            <span className="ml-8 text-black text-2xl">✦</span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <div key={`second-${index}`} className="flex items-center px-8">
            <span className="text-black font-bold text-lg md:text-2xl">
              {item}
            </span>
            <span className="ml-8 text-black text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner