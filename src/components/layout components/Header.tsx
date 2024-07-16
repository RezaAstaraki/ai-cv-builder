import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

const Header = async () => {
  const user = await currentUser();
  return (
    <header
      className="flex justify-between items-center shadow-md  px-5 p-3"
      id="no-print"
    >
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
        {user ? (
          <div className="flex gap-2 items-center">
            <Link href={"/dashboard"}>
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link href={"/signin"}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
