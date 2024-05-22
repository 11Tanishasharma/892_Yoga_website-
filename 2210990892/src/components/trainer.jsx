import React from 'react'
import Bg from "../assets/images/bg.png"
import Shape from "../assets/images/shapeone.png"
import Girl from "../assets/images/girlfour.png"

function Trainer() {
  return (
    <div 
    className="h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${Bg})` }}
    >
        <div className=' flex flex-col gap-4 items-center p-18'>
        <div className='relative w-80 h-80 mx-auto mt-20 ' >
            <img src={Shape} alt="" className=' absolute inset-0 w-full h-full ' />
            <img src={Girl} alt="" className='absolute inset-0 w-4/5 h-4/5 m-auto border-4 border-solid rounded-full border-[#6c9793] '/>
        </div>
        <div className='text-[#509995] w-3/4 '>
            <h2 className='text-5xl text-center font-[Montserrat] max-sm:text-2xl max-sm:w-[500px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </h2> <br/> <br/>
            <h1 className='text-5xl font-bold text-center '>TRAINER DEVANDRA</h1>
        </div></div>
    </div>
  )
}

export default Trainer