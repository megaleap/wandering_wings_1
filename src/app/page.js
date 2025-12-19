import React from 'react'

import Herosection from '@/components/Herosection'
import Banner from '@/components/Banner'
import Testimonials from '@/components/Testimonials'
import FarmGallery from '@/components/FarmGallery'
import FAQs from '@/components/FAQs'
import WanderingBlogs from '@/components/WanderingBlogs'
import WanderingKitchen from '@/components/WanderingKitchen'

// import AboutFarm from './about/page'
import AboutFarm from  "../app/about/page";
import OurEggs from '@/components/OurEggs'

const page = () => {
  return (
    <div>
      <Herosection />
      <Banner />
      <AboutFarm />
      <OurEggs/>
      <Testimonials />
      <FarmGallery />
      <FAQs />
      <WanderingBlogs />
      <WanderingKitchen />
    </div>
  )
}

export default page
