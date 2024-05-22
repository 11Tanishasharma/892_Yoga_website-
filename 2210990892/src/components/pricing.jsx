import React from 'react'
import Vector from '../assets/images/Vector Smart Object.png'

const data=[
    {heading:"NEWBIE Class"},
    {heading:"Advance Class"},
    {heading:"Expert Class"},

];
function Pricing() { 
  return (
    <div className='h-screen bg-[#509995] flex flex-col gap-5 items-center max-sm:h-[1400px] max-sm:gap-8' id='pricing'>
        <div className='text-white text-center pt-16 w-4/5 flex flex-col items-center'>
            <h1 className='text-6xl font-bold'>Pricing</h1>
            <p className='text-2xl pt-6 pb-3 w-[800px] font-mono max-sm:w-[500px] max-sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
        </div>
        <div className="w-full h-3/5 flex  justify-evenly items-center px-10 max-sm:flex-col max-sm:gap-10 max-sm:h-[1100px]">
        {data.map((item, index) => (
          <div
            key={index}
            className=" h-full border-3 border-solid text-[#509995] rounded bg-[#f4f9f1] flex flex-col justify-evenly items-center w-80 max-sm:w-72 max-sm:h-[800px]"
          >
            <h1 className='text-4xl font-bold'>{item.heading.toUpperCase()}</h1>
            <h2 className='text-4xl font-bold'>$00.00</h2>
            <img src={Vector} alt="" className='text-[#509995] max-sm:w-24'/>
            <p className='w-80 text-center text-lg font-mono px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">
            <button className="text-white bg-[#509995] px-12 py-2 rounded font-bold text-lg max-sm:px-8 hover:scale-105 ease-in-out duration-300">REGISTER NOW</button></a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing