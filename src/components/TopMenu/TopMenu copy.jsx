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
              className="dropdown-button"
              onClick={() => handleDropdownClick("pages")}
            >
              <span>Pages</span>
              <i className="dropdown-icon">▼</i>
            </button>
          </div>

          <div className="nav-item">
            <button
              className="dropdown-button"
              onClick={() => handleDropdownClick("account")}
            >
              <span>Account</span>
              <i className="dropdown-icon">▼</i>
            </button>
          </div>

          <div className="nav-item">
            <button
              className="dropdown-button"
              onClick={() => handleDropdownClick("sections")}
            >
              <span>Sections</span>
              <i className="dropdown-icon">▼</i>
            </button>
          </div>

          <div className="nav-item">
            <button
              className="dropdown-button"
              onClick={() => handleDropdownClick("docs")}
            >
              <span>Docs</span>
              <i className="dropdown-icon">▼</i>
            </button>
          </div>

          <button className="buy-now-button">BUY NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
