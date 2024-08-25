import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
  //console.log('props.id:', props.id); // Debug log

  return (
    <div className='bg-[#182B5C] text-white border p-3 hover:scale-95'>
       <Link to={`/blog/${props.id}`}>
      <img src={props.image} alt={props.name} />
    </Link>
        <h1 className='text-center'>{props.name}</h1>
        <p className='text-center'>{props.description}</p>

    </div>
  )
}

export default Item