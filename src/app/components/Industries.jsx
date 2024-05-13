'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import cards from '../deck-data'



const Industries = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };
  
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

      {/* Deck */}
      <div className='relative h-auto p-2 lg:w-[45%] transition-all duration-300 ease-in-out leading-[25px]'>
<div className={`${cards[currentIndex].background} shadow-md  p-8 rounded-2xl flex flex-col justify-between gap-2 bottom-0 z-50 `}>
          <div className='flex gap-4 items-base mb-5'>
            <Image
              className="flex self-end"
              src={cards[currentIndex].icon}
              alt=''
              width={35}
              height={35}
            />
            <h1 className="font-semibold text-2xl">{cards[currentIndex].industry}</h1>
          </div>
          <p className="text-sm mb-7 leading-[20px]">{cards[currentIndex].text}</p>

          <div className='flex justify-between mt-2'>
            <div onClick={goToPrevious}>
              <Image
                className={`rotate-180 cursor-pointer`}
                src="/blackarrow.svg"
                alt=''
                width={25}
                height={15}
              />
            </div>
            <div onClick={goToNext}>
              <Image
                className={`cursor-pointer`}
                src="/blackarrow.svg"
                alt=''
                width={25}
                height={15}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Industries
