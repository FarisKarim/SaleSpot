import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="flex gap-8 justify-between xs:w-full bg-red-700/20 backdrop-blur-lg border-gray-200 p-3">
        <div className="flex sm:mx-24 items-center gap-1 text-white">
          <Image
            src="/salespotlogo.png"
            alt="SaleSpot Logo"
            className="dark:invert"
            width={40}
            height={10}
            priority
          />
          <a
            href="/"
            className="font-semibold text-3xl xs:text-lg tracking-tight"
          >
            SaleSpot
          </a>
        </div>
        <div className="flex gap-8 sm:mx-24 items-center justify-between">
          <div className="text-lg xs:text-sm xs:mr-2 whitespace-nowrap rounded-lg w-1/2">
            <a
              href="/sales"
              className="text-white text-xl xs:text-sm font-bold hover:text-green-600 "
            >
              Brand Sales
            </a>
          </div>
          <div className="text-lg rounded-lg border px-4 xs:px-2 bg-purple-500 hover:scale-110 transition-transform w-1/2 py-1">
            <a href="/pricing" className="text-white">
              Premium
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
