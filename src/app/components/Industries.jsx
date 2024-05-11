'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import cards from '../deck-data'


const Industries = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className='bg-[#D9E2FF] w-full h-auto p-7 lg:px-20 lg:py-10 flex flex-col lg:flex-row justify-between gap-20 relative'>
      <video autoPlay loop muted className='absolute inset-0 w-full h-full object-cover mix-blend-overlay'>
        <source src="/industries-video.mp4" type="video/mp4" />
        Your browser does not support the video tag...
      </video>
      <div className='flex flex-col gap-4 lg:w-[40%] z-10'>
        <h1 className='text-3xl text-[#000000] mb-5 lg:mb-10'>Industries</h1>
        <p className='text-[#000000]'>As a versatile service provider, we cater to diverse industries, offering tailored solutions to meet specific needs. We ensure success across varied business landscapes with comprehensive and adaptable solutions.</p>
        <a href='#' className="bg-[#2D7EFF] w-fit py-3 px-6 rounded-full text-white">All Cases</a>
      </div>

      {/* Deck */}
      <div className='relative h-auto p-2 lg:w-[40%] flex flex-col items-center'>
        {cards.map(card => <div key={card.industry} className={`${card.background} shadow-md lg:min-w-[500px] p-8 rounded-2xl flex flex-col justify-between gap-4 lg:absolute bottom-0 z-50 lg;min-h-[280px]`}>
          <div className='flex gap-4 items-center'>
            <Image
              className="flex self-end"
              src={card.icon}
              alt=''
              width={25}
              height={15}
            />
            <h1 className="font-semibold">{card.industry}</h1>
          </div>
          <p className="text-xs">{card.text}</p>

          <div className='flex justify-between mt-3'>
            <div>
              <Image
                className={`${currentIndex === 0 ? 'hidden' : 'flex'} rotate-180 cursor-pointer`}
                // prev button
                src="/blackarrow.svg"
                alt=''
                width={25}
                height={15}
                onClick={prevCard}
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
                onClick={nextCard}
              />
            </div>
          </div>
        </div>)}

      </div>







    </div>
  )
}

export default Industries








