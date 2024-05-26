'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calistoga } from 'next/font/google';

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-calistoga',
});

const NotFound = () => {
  const [navClicked, setNavClicked] = useState(false);

  const toggleNavClicked = () => {
    setNavClicked(!navClicked);
  };

  return (
    <div className='w-screen h-screen p-7 lg:px-20 lg:py-10 relative flex flex-col'>

      <nav className='flex justify-between items-center mb-16 '>
        <div className='flex gap-1 items-center'>
          <div
            className={`${calistoga.variable} font-calistoga bg-[#0088CC] w-auto flex py-[2px] px-3 rounded-[1px]`}
          >
            <p className='text-xl font-medium text-white'>int<sup className='text-base'>+</sup></p>
          </div>
          <p className='text-black font-semibold text-lg'>Technology</p>
        </div>
        <Image
          className={`lg:hidden ${navClicked ? 'hidden' : ''}`}
          src="/dark-nav-icon.svg"
          alt=''
          width={25}
          height={15}
          onClick={toggleNavClicked}
        />
        <div className={`lg:flex lg:items-center lg:w-auto  lg:static top-0  h-screen lg:h-auto transition-all duration-300 ease-in-out  bg-white lg:bg-transparent w-[100%] p-7 lg:p-0  fixed  ease z-[9999] ${navClicked ? 'right-0' : 'right-[-100%]'}`}>
          <Image
            className="lg:hidden ml-auto "
            src="/times icon.svg"
            alt=''
            width={25}
            height={15}
            onClick={toggleNavClicked}
          />
          <ul className='font-normal text-2xl lg:text-lg flex flex-col lg:flex-row lg:items-center lg:justify-between text-black gap-10 mt-10 lg:mt-0'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/technologies">Technologies</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className='flex-grow flex flex-col items-center justify-center gap-4'>
        <div className='lg:p-10 bg-Background404 bg-contain bg-no-repeat bg-center w-full h-[320px] lg:h-[300px] lg:w-[800px] flex items-center justify-center flex-col gap-4'>
          <h1 className='font-semibold text-4xl text-center'>Page not found</h1>
          <p className='text-base font-light text-gray-500 text-center'>This page is not available at the moment</p>
          <Link href="/" className='bg-[#0088CC] text-white w-[100%] lg:w-fit text-center rounded-lg p-4 lg:p-3'>Go Back Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
