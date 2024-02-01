"use client";
import SalesGrid from "@/components/Grid/SalesGrid";
import { useEffect, useState } from "react";
import SalesTable from "@/components/Table/Table";
import Search from "@/components/Search/Search";
import { fetchData } from "@/utils/fetchData";


const SalesPage = () => {
  const [items, setItems] = useState([]);
  const [showGrid, setShowGrid] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getItems = async () => {
      let data = await fetchData();
      data = data.map((item) => ({
        ...item,
        date: new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      }));
      setItems(data);
    };

    getItems();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };
  const filteredItems = items.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="mx-auto lg:mx-20">
      <div className="flex mb-2 pt-4 mt-5 gap-4 xs:flex-col justify-center">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className="px-2 rounded-lg xs:w-1/2 xs:mx-auto xs:py-2 border border-black dark:border-white bg-teal-500 hover:scale-110 transition-transform text-white text-md hover:bg-green-700 duration-300"
        >
          {showGrid ? "Show Table View" : "Show Grid View"}
        </button>
        <Search onSearch={handleSearch} />
        <div className="flex justify-center items-center">
          <input
            id="checkbox"
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="checkbox" className="ml-2 text-sm lg:text-md font-medium text-gray-700 ">
            Show active only
          </label>
        </div>
      </div>
      {showGrid ? (
        <SalesGrid items={filteredItems} />
      ) : (
        <SalesTable items={filteredItems} />
      )}
    </div>
  );
  
};

export default SalesPage;
