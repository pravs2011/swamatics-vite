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
} from "react-icons/fa";
import "./TurboBlowers.css";
import { FaGears } from "react-icons/fa6";

const TurboBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaBolt className="feature-icon" />,
      title: "High Speed Technology",
      description:
        "Advanced single stage centrifugal machine with high speed focused specialized technology",
      details:
        "Oil-less operation with precision-engineered impellers for maximum efficiency",
      benefit: "Up to 95% efficiency",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Integrally Geared Design",
      description:
        "Speed increasing gearbox geared up to impeller working speed for optimal performance",
      details:
        "Constant speed operation around 3000 rpm from motor with intelligent speed control",
      benefit: "Consistent performance",
    },
    {
      icon: <FaWind className="feature-icon" />,
      title: "Variable Guide Vanes",
      description:
        "Diffuser vanes and inlet guide vanes for dynamic airflow regulation",
      details:
        "Variable inlet guide vanes optimize power consumption and handle pressure changes",
      benefit: "45-100% turndown range",
    },
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Oil-Free Operation",
      description: "Completely oil-free design ensuring clean air delivery",
      details:
        "Advanced bearing technology eliminates oil contamination in airflow",
      benefit: "100% oil-free guarantee",
    },
  ];

  const applications = [
    {
      title: "Wastewater Treatment",
      description: "Aeration systems for biological treatment processes",
      icon: <FaRecycle />,
      image: "💧",
      benefits: ["Efficient aeration", "Energy savings", "Precise control"],
    },
    {
      title: "Pneumatic Conveying",
      description: "Material handling and transport systems",
      icon: <FaIndustry />,
      image: "📦",
      benefits: [
        "Gentle material handling",
        "Consistent pressure",
        "Reliable operation",
      ],
    },
    {
      title: "Process Air Supply",
      description: "Industrial process air and combustion air",
      icon: <FaCogs />,
      image: "⚙️",
      benefits: [
        "Process optimization",
        "Precise air delivery",
        "Energy efficient",
      ],
    },
    {
      title: "HVAC Systems",
      description: "Large scale ventilation and air conditioning",
      icon: <FaWind />,
      image: "🌪️",
      benefits: ["Climate control", "Air circulation", "Quiet operation"],
    },
    {
      title: "Chemical Processing",
      description: "Chemical and petrochemical plant applications",
      icon: <FaThermometerHalf />,
      image: "🧪",
      benefits: [
        "Corrosion resistance",
        "Process reliability",
        "Safety compliance",
      ],
    },
    {
      title: "Power Generation",
      description: "Combustion air for power plants",
      icon: <FaBolt />,
      image: "⚡",
      benefits: ["High reliability", "Continuous operation", "Fuel efficiency"],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 21,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Up to 1.0 bar 'g'",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Speed",
      value: "High Speed Centrifugal",
      icon: <FaTachometerAlt />,
      color: "#f59e0b",
    },
    {
      parameter: "Control",
      value: "Variable Guide Vanes",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Advanced Technology",
      description:
        "Single stage centrifugal with high speed specialized technology",
      icon: <FaRocket />,
      stat: "95%",
      unit: "Efficiency",
    },
    {
      title: "Energy Savings",
      description: "Variable guide vanes optimize power consumption",
      icon: <FaLeaf />,
      stat: "30%",
      unit: "Energy Saved",
    },
    {
      title: "Turndown Range",
      description: "Flexible operation from 45% to 100% capacity",
      icon: <FaTachometerAlt />,
      stat: "45-100%",
      unit: "Range",
    },
    {
      title: "Oil-Free Design",
      description: "Completely oil-free operation for clean applications",
      icon: <FaShieldAlt />,
      stat: "100%",
      unit: "Oil-Free",
    },
  ];

  const productImageUrl = "/images/Integrally-Geared-Type.png";

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
              <span>Integrally Geared Type</span>
            </div>
            <h1 className="hero-title">
              High Efficiency
              <span className="gradient-text"> Turbo Blowers</span>
            </h1>
            <p className="hero-description">
              Experience the most advanced single stage centrifugal machine with
              high speed focused specialized technology. SWAM's turbo blowers
              deliver exceptional efficiency with completely oil-free operation.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">21,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Efficiency</div>
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
                alt="Turbo Blowers - Integrally Geared Type"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaBolt />
                  <span>High Speed</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaGears />
                  <span>Integrally Geared</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaLeaf />
                  <span>Oil-Free</span>
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
            <h2>Advanced Turbo Technology Features</h2>
            <p>
              Discover the innovative technologies that make our turbo blowers
              the most efficient in the industry
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

      {/* Technology Section - Redesigned */}
      <section className="modern-technology-section">
        <div className="container">
          <div className="section-header">
            <h2>Superior Efficiency Technology</h2>
            <p>
              Revolutionary turbo blower design that maximizes efficiency while
              minimizing energy consumption
            </p>
          </div>

          <div className="technology-showcase">
            {/* Technology Overview */}
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaBolt />
                  <span>Advanced Centrifugal Technology</span>
                </div>
                <h3>Why Turbo Blowers Are Superior</h3>
                <p>
                  Traditional direct-drive blowers operate far from their design
                  point when regulation is required, dramatically reducing
                  efficiency. Our integrally geared turbo blowers maintain
                  optimal efficiency across the entire operating range through
                  innovative vane control technology.
                </p>
                <div className="efficiency-highlight">
                  <div className="efficiency-stat">
                    <span className="stat-number">20%</span>
                    <span className="stat-label">Higher Efficiency</span>
                  </div>
                  <div className="efficiency-stat">
                    <span className="stat-number">30%</span>
                    <span className="stat-label">Energy Savings</span>
                  </div>
                  <div className="efficiency-stat">
                    <span className="stat-number">45-100%</span>
                    <span className="stat-label">Turndown Range</span>
                  </div>
                </div>
              </div>
              <div className="tech-visual-main">
                <img
                  src={productImageUrl}
                  alt="Turbo Blower Technology"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">
                      Variable Inlet Guide Vanes
                    </div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">High-Speed Impeller</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">
                      Variable Diffuser Vanes
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
                <h4>Constant Speed Operation</h4>
                <p>
                  Motor operates at consistent ~3000 RPM with speed-increasing
                  gearbox delivering optimal impeller speed
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Motor Speed:</span>
                    <span className="spec-value">~3000 RPM</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Gear Ratio:</span>
                    <span className="spec-value">Variable</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaWind />
                </div>
                <h4>Variable Diffuser Vanes</h4>
                <p>
                  Discharge-side vanes dynamically adjust airflow by changing
                  relative speed through shaped diffuser geometry
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Maintains compressor curve efficiency</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Limited curve deformation</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaBolt />
                </div>
                <h4>Inlet Guide Vanes</h4>
                <p>
                  Pre-rotation device optimizes power consumption by adapting to
                  changing pressure and ambient conditions
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Power optimization</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Pressure adaptation</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaLeaf />
                </div>
                <h4>Oil-Free Design</h4>
                <p>
                  Advanced magnetic bearings and precision engineering eliminate
                  oil contamination completely
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>100% contamination-free air</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Food-grade applications</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Efficiency Comparison */}
            <div className="efficiency-comparison">
              <div className="comparison-header">
                <h3>Efficiency Performance Analysis</h3>
                <p>
                  See how our turbo blowers maintain superior efficiency across
                  operating ranges
                </p>
              </div>

              <div className="comparison-content">
                <div className="efficiency-charts">
                  <div className="chart-container">
                    <h4>Peak Efficiency</h4>
                    <div className="efficiency-bars">
                      <div className="bar-wrapper">
                        <div
                          className="efficiency-bar turbo"
                          style={{ width: "95%" }}
                        >
                          <span className="bar-label">Turbo Blowers</span>
                          <span className="bar-value">95%</span>
                        </div>
                      </div>
                      <div className="bar-wrapper">
                        <div
                          className="efficiency-bar conventional"
                          style={{ width: "78%" }}
                        >
                          <span className="bar-label">Conventional</span>
                          <span className="bar-value">78%</span>
                        </div>
                      </div>
                      <div className="bar-wrapper">
                        <div
                          className="efficiency-bar direct-drive"
                          style={{ width: "65%" }}
                        >
                          <span className="bar-label">Direct Drive</span>
                          <span className="bar-value">65%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="chart-container">
                    <h4>Energy Savings</h4>
                    <div className="savings-display">
                      <div className="savings-item">
                        <div className="savings-icon">
                          <FaLeaf />
                        </div>
                        <div className="savings-info">
                          <span className="savings-value">30%</span>
                          <span className="savings-label">vs Conventional</span>
                        </div>
                      </div>
                      <div className="savings-item">
                        <div className="savings-icon">
                          <FaBolt />
                        </div>
                        <div className="savings-info">
                          <span className="savings-value">45%</span>
                          <span className="savings-label">vs Direct Drive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="efficiency-explanation">
                  <h4>Why The Difference?</h4>
                  <div className="explanation-points">
                    <div className="explanation-point">
                      <div className="point-number">1</div>
                      <div className="point-content">
                        <h5>Design Point Operation</h5>
                        <p>
                          Turbo blowers operate closer to their optimal design
                          point across the entire range
                        </p>
                      </div>
                    </div>
                    <div className="explanation-point">
                      <div className="point-number">2</div>
                      <div className="point-content">
                        <h5>Variable Geometry</h5>
                        <p>
                          Guide vanes adapt to maintain peak efficiency rather
                          than throttling flow
                        </p>
                      </div>
                    </div>
                    <div className="explanation-point">
                      <div className="point-number">3</div>
                      <div className="point-content">
                        <h5>Constant Speed Benefits</h5>
                        <p>
                          Motor operates at peak efficiency while gearbox
                          optimizes impeller speed
                        </p>
                      </div>
                    </div>
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
                Our turbo blowers deliver exceptional performance with advanced
                centrifugal technology, providing unmatched efficiency and
                reliability for demanding industrial applications.
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
                    High Speed Centrifugal Technology
                  </div>
                  <div className="highlight">Integrally Geared Design</div>
                  <div className="highlight">Variable Guide Vanes</div>
                  <div className="highlight">Oil-Free Operation</div>
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
              Powering diverse industries with high-efficiency turbo technology
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
            <h2>Why Choose SWAM Turbo Blowers</h2>
            <p>Advanced centrifugal technology for superior performance</p>
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
            <h2>Ready for Superior Efficiency?</h2>
            <p>
              Connect with our technical experts to discover how our turbo
              blowers can optimize your operations with unmatched efficiency and
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
                  alt="Turbo Blowers - Integrally Geared Type - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Turbo Blowers - Integrally Geared Type</h3>
                  <p>High Efficiency Single Stage Centrifugal Blower</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 21,000 M³/Hr</span>
                    <span>Efficiency: Up to 95%</span>
                    <span>Operation: Oil-Free & Variable Control</span>
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

export default TurboBlowers;
