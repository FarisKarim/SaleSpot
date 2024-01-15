import React from "react";

const SalesGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
      {items.map((item, index) => (
        <div key={index} className="w-72 sm:w-full p-4 bg-indigo-600 border-4 border-black rounded-lg shadow dark:bg-indigo-800 dark:border-black hover:scale-110 transition-transform">
          <h5 className="text-lg sm:text-xl font-bold tracking-tight text-black dark:text-white mb-2">
            {item.brand}
          </h5>
          <hr className="border border-black-200 dark:border-black-700 mb-2" />
          <div className="h-24 overflow-hidden">
            <p className="text-md sm:text-xl text-gray-800 dark:text-gray-100">
              {item.description}
            </p>
          </div>
          <p className="text-sm my-4 sm:text-xl text-white dark:text-white-400">
            {item.date}
          </p>
          <a
            href="{item.linkurl}"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:scale-110 transition-transform"
          >
            Link to website
            {/* SVG icon code here */}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SalesGrid;
