import DevelopmentTeam from "../../../../public/development-team.svg";
import MobileDevelopment from "../../../../public/mobile-development.svg";
import ProductEngineering from "../../../../public/product-engineering.svg";
import UI_UX from "../../../../public/ui-ux.svg";
import IT_Consulting from "../../../../public/it-consulting.svg";
import SolutionArchitecture from "../../../../public/solution-architecture.svg";
import Enterprise from "../../../../public/enterprise.svg";
import MVP from "../../../../public/mvp.svg";
import Image from "next/image";
const ServiceList = () => {
  const services = [
    {
      name: "Enterprise Software Development",
      description:
        "",
      icon: Enterprise,
    },
  ];
  return (
    <div className="flex flex-wrap w-full justify-between gap-y-[50px] gap-x-10 bg-[#F9F9FF] p-7 lg:px-20 h-auto">
      <div className="flex w-full justify-between gap-10 flex-col lg:flex-row">
        <div className=" bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden flex-1">
          <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[2px]">
            <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[60px] h-[60px]">
              <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                <Image
                  src={DevelopmentTeam}
                  alt="service-icon"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div className="text-[#16205F] flex-1">
              <p className="font-semibold text-2xl mb-2 gradient-text">
                Dedicated Development Team
              </p>
              <p className="text-[14px] text-[#4A5568]">
                Scale your delivery capacity with intelligent dedicated
                developers. Our clients succeed by leveraging Int+{"'"}s process
                of building, motivating, and managing software development
                teams.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden flex-1">
          <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[2px]">
            <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[60px] h-[60px]">
              <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                <Image
                  src={MobileDevelopment}
                  alt="service-icon"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div className="text-[#16205F] flex-1">
              <p className="font-semibold text-2xl mb-2 gradient-text">
                Mobile Development
              </p>
              <p className="text-[14px] text-[#4A5568]">
              We help brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-10 flex-col lg:flex-row">
        <div className=" bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden flex-1">
          <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[2px]">
            <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[60px] h-[60px]">
              <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                <Image
                  src={ProductEngineering}
                  alt="service-icon"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div className="text-[#16205F] flex-1">
              <p className="font-semibold text-2xl mb-2 gradient-text">
                Product Engineering
              </p>
              <p className="text-[14px] text-[#4A5568]">
              Use a powerful combination of profound tech expertise, mature, low-risk processes, and proven experience in a variety of business domains to turn your business idea into reality.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden flex-1">
          <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[2px]">
            <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[60px] h-[60px]">
              <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                <Image
                  src={UI_UX}
                  alt="service-icon"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div className="text-[#16205F] flex-1">
              <p className="font-semibold text-2xl mb-2 gradient-text">
                UI/UX Design
              </p>
              <p className="text-[14px] text-[#4A5568]">
              Bring your software vision to life with our experienced development team. We combine proven methodologies with a decade of expertise to deliver quality results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-10 flex-col lg:flex-row">
        <div className=" bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden flex-1">
          <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[2px]">
            <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[60px] h-[60px]">
              <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                <Image
                  src={IT_Consulting}
                  alt="service-icon"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div className="text-[#16205F] flex-1">
              <p className="font-semibold text-2xl mb-2 gradient-text">
                IT Consulting
              </p>
              <p className="text-[14px] text-[#4A5568]">
              Our approach is tailored, ensuring your business not only adapts but thrives. From digitizing operations and optimizing your software portfolio to harnessing the power of mobile solutions, we{"'"}re here to elevate your journey every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden flex-1">
          <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[2px]">
            <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[60px] h-[60px]">
              <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                <Image
                  src={SolutionArchitecture}
                  alt="service-icon"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div className="text-[#16205F] flex-1">
              <p className="font-semibold text-2xl mb-2 gradient-text">
                Solution Architecture
              </p>
              <p className="text-[14px] text-[#4A5568]">
              Cut costs and ensure success by creating a solid roadmap before you begin development. From your project{"'"}s inception to its completion—know what to expect and understand the specifics of the work that will need to be done.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-10 flex-col lg:flex-row">
        <div className=" bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden flex-1">
          <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[2px]">
            <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[60px] h-[60px]">
              <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                <Image
                  src={MVP}
                  alt="service-icon"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div className="text-[#16205F] flex-1">
              <p className="font-semibold text-2xl mb-2 gradient-text">
              MVP for Startups and Enterprises
              </p>
              <p className="text-[14px] text-[#4A5568]">
              Leverage on our years of experience in software development for startups to translate your unique ideas into an engaging software product built for generating profit.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-[5px] items-center p-[2px] overflow-hidden flex-1">
          <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[2px]">
            <div className="bg-gradient-to-r from-[#2D7EFF] to-[#57007B] rounded-full items-center p-[1px] overflow-hidden w-[60px] h-[60px]">
              <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                <Image
                  src={Enterprise}
                  alt="service-icon"
                  width={45}
                  height={45}
                />
              </div>
            </div>
            <div className="text-[#16205F] flex-1">
              <p className="font-semibold text-2xl mb-2 gradient-text">
                Enterprise Software Development
              </p>
              <p className="text-[14px] text-[#4A5568]">
              We have expertise in enterprise software development, API integration, modernizing legacy systems, and consolidating app portfolios. We re-engineering solutions of different complexity to become a lasting success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
