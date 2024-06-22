import React from 'react'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";



function Contact() {
  return (
    <div className='mt-20 h-full pt-10'>

      <div className='m-auto md:grid gap-10
    grid-cols-2 mx-10'>
      <div className='hidden md:flex flex-col border border-slate-900 bg-[#182B5C] text-[#fff] items-center rounded-[10px] h-full  p-6'>
        <h2 className='flex'>Share your feedback</h2>
        <hr className='m-4 bg-white'/>
        <p>
          "Feedback is the breakfast of champions, the compass that guides us to improvement and the mirror that reflects our potential for greatness."<br />
        <strong><i>ChatGPT</i></strong>

        </p>

      </div>


      <div className='border p-10 border-slate-900  rounded-[10px] h-full'>

      <h3 className='text-center mt-10 text-black'>Get in Touch</h3>
      <hr className='m-4'/>
        <form action="" method='post' className='flex flex-col'>
            <label htmlFor="contactname">Name:</label>
                <input className="border border-slate-700 p-2 rounded-full" type="text" id="contactname"/>
            <label htmlFor="contactmail">Email:</label>
                <input className="border border-slate-700 p-2 rounded-full" type="email" id="contactmail"/>
              <label htmlFor="message">Message:</label>
                <textarea className="border border-slate-700 p-2 rounded-[10px]" name="message" placeholder='Type Your Message Here.' id="message">

                </textarea>
            <button className='border border-slate-950 rounded-full p-3 mt-4 bg-[rgba(0,255,0.4)]  m-auto'>Submit</button>
        </form>
      </div>
      </div>
      <div className='mt-20 h-full py-20'>
        <h3 className='text-center text-black'>Join the Community</h3>
        
        <hr className='m-4' />
        <p className='text-center mb-10'>Learn about our products and discounts.</p>
        <ul className='flex w-1/2 m-auto justify-around'>
          <li className='border p-5 rounded'><Link to="">< ImLinkedin className='bg-white hover:bg-red-500'/></Link> </li>
          <li className='border p-5 rounded'><Link to=""><FaSquareInstagram className='bg-white hover:bg-red-500'/></Link></li>
          <li className='border p-5 rounded'><Link to=""><FaTwitterSquare className='bg-white hover:bg-red-500' /></Link></li>
          <li className='border p-5 rounded'><Link to=""><FaFacebookSquare className='bg-white hover:bg-red-500'/></Link></li>
          <li className='border p-5 rounded'><Link to=""><FaPinterestSquare className='bg-white hover:bg-red-500'/></Link></li>
        </ul>
      </div>



    </div>
  )
}

export default Contact


