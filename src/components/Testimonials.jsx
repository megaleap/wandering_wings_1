"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import hens from "../app/assets/hens1.jpg";
import test1 from "../app/assets/Ellipse 744.png";
import test2 from "../app/assets/Ellipse 746.png";
import test3 from "../app/assets/Ellipse 747.png";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Meera Venkatesh",
    role: "Nutritionist & Cafe Owner",
    heading: "For Chefs Who Refuse to Compromise on Quality",

    title: "⭐ Why Chefs Choose Wandering Wings",

    points: [
      "Consistent yolk colour & flavour",
      "Firmer whites for baking & poaching",
      "Odour-free eggs ideal for gourmet dishes",
      "Reliable supply, delivered fresh every morning",
      "No antibiotics, no artificial colour — just honest ingredients",
    ],

    text: "You need consistency, flavour and colour you can depend on — every single day. Our golden-yolk eggs deliver richer taste, stronger structure and clean aroma, making them perfect for baking, plating and every high-performance kitchen.",

    image: "/testimonials/1.png",
    image1: test1,
  },

  {
    name: "Ravi Kumar",
    role: "Restaurant Owner",
    heading: "For Families Who Want Safe, Nutritious Food",
    title: "⭐ Why Retailers Partner With Us",

    points: [
      "Strong customer loyalty & repeat sales",
      "Fresh stock supplied consistently",
      "Premium packaging with clear value cues",
      "Zero-antibiotic, chemical-free promise customers love",
      "A brand associated with quality & trust",
    ],
    text: "Our kitchen quality improved dramatically after switching to Wandering Wings. The consistency, taste, and freshness make a real difference in every dish we serve.",
    image: "/testimonials/2.png",
    image1: test3,
  },

  {
    name: "Ananya Rao",
    role: "Home Chef",
    heading: "For Retailers Who Want Products Customers Return For",
    title: "⭐ Why Homemakers Trust Us",

    points: [
      "Clean aroma (no fishy smell)",
      "Naturally golden yolks",
      "Higher nutrition: more Vitamin D, Omega-3 & antioxidants",
      "Fresh eggs collected every morning",
      "From well-cared hens raised on open natural land",
    ],
    text: "Knowing where my food comes from matters. These eggs are clean, ethical, and taste absolutely amazing. I’ll never go back to regular eggs.",
    image: "/testimonials/3.png",
    image1: test3,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // 🔁 AUTO SLIDE EVERY 3 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section
      className="relative overflow-hidden text-white py-16 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/hens1.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#2b1d12]/85"></div>
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className=" overflow-hidden">
          <p className="text-yellow-400 text-md tracking-widest mb-3">
            ✦<span className="text-white font-bold"> OUR FUN FACTS</span>
          </p>
          <div >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="min-h-[110px]"
                initial={{ x: "100%" }} // 👉 start outside right
                animate={{ x: "0%" }} // ✅ center
                exit={{ x: "-100%" }} // 👈 exit fully left
                transition={{
                  duration: 2.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* <h2 className="text-3xl md:text-4xl ">
              Real feedback from families & kitchens we proudly serve
            </h2> */}
                <div className="min-h-[100px] md:min-h-[100px] mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold ">
                    {t.heading}
                  </h2>
                </div>

                {/* Stars */}

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <div className="min-h-[140px] md:min-h-[160px] mb-4">
                  <p className="text-white/80 leading-relaxed">{t.text}</p>
                  <hr className="mt-10" />
                </div>

                {/* Fun Facts / Points */}
                {t.title && t.points && (
                  <div className="mb-8 bg-white/10 border border-white/20 rounded-2xl p-6">
                    <span className="block text-yellow-400 font-semibold mb-4">
                      {t.title}
                    </span>

                    <ul className="space-y-2">
                      {t.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-white/90 text-sm flex items-start gap-2"
                        >
                          <span className="text-yellow-400 mt-[2px]">✔</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Author + Controls */}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={t.image1}
                alt={t.name}
                width={50}
                height={50}
                className="rounded-full border-2 border-white object-cover"
              />

              <div>
                <p className="font-semibold leading-tight">{t.name}</p>
                <p className="text-sm text-white/60">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center hover:scale-105 transition border-2 border-white"
              >
                <ArrowLeft size={18} className="text-white" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center hover:scale-105 transition border-2 border-white"
              >
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative max-w-md mx-auto w-full">
          <div className="relative h-[350px] md:h-[720px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              key={t.image} // forces smooth image swap
              src={t.image}
              alt={t.name}
              fill
              className="object-cover transition-opacity duration-700"
              priority
            />
          </div>

          {/* Badge */}
          <div className="absolute bottom-4 left-4 right-4">
            <div
              className="
              flex items-center gap-4
              bg-white/30 backdrop-blur-md
              border border-white/40
              rounded-2xl px-4 py-3
              shadow-lg
             "
            >
              {/* Avatars */}
              <div className="flex -space-x-3">
                <img
                  src="/testimonials/1.png"
                  alt="User 1"
                  className="w-9 h-9 rounded-full border-1 border-black object-cover"
                />
                <img
                  src="/testimonials/2.png"
                  alt="User 2"
                  className="w-9 h-9 rounded-full border-1 border-black object-cover"
                />
                <img
                  src="/testimonials/5.png"
                  alt="User 3"
                  className="w-9 h-9 rounded-full border-1 border-black object-cover"
                />
                <img
                  src="/testimonials/4.png"
                  alt="User 4"
                  className="w-9 h-9 rounded-full border-1 border-black object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-sm md:text-base font-medium text-white leading-tight">
                Trusted by <span className="font-bold">3,000+</span> Happy{" "}
                <br className="hidden sm:block" />
                Milk Lovers Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
