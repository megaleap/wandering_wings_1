"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// replace these with your actual images
import heroImg from "../assets/deepdrive/image.png";
// import heroImg from "../app/assets/deepdrive/image.png";
import img1 from "../assets/deepdrive/image1.png";
import img2 from "../assets/deepdrive/image2.jpg";
import img3 from "../assets/deepdrive/image3.jpeg";
import img4 from "../assets/deepdrive/image4.jpeg";
import AnimatedHeading from "@/components/AnimatedHeading";

const Page = () => {
  return (
    <main className="bg-[#fff5df] border border-white/60">
      {/* ================= HERO ================= */}
      <section className="w-full mx-auto">
        <div className="relative  overflow-hidden min-h-[260px] md:min-h-[530px] mt-28">
          {/* Background Image */}
          <Image
            src={heroImg}
            alt="Wandric the Hen"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Bottom Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
            <AnimatedHeading
              text="Wandric, your guide to happy eggs!
"
              className="text-white text-2xl md:text-4xl font-bold mb-2 leading-tight text-center"
            />
            {/* <h1 className="text-white text-2xl md:text-4xl font-bold mb-2 leading-tight text-center"></h1> */}
            <AnimatedHeading
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 2.8,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="text-white/90 text-sm md:text-base  text-center"
              text="Discover the journey of our pasture-raised eggs, from our happy
              hens to your healthy home."
            />
          </div>
        </div>
      </section>

      {/* ================= WAY SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <AnimatedHeading
          className="text-2xl md:text-3xl font-bold text-[#3b2615] mb-3"
          text="The Wandering Wings Way"
        />

        <motion.p
          className="text-[#6b4a2f] max-w-2xl mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 2.8,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          Wandric and her friends roam freely on open pastures, enjoying a
          natural diet that makes for healthier, tastier eggs. It’s a simple
          philosophy: happy hens lay the best eggs.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Healthy Soil",
              desc: "Our hens enrich the soil, creating a sustainable regenerative farming cycle.",
            },
            {
              title: "Happy Hens",
              desc: "Living outdoors means our hens are stress-free, healthy, and can forage naturally.",
            },
            {
              title: "Glorious Sun",
              desc: "Basking in natural sunlight provides Vitamin D, which they pass on to their eggs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 2.8,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <h3 className="font-semibold text-[#3b2615] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#6b4a2f] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PASTURE EGGS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <AnimatedHeading
          className="text-2xl md:text-3xl font-bold text-[#3b2615] mb-8"
          text={"What Are Pasture-Raised Eggs?"}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              img: img1,
              label: "Caged",
              text: "Hens are confined to small cages.",
            },
            {
              img: img2,
              label: "Cage-Free",
              text: "Hens live in barns without outdoor access.",
            },
            {
              img: img3,
              label: "Free-Range",
              text: "Hens have some outdoor access.",
            },
            {
              img: img4,
              label: "Pasture-Raised",
              text: "Our hens live outdoors on fresh pasture.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 2.8,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-[#3b2615]">{item.label}</h4>
              <p className="text-xs text-[#6b4a2f] mt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= NUTRITION SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-white rounded-3xl p-10 md:p-14 text-center">
          <AnimatedHeading
            className="text-xl md:text-2xl font-bold text-[#3b2615] mb-2"
            text="More Than Just a Pretty Yolk"
          />
          <motion.p
            className="text-sm text-[#6b4a2f] mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 2.8,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            Pasture-raised eggs aren’t just tastier, they’re packed with more of
            the good stuff.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "More Omega-3s",
                desc: "Essential fatty acids for brain health and reducing inflammation.",
              },
              {
                title: "Higher Vitamin D",
                desc: "From soaking up the sun, crucial for bone health and immunity.",
              },
              {
                title: "Richer in A & E",
                desc: "Powerful antioxidants that support vision and skin health.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#fff5df] rounded-2xl p-6 flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 2.8,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                <div className="w-12 h-12 rounded-full bg-[#fde9a9] mb-4" />
                <h3 className="font-semibold text-[#3b2615] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6b4a2f] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DELIVERY SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-16 mb-24 bg-[#fff5df]">
        <div className="bg-[#fdeeb8] rounded-3xl p-10 md:p-14 text-center">
          <AnimatedHeading
            className="text-xl md:text-2xl font-bold text-[#3b2615] mb-2"
            text="Ready for Farm-Fresh Goodness?"
          />
          <motion.p
            className="text-sm text-[#6b4a2f] mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 2.8,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            Get Wandering Wings eggs delivered right to your door. Freshness
            guaranteed.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                title: "Doorstep Delivery",
                desc: "Fresh eggs, no hassle.",
              },
              {
                title: "Save Money",
                desc: "Better prices than retail.",
              },
              {
                title: "Flexible Schedule",
                desc: "Pause or cancel anytime.",
              },
              {
                title: "Peak Freshness",
                desc: "From our farm to you.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 2.8,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                <h3 className="font-semibold text-[#3b2615] mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6b4a2f] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
