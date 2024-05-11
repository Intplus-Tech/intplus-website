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
                    <p className='text-black text-lg font-semibold'>Technology</p>
                </div>
                <ul className='items-center gap-6 text-black hidden lg:flex'>
                    <li className='text-lg'>
                        <a href='#about'>About Us</a>
                    </li>
                    <li className='text-lg'>
                        <a href='#expertise'>Expertise</a>
                    </li>
                    <li className='text-lg'>
                        <a href='#services'>Services</a>
                    </li>
                    <li className='text-lg'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
                <Image
                    className="lg:hidden"
                    src="/dark-nav-icon.svg"
                    alt=''
                    width={25}
                    height={15}
                    onClick={toggleNavClicked}
                />
            </nav>

            <div className={`${navClicked ? 'hidden' : ''} bg-white h-screen absolute top-0 right-0 w-screen hidden lg:hidden`}>
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
