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
import { useDispatch } from "react-redux";
import { Textarea } from "../ui/textarea";
import { convertToDateString, convertToMonthYear, isToday } from "@/lib/utils";
import { savePersonalInfo } from "@/service/strapiCms/serverActions";
import {
  addEducation,
  removeEducation,
  setDegree,
  setDescription,
  setEndDate,
  setMajor,
  setStartDate,
  setUniversityName,
} from "@/redux/features/resume/educationSlice";
import RichTextEditor from "../custom components/rich text editor/RichTextEditor";

function Education() {
  const educationList = useAppSelector((state) => state.resume.education);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [activeFields, setActiveFields] = useState(-1);
  const themeColor = useAppSelector(
    (state) => state.resume.personalInfo.themeColor
  );

  const handleSave = async () => {
    const body = JSON.stringify({
      data: {
        ...(themeColor && { themeColor }),
        education: educationList.map(({ id, ...rest }: any) => {
          if (rest.endDate === "") {
            rest.endDate = null;
          }
          return rest;
        }),
      },
    });
    // console.log(body);
    const res = await savePersonalInfo(String(params.resumeId), body);
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Education</h2>
        <p className="">Add Your education details</p>
        <div>
          {educationList.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 relative  my-3 hover:shadow-inner shadow-md"
            >
              <div
                className="absolute right-2  top-0.5 hover:bg-red-300/30 scale-75 rounded-md border border-solid p-1"
                onClick={() => {
                  setActiveFields(index);
                  setOpenDialog(true);
                }}
              >
                <X />
              </div>
              <div>
                <label className="text-xs">University Name</label>
                <Input
                  name="universityName"
                  onChange={(event) =>
                    dispatch(
                      setUniversityName({
                        index: index,
                        universityName: event.target.value,
                      })
                    )
                  }
                  value={item.universityName}
                  //defaultValue={item?.universityName}
                />
              </div>
              <div className="grid grid-cols-2 gap-3   my-5 ">
                <div>
                  <label className="text-xs">Degree</label>
                  <Input
                    name="degree"
                    onChange={(event) =>
                      dispatch(
                        setDegree({
                          index: index,
                          degree: event.target.value,
                        })
                      )
                    }
                    value={item?.degree}
                  />
                </div>
                <div>
                  <label className="text-xs">Major</label>
                  <Input
                    name="major"
                    onChange={(event) =>
                      dispatch(
                        setMajor({
                          index: index,
                          major: event.target.value,
                        })
                      )
                    }
                    value={item?.major}
                  />
                </div>

                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    required
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
                    value={item?.startDate || ""}
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
                      } else {
                        dispatch(
                          setEndDate({
                            index: index,
                            endDate: "",
                          })
                        );
                      }
                    }}
                    value={item?.endDate || ""}
                  />
                </div>
                <div className="col-span-2">
                  {/* Description  */}
                  <RichTextEditor
                    label="Add Description"
                    onRichTextChange={(event) =>
                      dispatch(
                        setDescription({
                          index: index,
                          description: event.target.value,
                        })
                      )
                    }
                    initialValue={item?.description}
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
              onClick={() => dispatch(addEducation())}
              className="text-primary"
            >
              {" "}
              + Add More Education
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
              onClick={() => dispatch(removeEducation(activeFields))}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Education;
