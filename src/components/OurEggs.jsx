'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import AnimatedHeading from './AnimatedHeading'
// import hen1 from '../app/assets/oureggs/DSC03821.JPG'
// import hen2 from '../app/assets/oureggs/DSC04189.JPG'
// import hen3 from '../app/assets/oureggs/DSC04692.JPG'

const items = [
  {
    type: 'content',
    title: 'Golden Yolk Goodness',
    text: 'Naturally rich, golden yolks shaped by sunlight, fresh greens, and wholesome feed—never by artificial colour.',
    icon: '/oureggs/yellowegg.png',
  },
  {
    type: 'image',
    src: '/oureggs/DSC04189.JPG',
    alt: 'Egg basket',
  },
  {
    type: 'content',
    title: 'High Nutrition Levels',
    text: 'More Omega-3s, more Vitamin D, more antioxidants. When hens live naturally, the nutrition shows in every shell.',
    icon: '/oureggs/High Nutrition Levels.png',
  },
  {
    type: 'image',
    src: '/oureggs/DSC03821.JPG',
    alt: 'Hen closeup',
  },
  {
    type: 'content',
    title: 'Stress-Free Environment',
    text: 'Fresh air, sunlight, and safe shelters keep our hens safe and healthy.',
    icon: '/oureggs/Stress-Free Environment.png',
  },
  {
    type: 'image',
    src: '/oureggs/DSC04692.JPG',
    alt: 'Free range hens',
  },
]

const OurEggs = () => {
  const sectionRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            )
          }
        })
      },
      { threshold: 0.25 }
    )

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#3b2518] text-white py-20 px-6 md:px-12"
    >
      {/* ================= HEADING ================= */}
      <div className="text-center max-w-6xl mx-auto mb-16">
        <p className="text-lg tracking-widest text-white mb-3">
          <span className="text-yellow-500">✦</span> OUR EGGS
        </p>

        <AnimatedHeading
          text="Our Eggs – Pure, Nutritious & Naturally Better"
          className="text-3xl md:text-5xl font-bold"
        />

        <p className="text-lg text-white/70 mt-4">
          Every egg we produce reflects natural living, open pastures, and clean,
          honest farming.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
{items.map((item, i) =>
  item.type === 'image' ? (
    <div
      key={i}
      data-index={i}
      className={`relative h-72 rounded-2xl overflow-hidden animate-on-scroll ${
        visibleItems.includes(i) ? 'animate-image-reveal' : 'opacity-0'
      }`}
      style={{ animationDelay: `${i * 0.15}s` }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
      />
    </div>
  ) : (
    <div
      key={i}
      data-index={i}
      className={`bg-[#4a372b] rounded-2xl p-8 text-center flex flex-col items-center justify-center animate-on-scroll ${
        visibleItems.includes(i) ? 'animate-content-rise' : 'opacity-0'
      }`}
      style={{ animationDelay: `${i * 0.15}s` }}
    >
      <h3 className="font-semibold mb-3 text-2xl">{item.title}</h3>
      <p className=" text-white/70 mb-6 text-lg">{item.text}</p>
      <div className="relative w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center">
  <Image
    src={item.icon}
    fill
    alt="icon"
    className="object-contain"
  />
</div>

    </div>
  )
)}



      </div>

      {/* Footer */}
      {/* <p className="text-center text-xs text-white/70 mt-16">
        Let’s make something great work together.{' '}
        <span className="text-yellow-400 underline cursor-pointer">
          Get Free Quote
        </span>
      </p> */}
    </section>
  )
}

export default OurEggs
