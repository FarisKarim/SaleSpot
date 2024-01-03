"use client";
import SalesGrid from "@/components/Grid/SalesGrid";
import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";


const SalesPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchData();
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
