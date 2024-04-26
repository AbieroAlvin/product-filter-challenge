import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating },
    productDispatch,
  } = CartState();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-medium">Filter Products</h1>
      </div>
      <div className="flex gap-8 w-full">
        <div className="flex gap-2">
          <input
            type="radio"
            name="group1"
            id={`inline-1`}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
          <label>Ascending</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="group1"
            id={`inline-2`}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
          <label>Descending</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="group1"
            id={`inline-3`}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
          />
          <label>Include Out of Stock</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="group1"
            id={`inline-4`}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDelivery}
          />
          <label>Fast Delivery Only</label>
        </div>
        <div className="flex gap-2">
          <label style={{ paddingRight: 10 }}>Rating:</label>
          <Rating
            rating={byRating}
            style={{ cursor: "pointer" }}
            onClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
          />
        </div>
        <button
          className="py-2 px-6 rounded-md bg-blue-400 text-white"
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
