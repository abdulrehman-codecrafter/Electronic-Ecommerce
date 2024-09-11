import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
import ProductCard from "../../../components/ProductCard";

export default function AllProducts() {
  const { products } = useContext(ProductsContext);
  const [shopProducts, setShopProducts] = useState([]);
  const [filterBtns, setFilterBtns] = useState([]);
  const [search, setSearch] = useState("");

  const filterItems = (filterBtn) => {
    setShopProducts(
      products.filter((item) => {
        return item.category === filterBtn;
      })
    );
  };

  useEffect(() => {
    setShopProducts(products);

    const allFilterBtns = products.map((item) => {
      return item.category;
    });

    setFilterBtns([...new Set(allFilterBtns)]);
  }, [products]);
  return (
    <>
      <div className="filter-bar mt-4 mb-5 container d-flex justify-content-center gap-3 flex-wrap">
        <button
          className="btn "
          style={{ border: `1.5px solid var(--primary-color)` }}
          onClick={() => {
            setShopProducts(products);
          }}
        >
          All
        </button>
        {filterBtns.map((filterBtn, i) => {
          return (
            <button
              key={i}
              className="btn text-capitalize rounded-2"
              onClick={() => {
                filterItems(filterBtn);
              }}
            >
              {filterBtn}
            </button>
          );
        })}
        {/* <form className="form-inline my-2 my-lg-0"> */}
          <input
            className="form-control mr-sm-2"
            type="search"
            // value={search}
            placeholder="Search"
            aria-label="Search"
            style={{
              border: "1.7px solid var(--primary-color)",
              outline: "none",
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        {/* </form> */}
      </div>

      <div className="all-products-container container d-flex gap-4 flex-wrap justify-content-center">
        {shopProducts
          .filter((product) => {
            return search.toLowerCase() === "" ? product : product.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
      </div>
    </>
  );
}
