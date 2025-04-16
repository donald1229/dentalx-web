import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-links">
    //     <Link to="/about">About</Link>
    //     <Link to="/blog">Blog</Link>
    //     <Link to="/services">What We Offer</Link>
    //   </div>

    //   <div className="footer-copy">
    //     © {new Date().getFullYear()} DentalX. All rights reserved.
    //   </div>
    // </footer>

    <footer className="footer">
      <p className="footer-copyright">
        Copyright © 2025 <span>Dental X</span> - All Rights Reserved.
      </p>

      <p className="footer-subtitle">
        SUPPORTING PRIVATE PRACTICE SINCE 2008
      </p>

      {/* Optional: floating support icon */}
      <div className="chat-icon">
        <span className="notification-badge">1</span>
        <svg
          className="chat-bubble"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#fff"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 2H4c-1.1 0-2 .9-2 2v20l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
