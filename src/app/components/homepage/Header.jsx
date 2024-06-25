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
    <div className='min-h-[500px] lg:min-h-[600px] w-screen bg-homepageBackground bg-cover p-7 lg:px-20 lg:py-10'>
      <Navbar />
      <div className='w-full h-auto flex flex-col gap-5 lg:gap-4 items-center text-center md:pt-20 tracking-wide'>
        <h1 className='text-white text-3xl md:text-5xl font-light lg:max-w-[600px] tracking-wide md:leading-[70px]'>Great <span className='font-bold'>Products</span> are <span className='font-bold'>built by great teams.</span></h1>
        <p className="text-white text-lg font-light tracking-wider lg:max-w-[500px]">We help build and manage a team of world-class developers to bring your vision to life</p>
        <Link href='/contacts' className='blue-button mt-[20px] w-fit'>
          Let&apos;s get started
        </Link>

      </div>

    </div>
  );
};

export default Header;
