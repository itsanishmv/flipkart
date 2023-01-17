import data from "../DATA.json";
function useFilterProducts(setFilteredData, size, ideal, price, brand) {
  function filter() {
    let filteredSize = data.products?.filter((item) => {
      if (size?.large || size?.medium || size?.small) {
        if (item.sizes.large && size.large) return true;
        if (item.sizes.medium && size.medium) return true;
        if (item.sizes.small && size.small) return true;
      } else return true;
    });

    let filteredBrand = filteredSize?.filter((item) => {
      if (brand?.length > 0) {
        if (brand.includes(item.brand)) {
          return true;
        } else return false;
      }
      return true;
    });
    let filteredIdeal = filteredBrand?.filter((item) => {
      if (ideal?.Men || ideal?.Women || ideal?.Kids) {
        if (item.idealFor.Men && ideal.Men) return true;
        if (item.idealFor.Women && ideal.Women) return true;
        if (item.idealFor.Kids && ideal.Kids) return true;
      } else return true;
    });
    let sortByPrice = filteredIdeal?.sort((a, b) => {
      if (price === "High to low") return b.price - a.price;
      if (price === "Low to high") return a.price - b.price;
    });
    setFilteredData(sortByPrice);
  }
  return { filter };
}

export default useFilterProducts;
