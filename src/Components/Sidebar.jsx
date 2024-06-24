import React from 'react'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='mt-3  py-10 bg-[#182B5C] rounded text-[#fff] h-full'>
      <ul className='text-center text-xl'>
      <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/">Home</Link>
            </li>
          <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/contact">Contact</Link> 
            </li>
          <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/projects">Projects</Link>
          
            </li>
          <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/services">Services</Link>

          </li >
          <li className='py-2 hover:bg-white hover:text-[#ED7D3B]'>
            <Link to="/blogs">Blogs</Link>
          </li>
      </ul>
      
        <h3 className='text-center pt-8 text-[#ED7D3B] text-xl'>Join our Community</h3>
        
        <hr className='m-4' />
        
        <ul className='flex gap-2 justify-around'>
          <li className='border  rounded'>< ImLinkedin className='hover:bg-[#ED7D3B]'/> </li>
          <li className='border  rounded'><FaSquareInstagram className=' hover:bg-[#ED7D3B]'/></li>
          <li className='border  rounded'><FaTwitterSquare className=' hover:bg-[#ED7D3B]' /></li>
          <li className='border rounded'><FaFacebookSquare className=' hover:bg-[#ED7D3B]'/></li>
          <li className='border rounded'><FaPinterestSquare className=' hover:bg-[#ED7D3B]'/></li>
        </ul>
    
      </div>
  )
}

export default Sidebar