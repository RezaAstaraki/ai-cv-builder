"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  Captions,
  Cloud,
  Download,
  FilePenLine,
  Loader2Icon,
  LoaderCircle,
  Save,
  SquareGanttChart,
  SquarePen,
  Trash2,
  View,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteRequest } from "@/service/strapiCms/serverActions";
import { Input } from "../ui/input";

const ResumeCard = ({ resume }: { resume: any }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState(resume.attributes.title);
  // const [activeResume, setActiveResume] = useState(-1);
  const onDelete = async () => {
    setLoading(true);
    await deleteRequest(`user-resumes/${resume.id}`);
    setLoading(false);
    setOpenAlert(false);
  };
  // const inputRef = useRef<HTMLElement>();

  const saveTitle = async () => {
    if (title !== resume.attributes.title && title !== "") {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    }
    setEditTitle(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Link
        href={{
          pathname: `/dashboard/resume/${resume.id}/edit`,
        }}
      >
        <div
          className="p-14  bg-gradient-to-b
          from-pink-100 via-purple-200 to-blue-200
        h-[280px] 
          rounded-t-lg border-t-4"
          style={{
            borderColor: resume?.attributes?.themeColor,
          }}
        >
          <div
            className="flex 
        items-center justify-center h-[180px] "
          >
            <Image
              quality={20}
              alt="cv icon"
              src="/cv.png"
              width={80}
              height={80}
              // placeholder="blur"
            />
          </div>
        </div>
      </Link>
      <div
        className="border p-3 flex justify-between items-center  text-black rounded-b-lg shadow-lg"
        style={{
          background: resume?.attributes?.themeColor,
        }}
      >
        <h2 className="text-sm h-[35px] flex items-center">
          <span className="relative flex items-center">
            <Input
              required
              disabled={!editTitle}
              ref={inputRef}
              className={`h-[35px] cursor-text disabled:cursor-default   ${
                !editTitle ? "bg-white/0 border-white/0 " : "bg-white "
              }`}
              value={title || ""}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  await saveTitle();
                } else if (e.key === "Escape") {
                  setTitle(resume.attributes.title);
                  setEditTitle(false);
                }
              }}
            />
            {editTitle &&
              title !== resume.attributes.title &&
              (loading ? (
                <LoaderCircle className="absolute right-2  animate-spin " />
              ) : (
                <Save
                  fill="skyblue"
                  strokeWidth={0.5}
                  className="absolute right-2 cursor-pointer hover:animate-pulse hover:scale-125 transition"
                  onClick={() => {
                    setEditTitle(false);
                  }}
                />
              ))}
          </span>
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical
            // className="h-4 w-4 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onCloseAutoFocus={(e) => {
              e.preventDefault();
              if (inputRef.current) {
                inputRef.current.focus();
                inputRef.current.select();
              }
            }}
          >
            <DropdownMenuItem
              onClick={() => {
                setEditTitle(true);
              }}
            >
              <SquarePen />
              Edit Title
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push(`/dashboard/resume/${resume.id}/edit`)}
            >
              <FilePenLine />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push(`/resume/${resume.id}/view`)}
            >
              <SquareGanttChart />
              View
            </DropdownMenuItem>
            <DropdownMenuItem

            // onClick={() =>
            //   navigation("/my-resume/" + resume.documentId + "/view")
            // }
            >
              <Download />
              Download
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                setOpenAlert(true);
              }}
            >
              <Trash2 />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => onDelete()}
                disabled={loading}
              >
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <h2 className="text-center my-1">{resume.title}</h2>
    </div>
  );
};

export default ResumeCard;
