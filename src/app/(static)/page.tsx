"use client";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import Loading from "../(dynamic)/resume/[resume_id]/view/loading";
import BoxSpinner from "@/components/custom components/loadings/BoxSpinner";
import { Button } from "@/components/ui/button";
import {
  generateSummeryFromAI,
  getAiResponse,
} from "@/service/strapiCms/serverActions";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 p-5 md:p-14">
      <Button>ai</Button>
      home
    </main>
  );
}
