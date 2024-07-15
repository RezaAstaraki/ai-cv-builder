import EducationalPreview from "@/components/preview/EducationalPreview";
import ExperiencePreview from "@/components/preview/ExperiencePreview";
import PersonalDetailPreview from "@/components/preview/PersonalDetailPreview";
import SkillsPreview from "@/components/preview/SkillsPreview";
import SummeryPreview from "@/components/preview/SummeryPreview";
import { getFormattedData } from "@/lib/utils";
import { get } from "@/service/strapiCms/serverActions";
import { cookies } from "next/headers";

import "./loading.scss";

import React from "react";
import BoxSpinner from "@/components/custom components/loadings/BoxSpinner";

const ResumeViewPage = async ({
  params,
}: {
  params: { resume_id: string };
}) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  cookies();
  const response = await get(`user-resumes/${params.resume_id}?populate=*`);
  const data = response.data.attributes;

  const resume = getFormattedData(data);
  const themeColor = resume.personalInfo.themeColor;
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px] mm "
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
          themeColor={themeColor}
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

export default ResumeViewPage;
