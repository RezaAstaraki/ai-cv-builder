"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// import RichTextEditor from "../RichTextEditor";

// import GlobalApi from "./../../../../../service/GlobalApi";
// import { toast } from "sonner";
import { LoaderCircle, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  removeExperience,
  addExperience,
  seCompanyName,
  seTitle,
  setCity,
  setCurrentlyWorking,
  setEndDate,
  setStartDate,
  setState_,
  setWorkSummery,
} from "@/redux/features/resume/experiencesSlice";
import { useDispatch } from "react-redux";
import { Textarea } from "../ui/textarea";
import { convertToDateString, convertToMonthYear, isToday } from "@/lib/utils";

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
  const [openDialog, setOpenDialog] = useState(false);
  const [activeExperience, setActiveExperience] = useState(-1);

  const handleSave = async () => {
    console.log(experienceList);
    const body = experienceList.map(({ id, ...rest }: any) => {
      return rest;
    });

    console.log("body = ", body[0]);
  };

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
              <div className="relative grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div
                  className="absolute right-1.5  hover:bg-red-300/30 scale-75 rounded-md border border-solid p-1"
                  onClick={() => {
                    setActiveExperience(index);
                    setOpenDialog(true);
                    // dispatch(removeExperience(index))
                  }}
                >
                  <X />
                </div>
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event) =>
                      dispatch(
                        seTitle({ index: index, newTitle: event.target.value })
                      )
                    }
                    value={item.title}
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
                          index: index,
                          companyName: event.target.value,
                        })
                      )
                    }
                    defaultValue={item?.companyName}
                    value={item?.companyName}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    onChange={(event) =>
                      dispatch(
                        setCity({
                          index: index,
                          city: event.target.value,
                        })
                      )
                    }
                    defaultValue={item?.city}
                    value={item?.city}
                  />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    onChange={(event) =>
                      dispatch(
                        setState_({
                          index: index,
                          state_: event.target.value,
                        })
                      )
                    }
                    defaultValue={item?.state}
                    value={item?.state}
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(event) => {
                      dispatch(
                        setStartDate({
                          index: index,
                          startDate: convertToMonthYear(event.target.value),
                        })
                      );
                    }}
                    defaultValue={convertToDateString(item?.startDate)}
                    value={convertToDateString(item?.startDate)}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(event) => {
                      if (
                        !isToday(event.target.value) &&
                        event.target.value !== ""
                      ) {
                        dispatch(
                          setEndDate({
                            index: index,
                            endDate: convertToMonthYear(event.target.value),
                          })
                        );
                        dispatch(
                          setCurrentlyWorking({
                            index: index,
                            currentlyWorking: false,
                          })
                        );
                      } else {
                        dispatch(
                          setCurrentlyWorking({
                            index: index,
                            currentlyWorking: true,
                          })
                        );
                        dispatch(
                          setEndDate({
                            index: index,
                            endDate: "",
                          })
                        );
                      }
                    }}
                    defaultValue={convertToDateString(item?.endDate)}
                    value={convertToDateString(item?.endDate)}
                  />
                </div>
                <div className="col-span-2">
                  {/* Work Summery  */}
                  <Textarea
                    defaultValue={item?.workSummery}
                    onChange={(event) =>
                      dispatch(
                        setWorkSummery({
                          index: index,
                          workSummery: event.target.value,
                        })
                      )
                    }
                    value={item?.workSummery}
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
              onClick={() => dispatch(addExperience())}
              className="text-primary"
            >
              {" "}
              + Add More Experience
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

      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              Experience data
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => dispatch(removeExperience(activeExperience))}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Experience;
