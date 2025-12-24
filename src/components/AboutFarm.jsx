"use client";

import Image from "next/image";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutFarm() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    /* TEXT + IMAGE OBSERVER */
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            /* IMAGE REVEAL */
            const images = section.querySelectorAll(".animate-on-scroll");
            images.forEach((img, index) => {
              setTimeout(() => {
                img.classList.add("animate-image-reveal");
              }, index * 200); // stagger
            });

            observer.disconnect(); // run once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fdeedc] py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= IMAGES ================= */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute top-0 left-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-xl z-10 image-hidden animate-on-scroll">
              <Image
                src="/assets/DSC04057.JPG"
                alt="Natural Farm Trees"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 30vw"
                priority
              />
            </div>

            <div className="absolute -bottom-20 right-0 w-[70%] h-[80%] rounded-2xl border-white border-4 overflow-hidden shadow-2xl z-20 image-hidden animate-on-scroll">
              <Image
                src="/assets/DSC04261.JPG"
                alt="Free Range Chickens"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 35vw"
              />
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="space-y-6 mt-16 lg:mt-0">

            {/* Header */}
            <div
              className={`space-y-3 ${
                isVisible ? "animate-slide-up delay-1" : "opacity-0"
              }`}
            >
              <p className="text-sm font-bold uppercase tracking-wider text-[#39251A]">
                <span className="text-yellow-500"> ✦</span> About Our Farm
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#39251A]">
                From Our Open, Natural Farms to Homes, Stores & Kitchens Across
                India
              </h2>
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
                  <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12L10 16L18 8"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
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
                icon='/about/Frame 2147224209.png'
              />
              <ValueCard
                title="Committed to"
                subtitle="Sustainable Farming"
                icon="/about/black.png"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                ["30k", "Eggs per day"],
                ["5000+", "No of Happy customers"],
                ["25+", "No of locations served"],
                ["10+", "No of Happy farmers"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="group relative overflow-hidden bg-[#39251A] text-white rounded-2xl py-6 text-center transition-colors duration-500"
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
                    <p className="text-[15px] mt-1">{label}</p>
                  </div>
                </div>
              ))}
            </div> 

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= VALUE CARD ================= */

function ValueCard({ icon, title, subtitle }) {
  return (
    <div className="flex gap-3 p-4">
       <div className="relative w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center">
        <Image
          src={icon}
          fill
          alt={title}
          className="object-contain"
        />
      </div>

      <div>
        <p className="font-bold text-[#39251A]">{title}</p>
        <p className="text-[#39251A]">{subtitle}</p>
      </div>
    </div>
  );
}
