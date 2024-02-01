import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, auth} from "@clerk/nextjs";

const Navbar = () => {
  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <>
      <nav className="flex gap-8 justify-between bg-teal-700 dark:bg-transparent dark:backdrop-brightness-110  xs:w-full border-gray-200 p-3">
        <div className="flex sm:mx-24 items-center gap-1">
          <Image
            src="/salespotlogo.png"
            alt="SaleSpot Logo"
            width={40}
            height={10}
            priority
          />
          <a
            href="/"
            className="font-semibold text-3xl xs:text-lg text-white tracking-tight"
          >
            SaleSpot
          </a>
        </div>
        <div className="flex gap-8 xs:gap-4 sm:mx-24 items-center justify-between">
          {!isAuth ? (
            <>
              <Link className="text-white text-lg font-semibold px-4 py-1 bg-orange-400 dark:bg-teal-500 rounded-lg hover:scale-110 transition-transform whitespace-nowrap" href="/sign-in">Log In</Link>
              <Link href="/sign-up" className="text-white font-semibold text-lg px-4 py-1 bg-orange-400 dark:bg-teal-500 rounded-lg hover:scale-110 transition-transform whitespace-nowrap">Sign Up</Link>
            </>
          ) : (
            <>
              <div className="text-lg xs:text-sm xs:mr-2 whitespace-nowrap hover:scale-110 transition-transform rounded-lg w-1/2">
                <a
                  href="/sales"
                  className="border border-black text-white dark:border-white py-1 px-2 rounded-lg shadow-xl text-xl xs:text-sm font-bold"
                >
                  Brand Sales
                </a>
              </div>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
          {/* <div className="text-lg xs:text-sm xs:mr-2 whitespace-nowrap rounded-lg w-1/2">
            <a
              href="/sales"
              className="text-white text-xl xs:text-sm font-bold hover:text-green-600 "
            >
              Brand Sales
            </a>
          </div> */}
          {/* <div className="text-lg rounded-lg border px-4 xs:px-2 bg-purple-500 hover:scale-110 transition-transform w-1/2 py-1">
            <a href="/pricing" className="text-white">
              Premium
            </a>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
