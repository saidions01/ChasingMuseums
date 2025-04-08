// src/components/Layout.jsx
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaVideo } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../styles/Layout.css";
const Layout = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="social-icons">
          <Link
            to="/documentation"
            className={location.pathname === "/documentation" ? "active" : ""}
          >
            <FaVideo className="nav-icon" />
          </Link>
          <FaFacebookF className="icon-hover" />
          <FaInstagram className="icon-hover" />
          <FaTwitter className="icon-hover" />
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Animated Navigation */}
        <div className="nav">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/roadmap"
            className={location.pathname === "/roadmap" ? "active" : ""}
          >
            Roadmap
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About us
          </Link>
        </div>

        {/* Content Container */}
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
