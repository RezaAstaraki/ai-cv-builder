import React from "react";
import { currentUser } from "@clerk/nextjs/server";

import Link from "next/link";
import { getUserResumes } from "@/service/strapiCms/serverActions";
import AddResume from "@/components/custom components/AddResume";
import ResumeCard from "@/components/custom components/ResumeCard";

// import { toast } from 'sonner'

const DashboardPage = async () => {
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const { data } = await getUserResumes(userEmail);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl pb-5">My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <AddResume />
        {data.length > 0 &&
          data.map((resume: any) => {
            return (
              <Link
                key={resume.id}
                href={{
                  pathname: `/dashboard/resume/${resume.id}/edit`,
                  // query: resume,
                }}
              >
                <ResumeCard resume={resume} key={resume.id} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default DashboardPage;
