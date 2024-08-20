import React from 'react'
import Logo from "../../assets/logo.png"
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function Header() {
  return (

    <nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid ">
    <a className="navbar-brand ms-4" href="#"><img src={Logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link to="/" className="nav-link me-4"  href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop/all-products" className="nav-link me-4" href="#">Shop</Link >
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link me-4" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to="contact" className="nav-link me-4" href="#">Contact</Link>
        </li>
        
      </ul>
      <div className='me-3'>
      <FiShoppingBag  size="22px"/>
      </div>
      
    </div>
  </div>
</nav>
  )
}
