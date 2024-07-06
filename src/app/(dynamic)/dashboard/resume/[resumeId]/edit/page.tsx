import React from "react";
import FormSection from "@/components/custom components/FormSection";
import ResumePreview from "@/components/custom components/ResumePreview";
import { getResume } from "@/service/strapiCms/serverActions";

const EditResume = async ({
  params,
  searchParams,
}: {
  params: { resumeId: string };
  searchParams: any;
}) => {
  const resumeIfo = await getResume(params.resumeId);
  console.log(resumeIfo);

  return (
    // <ContextProvider value={{ dd: "sssss" }}>
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <FormSection resumeInfo={resumeIfo} />
      <ResumePreview />
    </div>
    // </ContextProvider>
  );
};

export default EditResume;
