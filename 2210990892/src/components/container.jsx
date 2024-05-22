import React from 'react'
import Shape from "../assets/images/secondshape.png"
import One from "../assets/images/girlone.png"
import Two from "../assets/images/girltwo.png"
import Three from "../assets/images/girlthree.png"

function Container() {
    const data=[
        {image:One, heading:"Newbie Class", para:'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.'},
        {image:Two, heading:"Advance Class", para:'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.'},
        {image:Three, heading:"Expert Class", para:'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.'}
    ]
  return (
    <div className='bg-[#509995] p-24 '>
        <div className='flex space-x-9 gap-9 max-sm:flex-col items-center'>
       {data.map((elem, index) => (
        <>
        <div key={index}>
         <div className='relative inline-block'>
         <img src={Shape} alt="" />
         <img src={elem.image} alt="" className='border-2 border-solid rounded-full h-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />

     </div>
     <div className='flex flex-col items-center space-y-7 mt-5 text-white'>
         <h1 className='text-5xl font-bold' >{elem.heading}</h1> 
         <p className='text-xl text-center'>Lorem ipsum dolor sit amet. <br />
         Lorem ipsum dolor sit.</p>
     </div></div></>
       ))}
    </div></div>
  )
}

export default Container