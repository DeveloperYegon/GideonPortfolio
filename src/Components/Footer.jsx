import React from 'react'

function Footer() {
  const year= new Date().getFullYear();
  return (
    <div className='bg-[#182B5C] h-20 text-[#fff]'>
      <hr className='mb-3 bg-[#fff] pt-3' />
      <p className='text-center'>&copy;{year}, DeveloperYegon. All Rights Are Reserved. </p>

    </div>
  )
}

export default Footer