"use client";
import { Button } from "@/components/ui/button";
import React, {
  FormEvent,
  ReactElement,
  RefObject,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Brain, LoaderCircle } from "lucide-react";

import { useDispatch } from "react-redux";

import { useAppSelector } from "@/redux/store";
import { setSummary } from "@/redux/features/resume/personaInfoSlice";
import {
  generateSummeryFromAI,
  savePersonalInfo,
} from "@/service/strapiCms/serverActions";
import { useParams } from "next/navigation";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnNumberedList,
  BtnRedo,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { toast } from "sonner";

function Summery({
  previousBtn,
  nextBtn,
}: {
  previousBtn?: RefObject<HTMLButtonElement>;
  nextBtn?: RefObject<HTMLButtonElement>;
}) {
  const param = useParams<{ resumeId: string }>();
  const dispatch = useDispatch();
  const personalInfo = useAppSelector((state) => state.resume.personalInfo);

  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState<[]>();
  const [selectedSummary, setSelectedSummary] = useState(-1);

  useLayoutEffect(() => {
    aiGeneratedSummeryList?.forEach((item: any, index) => {
      if (item.summary == personalInfo.summery) {
        setSelectedSummary(index);
      }
    });
  }, [personalInfo.summery]);

  const submitSummary = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    if (personalInfo.themeColor !== "") {
      formData.append("themeColor", String(personalInfo?.themeColor));
    }
    formData.append("summery", String(personalInfo?.summery));
    const data = { data: formData };
    try {
      const response = await savePersonalInfo(param.resumeId, formData);
      toast.success("Saved Successfully");
    } catch {
      toast.error("some thing wrong cannot save data");
    }

    setLoading(false);
  };

  const generateFromAI = async () => {
    setAiLoading(true);
    const jobTitle = personalInfo.jobTitle;
    const prompt =
      "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Fresher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";
    const p = prompt.replace("{jobTitle}", jobTitle);
    if (jobTitle) {
      const res = await generateSummeryFromAI(p);
      // console.log(JSON.parse(res));
      const l = res.replaceAll("```json", "");
      const m = l.replace("```", "");
      // console.log(m);
      // console.log(l);
      setAiGenerateSummeryList(JSON.parse(m));
    } else {
      toast("No Job Title", {
        description: "There is not Job Title you should first Save a Job Title",
        action: {
          label: "Go back",
          onClick: () => previousBtn?.current?.click(),
        },
      });
    }
    setAiLoading(false);
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="min-w-[145px]">Add Summary for your job title</p>

          <Button
            variant="outline"
            onClick={() => generateFromAI()}
            type="button"
            size="sm"
            className="border-primary text-primary flex gap-2"
            disabled={aiLoading}
          >
            {aiLoading ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <Brain className="h-4 w-4" />
            )}{" "}
            Generate from AI
          </Button>
        </div>

        <form onSubmit={async (e) => await submitSummary(e)} className="mt-7">
          <div className="flex justify-between items-end"></div>
          <EditorProvider>
            <Editor
              value={personalInfo.summery}
              onChange={(e) => {
                dispatch(setSummary(e.target.value));
                setSelectedSummary(-1);
              }}
            >
              <Toolbar>
                <BtnUndo />
                <BtnRedo />
                <Separator />
                <BtnBold />
                <BtnItalic />
                <BtnUnderline />
                <Separator />
                <BtnNumberedList />
                <BtnBulletList />
              </Toolbar>
            </Editor>
          </EditorProvider>
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummeryList && (
        <div className={`my-5 `}>
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummeryList.map((item: any, index) => (
            <div
              key={index}
              onClick={() => {
                dispatch(setSummary(item?.summary));
                setSummary(item?.summary);
              }}
              className={`p-5 shadow-lg my-4 rounded-lg cursor-pointer ${
                selectedSummary === index ? "bg-red-300" : ""
              }`}
            >
              <h2 className="font-bold my-1 text-primary">
                Level: {item?.experience_level}
              </h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summery;
