import React from "react";
import Active from "../Buttons/Active";
import Inactive from "../Buttons/Inactive";

const SalesGrid = ({ items }) => {
  return (
    <div className="xs:mx-0">
      <div className="max-h-[750px] xl:max-h-[800px] xs:max-h-[500px] no-scrollbar overflow-y-auto pt-4 px-8">
        <div className="grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-72 sm:w-full p-4 bg-transparent shadow-xl border border-black rounded-md dark:border-white hover:scale-110 transition-transform"
            >
              <div className="flex justify-between items-center">
                <h5 className="text-lg sm:text-xl border rounded-lg px-2 bg-orange-300 my-2 font-bold tracking-tight text-gray-800">
                  {item.brand}
                </h5>
                {/* <div className="bg-gray-400">Hello</div> */}
                {item.isactive ? <Active /> : <Inactive />}
              </div>
              <hr className="border border-black-200 dark:border-black-700 mb-2" />
              <div className="h-24 overflow-hidden">
                <p className="text-md text-left font-semibold sm:text-xl text-black dark:text-white">
                  {item.description}
                </p>
              </div>
              <p className="text-md my-4 text-left xs:text-sm text-black dark:text-white">
                {item.date}
              </p>
              <div className="flex">
                <a
                  href={item.linkurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:scale-110 transition-transform"
                >
                  Link to website
                  {/* SVG icon code here */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesGrid;
