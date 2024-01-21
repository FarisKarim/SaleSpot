"use client";
import SalesGrid from "@/components/Grid/SalesGrid";
import { useEffect, useState } from "react";
import SalesTable from "@/components/Table/Table";
import Search from "@/components/Search/Search";

export async function fetchData() {
  try {
    const res = await fetch("/api/items");
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}

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
  const filteredItems = items.filter(item =>
    item.brand.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="max-auto lg:mx-20">
      <div className="flex justify-center">
        <button
          onClick={() => setShowGrid(!showGrid)}
          className="mb-4 bg-indigo-600 hover:scale-110 transition-transform text-white text-xs p-2 rounded hover:bg-green-700 duration-300"
        >
          {showGrid ? "Show Table View" : "Show Grid View"}
        </button>
      </div>
      <Search onSearch={handleSearch} />
      {showGrid ? <SalesGrid items={filteredItems} /> : <SalesTable items={filteredItems} />}
    </div>
  );
};

export default SalesPage;
