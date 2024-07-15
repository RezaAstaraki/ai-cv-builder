import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="p-5 md:p-14 flex flex-1 w-screen mt-20 justify-center items-center flex-col">
      <SignIn />
    </div>
  );
};

export default SignInPage;
