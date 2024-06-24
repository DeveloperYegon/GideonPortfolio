import React from 'react'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";



function Contact() {
  return (
    <div className='mt-20 h-full pt-10 bg-[url("./assets/bg.jpeg")] bg-cover'>

      <div className='m-auto md:grid gap-10
    grid-cols-2 mx-10'>
      <div className='hidden md:flex flex-col  bg-[#182B5C] text-[#fff] items-center rounded-[10px] h-full p-6'>
        <h2 className='flex'>Share your feedback</h2>
        <hr className='m-4 bg-white'/>
        <p>
          "Feedback is the breakfast of champions, the compass that guides us to improvement and the mirror that reflects our potential for greatness."<br />
        <strong><i>--ChatGPT--</i></strong>

        </p>

      </div>


      <div className='border p-10 border-slate-900 bg-[#fff] rounded-[10px] h-full'>

      <h3 className='text-center mt-10 text-[#ED7D3B] text-xl'>Get in Touch</h3>
      <hr className='m-4'/>
        <form action="" method='post' className='flex flex-col'>
            <label htmlFor="contactname">Name:</label>
                <input className="border border-slate-700 p-2 text-center bg-gray-200 rounded-full" type="text" autoFocus placeholder='Enter Your Name' id="contactname"/>


            <label htmlFor="contactmail">Email:</label>
                <input className="border border-slate-700 text-center bg-gray-200 p-2 rounded-full" type="email" placeholder='Enter Your Email' id="contactmail"/>


              <label htmlFor="message">Message:</label>
                <textarea className="border text-center border-slate-700 bg-gray-200  p-2 rounded-[10px]" name="message" placeholder='Type Your Message Here.' id="message">

                </textarea>
            <button className='border border-slate-950 rounded-full p-3 mt-4 bg-[#ED7D3B] uppercase text-xl m-auto'>Submit</button>
        </form>
      </div>
      </div>

      <div className='my-20 mx-10 border h-full bg-[#fff] py-20'>
        <h3 className='text-center text-xl text-[#ED7D3B]'>Join our Community</h3>
        
        <hr className='m-4' />
        
        <ul className='flex w-1/2 pt-10 m-auto justify-around'>
          <li className='border border-[#ED7D3B] p-5 rounded'><Link to="">< ImLinkedin className='bg-white hover:text-[#ED7D3B]'/></Link> </li>
          <li className='border border-[#ED7D3B] p-5 rounded'><Link to=""><FaSquareInstagram className='bg-white hover:text-[#ED7D3B]'/></Link></li>
          <li className='border p-5 border-[#ED7D3B] rounded'><Link to=""><FaTwitterSquare className='bg-white hover:text-[#ED7D3B]' /></Link></li>
          <li className='border p-5 border-[#ED7D3B] rounded'><Link to=""><FaFacebookSquare className='bg-white hover:text-[#ED7D3B]'/></Link></li>
          <li className='border p-5 border-[#ED7D3B] rounded'><Link to=""><FaPinterestSquare className='bg-white hover:text-[#ED7D3B]'/></Link></li>
        </ul>
      </div>



    </div>
  )
}

export default Contact


