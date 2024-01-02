import React from "react";

const SalesGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="border p-4 flex flex-col gap-4 border-blue-200 shadow-lg rounded-lg">
          <div className="text-lg font-bold">{item.brand}</div>
          <div className="text-md text-gray-400">{item.date}</div>
          <div className="text-gray-600">{item.description}</div>
          <hr className="my-2" />
          <a  href={item.linkUrl} className="text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank" rel="noopener noreferrer">Link to website</a>
        </div>
      ))}
    </div>
  );
};
export default SalesGrid;
