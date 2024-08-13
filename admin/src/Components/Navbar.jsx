import { useEffect , useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaBell } from "react-icons/fa";

function Navbar() {

  const [count, setCount] = React.useState(0);
  useEffect(() => {
    fetch('http://localhost:3002/requests')
  .then(response => response.json())
  .then(data => setCount(data.length))
  .catch(err => console.log(err));
  },[])

  return (
  <header className='sticky top-0'>
    <nav className='flex justify-around h-20 md:m-5 border shadow-lg border-slate-100 items-center'>
        <Link to="/">  
              <h1 className='text-xl'>DeveloperYegon</h1>
        </Link>

        <ul className='flex '>
            <Link to="/notifications"><li className='p-3 text-xl'><FaBell /> 
            <div className=' bg-black bottom-2 right-1 rounded-full p-1 float text-[rgb(255,0,0)]'>{count}</div> 
            </li></Link>
            <Link to="/add-blog"><li className='p-3 text-xl'>BLogs</li></Link>
            <Link to="/add-project"><li className='p-3 text-xl'>Projects</li></Link>
            
        </ul>
    </nav>
  </header>
  )
}

export default Navbar