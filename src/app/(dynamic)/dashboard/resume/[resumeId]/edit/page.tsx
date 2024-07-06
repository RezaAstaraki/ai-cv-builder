import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import FormSection from "@/components/custom components/FormSection";
import ResumePreview from "@/components/custom components/ResumePreview";

const EditResume = async ({
  params,
  searchParams,
}: {
  params: { resumeId: string };
  searchParams: any;
}) => {
  // const { resumeId, title } = searchParams;
  return (
    // <ContextProvider value={{ dd: "sssss" }}>
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <FormSection />
      <ResumePreview />
    </div>
    // </ContextProvider>
  );
};

export default EditResume;
