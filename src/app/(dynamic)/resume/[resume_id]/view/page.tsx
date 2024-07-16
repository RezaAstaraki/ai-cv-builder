import EducationalPreview from "@/components/preview/EducationalPreview";
import ExperiencePreview from "@/components/preview/ExperiencePreview";
import PersonalDetailPreview from "@/components/preview/PersonalDetailPreview";
import SkillsPreview from "@/components/preview/SkillsPreview";
import SummeryPreview from "@/components/preview/SummeryPreview";
import { capitalizeFirstLetter, getFormattedData } from "@/lib/utils";
import { get } from "@/service/strapiCms/serverActions";
import { cookies, headers } from "next/headers";

import "./loading.scss";

import React from "react";
import ShareComponent from "@/components/custom components/ShareComponent";
import { Button } from "@/components/ui/button";

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

  const firstName = capitalizeFirstLetter(data.firstName);
  const lastName = capitalizeFirstLetter(data.lastName);

  // console.log(data);

  return (
    <div>
      <div className="flex flex-row justify-around p-5">
        {" "}
        <ShareComponent
          shareData={{
            text: `Hi i am ${firstName} ${lastName} you can see my CV here`,
            title: `${firstName}-${lastName}-Resume`,
          }}
        />
        <Button>Download</Button>
      </div>
      <div
        className="shadow-lg h-full p-5 md:p-14 border-t-[20px] mm "
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
    </div>
  );
};

export default ResumeViewPage;
