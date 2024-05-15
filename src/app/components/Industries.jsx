'use client'
import React from 'react';
import Slider from './Slider'





const Industries = () => {


  return (
    <div className='bg-[#D9E2FF] w-full min-h-[504px] lg:min-h-[512px] px-7 py-12 lg:p-20  flex flex-col lg:flex-row justify-between gap-20 relative'>
      <video autoPlay loop muted className='absolute inset-0 w-full h-full object-cover mix-blend-overlay'>
        <source src="/industries-video.mp4" type="video/mp4" />
        Your browser does not support the video tag...
      </video>
      <div className='flex flex-col gap-4 lg:w-[40%] z-10'>
        <h1 className='text-4xl text-[#000000] mb-5 lg:mb-10 leading-[28px]'>Industries</h1>
        <p className='text-[#000000]'>As a versatile service provider, we cater to diverse industries, offering tailored solutions to meet specific needs. We ensure success across varied business landscapes with comprehensive and adaptable solutions.</p>
        <a href='#' className="bg-[#2D7EFF] w-fit py-3 px-6 rounded-full text-white">All Cases</a>
      </div>
      <div className="w-full lg:w-[45%]  z-10 bg-green-400">
        <Slider />
      </div>
    </div>
  )
}

export default Industries
