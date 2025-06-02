import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaCogs,
  FaIndustry,
  FaChartLine,
  FaShieldAlt,
  FaTools,
  FaLeaf,
  FaThermometerHalf,
  FaTachometerAlt,
  FaVolumeDown,
  FaWrench,
  FaCheckCircle,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaRecycle,
  FaLightbulb,
  FaAward,
  FaRocket,
  FaPlay,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaCertificate,
  FaAtom,
  FaFlask,
  FaFire,
  FaWind,
  FaOilCan,
} from "react-icons/fa";
import "./ProcessGasBlowers.css";

const ProcessGasBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Improved Sealing System",
      description:
        "Advanced leak-proof sealing technology for gas circulation applications",
      details:
        "Mechanical seals fitted when application warrants, ensuring zero leakage for critical gas handling processes",
      benefit: "100% leak-proof operation",
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: "Special Construction Materials",
      description:
        "Materials specifically selected based on the nature of gas being handled",
      details:
        "Corrosion-resistant materials and coatings designed for specific gas compositions and operating conditions",
      benefit: "Extended equipment life",
    },
    {
      icon: <FaAtom className="feature-icon" />,
      title: "Multi-Gas Compatibility",
      description:
        "Handles diverse industrial gases including Hydrogen, Nitrogen, Oxygen, and more",
      details:
        "Engineered for Biogas, CO2, Methane, Mixed Gas, BF Gas, Coke Oven Gas applications",
      benefit: "Versatile gas handling",
    },
    {
      icon: <FaIndustry className="feature-icon" />,
      title: "Chemical Process Optimization",
      description:
        "Specifically designed for circulation of gases in chemical processes",
      details:
        "Optimized for continuous operation in demanding chemical and petrochemical environments",
      benefit: "Process efficiency boost",
    },
  ];

  const gasTypes = [
    {
      name: "Hydrogen",
      symbol: "H₂",
      icon: <FaAtom />,
      color: "#3b82f6",
      applications: ["Petrochemical", "Refining", "Steel Production"],
    },
    {
      name: "Nitrogen",
      symbol: "N₂",
      icon: <FaFlask />,
      color: "#10b981",
      applications: ["Inerting", "Blanketing", "Food Processing"],
    },
    {
      name: "Oxygen",
      symbol: "O₂",
      icon: <FaWind />,
      color: "#f59e0b",
      applications: ["Combustion", "Oxidation", "Medical"],
    },
    {
      name: "Biogas",
      symbol: "CH₄",
      icon: <FaRecycle />,
      color: "#10b981",
      applications: ["Energy Recovery", "Waste Treatment", "Power Generation"],
    },
    {
      name: "Carbon Dioxide",
      symbol: "CO₂",
      icon: <FaLeaf />,
      color: "#6b7280",
      applications: [
        "Food Processing",
        "Chemical Synthesis",
        "Enhanced Oil Recovery",
      ],
    },
    {
      name: "Methane",
      symbol: "CH₄",
      icon: <FaFire />,
      color: "#ef4444",
      applications: ["Natural Gas", "Landfill Gas", "Digester Gas"],
    },
  ];

  const applications = [
    {
      title: "Chemical Processing",
      description: "Gas circulation and boosting in chemical manufacturing",
      icon: <FaFlask />,
      image: "🧪",
      benefits: [
        "Precise gas flow control",
        "Chemical compatibility",
        "Process optimization",
      ],
    },
    {
      title: "Petrochemical Industry",
      description:
        "Handling of process gases in refineries and petrochemical plants",
      icon: <FaOilCan />,
      image: "⚗️",
      benefits: [
        "High-pressure capability",
        "Corrosion resistance",
        "Continuous operation",
      ],
    },
    {
      title: "Steel & Metal Processing",
      description: "BF Gas and Coke Oven Gas handling in steel plants",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "High-temperature operation",
        "Dust handling capability",
        "Robust construction",
      ],
    },
    {
      title: "Power Generation",
      description: "Biogas and natural gas boosting for power plants",
      icon: <FaRocket />,
      image: "⚡",
      benefits: ["Energy efficiency", "Reliable gas supply", "Low maintenance"],
    },
    {
      title: "Environmental Systems",
      description:
        "Gas handling in environmental control and treatment systems",
      icon: <FaLeaf />,
      image: "🌱",
      benefits: [
        "Emission control",
        "Environmental compliance",
        "Clean technology",
      ],
    },
    {
      title: "Food & Pharmaceutical",
      description:
        "Inert gas handling for food processing and pharmaceutical applications",
      icon: <FaShieldAlt />,
      image: "🍃",
      benefits: ["Contamination-free", "FDA compliance", "Sterile operation"],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 85,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Up to 1.1 bar 'g'",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Operation",
      value: "Continuous Duty",
      icon: <FaTools />,
      color: "#f59e0b",
    },
    {
      parameter: "Sealing",
      value: "Leak-Proof Design",
      icon: <FaShieldAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "40+ Years Experience",
      description: "Four decades of expertise in gas handling technology",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "Multi-Gas Capability",
      description: "Handles diverse industrial gases safely and efficiently",
      icon: <FaAtom />,
      stat: "10+",
      unit: "Gas Types",
    },
    {
      title: "Global Installations",
      description: "Trusted by industries worldwide for critical applications",
      icon: <FaGlobe />,
      stat: "500+",
      unit: "Installations",
    },
    {
      title: "Zero Leakage",
      description: "Advanced sealing technology ensures leak-proof operation",
      icon: <FaShieldAlt />,
      stat: "100%",
      unit: "Leak-Proof",
    },
  ];

  // Using the official process gas blowers image from Swamatics website
  const productImageUrl =
    "https://swamatics.com/wp-content/uploads/2024/05/Process-Gas-BlowersGas-Boosters-600x465.jpg";

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="modern-hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <br />
            <div className="hero-badge">
              <FaAtom className="badge-icon" />
              <span>Process Gas Solutions</span>
            </div>
            <h1 className="hero-title">
              Advanced
              <span className="gradient-text"> Process Gas Blowers</span>
            </h1>
            <p className="hero-description">
              Engineered for chemical process gas circulation and boosting.
              Handle diverse industrial gases including Hydrogen, Nitrogen,
              Oxygen, Biogas, CO₂, Methane, and specialized process gases with
              unmatched reliability and leak-proof performance.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">85,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1.1</div>
                <div className="stat-label">Bar Pressure</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Leak-Proof</div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn-primary">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="btn-secondary">
                <FaPlay />
                <span>Technical Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="hero-visual">
            <div className="product-showcase">
              <div className="showcase-bg"></div>
              <img
                src={productImageUrl}
                alt="Process Gas Blower"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaShieldAlt />
                  <span>Leak-Proof</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaAtom />
                  <span>Multi-Gas</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaCogs />
                  <span>Chemical Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Types Section */}
      <section className="gas-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Supported Gas Types</h2>
            <p>
              Engineered to handle diverse industrial gases with precision and
              safety
            </p>
          </div>

          <div className="gas-grid">
            {gasTypes.map((gas, index) => (
              <div
                key={index}
                className="gas-card"
                style={{ "--accent-color": gas.color }}
              >
                <div className="gas-icon">{gas.icon}</div>
                <div className="gas-info">
                  <h3>{gas.name}</h3>
                  <div className="gas-symbol">{gas.symbol}</div>
                  <div className="gas-applications">
                    {gas.applications.map((app, idx) => (
                      <span key={idx} className="application-tag">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="modern-features-section">
        <div className="container">
          <div className="section-header">
            <h2>Advanced Technology Features</h2>
            <p>
              Specialized design elements for safe and efficient gas handling
            </p>
          </div>

          <div className="features-grid">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${
                  activeFeature === index ? "active" : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-benefit">
                  <FaCheckCircle />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="feature-details">
                    <p>{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="modern-specs-section">
        <div className="container">
          <div className="specs-content">
            <div className="specs-info">
              <h2>Technical Specifications</h2>
              <p>
                Our process gas blowers are engineered for demanding chemical
                and industrial applications, delivering reliable performance
                with specialized materials and advanced sealing systems.
              </p>

              <div className="specs-grid">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="spec-card"
                    style={{ "--accent-color": spec.color }}
                  >
                    <div className="spec-icon">{spec.icon}</div>
                    <div className="spec-info">
                      <h4>{spec.parameter}</h4>
                      <div className="spec-value">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="quality-badges">
                <div className="badge">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="badge">
                  <FaAward />
                  <span>ATEX Certified</span>
                </div>
                <div className="badge">
                  <FaShieldAlt />
                  <span>Leak-Proof Design</span>
                </div>
              </div>
            </div>

            <div className="specs-visual">
              <div className="product-display">
                <img
                  src={productImageUrl}
                  alt="Process Gas Blower Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Improved Sealing System</div>
                  <div className="highlight">
                    Special Construction Materials
                  </div>
                  <div className="highlight">Mechanical Seals Available</div>
                  <div className="highlight">Chemical Process Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="modern-applications-section">
        <div className="container">
          <div className="section-header">
            <h2>Industrial Applications</h2>
            <p>Powering critical processes across diverse industries</p>
          </div>

          <div className="applications-layout">
            <div className="applications-tabs">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`app-tab ${
                    selectedApplication === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="app-emoji">{app.image}</div>
                  <div className="app-info">
                    <h4>{app.title}</h4>
                    <p>{app.description}</p>
                  </div>
                  <FaArrowRight className="tab-arrow" />
                </div>
              ))}
            </div>

            <div className="application-showcase">
              <div className="showcase-header">
                <div className="app-icon">
                  {applications[selectedApplication].image}
                </div>
                <h3>{applications[selectedApplication].title}</h3>
                <p>{applications[selectedApplication].description}</p>
              </div>

              <div className="benefits-grid">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div key={index} className="benefit-card">
                      <FaCheckCircle />
                      <span>{benefit}</span>
                    </div>
                  )
                )}
              </div>

              <button className="learn-more-btn">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="modern-advantages-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SWAM Process Gas Blowers</h2>
            <p>Proven expertise in specialized gas handling applications</p>
          </div>

          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">{advantage.icon}</div>
                <div className="advantage-stat">
                  <div className="stat-number">{advantage.stat}</div>
                  <div className="stat-unit">{advantage.unit}</div>
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need a Custom Gas Handling Solution?</h2>
            <p>
              Our technical experts will help you select the right process gas
              blower for your specific gas type and application requirements.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <FaPhone />
                <span>Get Technical Consultation</span>
              </button>
              <button className="cta-secondary">
                <FaDownload />
                <span>Download Product Catalog</span>
              </button>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <span>+91-99103-02163</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>sales@swamatics.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>C-2, Sector-3, Noida-201301, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div
            className="image-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image-wrapper">
              <div className="modal-image-container">
                <img
                  src={modalImage}
                  alt="Process Gas Blower - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Process Gas Blower/Compressor</h3>
                  <p>Advanced Gas Circulation & Boosting System</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 85,000 M³/Hr</span>
                    <span>Pressure: Up to 1.1 bar 'g'</span>
                    <span>Operation: Leak-Proof & Continuous Duty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default ProcessGasBlowers;
