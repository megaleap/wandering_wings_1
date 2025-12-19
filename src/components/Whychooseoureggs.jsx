'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FiDroplet, FiLayers, FiSun } from 'react-icons/fi' // Example icons

const items = [
  {
    type: 'wandering',
    title: 'Deep Golden Yolks',
    text: 'From sunlight, greens & herbal-rich feed — no artificial pigments.',
    icon: <FiSun className="w-5 h-5 text-black" />,
  },
  {
    type: 'wandering',
    title: 'Clean, Neutral Aroma',
    text: 'No “fishy smell” because hens eat natural, chemical-free diets.',
    icon: <FiLayers className="w-5 h-5 text-black" />,
  },
  {
    type: 'wandering',
    title: 'Higher Nutrition Levels',
    text: 'Naturally richer in Vitamin D, Omega-3s, antioxidants & protein.',
    icon: <FiDroplet className="w-5 h-5 text-black" />,
  },
  {
    type: 'regular',
    title: 'Pale or Artificially Darkened Yolks',
    text: 'Colour often enhanced with synthetic additives.',
    icon: <FiSun className="w-5 h-5 text-black" />,
  },
  {
    type: 'regular',
    title: 'Fishy or Unpleasant Smell',
    text: 'Caused by poor-quality feed (fish meal, rapeseed meal, chemical additives).',
    icon: <FiLayers className="w-5 h-5 text-black" />,
  },
  {
    type: 'regular',
    title: 'Lower Nutrient Density',
    text: 'Factory hens get less sunlight & limited motion → weaker nutrition.',
    icon: <FiDroplet className="w-5 h-5 text-black" />,
  },
]

const Whychooseoureggs = () => {
  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index)
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section className="bg-[#FFF7E6] py-20 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="text-lg tracking-widest text-[#3b2518] mb-2">
          Why choose our eggs
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b2518]">
          Natural Eggs vs Regular Eggs — What’s the Real Difference?
        </h2>
        <p className="text-lg text-[#3b2518] mt-4">
          See how naturally raised eggs compare to conventional, industrial eggs.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        
        <div className="flex flex-col  pr-6 md:pr-12 border-r-2 border-[#3b2518]">
            <h2 className=' text-2xl text-[#3b2518] text-center'>Wandering Wings Eggs</h2>
            
          {items
            .filter((item) => item.type === 'wandering')
            .map((item, i) => (
                
              <div
                key={i}
                data-index={i}
                className={`animate-on-scroll flex  items-start gap-4 opacity-0 transform mb-16 translate-y-12 transition-all duration-700 ${
                  visibleItems.includes(i) ? 'opacity-100 translate-y-0' : ''
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#3b2518] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#3b2518]">{item.text}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
            <h2 className=' text-2xl text-[#3b2518] text-center'>Regular Eggs</h2>

          {items
            .filter((item) => item.type === 'regular')
            .map((item, i) => (
              <div
                key={i + 3} // avoid duplicate keys
                data-index={i + 3}
                className={`animate-on-scroll flex items-start gap-4 opacity-0 mb-16 transform translate-y-12 transition-all duration-700 ${
                  visibleItems.includes(i + 3) ? 'opacity-100 translate-y-0' : ''
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Whychooseoureggs
