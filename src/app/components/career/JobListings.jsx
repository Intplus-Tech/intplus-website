import Link from "next/link";
import Image from "next/image";

const JobListings = () => {

  const jobs = [
    {
      category: "Developer",
      listings: [
        {
          role: "Senior Web Full Stack Developer",
          description: "Seniority in development is not just about how much time you have already spent behind the computer screen. It's the way you think, how you approach problems and their solutions, the responsibility you take on and feel.",
          skills: ['Node.js', 'React js', 'Vue js', 'Typescript', 'JavaScript', 'Next js', 'Amplify', 'AWS', 'Terraform', 'C# and .NET', 'GraphQL', 'Serverless Framework'],
          location: "Remote"
        },
        {
          role: "Junior Web Full Stack Developer",
          description: "Seniority in development is not just about how much time you have already spent behind the computer screen. It's the way you think, how you approach problems and their solutions, the responsibility you take on and feel.",
          skills: ['Node.js', 'React js', 'Vue js', 'Typescript', 'JavaScript', 'Next js', 'Amplify', 'AWS', 'Terraform', 'C# and .NET', 'GraphQL', 'Serverless Framework'],
          location: "Remote"
        },
        {
          role: "Senior Web Full Stack Developer",
          description: "Seniority in development is not just about how much time you have already spent behind the computer screen. It's the way you think, how you approach problems and their solutions, the responsibility you take on and feel.",
          skills: ['Node.js', 'React js', 'Vue js', 'Typescript', 'JavaScript', 'Next js', 'Amplify', 'AWS', 'Terraform', 'C# and .NET', 'GraphQL', 'Serverless Framework'],
          location: "Remote"
        },
      ]
    },
    {
      category: "Designer",
      listings: [
        {
          role: "Senior UI/UX Designer",
          description: "As a Senior UI/UX Designer, you will create beautiful and intuitive experiences.",
          skills: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'HTML/CSS', 'JavaScript'],
          location: "Remote"
        },
        {
          role: "Junior UI/UX Designer",
          description: "As a Junior UI/UX Designer, you will assist in creating beautiful and intuitive experiences.",
          skills: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'HTML/CSS'],
          location: "Remote"
        }
      ]
    }
  ];

  return (
    <div className="w-full h-auto flex flex-col gap-[50px] p-7 lg:px-20 lg:pb-10 bg-[#F9F9FF]">
      {
        jobs.map((job) => (
          <div key={job.category} className="w-full h-auto text-[#16205F]">
            <p className="text-3xl font-bold mb-[30px] ">{job.category}</p>
            {
              job.listings.map((listing, index) => (
                <div key={index} className="bg-white p-5 rounded-[4px] border-[2px] mb-[30px]">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col gap-[20px] w-full lg:w-[50%] mb-[50px]">
                      <p className="font-semibold text-[18px]">ROLE</p>
                      <div className="w-full h-[1px] bg-gray-300 my-1"></div>
                      <p className="font-semibold text-[28px] mb-1 lg:pr-[50px]">{listing.role}</p>
                      <p className="text-[#2D3748] text-[16px] font-normal lg:pr-[50px]">{listing.description}</p>

                    </div>
                    <div className="flex flex-col gap-[20px] w-full lg:w-[40%] mb-[50px]">
                      <p className="font-semibold text-[18px]">SKILLS</p>
                      <div className="w-full h-[1px] bg-gray-300 my-1 hidden lg:flex"></div>
                      <div className="flex gap-[12px] flex-wrap lg:pr-[30px]">
                        {
                          listing.skills.map((skill, index) => (
                            <div key={index} className="w-auto px-3 py-1 rounded-[7px] bg-[#2D7EFF38] font-semibold text-[13px] flex items-center justify-center">{skill}</div>
                          ))
                        }
                      </div>
                    </div>
                    <div className="flex flex-col gap-[10px] lg:gap-[20px] w-full lg:w-[10%] mb-[50px]">
                      <p className="font-semibold text-[18px]">LOCATION</p>
                      <div className="w-full h-[1px] bg-gray-300 my-1 hidden lg:flex"></div>
                      <p className="font-semibold text-[18px]">{listing.location}</p>
                    </div>
                  </div>
                  <Link href={`/${job.category}/${listing.role}`} className="flex bg-[#2D7EFF] text-white w-fit p-3 items-center gap-[10px] text-[14px] lg:mt-[30px] rounded-[7px]">
                    APPLY NOW
                    <Image src="/arrow_foRward.svg" alt="" width={16} height={16} />
                  </Link>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default JobListings;
