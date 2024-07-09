"use client";
import { Skill } from "@/redux/features/types";
import { useAppSelector } from "@/redux/store";

import { useParams } from "next/navigation";
import React from "react";

function SkillsPreview() {
  const themeColor = useAppSelector(
    (state) => state.resume.personalInfo.themeColor
  );
  const skillList = useAppSelector((state) => state.resume.skill);

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: themeColor,
        }}
      />

      <div className="grid grid-cols-2 gap-3 my-4">
        {skillList.map((skill: Skill, index: number) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-xs">{skill.name}</h2>
            <div className="h-2 bg-gray-200 w-[120px]">
              <div
                className="h-2"
                style={{
                  backgroundColor: themeColor,
                  width: skill?.rating + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
