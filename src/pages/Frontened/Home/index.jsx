


import React, {  useContext, useEffect, useState } from "react";
import Header from "../../../components/Header";
import Background from "../../../assets/background.png";
import FeatureCard from "../../../components/FeatureCard";
import f1 from "../../../assets/f1.png";
import f2 from "../../../assets/f2.png";
import f3 from "../../../assets/f3.png";
import f4 from "../../../assets/f4.png";
import f5 from "../../../assets/f5.png";
import f6 from "../../../assets/f6.png";
import ProductCard from "../../../components/ProductCard";
import { firestore } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import FooterComponent from "../../../components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { ShopItemsContext } from "../../../contexts/ShopContext";
import { useAuthContext } from "../../../contexts/AuthContext";


export default function Home() {
 
  const [products, setProducts] = useState([]);
  const {shopItems}=useContext(ShopItemsContext)
  

  useEffect(() => {
    setProducts(shopItems.slice(0,6))
    
    Aos.init()

  }, [shopItems]);

  return (
    <>
      <div className="container">
        <div className="my-5 hero-section d-flex align-items-center justify-content-between">
          <div className="hero-content">
            <h1 data-aos="fade-right" data-aos-duration="800" className="fw-semibold">
              Discover the Future of <br />{" "}
              <span style={{ color: "#177c72" }}>Technology</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000">
              Explore our exclusive range of cutting-edge electronics <br />
              that redefine innovation and style. From the latest <br />
              smartphones to high-performance laptops.
            </p>
            <div className="hero-btn" data-aos="fade-right" data-aos-duration="1200">
              <button className="btn btn-outline-secondary">
                {" "}
                Explore More
              </button>
            </div>
          </div>
          <div className="hero-img" data-aos="zoom-in" data-aos-duration="1000">
            <img src={Background} alt="" />
          </div>
        </div>
        <h2 className="fw-semibold text-center my-5">Our Services</h2>

        <div className="feature-section d-flex flex-wrap justify-content-center gap-2">
          <FeatureCard img={f1} text={"Free Shipping"} color={"#fddde4"} />
          <FeatureCard img={f2} text={"Online Order"} color={"#cdebbc"} />
          <FeatureCard img={f3} text={"Save Money"} color={"#d1e8f2"} />
          <FeatureCard img={f4} text={"Promotion"} color={"#cdd4f8"} />
        </div>

        <div className="featured-products-section">
          <h2 className="text-center my-5">Featured Products</h2>
          <div className="featured-items-container d-flex gap-5 flex-wrap justify-content-center">
            {products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          </div>
        </div>
      </div>

    </>
  );
}
