import React from "react";

function Search({onSearch}) {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <input
          className="appearance-none border-2 border-indigo-500 hover:border-gray-400 transition-colors rounded-md py-1 pl-3 pr-10 text-gray-800 focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search brand..."
          onChange={(e) => onSearch(e.target.value)}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
