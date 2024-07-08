"use client";

import EducationalPreview from "../preview/EducationalPreview";
import ExperiencePreview from "../preview/ExperiencePreview";
import PersonalDetailPreview from "../preview/PersonalDetailPreview";
import SkillsPreview from "../preview/SkillsPreview";
import SummeryPreview from "../preview/SummeryPreview";

// import React, { useContext } from "react";

const ResumePreview = ({}: {}) => {
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      // style={{ borderColor: "blue" }}
    >
      {/* Personal Detail  */}
      <PersonalDetailPreview />
      {/* Summery  */}
      <SummeryPreview />
      {/* Professional Experience  */}
      <ExperiencePreview />
      {/* Educational  */}
      {/* {resumeInfo?.education?.length>0&&   <EducationalPreview resumeInfo={resumeInfo} />} */}
      {<EducationalPreview />}
      {/* Skills  */}
      {/* {resumeInfo?.skills?.length>0&&    <SkillsPreview resumeInfo={resumeInfo}/>} */}
      {<SkillsPreview />}
    </div>
  );
};

export default ResumePreview;
