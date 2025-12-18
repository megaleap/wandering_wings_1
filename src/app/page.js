import Banner from '@/components/Banner'
import Herosection from '@/components/Herosection'
import Testimonials from '@/components/Testimonials'
import WanderingBlogs from '@/components/WanderingBlogs'
import WanderingKitchen from '@/components/WanderingKitchen'
import React from 'react'
import AboutFarm from './about/page'
const page = () => {
  return (
    <div>
      <Herosection/>
      <Banner/>
      <AboutFarm/>
    </div>
  )
}

export default page
