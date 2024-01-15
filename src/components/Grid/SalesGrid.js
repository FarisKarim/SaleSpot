import React from "react";

const SalesGrid = ({ items }) => {
  // console.log(items)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="max-w-sm p-6 bg-indigo-600 border-4 border-black rounded-lg shadow dark:bg-indigo-800 dark:border-black hover:scale-110 transition-transform">
          <h5 className="text-2xl font-bold tracking-tight text-black dark:text-white">
            {item.brand}
          </h5>
          <hr className="border border-black-200 dark:border-black-700" />
          <div className="flex place-items-center h-24">
            <p className="mb-3  text-xl text-gray-800 dark:text-gray-100">
              {item.description}
            </p>
          </div>
          <p className="my-3 text-md text-white dark:text-white-400">
            {item.date}
          </p>
          <a
            href="{item.linkurl}"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:scale-110 transition-transform"
          >
            Link to website
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};
export default SalesGrid;
