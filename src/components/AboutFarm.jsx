"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutFarm() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fdeedc] py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute top-0 left-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/assets/DSC04057.JPG"
                alt="Natural Farm Trees"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 30vw"
                priority
              />
            </div>

            <div className="absolute -bottom-20 right-0 w-[70%] h-[80%] rounded-2xl border-white border-4 overflow-hidden shadow-2xl z-20">
              <Image
                src="/assets/DSC04261.JPG"
                alt="Free Range Chickens"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 35vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Header */}
            <div
              className={`space-y-3 transition-opacity ${
                isVisible ? "animate-slide-up delay-1" : "opacity-0"
              }`}
            >
              <p className="text-sm uppercase tracking-wider text-[#39251A]">
                About Our Farm
              </p>
              <div className="flex">
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold text-[#39251A]">
                  From Our Open, Natural Farms to Homes Across India
                </h2>
                </div>
               
                {/* Rotating Banner */}
                <div className="relative flex justify-end">
                  <div className="rotate-360 relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center ">
                    <Image
                      src="/assets/Abour us.png" // replace later
                      alt="Rotating Banner"
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div
              className={`space-y-4 ${
                isVisible ? "animate-slide-up delay-2" : "opacity-0"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#39251A]">
                Our Mission
              </h3>

              {[
                "Give hens the freedom they deserve in a calm, open environment.",
                "Offer clean, antibiotic-free eggs families can trust.",
                "Farm responsibly and sustainably.",
              ].map((text, index) => (
                <div key={index} className="flex gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded flex-shrink-0 mt-1" />
                  <p className="text-[#39251A]">{text}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-300" />

            {/* Values */}
            <div
              className={`grid sm:grid-cols-2 gap-4 ${
                isVisible ? "animate-slide-up delay-3" : "opacity-0"
              }`}
            >
              <ValueCard
                title="Driven by Nature"
                subtitle="Supported by Care"
                icon="🌿"
              />
              <ValueCard
                title="Committed to"
                subtitle="Sustainable Farming"
                icon="♻️"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                ["20k+", "Eggs / week"],
                ["5000+", "Happy customers"],
                ["100+", "Locations"],
                ["100+", "Happy farmers"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="group relative overflow-hidden bg-[#39251A] text-white rounded-2xl py-8 text-center transition-colors duration-500"
                >
                  {/* Hover wave */}
                  <div
                    className="
      absolute inset-0
      bg-yellow-400
      translate-y-full
      rounded-t-[120%]
      transition-all duration-500 ease-out
      group-hover:translate-y-0
      group-hover:rounded-2xl
    "
                  />

                  {/* Content */}
                  <div className="relative z-10 group-hover:text-[#39251A] transition-colors duration-500">
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-xs mt-1">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`pt-4 ${
                isVisible ? "animate-slide-up delay-4" : "opacity-0"
              }`}
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg transition">
                Learn More About Us →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, subtitle }) {
  return (
    <div className="flex gap-3 p-4 ">
      <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <p className="font-bold text-[#39251A]">{title}</p>
        <p className="text-[#39251A]">{subtitle}</p>
      </div>
    </div>
  );
}
