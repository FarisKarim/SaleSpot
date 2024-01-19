import React from "react";

const SalesTable = ({ items }) => {
  return (
    <div className="flex justify-center border border-indigo-600 items-center">
      <div className="overflow-x-auto w-full">
      <table className="min-w-full divide-y divide-indigo-800 text-center">
        <thead className="bg-indigo-80">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
              Brand
            </th>
            <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 xs:hidden text-center text-xs font-bold uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
              Link
            </th>
            {/* Add other headers if needed */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-black">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                {item.brand}
              </td>
              <td className=" px-6 py-4 whitespace-nowrap text-sm text-black">
                {item.description}
              </td>
              <td className="xs:hidden px-6 py-4 whitespace-nowrap text-sm text-black">
                {item.date}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                <button className="border p-1 rounded-lg text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:scale-110 transition-transform">
                  <a href={item.linkurl} target="_blank" rel="noopener noreferrer">
                    Link to website
                  </a>
                </button>
              </td>
              {/* Add other data cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default SalesTable;
