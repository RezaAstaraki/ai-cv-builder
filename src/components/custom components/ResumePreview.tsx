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
      className="shadow-lg h-full p-4 md:p-6 border-t-[20px] min-w-[350px]"
      style={{ borderColor: themeColor }}
    >
      {/* Personal Detail  */}
      <PersonalDetailPreview personalInfo={resume.personalInfo} />
      {/* Summery  */}
      <SummeryPreview personalInfo={resume.personalInfo} />
      {/* Professional Experience  */}
      {resume.experiences.length > 0 && (
        <ExperiencePreview
          experienceList={resume.experiences}
          themeColor={String(themeColor)}
        />
      )}
      {/* Educational  */}
      {resume.education.length > 0 && (
        <EducationalPreview
          eductionList={resume.education}
          themeColor={String(themeColor)}
        />
      )}
      {/* Skills  */}
      {resume.skill.length > 0 && (
        <SkillsPreview
          skillList={resume.skill}
          themeColor={String(themeColor)}
        />
      )}
    </div>
  );
};

export default ResumePreview;
