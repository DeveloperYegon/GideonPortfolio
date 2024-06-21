import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaBell } from "react-icons/fa6";

function Navbar() {

  const btn = () => {
    
  }

  return (
        <nav className='bg-[#182B5C] border-b border-slate-950 fixed top-0 w-full h-20 items-center text-[#fff] flex justify-between'>
            <div className='px-10 '>
              <Link to="/">
              DeloperYegon
              </Link> 
              </div>

          

              <div className=' flex'>
                <FaBell />
                <div className='text-[rgb(255,0,0)]'>0</div>
              </div>

              
              <div>
              <ul className='items-center hidden md:flex'>
                    <li className='px-3'>
                      <Link to="/">
                      Home
                      </Link> 
                      </li>
                    <li className='px-3'>
                      <Link to="/contact">Contact</Link>
                      </li>
                    <li className='px-3'>
                      <Link to="/projects">Projects</Link> </li>
                    <li className='px-3'>
                      <Link to="/blogs">Blogs</Link> </li>
                </ul>
              </div>


               <div>
                <button className='px-10 md:hidden'>
                    <FaBars onClick={btn} />
                </button>
               </div>
    
        </nav>
  )
}

export default Navbar