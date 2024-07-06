"use client";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import React, { FormEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import GlobalApi from "./../../../../../service/GlobalApi";
// import { toast } from "sonner";

import {
  setAddress,
  setEmail,
  setFirstName,
  setJobTitle,
  setLastName,
  setPersonalInfo,
  setPhoneNo,
} from "@/redux/features/resume/personaInfoSlice";

import { useParams } from "next/navigation";

import { savePersonalInfo } from "@/service/strapiCms/serverActions";
import { useAppSelector } from "@/redux/store";

function PersonalDetail({}) {
  const param = useParams<{ resumeId: string }>();

  const dispatch = useDispatch();
  // dispatch(setPersonalInfo())
  const personalInfo = useAppSelector((state) => state.resume.personalInfo);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // getPe
    // console.log("---", resumeInfo);
  }, []);

  const submitPersonalInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    // formData.append("themeColor", "#333333");
    const data = { data: formData };
    const response = savePersonalInfo(param.resumeId, formData);
    setLoading(false);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={(e) => submitPersonalInfo(e)}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={personalInfo?.firstName}
              required
              onChange={(e) => dispatch(setFirstName(e.target.value))}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={(e) => dispatch(setLastName(e.target.value))}
              defaultValue={personalInfo?.lastName}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              onChange={(e) => dispatch(setJobTitle(e.target.value))}
              defaultValue={personalInfo?.jobTitle}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              required
              defaultValue={personalInfo?.address}
              onChange={(e) => dispatch(setAddress(e.target.value))}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={personalInfo?.phone}
              onChange={(e) => dispatch(setPhoneNo(e.target.value))}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={personalInfo?.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
