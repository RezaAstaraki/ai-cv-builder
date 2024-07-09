import React from "react";
import FormSection from "@/components/custom components/FormSection";
import ResumePreview from "@/components/custom components/ResumePreview";
import { get, getResume } from "@/service/strapiCms/serverActions";

const EditResume = async ({
  params,
  searchParams,
}: {
  params: { resumeId: string };
  searchParams: any;
}) => {
  const resumeIfo = await getResume(params.resumeId);

  const resumInfobyGet = await get("user-resumes/9?populate=*");
  console.log("resumInfobyGet", resumInfobyGet);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <FormSection resumeInfo={resumInfobyGet} />
      <ResumePreview />
    </div>
  );
};

export default EditResume;
