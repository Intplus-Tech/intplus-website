import Header from '../components/about/Header'
import ContactForm from '../components/ContactForm'
import CoreValues from '../components/about/CoreValues'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden relative">
        <Header/>
        <div className="bg-[#F9F9FF] w-full h-auto p-7 lg:px-20 lg:py-10 text-[#333333] flex flex-col items-center text-center">
        <p className="text-[30px] tracking-wider font-semibold text-[#1A202C]">About who we are</p>
        <p className="text-[16px] w-[70%] mt-4 text-[#2D3748]">Int+ provides tailored software solutions and services that empower businesses to grow and meet the challenges of tomorrow. We are a team that view solution from a global perspective and a proven track record in creating and accelerating innovations for companies for industries.</p>
        <p className='text-[16px] mt-7 w-[80%]'>Bringing together a solution driven engineering team and industry expertise we help businesses navigate the technology maze in Real Estate, Fintech, Utilities, IT, Logistics, E-Commerce & Retail, Oil & Gas and others.</p>
        </div>
        <CoreValues/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default About