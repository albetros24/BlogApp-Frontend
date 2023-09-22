
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import HomeSlider from '@/components/slider/HomeSlider'
import CategoriesSlider from '@/components/Categories/CategoriesSlider'
import BlogsSlider from '@/components/blogCards/BlogsSlider'

export default function Home() {
  return (
    < >
     <Navbar/>
      <div className="contnent">
     
      <HomeSlider/>
      <CategoriesSlider/>
      <BlogsSlider/>
      </div>
      
       <h1> Hello this  blog app</h1>
    </>
  )
}
