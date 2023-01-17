import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import useFilterProducts from "../hooks/useFilterProducts";
function ProductListing() {
  const [price, setPrice] = useState();
  const [ideal, setIdeal] = useState();
  const [brand, setBrand] = useState([]);
  const [size, setSize] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const { filter } = useFilterProducts(
    setFilteredData,
    size,
    ideal,
    price,
    brand
  );
  useEffect(() => {
    filter();
  }, [price, brand, ideal, size]);

  return (
    <div className="shadow-lg h-full  flex  gap-2  mt-2 px-2">
      <Filter
        setIdeal={setIdeal}
        setPrice={setPrice}
        setBrand={setBrand}
        setSize={setSize}
        brand={brand}
        sizes={size}
        ideal={ideal}
        price={price}
      />
      <Products filteredData={filteredData} />
    </div>
  );
}

export default ProductListing;
