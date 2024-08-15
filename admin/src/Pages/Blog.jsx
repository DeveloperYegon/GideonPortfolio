import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Blog() {
  const [blogs, setBlogs] = React.useState({
    title: '',
    description: '',
    image: ''
  });

  const navigate = useNavigate(); // Hook to handle navigation
 
const handleChange = (e) => {
  setBlogs({ ...blogs, [e.target.name]: e.target.value });


}
const handleSubmit = (e) => {
  e.preventDefault();

  axios.post('http://localhost:3002/blogs', blogs)
  .then((response) =>{
    console.log(response);
    setBlogs({ title:'',description: '', image: '' }); // Reset form fields
    navigate('/notifications'); // Redirect to a different page, e.g., '/dashboard'
    if(response.status === 200){
      alert('Blog added successfully')
       }
  })

  .catch((err) => console.log(err));

};

  return (
    <main className='md:m-5 m-2 bg-[#182B5C] py-2 md:p-5'>
        
        <section className='border md:m-5 m-2 rounded-xl h-full bg-white border-slate-950 p-4'>
            < p className='text-center'>Add Blog</p>
            <hr className='h-1 bg-black w-80% m-auto'/>

            {/* Blog registration from */}
            <form onSubmit={handleSubmit} className='border border-slate-950 m-4 p-4 rounded flex flex-col' >
              <label className='pt-4' htmlFor="title">Title:</label>
              <input onChange={handleChange} className='p-2 border border-slate-600 rounded-xl' value={blogs.title} type="text" id="title" name="title" required />

              <label className='pt-4' htmlFor="description">Description:</label>
              <textarea onChange={handleChange} className='p-2 border border-slate-600 rounded-xl ' id="description" name="description" value={blogs.description} required></textarea>

              <label className='pt-4' htmlFor="image">Featured Image:</label>
              <input onChange={handleChange} className='p-2 border border-slate-600 rounded-xl' value={blogs.image} type="file" id="image" name="image" required />
              <input   className='bg-[#ED7D3B] p-3 rounded-xl m-3' type="submit" value="Submit" />
            </form>


        
        </section>
        <section className='border md:m-5 m-2 bg-white rounded-xl border-slate-950 h-[50vh] p-4'>
            <p className='text-center'>Posted Blogs</p>
            <hr className='h-1 bg-black w-80% m-auto'/>
           
        </section>

    </main>
  )
}

export default Blog