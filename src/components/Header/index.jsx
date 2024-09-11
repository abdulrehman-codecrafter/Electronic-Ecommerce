import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { Dropdown, Space, Menu, Badge, Avatar } from "antd";
import { CgProfile } from "react-icons/cg";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useCartContext } from "../../contexts/CartContext";

export default function Header() {
  const { user, isAuthenticated, dispatch } = useAuthContext();
  const { cartItems } = useCartContext();
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(cartItems)
  },[cartItems]);
  // Dropdown items based on authentication status
  const items = isAuthenticated
    ? [
        {
          key: "1",
          label: <span>{user.email}</span>,
        },
        {
          key: "2",
          label: (
            <div
              onClick={async () => {
                dispatch({ type: "SET_LOGGED_OUT" });
                await signOut(auth);
              }}
            >
              Logout
            </div>
          ),
        },
      ]
    : [
        {
          key: "1",
          label: (
            <Link to="/auth/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          ),
        },
      ];

  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-4" href="#">
          <img src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link me-4">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop/all-products" className="nav-link me-4">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link me-4">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link me-4">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="dashboard" className="nav-link me-4">
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="me-4">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <CgProfile size={24} color="black" />
                </Space>
              </a>
            </Dropdown>
            <Link to="/cart" className="text-black">
              <Badge
                count={state.length}
                style={{
                  backgroundColor: "#088178",
                }}
              >
                <FiShoppingBag size="24px" className="ms-3" />
                {/* <Avatar shape="square" size="large" /> */}
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
