import { Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/services">What We Offer</Link>
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} DentalX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
