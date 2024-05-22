import React from 'react'
import Yoga from "../assets/images/yogathree.png";
import Pattern from "../assets/images/pattern.png"
function Experience() {
  return (
    <div className='flex h-screen bg-[#F1F9F4] relative max-sm:flex-col max-sm:items-center max-sm:h-[1200px]'>
        <div className='w-6/12 pt-16 pl-36 pr-0 max-sm:w-full'>
            <img src={Yoga} alt="" className='w-9/12'/>
        </div>
        <div className=' w-6/12 text-[#509995] flex flex-col justify-center items-center pr-12'>
            <div className='flex flex-col justify-between w-4/5 h-1/2 mr-20 max-sm:gap-10'>
            <h1 className='text-7xl font-bold'>New <br/>Experience</h1>
            <p className='text-3xl text-balance w-11/12  max-sm:w-96'>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
            <a href="#">
            <button className='bg-[#509995] text-white font-bold px-9 py-3 w-56 text-xl text-center rounded-md font-mono hover:scale-105 ease-in-out duration-300'>READ MORE</button>
            </a>
        </div></div>
        <img src={Pattern} alt="" className='absolute right-[-480px] top-[-100px] h-[900px] max-sm:hidden'/>
    </div>
  )
}

export default Experience