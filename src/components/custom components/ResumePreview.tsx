"use client";

import ExperiencePreview from "../preview/ExperiencePreview";
import PersonalDetailPreview from "../preview/PersonalDetailPreview";
import SummeryPreview from "../preview/SummeryPreview";

// import React, { useContext } from "react";

const ResumePreview = ({}: {}) => {
  // const { data, setData } = useContext(ResumeInfo);
  // console.log(ResumeInfo);

  return (
    <div className="shadow-lg h-full p-14 border-t-[20px]">
      {/* Personal Detail  */}
      <PersonalDetailPreview />
      {/* Summery  */}
      <SummeryPreview />
      {/* Professional Experience  */}
      <ExperiencePreview />
      {/* Educational  */}
      {/* {resumeInfo?.education?.length>0&&   <EducationalPreview resumeInfo={resumeInfo} />} */}
      {/* Skills  */}
      {/* {resumeInfo?.skills?.length>0&&    <SkillsPreview resumeInfo={resumeInfo}/>} */}
    </div>
  );
};

export default ResumePreview;
