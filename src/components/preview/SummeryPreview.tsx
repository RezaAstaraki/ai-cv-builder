"use client";

import { RootState, useAppSelector } from "@/app/redux/store";
import { useSelector } from "react-redux";

function SummeryPreview({}) {
  const personalInfo = useAppSelector((state) => state.resume.personalInfo);

  return <p className="text-xs">{personalInfo?.summery}</p>;
}

export default SummeryPreview;
