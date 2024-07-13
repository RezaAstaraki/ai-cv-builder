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

      <div
        className={`grid sm:grid-cols-1 gap-3 my-4 md:${
          skillList.length > 8 ? "grid-cols-3" : "grid-cols-2"
        }`}
      >
        {skillList.map((skill: Skill, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between gap-10 max-w-[250px] "
          >
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
