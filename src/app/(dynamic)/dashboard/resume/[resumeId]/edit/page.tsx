"use client";

import React, { useEffect, useState } from "react";
import FormSection from "@/components/custom components/FormSection";
import ResumePreview from "@/components/custom components/ResumePreview";
import { getResume } from "@/service/strapiCms/serverActions";
import { useDispatch } from "react-redux";
import { setResumeData } from "@/redux/features/resume/resumeSlice";
import { getFormattedData } from "@/lib/utils";

const EditResume = ({ params }: { params: { resumeId: string } }) => {
  const [resumeInfo, setResumeInfo] = useState<any>(null);
  const [dd, setDd] = useState<any>(null);

  const dispatch = useDispatch();
  useEffect(() => {
    const getResumeInfo = async () => {
      const response = await getResume(params.resumeId);
      const data = response.data.attributes;

      const formattedData = getFormattedData(data);

      // Set the formatted data to state
      setDd(formattedData);
      setResumeInfo(formattedData);
    };
    getResumeInfo();
  }, [params.resumeId]);

  useEffect(() => {
    if (dd) {
      dispatch(setResumeData(dd));
    }
  }, [dd, dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      {resumeInfo && (
        <>
          <FormSection />
          <ResumePreview />
        </>
      )}
    </div>
  );
};

export default EditResume;
