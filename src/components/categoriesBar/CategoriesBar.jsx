import React, { useState } from "react";
import "./_categoriesBar.scss";
export const CategoriesBar = () => {
  const keywords = [
    "All",
    "React Js",
    "React Native",
    "All",
    "React Js",
    "React Native",
    "All",
    "React Js",
    "React Native",
    "All",
    "React Js",
    "React Native",
    "All",
    "React Js",
    "React Native",
    "All",
    "React Js",
    "React Native",
  ];
  const [activeElement, setElement] = useState("All");
  const handleClick = (value) => {
    setElement(value);
  };
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => {
        return (
          <span
            onClick={() => handleClick(value)}
            key={i}
            className={activeElement === value ? "active" : ""}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};
