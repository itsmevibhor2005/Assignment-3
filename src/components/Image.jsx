import React from 'react'

const Image = (props) => {
  return (
    <div className='w-[200px] h-[200px] bg-white rounded-full'>

    <img src={props.src.url} alt="#No image found" className='w-[200px] h-[200px] rounded-full'/>
    </div>
  )
}

export default Image
