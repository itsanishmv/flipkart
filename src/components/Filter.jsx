import { removeDuplicate } from "../UTILS/removeDuplicate";
import data from "../DATA.json";
function Filter({
  setSize,
  setPrice,
  setBrand,
  setIdeal,
  brand,
  price,
  sizes,
  ideal,
}) {
  const sizesList = ["small", "medium", "large"];
  const sortByprice = ["High to low", "Low to high"];
  const IdealList = ["Men", "Women", "Kids"];

  function handleSize(e) {
    setSize((prev) => ({ ...prev, [e.target.value]: e.target.checked }));
  }
  function handleBrands(e) {
    if (e.target.checked) {
      setBrand([...brand, e.target.value]);
    }
    if (!e.target.checked) {
      setBrand(
        brand?.filter((item) => {
          return item !== e.target.value;
        })
      );
    }
  }
  function handleIdealFor(e) {
    setIdeal((prev) => ({ ...prev, [e.target.value]: e.target.checked }));
  }
  function handleClearAll() {
    setBrand("");
    setIdeal();
    setSize();
    setPrice();
  }

  return (
    <div className="relative rounded-lg sm:w-1/5 p-3 h-[50vh] sm:h-[100vh] flex-wrap pt-20 sm:pt-10 flex flex-col gap-4 bg-default w-full">
      <div className="flex items-center justify-between">
        <div className=" text-lg font-medium">Filters</div>
        <span
          className="  text-flipkart-blue cursor-pointer"
          onClick={() => handleClearAll()}
        >
          Clear all
        </span>
      </div>
      <div className=" flex flex-wrap gap-1">
        {(sizes?.small || sizes?.medium || sizes?.large) && (
          <span className=" rounded-md p-1 box-border bg-gray-300 text-thin text-xs ">
            sizes
          </span>
        )}
        {brand?.length > 0 && (
          <span className=" rounded-md p-1 box-border bg-gray-300  text-xs">
            brand
          </span>
        )}
        {(ideal?.Men || ideal?.Women || ideal?.Kids) && (
          <span className=" rounded-md p-1 box-border bg-gray-300 text-thin text-xs ">
            ideal
          </span>
        )}
        {price?.length > 0 && price !== "Low to high" && (
          <span className=" rounded-md p-1 box-border bg-gray-300 text-thin text-xs ">
            price
          </span>
        )}
      </div>
      <div className="flex sm:flex-col sm:gap-4 justify-between sm:items-start   flex-wrap">
        <div className="flex flex-col">
          <span className=" text-md font-semibold text-flipkart-grey">
            Sizes
          </span>
          {sizesList.map((el) => (
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={el}
                onChange={(e) => handleSize(e)}
              />
              <span>{el}</span>
            </div>
          ))}
        </div>
        <div className="">
          <span className=" text-md font-semibold text-flipkart-grey">
            Brands
          </span>
          {removeDuplicate(data.products, "brand")?.map((item) => (
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={item}
                onClick={(e) => handleBrands(e)}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div>
          <span className="text-md font-semibold text-flipkart-grey">
            Ideal for
          </span>
          {IdealList.map((el) => (
            <div className="flex gap-2">
              <input
                type="checkbox"
                value={el}
                onChange={(e) => handleIdealFor(e)}
              />
              <span>{el}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <span className="text-md font-semibold text-flipkart-grey">
            Price
          </span>
          <div className="flex flex-col gap-2">
            {sortByprice.map((items) => (
              <button
                className="border-2 rounded-lg text-flipkart-grey"
                onClick={() => setPrice(items)}
              >
                {items}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
