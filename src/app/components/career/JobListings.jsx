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
    <div className="w-full h-auto flex flex-col gap-[50px] p-7 lg:px-20 lg:pb-10">
      {
        jobs.map((job) => (
          <div key={job.category} className="w-full h-auto">
            <p className="text-3xl font-bold mb-[30px] text-[#16205F]">{job.category}</p>
            {
              job.listings.map((listing, index) => (
                <div key={index} className="bg-white p-4 rounded-[4px] border-[2px] mb-[30px]">
                  <div className="flex gap-[20px] font-semibold text-[18px] text-[#16205F]">
                    <p className="w-[50%]">ROLE</p>
                    <p className="w-[40%]">SKILLS</p>
                    <p className="w-[10%]">LOCATION</p>
                  </div>
                  <div className="w-full h-[1px] bg-gray-300 my-3"></div>
                  <div className="flex gap-[20px]">
                    <div className="w-[50%]">
                      <p className="font-semibold text-[28px] text-[#16205F] mb-2">{listing.role}</p>
                      <p className="text-[#2D3748] text-[16px] font-normal">{listing.description}</p>
                    </div>
                    <div className="w-[40%] flex gap-[12px] flex-wrap">
                      {
                        listing.skills.map((skill, index) => (
                          <div key={index} className="w-auto px-3 py-1 rounded-[7px] text-[#16205F] bg-[#2D7EFF38] font-semibold text-[13px] flex items-center justify-center">{skill}</div>
                        ))
                      }
                    </div>
                    <p className="w-[10%] text-[#16205F] font-semibold text-[18px]">{listing.location}</p>
                  </div>
                  <Link href={`/${job.category}/${listing.role}`} className="flex bg-[#2D7EFF] text-white w-fit p-3 items-center gap-[10px] text-[14px] mt-[30px] rounded-[7px]">
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
