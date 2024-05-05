import React from 'react'

const About = () => {
  return (
    <div className=' w-full bg-white bg-cover px-20 py-10'>
      <h1 className='text-3xl text-[#000000] mb-10'>About Us</h1>
      <div className='h-[2px] bg-[#00000013] w-full mb-10'></div>
      <div className='flex justify-between gap-10 h-auto w-full'>
        <div className='h-auto flex flex-col justify-between w-[30%]'>
          <p>We have the motivated experts you need to solve any problem. Our commitment to understanding your needs builds strong, trusting relationships – it's why we guarantee satisfaction with every solution. </p>
          <a href='#' className="bg-[#2D7EFF] w-fit py-4 px-5 rounded-full text-white">More about us</a>
        </div>
        <div className="h-auto flex flex-col justify-between gap-4 w-[70%]">
          <div className='flex justify-between w-full '>
            <h4 className='text-2xl text-black w-[20%]'>Aim</h4>
            <p className='w-[80%]'>Empowering businesses through cutting-edge IT solutions, <strong>int+</strong> aims to <strong>revolutionize Industries</strong>. We strive to enhance efficiency, foster innovation, and exceed customer expectations.</p>
          </div>
          <div className='flex justify-between w-full '>
            <h4 className='text-2xl text-black w-[20%] '>Mission</h4>
            <p className='w-[80%]'>Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation. Whether it is a consumer-oriented app or a transformative enterprise-class solution, the company leads the process from ideation and concept to delivery, and provides ongoing support.</p>
          </div>
          <div className='flex justify-between w-full '>
            <h4 className='text-2xl text-black w-[20%] '>Progress</h4>
            <p className='w-[80%]'>At <strong>int+</strong> , progress is measured in the success stories of our clients. With a relentless pursuit of excellence, we continuously evolve, pushing boundaries with IT solutions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About