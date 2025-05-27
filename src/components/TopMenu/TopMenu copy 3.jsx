import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo-black.png";
import "./TopMenu.css";

const TopMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleDropdownHover = (dropdown) => {
    // Only handle hover on desktop
    if (!isMobile) {
      setActiveDropdown(dropdown);
    }
  };

  const handleDropdownLeave = () => {
    // Only handle leave on desktop
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (dropdown) => {
    // Handle clicks on mobile or as fallback
    if (isMobile) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null);
  };

  // Dropdown content data
  const dropdownContent = {
    home: {
      url: "/",
      sections: [],
    },
    introduction: {
      sections: [
        {
          title: "Getting Started",
          links: [
            {
              name: "What is Swamatics",
              description: "Learn about our platform",
            },
            { name: "How it Works", description: "Understanding the process" },
            { name: "Key Features", description: "Explore our main features" },
          ],
        },
        {
          title: "Learn More",
          links: [
            {
              name: "Documentation",
              description: "Complete user documentation",
            },
            {
              name: "Video Tutorials",
              description: "Step-by-step video guides",
            },
            { name: "FAQ", description: "Frequently asked questions" },
          ],
        },
      ],
    },
    product: {
      sections: [
        {
          title: "Products",
          links: [
            {
              name: "Analytics Suite",
              description: "Advanced analytics tools",
            },
            {
              name: "Data Visualization",
              description: "Beautiful charts and graphs",
            },
            {
              name: "Reporting Tools",
              description: "Comprehensive reporting solution",
            },
          ],
        },
        {
          title: "Features",
          links: [
            { name: "Real-time Data", description: "Live data updates" },
            {
              name: "Custom Dashboards",
              description: "Personalized dashboard views",
            },
            { name: "API Integration", description: "Connect with your tools" },
          ],
        },
        {
          title: "Enterprise",
          links: [
            {
              name: "Team Collaboration",
              description: "Work together seamlessly",
            },
            {
              name: "Advanced Security",
              description: "Enterprise-grade security",
            },
            { name: "Custom Solutions", description: "Tailored to your needs" },
          ],
        },
      ],
    },
    activities: {
      sections: [
        {
          title: "Recent Activities",
          links: [
            {
              name: "Project Updates",
              description: "Latest project developments",
            },
            { name: "System Logs", description: "System activity and logs" },
            {
              name: "User Activities",
              description: "User interaction history",
            },
          ],
        },
        {
          title: "Scheduled",
          links: [
            {
              name: "Upcoming Events",
              description: "Scheduled events and tasks",
            },
            { name: "Maintenance", description: "Planned system maintenance" },
            {
              name: "Reminders",
              description: "Important reminders and alerts",
            },
          ],
        },
      ],
    },
    blog: {
      sections: [
        {
          title: "Latest Posts",
          links: [
            {
              name: "Industry Insights",
              description: "Latest trends and insights",
            },
            {
              name: "Product Updates",
              description: "New features and improvements",
            },
            { name: "Best Practices", description: "Tips and best practices" },
          ],
        },
        {
          title: "Categories",
          links: [
            { name: "Technology", description: "Tech-related articles" },
            { name: "Business", description: "Business strategy and tips" },
            { name: "Tutorials", description: "How-to guides and tutorials" },
          ],
        },
      ],
    },
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
          {Object.keys(dropdownContent).map((key) => (
            <div
              key={key}
              className={`nav-item ${
                isMobile && activeDropdown === key
                  ? "mobile-dropdown-active"
                  : ""
              }`}
              onMouseEnter={() => handleDropdownHover(key)}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`dropdown-button ${
                  activeDropdown === key ? "active" : ""
                }`}
                onClick={() => handleDropdownClick(key)}
              >
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
                <span className="dropdown-icon">▼</span>
              </button>

              {((isMobile && isMobileMenuOpen && activeDropdown === key) ||
                (!isMobile && activeDropdown === key)) && (
                <div className="mega-dropdown">
                  <div className="mega-dropdown-content">
                    {dropdownContent[key].sections.map((section, index) => (
                      <div key={index} className="mega-section">
                        <h3 className="section-title">{section.title}</h3>
                        <ul className="section-links">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex} className="section-link">
                              <a href="#" className="link-item">
                                <span className="link-name">{link.name}</span>
                                <span className="link-description">
                                  {link.description}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Contact Us - Simple navigation item without dropdown */}
          <div className="nav-item">
            <button className="dropdown-button">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
