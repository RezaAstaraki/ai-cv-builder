import { getFormattedData } from "@/lib/utils";
import { get } from "@/service/strapiCms/serverActions";

import React from "react";

const ResumeViewPage = async ({
  params,
}: {
  params: { resume_id: string };
}) => {
  const response = await get(`user-resumes/${params.resume_id}?populate=*`);
  const data = response.data.attributes;

  const resume = getFormattedData(data);
  const themeColor = resume.personalInfo.themeColor;
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: themeColor }}
    >
      {/* Personal Detail  */}
      <PersonalDetailPreview personalInfo={resume.personalInfo} />
      {/* Summery  */}
      <SummeryPreview personalInfo={resume.personalInfo} />
      {/* Professional Experience  */}
      {resume.experiences.length > 0 && <ExperiencePreview />}
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
