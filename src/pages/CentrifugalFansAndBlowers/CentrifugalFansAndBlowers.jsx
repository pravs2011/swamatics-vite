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
  FaBolt,
  FaWind,
  FaGasPump,
  FaWarehouse,
  FaBoxes,
  FaAtom,
  FaFire,
  FaSeedling,
  FaLayerGroup,
  FaCompressArrowsAlt,
  FaExpand,
} from "react-icons/fa";
import "../TruckBlowers/TruckBlowers.css";
import { FaGears } from "react-icons/fa6";

import "./CentrifugalFansAndBlowers.css";

const CentrifugalFansAndBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaLayerGroup className="feature-icon" />,
      title: "Multi-Stage Capability",
      description:
        "Single stage up to 1800 mmwg, higher pressures achievable through multi-staging",
      details:
        "Advanced multi-stage design allows for achieving higher static pressures while maintaining efficiency across the entire operating range",
      benefit: "High pressure flexibility",
    },
    {
      icon: <FaWind className="feature-icon" />,
      title: "High Capacity Range",
      description:
        "Exceptional capacity handling up to 1,20,000 M³/Hr for large-scale operations",
      details:
        "Industry-leading capacity range designed for demanding industrial applications with consistent performance and reliability",
      benefit: "Maximum throughput",
    },
    {
      icon: <FaAtom className="feature-icon" />,
      title: "Special Materials",
      description:
        "Manufactured with special materials for gas conveying applications with superior durability",
      details:
        "Corrosion-resistant materials and specialized coatings ensure long service life in challenging gas handling environments",
      benefit: "Enhanced durability",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Advanced Sealing",
      description:
        "Equipped with mechanical and semi-mechanical seals for reliable operation",
      details:
        "Professional-grade sealing systems prevent leakage and ensure safe operation in gas conveying applications",
      benefit: "Leak-proof operation",
    },
  ];

  const applications = [
    {
      title: "ID/FD Fan Systems",
      description:
        "Induced Draft and Forced Draft fans for boiler and furnace applications",
      icon: <FaFire />,
      image: "🔥",
      benefits: [
        "Efficient combustion air supply",
        "Flue gas handling",
        "Temperature control",
      ],
    },
    {
      title: "Gas Conveying",
      description:
        "Positive conveying and negative suction for various gas types",
      icon: <FaGasPump />,
      image: "💨",
      benefits: [
        "Positive pressure conveying",
        "Negative suction capability",
        "Multi-gas compatibility",
      ],
    },
    {
      title: "Industrial Ventilation",
      description: "Large-scale ventilation systems for industrial facilities",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: ["Air quality control", "Dust extraction", "Fume removal"],
    },
    {
      title: "Power Generation",
      description:
        "Critical air and gas handling for power plants and utilities",
      icon: <FaBolt />,
      image: "⚡",
      benefits: [
        "Combustion air supply",
        "Cooling systems",
        "Emissions control",
      ],
    },
    {
      title: "Material Handling",
      description: "Pneumatic conveying systems for bulk material transport",
      icon: <FaBoxes />,
      image: "📦",
      benefits: [
        "Pneumatic transport",
        "Dust control",
        "Efficient material flow",
      ],
    },
    {
      title: "Process Industries",
      description:
        "Specialized applications in chemical and process industries",
      icon: <FaCogs />,
      image: "⚙️",
      benefits: [
        "Process gas handling",
        "Chemical compatibility",
        "Precision control",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "1,20,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Static Pressure",
      value: "Up to 1800 mmwg",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Multi-Stage",
      value: "Higher Pressures",
      icon: <FaLayerGroup />,
      color: "#f59e0b",
    },
    {
      parameter: "Application",
      value: "ID/FD Systems",
      icon: <FaWind />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Pressure",
      description:
        "Single stage up to 1800 mmwg with multi-stage options for higher pressures",
      icon: <FaTachometerAlt />,
      stat: "1800",
      unit: "mmwg",
    },
    {
      title: "Maximum Capacity",
      description:
        "Industry-leading capacity up to 1,20,000 M³/Hr for large operations",
      icon: <FaChartLine />,
      stat: "1,20,000",
      unit: "M³/Hr",
    },
    {
      title: "Dual Operation",
      description:
        "ID/FD capability for both positive conveying and negative suction",
      icon: <FaWind />,
      stat: "ID/FD",
      unit: "Compatible",
    },
    {
      title: "Special Materials",
      description:
        "Advanced materials and sealing for gas conveying applications",
      icon: <FaShieldAlt />,
      stat: "Special",
      unit: "MOC & Seals",
    },
  ];

  const productImageUrl = "/images/swam-centrifugal-fans-and-blowers.png";

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
              <span>Industrial Fans & Blowers</span>
            </div>
            <h1 className="hero-title">
              High-Performance
              <span className="gradient-text"> Centrifugal Fans & Blowers</span>
            </h1>
            <p className="hero-description">
              SWAM Centrifugal Fans and Blowers deliver exceptional performance
              with static pressure up to 1800 mmwg in single stage and higher
              pressures through multi-staging. Designed for ID/FD applications
              with special materials and advanced sealing systems for reliable
              gas conveying operations.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">1,20,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1800</div>
                <div className="stat-label">mmwg Pressure</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">ID/FD</div>
                <div className="stat-label">Dual Capability</div>
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
                alt="Centrifugal Fans & Blowers - Industrial Air Movement Solutions"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaWind />
                  <span>High Capacity</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaTachometerAlt />
                  <span>High Pressure</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaShieldAlt />
                  <span>Special Materials</span>
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
            <h2>Advanced Centrifugal Technology</h2>
            <p>
              Discover the engineering excellence that makes our centrifugal
              fans and blowers ideal for demanding industrial gas conveying
              applications
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

      {/* Technology Section */}
      <section className="modern-technology-section">
        <div className="container">
          <div className="section-header">
            <h2>Centrifugal Fan Technology Excellence</h2>
            <p>
              Advanced engineering and materials science combine to deliver
              superior performance in industrial air and gas movement
              applications
            </p>
          </div>

          <div className="technology-showcase">
            {/* Technology Overview */}
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaWind />
                  <span>Industrial Grade Performance</span>
                </div>
                <h3>Why Our Centrifugal Fans Excel</h3>
                <p>
                  SWAM centrifugal fans and blowers are engineered for maximum
                  efficiency in industrial applications. Our advanced impeller
                  design and multi-stage capability deliver exceptional static
                  pressure performance while maintaining energy efficiency
                  across the entire operating range.
                </p>
                <div className="efficiency-highlight">
                  <div className="efficiency-stat">
                    <span className="stat-number">Single</span>
                    <span className="stat-label">Stage Design</span>
                  </div>
                  <div className="efficiency-stat">
                    <span className="stat-number">Multi</span>
                    <span className="stat-label">Stage Option</span>
                  </div>
                  <div className="efficiency-stat">
                    <span className="stat-number">Special</span>
                    <span className="stat-label">Materials</span>
                  </div>
                </div>
              </div>
              <div className="tech-visual-main">
                <img
                  src={productImageUrl}
                  alt="Centrifugal Fan Technology"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Advanced Impeller</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Multi-Stage Ready</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">
                      Special Material Construction
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaLayerGroup />
                </div>
                <h4>Multi-Stage Capability</h4>
                <p>
                  Single stage delivers up to 1800 mmwg static pressure, with
                  multi-stage options for even higher pressure requirements
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Single Stage:</span>
                    <span className="spec-value">Up to 1800 mmwg</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Multi-Stage:</span>
                    <span className="spec-value">Higher Pressures</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaChartLine />
                </div>
                <h4>High Capacity Design</h4>
                <p>
                  Industry-leading capacity up to 1,20,000 M³/Hr for large-scale
                  industrial applications with consistent performance
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Maximum 1,20,000 M³/Hr</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Scalable capacity range</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaWind />
                </div>
                <h4>ID/FD Applications</h4>
                <p>
                  Suitable for both Induced Draft and Forced Draft applications,
                  providing positive conveying and negative suction capabilities
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Positive conveying</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Negative suction</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaShieldAlt />
                </div>
                <h4>Advanced Materials & Sealing</h4>
                <p>
                  Special materials for gas conveying applications with
                  mechanical and semi-mechanical seals for reliable operation
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Corrosion resistant materials</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Professional sealing systems</span>
                  </div>
                </div>
              </div>
            </div>
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
                Our centrifugal fans and blowers deliver exceptional performance
                with industry-leading specifications designed for demanding
                industrial applications and gas conveying systems.
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
                  alt="Centrifugal Fan Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">High Static Pressure</div>
                  <div className="highlight">Multi-Stage Capability</div>
                  <div className="highlight">Special Materials</div>
                  <div className="highlight">Advanced Sealing</div>
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
              Powering critical industrial processes with reliable air and gas
              movement solutions across diverse applications
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
            <h2>Why Choose SWAM Centrifugal Fans</h2>
            <p>Advanced engineering for superior industrial performance</p>
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
            <h2>Ready for Industrial Excellence?</h2>
            <p>
              Connect with our engineering experts to discover how our
              centrifugal fans and blowers can optimize your industrial air and
              gas movement applications with superior performance and
              reliability.
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
                  alt="Centrifugal Fans & Blowers - Industrial Air Movement Solutions - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Centrifugal Fans & Blowers</h3>
                  <p>High-Performance Industrial Air Movement Systems</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 1,20,000 M³/Hr</span>
                    <span>Pressure: Up to 1800 mmwg Single Stage</span>
                    <span>Applications: ID/FD Systems & Gas Conveying</span>
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

export default CentrifugalFansAndBlowers;
