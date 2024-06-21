import React from 'react'
import myProfile from '../assets/GideonYegon.jpg'

function Home(){
  return (
    <div className='bg-cover grid gap-2 py-3 px-3 mt-20 justify-between bg-[url("./assets/bg.jpeg")] h-full md:grid-cols-2 md:px-20' >
 <div className='border w-full p-5 flex justify-around border-slate-900 rounded-[10px]'>
        <img src={myProfile} className='h-full border border-[rgb(0,255,0)] rounded-[50%]' alt="" />
      </div>

      <div className='bg-[#fff] rounded-[10px] shadow-[0_35px_60px_-15px_rgba(0,0,0,255,1)] border border-slate-900' >
        <p className='p-9'>
                  Hello world?<br />
              I'm Gideon <strong>Gideon Kipkorir Yegon,</strong> <br />
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
  )
}

export default Home