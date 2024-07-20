import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import { useState , useEffect} from "react";


function Navbar() {

  const [sidebar, setSidebar] = React.useState(false);
  const side = ()=>setSidebar(!sidebar);

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [count, setCount] = React.useState(0);
  useEffect(() => {
    fetch('http://localhost:3001/requests')
  .then(response => response.json())
  .then(data => setCount(data.length))
  .catch(err => console.log(err));
  },[])




  return (
        <nav className='bg-[#fff]  fixed top-0 w-full h-20 items-center text-[#182b5c] flex justify-between shadow-lg '>

            <div className='px-10 text-[#ED7D3B] text-xl'>
              <Link to="/">
              DeloperYegon
              </Link> 
              </div>

          

              <div className=' flex'>
                <Link to="/notifications">
                <FaIcons.FaBell  className='hover:text-[#ED7D3B]'/>
                </Link>
                <div className='text-[rgb(255,0,0)]'>{count}</div>
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
                      {/* <li className='px-3 hover:text-[#ED7D3B]'>
                      <Link to="/services">Services</Link> </li> */}
                    <li className='px-3 hover:text-[#ED7D3B] '>
                      <Link to="/blogs">Blogs</Link> </li>
                </ul>
              </div>


               <div>
                <button onClick={handleToggle} className='px-10 md:hidden'>
                {isOpen ? <FaIcons.FaTimes onClick={side} className="hover:text-[#ED7D3B]" /> : <FaIcons.FaBars onClick={side} className="hover:text-[#ED7D3B]" />}
                    {/* <FaIcons.FaBars onClick={side} className='hover:text-[#ED7D3B]'/> */}
                </button>

               </div>
               <div className= { ` ${ sidebar ?"":"-translate-x-full"} w-2/3 duration-300 top-[80px] fixed md:hidden`}>
                <Sidebar/>
             </div>
             
    
        </nav>
  )
}

export default Navbar