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
      <div className="flex flex-col border-2 w-full h-full">
        <img className="  h-80 w-72  object-cover" src={img} alt={brand} />
        <div className="flex flex-col p-4">
          <span className=" text-flipkart-grey">{brand}</span>
          <span>{product_title}</span>
          <span className=" font-semibold">₹{price}</span>
          <span className=" text-sm">{free_delivery && "Free delivery"}</span>
          {/* <span>{sizes}</span> */}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
