import { CartState } from "../context/Context";
import SingleProducts from "./SingleProducts";
import Filters from "./Filters";

const Hero = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="flex">
      <Filters />
      <div className="flex w-[80%] p-6 flex-wrap justify-around md:w-[60%] md:p-0">
        {transformProducts().map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Hero;
