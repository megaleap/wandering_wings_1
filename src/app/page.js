import FAQs from '@/components/FAQs'
import FarmGallery from '@/components/FarmGallery'
import Herosection from '@/components/Herosection'
import Testimonials from '@/components/Testimonials'
import WanderingBlogs from '@/components/WanderingBlogs'
import WanderingKitchen from '@/components/WanderingKitchen'
import React from 'react'
const page = () => {
  return (
    <div>
      <Herosection/>
      <Testimonials/>
      <FarmGallery/>
      <FAQs/>
      <WanderingBlogs/>
      <WanderingKitchen/>
    </div>
  )
}

export default page
