import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import { InputNumber } from "antd";
import ProductCard from "../../../components/ProductCard";
import FooterComponent from "../../../components/Footer";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { useCartContext } from "../../../contexts/CartContext";

const initialState = {
  product: {
    title: "",
    description: "",
    price: "",
    model: "",
    color: "",
    category: "",
    image: "",
    brand: "",
  },
  products: [],
};

export default function ProductDetail() {
  const location = useLocation();
  const { id } = location.state || 0;

  const { dispatch } = useCartContext();
  const { products } = useContext(ProductsContext);
  const [state, setState] = useState(initialState);
  const [quant,setQuant]=useState(1)

  useEffect(() => {
    window.scrollTo(0, 0);
    setState({
      product: products.find((item) => item.id == id),
      products: products.slice(0, 3),
    });
  }, [products, id]);

  return (
    <>
      <div className="container">
        <div className="product-detail mt-5">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-6 ">
              <div className="product-detail-img">
                <img src={state.product.image} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-7 col-md-6">
              <div className="detail">
                <h6
                  className="text-capitalize d-inline-block py-1 px-2 shadow rounded-2 mb-4"
                  style={{ backgroundColor: "#08817935" }}
                >
                  {state.product.category}
                </h6>
                <h3 className="mb-3">{state.product.title}</h3>
                <h4 className="text-success mb-3">${state.product.price}</h4>
                <InputNumber min={1} max={10} defaultValue={1} onChange={(value)=>{setQuant(value);console.log(quant)}}/>

                <h4 className="mb-3 mt-3">Product Detail</h4>
                <p className="text-secondary product-detail-p">
                  {state.product.description.slice(0, 500)} ....
                </p>
                <button
                  className="btn btn-success mb-4 "
                  onClick={() => {
                    dispatch({
                      type: "ADD_ITEM",
                      payload: { ...state.product,quantity:quant },
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
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
