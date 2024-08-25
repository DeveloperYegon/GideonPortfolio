import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Contact() {

  const {formState}= form;
  const {errors}=formState;

  const [values, setValues] = React.useState({
    name :'',
    email : '',
     message :'',
     country:'',
  });

  const navigate = useNavigate(); // Hook to handle navigation

  const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value});
    }

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3002/requests', values)
      .then((response) =>{
        console.log(response);
        setTimeout(() => {
          navigate('/'); // Redirect to a different page, e.g., '/dashboard'
          }
        , 2000);
        setValues({ name:'', email: '', message: '', country:'' }); // Reset form fields
        
        if(response.status === 200){
          //alert('Feedback sent successfully')
          document.getElementById('authmessage').textContent = 'Feedback sent successfully';
      }
  })
      .catch((err) => console.log(err));
    }

    // Fetch countries from the API
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((country) => {
        let option = document.createElement('option');
        option.value = country.name.common;
        option.textContent = country.name.common;
        document.getElementById('country').appendChild(option);
      });
    })

    

  return (
    <div className=' h-full pt-5 bg-[#fff] '>

      <div className=' md:grid gap-5
         grid-cols-2 md:m-10 m-5'>
      <div className='hidden md:flex flex-col  bg-[#182B5C] text-[#fff] items-center rounded-[10px] h-full md:p-20 '>
        
        <h2 className='flex'>Share your feedback</h2>
        <hr className='m-4 h-1'/>
        <p>
          "Feedback is the breakfast of champions, the compass that guides us to improvement and the mirror that reflects our potential for greatness.
       
        </p>
        <p> <strong><i>--ChatGPT--</i></strong></p>
  
      </div>
      <div className='border p-5 bg-[#182B5C] text-[#fff] rounded-[10px] h-full'>
        <p className='text-center text-green-500 p-2' id='authmessage'></p>

      <h3 className='text-center mt-10 text-[#ED7D3B] text-xl'>Get in Touch</h3>
      <hr className='m-4'/>

      {/* //form */}
        <form className='flex flex-col' noValidate onSubmit={handleSubmit}>
          <div>
            <label className='pt-2' htmlFor="contactname">Name:</label>
                <input className="border border-slate-700 p-2  bg-gray-200 text-black rounded-xl" type="text" autoFocus placeholder='Enter Your Name' name="name" onChange={handleChange} {...values("name",{required:{
                  value:true,
                  message:"Name required",}
                  
                }
              )} 
                
                id="contactname"/>
                <p className='text-red-500 text-left text -[12px]'> {errors.name?.message}</p>

            </div>

            <label className='pt-2' htmlFor="email">Email:</label>
                <input className="border border-slate-700  bg-gray-200 p-2 text-black rounded-xl" onChange={handleChange} type="email" placeholder='Enter Your Email' name="email" id="email"/>
                

              <label className='pt-2' htmlFor="country">Country:</label>
              <select name="country" onChange={handleChange} className='border border-slate-700  bg-gray-200 p-2 text-black rounded-xl' aria-label='Default select example' id="country">
               <option selected>Select Country</option>
              </select>


              <label className='pt-2' htmlFor="message">Message:</label>
                <textarea className="border border-slate-700 bg-gray-200 text-black p-2 rounded-[10px]" onChange={handleChange} name="message" placeholder='Type Your Message Here.'  id="message">

                </textarea>
            <button className='border border-slate-950 rounded-xl p-2 mt-4 bg-[#ED7D3B] uppercase text-xl m-auto' type='submit'>Submit</button>
        </form>
      </div>
    </div>

    <div className='md:grid gap-5  grid-cols-2 md:m-10 m-5'>
    
       
    <div className=' bg-[#182b5c] text-[#fff] p-4  rounded-xl'>
        <h3 className='text-center m-2 text-[#ED7D3B] text-xl'>Hotline Inquiery</h3>
        <hr className='m-auto w-[80%]'/>
          <Link to='tel:+254-712-269-086'><p className=' flex items-center gap-2 p-2 border m-5'><IoCall /> &nbsp; 0712269086</p></Link>  
          <Link to='mailto:gideonyegon404@gmail.com'><p className='text-center flex items-center gap-2 p-2 border m-5 '><MdEmail />gideonyegon404@gmail.com</p></Link>
        </div>
      
      <div className=' bg-[#182b5c] pt-4 my-4 rounded-xl h-full'>
        <h3 className='text-center m-2 text-xl text-[#ED7D3B]'>Join our Community</h3>
        <hr className=' w-[80%] m-auto' />

        <ul className=' p-3  flex flex-col items-center md:flex-row justify-around'>
          <li className='p-3 border border-slate-100 m-3 text-2xl'><Link to="https://www.linkedin.com/in/developer-yegon/">< ImLinkedin className='text-[#ED7D3B]'/></Link> </li>
          <li className='p-3 border border-slate-100  m-3 text-2xl'><Link to=""><FaSquareInstagram className='text-[#ED7D3B]'/></Link></li>

          <li className='p-3 border border-slate-100 m-3 text-2xl'><Link to=""><FaTwitterSquare className=' text-[#ED7D3B]' /></Link></li>
          <li className='p-3 border border-slate-100 m-3 text-2xl'><Link to=""><FaFacebookSquare className=' text-[#ED7D3B] '/></Link></li>
        </ul>
      </div>
    </div>



    </div>
  )
}

export default Contact


