import Navbar from '../Navbar'
import Image from 'next/image';
import { Calistoga } from 'next/font/google';

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
        <h1 className='text-white text-4xl md:text-6xl font-medium w-[60%] tracking-wider md:leading-[70px]'>Implementing Software Solutions</h1>
        <div className='flex flex-col gap-4'>
          <p className="text-white text-lg font-light tracking-wider">Innovating Tomorrow{'\''}s Solutions, Today.</p>
          <div className="flex gap-2 items-center lg:justify-center">
            <div className={`${calistoga.variable} font-calistoga bg-white w-auto flex py-[2px] px-3 rounded-[1px]`}>
              <p className='text-xl font-medium text-[#1E1E1E]'>int<sup className='text-base'>+</sup></p>
            </div>
            <p className='text-white text-lg font-light tracking-wide'>– Your Trusted IT Partner</p>
          </div>
        </div>
        <a href='#contact' className='flex items-center justify-center gap-10 px-4 py-2 rounded-full bg-opacity-5 bg-white backdrop-filter backdrop-blur-lg hover:border-white lg:hover:w-[300px] transition-all duration-500 ease-in-out border-solid shadow-md text-white outline-none group glowing-border group w-fit  lg:h-20 lg:w-20'>
          <p className='text-lg font-light lg:hidden lg:group-hover:inline transition-all duration-500 delay-500 ease-in-out  button-text'>Let{"'"}s get started</p>
          <Image
            src="/arrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </a>

      </div>

    </div>
  );
};

export default Header;
