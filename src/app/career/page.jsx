import Header from '../components/career/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import JobListings from '../components/career/JobListings'

const Career = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">
        <Header/>
        <div className="bg-white w-full h-auto p-7 lg:px-20 lg:pb-7 lg:pt-10 text-[#333333]">
        <p className="uppercase text-[24px] tracking-wider font-medium">CARE TO JOIN US</p>
        <p className="text-[16px] w-[70%] mt-4">Take a look at the open positions below.
        </p>
        <p className='text-[16px] mt-5'>If none of them suit you, or you feel you could help us in other ways, please fill out the form below or contact us directly at <span className='font-semibold'>carrers@intplus.co</span> </p>
        </div>
        <JobListings/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Career