'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Calistoga } from 'next/font/google';

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-calistoga',
});

const Homepage = () => {

  const [navClicked, setNavClicked] = useState(false);

  const toggleNavClicked = () => {
    setNavClicked(!navClicked);
  };


  return (
    <div className='w-full min-h-[500px] bg-homepageBackground bg-cover p-7 lg:px-20 lg:py-10 relative'>
      <nav className='flex justify-between items-center mb-16'>
        <div className='flex gap-1 items-center'>
          <div
            className={`${calistoga.variable} font-calistoga bg-white w-auto flex py-[2px] px-3 rounded-[1px]`}
          >
            <p className='text-xl font-medium text-[#1E1E1E]'>int<sup className='text-base'>+</sup></p>
          </div>
          <p className='text-white text-lg'>Technology</p>
        </div>
        <ul className='items-center gap-6 text-white hidden lg:flex'>
          <li className='text-base'>
            <a href='#about'>About Us</a>
          </li>
          <li className='text-base'>
            <a href='#expertise'>Expertise</a>
          </li>
          <li className='text-base'>
            <a href='#services'>Services</a>
          </li>
          <li className='text-base'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <Image
          className="lg:hidden"
          src="/nav icon.svg"
          alt=''
          width={25}
          height={15}
          onClick={toggleNavClicked}
        />
      </nav>
      <div className='w-full h-auto flex flex-col gap-10'>
        <h1 className='text-white text-5xl font-medium w-[40%] tracking-wider leading-tight'>Implementing Software Solutions</h1>
        <div className='flex flex-col gap-4'>
          <p className="text-white text-base font-light tracking-wider">Innovating Tomorrow{'\''}s Solutions, Today.</p>
          <div className="flex gap-2 items-center">
            <div className={`${calistoga.variable} font-calistoga bg-white w-auto flex py-[2px] px-3 rounded-[1px]`}>
              <p className='text-xl font-medium text-[#1E1E1E]'>int<sup className='text-base'>+</sup></p>
            </div>
            <p className='text-white text-base font-light tracking-wide'>– Your Trusted IT Partner</p>
          </div>
        </div>
        <a href='#contact' className='flex w-fit px-4 py-2 rounded-full bg-opacity-5 bg-white backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md text-white gap-4'>
          <p className='text-base font-light'>Get Started</p>
          <Image
            src="/arrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </a>
      </div>

      <div className={`${navClicked ? 'hidden' : ''} bg-white h-screen absolute top-0 right-0 w-screen lg:hidden`}>
        <div className='flex w-full justify-end mb-20 pt-7 pr-7'>
          <Image
            className="lg:hidden"
            src="/times icon.svg"
            alt=''
            width={30}
            height={30}
            onClick={toggleNavClicked}
          />
        </div>
        <div className='flex flex-col gap-10 pl-7'>
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Services</p>
          </div>
          <div>
            <p>Technology</p>
          </div>
          <div>
            <p>Careers</p>
          </div>
          <div>
            <p>Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
