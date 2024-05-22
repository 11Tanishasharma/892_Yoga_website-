import React from 'react'
import Third from "../assets/images/third.png";
import Bg from "../assets/images/third.png"


function Stats() {
    const data=[
    {num:123, para:'Lorem ipsum dolor sit.Lorem, ipsum dolor'},
    {num:123, para:'Lorem ipsum dolor sit.Lorem, ipsum dolor'},
    {num:123, para:'Lorem ipsum dolor sit.Lorem, ipsum dolor'},

    ]
  return (
   <div 
    className="h-screen bg-cover bg-center p-8 max-sm:h-[1400px]"
    style={{ backgroundImage: `url(${Bg})` }}
    >
    <div className='text-center mb-8 text-[#509995] p-5 flex flex-col items-center'>
        <h1 className='text-6xl font-bold '>OUR STATS</h1>
        <p className='text-base mt-6 w-[1000px] font-mono max-sm:w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur. Vivamus lacinia odio vitae vestibulum Lorem ipsum dolor sit.vestibulum. </p>
    </div>
    <div className="flex space-x-40 justify-center items-center p-10 max-sm:flex-col max-sm:space-x-0 max-sm:gap-10 ">
    {data.map((elem, index) => (
        <div key={index} className='rounded-full h-80 w-80 border-[#509995] border-[4px] flex flex-col items-center justify-evenly p-16 text-[#509995]'>
            <h1 className='  text-6xl font-bold'>{elem.num}</h1>
            <p className=' w-48 text-center'>{elem.para}</p>
        </div>))}
</div></div>
  )
}

export default Stats