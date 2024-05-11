import React from 'react'
import Image from 'next/image'

const Expertise = () => {
  return (
    <div className='bg-[#D9E2FF] w-full h-auto p-7 lg:px-20 lg:py-10' id="expertise">
      <div className='flex justify-between mb-5 lg:items-center gap-10 flex-col lg:flex-row'>
        <h1 className='text-3xl text-[#000000] lg:mb-10 lg:w-[30%]'>Expertise</h1>
        <div className="lg:w-[70%] gap-4">
          <div className="flex justify-between w-full">
            <h4 className='lg:w-[20%]'></h4>
            <p className="lg:w-[80%]">Our clients range from startups to medium-sized businesses, demonstrating the versatility of our solutions. We adapt to organizations of varying sizes, providing tailored strategies for success. No matter your company{"'"}s stage of growth, we have the expertise to help you reach your goals.</p>
          </div>
        </div>
      </div>
      <div className='h-[2px] bg-white w-full mb-10'></div>
      <div className='flex justify-between lg:justify-around mb-7 gap-7 flex-wrap'>
        <Image
          src="/blitz.svg"
          alt=''
          width={50}
          height={50}
        />
        <Image
          src="/storefront.svg"
          alt=''
          width={200}
          height={50}
        />
        <Image
          src="/cashbridge.svg"
          alt=''
          width={50}
          height={100}
        />
        <Image
          src="/waitr.svg"
          alt=''
          width={100}
          height={50}
        />
        <Image
          src="/qpay.svg"
          alt=''
          width={50}
          height={50}
        />
        <Image
          src="/spaces.svg"
          alt=''
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default Expertise