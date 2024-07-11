"use client";
import { convertToMonthYear } from "@/lib/utils";
import { useAppSelector } from "@/redux/store";
import React from "react";

function EducationalPreview({}) {
  const themeColor = useAppSelector(
    (state) => state.resume.personalInfo.themeColor
  );
  const eductionList = useAppSelector((state) => state.resume.education);
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: themeColor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: themeColor,
        }}
      />

      {eductionList.map((education: any, index: number) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: themeColor,
            }}
          >
            {education.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree} in {education?.major}
            <span>
              {convertToMonthYear(education?.startDate)} -{" "}
              {convertToMonthYear(education?.endDate)}
            </span>
          </h2>
          <p className="text-xs my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
