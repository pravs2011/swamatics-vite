import React, { useState } from "react";
import logo from "../../assets/images/logo-black.png";
import "./TopMenu.css";

const TopMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="top-menu">
      <div className="nav-content">
        <div className="logo-container">
          <img
            src={logo}
            alt="Material Kit 2"
            className="logo"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
        </button>

        <div className={`nav-items ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <div className="nav-item">
            <button
              className={`dropdown-button ${
                activeDropdown === "home" ? "active" : ""
              }`}
              onClick={() => handleDropdownClick("home")}
            >
              Home
            </button>
          </div>

          <div className="nav-item">
            <button
              className={`dropdown-button ${
                activeDropdown === "introduction" ? "active" : ""
              }`}
              onClick={() => handleDropdownClick("introduction")}
            >
              Introduction
            </button>
          </div>

          <div className="nav-item">
            <button
              className={`dropdown-button ${
                activeDropdown === "product" ? "active" : ""
              }`}
              onClick={() => handleDropdownClick("product")}
            >
              Product
            </button>
          </div>

          <div className="nav-item">
            <button
              className={`dropdown-button ${
                activeDropdown === "activities" ? "active" : ""
              }`}
              onClick={() => handleDropdownClick("activities")}
            >
              Activities
            </button>
          </div>

          <div className="nav-item">
            <button
              className={`dropdown-button ${
                activeDropdown === "blog" ? "active" : ""
              }`}
              onClick={() => handleDropdownClick("blog")}
            >
              Blog
            </button>
          </div>

          <div className="nav-item">
            <button
              className={`dropdown-button ${
                activeDropdown === "contact" ? "active" : ""
              }`}
              onClick={() => handleDropdownClick("contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
