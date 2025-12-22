"use client";
import React from "react";
import Image from "next/image";

// replace these with your actual images
import heroImg from "../assets/deepdrive/image.png";
// import heroImg from "../app/assets/deepdrive/image.png";
import img1 from "../assets/deepdrive/image1.png";
import img2 from "../assets/deepdrive/image2.jpg";
import img3 from "../assets/deepdrive/image3.jpeg";
import img4 from "../assets/deepdrive/image4.jpeg";

const Page = () => {
  return (
    <main className="bg-[#fff5df] border border-white/60">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="relative rounded-3xl overflow-hidden min-h-[260px] md:min-h-[500px]">
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
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-2 leading-tight">
              Wandric, your guide to happy eggs!
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-2xl">
              Discover the journey of our pasture-raised eggs, from our happy
              hens to your healthy home.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WAY SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3b2615] mb-3">
          The Wandering Wings Way
        </h2>
        <p className="text-[#6b4a2f] max-w-2xl mb-10">
          Wandric and her friends roam freely on open pastures, enjoying a
          natural diet that makes for healthier, tastier eggs. It’s a simple
          philosophy: happy hens lay the best eggs.
        </p>

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
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-[#3b2615] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#6b4a2f] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PASTURE EGGS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3b2615] mb-8">
          What Are Pasture-Raised Eggs?
        </h2>

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
            <div key={i} className="text-center">
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
            </div>
          ))}
        </div>
      </section>

      {/* ================= NUTRITION SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-white rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#3b2615] mb-2">
            More Than Just a Pretty Yolk
          </h2>
          <p className="text-sm text-[#6b4a2f] mb-10">
            Pasture-raised eggs aren’t just tastier, they’re packed with more of
            the good stuff.
          </p>

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
              <div
                key={i}
                className="bg-[#fff5df] rounded-2xl p-6 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#fde9a9] mb-4" />
                <h3 className="font-semibold text-[#3b2615] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6b4a2f] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DELIVERY SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-16 mb-24 bg-[#fff5df]">
        <div className="bg-[#fdeeb8] rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#3b2615] mb-2">
            Ready for Farm-Fresh Goodness?
          </h2>
          <p className="text-sm text-[#6b4a2f] mb-10">
            Get Wandering Wings eggs delivered right to your door. Freshness
            guaranteed.
          </p>

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
              <div key={i} className="bg-white rounded-2xl p-6 text-left">
                <h3 className="font-semibold text-[#3b2615] mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6b4a2f] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
