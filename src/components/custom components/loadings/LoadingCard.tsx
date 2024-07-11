import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingCard = () => {
  return (
    <div>
      <div
        className="p-14  bg-slate-200
          h-[280px] 
            rounded-t-lg border-t-4
            border-gray-300"
      >
        <div
          className="flex 
          items-center justify-center h-[180px] "
        >
          <Skeleton className="w-[80px] h-[80px] rounded-lg" />
        </div>
      </div>
      <div className="border p-3 h-[46px] flex justify-between  bg-gray-300 rounded-b-lg shadow-lg animate-pulse"></div>
    </div>
  );
};

export default LoadingCard;
