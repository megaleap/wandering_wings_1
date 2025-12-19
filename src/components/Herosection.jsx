"use client";
import React, { useEffect, useRef, useState } from "react";
import eggs from "../app/assets/Ellipse 743.png";
import learn from "../app/assets/Learm more.png";
import customer1 from '../app/assets/Ellipse 754.png'
import customer2 from '../app/assets/Ellipse 744.png'
import customer3 from '../app/assets/Ellipse 746.png'
import customer4 from '../app/assets/Ellipse 747.png'

// import video from '../app/assets/WhatsApp Video 2025-11-28 at 12.47.56.mp4'
import Image from "next/image";

const Herosection = () => {
  const [typedText, setTypedText] = useState("");


  const fullText =
  "Premium Pasture-Raised Eggs for Every Plate that Demands Quality.";

useEffect(() => {
  let observer;

  const startTyping = () => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[i]);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 35);
  };

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startTyping();
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  const target = document.getElementById("hero-heading");
  if (target) observer.observe(target);

  return () => observer?.disconnect();
}, []);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Video play error:', error);
      });
    }
  }, []);
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>

      {/* Video Background */}
      <video
  ref={videoRef}
  className="absolute inset-0 w-full h-full object-cover z-0"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/videos/chicken-farm.mp4" type="video/mp4" />
</video>

     <div className="absolute inset-0 bg-[#3b2518]/85 z-10 pointer-events-none" />

      {/* Overlay for better text readability */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div> */}

      {/* Content */}
      <div className="flex mb-10">
        {/* Top Tagline */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-10 max-w-5xl my-20">
          <p className="text-white text-sm md:text-base lg:text-lg font-medium tracking-wider mb-4 md:mb-6">
            Real Eggs. Real Nutrition. Real Health
          </p>

          {/* Main Heading */}
          <div className="flex items-start gap-4 md:gap-6">
  <h1
    id="hero-heading"
    className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8 max-w-4xl"
  >
    {typedText}
    <span className="typing-cursor" />
    <span className="ml-2 text-3xl md:text-4xl lg:text-4xl">🐔</span>
  </h1>
</div>

          {/* Description */}
          <div className="text-white text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-3xl space-y-2">
            <p>
              At Wandering Wings, open-pasture farming and herbal-rich feed
              ensure every egg delivers:
            </p>
            <p>
              •Higher Nutrition — more Vitamin D, Omega-3s & natural
              antioxidants
            </p>
            <p>• Pure Freshness — clean aroma, no fishy smell.</p>
          </div>

          {/* Bottom Section with CTA and Social Proof */}
          <div className="flex mb-10 flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
            {/* CTA Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-lg">
              Explore Our Farm
              <span className="text-xl">→</span>
            </button>

            {/* Social Proof */}
            <div className="flex  items-center gap-4">
              {/* Customer Avatars */}
              <div className="flex -space-x-3">
                <Image
                  src={customer1}
                  alt="customer1"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full  object-cover"
                />
                <Image
                  src={customer2}
                  alt="Customer 2"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full  object-cover"
                />
                <Image
                  src={customer4}
                  alt="Customer 3"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                />
                <Image
                  src={customer3}
                  alt="Customer 4"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full  object-cover"
                />
              </div>

              {/* Trust Text */}
              <div className="text-white">
                <p className="font-semibold text-base md:text-lg">
                  Trusted By More Than
                </p>
                <p className="font-bold text-lg md:text-xl">2k Clients</p>
              </div>
            </div>
          </div>

          {/* Decorative Badge (Top Right) */}
         
        </div>

        {/* Rotating Badge with Eggs */}
        <div className="flex">
          <div className="absolute top-1/2 right-30 z-30">
            <div className="relative">
              {/* Egg Carton Image - base layer */}
              <Image
                src={eggs}
                alt="Wandering Wings"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 object-contain"
              />

              {/* Circular Yellow Badge - overlapping on top right */}
              <div className="absolute -top-2 -right-2 md:-top-0 md:-right-22">
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-xl animate-spin-slow">
                  <Image
                    src={learn}
                    alt="Learn More"
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-36 lg:h-36 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
