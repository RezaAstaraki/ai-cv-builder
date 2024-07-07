"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
// import RichTextEditor from "../RichTextEditor";

// import GlobalApi from "./../../../../../service/GlobalApi";
// import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  seCompanyName,
  seTitle,
  setCity,
  setState_,
  setWorkSummery,
} from "@/redux/features/resume/experiencesSlice";
import { useDispatch } from "react-redux";
import { Textarea } from "../ui/textarea";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};
function Experience() {
  const experienceList = useAppSelector((state) => state.resume.experiences);
  // const [experienceList, setExperienceList] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   resumeInfo?.Experience.length > 0 &&
  //     setExperienceList(resumeInfo?.Experience);
  // }, []);

  // const handleChange = (index, event) => {
  //   const newEntries = experienceList.slice();
  //   const { name, value } = event.target;
  //   newEntries[index][name] = value;
  //   console.log(newEntries);
  //   setExperienceList(newEntries);
  // };

  // const AddNewExperience = () => {
  //   setExperienceList([
  //     ...experienceList,
  //     {
  //       title: "",
  //       companyName: "",
  //       city: "",
  //       state: "",
  //       startDate: "",
  //       endDate: "",
  //       workSummery: "",
  //     },
  //   ]);
  // };

  // const RemoveExperience = () => {
  //   setExperienceList((experienceList) => experienceList.slice(0, -1));
  // };

  // const handleRichTextEditor = (e, name, index) => {
  //   const newEntries = experienceList.slice();
  //   newEntries[index][name] = e.target.value;

  //   setExperienceList(newEntries);
  // };

  // useEffect(() => {
  //   setResumeInfo({
  //     ...resumeInfo,
  //     Experience: experienceList,
  //   });
  // }, [experienceList]);

  // const onSave = () => {
  //   setLoading(true);
  //   const data = {
  //     data: {
  //       Experience: experienceList.map(({ id, ...rest }) => rest),
  //     },
  //   };

  //   console.log(experienceList);

  //   GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
  //     (res) => {
  //       console.log(res);
  //       setLoading(false);
  //       toast("Details updated !");
  //     },
  //     (error) => {
  //       setLoading(false);
  //     }
  //   );
  // };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event) =>
                      dispatch(
                        seTitle({ id: index + 1, newTitle: event.target.value })
                      )
                    }
                    defaultValue={item?.title}
                  />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(event) =>
                      dispatch(
                        seCompanyName({
                          id: index + 1,
                          companyName: event.target.value,
                        })
                      )
                    }
                    defaultValue={item?.companyName}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    onChange={(event) =>
                      dispatch(
                        setCity({
                          id: index + 1,
                          city: event.target.value,
                        })
                      )
                    }
                    defaultValue={item?.city}
                  />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    onChange={(event) =>
                      dispatch(
                        setState_({
                          id: index + 1,
                          state_: event.target.value,
                        })
                      )
                    }
                    defaultValue={item?.state}
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    // onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.startDate}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    // onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.endDate}
                  />
                </div>
                <div className="col-span-2">
                  {/* Work Summery  */}
                  <Textarea
                    defaultValue={item?.workSummery}
                    onChange={(event) =>
                      dispatch(
                        setWorkSummery({
                          id: index + 1,
                          workSummery: event.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              // onClick={AddNewExperience}
              className="text-primary"
            >
              {" "}
              + Add More Experience
            </Button>
            <Button
              variant="outline"
              // onClick={RemoveExperience}
              className="text-primary"
            >
              {" "}
              - Remove
            </Button>
          </div>
          <Button
            disabled={loading}
            // onClick={() => onSave()}
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
