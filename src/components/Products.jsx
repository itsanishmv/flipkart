import React from "react";
import SingleProduct from "./SingleProduct";
import data from "../DATA.json";
function Products({ filteredData }) {
  const para = ` Given how powerful social media has become these days, everyone around
    the world wants to look their best at all times. Thus, the right
    clothing and accessories are almost always in demand. Good-quality
    shirts, T-shirts, trousers, jeans, shorts, tops, sarees, kurtis,
    lehenga, dresses, skirts, bra, innerwear, and more are some of the
    examples that people love and need to wear. Watches, earrings, rings,
    bracelets, chains, etc can accentuate the look of every outfit. Thus,
    it’s important to wear complementing accessories when you dress up in
    your finest.`;

  return (
    <div className=" rounded-lg w-full box-border min-h-screen  p-4 shadow-lg bg-default">
      <p className=" text-xs font-normal   hidden sm:block  text-flipkart-grey">
        {para}
      </p>
      <h3 className=" mt-2 font-semibold">Clothing And Accessories</h3>

      <div className="flex flex-wrap gap-3 mt-2  ">
        {filteredData?.map((items, index) => (
          <SingleProduct
            key={index}
            brand={items.brand}
            product_title={items.product_title}
            sizes={items.sizes}
            img={items.img_url}
            price={items.price}
            free_delivery={items.free_delivery}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
