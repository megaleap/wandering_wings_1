"use client";
import { useState } from "react";
import Image from "next/image";
import faq from "../app/assets/FAQ.png";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const faqs = [
  {
    question: "Are your eggs 100% natural and free from additives?",
    answer:
      "Yes. Our eggs are completely natural — no antibiotics, no chemicals, and no artificial boosters. They come straight from hens raised in open, stress-free spaces.",
  },
  {
    question: "How do you ensure the quality and safety of your eggs?",
    answer:
      "We follow strict hygiene and safety standards at every step — from farm care and egg collection to cleaning, grading, and delivery.",
  },
  {
    question: "Do you offer home delivery services?",
    answer:
      "Yes, we provide reliable home delivery services to ensure fresh eggs reach your doorstep safely and on time.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0); // ✅ first open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <Image
          src={faq}
          alt="Free Range Hen"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div> */}

      <div className="absolute inset-0">
        <Image
          src={faq}
          alt="Free Range Hen"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Empty column for image balance */}
        <div className="hidden lg:block" />

        {/* FAQ Content */}
        <div className="text-white">
          <p className="text-sm tracking-widest text-yellow-400 mb-3">
            ✦
            <span className="text-white font-bold">
              {" "}
              FREQUENTLY ASKED QUESTIONS
            </span>
          </p>

          <AnimatedHeading
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            text={`Everything you need to know        about our free-range eggs`}
          />
          {/* <AnimatedHeading
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            text={`about our free-range eggs`}
          /> */}

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-sm text-gray-200 mb-8 max-w-md"
          >
            Got questions? We’ve got answers. From how our hens live to how our
            eggs are collected, cleaned, and delivered — here’s everything you
            need to know.
          </motion.p>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-sm md:text-base"
                >
                  {faq.question}
                  <span
                    className={`w-7 h-7 flex items-center justify-center rounded-md font-bold transition ${
                      openIndex === index
                        ? "bg-yellow-400 text-black"
                        : "bg-white text-black"
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-5 text-sm text-gray-200 transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 pb-4 opacity-100"
                      : "max-h-0 overflow-hidden opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
