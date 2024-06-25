import ArrowFoward from '../../../public/arrow_forward.svg'
import Image from 'next/image'

const ContactForm = () => {
    return (
        <div className="w-full h-auto relative p-5 lg:px-20 lg:p-0 lg:py-10 flex items-center justify-end text-[#16205F] mt-5">
            <div className="bg-servicesBackground rounded-[4px] lg:ml-20 rounded-br-[50px] h-full w-[40%] lg:w-[65%] absolute top-0 left-0 z-[-10]"></div>
            <form action="" className=" rounded-[4px] rounded-tl-[50px] lg:rounded-tl-[70px] p-[30px] lg:p-[50px] lg:ml-0 lg:w-1/2 max-w-[700px] bg-white shadow-xl">
                <p className="text-[40px] font-semibold mb-[30px]">Contact Us</p>
                <div className="flex gap-x-2 mb-3 w-full justify-between flex-col lg:flex-row">
                    <div className="flex flex-col gap-y-2 flex-1 mb-5 lg:mb-2">
                        <label htmlFor="details" className='font-medium text-base'>Company</label>
                        <input type="text" id="company" name='company' className='outline-none border-[#C5E0FF] border rounded-[4px] h-[55px] px-2' />
                    </div>
                    <div className="flex flex-col gap-y-2 flex-1 mb-5 lg:mb-2">
                        <label htmlFor="details" className='font-medium text-base'>Your Name</label>
                        <input type="text" id="name" name='name' className='outline-none border-[#C5E0FF] border rounded-[4px] h-[55px] px-2' />
                    </div>
                </div>
                <div className="flex gap-x-2 mb-3 w-full justify-between flex-col lg:flex-row">
                    <div className="flex flex-col gap-y-2 flex-1 mb-5 lg:mb-2">
                        <label htmlFor="details" className='font-medium text-base'>Phone Number</label>
                        <input type="text" id="phone" name='phone' className='outline-none border-[#C5E0FF] border rounded-[4px] h-[55px] px-2' />
                    </div>
                    <div className="flex flex-col gap-y-2 flex-1 mb-5 lg:mb-2">
                        <label htmlFor="details" className='font-medium text-base'>Email</label>
                        <input type="text" id="email" name='email' className='outline-none border-[#C5E0FF] border rounded-[4px] h-[55px] px-2' />
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 mb-3">
                    <label htmlFor="details" className='font-medium text-base'>Project Details</label>
                    <textarea name="details" id="details" className='outline-none border-[#C5E0FF] border rounded-[4px] min-~h-[55px] resize-none p-2 mb-5 lg:mb-2'></textarea>
                </div>
                <div className="flex gap-x-2 items-baseline mb-7">
                    <input type="checkbox" name="checkbox" id="checkbox" className="cursor-pointer w-[15px] h-[15px]" />
                    <p>By sending this form I confirm that I have read and accept the <span className="font-semibold">Privacy Policy</span></p>
                </div>
                <button className="uppercase bg-[#2D7EFF] text-white text-base rounded-[4px] py-3 px-[25px] font-medium flex items-center gap-2">Get Consultation 
                    <Image
                    src={ArrowFoward}
                    alt="foward arrow"
                    />
                </button>
            </form>
        </div>
    )
}

export default ContactForm