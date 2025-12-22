import Banner from "@/components/Banner";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-full py-36 flex items-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD33YJ6e1-9noPRH-KptfttPfJL0lSiekRzHAiD2ciF2-dCyzE_xt7L7dEYvr9BOhAZvrYOJdi61MUguLZMsSHDeeckTSibvuwWpBc1P1Bx0IPuqzX248VaUmQx8ScdwnFgepohkj_IFhrBqHRoXjRmkHxfUrKGTxiwlZtKWMMS3JQlvvG9-hd2Oc40fmu15vlz0rTGE54fj9KAsX9VKo3RTCI5t15gi6bfwywDZTFg1fvQTEaO1evWrEuZWNGyZ5o-EH4dgG23zU4')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 font-serif text-6xl font-bold tracking-widest uppercase text-[#39251A]">
              Founder’s Journal
            </span>

            {/* <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Building With <br />
              Purpose & Integrity
            </h1> */}

            <p className="text-lg text-center text-[#39251A] mb-8">
              A Journey of Purpose, Ethics, and Free-Range Farming
            </p>

            
          </div>
        </div>
      </section>
      <Banner/>
    </div>
  );
};

export default page;
