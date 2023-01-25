import React from "react";
import DROPARROW_ICON from "../Assets/downArrow_icon.svg";
function Category() {
  const category = [
    "Electronics ",
    "TV & Appliances",
    "Men",
    "Women",
    "Baby & kids",
    "Home & Furniture",
    "Sports , books & More",
    "Flights",
    "Offer Zone",
  ];
  return (
    <div className="pt-10 md:pt-14 bg-default sm:flex justify-between xl:px-32 text-sm  border-2 hidden ">
      {category?.map((item) => (
        <div className="flex justify-center items-center ">
          <span className="md:p-2 sm:text-xs box-border">{item}</span>
          <img
            className=" -rotate-90 h-2 w-2 "
            src={DROPARROW_ICON}
            alt="arrow"
          />
        </div>
      ))}
    </div>
  );
}

export default Category;
