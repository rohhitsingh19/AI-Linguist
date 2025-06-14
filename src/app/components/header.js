import { BookA } from "lucide-react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MenuBtn } from "./menu-btn";

export const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white backdrop-blur-sm">
      {" "}
      <div className="w-full max-w-screen-xl px-2 5 lg:px-20 relative mx-auto border-b">
        <div className="flex h-14 items-center justify-between">
          <div className="flex flex-wrap text-blue-800 py-2 text-2xl font-serif font-bold"> <BookA className="w-7 h-8 p-1 text-blue-900" /> AI Linguist </div>
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-700 text-white px-2 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex">
              <MenuBtn />
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};