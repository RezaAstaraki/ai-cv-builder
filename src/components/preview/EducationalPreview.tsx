import { convertToMonthYear } from "@/lib/utils";
import { Education } from "@/redux/features/types";
import React from "react";

function EducationalPreview({
  eductionList,
  themeColor,
}: {
  eductionList: Education[];
  themeColor: string;
}) {
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
          <div
            className="rsw-ce rsw-ce text-xs my-2"
            dangerouslySetInnerHTML={{ __html: education?.description }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
