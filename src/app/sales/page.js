import SalesGrid from "@/components/Grid/SalesGrid";
import React from "react";

const SalesPage = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const items = [
    {
      brand: "The Outnet",
      date: formattedDate,
      description: "Clearance (up to 85% off)",
      linkUrl: "https://www.theoutnet.com/en-us/shop/mens/list/clearance"
    },
    {
      brand: "EcoFash",
      date: formattedDate,
      description: "Eco-conscious wrap blazer with tie waist",
      linkUrl: "https://google.com"
    },
  ];

  return (
    <>
      <div className="max-auto mx-20">
      <SalesGrid items={items} />
      </div>
    </>
  );
};

export default SalesPage;
