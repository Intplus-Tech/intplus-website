import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className='w-full bg-white bg-cover px-7 py-12 lg:p-20 leading-[30px]' id="about">
      <h1 className='text-4xl text-[#000000] mb-7 lg:mb-10'>About Us</h1>
      <div className='h-[2px] bg-[#00000013] w-full mb-7 lg:mb-10'></div>
      <div className='flex justify-between gap-10 h-auto w-full flex-col lg:flex-row'>
        <div className='h-auto flex flex-col justify-between lg:w-[30%] gap-7'>
          <p>We have the motivated experts you need to solve any problem. Our commitment to understanding your needs builds strong, trusting relationships – it{"'"}s why we guarantee satisfaction with every solution. </p>
          <Link href='/about' className="bg-[#2D7EFF] w-fit py-4 px-5 rounded-full text-white">More about us</Link>
        </div>
        <div className="h-auto flex flex-col justify-between gap-7 lg:w-[70%]">
          <div className='flex justify-between w-full flex-col lg:flex-row gap-5'>
            <h4 className='text-2xl text-black lg:w-[20%]'>Aim</h4>
            <p className='lg:w-[80%]'>Empowering businesses through cutting-edge IT solutions, <strong>int+</strong> aims to <strong>revolutionize Industries</strong>. We strive to enhance efficiency, foster innovation, and exceed customer expectations.</p>
          </div>
          <div className='flex justify-between w-full flex-col lg:flex-row gap-5'>
            <h4 className='text-2xl text-black lg:w-[20%] '>Mission</h4>
            <p className='lg:w-[80%]'>Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation. Whether it is a consumer-oriented app or a transformative enterprise-class solution, the company leads the process from ideation and concept to delivery, and provides ongoing support.</p>
          </div>
          <div className='flex justify-between w-full flex-col lg:flex-row gap-5'>
            <h4 className='text-2xl text-black lg:w-[20%] '>Progress</h4>
            <p className='lg:w-[80%]'>At <strong>int+</strong> , progress is measured in the success stories of our clients. With a relentless pursuit of excellence, we continuously evolve, pushing boundaries with IT solutions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About