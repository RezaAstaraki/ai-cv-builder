import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const StaticHeader = async () => {
  return (
    <header className="flex justify-between items-center shadow-md  px-5 p-3">
      <Link href={"/"}>
        <Image
          className="flex justify-center items-center"
          alt="logo"
          src={"/logo.svg"}
          width={120}
          height={75}
        />
      </Link>
      <div className="flex gap-5">
        <Link href={"/dashboard"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </header>
  );
};

export default StaticHeader;
