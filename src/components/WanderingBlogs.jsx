"use client";
import React from "react";
import Image from "next/image";

import blog1 from "../app/assets/blogs/image1.png";
import blog2 from "../app/assets/blogs/image2.png";
// import blog3 from "../app/assets/blogs/image3.png";
import blog3 from "../app/assets/blogs/image5.jpeg";
import { motion } from "framer-motion";
import { ArrowBigRight, ArrowRight } from "lucide-react";

const blogs = [
  {
    image: blog1,
    title:
      "Higher standards. Real freedom. Better eggs—rooted in respect for nature and animal welfare.",
  },
  {
    image: blog2,
    title:
      "Sustainability & Environmental Impact - From feed to farm, we actively reduce our carbon footprint through mindful, sustainable practices.",
  },
  {
    image: blog3,
    title:
      "Life lessons — The land teaches patience, balance, and honest growth — just like free-range farming.",
  },
];

export default function WanderingBlogs() {
  return (
    <section className="bg-[#FFF6DF] py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#6b4b32] mb-2 flex items-center gap-2">
              <span className="text-[#FED525]">✦</span> OUR BLOGS
            </p>
            <h2 className="text-[32px] md:text-[40px] font-serif text-[#3A2417] leading-tight font-extrabold">
              From Our Wandering <br /> Blogs
            </h2>
          </div>

          <button className="self-start md:self-auto bg-[#FFD21F] text-[#3A2417] font-semibold px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition">
            View All Blogs
            <span className="w-7 h-7 rounded bg-white flex items-center justify-center">
              <ArrowRight size={16} className="text-black" />
            </span>
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              key={index}
              className="bg-[#FFF6DF] rounded-[18px] border border-[#E8DCC6] overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-[220px] w-full overflow-hidden group">
                {/* Image */}
                <Image
                  src={blog.image}
                  alt="Blog Image"
                  fill
                  className="
      object-cover
      rounded-t-[18px]
      transition-transform duration-700 ease-out
      group-hover:scale-110
    "
                />

                {/* Diagonal White Overlay */}
                <span
                  className="
      absolute
      inset-0
      bg-white/40
      rotate-[-35deg]
      scale-0
      origin-center
      transition-transform duration-700 ease-out
      group-hover:scale-150
    "
                />
              </div>

              <div className="p-5">
                <p className="text-[#3A2417] text-[15px] leading-relaxed mb-4 font-semibold">
                  {blog.title}
                </p>

                <button className="text-[#3A2417] font-semibold flex items-center gap-2 hover:underline">
                  Read More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
