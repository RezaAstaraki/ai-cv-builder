import BoxSpinner from "@/components/custom components/loadings/BoxSpinner";
import React from "react";

const Loading = () => {
  return (
    <main className="flex flex-col flex-1">
      <BoxSpinner height={100} width={100} />
    </main>
  );
};

export default Loading;
