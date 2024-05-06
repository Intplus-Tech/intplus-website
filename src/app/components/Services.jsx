import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='bg-white w-full h-auto p-7 lg:px-20 lg:py-10' id="services" >
      <div className='flex justify-between mb-5 lg:items-center gap-10 flex-col lg:flex-row'>
        <h1 className='text-3xl text-[#000000] lg:mb-10 lg:w-[30%]'>Services</h1>
        <div className="lg:w-[70%] gap-4">
          <div className="flex justify-between w-full">
          <h4 className='lg:w-[20%]'></h4>
            <p className="lg:w-[80%]">At <strong>int+</strong>, our services are crafted to empower your business and fuel success. We prioritize <strong>efficiency, innovation, and customer satisfaction</strong> in a comprehensive suite that spans crucial business functions, ensuring your journey towards success is seamless and effective</p>
          </div>
        </div>
      </div>
      <div className='h-[2px] bg-[#00000040] w-full mb-10'></div>
      <div className="flex lg:justify-between gap-4 overflow-x-scroll no-scrollbar">
        <div className="bg-[#F8FAFF] shadow-md min-w-[300px] max-h-[250px] p-4 rounded-lg flex flex-col justify-between gap-1">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">MOBILE DEVELOPMENT</h1>
            <p className="text-sm">Meet your goals, exceed expectations. We deliver top-quality mobile apps, on time, every time.</p>
          </div>
          <Image
          className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#F8FAFF] shadow-md min-w-[300px] max-h-[250px] p-4 rounded-lg flex flex-col justify-between gap-1">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">DEDICATED DEVELOPMENT TEAM</h1>
            <p className="text-sm">8 years of expertise matching perfect engineers to your project. Build, scale, thrive.</p>
          </div>
          <Image
          className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#F8FAFF] shadow-md min-w-[300px] max-h-[250px] p-4 rounded-lg flex flex-col justify-between gap-1">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">PRODUCT ENGINEERING</h1>
            <p className="text-sm">Use a powerful combination of profound tech expertise, mature, low-risk processes, and proven experience in a variety of business domains to turn your business idea into reality</p>
          </div>
          <Image
          className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
        <div className="bg-[#F8FAFF] shadow-md min-w-[300px] max-h-[250px] p-4 rounded-lg flex flex-col justify-between gap-1">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">UI/UX DESIGN</h1>
            <p className="text-sm">Bring your software vision to life with our experienced development team. We combine proven methodologies with a decade of expertise to deliver quality results.</p>
          </div>
          <Image
          className="flex self-end"
            src="/blackarrow.svg"
            alt=''
            width={25}
            height={15}
          />
        </div>
      </div>
    </div>
  )
}

export default Services