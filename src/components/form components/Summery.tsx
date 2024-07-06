import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import GlobalApi from "./../../../../../service/GlobalApi";
import { Brain, LoaderCircle } from "lucide-react";
// import { toast } from "sonner";
// import { AIChatSession } from "./../../../../../service/AIModal";

import { useDispatch, useSelector } from "react-redux";

import { useAppSelector } from "@/redux/store";
import { Textarea } from "../ui/textarea";
import { setSummary } from "@/redux/features/resume/personaInfoSlice";

const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";
function Summery({}) {
  const dispatch = useDispatch();
  const personalInfo = useAppSelector((state) => state.resume.personalInfo);

  // const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState();

  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    // const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
    // console.log(PROMPT);
    // const result = await AIChatSession.sendMessage(PROMPT);
    // console.log(JSON.parse(result.response.text()));

    // setAiGenerateSummeryList(JSON.parse(result.response.text()));
    setLoading(false);
  };

  // const onSave = (e) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   const data = {
  //     data: {
  //       summery: summery,
  //     },
  //   };
  //   GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
  //     (resp) => {
  //       console.log(resp);
  //       enabledNext(true);
  //       setLoading(false);
  //       toast("Details updated");
  //     },
  //     (error) => {
  //       setLoading(false);
  //     }
  //   );
  // };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summery</h2>
        <p>Add Summery for your job title</p>

        <form
          className="mt-7"
          // onSubmit={onSave}
        >
          <div className="flex justify-between items-end">
            <label>Add Summery</label>
            <Button
              variant="outline"
              onClick={() => GenerateSummeryFromAI()}
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
            >
              <Brain className="h-4 w-4" /> Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            // value={summery}
            // defaultValue={summery ? summery : resumeInfo?.summery}
            onChange={(e) => dispatch(setSummary(e.target.value))}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
      {/* 
      {aiGeneratedSummeryList && (
        <div className="my-5">
          <h2 className="font-bold text-lg">Suggestions</h2>
          {aiGeneratedSummeryList?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSummery(item?.summary)}
              className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
            >
              <h2 className="font-bold my-1 text-primary">
                Level: {item?.experience_level}
              </h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default Summery;
