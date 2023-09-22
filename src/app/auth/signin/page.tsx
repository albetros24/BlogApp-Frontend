import Navbar from '@/components/navbar/Navbar'
import Link from 'next/link'
import React from 'react'
import '../auth.css'
function Singnup() {
  return (
    <div className='authout'>
        <Navbar/>
       <div className="authin">
        <div className="left">
            
        </div>
        <div className="right">
            <form action="" style={{
                display:"flex",
                flexDirection:"column",
                
            }}>
              
              <div className="inputcontainer">
                <label htmlFor="">Email</label>
                <input type="email"  placeholder="Enter Your EmailId" />
              </div>
              <div className="inputcontainer">
                <label htmlFor="">Password</label>
                <input type="text"  placeholder="Enter Your Password" />
              </div>
              
               <button className='main-btn'>LogIn</button>
                <p className='authLink'> Creat a new Account  <Link href="/auth/signup">Register</Link></p>
            </form>
        </div>
       </div>
    </div>
  )
}

export default Singnup
