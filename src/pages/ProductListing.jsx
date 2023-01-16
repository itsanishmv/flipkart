import React from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
function ProductListing() {
  return (
    <div className="shadow-lg h-full  flex  gap-2  mt-2 px-2">
      <Filter />
      <Products />
    </div>
  );
}

export default ProductListing;
