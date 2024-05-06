import React from 'react'

const Milestones = () => {
  return (
    <div className='bg-white w-full h-auto p-7 lg:px-20 lg:py-10 flex flex-col gap-6'>
      <h1  className='text-3xl text-[#000000] mb-3 lg:w-[30%]'>Milestones</h1>
      <div className='h-[2px] bg-[#00000040] w-full mb-3'></div>
      <p className='lg:w-1/2'>Explore int+ journey, defined by transformative milestones, showcasing our unwavering commitment to excellence and innovation.</p>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-3 items-center p-2  w-[200px] lg:justify-center text-center'>
          <p className='text-base'>Projects</p>
          <p className='text-2xl font-semibold'>+23</p>
          <p className='text-sm'>Number of Projects Completed</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-2  w-[200px] lg:justify-center text-center'>
          <p className='text-base'>Customer</p>
          <p className='text-2xl font-semibold'>+25</p>
          <p className='text-sm'>Happy Customer</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-2  w-[200px] lg:justify-center text-center'>
          <p className='text-base'>Satisfaction</p>
          <p className='text-2xl font-semibold'>+97%</p>
          <p className='text-sm'>Increased Customer satisfaction</p>
        </div>
        <div className='flex flex-col gap-3 items-center p-2  w-[200px] lg:justify-center text-center'>
          <p className='text-base'>Report</p>
          <p className='text-2xl font-semibold'>+3</p>
          <p className='text-sm'>Year of Experiences</p>
        </div>
      </div>
    </div>
  )
}

export default Milestones