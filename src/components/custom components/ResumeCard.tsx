"use client";
import Image from "next/image";
import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MoreVertical } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { AlertDialogFooter, AlertDialogHeader } from "../ui/alert-dialog";

const ResumeCard = ({ resume }: { resume: any }) => {
  console.log("resume as param = ", resume);
  console.log("resume as param = ", resume.attributes.title);
  return (
    <>
      <div
        className="p-14  bg-gradient-to-b
          from-pink-100 via-purple-200 to-blue-200
        h-[280px] 
          rounded-t-lg border-t-4"
      >
        <div
          className="flex 
        items-center justify-center h-[180px] "
        >
          <Image alt="cv icon" src="/cv.png" width={80} height={80} />
        </div>
      </div>
      <div
        className="border p-3 flex justify-between  text-black rounded-b-lg shadow-lg"
        //  style={{
        //   background:resume?.themeColor
        // }}
      >
        <h2 className="text-sm">{resume.attributes.title}</h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
            // onClick={() =>
            //   navigation("/dashboard/resume/" + resume.documentId + "/edit")
            // }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
            // onClick={() =>
            //   navigation("/my-resume/" + resume.documentId + "/view")
            // }
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
            // onClick={() =>
            //   navigation("/my-resume/" + resume.documentId + "/view")
            // }
            >
              Download
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => setOpenAlert(true)}>
              Delete
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog
          open={
            // openAlert
            false
          }
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              {/* <AlertDialogCancel onClick={() => setOpenAlert(false)}> */}
              {/* Cancel */}
              {/* </AlertDialogCancel> */}
              {/* <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
              </AlertDialogAction> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <h2 className="text-center my-1">{resume.title}</h2>
    </>
  );
};

export default ResumeCard;
