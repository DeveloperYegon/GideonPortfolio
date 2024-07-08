import React from 'react'
import myProfile from '../assets/GideonYegon.jpg'

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
              A  <strong>Software Engineer</strong> with over 2 years of interacting software engineering content.
              I have delved into building and development of softwares to enhace smooth businness operations in the technology world. 
              <br />
              My greatest strength is collaborating and driving effectiveness across teams.
              I have talent for designing and developing systems to successfully launch technology products.
              <br />
              I am passionate about scraping innovations using technology products including web and mobile development revolving around 
              blockchain technology.
              <br />
              I value being collaborative, having fun and being inclusive & authentic when doing it.

        </p>
     </div>
    </div>

    <div className='text-[#fff] rounded-xl mx-4 my-10 bg-[#182B5C] py-3 md:mx-20 px-3 h-full'>
      <h3 className='text-center'>skills and expertise</h3>
      <hr className='bg-white w-[80%] m-auto'/>
      <ul>
        <li>Web Development</li>
        <li>Mobile Development</li>
        <li>Blockchain Technology</li>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        </ul>
     </div>
    
     <div className=' text-white mx-4 md:mx-20 my-10 rounded-xl bg-[#182B5C]  py-3 px-3  h-full'>
      <h3 className='text-center'>skills and expertise</h3>
      <hr className='bg-white w-[80%] m-auto'/>
      <ul>
        <li>Web Development</li>
        <li>Mobile Development</li>
        <li>Blockchain Technology</li>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        </ul>
     </div>
    </div>
  )
}

export default Home