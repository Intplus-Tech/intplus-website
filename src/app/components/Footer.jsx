import React from 'react'
import { Calistoga } from "next/font/google";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-calistoga'
});

const Footer = () => {
  return (
    <div className='bg-white w-full h-auto p-7 lg:px-20 lg:py-10'>
      <div className='flex justify-between flex-col-reverse gap-7 lg:flex-row'>
        <div className='flex flex-col justify-between'>
          <div>
            <p className={`${calistoga.variable} font-calistoga text-2xl font-medium text-[#1E1E1E] hidden lg:flex`}>int<sup className='text-base'>+</sup></p>
          </div>
          <ul className='flex items-center gap-6 text-black font-medium flex-wrap'>
            <li className='text-base'>Services</li>
            <li className='text-base'>About Us</li>
            <li className='text-base'>Career</li>
            <li className='text-base'>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <p className={`${calistoga.variable} font-calistoga text-2xl font-medium text-[#1E1E1E] lg:hidden`}>int<sup className='text-base'>+</sup></p>
          <ul className='flex flex-col gap-2 text-black font-medium'>
            <li className='text-base'>Phone: +234 703 957 4358</li>
            <li className='text-base'>Email: info.intplus@gmail.com</li>
            <li className='text-base'>Contact Us: info@intplus.co</li>
            <li className='text-base'>Address: Lagos, Nigeria</li>
          </ul>
        </div>

      </div>
      <div className='h-[2px] bg-[#00000040] w-full my-10'></div>
      <div className='flex justify-between'>
        <p className='font-medium'>© int+ 2024</p>
        <div className='flex gap-4'>
          <a href="#" className='font-semibold underline'>Insta</a>
          <a href="#" className='font-semibold underline'>YouTube</a>
          <a href="#" className='font-semibold underline'>in</a>
        </div>
      </div>
    </div>
  )
}

export default Footer