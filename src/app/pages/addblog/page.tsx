import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import './addblog.css'
function AddBlog() {
  return (
    <div>
      <Navbar />
   
      <div className="blog">
        <div className="p1">
          <h1>Add New blog</h1>
        </div>
        <div className="p2">
          <form action="">
          <div className="inputcontainer">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="Enter title of the blog" />
            </div>
            <div className="inputcontainer">
              <label htmlFor="description">Description</label>
              <textarea placeholder="Enter the description"/>
            </div>
            <div className="inputcontainer">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="inputcontainer">
              <label htmlFor="">BlogImage</label>
              <input type="file" />
            </div>


            <div className="paragraph">
              <div className="inputcontainer">
                <label htmlFor="">ParagraphTitle</label>
                <input type="text" placeholder="Enter paragraph title" />
              </div>
              <div className="inputcontainer">
                <label htmlFor="">Paragraph Description</label>
                <textarea placeholder="Enter the description"/>
              </div>
              <div className="inputcontainer">
                <label htmlFor="">Paragraph Image</label>
                <input type="file" />
              </div>
             <button className='main-btn'>Add More Paragaph</button>
            </div>
            <button className='main-btn'>Submit</button>
          </form>
        </div>


      </div>

    </div>
  )
}

export default AddBlog
