"use client";
import React, { useEffect, useState } from "react";

import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import Link from "next/link";

import {
  dummy,
  getResume,
  revalidateDashboard,
} from "@/service/strapiCms/serverActions";
import { useParams, useRouter } from "next/navigation";
import ThemeColor from "./ThemeColor";
import { Button } from "../ui/button";
import PersonalDetail from "../form components/PersonalDetail";
import Summery from "../form components/Summery";
import Experience from "../form components/Experience";
import Education from "../form components/Education";
import Skills from "../form components/Skills";
import { useAppSelector } from "@/redux/store";

const FormSection = () => {
  const params = useParams();
  const resumeId = params.resumeId;
  const router = useRouter();
  const [formIndex, setFormIndex] = useState(0);

  const state = useAppSelector((state) => state.resume);

  useEffect(() => {
    if (formIndex === 5) {
      router.push(`/resume/${resumeId}/view`);
    }
  }, [formIndex]);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <Link
              href={`/dashboard`}
              onClick={() => {
                console.log("home hit");
                dummy();
              }}
            >
              <Button>
                <Home />
              </Button>
            </Link>
            <ThemeColor />
          </div>
          <div className="flex gap-2">
            {formIndex > 0 && (
              <Button
                size="sm"
                onClick={() => setFormIndex((prev) => prev - 1)}
              >
                <ArrowLeft />
              </Button>
            )}
            {/* } */}
            <Button
              // disabled={!enableNext}
              className="flex gap-2"
              size="sm"
              onClick={() => {
                setFormIndex((prev) => prev + 1);
              }}
            >
              {" "}
              Next
              <ArrowRight />{" "}
            </Button>
          </div>
        </div>
        {formIndex === 0 && <PersonalDetail />}
        {formIndex === 1 && <Summery />}
        {formIndex === 2 && <Experience />}
        {formIndex === 3 && <Education />}
        {formIndex === 4 && <Skills />}
      </div>
    </div>
  );
};

export default FormSection;
