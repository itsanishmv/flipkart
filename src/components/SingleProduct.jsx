import React from "react";

function SingleProduct({
  img,
  sizes,
  product_title,
  price,
  brand,
  free_delivery,
}) {
  return (
    <div>
      <div className="flex flex-col  w-72 h-full hover:shadow-2xl">
        <img className="  h-80 w-72 object-contain" src={img} alt={brand} />
        <div className="flex flex-col p-4">
          <span className=" text-flipkart-grey">{brand}</span>
          <span>{product_title}</span>
          <span className=" font-semibold">₹{price}</span>
          <span className=" text-sm text-flipkart-grey">
            {free_delivery && "Free delivery"}
          </span>
          {/* <span>{sizes}</span> */}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
