import React from 'react'
import Image from 'next/image'

const Expertise = () => {
  return (
    <div className='bg-[#D9E2FF] w-full h-auto px-20 py-10'>
      <div className='flex justify-between mb-2 items-center gap-10'>
        <h1 className='text-3xl text-[#000000] mb-10 w-[30%]'>Expertise</h1>
        <div className="w-[70%] gap-4">
          <div className="flex justify-between w-full">
          <h4 className='w-[20%]'></h4>
            <p className="w-[80%]">Our clients range from startups to medium-sized businesses, demonstrating the versatility of our solutions. We adapt to organizations of varying sizes, providing tailored strategies for success. No matter your company's stage of growth, we have the expertise to help you reach your goals.</p>
          </div>
        </div>
      </div>
      <div className='h-[2px] bg-white w-full mb-10'></div>
      <div className='flex justify-around'>
      <Image
          className="flex self-end"
            src="/blitz.svg"
            alt=''
            width={50}
            height={50}
          />
                    <Image
          className="flex self-end"
            src="/storefront.svg"
            alt=''
            width={200}
            height={50}
          />
                    <Image
          className="flex self-end"
            src="/cashbridge.svg"
            alt=''
            width={50}
            height={100}
          />
                    <Image
          className="flex self-end"
            src="/waitr.svg"
            alt=''
            width={100}
            height={50}
          />
                    <Image
          className="flex self-end"
            src="/qpay.svg"
            alt=''
            width={50}
            height={50}
          />
                    <Image
          className="flex self-end"
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