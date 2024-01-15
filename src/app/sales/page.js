"use client";

import SalesGrid from "@/components/Grid/SalesGrid";
import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";

const SalesPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let data = await fetchData();
      // Directly format the dates in the map function
      data = data.map(item => ({
        ...item,
        date: new Date(item.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
      }));
      setItems(data);
    };

    getItems();
  }, []);

  return (
    <div className="max-auto mx-20">
      <SalesGrid items={items} />
    </div>
  );
};

export default SalesPage;
