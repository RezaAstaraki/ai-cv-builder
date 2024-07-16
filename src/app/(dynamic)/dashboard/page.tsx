import React, { Suspense } from "react";
import { currentUser } from "@clerk/nextjs/server";

import { getUserResumes } from "@/service/strapiCms/serverActions";
import AddResume from "@/components/custom components/AddResume";
import ResumeCard from "@/components/custom components/ResumeCard";
import LoadingCard from "@/components/custom components/loadings/LoadingCard";

// import { toast } from 'sonner'
const ResumeCards = async () => {
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const { data } = await getUserResumes(userEmail);
  return (
    <>
      {data.length > 0 &&
        data.map((resume: any) => {
          return <ResumeCard resume={resume} key={resume.id} />;
        })}
    </>
  );
};

const DashboardPage = async () => {
  return (
    <div className="p-5 md:p-14 md:px-20 lg:px-32 ">
      <h2 className="font-bold text-3xl pb-5">My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className="mt-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Suspense fallback={<h1 className="text-4xl">loading</h1>}>
          <AddResume />
        </Suspense>
        <Suspense
          fallback={[1, 2, 3].map((item) => (
            <LoadingCard key={item} />
          ))}
        >
          <ResumeCards />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardPage;
