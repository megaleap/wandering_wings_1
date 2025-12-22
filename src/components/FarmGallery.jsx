"use client";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import img1 from "@/app/assets/gallery/1.png";
import img2 from "@/app/assets/gallery/2.jpeg";
import img3 from "@/app/assets/gallery/3.jpeg";
import img4 from "@/app/assets/gallery/4.jpeg";

const galleryImages = [img1, img2, img3, img4];

export default function FarmGallery() {
  const router = useRouter();

  return (
    <section className="bg-[#FFF6DE] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
          ★ Our Gallery
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B2414] mb-12">
          Our Farm gallery
        </h2>

        {/* Gallery */}
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {galleryImages.map((img, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              key={index}
              className="relative group w-[200px] h-[300px] sm:w-[220px] sm:h-[320px]"
            >
              {/* Image */}
              <div className="relative group w-[220px] h-[320px]">
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
                  }}
                >
                  <Image
                    src={img}
                    alt="Farm Gallery"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center scale-90 group-hover:scale-100 transition">
                      <Eye className="text-black w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-6 py-3 rounded-xl"
        onClick={() => router.push('/gallery')}
        >
          View All
          <span className="w-7 h-7 rounded bg-white flex items-center justify-center">
            <ArrowRight size={16} className="text-black" />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
