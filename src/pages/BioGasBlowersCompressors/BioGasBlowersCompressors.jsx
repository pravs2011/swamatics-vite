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
} from "react-icons/fa";
import "../TruckBlowers/TruckBlowers.css";
import { FaGears } from "react-icons/fa6";

import "./BioGasBlowersCompressors.css";

const BioGasBlowersCompressors = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaGears className="feature-icon" />,
      title: "Dual Design Options",
      description:
        "Available in two specialized designs: Rotary lobe type and sliding vane compressors",
      details:
        "Choose between rotary lobe technology for high volume applications or sliding vane design for higher pressure requirements",
      benefit: "Design flexibility",
    },
    {
      icon: <FaAtom className="feature-icon" />,
      title: "Multiple MOC Options",
      description:
        "Available in various materials of construction - CI, CS, SS and more",
      details:
        "Corrosion-resistant materials ensure long service life and compatibility with different bio gas compositions",
      benefit: "Material versatility",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "High Capacity Range",
      description:
        "Rotary bio-gas blowers handle up to 12,000 M³/Hr with superior efficiency",
      details:
        "Large capacity handling for industrial bio gas applications with consistent performance across the operating range",
      benefit: "High throughput",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Pressure Capability",
      description: "Sliding vane compressors deliver up to 3.0 bar pressure",
      details:
        "High pressure generation capability for demanding bio gas compression and transport applications",
      benefit: "High pressure output",
    },
  ];

  const applications = [
    {
      title: "Waste Treatment Plants",
      description:
        "Bio gas collection and compression from wastewater treatment facilities",
      icon: <FaRecycle />,
      image: "🏭",
      benefits: ["Efficient gas collection", "Odor control", "Energy recovery"],
    },
    {
      title: "Landfill Gas Recovery",
      description: "Extraction and compression of methane from landfill sites",
      icon: <FaWarehouse />,
      image: "⛽",
      benefits: [
        "Methane capture",
        "Environmental protection",
        "Energy generation",
      ],
    },
    {
      title: "Agricultural Biogas",
      description: "Processing biogas from agricultural waste and digestion",
      icon: <FaSeedling />,
      image: "🌱",
      benefits: ["Farm waste utilization", "Renewable energy", "Cost savings"],
    },
    {
      title: "Industrial Applications",
      description: "Bio gas handling for industrial energy generation",
      icon: <FaIndustry />,
      image: "🏗️",
      benefits: [
        "Industrial energy supply",
        "Process heating",
        "Power generation",
      ],
    },
    {
      title: "Gas Distribution",
      description: "Compression for bio gas distribution networks",
      icon: <FaGasPump />,
      image: "🔄",
      benefits: [
        "Network pressure maintenance",
        "Efficient distribution",
        "System reliability",
      ],
    },
    {
      title: "Energy Recovery",
      description: "Bio gas processing for renewable energy systems",
      icon: <FaBolt />,
      image: "⚡",
      benefits: ["Clean energy", "Carbon reduction", "Sustainable power"],
    },
  ];

  const specifications = [
    {
      parameter: "Rotary Capacity",
      value: "Up to 12,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Rotary Pressure",
      value: "Up to 1.0 bar g",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Vane Capacity",
      value: "4,500 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Vane Pressure",
      value: "Up to 3.0 bar g",
      icon: <FaGasPump />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Dual Technology",
      description:
        "Choice between rotary lobe and sliding vane technology for optimal application fit",
      icon: <FaGears />,
      stat: "2",
      unit: "Design Types",
    },
    {
      title: "High Pressure",
      description: "Sliding vane compressors deliver up to 3.0 bar pressure",
      icon: <FaGasPump />,
      stat: "3.0",
      unit: "Bar Pressure",
    },
    {
      title: "Large Capacity",
      description: "Rotary blowers handle up to 12,000 M³/Hr capacity",
      icon: <FaTachometerAlt />,
      stat: "12,000",
      unit: "M³/Hr",
    },
    {
      title: "Material Options",
      description: "Multiple MOC options including CI, CS, SS for durability",
      icon: <FaShieldAlt />,
      stat: "Multiple",
      unit: "MOC Options",
    },
  ];

  const productImageUrl = "/images/bio-Gas-Blowers-Compressors.jpg";

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
              <span>Bio Gas Technology</span>
            </div>
            <h1 className="hero-title">
              Advanced
              <span className="gradient-text">
                {" "}
                Bio Gas Blowers & Compressors
              </span>
            </h1>
            <p className="hero-description">
              SWAM Bio Gas Blowers and Compressors are available in wide range
              with two specialized designs - Rotary lobe type and sliding vane
              compressors. Available in various MOCs (CI, CS, SS) for optimal
              performance in renewable energy applications.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">12,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3.0</div>
                <div className="stat-label">Bar Pressure</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Design Types</div>
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
                alt="Bio Gas Blowers & Compressors - Renewable Energy Solutions"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaLeaf />
                  <span>Eco-Friendly</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaGears />
                  <span>Dual Design</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaShieldAlt />
                  <span>Multiple MOCs</span>
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
            <h2>Bio Gas Technology Features</h2>
            <p>
              Discover the specialized technologies that make our bio gas
              blowers and compressors perfect for renewable energy applications
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
            <h2>Advanced Bio Gas Technology</h2>
            <p>
              Specialized blower and compressor technology designed for
              efficient bio gas handling and renewable energy applications
            </p>
          </div>

          <div className="technology-showcase">
            {/* Technology Overview */}
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaLeaf />
                  <span>Renewable Energy Optimized</span>
                </div>
                <h3>Why Our Bio Gas Solutions Excel</h3>
                <p>
                  SWAM bio gas blowers and compressors are engineered
                  specifically for bio gas applications, providing reliable
                  performance in renewable energy systems. Our dual design
                  approach offers both rotary lobe and sliding vane technologies
                  to meet diverse application requirements with superior
                  efficiency.
                </p>
                <div className="efficiency-highlight">
                  <div className="efficiency-stat">
                    <span className="stat-number">Rotary</span>
                    <span className="stat-label">Lobe Technology</span>
                  </div>
                  <div className="efficiency-stat">
                    <span className="stat-number">Sliding</span>
                    <span className="stat-label">Vane Design</span>
                  </div>
                  <div className="efficiency-stat">
                    <span className="stat-number">Multiple</span>
                    <span className="stat-label">MOC Options</span>
                  </div>
                </div>
              </div>
              <div className="tech-visual-main">
                <img
                  src={productImageUrl}
                  alt="Bio Gas Blower & Compressor Technology"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Rotary Lobe Design</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Sliding Vane Option</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">
                      Corrosion Resistant MOC
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaGears />
                </div>
                <h4>Rotary Lobe Technology</h4>
                <p>
                  High-capacity rotary lobe design for bio gas applications,
                  delivering up to 12,000 M³/Hr with pressure up to 1.0 bar
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Capacity:</span>
                    <span className="spec-value">Up to 12,000 M³/Hr</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Pressure:</span>
                    <span className="spec-value">Up to 1.0 bar g</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaWind />
                </div>
                <h4>Sliding Vane Design</h4>
                <p>
                  High-pressure sliding vane compressors for demanding bio gas
                  applications, delivering up to 3.0 bar pressure
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>4,500 M³/Hr capacity</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Up to 3.0 bar pressure</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaShieldAlt />
                </div>
                <h4>Material Options</h4>
                <p>
                  Available in various materials of construction including CI,
                  CS, SS for optimal corrosion resistance and longevity
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Cast Iron (CI) construction</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Stainless Steel (SS) option</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaLeaf />
                </div>
                <h4>Eco-Friendly Operation</h4>
                <p>
                  Designed for renewable energy applications, supporting
                  sustainable bio gas utilization and environmental protection
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Clean energy support</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Environmental compliance</span>
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
              <h2>Technical Excellence</h2>
              <p>
                Our bio gas blowers and compressors deliver exceptional
                performance for renewable energy applications, providing
                reliable gas handling with dual technology options for diverse
                requirements.
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
                  alt="Bio Gas Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Dual Design Technology</div>
                  <div className="highlight">High Pressure Capability</div>
                  <div className="highlight">Multiple MOC Options</div>
                  <div className="highlight">Renewable Energy Ready</div>
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
            <h2>Bio Gas Applications</h2>
            <p>
              Powering sustainable energy solutions across diverse bio gas
              processing and utilization applications
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
            <h2>Why Choose SWAM Bio Gas Solutions</h2>
            <p>Advanced technology for superior renewable energy performance</p>
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
            <h2>Ready for Sustainable Energy Solutions?</h2>
            <p>
              Connect with our technical experts to discover how our bio gas
              blowers and compressors can optimize your renewable energy
              applications with reliable performance and environmental benefits.
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
                  alt="Bio Gas Blowers & Compressors - Renewable Energy Solutions - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Bio Gas Blowers & Compressors</h3>
                  <p>Advanced Renewable Energy Processing Systems</p>
                  <div className="modal-specs">
                    <span>Rotary: Up to 12,000 M³/Hr & 1.0 bar</span>
                    <span>Sliding Vane: 4,500 M³/Hr & 3.0 bar</span>
                    <span>Materials: CI, CS, SS Options Available</span>
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

export default BioGasBlowersCompressors;
