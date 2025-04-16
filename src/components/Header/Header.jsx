import React from "react";
import {
  AccountCircle,
  AddShoppingCart,
  ExitToApp,
  Person,
} from "@mui/icons-material";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import imgs from "../../assets/dentalimage.webp";
import "./Header.scss";

const Header = ({ user = { name: "John Doe" }, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleMenuClose();
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };
    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  return (
    <>
      <header className="header">
        {/* <div className="header-inner"> */}
        <div className="logo-container">
          <img src={imgs} alt="Logo" className="logo" />
        </div>
        <div className="icons">
          <AddShoppingCart className="icon" onClick={toggleCart} />
          <IconButton onClick={handleMenuOpen} className="user-icon">
            <Person className="icon" />
          </IconButton>
        </div>
        {/* </div> */}
      </header>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${cartOpen ? "open" : ""}`} ref={cartRef}>
        <div className="cart-header">
          <span>🛒</span>
          <span onClick={toggleCart} className="close-btn">
            ✕
          </span>
        </div>
        <div className="cart-body">
          <h3>Cart is empty</h3>
          <p>Looks like you just haven't found the right thing yet.</p>
          <a href="#">Browse Services</a>
        </div>
      </div>

      {/* User dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <div className="dropdown-user-name">{user.name}</div>
        <MenuItem onClick={handleMenuClose}>
          <AccountCircle className="mr-2" />
          Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ExitToApp className="mr-2" />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
