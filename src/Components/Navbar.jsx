import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';


function Navbar() {

  // const [sidebar, setSidebar] = React.useState(false);

  const side = document.querySelector('.sidebar')

  const showSidebar = () => {
    side.classList.toggle("-translate-x-full");

  }



  return (
        <nav className='bg-[#182B5C] border-b border-slate-950 fixed top-0 w-full h-20 items-center text-[#fff] flex justify-between'>

            <div className='px-10 text-[#ED7D3B] text-xl'>
              <Link to="/">
              DeloperYegon
              </Link> 
              </div>

          

              <div className=' flex'>
                <Link to="/notifications">
                <FaIcons.FaBell  className='hover:text-[#ED7D3B]'/>
                </Link>
                <div className='text-[rgb(255,0,0)]'>0</div>
              </div>

              
              <div>
              <ul className='items-center hidden md:flex text-xl'>
                    <li className='px-3 hover:text-[#ED7D3B]'>
                      <Link to="/">
                      Home
                      </Link> 
                      </li>
                    <li className='px-3 hover:text-[#ED7D3B]'>
                      <Link to="/contact">Contact</Link>
                      </li>
                    <li className='px-3 hover:text-[#ED7D3B]'>
                      <Link to="/projects ">Projects</Link> </li>
                      <li className='px-3 hover:text-[#ED7D3B]'>
                      <Link to="/services">Services</Link> </li>
                    <li className='px-3 hover:text-[#ED7D3B] '>
                      <Link to="/blogs">Blogs</Link> </li>
                </ul>
              </div>


               <div>
                <button className='px-10 md:hidden'>
                    <FaIcons.FaBars onClick={showSidebar} className='hover:text-[#ED7D3B]'/>
                </button>

               </div>
               <div className= 'sidebar w-1/2  top-[80px] fixed md:hidden'>
                <Sidebar/>
             </div>
             
    
        </nav>
  )
}

export default Navbar