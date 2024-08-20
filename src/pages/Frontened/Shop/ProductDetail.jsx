import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import { InputNumber } from "antd";
import ProductCard from "../../../components/ProductCard";
import FooterComponent from "../../../components/Footer";
import { ShopItemsContext } from "../../../contexts/ShopContext";



const initialState = {
  product: {
    title: "",
    description: "",
    price: "",
    model: "",
    color: "",
    category: "",
    image:"",
    brand:""
  },
  products: [],
};

export default function ProductDetail() {

  const location = useLocation();
  const { id } = location.state || 0;

  const { shopItems } = useContext(ShopItemsContext);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    window.scrollTo(0, 0);
    setState({
      product: shopItems.find((item) => item.id == id),
      products: shopItems.slice(0, 3),
    });
  }, [shopItems, id]);

  return (
    <>
      <div className="container">
        <div className="product-detail d-flex mt-5 gap-5">
          <div className="product-detail-img">
            <img src={state.product.image} alt="" />
            <div className="tags d-flex justify-content-center flex-wrap mt-3">
              <h6
                className="text-capitalize me-3 d-inline-block py-1 px-2 shadow rounded-2 mb-4"
                style={{ backgroundColor: "#08817935" }}
              >
                {state.product.color}
              </h6>
              <h6
                className="text-capitalize me-3 d-inline-block py-1 px-2 shadow rounded-2 mb-4"
                style={{ backgroundColor: "#08817935" }}
              >
                {state.product.brand}
              </h6>
              <h6
                className="text-capitalize me-3 d-inline-block py-1 px-2 shadow rounded-2 mb-4"
                style={{ backgroundColor: "#08817935" }}
              >
                {state.product.model}
              </h6>
            </div>
          </div>
          <div className="detail">
            <h6
              className="text-capitalize d-inline-block py-1 px-2 shadow rounded-2 mb-4"
              style={{ backgroundColor: "#08817935" }}
            >
              {state.product.category}
            </h6>
            <h3 className="mb-3">{state.product.title}</h3>
            <h4 className="text-success mb-3">${state.product.price}</h4>
            <InputNumber min={1} max={10} defaultValue={1} />

            <h4 className="mb-3 mt-3">Product Detail</h4>
            <p className="text-secondary product-detail-p">
              {state.product.description.slice(0, 500)} ....
            </p>
            <button className="btn btn-success mb-4 ">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="featured-products-section">
        <h2 className="text-center my-5">Featured Products</h2>
        <div className="featured-items-container d-flex gap-5 flex-wrap justify-content-center">
          {state.products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
