import React from 'react'
import Image from 'next/image'

const Values = () => {
  return (
    <div className='bg-white w-full h-auto p-7 lg:px-20 lg:py-10'>
      <div className='flex justify-between mb-5 lg:items-center gap-10 flex-col lg:flex-row'>
        <h1 className='text-3xl text-[#000000]  lg:mb-10 lg:w-[30%]'>Values</h1>
        <div className="lg:w-[70%] gap-4">
          <div className="flex justify-between w-full">
            <h4 className='lg:w-[20%]'></h4>
            <p className="lg:w-[80%]">We excel in executing projects, enhancing processes, and products through innovative technology at company name</p>
          </div>
        </div>
      </div>
      <div className='h-[2px] bg-[#00000040] w-full mb-10'></div>
      <div className="flex flex-col gap-12 w-full h-auto">
        <div className="flex justify-between gap-20 flex-col lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <Image
              src="/experience.svg"
              alt=''
              width={25}
              height={25}
            />
            <h1 className="text-xl font-sm">Experience</h1>
            <p>At int+ we curate unparalleled experiences, blending technical expertise with creative solutions. Our commitment to crafting exceptional user experiences defines our approach, driving innovation and client satisfaction.</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-1/2">
            <Image
              src="/collaboration.svg"
              alt=''
              width={25}
              height={25}
            />
            <h1 className="text-xl font-sm">Collaboration</h1>
            <p>Collaboration is the heartbeat of int+. We foster a culture that thrives on teamwork, uniting diverse talents to deliver seamless software solutions and enriching  experiences for our clients.</p>
          </div>
        </div>
        <div className="flex justify-between gap-20 flex-col lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <Image
              src="/communication.svg"
              alt=''
              width={25}
              height={25}
            />
            <h1 className="text-xl font-sm">Communication</h1>
            <p>Clear and effective communication is foundational at int+. We prioritize transparent and open dialogue, ensuring understanding and alignment within our team, with clients, and throughout our product development.</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-1/2">
            <Image
              src="/openess.svg"
              alt=''
              width={25}
              height={25}
            />
            <h1 className="text-xl font-sm">Openess</h1>
            <p>Openness is ingrained in our culture at int+. We embrace diverse perspectives, encourage curiosity, and foster an environment where ideas flow freely. It{"'"}s the key to our innovative approach and continuous growth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values