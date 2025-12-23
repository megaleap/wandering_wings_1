import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-full py-36 mt-28 flex items-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD33YJ6e1-9noPRH-KptfttPfJL0lSiekRzHAiD2ciF2-dCyzE_xt7L7dEYvr9BOhAZvrYOJdi61MUguLZMsSHDeeckTSibvuwWpBc1P1Bx0IPuqzX248VaUmQx8ScdwnFgepohkj_IFhrBqHRoXjRmkHxfUrKGTxiwlZtKWMMS3JQlvvG9-hd2Oc40fmu15vlz0rTGE54fj9KAsX9VKo3RTCI5t15gi6bfwywDZTFg1fvQTEaO1evWrEuZWNGyZ5o-EH4dgG23zU4')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block mb-4  text-6xl font-bold tracking-widest uppercase text-[#39251A]">
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
      <Banner />
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
              On <strong>December 25th, 2023</strong>, Wandering Wings was
              founded by <strong>Rahul Raj</strong>, a passionate and curious
              mind who began his journey simply searching for{" "}
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
      <section className="bg-[#FAF7F2]  py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#3A2A1A] mb-10">
              How It All Began
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-[#3A2A1A] text-lg leading-relaxed">
              <p>
                The idea took root during a conversation with his uncle,
                <strong> Mr. Raju Anga</strong>, a health-conscious individual
                who often spoke about the alarming levels of adulteration in the
                global food sector.
              </p>

              <p>
                This opened Rahul’s eyes and pushed him to ask a deeper
                question:
              </p>

              {/* Highlighted Quote */}
              <div className="bg-[#EEF2DA] border-l-4 border-[#8BAE6F] px-6 py-4 rounded-md text-xl font-serif italic text-[#3A2A1A]">
                “What is good food?”
              </div>

              <p>
                His research revealed that while India carries
                <strong> ancient agricultural wisdom</strong>, the country has
                yet to advance in implementing modern, ethical
                methods—especially in poultry.
              </p>

              <p>
                Eggs, one of the simplest and most accessible sources of
                protein, were often not available in truly good quality. This
                gap sparked an opportunity to rebuild trust in food by
                transforming how eggs are produced.
              </p>

              <p>
                Thus, from a <strong>C-Codet-Corps student</strong>, Rahul began
                evolving into a visionary founder, driven by purpose rather than
                convenience.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
  <div className="bg-white mt-30 border border-[#E6D9C7] rounded-2xl p-4 shadow-sm max-w-md">
    
    {/* IMAGE CONTAINER */}
    <div className="relative w-[360px] h-[460px]">
      <Image
        fill
        src="/assets/Founder.jpeg"
        alt="Founder"
        className="rounded-xl object-cover"
        priority
      />
    </div>

  </div>
</div>

        </div>
      </section>
<section className="bg-[#F6F3D6] py-32 px-6">
  <div className='text-center max-w-4xl mx-auto'>
              <h1 className='text-4xl lg:text-5xl font-bold mb-10 text-[#3A2A1A]' >Learning the World to Build for India</h1>
              <p className='text-lg'>Rahul spent years immersing himself in global knowledge on ethical, sustainable farming. Guided by his natural love for animals and curiosity for living ecosystems, he travelled widely, learning from diverse communities and farms across India and Southeast Asia.</p>
    </div>
  <div className="max-w-5xl mt-20 mx-auto relative">
    
    {/* Vertical Center Line */}
    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#C7C7C7] -translate-x-1/2"></div>

    {/* TIMELINE ITEM */}
    <div className="relative mb-20 flex justify-start">
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 border-4 border-white bg-blue-600 rounded-full z-10"></span>

      {/* Card */}
      <div className="w-full md:w-[45%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg text-[#2B1C14] flex items-center gap-1">
          📍 University of Pondicherry
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          Hands-on learning in farming and animal care.
        </p>
      </div>
    </div>

    {/* TIMELINE ITEM */}
    <div className="relative mb-20 flex justify-end">
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 border-4 border-white bg-blue-600 rounded-full z-10"></span>

      {/* Card */}
      <div className="w-full md:w-[45%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg text-[#2B1C14] flex items-center gap-2">
          🌱 Bheemtal
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          Living the life of a raw farmer, embracing simplicity and discipline.
        </p>
      </div>
    </div>

    {/* TIMELINE ITEM */}
    <div className="relative mb-20 flex justify-start">
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 border-4 border-white bg-blue-600 rounded-full z-10"></span>

      {/* Card */}
      <div className="w-full md:w-[45%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg text-[#2B1C14] flex items-center gap-2">
          📍 Annapoorna Farms, Auroville
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          Strengthening grounding in ethical agriculture.
        </p>
      </div>
    </div>

    {/* TIMELINE ITEM */}
    <div className="relative mb-20 flex justify-end">
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 border-4 border-white bg-blue-600 rounded-full z-10"></span>

      {/* Card */}
      <div className="w-full md:w-[45%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg text-[#2B1C14] flex items-center gap-2">
          🌱 Batangas, Manila (Philippines)
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          A pivotal experience witnessing true free-range poultry systems.
        </p>
      </div>
    </div>
    <div className="relative mb-20 flex justify-start">
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 border-4 border-white bg-blue-600 rounded-full z-10"></span>

      {/* Card */}
      <div className="w-full md:w-[45%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg text-[#2B1C14] flex items-center gap-1">
          📍 Surabaya, Indonesia
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
         Learning multilayered barn systems, an innovative model combining poultry and fish farming.
        </p>
      </div>
    </div>

    {/* TIMELINE ITEM */}
    <div className="relative mb-20 flex justify-end">
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 border-4 border-white bg-blue-600 rounded-full z-10"></span>

      {/* Card */}
      <div className="w-full md:w-[45%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg text-[#2B1C14] flex items-center gap-2">
          🌱 Yogyakarta, Indonesia
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          Deepening his understanding of integrated farming systems.
        </p>
      </div>
    </div>

    {/* TIMELINE ITEM */}
    <div className="relative mb-20 flex justify-start">
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 border-4 border-white bg-blue-600 rounded-full z-10"></span>

      {/* Card */}
      <div className="w-full md:w-[45%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg text-[#2B1C14] flex items-center gap-2">
          📍 Joshimath, Karachhon Village
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          Living as a shepherd, rooted deeply in nature
        </p>
      </div>
    </div>

    {/* TIMELINE ITEM */}
    <div className="relative mb-20 flex justify-end">
      {/* Dot */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 border-4 border-white bg-blue-600 rounded-full z-10"></span>

      {/* Card */}
      <div className="w-full md:w-[45%] bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-lg text-[#2B1C14] flex items-center gap-2">
          🌱 Himalayan Volunteering
        </h3>
        <p className="mt-2 text-gray-700 text-sm">
          Fighting forest fires, cooking for teams, and doing farm tasks to build resilience.
        </p>
      </div>
    </div>
    

  </div>
</section>
<section className="bg-[#FFF5DE] py-28 px-6">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4A2B16] mb-10">
      He further absorbed wisdom under:
    </h2>

    <ul className="space-y-4 text-lg text-[#2F1E14] list-disc list-inside text-left max-w-2xl mx-auto">
      <li>Ceaser from Peru at Orchard & Ganesh Farms, Auroville</li>
      <li>Krishna McKenzie at Solitude Farms</li>
      <li>Sadhana Forest – Learning vegan living and reforestation</li>
      <li>
        Serendipity Farms, Auroville – Gaining experience in gardening,
        civil work, and sustainable structures
      </li>
    </ul>

    <p className="mt-10 text-base text-[#2F1E14] leading-relaxed max-w-3xl mx-auto">
      These experiences gradually realigned his life with nature. The bustling
      city no longer matched his purpose—Rahul desired a life close to the land,
      animals, and regenerative farming practices.
    </p>

    <h3 className="mt-20 text-4xl font-serif font-semibold text-[#4A2B16]">
      Guidance, Gratitude & Growth
    </h3>

    <p className="mt-6 text-base text-[#2F1E14] max-w-3xl mx-auto">
      Rahul attended numerous expos and training programs, learning tirelessly.
      He expresses heartfelt gratitude to:
    </p>

    <ul className="mt-6 space-y-3 text-base text-[#2F1E14] list-disc list-inside max-w-xl mx-auto text-left">
      <li>Happy Hens, Trichy</li>
      <li>Mentor Michael Sommerland</li>
      <li>Many others who shaped his journey</li>
    </ul>

    <p className="mt-8 text-base text-[#2F1E14] max-w-3xl mx-auto">
      These influences built the technical and ethical foundation of Wandering Wings.
    </p>

  </div>
</section>
<section className="bg-[#FFF5DE]  px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl font-serif font-semibold text-[#4A2B16] mb-4">
      The Turning Point
    </h2>

    <p className="text-lg text-[#3A2A1A] mb-16">
      Reflecting on a challenging period before the brand emerged, Rahul shares:
    </p>

    <div className="bg-[#F3F1D6] rounded-2xl px-10 py-10 max-w-2xl mx-auto">
      <p className="font-serif italic text-xl md:text-3xl font-bold  text-[#6A4A2D]">
        “Back in 2019, a person who spent three long years waiting—losing hope
        and almost giving up—survived that testing period and then witnessed a
        sudden shift into the bright, lightning-filled days of Wandering Wings,
        carried by courage and endurance.”
      </p>
    </div>

    <p className="mt-20 text-lg text-[#2F1E14] max-w-4xl mx-auto">
      Inspired by Joel Salatin’s ‘Pastured Poultry Profits’, Rahul committed himself
      to championing ethical poultry, humane animal care, and sustainable farming.
    </p>

  </div>
</section>
<section className="bg-[#FFF5DE] py-28 px-6">
  <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">
      <h2 className="text-5xl font-serif font-semibold text-[#4A2B16] mb-8">
        Wandering Wings Today
      </h2>

      <p className="text-xl text-[#2F1E14] leading-relaxed mb-6">
        What began as a personal search has become a movement—a mission to bring
        premium, protein-rich, free-range eggs to India through compassionate
        farming and farmer empowerment.
      </p>

      <p className="text-xl text-[#2F1E14] leading-relaxed">
        Every egg produced at Wandering Wings carries Rahul’s journey within it—
        a journey of ethics, quality, resilience, and a deep-rooted love for nature.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
  <div className="bg-white border border-[#E6D9C7] rounded-2xl p-4 shadow-sm max-w-md">
    
    {/* IMAGE CONTAINER */}
    <div className="relative w-[360px] h-[460px]">
      <Image
        fill
        src="/assets/DSC04210.JPG"
        alt="Founder"
        className="rounded-xl object-cover"
        priority
      />
    </div>

  </div>
</div>


  </div>
</section>


    </div>
  );
};

export default page;
