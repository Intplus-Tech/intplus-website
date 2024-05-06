import React from 'react'
import Image from 'next/image'

const Solutions = () => {
  return (
    <div className='bg-solutionsBackground w-full h-auto bg-cover text-white p-7 lg:px-20 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-start gap-20 lg:gap-[200px]'>
      <div className="lg:w-1/3 tracking-wider text-xl">Build your custom solutions with us. Dedicated to your goals and success.</div>
      <a href='#' className='flex items-center justify-center px-4 py-4 rounded-full bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md text-white w-[50px] h-[50px]'>
          <Image
            src="/arrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </a>
    </div>
  )
}

export default Solutions