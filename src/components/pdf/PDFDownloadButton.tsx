"use client";
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";
import { Button } from "@/components/ui/button";

const PDFDownloadButton = ({
  resume,
  fileName,
}: {
  resume: any;
  fileName: string;
}) => {
  // console.log(resume);

  if (!resume) {
    return <>loading</>;
  }

  return (
    <PDFDownloadLink
      document={<ResumeDocument resume={resume} />}
      fileName={fileName}
    >
      {({ loading }) =>
        loading ? "Generating PDF..." : <Button>Download PDF</Button>
      }
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
