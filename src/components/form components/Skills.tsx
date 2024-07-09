"use client";

import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { LoaderCircle, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  addSkill,
  removeSkill,
  setSkillName,
  setSkillRating,
} from "@/redux/features/resume/skillSlice";
import { Skill } from "@/redux/features/types";
import { savePersonalInfo } from "@/service/strapiCms/serverActions";
// import { toast } from 'sonner'
function Skills() {
  const skillsList = useAppSelector((state) => state.resume.skill);
  const { resumeId } = useParams();

  const themeColor = useAppSelector(
    (state) => state.resume.personalInfo.themeColor
  );
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    const body = JSON.stringify({
      data: {
        ...(themeColor && { themeColor }),
        skills: skillsList.map(({ id, ...rest }: any) => {
          if (rest.endDate === "") {
            rest.endDate = null;
          }
          return rest;
        }),
      },
    });
    const res = await savePersonalInfo(String(resumeId), body);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add Your top professional key skills</p>

      <div>
        {skillsList.map((item: Skill, index: number) => (
          <div
            key={index}
            className="flex justify-between mb-2 border rounded-lg p-3 relative"
          >
            <div
              className="absolute right-1.5 top-0  hover:bg-red-300/30 scale-[60%] rounded-md border border-solid p-1"
              onClick={() => {
                dispatch(removeSkill(index));
              }}
            >
              <X />
            </div>
            <div>
              <label className="text-xs">Name</label>
              <Input
                className="w-full"
                defaultValue={item.name}
                onChange={(e) =>
                  dispatch(setSkillName({ index: index, name: e.target.value }))
                }
                value={item.name}
              />
            </div>
            <Rating
              className="mt-4"
              style={{ maxWidth: 120 }}
              value={item.rating / 20}
              onChange={(e: number) => {
                dispatch(setSkillRating({ index: index, rating: e * 20 }));
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => dispatch(addSkill())}
            className="text-primary"
          >
            {" "}
            + Add More Skill
          </Button>
        </div>
        <Button
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            await handleSave();
            setLoading(false);
          }}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Skills;
