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
                <label htmlFor="">Name</label>
                <input type="text"  placeholder="Enter Your Name" />
              </div>
              <div className="inputcontainer">
                <label htmlFor="">Email</label>
                <input type="email"  placeholder="Enter Your EmailId" />
              </div>
              <div className="inputcontainer">
                <label htmlFor="">Password</label>
                <input type="text"  placeholder="Enter Your Password" />
              </div>
              <div className="inputcontainer">
                <label htmlFor="">ConfrimPassword</label>
                <input type="text"  placeholder="Confrim your password" />
              </div>
               <button className='main-btn'>Register</button>
                <p className='authLink'> Already have an account? <Link href="/auth/signin">LoginHere</Link></p>
            </form>
        </div>
       </div>
    </div>
  )
}

export default Singnup
