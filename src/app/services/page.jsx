import Header from '../components/services/Header'
import ContactForm from '../components/ContactForm'
import ServiceList from '../components/services/ServiceList'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">
        <Header/>
        <div className="bg-white w-full h-auto p-7 lg:px-20 lg:py-10">
        <p className="uppercase text-[#333333] text-[24px] tracking-wider font-medium">our custom software development 
        services</p>
        <p className="text-[#333333] text-[16px] w-[70%] mt-4">Scale your business with our end-to-end software development solutions. int+ technology delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.</p>
        </div>
        <ServiceList/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Services