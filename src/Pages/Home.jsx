import React from 'react'
import myProfile from '../assets/GideonYegon.jpg'
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { FaPython } from "react-icons/fa6";   
import { SiMysql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SliderComponent from '../Components/SliderComponent';

function Home(){
  return (
    <div className='bg-[#fff]'>
    <div className='grid gap-7 pt-10 px-3 mt-20 justify-between  h-full md:grid-cols-2 md:px-20' >
      
      
      <div className='border shadow-lg shadow-[#ED7D3B] w-full p-5 flex justify-around bg-[#182B5C] rounded-[10px]'>
        <img src={myProfile} className='h-full border border-[rgb(0,255,0)] rounded-[50%]' alt="" />
      </div>

      <div className='text-[#fff] rounded-[10px] shadow-lg shadow-[#ED7D3B] border bg-[#182B5C]' >
        <p className='p-9'>
                  Hello world?<br />
              I'm <strong>Gideon Kipkorir Yegon,</strong> <br />
              A  <strong>Software Engineer</strong> with 2+ years of interacting with software engineering tools and content.
              I have delved into building and development of softwares to enhace smooth business operations in the technology world. 
              <br />
              My greatest strength is collaborating and driving effectiveness across teams.
              I have talent for designing and developing systems to successfully launch technology products.
              <br />
              I am passionate about scraping innovations using technology products including web and mobile development revolving around 
              blockchain technology.
              <br />
              I value being collaborative, inclusive, authentic and having fun  when doing it.

        </p>
     </div>
    </div>

    <div className='text-[#fff] rounded-xl mx-4 my-10 bg-[#182B5C]  py-3 md:mx-20 px-3 h-full'>
      <h3 className='text-center'>skills and expertise</h3>
      <hr className='bg-white w-[80%] h-1 m-auto'/>

      <div className='grid md:grid-cols-4 m-10 gap-5'>
      <div className='flex border p-5 items-center gap-5'><FaReact className='' /> React JS</div>
      <div className='flex border  p-5 items-center gap-5'><FcLinux />Linux</div>
      <div className='flex border p-5 items-center gap-5'><FaGitAlt />Version Control</div>
      <div className='flex border p-5 items-center gap-5'> <IoLogoHtml5 />HTML5</div>
      <div className='flex border p-5 items-center gap-5'><FaPython />Python</div>
      <div className='flex border p-5 items-center gap-5'><RiTailwindCssFill />Tailwind Css</div>
      <div className='flex border p-5 items-center gap-5'><TbBrandJavascript />Javascript</div>
      <div className='flex border p-5 items-center gap-5'><SiMysql />MySql</div>
      <div className='flex border p-5 items-center gap-5'><FaWordpress />WordPress</div>
      </div>
     </div>
    
     <div className=' text-white mx-4 md:mx-20 my-10 rounded-xl bg-[#182B5C]  py-3 px-3  h-full'>
      <h3 className='text-center'>Services</h3>
      <hr className='bg-white w-[80%] h-1 m-auto'/>
     <div className='grid md:grid-cols-2 m-10 gap-5'>
      <div className='flex border p-5 items-center gap-5'>Web Development</div>
      <div className='flex border p-5 items-center gap-5'>Chatbot Integrations</div>
      <div className='flex border p-5 items-center gap-5'>Wordpress Development</div>
     </div>
     </div>
     <div className=' text-white mx-4 md:mx-20 my-10 rounded-xl bg-[#182B5C]  py-3 px-3  h-full'>
      <h3 className='text-center'>Reviews</h3>
      <hr className='bg-white w-[80%] m-auto'/>
      <div className='h-full p-10'>
        <SliderComponent/>
      </div>
     </div>
    </div>
  )
}

export default Home