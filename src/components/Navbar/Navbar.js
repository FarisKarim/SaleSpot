import React from "react";
import Image from "next/image"

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-indigo-500 dark:bg-indigo-800 p-3">
        <div className="flex mx-24 gap-4 items-center flex-shrink-0 text-white mr-5">
          <Image
            src="/salespotlogo.png"
            alt="SaleSpot Logo"
            className="dark:invert"
            width={70}
            height={10}
            priority
          />
          <a href="/" className="font-semibold text-xl tracking-tight">
            SaleSpot
          </a>
        </div>
        <div className="mx-24 w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-lg flex justify-center gap-10 lg:flex-grow">
            <a
              href="/sales"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mr-4"
            >
              Brand Sales
            </a>
            {/* <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mr-4"
            >
              Single Item Sales
            </a> */}
          </div>
          {/* <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
