import UX_Driven from "../../../../public/ux_driven.svg";
import SharedUnderstanding from "../../../../public/shared_understanding.svg";
import ExperienceExpertise from "../../../../public/experience_expertise.svg";
import SecurityIP from "../../../../public/security_ip.svg";
import CodeReviews from "../../../../public/code_reviews.svg";
import QualityAssurance from "../../../../public/quality_assurance.svg";
import Image from "next/image";
const WorkApproach = () => {
  return (
    <div className="flex flex-col items-center bg-[#F7F7FA] p-7 lg:px-20 lg:py-16 h-auto z-10">
      <div className="bg-[#2D7EFF] h-[4px] w-[70px] mb-[10px]"></div>
      <p className="text-[#1A202C] text-3xl leading-[45px] max-w-[400px] text-center mb-[30px] lg:mb-[100px]">
        Our design and <span className="font-bold">development approach</span>
      </p>
      <div className="flex flex-wrap w-full justify-between gap-y-[50px] gap-x-10">
        <div className="flex w-full justify-between gap-10 flex-col lg:flex-row">
          <div className="flex-1 bg-[#E7DAED] rounded-[5px] items-center p-[1px] overflow-hidden">
            <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[4px]">
              <div className="h-[60px] w-[60px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#29272E] to-[#29272E]">
                <Image
                  src={UX_Driven}
                  alt="process-icon"
                  width={45}
                  height={45}
                />
              </div>
              <div className="text-[#16205F] flex-1">
                <p className="font-semibold text-2xl mb-2 text-[#1A202C]">
                  UX Driven Engineering
                </p>
                <p className="text-[14px] text-[#4A5568]">
                  Unlike other companies, we are a UX first development company.
                  Projects are driven by designers and they make sure design and
                  experiences translate to code.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#E7DAED] rounded-[5px] items-center p-[1px] overflow-hidden">
            <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[4px]">
              <div className="h-[60px] w-[60px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#68DBF2] to-[#509CF5]">
                <Image
                  src={SharedUnderstanding}
                  alt="process-icon"
                  width={45}
                  height={45}
                />
              </div>
              <div className="text-[#16205F] flex-1">
                <p className="font-semibold text-2xl mb-2 text-[#1A202C]">
                  Developing Shared Understanding
                </p>
                <p className="text-[14px] text-[#4A5568]">
                  We foster a collaborative environment where designers,
                  developers, and clients work together seamlessly. This ensures
                  a shared understanding of project goals and user needs,
                  leading to a more successful outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between gap-10 flex-col lg:flex-row">
          <div className="flex-1 bg-[#E7DAED] rounded-[5px] items-center p-[1px] overflow-hidden">
            <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[4px]">
              <div className="h-[60px] w-[60px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#FF92AE] to-[#FF3D9A]">
                <Image
                  src={ExperienceExpertise}
                  alt="process-icon"
                  width={45}
                  height={45}
                />
              </div>
              <div className="text-[#16205F] flex-1">
                <p className="font-semibold text-2xl mb-2 text-[#1A202C]">
                  Proven Experience and Expertise
                </p>
                <p className="text-[14px] text-[#4A5568]">
                  Our team boasts extensive experience across various
                  technologies and industries. We leverage this expertise to
                  deliver innovative and effective software solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#E7DAED] rounded-[5px] items-center p-[1px] overflow-hidden">
            <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[4px]">
              <div className="h-[60px] w-[60px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#67E9F1] to-[#24E795]">
                <Image
                  src={SecurityIP}
                  alt="process-icon"
                  width={45}
                  height={45}
                />
              </div>
              <div className="text-[#16205F] flex-1">
                <p className="font-semibold text-2xl mb-2 text-[#1A202C]">
                  Security & Intellectual Property (IP)
                </p>
                <p className="text-[14px] text-[#4A5568]">
                  We prioritize the security of your data and intellectual
                  property. We employ industry-standard security practices and
                  ensure your ideas stay protected.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between gap-10 flex-col lg:flex-row">
          <div className="flex-1 bg-[#E7DAED] rounded-[5px] items-center p-[1px] overflow-hidden">
            <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[4px]">
              <div className="h-[60px] w-[60px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]">
                <Image
                  src={CodeReviews}
                  alt="process-icon"
                  width={45}
                  height={45}
                />
              </div>
              <div className="text-[#16205F] flex-1">
                <p className="font-semibold text-2xl mb-2 text-[#1A202C]">
                  Code Reviews
                </p>
                <p className="text-[14px] text-[#4A5568]">
                Our developers conduct rigorous code reviews throughout the development process. This ensures code quality, maintainability, and adherence to best practices.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#E7DAED] rounded-[5px] items-center p-[1px] overflow-hidden">
            <div className="bg-white text-[#16205F] flex flex-col lg:flex-row gap-[20px] h-full p-7 rounded-[4px]">
              <div className="h-[60px] w-[60px] rounded-[10px] flex items-center justify-center bg-gradient-to-r from-[#F76680] to-[#57007B]">
                <Image
                  src={QualityAssurance}
                  alt="process-icon"
                  width={45}
                  height={45}
                />
              </div>
              <div className="text-[#16205F] flex-1">
                <p className="font-semibold text-2xl mb-2 text-[#1A202C]">
                Quality Assurance & Testing
                </p>
                <p className="text-[14px] text-[#4A5568]">
                We implement a comprehensive testing strategy throughout the development lifecycle. This ensures your software functions flawlessly and delivers a seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkApproach;
