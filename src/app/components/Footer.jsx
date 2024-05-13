import React from 'react'
import { Calistoga } from "next/font/google";
import Link from 'next/link'

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-calistoga'
});

const Footer = () => {
  return (
    <div className='bg-white w-full h-auto px-7 py-12 lg:p-20 '>
      <div className='flex justify-between flex-col-reverse gap-7 lg:flex-row'>
        <div className='flex flex-col justify-between'>
          <div>
            <p className={`${calistoga.variable} font-calistoga text-2xl font-medium text-[#1E1E1E] hidden lg:flex`}>int<sup className='text-base'>+</sup></p>
          </div>
          <ul className='flex items-center gap-6 text-black font-light flex-wrap text-base'>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/technologies">About</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>
            <li>
              <Link href="/blog">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <p className={`${calistoga.variable} font-calistoga text-2xl font-medium text-[#1E1E1E] lg:hidden`}>int<sup className='text-base'>+</sup></p>
          <ul className='flex flex-col gap-3 text-black font-light text-sm'>
            <li className=''>Phone: +234 703 957 4358</li>
            <li className=''>Email: info.intplus@gmail.com</li>
            <li className=''>Contact Us: info@intplus.co</li>
            <li className=''>Address: Lagos, Nigeria</li>
          </ul>
        </div>

      </div>
      <div className='h-[2px] bg-[#00000040] w-full my-10'></div>
      <div className='flex justify-between'>
        <p className='font-medium'>© int+ 2024</p>
        <div className='flex gap-4 font-light text-sm'>
          <a href="#" className=' underline'>Insta</a>
          <a href="#" className=' underline'>YouTube</a>
          <a href="#" className=' underline'>in</a>
        </div>
      </div>
    </div>
  )
}

export default Footer