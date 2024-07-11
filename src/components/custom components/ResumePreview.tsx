"use client";

import { useAppSelector } from "@/redux/store";
import EducationalPreview from "../preview/EducationalPreview";
import ExperiencePreview from "../preview/ExperiencePreview";
import PersonalDetailPreview from "../preview/PersonalDetailPreview";
import SkillsPreview from "../preview/SkillsPreview";
import SummeryPreview from "../preview/SummeryPreview";

// import React, { useContext } from "react";

const ResumePreview = () => {
  const themeColor = useAppSelector(
    (state) => state.resume.personalInfo?.themeColor
  );
  const resume = useAppSelector((state) => state.resume);

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: themeColor }}
    >
      {/* Personal Detail  */}
      <PersonalDetailPreview />
      {/* Summery  */}
      <SummeryPreview />
      {/* Professional Experience  */}
      {resume.experiences.length > 0 && <ExperiencePreview />}
      {/* Educational  */}
      {resume.education.length > 0 && <EducationalPreview />}
      {/* Skills  */}
      {/* {resumeInfo?.skills?.length>0&&    <SkillsPreview resumeInfo={resumeInfo}/>} */}
      {resume.skill.length > 0 && <SkillsPreview />}
    </div>
  );
};

export default ResumePreview;
