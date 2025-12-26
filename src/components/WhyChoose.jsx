"use client";
import Image from "next/image";
import { ArrowRight, Handshake, Diamond, Smile } from "lucide-react";
import image1 from "../app/assets/whychoose/1.jpeg";
import image2 from "../app/assets/whychoose/2.jpeg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import AnimatedHeading from "./AnimatedHeading";
import ScrollAnimations from "./ScrollAnimations";

export default function WhyChoose() {
  const router = useRouter();
  const text = "Why Choose Wandering Wings — A Better  Egg, Every Day";
  // Split text into words and spaces separately
  const parts = text.split(/(\s+)/);
  let charIndex = 0;

  return (
    <>
      <ScrollAnimations />

      <section className="bg-[#fff5df]">
        {/* TOP CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-yellow-500 text-xs tracking-widest font-semibold mb-3">
              ✦<span className="text-[#3b2615]"> WHY CHOOSE US?</span>
            </p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="text-3xl md:text-4xl text-[#3b2615] leading-snug font-extrabold"
              style={{ whiteSpace: "normal", wordBreak: "normal" }}
            >
              {parts.map((part, partIndex) => {
                const isSpace = part.trim() === "";
                
                // For spaces, render them directly as regular spaces
                if (isSpace) {
                  return <span key={partIndex}> </span>;
                }
                
                // For words, wrap in a container that prevents breaking within the word
                const chars = part.split("");
                return (
                  <span
                    key={partIndex}
                    style={{ 
                      display: "inline-block",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {chars.map((char) => {
                      const currentIndex = charIndex++;
                      return (
                        <motion.span
                          key={currentIndex}
                          variants={{
                            hidden: {
                              opacity: 0,
                              y: 24, // 🌊 start slightly down
                            },
                            visible: {
                              opacity: 1,
                              y: 0,
                            },
                          }}
                          transition={{
                            duration: 0.2,
                            ease: [0.25, 0.8, 0.25, 1], // 🌊 smooth tide
                            delay: currentIndex * 0.025, // 👉 left → right wave
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </span>
                );
              })}
            </motion.h2>

            {/* <p>
            See how naturally raised eggs compare to conventional, industrial
            eggs.
          </p> */}
          </div>

          {/* ROW 1 */}
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">
            <div className="relative w-full h-[260px] md:h-[340px] rounded-2xl overflow-hidden shadow-md  animate-on-scroll">
              <Image
                src={image1}
                alt="Free range hens"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <AnimatedHeading
                text="Our Commitment to Care"
                className="text-3xl md:text-4xl text-[#3b2615] leading-snug font-extrabold mb-4"
              />

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 2.8,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="text-[#6b4a2f] leading-relaxed mb-6 text-sm md:text-base"
              >
                We don’t just raise hens — we uphold a responsibility. From
                natural feed to open land and humane living, every step reflects
                our promise to do what’s right, even when it is not the easiest
                path.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 2.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => router.push("/contact")}
                className="
                group inline-flex items-center gap-2
                bg-yellow-400 hover:bg-white
                transition-colors duration-300
                text-black text-lg font-extrabold
                pl-5 py-1.5 pr-1.5 rounded-xl shadow cursor-pointer
              "
              >
                Contact Us
                <span
                  className="
                  w-7 h-7 rounded
                  bg-white group-hover:bg-yellow-400
                  transition-colors duration-300
                  flex items-center justify-center
                "
                >
                  <ArrowRight size={16} className="text-black" />
                  {/* <ArrowRight
                  size={16}
                  className="text-black group-hover:translate-x-0.5 transition-transform"
                /> */}
                </span>
              </motion.button>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <AnimatedHeading
                text="Our Commitment to Customer"
                className="text-3xl md:text-4xl text-[#3b2615] leading-snug font-extrabold mb-4"
              />

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 2.8,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="text-[#6b4a2f] leading-relaxed text-sm md:text-base"
              >
                Our promise to every customer — whether it’s a home, a store, or
                a small café — is simple. We go the extra mile. Because at
                Wandering Wings, your trust matters more than the size of your
                order.
              </motion.p>
            </div>


            <div className="relative w-full h-[260px] md:h-[340px] rounded-2xl overflow-hidden shadow-md order-1 lg:order-2  animate-on-scroll">
              <Image
                src={image2}
                alt="Fresh eggs basket"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* DARK FEATURE STRIP */}
        <div className="bg-gradient-to-r from-[#2b1b10] to-[#3b2615] py-20">
          <div className="max-w-7xl mx-auto px-6 grid gap-14 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 hover:bg-white">
                <div className="relative w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Image 
                    src='/ads/farmer.png'
                    fill
                    alt="icon"
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Empowering Local Farmers
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  We create sustainable income opportunities for rural families.
                  Many partnering farmers earn ₹1 lakh+ per month with minimal
                  upfront investment — enabling stable, dignified livelihoods.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 hover:bg-white">
                <div className="relative w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Image 
                    src='/ads/Transparent & Honest Practices.png'
                    fill
                    alt="icon"
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Transparent & Honest Practices
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  No shortcuts. No industrial tricks. We maintain complete
                  transparency from farm to home — because clean food can only
                  come from clean systems.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 hover:bg-white">
                <div className="relative w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Image 
                    src='/ads/Service Beyond Expectations.png'
                    fill
                    alt="icon"
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Service Beyond Expectations
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  We treat every customer like family. Whether it’s last-minute
                  requests, new delivery areas, or special handling — if it
                  matters to you, it matters to us.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
