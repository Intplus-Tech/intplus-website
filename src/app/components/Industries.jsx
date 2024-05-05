import React from 'react'
import Image from 'next/image'

const Industries = () => {
  return (
    <div className='bg-[#D9E2FF] w-full h-auto px-20 py-10 flex  justify-between'>
      <div className='flex flex-col gap-4 w-[40%]'>
        <h1 className='text-3xl text-[#000000] mb-10'>Industries</h1>
        <p className='text-[#000000]'>As a versatile service provider, we cater to diverse industries, offering tailored solutions to meet specific needs. We ensure success across varied business landscapes with comprehensive and adaptable solutions.</p>
        <a href='#' className="bg-[#2D7EFF] w-fit py-3 px-6 rounded-full text-white">All Cases</a>
      </div>
      <div className='relative h-auto p-2 w-[40%] flex flex-col items-center'>
        <div className="bg-[#F8FBFF] shadow-md w-[100%] p-8 rounded-lg flex flex-col justify-between gap-1 absolute bottom-0 z-50 h-[200px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Technology</h1>
            <p className="text-xs">We propel tech advancement through bespoke solutions, ensuring seamless integration and innovation for businesses. Our expertise drives digital transformation, providing customized strategies to navigate the evolving landscape of technology. We are committed to delivering excellence, empowering our clients to thrive in the ever-changing world of technology.</p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#E4EEFF] shadow-md w-[94%] p-8 rounded-lg flex flex-col justify-between gap-1 absolute bottom-2 z-40 h-[200px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Ecommerce</h1>
            <p className="text-xs">At PK Innovatives, we propel tech advancement through bespoke solutions, ensuring seamless integration and innovation for businesses. Our expertise drives digital transformation, providing customized strategies to navigate the evolving landscape of technology. We are committed to delivering excellence, empowering our clients to thrive in the ever-changing world of technology.</p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#B8D2FD] shadow-md w-[90%] p-8 rounded-lg flex flex-col justify-between gap-1 absolute bottom-4 z-30 h-[200px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Hospital</h1>
            <p className="text-xs">At PK Innovatives, we propel tech advancement through bespoke solutions, ensuring seamless integration and innovation for businesses. Our expertise drives digital transformation, providing customized strategies to navigate the evolving landscape of technology. We are committed to delivering excellence, empowering our clients to thrive in the ever-changing world of technology.</p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#7FB0FF] shadow-md w-[86%] p-8 rounded-lg flex flex-col justify-between gap-1 absolute bottom-6 z-20 h-[200px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Manufacturing</h1>
            <p className="text-xs">At PK Innovatives, we propel tech advancement through bespoke solutions, ensuring seamless integration and innovation for businesses. Our expertise drives digital transformation, providing customized strategies to navigate the evolving landscape of technology. We are committed to delivering excellence, empowering our clients to thrive in the ever-changing world of technology.</p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#2D7EFF] shadow-md w-[82%] p-8 rounded-lg flex flex-col justify-between gap-1 absolute bottom-8 z-10 h-[200px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Education</h1>
            <p className="text-xs">At PK Innovatives, we propel tech advancement through bespoke solutions, ensuring seamless integration and innovation for businesses. Our expertise drives digital transformation, providing customized strategies to navigate the evolving landscape of technology. We are committed to delivering excellence, empowering our clients to thrive in the ever-changing world of technology.</p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#0061FC] shadow-md w-[78%] p-8 rounded-lg flex flex-col justify-between gap-1 absolute bottom-10 z-0 h-[200px]">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Logistic & Shipping</h1>
            <p className="text-xs">At PK Innovatives, we propel tech advancement through bespoke solutions, ensuring seamless integration and innovation for businesses. Our expertise drives digital transformation, providing customized strategies to navigate the evolving landscape of technology. We are committed to delivering excellence, empowering our clients to thrive in the ever-changing world of technology.</p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
      </div>
    </div>
  )
}

export default Industries