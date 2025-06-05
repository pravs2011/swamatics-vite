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
  FaSync,
  FaWeight,
  FaEye,
  FaLock,
  FaFlask,
  FaTint,
  FaSnowflake,
  FaMicrochip,
  FaSpa,
  FaOilCan,
  FaGem,
  FaCube,
  FaCookie,
  FaUtensils,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./OilVaneVacuumPump.css";

const OilVaneVacuumPump = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaGears className="feature-icon" />,
      title: "Positive Displacement Technology",
      description:
        "Advanced rotary vane design with sliding vanes in a rotor rotating within a cavity for reliable vacuum performance",
      details:
        "Eccentrically mounted rotor with slots rotates in cylindrical housing with precisely fitting sliding vanes that move in slots and separate individual working chambers",
      benefit: "Reliable positive displacement",
    },
    {
      icon: <FaOilCan className="feature-icon" />,
      title: "Oil-Lubricated Operation",
      description:
        "Oil lubrication ensures smooth operation and sealing for consistent vacuum performance and extended equipment life",
      details:
        "Chemical series design handles higher amounts of condensable vapor while maintaining optimal lubrication for superior performance",
      benefit: "Enhanced sealing & longevity",
    },
    {
      icon: <FaTachometerAlt className="feature-icon" />,
      title: "High Vacuum Achievement",
      description:
        "Achieves high vacuum up to 10″ Torr at suction port for demanding vacuum applications",
      details:
        "Consistent vacuum performance with capability to handle varying process conditions and condensable vapors effectively",
      benefit: "Deep vacuum capability",
    },
    {
      icon: <FaTools className="feature-icon" />,
      title: "Chemical Series Design",
      description:
        "Specially designed to handle higher amounts of condensable vapor in challenging chemical processing environments",
      details:
        "Enhanced design prevents oil contamination and maintains vacuum levels even when processing condensable vapors",
      benefit: "Chemical process ready",
    },
  ];

  const applications = [
    {
      title: "Vacuum Distillation",
      description:
        "Essential for distillation processes requiring precise vacuum control and condensable vapor handling",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Precise vacuum control",
        "Condensable vapor handling",
        "Process efficiency",
      ],
    },
    {
      title: "Filtration Systems",
      description:
        "Vacuum filtration applications for solid-liquid separation in various industries",
      icon: <FaLayerGroup />,
      image: "🔍",
      benefits: [
        "Solid-liquid separation",
        "Enhanced filtration",
        "Process automation",
      ],
    },
    {
      title: "Jewelry Casting",
      description:
        "Precision vacuum casting for jewelry manufacturing and precious metal processing",
      icon: <FaGem />,
      image: "💎",
      benefits: [
        "Precision casting",
        "Bubble-free results",
        "Quality finishing",
      ],
    },
    {
      title: "Vacuum Drying",
      description:
        "Low-temperature drying processes for heat-sensitive materials and pharmaceuticals",
      icon: <FaThermometerHalf />,
      image: "🌡️",
      benefits: [
        "Low temperature drying",
        "Heat-sensitive materials",
        "Moisture removal",
      ],
    },
    {
      title: "Degassing Applications",
      description:
        "Removal of dissolved gases from liquids and degassing of materials under vacuum",
      icon: <FaWind />,
      image: "💨",
      benefits: ["Gas removal", "Material degassing", "Process optimization"],
    },
    {
      title: "Food Processing",
      description:
        "Vacuum packaging, preservation, and processing applications in food industry",
      icon: <FaUtensils />,
      image: "🍕",
      benefits: [
        "Vacuum packaging",
        "Food preservation",
        "Extended shelf life",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Vacuum",
      value: "10″ Torr",
      icon: <FaTachometerAlt />,
      color: "#3b82f6",
    },
    {
      parameter: "Operation Type",
      value: "Oil-Lubricated",
      icon: <FaOilCan />,
      color: "#10b981",
    },
    {
      parameter: "Design Type",
      value: "Rotary Vane",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Application",
      value: "Chemical Series",
      icon: <FaFlask />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Vacuum Performance",
      description:
        "Achieves up to 10″ Torr vacuum with consistent performance for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "10″",
      unit: "Torr Vacuum",
    },
    {
      title: "Condensable Vapor Handling",
      description:
        "Chemical series design effectively handles higher amounts of condensable vapor without performance degradation",
      icon: <FaFlask />,
      stat: "High",
      unit: "Vapor Capacity",
    },
    {
      title: "Reliable Operation",
      description:
        "Oil-lubricated rotary vane technology provides reliable and consistent vacuum performance",
      icon: <FaShieldAlt />,
      stat: "Proven",
      unit: "Reliability",
    },
    {
      title: "Versatile Applications",
      description:
        "Suitable for diverse applications from vacuum distillation to food processing and jewelry casting",
      icon: <FaTools />,
      stat: "Multi",
      unit: "Application",
    },
  ];

  const workingPrinciple = {
    title: "Rotary Vane Vacuum Technology",
    description:
      "Oil-lubricated rotary vane vacuum pumps operate through positive displacement action. An eccentrically mounted rotor with sliding vanes rotates in a cylindrical housing, creating variable chamber volumes that compress and evacuate gas effectively.",
    steps: [
      {
        step: "1",
        title: "Rotor Rotation",
        description:
          "Eccentric rotor with sliding vanes rotates in cylindrical housing creating variable chambers",
      },
      {
        step: "2",
        title: "Volume Variation",
        description:
          "Sliding vanes move in slots separating working chambers with changing volumes",
      },
      {
        step: "3",
        title: "Gas Compression",
        description:
          "Positive displacement action compresses and evacuates gas achieving high vacuum levels",
      },
    ],
  };

  const productImageUrl = "/images/uil-Vane-Vacuum-Pump.jpg";

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
              <span>Proven Vacuum Technology</span>
            </div>
            <h1 className="hero-title">
              Oil Vane
              <span className="gradient-text"> Vacuum Pump</span>
            </h1>
            <p className="hero-description">
              SWAM Oil Vane Vacuum Pumps are oil-lubricated rotary vane machines
              featuring positive-displacement technology with sliding vanes for
              reliable vacuum performance. Chemical series design handles higher
              amounts of condensable vapor while achieving vacuum up to 10″ Torr
              for demanding industrial applications.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10″</div>
                <div className="stat-label">Torr Vacuum</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Oil</div>
                <div className="stat-label">Lubricated</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Chemical</div>
                <div className="stat-label">Series</div>
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
                alt="Oil Vane Vacuum Pump - Rotary Vane Technology"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaGears />
                  <span>Rotary Vane</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaOilCan />
                  <span>Oil Lubricated</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaFlask />
                  <span>Chemical Series</span>
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
            <h2>Advanced Rotary Vane Technology</h2>
            <p>
              Discover the proven engineering features that make our Oil Vane
              Vacuum Pumps the reliable choice for condensable vapor handling
              and high vacuum applications across diverse industries
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

      {/* Working Principle Section */}
      <section className="modern-technology-section">
        <div className="container">
          <div className="section-header">
            <h2>Working Principle & Technology</h2>
            <p>
              Understanding the rotary vane technology with oil lubrication that
              delivers reliable vacuum performance with effective condensable
              vapor handling capability
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaGears />
                  <span>Rotary Vane Technology</span>
                </div>
                <h3>{workingPrinciple.title}</h3>
                <p>{workingPrinciple.description}</p>

                <div className="working-steps">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="step-item">
                      <div className="step-number">{step.step}</div>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tech-visual-main">
                <img
                  src={productImageUrl}
                  alt="Oil Vane Vacuum Pump Working Principle"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Sliding Vanes</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Oil Lubrication</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Eccentric Rotor</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaOilCan />
                </div>
                <h4>Oil Lubrication System</h4>
                <p>
                  Oil lubrication ensures smooth operation, effective sealing,
                  and extended equipment life for reliable vacuum performance
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Lubrication:</span>
                    <span className="spec-value">Oil Based</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Operation:</span>
                    <span className="spec-value">Continuous</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaTachometerAlt />
                </div>
                <h4>High Vacuum Performance</h4>
                <p>
                  Achieves vacuum up to 10″ Torr at suction port with consistent
                  performance for demanding applications
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>10″ Torr vacuum capability</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Consistent performance</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaFlask />
                </div>
                <h4>Chemical Series Design</h4>
                <p>
                  Specially designed to handle higher amounts of condensable
                  vapor without compromising vacuum levels or equipment
                  performance
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Condensable vapor handling</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Chemical process ready</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaShieldAlt />
                </div>
                <h4>Reliable Operation</h4>
                <p>
                  Proven rotary vane technology with positive displacement
                  action provides dependable vacuum performance across various
                  applications
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Positive displacement</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Proven technology</span>
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
                Oil Vane Vacuum Pumps deliver exceptional vacuum performance
                with proven specifications designed for reliability, condensable
                vapor handling, and consistent operation in demanding industrial
                applications.
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

              <div className="additional-specs">
                <h4>Key Performance Features</h4>
                <div className="feature-list">
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>High vacuum up to 10″ Torr at suction port</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>
                      Chemical series design for condensable vapor handling
                    </span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>
                      Oil lubrication for smooth operation and sealing
                    </span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>
                      Combination with Roots Pump for higher vacuum if required
                    </span>
                  </div>
                </div>
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
                  alt="Oil Vane Vacuum Pump Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Rotary Vane Technology</div>
                  <div className="highlight">Oil Lubricated Operation</div>
                  <div className="highlight">Chemical Series Design</div>
                  <div className="highlight">High Vacuum Capability</div>
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
              Versatile vacuum solutions for diverse industrial applications
              requiring reliable performance and effective condensable vapor
              handling
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
            <h2>Why Choose SWAM Oil Vane Vacuum Pumps</h2>
            <p>
              Proven oil-lubricated rotary vane technology for reliable vacuum
              performance and condensable vapor handling
            </p>
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
            <h2>Ready for Reliable Vacuum Technology?</h2>
            <p>
              Connect with our engineering experts to discover how Oil Vane
              Vacuum Pumps can enhance your processes with reliable performance,
              effective condensable vapor handling, and proven rotary vane
              technology for demanding applications.
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
                  alt="Oil Vane Vacuum Pump - Rotary Vane Technology - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Oil Vane Vacuum Pump</h3>
                  <p>Rotary Vane Technology</p>
                  <div className="modal-specs">
                    <span>Vacuum: Up to 10″ Torr</span>
                    <span>Type: Oil Lubricated</span>
                    <span>Series: Chemical</span>
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

export default OilVaneVacuumPump;
