import React from 'react'
import Link from 'next/link';
import {  BiUserCircle,BiPlus,BiSearchAlt } from "react-icons/bi";
import img2 from'@/assets/img2.png'
import Image from 'next/image';
import '@/components/navbar/Navbar.css'
function Navbar() {
  return (
  <nav className="navbar">
    <div className="left">
     <Link href="/pages/profile" className='link'>
      <BiUserCircle className="icon"/>
     </Link>
     <Link href="/pages/addblog" className='link'>
      <BiPlus className="icon"/>
     </Link>
     <Link href="/search" className='link'>
      <BiSearchAlt className="icon"/>
     </Link>
    </div>
    <div className="middle">
      <Link href="/">
        <Image 
        className='logo'
        src={img2}
        alt='logo'
        />
      </Link>
    </div>
    <div className="right">
     <Link href='/'>Home</Link>
     <Link href='/pages/about'>About</Link>
     <Link href='/pages//contact'>Contact</Link>
  
    </div>
      </nav>
)
}

export default Navbar
