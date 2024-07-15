import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex p-5 md:p-14 flex-1 w-screen mt-20 justify-center items-center flex-col">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
