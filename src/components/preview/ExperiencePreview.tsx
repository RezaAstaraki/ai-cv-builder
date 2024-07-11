"use client";
import { convertToMonthYear } from "@/lib/utils";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

function ExperiencePreview({}) {
  const resumeInfo = useAppSelector((state) => state.resume.experiences);
  const themeColor = useAppSelector(
    (state) => state.resume.personalInfo.themeColor
  );
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: themeColor,
        }}
      />

      {resumeInfo?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: themeColor,
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName},{experience?.city},{experience?.state}
            <span>
              {experience?.startDate &&
                convertToMonthYear(experience?.startDate)}{" "}
              To{" "}
              {experience?.currentlyWorking
                ? "Present"
                : convertToMonthYear(experience.endDate)}{" "}
            </span>
          </h2>
          {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
