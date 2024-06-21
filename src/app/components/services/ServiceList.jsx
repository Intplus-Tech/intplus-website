import DevelopmentTeam from '../../../../public/development-team.svg'
import MobileDevelopment from '../../../../public/mobile-development.svg'
import ProductEngineering from '../../../../public/product-engineering.svg'
import UI_UX from '../../../../public/ui-ux-icon.svg'
import IT_Consulting from '../../../../public/it-consulting.svg'
import SolutionArchitecture from '../../../../public/solution-architecture.svg'
import Enterprise from '../../../../public/enterprise.svg'
import MVP from '../../../../public/mvp.svg'
import Image from 'next/image'
const ServiceList = () => {

    const services = [
        {name: 'Dedicated Development Team', description : "Scale your delivery capacity with intelligent dedicated developers. Our clients succeed by leveraging Int+'s process of building, motivating, and managing software development teams.", icon: DevelopmentTeam},
        {name: "Mobile Development", description: "We help brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices.", icon : MobileDevelopment},
        {name: "Product Engineering", description: "Use a powerful combination of profound tech expertise, mature, low-risk processes, and proven experience in a variety of business domains to turn your business idea into reality.", icon : ProductEngineering},
        {name: "UI/UX Design", description: "Bring your software vision to life with our experienced development team. We combine proven methodologies with a decade of expertise to deliver quality results.", icon : UI_UX},
        {name: "IT Consulting", description: "Our approach is tailored, ensuring your business not only adapts but thrives. From digitizing operations and optimizing your software portfolio to harnessing the power of mobile solutions, we're here to elevate your journey every step of the way.", icon :IT_Consulting},
        {name: "Solution Architecture", description: "Cut costs and ensure success by creating a solid roadmap before you begin development. From your project's inception to its completion—know what to expect and understand the specifics of the work that will need to be done.", icon : SolutionArchitecture},
        {name: "MVP for Startups and Enterprises", description: "Leverage on our years of experience in software development for startups to translate your unique ideas into an engaging software product built for generating profit.", icon : MVP},
        {name: "Enterprise Software Development", description: "We have expertise in enterprise software development, API integration, modernizing legacy systems, and consolidating app portfolios. We re-engineering solutions of different complexity to become a lasting success.", icon : Enterprise},
    ]
  return (
        <div className='flex flex-wrap w-full justify-between gap-y-[50px] gap-x-[40px] bg-white p-7 lg:px-20 h-auto'>
            {services.map((service) => (
                <div key={service.name} className="text-[#16205F] flex flex-col lg:flex-row gap-[20px] max-w-[470px]">
                    <div>
                        <Image
                        src={service.icon}
                        alt="service-icon"
                        width={55}
                        height={70}
                        />
                    </div>
                    <div className='text-[#16205F] flex-1'>
                        <p className="font-semibold text-2xl">{service.name}</p>
                        <p className='text-[14px]'>{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default ServiceList