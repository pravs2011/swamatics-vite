import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExpand,
  FaCheckCircle,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaAward,
  FaTools,
  FaClipboardCheck,
  FaThermometerHalf,
  FaBuilding,
  FaRocket,
} from "react-icons/fa";
import "./PlantsPage.css";

const PlantsPage = () => {
  const [activePlant, setActivePlant] = useState(0);

  const plantStats = [
    { value: "5", label: "Manufacturing Plants" },
    { value: "130,000", label: "Sq. Ft. Total Area" },
    { value: "1980", label: "Since Established" },
    { value: "40+", label: "Years of Excellence" },
  ];

  const manufacturingPlants = [
    {
      id: 1,
      name: "Plant 1 - Sector 3",
      address: "C-2, Sector-3, Noida, U.P. INDIA",
      established: "1980",
      area: "25,000 sq. ft.",
      specialization: "Twin Lobe Blowers & Vacuum Pumps",
      status: "Operational",
      features: [
        "Main Production Facility",
        "Quality Control Center",
        "R&D Department",
      ],
    },
    {
      id: 2,
      name: "Plant 2 - Sector 57 (B-9)",
      address: "B-9, Sector-57, Noida, U.P. INDIA",
      established: "1995",
      area: "30,000 sq. ft.",
      specialization: "Process Gas Blowers & Compressors",
      status: "Operational",
      features: ["Advanced Machining", "Assembly Line", "Testing Facility"],
    },
    {
      id: 3,
      name: "Plant 3 - Sector 67",
      address: "B-111, Sector-67, Noida, U.P. INDIA",
      established: "2005",
      area: "35,000 sq. ft.",
      specialization: "Turbo Blowers & Heat Exchangers",
      status: "Operational",
      features: ["CNC Machining Center", "Hot Run Testing", "Packaging Unit"],
    },
    {
      id: 4,
      name: "Plant 4 - Sector 57 (C-52)",
      address: "C-52, Sector-57, Noida, U.P. INDIA",
      established: "2010",
      area: "40,000 sq. ft.",
      specialization: "Vacuum Systems & Packages",
      status: "Operational",
      features: ["Automated Production", "Quality Assurance", "Logistics Hub"],
    },
    {
      id: 5,
      name: "Upcoming Plant - Sector 80",
      address: "Sector-80, Noida, U.P. INDIA",
      established: "2024",
      area: "50,000 sq. ft.",
      specialization: "International Operations & Innovation",
      status: "Under Construction",
      features: [
        "Smart Manufacturing",
        "Global Distribution",
        "Innovation Center",
      ],
    },
  ];

  const qualityFeatures = [
    {
      icon: <FaClipboardCheck className="feature-icon" />,
      title: "Raw Material Inspection",
      description:
        "All raw materials and castings thoroughly checked upon delivery with defects quarantined and returned to suppliers.",
    },
    {
      icon: <FaThermometerHalf className="feature-icon" />,
      title: "Hot Run Testing",
      description:
        "Final product testing completed at our dedicated 'Hot run' testing station for performance validation.",
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: "CNC Precision",
      description:
        "All final machining completed on CNC Machines to maintain consistency and precision across all facilities.",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Quality Control",
      description:
        "Very high level of quality control with comprehensive testing at every stage of manufacturing.",
    },
  ];

  const growthMilestones = [
    { year: "1980", plants: 1, description: "Started with first factory" },
    { year: "1995", plants: 2, description: "Expanded to second facility" },
    { year: "2005", plants: 3, description: "Added third manufacturing plant" },
    {
      year: "2010",
      plants: 4,
      description: "Reached 4 plants with 130,000 sq. ft.",
    },
    {
      year: "2024",
      plants: 5,
      description: "5th plant for international expansion",
    },
  ];

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="plants-hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div
          className="plants-hero-container"
          style={{ borderRadius: "1rem", marginTop: "5rem" }}
        >
          <div className="hero-content">
            <div className="hero-badge" style={{ marginTop: "1rem" }}>
              Manufacturing Excellence
            </div>
            <h1>Our Manufacturing Plants</h1>
            <p className="hero-subtitle">
              From a single factory in 1980 to 5 state-of-the-art manufacturing
              facilities, SWAM has grown into a global leader with over 130,000
              sq. ft. of manufacturing space and world-class quality control
              systems.
            </p>
            <div className="hero-highlights" style={{ marginBottom: "1rem" }}>
              <div className="highlight-item">
                <FaIndustry />
                <span>5 Manufacturing Plants</span>
              </div>
              <div className="highlight-item">
                <FaExpand />
                <span>130,000 Sq. Ft.</span>
              </div>
              <div className="highlight-item">
                <FaGlobe />
                <span>Global Expansion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="plants-stats-section">
        <div className="plants-stats-container">
          <div className="stats-grid">
            {plantStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Growth Section */}
      <section className="growth-section">
        <div className="growth-container">
          <div className="section-header">
            <h2>Our Growth Journey</h2>
            <p>
              SWAM is an innovative and progressive company that has grown
              consistently over the years. Our success can be measured by our
              ever-increasing number of manufacturing facilities.
            </p>
          </div>

          <div className="growth-timeline">
            {growthMilestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span>{milestone.plants}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Plants Section */}
      <section className="manufacturing-plants-section">
        <div className="manufacturing-plants-container">
          <div className="section-header">
            <h2>Manufacturing Facilities</h2>
            <p>
              Our strategically located manufacturing plants in Noida ensure
              efficient production, quality control, and timely delivery to
              customers worldwide.
            </p>
          </div>

          <div className="plants-grid">
            {manufacturingPlants.map((plant, index) => (
              <div
                key={plant.id}
                className={`plant-card ${
                  activePlant === index ? "active" : ""
                }`}
                onClick={() => setActivePlant(index)}
              >
                <div className="plant-header">
                  <div className="plant-status">
                    <span
                      className={`status-badge ${
                        plant.status === "Operational"
                          ? "operational"
                          : "construction"
                      }`}
                    >
                      {plant.status}
                    </span>
                  </div>
                  <h3>{plant.name}</h3>
                </div>

                <div className="plant-details">
                  <div className="detail-item">
                    <FaMapMarkerAlt />
                    <span>{plant.address}</span>
                  </div>
                  <div className="detail-item">
                    <FaCalendarAlt />
                    <span>Established: {plant.established}</span>
                  </div>
                  <div className="detail-item">
                    <FaExpand />
                    <span>Area: {plant.area}</span>
                  </div>
                  <div className="detail-item">
                    <FaCogs />
                    <span>{plant.specialization}</span>
                  </div>
                </div>

                <div className="plant-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {plant.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="quality-control-section">
        <div className="quality-control-container">
          <div className="section-header">
            <h2>Quality Control Excellence</h2>
            <p>
              SWAM has developed a very high level of quality control across all
              manufacturing facilities, ensuring every product meets
              international standards.
            </p>
          </div>

          <div className="quality-features-grid">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="quality-feature-card">
                <div className="feature-icon-container">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Expansion Section */}
      <section className="future-expansion-section">
        <div className="future-expansion-container">
          <div className="expansion-content">
            <div className="expansion-text">
              <h2>Continuous Growth & Innovation</h2>
              <p>
                SWAM continues to grow year on year with approved plans for
                expansion. Our 5th manufacturing plant will increase our
                international presence and capabilities.
              </p>
              <div className="growth-pillars">
                <div className="pillar">
                  <FaShieldAlt />
                  <span>Integrity</span>
                </div>
                <div className="pillar">
                  <FaAward />
                  <span>High Quality</span>
                </div>
                <div className="pillar">
                  <FaCheckCircle />
                  <span>Reliability</span>
                </div>
                <div className="pillar">
                  <FaRocket />
                  <span>Innovation</span>
                </div>
              </div>
            </div>
            <div className="expansion-visual">
              <div className="expansion-card">
                <FaBuilding className="expansion-icon" />
                <h3>5th Manufacturing Plant</h3>
                <p>Sector-80, Noida</p>
                <div className="expansion-features">
                  <div className="expansion-feature">
                    <FaGlobe />
                    <span>International Operations</span>
                  </div>
                  <div className="expansion-feature">
                    <FaRocket />
                    <span>Innovation Center</span>
                  </div>
                  <div className="expansion-feature">
                    <FaCogs />
                    <span>Smart Manufacturing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default PlantsPage;
