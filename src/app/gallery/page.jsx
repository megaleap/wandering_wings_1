import Banner from '@/components/Banner'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const galleryImages = [
    { id: 1, src: "/gallery/gallery01.JPG", alt: "Free range hens" },
    { id: 2, src: "/gallery/gallery09.JPG", alt: "Farm landscape" },
    { id: 3, src: "/gallery/gallery03.JPG", alt: "Healthy poultry" },
    { id: 4, src: "/gallery/gallery04.JPG", alt: "Ethical farming" },
    { id: 5, src: "/gallery/gallery05.JPG", alt: "Hens outdoors" },
    { id: 6, src: "/gallery/gallery06.JPG", alt: "Sustainable farm" },
    { id: 7, src: "/gallery/gallery07.JPG", alt: "Farm life" },
    { id: 8, src: "/gallery/gallery08.JPG", alt: "Wandering Wings farm" },
    { id: 9, src: "/gallery/gallery02.JPG", alt: "Happy hens" },
  ]

  return (
    <>
      {/* Hero */}
      <div className="text-center h-[400px] flex flex-col justify-center bg-[#39251A]">
        <h1 className="text-white text-6xl font-bold">Our Gallery</h1>
        <p className="text-white mt-2">Home / Gallery</p>
      </div>

      <Banner />

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative w-full h-[300px] rounded-xl overflow-hidden bg-gray-100"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default page
