import React from 'react'
import Image from 'next/image'
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-calistoga'
});


const Homepage = () => {
  return (
    <div className=' w-full min-h-[500px] bg-homepageBackground bg-cover px-20 py-10'>
      <nav className='flex justify-between items-center mb-16'>
        <div className='flex gap-1 items-center'>
          <div className={`${calistoga.variable} font-calistoga bg-white w-auto flex py-[2px] px-3 rounded-[1px]`}
          >
            <p className='text-xl font-medium text-[#1E1E1E]'>int<sup className='text-base'>+</sup></p>
          </div>
          <p className='text-white text-lg'>Technology</p>
        </div>
        <ul className='flex items-center gap-6 text-white'>
          <li className='text-base'>Home</li>
          <li className='text-base'>About Us</li>
          <li className='text-base'>Services</li>
          <li className='text-base'>Career</li>
          <li className='text-base'>Contact</li>
        </ul>
      </nav>
      <div className='w-full h-auto flex flex-col gap-10'>
        <h1 className='text-white text-5xl font-medium w-[40%] tracking-wider leading-tight'>Implementing Software Solutions</h1>
        <div className='flex flex-col gap-4'>
          <p className="text-white text-base font-light tracking-wider">Innovating Tomorrow{"'"}s Solutions, Today.</p>
          <div className="flex gap-2 items-center">
            <div className={`${calistoga.variable} font-calistoga bg-white w-auto flex py-[2px] px-3 rounded-[1px]`}>
              <p className='text-xl font-medium text-[#1E1E1E]'>int<sup className='text-base'>+</sup></p>
            </div>
            <p className='text-white text-base font-light tracking-wide'>– Your Trusted IT Partner</p>
          </div>
        </div>
        <a href='#' className='flex w-fit px-4 py-2 rounded-full bg-opacity-5 bg-white backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md text-white gap-4'>
          <p className='text-base font-light'>Get Started</p>
          <Image
            src="/arrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </a>
      </div>
    </div>
  )
}

export default Homepage