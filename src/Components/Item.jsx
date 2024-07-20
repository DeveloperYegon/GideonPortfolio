import React from 'react'

function Item(props) {
  return (
    <div className='bg-[#182B5C] text-white border p-3 hover:scale-95'>
        <img src={props.image} alt={props.name} />
        <h1 className='text-center'>{props.name}</h1>
        <p className='text-center'>{props.description}</p>

    </div>
  )
}

export default Item