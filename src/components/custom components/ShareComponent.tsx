"use client";

import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

interface ShareData {
  text: string;
  title: string;
}

const ShareComponent = ({ shareData }: { shareData: ShareData }) => {
  const pathName = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_HOST_BASE_URL;
  const url = `${baseUrl}${pathName.slice(1)}`;
  return (
    <div>
      <RWebShare
        data={{
          text: shareData.text,
          url: url,
          title: shareData.title,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <Button>Share 🔗</Button>
      </RWebShare>
    </div>
  );
};

export default ShareComponent;
