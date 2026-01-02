'use client'
import React from 'react'
import { FiDroplet, FiLayers, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'
import AnimatedHeading from './AnimatedHeading'
import Image from 'next/image'

const items = [
  {
    type: 'wandering',
    title: 'How the hens lives',
    text: 'Birds live with space, sunlight, and freedom to move-lower stress, healthier life.',
    icon: '/oureggs/yellowegg.png',
  },
  {
    type: 'wandering',
    title: 'What goes into the egg',
    text: 'Natural diet + movement = stronger shells, firmer whites, naturally deep yolks.',
    icon: '/oureggs/Clean, Neutral Aroma.png',
  },
  {
    type: 'wandering',
    title: 'What your choice supports',
    text: 'Ethical farming, soil-friendly practices, and long-term sustainability.',
    icon: '/oureggs/High Nutrition Levels.png',
  },
  {
    type: 'regular',
    title: 'How the hens lives',
    text: 'Birds live in tight confinement with high stress and restricted movement.',
    icon: '/oureggs/yellowegg.png',
  },
  {
    type: 'regular',
    title: 'What goes into the egg',
    text: 'Uniform feed, limited movement = paler yolks and thinner shell quality.',
    icon: '/oureggs/Clean, Neutral Aroma.png',
  },
  {
    type: 'regular',
    title: 'What your choice supports',
    text: 'Industrial production focused on volume, not welfare or ecology.',
    icon: '/oureggs/High Nutrition Levels.png',
  },
]

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.8, 0.25, 1] },
  },
}

const Whychooseoureggs = () => {
  return (
    <section className="bg-[#FFF7E6] py-20 px-6 md:px-12 overflow-hidden">

      {/* ===== HEADING ===== */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.p
          className="text-lg tracking-widest text-[#3b2518] mb-3"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-yellow-500">✦</span> Why choose our eggs
        </motion.p>

        <AnimatedHeading
          text="Natural Eggs vs Regular Eggs — What’s the Real Difference?"
          className="text-3xl md:text-5xl font-bold text-[#3b2518]"
        />

        <motion.p
          className="text-lg text-[#3b2518] mt-6"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          See how naturally raised eggs compare to conventional, industrial eggs.
        </motion.p>
      </div>

      {/* ===== GRID ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT COLUMN */}
        <motion.div
          className="flex flex-col pr-6 md:pr-12 md:border-r-2 border-[#3b2518]"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#3b2518] text-start mb-14">
            Wandering Wings Eggs
          </h2>

          {items.filter(i => i.type === 'wandering').map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 mb-18"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="relative w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
  <Image 
    src={item.icon}
    fill
    alt="icon"
    sizes="56px"
    className="object-contain"
  />
</div>


              <div>
                <h3 className="font-semibold text-[#3b2518] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#3b2518]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="flex flex-col"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#3b2518] text-start mb-14">
            Regular Eggs
          </h2>

          {items.filter(i => i.type === 'regular').map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 mb-24"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="relative w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
  <Image
    src={item.icon}
    fill
    alt="icon"
    sizes="56px"
    className="object-contain"
  />
</div>


              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Whychooseoureggs
