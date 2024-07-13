import ResumePreview from "@/components/custom components/ResumePreview";
import { get } from "@/service/strapiCms/serverActions";

import React from "react";

const ResumeViewPage = async ({
  params,
}: {
  params: { resume_id: string };
}) => {
  const data = await get(`user-resumes/${params.resume_id}?populate=*`);
  console.log(data);
  return (
    <>
      <ResumePreview />
    </>
  );
};

export default ResumeViewPage;
