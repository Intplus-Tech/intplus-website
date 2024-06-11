import React from 'react'
import Image from 'next/image'

const ContactPromo = () => {
  return (
    <div className='relative w-full lg:h-[300px]   bg-cover text-white p-7 lg:px-20 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-start gap-20 lg:gap-[200px]'>
            <video autoPlay loop muted className='absolute inset-0 w-full h-full object-cover'>
        <source src="/contactpromo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag...
      </video>
      <div className="lg:w-1/3 tracking-wider text-xl z-10 font-normal leading-[38px]">Secure the future of your company with  <span className='font-bold'>int+</span></div>
      <a href='#' className=' group flex gap-3 lg:gap-10  items-center justify-between px-4 py-4 rounded-full bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md w-full lg:w-20 lg:h-20 h-12 overflow-hidden  lg:hover:w-[400px]  transition-all duration-500 ease-in-out z-10'>
      <span className=" transition-all duration-500 ease-in-out lg:hidden lg:group-hover:inline leading-[70px] w-auto flex flex-1  text-white button-text">Get in touch</span>
        <div className='lg:w-20 lg:h-20 w-auto h-12 flex items-center justify-center transition-all duration-300 ease-in-out '>
          <Image
            src="/arrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
      </a>

    </div>
  )
}

export default ContactPromo