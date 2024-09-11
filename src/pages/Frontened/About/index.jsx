import React from "react";
import banner from "../../../assets/banner.png";
import a6 from "../../../assets/a6.jpg";
import appVideo from "../../../assets/1.mp4";
import f1 from "../../../assets/f1.png";
import f2 from "../../../assets/f2.png";
import f3 from "../../../assets/f3.png";
import f4 from "../../../assets/f4.png";
import f5 from "../../../assets/f5.png";
import f6 from "../../../assets/f6.png";
import FeatureCard from "../../../components/FeatureCard";

export default function About() {
  return (
    <>
      <div
        className="about-banner d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundImage: `url(${banner})` }}>
        <h1 className="text-white"> Know Us</h1>
        <p className="text-white text-center">
          {" "}
          We bring you the latest electronics with unbeatable prices and
          exceptional service, <br /> making technology accessible and
          convenient for everyone.
        </p>
      </div>

      <div className="who-we-are mt-5 ">
        <div className="container d-flex justify-content-center flex-wrap gap-5">
          <div className="who-we-are-img">
            <img src={a6} alt="" />
          </div>
          <div className="who-we-are-details">
            <h2 className="text-center mb-3">Who We Are</h2>
            <p>
              Welcome to our Store, where technology meets convenience. We are
              dedicated to bringing you the latest and greatest in electronics,
              from cutting-edge gadgets to essential everyday devices. Our
              mission is to simplify your life with high-quality products at
              unbeatable prices. With a passion for innovation and customer
              satisfaction, we strive to provide a seamless shopping experience.
              Whether you're a tech enthusiast or just looking for the perfect
              gift, we're here to help you find exactly what you need. Discover
              a world of possibilities with your trusted partner in electronics.
            </p>
          </div>
        </div>
      </div>

      <div className="download-app w-100">
        <h2 className="text-center my-5">Download Our App</h2>
        <video src={appVideo} autoPlay muted loop className=""></video>
      </div>

      <div className="services-section mt-5">
        <div className=" container services-banner-section d-flex flex-wrap justify-content-center gap-4">
          <FeatureCard img={f1} text={"Free Shipping"} color={"#fddde4"} />
          <FeatureCard img={f2} text={"Online Order"} color={"#cdebbc"} />
          <FeatureCard img={f3} text={"Save Money"} color={"#d1e8f2"} />
          <FeatureCard img={f4} text={"Promotion"} color={"#cdd4f8"} />
          <FeatureCard img={f1} text={"Free Shipping"} color={"#fddde4"} />
          <FeatureCard img={f2} text={"Online Order"} color={"#cdebbc"} />
        </div>
      </div>
    </>
  );
}
