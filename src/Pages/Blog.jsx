import React from 'react'
import { useContext } from 'react'
import { BlogContext } from '../Components/Context'
import BlogDisplay from '../Components/BlogDisplay'
import { useParams } from 'react-router-dom'


function Blog() {
    const { blogs } = useContext(BlogContext);
    const { blogId }= useParams();
    const blog = blogs.find((item) => item.id === Number((blogId)));

   console.log(blogs);
   console.log('Blog ID:', blogId);

   console.log(blog);
   
    
  return (
    <div>
        <   BlogDisplay blog={blog} />
    </div>
  )
}

export default Blog