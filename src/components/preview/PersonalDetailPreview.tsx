"use client";

import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";

function PersonalDetailPreview({ resumeInfo }: { resumeInfo: any }) {
  const personalInfo = useAppSelector((state) => state.resume.personalInfo);
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: personalInfo?.themeColor,
        }}
      >
        {personalInfo?.firstName} {personalInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {personalInfo?.jobTitle}
      </h2>
      <h2
        className="text-center font-normal text-xs"
        style={{
          color: personalInfo?.themeColor,
        }}
      >
        {personalInfo?.address}
      </h2>

      <div className="flex justify-between">
        <h2
          className="font-normal text-xs"
          style={{
            color: personalInfo?.themeColor,
          }}
        >
          {personalInfo?.phone}
        </h2>
        <h2
          className="font-normal text-xs"
          style={{
            color: personalInfo?.themeColor,
          }}
        >
          {personalInfo?.email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: personalInfo?.themeColor,
        }}
      />
    </div>
  );
}

export default PersonalDetailPreview;
