import React from 'react'

function Update() {
  return (
    <div className='h-[685px] bg-[#509995] flex flex-col items-center justify-center' id='update'>
        <div className=' w-8/12 flex flex-col'>
        <div className='text-[#f4f9f1]  text-center'>
        <h1 className='text-7xl font-[Baloo Bhai] font-bold'>DONT MISS OUR UPDATE</h1>
        <p className='font-[Montserrat] text-3xl w-full md:w-8/12 mx-auto max-sm:text-xl mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
        </div>
        <div className='relative w-9/12 ml-28 mt-6 max-sm:w-[430px] max-sm:ml-5'>
            <input type="text" placeholder='  YOUR EMAIL' className='p-2 border rounded-full w-full'/>
            <a href="#">
            <button className='absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full bg-[#bce8bca7] px-10 text-[#509995] font-bold max-sm:px-8 hover:bg-[#bce8bc] hover:text-[#2b2929]  duration-300'>subscribe</button>
            </a>
        </div>
        </div>
    </div>
   
  )
//   #6c9894
// #37a59a
}

export default Update