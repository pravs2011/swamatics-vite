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
  FaMicrochip,
  FaBatteryFull,
  FaDesktop,
  FaSyncAlt,
  FaWater,
  FaOilCan,
  FaFlask,
  FaFire,
  FaWind,
  FaAtom,
} from "react-icons/fa";
import "./HybridHelicalBlowers.css";

const HybridHelicalBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaMicrochip className="feature-icon" />,
      title: "Computer Generated Rotor Profile",
      description:
        "Advanced rotor profile design for better uniform clearances and higher volumetric efficiency",
      details:
        "Precision-engineered rotor profiles generated using advanced CAD/CAM technology for optimal performance",
      benefit: "Higher volumetric efficiency",
    },
    {
      icon: <FaDesktop className="feature-icon" />,
      title: "Integrated VFD & HMI System",
      description:
        "Complete integrated package with VFD Touchscreen, HMI, and complete instruments",
      details:
        "Advanced control system with interlocking and logic control for optimal operation and monitoring",
      benefit: "Smart automation control",
    },
    {
      icon: <FaSyncAlt className="feature-icon" />,
      title: "High Turn Down Capability",
      description:
        "Exceptional turn down capability as low as 20% for process optimization",
      details:
        "Superior operational flexibility compared to conventional blowers with 100-60% turndown limits",
      benefit: "20% minimum turndown ratio",
    },
    {
      icon: <FaBatteryFull className="feature-icon" />,
      title: "Energy Efficient Design",
      description:
        "Advanced technology design for maximum energy efficiency and cost savings",
      details:
        "Optimized for process optimization and energy saving, particularly suited for SBR based STP operations",
      benefit: "Maximum energy savings",
    },
  ];

  const applications = [
    {
      title: "Chemical & Petrochemicals",
      description: "Process optimization in chemical manufacturing plants",
      icon: <FaFlask />,
      image: "🧪",
      benefits: [
        "Process gas circulation",
        "Chemical compatibility",
        "Energy optimization",
      ],
    },
    {
      title: "Waste Water Treatment",
      description: "SBR based STP operations with superior efficiency",
      icon: <FaWater />,
      image: "💧",
      benefits: [
        "20% turndown capability",
        "Process optimization",
        "Energy savings",
      ],
    },
    {
      title: "Power Plants",
      description: "Reliable operation in power generation facilities",
      icon: <FaRocket />,
      image: "⚡",
      benefits: ["Continuous operation", "High reliability", "Low maintenance"],
    },
    {
      title: "Cement Plants",
      description: "Robust performance in demanding cement manufacturing",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Dust handling capability",
        "High-temperature operation",
        "Robust construction",
      ],
    },
    {
      title: "Refineries",
      description: "Process gas handling in refinery operations",
      icon: <FaOilCan />,
      image: "⚗️",
      benefits: [
        "High-pressure capability",
        "Continuous duty",
        "Corrosion resistance",
      ],
    },
    {
      title: "Food Processing",
      description: "Hygienic operation for food industry applications",
      icon: <FaLeaf />,
      image: "🍃",
      benefits: ["Hygienic design", "Food-grade materials", "Clean operation"],
    },
    {
      title: "Environmental Systems",
      description: "Environmental control and treatment applications",
      icon: <FaRecycle />,
      image: "🌱",
      benefits: [
        "Environmental compliance",
        "Emission control",
        "Clean technology",
      ],
    },
    {
      title: "Metallurgy",
      description: "Metal processing and treatment applications",
      icon: <FaFire />,
      image: "🔥",
      benefits: [
        "High-temperature capability",
        "Metal process gases",
        "Industrial grade",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Flow Capacity",
      value: "Up to 55,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Discharge Pressure",
      value: "Up to 1.20 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Bio-Gas Capacity",
      value: "Up to 35,000 M³/Hr",
      icon: <FaRecycle />,
      color: "#f59e0b",
    },
    {
      parameter: "Turndown Ratio",
      value: "As low as 20%",
      icon: <FaSyncAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "30+ Years Innovation",
      description: "Three decades of experience in advanced blower technology",
      icon: <FaAward />,
      stat: "30+",
      unit: "Years",
    },
    {
      title: "Superior Efficiency",
      description:
        "Higher volumetric efficiency with computer-generated profiles",
      icon: <FaMicrochip />,
      stat: "95%+",
      unit: "Efficiency",
    },
    {
      title: "CNC Precision",
      description: "High accuracy manufacturing on CNC machines",
      icon: <FaCogs />,
      stat: "100%",
      unit: "CNC Made",
    },
    {
      title: "Smart Control",
      description: "Integrated VFD, HMI with complete automation",
      icon: <FaDesktop />,
      stat: "100%",
      unit: "Automated",
    },
  ];

  // Using the specified image name for hybrid helical blowers
  const productImageUrl = "/images/super-Hybrid-Helical-Blowers.png";

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
              <FaMicrochip className="badge-icon" />
              <span>Next Generation Technology</span>
            </div>
            <h1 className="hero-title">
              Super
              <span className="gradient-text"> Helical Hybrid Blower</span>
            </h1>
            <p className="hero-description">
              Most advanced machine with complete integrated package featuring
              VFD Touchscreen, HMI, and complete instruments for interlocking
              and logic control. Engineered with computer-generated rotor
              profiles for superior volumetric efficiency and unmatched
              reliability.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">55,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20%</div>
                <div className="stat-label">Min Turndown</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1.20</div>
                <div className="stat-label">kg/cm² Pressure</div>
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
                alt="Super Helical Hybrid Blower"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaMicrochip />
                  <span>Smart Control</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaSyncAlt />
                  <span>20% Turndown</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaBatteryFull />
                  <span>Energy Efficient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Highlights Section */}
      <section className="gas-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Advanced Technology Features</h2>
            <p>
              Next generation helical TR-Series with cutting-edge engineering
            </p>
          </div>

          <div className="gas-grid">
            <div className="gas-card" style={{ "--accent-color": "#3b82f6" }}>
              <div className="gas-icon">
                <FaCogs />
              </div>
              <div className="gas-info">
                <h3>CNC Precision</h3>
                <div className="gas-symbol">Manufacturing</div>
                <div className="gas-applications">
                  <span className="application-tag">High Accuracy</span>
                  <span className="application-tag">Quality Control</span>
                </div>
              </div>
            </div>

            <div className="gas-card" style={{ "--accent-color": "#10b981" }}>
              <div className="gas-icon">
                <FaMicrochip />
              </div>
              <div className="gas-info">
                <h3>Computer Generated</h3>
                <div className="gas-symbol">Rotor Profile</div>
                <div className="gas-applications">
                  <span className="application-tag">Uniform Clearances</span>
                  <span className="application-tag">High Efficiency</span>
                </div>
              </div>
            </div>

            <div className="gas-card" style={{ "--accent-color": "#f59e0b" }}>
              <div className="gas-icon">
                <FaShieldAlt />
              </div>
              <div className="gas-info">
                <h3>Robust Design</h3>
                <div className="gas-symbol">Heavy Duty</div>
                <div className="gas-applications">
                  <span className="application-tag">
                    Anti-friction Bearings
                  </span>
                  <span className="application-tag">Oil Lubricated</span>
                </div>
              </div>
            </div>

            <div className="gas-card" style={{ "--accent-color": "#ef4444" }}>
              <div className="gas-icon">
                <FaDesktop />
              </div>
              <div className="gas-info">
                <h3>Smart Integration</h3>
                <div className="gas-symbol">VFD + HMI</div>
                <div className="gas-applications">
                  <span className="application-tag">Touchscreen Control</span>
                  <span className="application-tag">Logic Interlocking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="modern-features-section">
        <div className="container">
          <div className="section-header">
            <h2>Key Performance Features</h2>
            <p>
              Enhanced reliability, energy efficiency, and lower maintenance
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
                The Super Helical Hybrid Blower represents the pinnacle of
                blower technology with rugged construction, appropriate rotor
                shaft design for low deflection, and critical speed
                considerations. Manufactured with high accuracy on CNC machines
                for consistent performance.
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
                  <span>CNC Manufactured</span>
                </div>
                <div className="badge">
                  <FaMicrochip />
                  <span>Smart Control</span>
                </div>
              </div>
            </div>

            <div className="specs-visual">
              <div className="product-display">
                <img
                  src={productImageUrl}
                  alt="Super Helical Hybrid Blower Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">
                    Computer Generated Rotor Profile
                  </div>
                  <div className="highlight">VFD Touchscreen Control</div>
                  <div className="highlight">Heavy Duty Bearings</div>
                  <div className="highlight">CNC Precision Manufacturing</div>
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
            <p>
              Optimized for SBR based STP operations and diverse industrial
              processes
            </p>
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
            <h2>Why Choose SWAM Super Helical Hybrid Blowers</h2>
            <p>Leading innovation in next-generation blower technology</p>
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

      {/* SBR Optimization Section */}
      <section
        className="gas-types-section"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <div className="container">
          <div className="section-header">
            <h2>SBR Based STP Optimization</h2>
            <p>
              Most suited for Sequential Batch Reactor operations with superior
              efficiency
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div
              className="gas-card"
              style={{ "--accent-color": "#10b981", maxWidth: "300px" }}
            >
              <div className="gas-icon">
                <FaSyncAlt />
              </div>
              <div className="gas-info">
                <h3>Superior Turndown</h3>
                <div className="gas-symbol">20% Minimum</div>
                <div className="gas-applications">
                  <span className="application-tag">vs 60% Others</span>
                  <span className="application-tag">Process Optimization</span>
                </div>
              </div>
            </div>

            <div
              className="gas-card"
              style={{ "--accent-color": "#3b82f6", maxWidth: "300px" }}
            >
              <div className="gas-icon">
                <FaBatteryFull />
              </div>
              <div className="gas-info">
                <h3>Energy Savings</h3>
                <div className="gas-symbol">Maximum</div>
                <div className="gas-applications">
                  <span className="application-tag">Variable Flow</span>
                  <span className="application-tag">Optimized Power</span>
                </div>
              </div>
            </div>

            <div
              className="gas-card"
              style={{ "--accent-color": "#f59e0b", maxWidth: "300px" }}
            >
              <div className="gas-icon">
                <FaWater />
              </div>
              <div className="gas-info">
                <h3>STP Optimized</h3>
                <div className="gas-symbol">Best Fit</div>
                <div className="gas-applications">
                  <span className="application-tag">Wastewater Treatment</span>
                  <span className="application-tag">Process Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Upgrade to Smart Blower Technology?</h2>
            <p>
              Experience the next generation of blower technology with
              integrated smart controls, superior efficiency, and unmatched
              reliability for your critical applications.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <FaPhone />
                <span>Get Technical Consultation</span>
              </button>
              <button className="cta-secondary">
                <FaDownload />
                <span>Download Product Brochure</span>
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
                  alt="Super Helical Hybrid Blower - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Super Helical Hybrid Blower</h3>
                  <p>Next Generation Smart Blower Technology</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 55,000 M³/Hr</span>
                    <span>Pressure: Up to 1.20 kg/cm²</span>
                    <span>Turndown: As low as 20%</span>
                    <span>Features: VFD + HMI + Smart Control</span>
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

export default HybridHelicalBlowers;
