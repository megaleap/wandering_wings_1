"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import image1 from "../app/assets/testimonials/1.avif";
import image2 from "../app/assets/testimonials/1.avif";
import image3 from "../app/assets/testimonials/1.avif";


const testimonials = [
  {
    name: "Meera Venkatesh",
    role: "Nutritionist & Café Owner",
    text: `I recommend Wandering Wings eggs to all my customers. They’re incredibly
    fresh, rich in nutrients, and have that natural golden yolk you just can’t get
    from regular eggs. It’s reassuring to know these eggs come from hens raised
    freely, ethically, and without any chemicals or antibiotics.`,
    image: image1,
  },
  {
    name: "Ravi Kumar",
    role: "Restaurant Owner",
    text: `Our kitchen quality improved dramatically after switching to Wandering Wings.
    The consistency, taste, and freshness make a real difference in every dish we
    serve.`,
    image: image2,
  },
  {
    name: "Ananya Rao",
    role: "Home Chef",
    text: `Knowing where my food comes from matters. These eggs are clean, ethical,
    and taste absolutely amazing. I’ll never go back to regular eggs.`,
    image: image3,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((index + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="relative bg-[#2b1d12] text-white py-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-yellow-400 text-sm tracking-widest mb-3">
            ✦ OUR TESTIMONIALS
          </p>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
            Real feedback from families and kitchens we proudly serve
          </h2>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-white/80 text-base leading-relaxed mb-8">
            {t.text}
          </p>

          {/* Author */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-white/60">{t.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center hover:scale-105 transition"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center hover:scale-105 transition"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative max-w-md mx-auto">
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Trust Badge */}
          <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-blue-400 to-orange-400 text-white rounded-xl px-4 py-3 text-sm flex items-center gap-3">
            <div className="flex -space-x-2">
              <img src="/avatars/a1.jpg" className="w-8 h-8 rounded-full border" />
              <img src="/avatars/a2.jpg" className="w-8 h-8 rounded-full border" />
              <img src="/avatars/a3.jpg" className="w-8 h-8 rounded-full border" />
            </div>
            <p className="font-medium">
              Trusted by 3,000+ Happy Milk Lovers Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
