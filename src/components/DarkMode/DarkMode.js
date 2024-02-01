"use client";
import React, { useState, useEffect } from "react";

const isNightTime = () => {
  const hour = new Date().getHours();
  return hour >= 18 || hour <= 7; // Dark mode from 6 PM to 7 AM
};

const DarkMode = () => {
  // Set initial state based on the current time
  const [isDarkMode, setIsDarkMode] = useState(isNightTime());

  useEffect(() => {
    // Optionally, you can also set an interval to update the state
    // This ensures that if the user has the page open during the transition time,
    // the theme will update without needing to refresh the page.
    const interval = setInterval(() => {
      setIsDarkMode(isNightTime());
    }, 1000 * 60 * 60); // Update every hour

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={isDarkMode ? "background-night" : "background"}>
      <span></span>
      <span></span>
    </div>
  );
};

export default DarkMode;
