import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import EggPacks from "@/components/EggPacks";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="w-full h-[300px] md:h-[350px] bg-gradient-to-r from-[#2b1d12] to-[#3a2718] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-white/80 text-sm md:text-base">
            Home <span className="mx-1">/</span> Contact Us
          </p>
        </div>
      </section>
      <Banner />
      <ContactSection />
    </>
  );
};

export default Page;
