import { Skill } from "@/redux/features/types";

import React from "react";

function SkillsPreview({
  skillList,
  themeColor,
}: {
  skillList: Skill[];
  themeColor: string;
}) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: String(themeColor),
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: String(themeColor),
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
                  backgroundColor: String(themeColor),
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
