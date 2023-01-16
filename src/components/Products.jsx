import React from "react";
import SingleProduct from "./SingleProduct";
import data from "../DATA.json";
function Products() {
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
      <p className=" text-xs font-normal     text-flipkart-grey">{para}</p>
      <h3 className=" mt-2 font-semibold">Clothing And Accessories</h3>
      <div className="flex justify-between w-1/3 items-end mt-2">
        <span className=" font-medium">Sort By</span>
        <span className=" text-flipkart-grey text-sm">Price - High to low</span>
        <span className=" text-flipkart-grey text-sm">Price - Low to High</span>
      </div>
      <div className="flex flex-wrap gap-3   ">
        {data?.products?.map((items) => (
          <SingleProduct
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
