"use client";

import PersonalDetailPreview from "../preview/PersonalDetailPreview";

// import React, { useContext } from "react";

const ResumePreview = ({}: {}) => {
  // const { data, setData } = useContext(ResumeInfo);
  // console.log(ResumeInfo);

  return (
    <div className="shadow-lg h-full p-14 border-t-[20px]">
      {/* Personal Detail  */}
      <PersonalDetailPreview resumeInfo={"resumeInfo"} />
      {/* Summery  */}
      {/* <SummeryPreview /> */}
      {/* Professional Experience  */}
      {/* {resumeInfo?.Experience?.length>0&& <ExperiencePreview resumeInfo={resumeInfo} />} */}
      {/* Educational  */}
      {/* {resumeInfo?.education?.length>0&&   <EducationalPreview resumeInfo={resumeInfo} />} */}
      {/* Skills  */}
      {/* {resumeInfo?.skills?.length>0&&    <SkillsPreview resumeInfo={resumeInfo}/>} */}
    </div>
  );
};

export default ResumePreview;
