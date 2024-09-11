import React from "react";
import { FaStar } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from "../../contexts/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="product-card py-3  px-3">
      <p
        className="ms-2 mt-2 text-capitalize d-inline-block px-1 rounded-2"
        style={{ backgroundColor: "#08817935" }}
      >
        {product.category}
      </p>
      <div className="product-img py-3">
        <img src={product.image} alt="" className="d-block" onClick={() => {
          navigate("/shop/product-detail", { state:  {id:product.id}  });
        }}/>
      </div>
      <h5
        className="align-self-start mt-3 px-1"
        style={{ textTransform: "capitalize" }}
        onClick={() => {
          navigate("/shop/product-detail", { state:  {id:product.id}  });
        }}
      >
        {product.title}
      </h5>
      <div className="rating align-self-start mb-2">
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
      </div>
      <h6 className="align-self-start text-success">$ {product.price}</h6>
      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: "ADD_ITEM",
            payload: { ...product,quantity:1 },
          });
        }}
      >
      Shop Now &nbsp;
      <HiShoppingCart color="" size={19}/>
      </button>
    </div>
  );
}
