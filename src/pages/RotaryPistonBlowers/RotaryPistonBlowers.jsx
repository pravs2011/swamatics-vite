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
} from "react-icons/fa";
import "./RotaryPistonBlowers.css";

const RotaryPistonBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaCogs className="feature-icon" />,
      title: "Advanced Rotor Design",
      description:
        "Computer-generated rotor profiles for optimal performance and efficiency",
      details:
        "Precision-engineered rotors with uniform clearances and higher volumetric efficiencies",
      benefit: "Up to 15% higher efficiency",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Heavy Duty Construction",
      description:
        "Ruggedly built with appropriate rotor shaft design for low deflection",
      details:
        "Anti-friction oil lubricated bearings for continuous operation and reliability",
      benefit: "99.5% uptime reliability",
    },
    {
      icon: <FaTools className="feature-icon" />,
      title: "CNC Precision Manufacturing",
      description:
        "Manufactured on CNC machines for high accuracy and consistency",
      details:
        "State-of-the-art manufacturing ensures dimensional precision and quality",
      benefit: "±0.01mm precision",
    },
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Oil-Free Operation",
      description:
        "Ideal for oil-free conveying of industrial gases and materials",
      details:
        "Clean operation suitable for sensitive applications and food-grade processes",
      benefit: "100% oil-free guarantee",
    },
  ];

  const applications = [
    {
      title: "Lime Calcination Plants",
      description: "High-temperature material processing and conveying",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "High temperature resistance",
        "Continuous operation",
        "Reliable performance",
      ],
    },
    {
      title: "Mixed Gas & BF Gas Boosting",
      description: "Blast furnace and coke oven gas handling systems",
      icon: <FaRocket />,
      image: "⚡",
      benefits: [
        "Gas boosting capability",
        "Pressure enhancement",
        "Industrial gas handling",
      ],
    },
    {
      title: "DRI Plants",
      description: "Direct Reduced Iron plant applications",
      icon: <FaCogs />,
      image: "🔧",
      benefits: [
        "Process gas handling",
        "High reliability",
        "Continuous operation",
      ],
    },
    {
      title: "Fluid Bed Combustion",
      description: "Fluidized bed combustion systems",
      icon: <FaThermometerHalf />,
      image: "🔥",
      benefits: [
        "Combustion air supply",
        "Temperature control",
        "Efficient operation",
      ],
    },
    {
      title: "Digester Gas Processing",
      description: "Biogas and digester gas handling",
      icon: <FaRecycle />,
      image: "♻️",
      benefits: [
        "Biogas processing",
        "Environmental friendly",
        "Energy recovery",
      ],
    },
    {
      title: "Flue Gas Desulphurisation",
      description: "Environmental emission control systems",
      icon: <FaLeaf />,
      image: "🌱",
      benefits: [
        "Emission control",
        "Environmental compliance",
        "Clean technology",
      ],
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
      parameter: "Vacuum",
      value: "0.5 bar",
      icon: <FaVolumeDown />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Continuous Duty",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "40+ Years Experience",
      description: "Four decades of innovation in rotary blower technology",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "99.5% Reliability",
      description: "Proven track record of continuous operation",
      icon: <FaShieldAlt />,
      stat: "99.5%",
      unit: "Uptime",
    },
    {
      title: "1000+ Installations",
      description: "Trusted by industries worldwide",
      icon: <FaUsers />,
      stat: "1000+",
      unit: "Clients",
    },
    {
      title: "ISO Certified",
      description: "Quality management system certified",
      icon: <FaCertificate />,
      stat: "ISO",
      unit: "9001:2015",
    },
  ];

  const productImageUrl =
    "https://swamatics.com/wp-content/uploads/2024/05/rotary-twin.jpg";

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
              <FaStar className="badge-icon" />
              <span>Axcel TR-Series</span>
            </div>
            <h1 className="hero-title">
              Next-Generation
              <span className="gradient-text"> Rotary Blowers</span>
            </h1>
            <p className="hero-description">
              Experience the future of industrial air movement with SWAM's
              advanced rotary twin & tri-lobe blowers. Engineered for
              excellence, built for reliability, designed for your success.
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
                <div className="stat-label">Oil-Free</div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn-primary">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="btn-secondary">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="hero-visual">
            <div className="product-showcase">
              <div className="showcase-bg"></div>
              <img
                src={productImageUrl}
                alt="Rotary Twin & Tri-Lobe Blower"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaLeaf />
                  <span>Oil-Free</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaCogs />
                  <span>CNC Precision</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaShieldAlt />
                  <span>Heavy Duty</span>
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
            <h2>Advanced Technology Features</h2>
            <p>
              Discover the innovative technologies that make our blowers
              industry leaders
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
              <h2>Technical Excellence</h2>
              <p>
                Our rotary piston blowers deliver exceptional performance across
                demanding industrial applications with unmatched reliability and
                efficiency.
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
                  <span>CE Certified</span>
                </div>
                <div className="badge">
                  <FaShieldAlt />
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="specs-visual">
              <div className="product-display">
                <img
                  src={productImageUrl}
                  alt="Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">
                    Computer-Generated Rotor Profiles
                  </div>
                  <div className="highlight">CNC Precision Manufacturing</div>
                  <div className="highlight">Anti-Friction Bearings</div>
                  <div className="highlight">Continuous Duty Operation</div>
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
              Powering diverse industries with reliable, efficient solutions
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
            <h2>Why Choose SWAM</h2>
            <p>Four decades of excellence in rotary blower technology</p>
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
            <h2>Ready to Experience Excellence?</h2>
            <p>
              Connect with our technical experts to find the perfect rotary
              blower solution for your specific requirements.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="cta-secondary">
                <FaDownload />
                <span>Download Technical Brochure</span>
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
                <span>Noida, India</span>
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
                  alt="Rotary Twin & Tri-Lobe Blower - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Rotary Twin & Tri-Lobe Blower</h3>
                  <p>Axcel TR-Series - Advanced Technology Blower</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 85,000 M³/Hr</span>
                    <span>Pressure: Up to 1.1 bar 'g'</span>
                    <span>Operation: Oil-Free & Continuous Duty</span>
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

export default RotaryPistonBlowers;
