import React from "react";

const SalesTable = ({ items }) => {
  return (
    <div className="flex justify-center border-indigo-600 border-4 items-center mb-4">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y text-center">
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
          <tbody className="divide-y divide-black">
            {items.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {item.brand}
                  <span
                    className={`inline-block ml-3 rounded-full h-2 w-2 ${
                      item.isactive ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </td>
                <td className=" px-6 py-4 whitespace-nowrap text-sm">
                  {item.description}
                </td>
                <td className="xs:hidden px-6 py-4 whitespace-nowrap text-sm">
                  {item.date}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  <button className="border p-1 rounded-lg text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:scale-110 transition-transform">
                    <a
                      href={item.linkurl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
