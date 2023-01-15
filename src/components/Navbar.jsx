import React from "react";
import CART_ICON from "../Assets/cart_icon.svg";
import SEARCH_ICON from "../Assets/search_icon.svg";
function Navbar() {
  return (
    <div className=" h-14 bg-flipkart-blue px-48 fixed right-0 left-0 top-0 flex gap-2 box-border">
      <div className="flex gap-4  items-center">
        <div className="flex flex-col">
          <img
            className=" h-5 w-16 object-contain"
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="logo"
          />
          <div className="flex text-xs gap-1 italic">
            <span className=" text-default font-thin">Explore</span>
            <div className=" text-flipkart-yellow flex">
              <span className=" text-flipkart-yellow font-semibold ">Plus</span>
              <img
                className=" w-[0.625rem] object-contain"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt="plus_logo"
              />
            </div>
          </div>
        </div>
        <div className=" w-[35rem]">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              id="default-search"
              className="block outline-none w-full box-border p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for products,brands and more"
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                className="w-5 h-5 text-flipkart-blue"
                src={SEARCH_ICON}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly w-full text-default ">
        <button className=" bg-default py-1  box-border w-28 text-flipkart-blue text-base">
          Login
        </button>
        <span>Beccome a Seller</span>
        <span>More</span>
        <div className="flex items-center gap-2">
          <img className=" h-4 w-4  " src={CART_ICON} alt="cart" />
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
