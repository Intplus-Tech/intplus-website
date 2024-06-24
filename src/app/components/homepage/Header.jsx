import Navbar from '../Navbar'
import { Calistoga } from 'next/font/google';
import Link from 'next/link';

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-calistoga',
});

const Header = () => {



  return (
    <div className='min-h-[600px] w-screen bg-homepageBackground bg-cover p-7 lg:px-20 lg:py-10'>
      <Navbar />
      <div className='w-full h-auto flex flex-col gap-10 lg:gap-4 md:items-center md:text-center md:pt-20'>
        <h1 className='text-white text-4xl md:text-5xl font-bold max-w-[600px] tracking-wide md:leading-[70px]'>Great Products are built by great teams</h1>
        <p className="text-white text-lg font-light tracking-wider max-w-[500px]">We help build and manage a team of world-class developers to bring your vision to life</p>
        <Link href='/contacts' className='blue-button mt-[20px] '>
          Let&apos;s get started
        </Link>

      </div>

    </div>
  );
};

export default Header;
