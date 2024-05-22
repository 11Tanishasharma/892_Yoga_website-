import React from 'react'
import Yoga from '../assets/images/yogatwo.png'
function Instructor() {
  return (
    <div className='flex ' id='instructor'>
        <div  className='text-white bg-[#509995] w-6/12 flex flex-col justify-center items-center  '>
            <div className='flex flex-col justify-evenly w-4/5 h-1/2 max-sm:gap-4'>
            <h1 className='text-7xl font-bold max-sm:text-4xl '>BEST <br/>INSTRUCTOR</h1>
            <p className='text-xl w-8/12 max-sm:text-base max-sm:w-11/12'>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur amet ipsa porro,
               aliquid deleniti doloremque! Lorem, ipsum.
              Lorem ipsum dolor sit.</p>
              <a href="#">
              <button className='text-[#509995] bg-white font-bold px-9 py-3 w-56 text-2xl text-center rounded-md font-mono max-sm:text-base max-sm:w-40 max-sm:py-1 hover:scale-105 ease-in-out duration-300 '>Read More</button>
              </a></div>
              
        </div>
        <div className='w-6/12 full'>
            <img src={Yoga} alt="" className='w-full'/>
        </div>
    </div>
  )
}

export default Instructor