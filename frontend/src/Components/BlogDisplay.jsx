import React from 'react'

function BlogDisplay(props) {
    const {blog} = props;
    //console.log(blog);
    
    //console.log('props.id:', props.id);// Debug log
  return (

    <div className='items-center flex flex-col p-5 border border-slate-950 m-5 h-full text-center'>
        <div className=''>
            <img className="border border-slate-950 h-[300px]" src={blog.image} alt="" />
        </div>
        
        <div>
            <h2 className='p-5 text-xl'>Blog title: {blog.title}</h2>
            <p className='text-left'>{blog.description}</p>

        </div>


    </div>
  )
}

export default BlogDisplay