import React from 'react'

function BlogDisplay(props) {
    const {blog} = props;
    //console.log(blog);
    
  return (
    <div>
        <div>
            <img src={blog.image} alt="" />
        </div>
        
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
        </div>


    </div>
  )
}

export default BlogDisplay