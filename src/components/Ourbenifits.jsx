"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiPackage, FiCheckCircle } from "react-icons/fi";

import customer1 from "../app/assets/Ellipse 754.png";
import customer2 from "../app/assets/Ellipse 744.png";
import customer3 from "../app/assets/Ellipse 746.png";
import customer4 from "../app/assets/Ellipse 747.png";

const OurBenefits = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
              }, index * 200);
            });

            observer.disconnect(); // run once
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#3E2C20] py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">

        {/* ================= LEFT COLUMN (IMAGES) ================= */}
        <div className="flex flex-col md:flex-row gap-10 md:w-1/2">

          {/* LEFT STACK */}
          <div className="flex flex-col gap-6 w-full">
            {/* Image 1 */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden image-hidden animate-on-scroll">
              <Image
                src="/ourbenifits/DSC03865.JPG"
                alt="Egg Basket"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-[#b08b55] rounded-full opacity-90" />
            </div>

            {/* Trusted Clients */}
            <div className="bg-yellow-400 rounded-2xl p-6 image-hidden animate-on-scroll">
              <p className="text-sm font-semibold text-black mb-4">
                More Than 1K+ Trusted Clients
              </p>

              <div className="flex -space-x-3">
                {[customer1, customer2, customer4, customer3].map(
                  (img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt="Customer"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full">
            {/* Rotating Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 image-hidden animate-on-scroll">
              <div className="rotate-continuous">
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full shadow-xl">
                  <Image
                    src="/ourbenifits/Learm more.png"
                    alt="Badge"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>

            <div className="relative h-[420px] mt-40 rounded-2xl overflow-hidden image-hidden animate-on-scroll">
              <Image
                src="/ourbenifits/DSC04164.JPG"
                alt="Chickens"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (CONTENT) ================= */}
        <div className="md:w-1/2 flex flex-col gap-6 justify-center">

          <p
            className={`text-sm tracking-widest text-white ${
              isVisible ? "animate-slide-up delay-1" : "opacity-0"
            }`}
          >
            <span className="text-yellow-500">✦</span> OUR BENEFITS
          </p>

          <h2
            className={`text-3xl md:text-4xl font-bold text-white ${
              isVisible ? "animate-slide-up delay-2" : "opacity-0"
            }`}
          >
            Unmatched Freshness, Delivered Daily
          </h2>

          {/* Card 1 */}
          <BenefitCard
            visible={isVisible}
            delay="delay-3"
            icon={<FiPackage />}
            title="Unmatched Freshness, Delivered Daily"
            text="We hand-collect our eggs every single morning, ensuring richer yolks, firm whites and true farm-fresh flavour."
          />

          {/* Card 2 */}
          <BenefitCard
            visible={isVisible}
            delay="delay-4"
            icon={<FiCheckCircle />}
            title="Clean, Natural & Chemical-Free"
            text="Zero antibiotics, zero boosters, zero chemical cleaning. Every egg reflects the health and freedom of the hen."
          />
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;

/* ================= CARD COMPONENT ================= */

function BenefitCard({ visible, delay, icon, title, text }) {
  return (
    <div
      className={`relative group overflow-hidden bg-[#4D3A2A] border-l-4 border-yellow-400 p-6 rounded-xl transition-all duration-500 cursor-pointer ${
        visible ? `animate-slide-up ${delay}` : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
      <div className="relative z-10 flex items-start gap-4">
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white group-hover:text-black">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white group-hover:text-black mb-1">
            {title}
          </h3>
          <p className="text-sm text-white group-hover:text-black">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
