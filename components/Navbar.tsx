import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Vroom logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="rounded-full text-primary-blue bg-white min-w-[130px] border border-primary-blue hover:bg-primary-blue hover:text-white"
        />
      </nav>
    </header>
  );
};

export default Navbar;
