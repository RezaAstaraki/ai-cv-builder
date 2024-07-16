"use client";
import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { addResume } from "@/service/strapiCms/serverActions";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
// import { useRouter } from "next/router";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");

  const router = useRouter();
  const { user } = useUser();

  const onCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const title = resumeTitle;
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    const userName = user?.fullName;

    const res = await addResume(title, uuid, userEmail, userName);
    setLoading(false);

    router.push(`dashboard/resume/${res.data.id}/edit`);
  };

  return (
    <div className="min-w-[190px] max-w-[300px]">
      <div
        className="p-14 py-24 flex justify-center items-center border bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointe border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Let's Create a New Resume</DialogTitle>
            <DialogDescription>
              <span className="block ml-3 my-3">Add Title for new Resume</span>
              <Input
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
                className="my-2"
                placeholder="Ex. Full Stack resume"
              />
            </DialogDescription>
            <div className="flex gap-5 justify-end">
              <Button onClick={() => setOpenDialog(false)} variant={"ghost"}>
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => {
                  onCreate();
                }}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
