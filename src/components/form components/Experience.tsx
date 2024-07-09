"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

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
import { useAppSelector } from "@/redux/store";
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
import { savePersonalInfo } from "@/service/strapiCms/serverActions";

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
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [activeExperience, setActiveExperience] = useState(-1);
  const themeColor = useAppSelector(
    (state) => state.resume.personalInfo.themeColor
  );

  const handleSave = async () => {
    const body = JSON.stringify({
      data: {
        ...(themeColor && { themeColor }),
        experience: experienceList.map(({ id, ...rest }: any) => {
          if (rest.endDate === "") {
            rest.endDate = null;
          }
          return rest;
        }),
      },
    });
    const res = await savePersonalInfo(String(params.resumeId), body);
  };

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
                    //defaultValue={item?.title}
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
                    //defaultValue={item?.companyName}
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
                    //defaultValue={item?.city}
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
                    //defaultValue={item?.state}
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
                          startDate: event.target.value,
                        })
                      );
                    }}
                    //defaultValue={convertToDateString(item?.startDate)}
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
                            endDate: event.target.value,
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
                    //defaultValue={convertToDateString(item?.endDate)}
                    value={convertToDateString(item?.endDate)}
                  />
                </div>
                <div className="col-span-2">
                  {/* Work Summery  */}
                  <Textarea
                    //defaultValue={item?.workSummery}
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
