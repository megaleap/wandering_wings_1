"use client";
import React from "react";
import Image from "next/image";

import image1 from "../app/assets/kitchen/1.jpg";
import image2 from "../app/assets/kitchen/2.jpg";
import image3 from "../app/assets/kitchen/3.jpg";
import image4 from "../app/assets/kitchen/4.jpg";
import image5 from "../app/assets/kitchen/5.jpg";
import image6 from "../app/assets/kitchen/6.jpg";
import image7 from "../app/assets/kitchen/7.jpg";
import image8 from "../app/assets/kitchen/8.jpg";
import image9 from "../app/assets/kitchen/9.jpg";
import image10 from "../app/assets/kitchen/10.jpg";
import image11 from "../app/assets/kitchen/11.jpg";
import image12 from "../app/assets/kitchen/12.jpg";
import image13 from "../app/assets/kitchen/13.jpg";
import image14 from "../app/assets/kitchen/14.jpg";
import image15 from "../app/assets/kitchen/15.png";
import image16 from "../app/assets/kitchen/16.png";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const recipes = [
  { title: "The Perfect start to your day", image: image2 },
  { title: "Home style egg curry", image: image7 },
  { title: "Sunny Side up", image: image8 },
  { title: "Classic Egg biryani", image: image9 },
  { title: "Rustic masala eggs", image: image10 },
  { title: "Egg pacchi (raw) masala", image: image11 },
  { title: "Eggs and toast Breakfast", image: image12 },
  { title: "Morning Croissant and eggs", image: image13 },
  { title: "Wandering Omelet", image: image1 },
  { title: "Bangkok egg rice bowl", image: image14 },
  { title: "Smoky fish egg plate", image: image3 },
  { title: "Turkish veggie egg plate", image: image4 },
  { title: "Golden scramble and roasted veg", image: image5 },
  { title: "Wandering Golden Waffle", image: image6 },
  { title: "Wandering egg bites", image: image16 },
  { title: "Perfect boils, Every Time", image: image15 },
];

export default function WanderingKitchen() {
  return (
    <section className="py-[70px] bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Heading (RESTORED STYLE) */}
        {/* <AnimatedHeading
          className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          text={`From Our Wandering Blogs`}
        /> */}
        <AnimatedHeading
          className="text-center  text-3xl md:text-4xl text-[#322119] leading-tight mb-1 font-extrabold"
          text={`The Wandering Kitchen`}
        />

        <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 2.6,
              ease: [0.22, 1, 0.36, 1],
            }}
        
        className="text-center text-[22px] text-[#5A4228] mb-2 font-semibold">
          Delicious recipes made with real free-range eggs
        </motion.p>

        <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 2.6,
              ease: [0.22, 1, 0.36, 1],
            }} 
        
        className="text-center text-[16px] text-[#4b3f34] mb-8">
          Inspired Plates, The Wandering Wings Way
        </motion.p>

        {/* Auto Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-5 w-max animate-kitchen no-scrollbar">
            {[...recipes, ...recipes].map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[230px]
                  bg-white
                  rounded-[12px]
                  shadow-[0_12px_28px_rgba(0,0,0,0.10)]
                  overflow-hidden
                  transition-transform duration-300
                  hover:-translate-y-1.5 hover:scale-[1.03]
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={240}
                  className="h-[240px] w-full object-cover"
                />
                <p className="text-[16px] font-semibold text-center text-[#322119] py-3">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
