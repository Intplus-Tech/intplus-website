'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import industriesData from '../deck-data'


const Industries = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === industriesData.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? industriesData.length - 1 : prevIndex - 1));
  };

  return (
    <div className='bg-[#D9E2FF] w-full h-auto p-7 lg:px-20 lg:py-10 flex flex-col lg:flex-row justify-between gap-20'>
      <div className='flex flex-col gap-4 lg:w-[40%]'>
        <h1 className='text-3xl text-[#000000] mb-5 lg:mb-10'>Industries</h1>
        <p className='text-[#000000]'>As a versatile service provider, we cater to diverse industries, offering tailored solutions to meet specific needs. We ensure success across varied business landscapes with comprehensive and adaptable solutions.</p>
        <a href='#' className="bg-[#2D7EFF] w-fit py-3 px-6 rounded-full text-white">All Cases</a>
      </div>
      <div className='relative h-auto p-2 lg:w-[40%] flex flex-col items-center'>
        <div className={`${industriesData[currentIndex].background} shadow-md w-[100%] p-8 rounded-lg flex flex-col justify-between gap-2 lg:absolute bottom-0 z-50 h-[240px]`}>
          <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              <Image
                className="flex self-end"
                src={industriesData[currentIndex].icon}
                alt=''
                width={25}
                height={15}
              />
              <h1 className="font-semibold">{industriesData[currentIndex].industry}</h1>
            </div>
            <p className="text-xs">{industriesData[currentIndex].text}</p>
          </div>
          <div className='flex justify-between mt-3'>
            <div>
              <Image
                className={`${currentIndex === 0 ? 'hidden' : 'flex'} rotate-180 cursor-pointer`}
                // prev button
                src="/blackarrow.svg"
                alt=''
                width={25}
                height={15}
                onClick={goToPrevious}
              />
            </div>
            <div>
              <Image
                className={`${currentIndex === 5 ? 'hidden' : 'flex'} cursor-pointer`}
                // next button
                src="/blackarrow.svg"
                alt=''
                width={25}
                height={15}
                onClick={goToNext}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#E4EEFF] shadow-md w-[94%] p-8 rounded-lg flex flex-col justify-between gap-2 absolute bottom-2 z-40 h-[240px]">
          <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              <Image
                className="flex self-end"
                src="/ico ecomm.svg"
                alt=''
                width={25}
                height={15}
              />
              <h1 className="font-semibold"></h1>
            </div>
            <p className="text-xs"></p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#B8D2FD] shadow-md w-[90%] p-8 rounded-lg flex flex-col justify-between gap-2 absolute bottom-4 z-30 h-[240px]">
          <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              <Image
                className="flex self-end"
                src="/ico hosp.svg"
                alt=''
                width={25}
                height={15}
              />
              <h1 className="font-semibold"></h1>
            </div>
            <p className="text-xs"></p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#7FB0FF] shadow-md w-[86%] p-8 rounded-lg flex flex-col justify-between gap-2 absolute bottom-6 z-20 h-[240px]">
          <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              <Image
                className="flex self-end"
                src="/ico manu.svg"
                alt=''
                width={25}
                height={15}
              />
              <h1 className="font-semibold"></h1>
            </div>
            <p className="text-xs"></p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#2D7EFF] shadow-md w-[82%] p-8 rounded-lg flex flex-col justify-between gap-2 absolute bottom-8 z-10 h-[240px]">
          <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              <Image
                className="flex self-end"
                src="/ico edu.svg"
                alt=''
                width={25}
                height={15}
              />
              <h1 className="font-semibold"></h1>
            </div>
            <p className="text-xs"></p>
          </div>
          <Image
            className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#0061FC] shadow-md w-[78%] p-8 rounded-lg flex flex-col justify-between gap-2 absolute bottom-10 z-0 h-[240px]">
          <div className="flex flex-col gap-2">
            <div className='flex gap-2'>
              <Image
                className="flex self-end"
                src="/ico ship.svg"
                alt=''
                width={25}
                height={15}
              />
              <h1 className="font-semibold"></h1>
            </div>
            <p className="text-xs"></p>
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