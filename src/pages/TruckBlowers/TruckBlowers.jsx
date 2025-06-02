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
  FaTruck,
  FaGasPump,
  FaWarehouse,
  FaBoxes,
} from "react-icons/fa";
import "./TruckBlowers.css";
import { FaGears } from "react-icons/fa6";

const TruckBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaTruck className="feature-icon" />,
      title: "Bulk Vehicle Optimized",
      description:
        "Specially designed for bulk and silo vehicles pneumatic loading and unloading operations",
      details:
        "Purpose-built for transport vehicle requirements with robust construction for mobile applications",
      benefit: "Optimized for vehicles",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Superior Design",
      description:
        "Superior in design and construction with highly energy efficient operation",
      details:
        "Advanced engineering with precision components for reliable performance in demanding conditions",
      benefit: "Energy efficient",
    },
    {
      icon: <FaWind className="feature-icon" />,
      title: "Dual Operation",
      description:
        "Available for both positive pressure and vacuum conveying applications",
      details:
        "Versatile design handles both pressure generation and vacuum creation for complete loading/unloading solutions",
      benefit: "Positive & vacuum",
    },
    {
      icon: <FaWrench className="feature-icon" />,
      title: "Easy Maintenance",
      description: "Easy to service and maintenance with accessible components",
      details:
        "Designed for field serviceability with minimal downtime and straightforward maintenance procedures",
      benefit: "Low maintenance",
    },
  ];

  const applications = [
    {
      title: "Bulk Material Loading",
      description:
        "Pneumatic loading of bulk materials into transport vehicles",
      icon: <FaBoxes />,
      image: "📦",
      benefits: ["Fast loading", "Dust-free operation", "Precise control"],
    },
    {
      title: "Silo Vehicle Operations",
      description: "Specialized applications for silo truck operations",
      icon: <FaWarehouse />,
      image: "🏭",
      benefits: [
        "High capacity handling",
        "Reliable operation",
        "Mobile efficiency",
      ],
    },
    {
      title: "Vacuum Unloading",
      description: "Efficient vacuum-based unloading systems",
      icon: <FaRecycle />,
      image: "♻️",
      benefits: ["Complete discharge", "Clean operation", "Automated systems"],
    },
    {
      title: "Industrial Transport",
      description: "Heavy-duty transport vehicle applications",
      icon: <FaIndustry />,
      image: "🚛",
      benefits: [
        "Robust performance",
        "Weather resistance",
        "Long service life",
      ],
    },
    {
      title: "Lubrication Systems",
      description: "Pneumatic lubrication and timing gear applications",
      icon: <FaGasPump />,
      image: "⚙️",
      benefits: [
        "Precise delivery",
        "System integration",
        "Consistent pressure",
      ],
    },
    {
      title: "Sealing Applications",
      description: "Specialized sealing and rotor applications",
      icon: <FaShieldAlt />,
      image: "🔒",
      benefits: ["Reliable sealing", "Dust protection", "Enhanced safety"],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 12,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Operation",
      value: "Positive & Vacuum",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design",
      value: "Mobile Optimized",
      icon: <FaTruck />,
      color: "#f59e0b",
    },
    {
      parameter: "Maintenance",
      value: "Easy Service Access",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Vehicle Integration",
      description:
        "Purpose-built for seamless integration with bulk transport vehicles",
      icon: <FaTruck />,
      stat: "100%",
      unit: "Vehicle Ready",
    },
    {
      title: "Energy Efficiency",
      description: "Highly energy efficient design reduces operational costs",
      icon: <FaLeaf />,
      stat: "25%",
      unit: "Energy Saved",
    },
    {
      title: "High Capacity",
      description: "Handles up to 12,000 M³/Hr for large-scale operations",
      icon: <FaTachometerAlt />,
      stat: "12,000",
      unit: "M³/Hr",
    },
    {
      title: "Dual Purpose",
      description: "Versatile operation for both loading and unloading",
      icon: <FaGears />,
      stat: "2-in-1",
      unit: "Operation",
    },
  ];

  const productImageUrl = "/images/Truck-Blowers.jpg";

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
              <span>Bulk Vehicle Specialized</span>
            </div>
            <h1 className="hero-title">
              High Performance
              <span className="gradient-text"> Truck Blowers</span>
            </h1>
            <p className="hero-description">
              SWAM Bulk Vehicle Truck Blowers are specially designed to meet the
              operating requirements of bulk and silo vehicles for pneumatic
              loading and unloading operations. Superior design with energy
              efficient performance.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">12,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-in-1</div>
                <div className="stat-label">Operation Mode</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25%</div>
                <div className="stat-label">Energy Saved</div>
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
                alt="Truck Blowers - Bulk Vehicle Specialized"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaTruck />
                  <span>Vehicle Ready</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaGears />
                  <span>Dual Operation</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaLeaf />
                  <span>Energy Efficient</span>
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
            <h2>Bulk Vehicle Optimized Features</h2>
            <p>
              Discover the specialized technologies that make our truck blowers
              perfect for mobile bulk material handling operations
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
            <h2>Advanced Mobile Technology</h2>
            <p>
              Specialized blower technology designed for the demanding
              requirements of bulk vehicle operations
            </p>
          </div>

          <div className="technology-showcase">
            {/* Technology Overview */}
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaTruck />
                  <span>Mobile Optimized Design</span>
                </div>
                <h3>Why Our Truck Blowers Excel</h3>
                <p>
                  SWAM truck blowers are engineered specifically for bulk
                  vehicle applications, providing the pressure and vacuum needed
                  for efficient pneumatic loading and unloading. Our superior
                  design ensures reliable operation in mobile environments with
                  easy serviceability and energy-efficient performance.
                </p>
                <div className="efficiency-highlight">
                  <div className="efficiency-stat">
                    <span className="stat-number">Various</span>
                    <span className="stat-label">Sizes Available</span>
                  </div>
                  <div className="efficiency-stat">
                    <span className="stat-number">Dual</span>
                    <span className="stat-label">Operation Modes</span>
                  </div>
                  <div className="efficiency-stat">
                    <span className="stat-number">Easy</span>
                    <span className="stat-label">Maintenance</span>
                  </div>
                </div>
              </div>
              <div className="tech-visual-main">
                <img
                  src={productImageUrl}
                  alt="Truck Blower Technology"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Pressure Generation</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Vacuum Creation</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">
                      Service Access Points
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaTruck />
                </div>
                <h4>Vehicle Integration</h4>
                <p>
                  Designed for seamless integration with bulk transport
                  vehicles, providing optimal mounting and operational
                  characteristics
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Mounting:</span>
                    <span className="spec-value">Vehicle Optimized</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Operation:</span>
                    <span className="spec-value">Mobile Ready</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaWind />
                </div>
                <h4>Dual Mode Operation</h4>
                <p>
                  Capable of both positive pressure for loading and vacuum
                  generation for unloading operations in a single unit
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Positive pressure conveying</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Vacuum unloading capability</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaLeaf />
                </div>
                <h4>Energy Efficiency</h4>
                <p>
                  Superior design ensures highly energy efficient operation,
                  reducing fuel consumption and operational costs
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Reduced fuel consumption</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Lower operational costs</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaWrench />
                </div>
                <h4>Serviceability</h4>
                <p>
                  Easy service access and maintenance design ensures minimal
                  downtime and reduced maintenance costs
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Quick service access</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Minimal downtime</span>
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
                Our truck blowers deliver exceptional performance for bulk
                vehicle applications, providing reliable pressure and vacuum
                generation for efficient material handling operations.
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
                  <div className="highlight">Bulk Vehicle Optimized</div>
                  <div className="highlight">Dual Operation Mode</div>
                  <div className="highlight">Energy Efficient Design</div>
                  <div className="highlight">Easy Maintenance</div>
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
            <h2>Bulk Transport Applications</h2>
            <p>
              Powering efficient material handling across diverse bulk transport
              operations
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
            <h2>Why Choose SWAM Truck Blowers</h2>
            <p>Specialized technology for superior bulk vehicle performance</p>
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
            <h2>Ready for Efficient Bulk Operations?</h2>
            <p>
              Connect with our technical experts to discover how our truck
              blowers can optimize your bulk material handling operations with
              superior performance and reliability.
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
                  alt="Truck Blowers - Bulk Vehicle Specialized - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Truck Blowers - Bulk Vehicle Specialized</h3>
                  <p>High Performance Pneumatic Loading/Unloading System</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 12,000 M³/Hr</span>
                    <span>Operation: Positive & Vacuum</span>
                    <span>Design: Mobile Optimized & Energy Efficient</span>
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

export default TruckBlowers;
