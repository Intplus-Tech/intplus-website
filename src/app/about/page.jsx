import Header from '../components/about/Header'
import ContactForm from '../components/ContactForm'
import CoreValues from '../components/about/CoreValues'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">
        <Header/>
        <div className="bg-white w-full h-auto p-7 lg:px-20 lg:pb-7 lg:pt-10 text-[#333333]">
        <p className="uppercase text-[24px] tracking-wider font-medium">GET IN TOUCH</p>
        <p className="text-[16px] w-[70%] mt-4">We value your interest in Int+. If you have inquiries or ideas you'd like to share, don't hesitate to contact us at carrers@intplus.co. </p>
        <p className='text-[16px] mt-5'>Let's start a conversation about how we can work together.</p>
        </div>
        <CoreValues/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default About