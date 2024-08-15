import React from 'react'
import blogs from '../assets/blogs'
import Item from '../Components/Item'
// import Blogs from '../Components/Blogs'

function BlogsPage() {
  return (
    <div className='bg-[#fff] text-[#182B5C] h-full'>
      <h1 className=' p-5 text-xl text-center'>Blogs</h1>
      <hr className='m-auto w-[80%] bg-black h-1' />
      <div className='h-full md:m-10 m-5 grid md:grid-cols-4 gap-4'>
        {blogs.map((blog) => {
          return (<Item key={blog.id} image={blog.image} name={blog.name} description={blog.description} />
          )

        })}

      </div>
      

    </div>
  )
}

export default BlogsPage