import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="flex sm:w-full gap-8 justify-between bg-indigo-600 dark:bg-indigo-800 p-3">
        <div className="flex sm:mx-24 items-center gap-1 flex-shrink-0 text-white">
          <Image
            src="/salespotlogo.png"
            alt="SaleSpot Logo"
            className="dark:invert"
            width={40}
            height={10}
            priority
          />
          <a href="/" className="font-semibold text-xl tracking-tight">
            SaleSpot
          </a>
        </div>
        <div className="flex sm:mx-24 gap-4 items-center justify-end">
          <div className="text-lg xs:text-sm xs:mr-2 whitespace-nowrap">
            <a href="/sales" className="text-white hover:text-green-700">
              Brand Sales
            </a>
          </div>
          <div className="text-lg rounded-lg border px-2 bg-purple-500 hover:scale-110 transition-transform">
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
