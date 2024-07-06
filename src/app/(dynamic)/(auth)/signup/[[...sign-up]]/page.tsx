import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-1 w-screen mt-20 justify-center items-center flex-col">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
