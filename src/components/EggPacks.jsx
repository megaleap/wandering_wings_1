"use client";
import Image from "next/image";
import pack1 from "../app/assets/eggPacks/6pack.jpg";
import pack2 from "../app/assets/eggPacks/12.jpg";
import pack3 from "../app/assets/eggPacks/30packs.jpeg";
import pack4 from "../app/assets/eggPacks/120pack.jpg";
import pack5 from "../app/assets/eggPacks/300pack.jpg";

import { motion } from "framer-motion";

const products = [
  {
    title: "6-Egg Pack",
    desc: "Perfect for small families. Fresh, nutritious, daily use.",
    image: pack1,
  },
  {
    title: "12-Egg Pack",
    desc: "Our most popular pack—balanced for weekly cooking.",
    image: pack2,
  },
  {
    title: "30-Egg Pack",
    desc: "Ideal for daily fitness and strength.",
    image: pack3,
  },
  {
    title: "120-Egg Pack",
    desc: "Great for large families and bulk use.",
    image: pack4,
  },
  {
    title: "300-Egg Pack",
    desc: "Perfect for hotels, bakeries & restaurants.",
    image: pack5,
  },
];

export default function EggPacks() {
  return (
    <section className="bg-[#fff5df] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 tracking-widest text-xs font-semibold mb-3">
            ✦ OUR PRODUCT
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#3b2615] font-extrabold">
            Our Free-Range Egg Packs
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              key={idx}
              className="text-center"
            >
              {/* Image Card */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-md mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="font-semibold text-[#3b2615] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-[#6b4a2f] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
