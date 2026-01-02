"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import eggs from "../app/assets/Ellipse 743.png";
import learn from "../app/assets/Learm more.png";
import customer1 from "../app/assets/Ellipse 754.png";
import customer2 from "../app/assets/Ellipse 744.png";
import customer3 from "../app/assets/Ellipse 746.png";
import customer4 from "../app/assets/Ellipse 747.png";
import { useRouter } from "next/navigation";

const AnimatedLine = ({ text, delay = 0 }) => {
  const chars = text.split("");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="block overflow-hidden"
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.25,
            ease: [0.25, 0.8, 0.25, 1],
            delay: delay + i * 0.03,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Herosection = () => {
  const videoRef = useRef(null);
 const router = useRouter();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleClick = () => {
    const section = document.getElementById("about-farm");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-full  pt-22 overflow-hidden">
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

      {/* Overlay */}
      <div className="absolute  inset-0 bg-[#3b2518]/60 z-10" />

      <div className="relative  z-20 max-w-7xl mx-auto  px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 my-20">
          {/* Left Content */}
          <div className="max-w-5xl">
            <p className="text-yellow-400 text-sm md:text-lg mb-6 tracking-wide">
              ✦ Real Eggs. Real Nutrition. Real Health
            </p>

            {/* Animated Heading */}
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight space-y-2">
              <AnimatedLine text="Premium Pasture-Raised Eggs" />
              <AnimatedLine text="for Every Plate that" delay={0.4} />

              <div className="flex items-center gap-3">
                <AnimatedLine text="Demands Quality" delay={0.9} />

                {/* Hen emoji (NOT animated per character) */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.3, ease: "easeOut" }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl inline-block"
                >
                  🐔
                </motion.span>
              </div>
            </h1>

            {/* Description */}
            <div className="text-white text-base md:text-lg mt-8 max-w-3xl space-y-2">
              <p>
                At Wandering Wings, open-pasture farming and herbal-rich feed
                ensure every egg delivers:
              </p>
              <p>• Higher Nutrition — Vitamin D, Omega-3s & antioxidants</p>
              <p>• Pure Freshness — clean aroma, no fishy smell</p>
            </div>

            {/* CTA + Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-10">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-lg text-black font-bold pr-1.5 pl-5 py-1.5 rounded-lg flex items-center gap-3 shadow-lg transition" onClick={handleClick}>
                Explore Our Farm
                <span className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <ArrowRight size={16} />
                </span>
              </button>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[customer1, customer2, customer4, customer3].map(
                    (img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt="Customer"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )
                  )}
                </div>
                <div className="text-white">
                  <p className="font-semibold">Trusted By</p>
                  <p className="font-bold text-lg">2k+ Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Badge */}
          <div className="relative md:-right-22 justify-end">
    <Image
      src={eggs}
      alt="Eggs"
      className="w-24 lg:w-32  object-contain"
    />
    <div className="absolute -top-0 -right-18">
      <div className="w-24 lg:w-32 h-24 lg:h-32 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-xl animate-spin-slow">
        <Image src={learn} alt="Learn More" />
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
