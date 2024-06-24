'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Calistoga } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const calistoga = Calistoga({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-calistoga',
});

const Navbar = () => {

    const [navClicked, setNavClicked] = useState(false);

    const toggleNavClicked = () => {
        setNavClicked(!navClicked);
    };
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Career', href: '/career' },
    ];

    return (
        <nav className='flex justify-between items-center mb-16'>
            <div className='flex gap-1 items-center'>
                <div
                    className={`${calistoga.variable} font-calistoga bg-white w-auto flex py-[2px] px-3 rounded-[1px]`}
                >
                    <p className='text-xl font-medium text-[#1E1E1E]'>int<sup className='text-base'>+</sup></p>
                </div>
                <p className='text-white text-lg font-semibold'>Technology</p>
            </div>
            <Image
                className={`lg:hidden ${navClicked ? 'hidden' : ''}`}
                src="/nav icon.svg"
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
                <ul className='font-normal text-2xl lg:text-lg flex flex-col lg:flex-row lg:items-center lg:justify-between lg:text-white gap-10 mt-10 lg:mt-0'>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={`${pathname === item.href
                                ? 'text-white font-bold'
                                : 'text-white hover:text-white'
                                }`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                 <Link href="/contacts" className='blue-button cursor-pointer'>Contact Us</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
