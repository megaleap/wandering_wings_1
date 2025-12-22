'use client'
import Image from 'next/image'
import React from 'react'
import { FiPackage, FiCheckCircle } from 'react-icons/fi' // Example icons
import customer1 from '../app/assets/Ellipse 754.png'
import customer2 from '../app/assets/Ellipse 744.png'
import customer3 from '../app/assets/Ellipse 746.png'
import customer4 from '../app/assets/Ellipse 747.png'

const OurBenefits = () => {
  return (
    <section className="bg-[#3E2C20] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left Column */}
 
    <div className="flex flex-col md:flex-row gap-10 md:w-1/2">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6 w-full">
        {/* Left Image */}
        <div className="relative h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/ourbenifits/DSC03865.JPG"
            alt="Egg Basket"
            fill
            className="object-cover"
            priority
          />

          {/* Brown pill bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-[#b08b55] rounded-full opacity-90" />
        </div>

        {/* Trusted Clients Card */}
        <div className="bg-yellow-400 rounded-2xl p-6">
          <p className="text-sm font-semibold text-black mb-4">
            More Than 1K+ Trusted Clients
          </p>

          <div className="flex -space-x-3">
            <Image src={customer1} className="w-10 h-10 rounded-full border-2 border-white" />
            <Image src={customer2} className="w-10 h-10 rounded-full border-2 border-white" />
            <Image src={customer4} className="w-10 h-10 rounded-full border-2 border-white" />
            <Image src={customer3} className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full">
        {/* Floating Badge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
  {/* ROTATING LAYER */}
  <div className="rotate-continuous">
    <div className="relative w-20 h-20 md:w-32 md:h-32  rounded-full flex items-center justify-center shadow-xl">
      <Image
        src="/ourbenifits/Learm more.png"
        alt="Badge"
        fill
        className="object-contain p-2"
      />
    </div>
  </div>
</div>


        {/* Right Image */}
        <div className="relative h-[420px] mt-40 rounded-2xl overflow-hidden">
          <Image
            src="/ourbenifits/DSC04164.JPG"
            alt="Chickens"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>


        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col gap-6 justify-center">
          <p className="text-sm tracking-widest text-white"><span className="text-yellow-500">✦</span>OUR BENEFITS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Unmatched Freshness, Delivered Daily
          </h2>

          {/* Card 1 */}
          <div className="relative group overflow-hidden bg-[#4D3A2A] border-l-4  border-yellow-400  p-6 rounded-xl transition-all duration-500 cursor-pointer">
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-yellow-400  -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></div>

            <div className="relative z-10 flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <FiPackage className="w-5 h-5 text-white group-hover:text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-black mb-1">
                  Unmatched Freshness, Delivered Daily
                </h3>
                <p className="text-sm text-white group-hover:text-black">
                  We hand-collect our eggs every single morning, ensuring richer yolks, firm whites and true farm-fresh flavour. No long storage cycles. No warehouse delays. Just the kind of freshness you can see, smell and taste.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden border-l-4  border-yellow-400 bg-[#4D3A2A] p-6 rounded-xl transition-all duration-500 cursor-pointer">
            <div className="absolute inset-0 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></div>
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="w-5 h-5 text-white group-hover:text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-black mb-1">
                  Clean, Natural & Chemical-Free
                </h3>
                <p className="text-sm text-white group-hover:text-black">
                  Our eggs are as honest as farming gets — zero antibiotics, zero boosters, zero chemical cleaning. Every shell carries its own natural protection, and every egg reflects the health and freedom of the hen that laid it.
                </p>
              </div>
            </div>
          </div>

          {/* <button className="mt-4 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 w-fit">
            Bring Home The Best →
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default OurBenefits
