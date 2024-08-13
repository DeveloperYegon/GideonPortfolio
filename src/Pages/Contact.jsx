import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import axios from 'axios';



function Contact() {

  const [values, setValues] = React.useState({
    name :'',
    email : '',
     message :''
  });
  
     

  const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: [e.target.value] });
    }

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3002/requests', values)
      .then((response) =>console.log(response))
      .catch((err) => console.log(err));
      form.reset();
    }


    

  return (
    <div className='mt-20 h-full pt-5 bg-[#fff] '>

      <div className=' md:grid gap-5
         grid-cols-2 md:m-10 m-5'>
      <div className='hidden md:flex flex-col  bg-[#182B5C] text-[#fff] items-center rounded-[10px] h-full p-20'>
        
        <h2 className='flex'>Share your feedback</h2>
        <hr className='m-4 h-1'/>
        <p>
          "Feedback is the breakfast of champions, the compass that guides us to improvement and the mirror that reflects our potential for greatness.
       
        </p>
        <p> <strong><i>--ChatGPT--</i></strong></p>
  
      </div>
      <div className='border p-5 bg-[#182B5C] text-[#fff] rounded-[10px] h-full'>

      <h3 className='text-center mt-10 text-[#ED7D3B] text-xl'>Get in Touch</h3>
      <hr className='m-4'/>

      {/* //form */}
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="contactname">Name:</label>
                <input className="border border-slate-700 p-2  bg-gray-200 text-black rounded-full" type="text" autoFocus placeholder='Enter Your Name' name="name" onChange={handleChange} id="contactname"/>


            <label htmlFor="email">Email:</label>
                <input className="border border-slate-700  bg-gray-200 p-2 text-black rounded-full" onChange={handleChange} type="email" placeholder='Enter Your Email' name="email" id="email"/>


              <label htmlFor="message">Message:</label>
                <textarea className="border border-slate-700 bg-gray-200 text-black p-2 rounded-[10px]" onChange={handleChange} name="message" placeholder='Type Your Message Here.'  id="message">

                </textarea>
            <button className='border border-slate-950 rounded-xl p-2 mt-4 bg-[#ED7D3B] uppercase text-xl m-auto' type='submit'>Submit</button>
        </form>
        <p className='bg-black'></p>
      </div>
    </div>

    <div className='md:grid gap-5 grid-cols-2 md:m-10 m-5'>
        <div className='border bg-[#182b5c] text-[#fff] rounded-xl'>
          <Link to='tel:+254-712-269-086'><p className=' flex items-center gap-2 p-2 border m-5'><IoCall /> &nbsp; 0712269086</p></Link>
          <Link to='mailto:gideonyegon404@gmail.com'><p className='text-center flex items-center gap-2 p-2 border m-5 '><MdEmail />gideonyegon404@gmail.com</p></Link>
        </div>

      
      <div className=' border bg-[#182b5c] rounded-xl'>
        <h3 className='text-center m-2 text-xl text-[#ED7D3B]'>Join our Community</h3>
        
        <hr className=' w-[80%] m-auto' />
        <ul className='grid grid-cols-2 gap-5 p-10 md:flex justify-around'>
          <li ><Link to="https://www.linkedin.com/in/developer-yegon/">< ImLinkedin className='text-[#ED7D3B]'/></Link> </li>
          <li><Link to=""><FaSquareInstagram className='text-[#ED7D3B]'/></Link></li>

          <li className='text-center'><Link to=""><FaTwitterSquare className=' text-[#ED7D3B]' /></Link></li>
          <li><Link to=""><FaFacebookSquare className=' text-[#ED7D3B] '/></Link></li>
        </ul>
      </div>
    </div>



    </div>
  )
}

export default Contact


