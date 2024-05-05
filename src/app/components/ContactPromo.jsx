import React from 'react'
import Image from 'next/image'

const ContactPromo = () => {
  return (
    <div className='bg-contactpromoBackground w-full h-auto bg-cover text-white px-20 py-20 flex items-center justify-center gap-12'>
    <div className="w-[300px] tracking-wider">Secure the future of your company with <strong>int+</strong></div>
    <a href='#' className='flex items-center justify-center px-4 py-4 rounded-full bg-opacity-5 bg-white backdrop-filter backdrop-blur-lg border border-opacity-10 border-white border-solid shadow-md text-white w-[50px] h-[50px]'>
      <Image
        src="/arrow.svg"
        alt=''
        width={25}
        height={15}
      />
    </a>
  </div>
  )
}

export default ContactPromo