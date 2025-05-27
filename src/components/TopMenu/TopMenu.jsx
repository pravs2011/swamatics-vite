import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo-black.png";
import "./TopMenu.css";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();
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
    introduction: {
      sections: [
        {
          title: "About",
          links: [
            {
              name: "Welcome From CEO",
              description: "Message from our Chief Executive Officer",
              link: "/welcome-from-ceo",
            },
            {
              name: "About Us",
              description: "Learn about our company and values",
              link: "/about",
            },
            {
              name: "History",
              description: "Our company's journey and milestones",
              link: "/history",
            },
            {
              name: "Mission and Vision",
              description: "Our mission statement and future vision",
              link: "/mission-and-vision",
            },
          ],
        },
        {
          title: "Operations",
          links: [
            {
              name: "Plants",
              description: "Our manufacturing facilities and locations",
              link: "/plants",
            },
            {
              name: "Quality And Testing Systems",
              description: "Our quality assurance and testing processes",
              link: "/introduction",
            },
            {
              name: "Engineering & Design",
              description: "Our engineering capabilities and design services",
              link: "/engineering-design",
            },
            {
              name: "Health and Safety",
              description: "Our commitment to workplace safety",
              link: "/health-and-safety",
            },
          ],
        },
        {
          title: "Credentials",
          links: [
            {
              name: "Certificates",
              description: "Our certifications and accreditations",
              link: "/certificates",
            },
          ],
        },
      ],
    },
    product: {
      sections: [
        {
          title: "Blower Division",
          links: [
            {
              name: "Rotary Twin & Tri Lobe Blowers",
              description: "Rotary Twin & Tri Lobe Blowers",
            },
            {
              name: "Process Gas Blowers",
              description: "Process Gas Blowers/ Gas Boosters",
            },
            {
              name: "Turbo Blowers",
              description: "Turbo Blowers- Integrally Geared Type",
            },
            {
              name: "Super Helical Hybrid Blower",
              description: "Super Helical Hybrid Blower",
            },
            {
              name: "Truck Blowers",
              description: "Truck Blowers",
            },
            {
              name: "Bio Gas Blowers",
              description: "Bio Gas Blowers/Compressors",
            },
            {
              name: "Vacuum Pumps",
              description: "Vacuum Pumps With Secondary Suction/Air Injection",
            },
            {
              name: "Rotary Sliding Vane Compressors",
              description: "Rotary Sliding Vane Compressors",
            },
            {
              name: "Centrifugal Blowers",
              description: "Centrifugal Blowers",
            },
            {
              name: "SR Series Blowers",
              description: "SR Series Blowers",
            },
          ],
        },
        {
          title: "Vaccum Division",
          links: [
            {
              name: "Dry Screw Vacuum Pump",
              description: "Dry Screw Vacuum Pump - Combined Variable Pitch",
            },
            {
              name: "Liquid Ring Vacuum Pump",
              description: "Liquid Ring Vacuum Pump",
            },
            {
              name: "Oil Vane Vacuum Pump",
              description: "Oil Vane Vacuum Pump",
            },
            {
              name: "Mechanical Vacuum Boosters",
              description: "Mechanical Vacuum Boosters",
            },
            {
              name: "MVR Blowers",
              description: "MVR Blowers",
            },
            {
              name: "Vacuum Systems And Packages",
              description: "Vacuum Systems And Packages",
            },
            {
              name: "Condenser Exhausters",
              description: "Condenser Exhausters",
            },
          ],
        },
        // {
        //   title: "Enterprise",
        //   links: [
        //     {
        //       name: "Team Collaboration",
        //       description: "Work together seamlessly",
        //     },
        //     {
        //       name: "Advanced Security",
        //       description: "Enterprise-grade security",
        //     },
        //     { name: "Custom Solutions", description: "Tailored to your needs" },
        //   ],
        // },
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
          {/* Home - Simple navigation item without dropdown */}
          <div className="nav-item">
            <button className="dropdown-button" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
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
                              <a href={link.link} className="link-item">
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
