import React from "react";
import banner from "../../../assets/banner.png";

export default function Contact() {
  return (
    <>
      <div
        className="about-banner d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-white"> Lets Talk</h1>
        <p className="text-white text-center">
          {" "}
          We bring you the latest electronics with unbeatable prices and
          exceptional service, <br /> making technology accessible and
          convenient for everyone.
        </p>
      </div>

      <div className="mt-5">
        <div className="container get-in-touch  d-flex  align-items-center gap-3">
          <div className="get-in-touch-detail">
            <p>Get in touch</p>
            <h2>Visit One of Our Agency Location</h2>
            <h5>Head Office</h5>
            <p className="mb-0">56 Main Block Faisalabad</p>
            <a
              href="mailto:abdulrahman.sde@gmail.com"
              className="text-decoration-none"
            >
              abdulrahman.sde@gmail.com
            </a>{" "}
            <br />
            <a href="tel:+92 323 7449306" className="text-decoration-none">
              0323 7449306
            </a>
            <p>Monday to Saturday: 09:00am to 06:00 pm</p>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0892947032926!2d73.08623897468537!3d31.411665774263902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922681d444b32e1%3A0xc3887a0e53e91f7!2sSaylani%20Mass%20IT%20Training%20FSD!5e0!3m2!1sen!2s!4v1724408682810!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div
        className=" container mt-5 "
        style={{ maxWidth: "700px" }}
      >
        
          <p>Leave a message</p>
          <h3>We Love to hear from you</h3>
          <input
            type="text "
            placeholder="Your Name"
            className="form-control  my-2"
          />
          <input
            type="text "
            placeholder="Your Email"
            className="form-control  my-2"
          />
          <input npm 
            type="text "
            placeholder="Subject"
            className="form-control  my-2"
          />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className="form-control  my-2"
          ></textarea>
        </div>
      
    </>
  );
}
