import Header from '../components/contacts/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">
        <Header/>
        <div className="bg-white w-full h-auto p-7 lg:px-20 lg:py-10 text-[#333333]">
        <p className="uppercase text-[24px] tracking-wider font-medium">GET IN TOUCH</p>
        <p className="text-[16px] w-[70%] mt-4">We value your interest in Int+. If you have inquiries or ideas you'd like to share, don't hesitate to contact us at carrers@intplus.co. </p>
        <p className='text-[16px] mt-7'>Let's start a conversation about how we can work together.</p>
        </div>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contacts