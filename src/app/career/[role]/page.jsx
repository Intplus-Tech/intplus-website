import React from "react";
import { Calistoga } from "next/font/google";
import jobs from "../DummyJobs";
import { notFound } from "next/navigation";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

const formatRole = (role) => {
  return role
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const findJobDetails = (role) => {
  for (const category of jobs) {
    const job = category.listings.find(
      (listing) => listing.role.toLowerCase().replace(/\s+/g, "-") === role
    );
    if (job) {
      return job;
    }
  }
  return null;
};

const JobDetails = ({ params }) => {
  const role = params.role;
  const job = findJobDetails(role);
  const Role = job ? job.role : formatRole(role);

  if (!job) {
    notFound();
    return null;
  }

  return (
    <div>
      <header className="w-full h-auto pt-10 shadow-xl flex flex-col gap-5 items-center">
        <div className="flex gap-1 items-center">
          <div
            className={`${calistoga.variable} font-calistoga bg-[#0088CC] w-auto flex py-[2px] px-3 rounded-[1px]`}
          >
            <p className="text-xl font-medium text-white">
              int<sup className="text-base">+</sup>
            </p>
          </div>
          <p className="text-black font-semibold text-lg">Technology</p>
        </div>
        <p className="font-semibold text-lg">{Role}</p>
        <div className="flex gap-1">
          <div>{job.location}</div>
        </div>
      </header>
      <div className="p-5">
        <p className="flex justify-center font-semibold italic">Job details coming!</p>
      </div>
    </div>
  );
};

export default JobDetails;
