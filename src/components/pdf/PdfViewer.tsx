"use client";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ResumeDocument from "./ResumeDocument";

import ReactPDF from "@react-pdf/renderer";
import ResumeViewPage from "@/app/(dynamic)/resume/[resume_id]/view/page";
import Unige from "./Unige";

const PdfViewer = ({ resume }: { resume: any }) => {
  return (
    <PDFViewer className="w-screen ">
      <ResumeDocument resume={resume} />
    </PDFViewer>
  );
};
ReactDOM.render(<PDFViewer />, document.getElementById("unique"));
// export default PdfViewer;
