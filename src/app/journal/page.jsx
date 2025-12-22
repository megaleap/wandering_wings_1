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
      <section className="bg-[#FAF7F2] py-20 px-6">
        <div className="max-w-3xl 2xl:max-w-4xl mx-auto">
          <div className="bg-white border border-[#E6D9C7] rounded-2xl shadow-sm p-10 md:p-14 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c4.5 0 8 3.5 8 8 0 5-4 9-8 10-4-1-8-5-8-10 0-4.5 3.5-8 8-8z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#3A2A1A] mb-6">
              A Mission to Transform Egg Production
            </h2>

            {/* Content */}
            <p className="text-gray-700 text-lg leading-relaxed">
              On <strong>December 25th, 2023</strong>, Wandering Wings was founded
              by <strong>Rahul Raj</strong>, a passionate and curious mind who
              began his journey simply searching for{" "}
              <strong>quality, ethically raised eggs</strong> for himself. What
              started as a personal quest soon unfolded into a purpose-driven
              mission to transform India’s egg production landscape through{" "}
              <strong>humane, free-range practices</strong> and by{" "}
              <strong>empowering rural farmers</strong> with modern
              contract-farming methods and industry best practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
