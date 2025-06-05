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
  FaBatteryFull,
  FaCompress,
  FaWater,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./MVRBlowers.css";

const MVRBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaRocket className="feature-icon" />,
      title: "Next Generation Technology",
      description:
        "Advanced Mechanical Vapour Re-Compressor equipped with latest features for enhanced reliability, energy efficiency and lower maintenance",
      details:
        "State-of-the-art design incorporating modern engineering principles for superior performance in vapor recompression applications",
      benefit: "Advanced reliability",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Computer Generated Rotor Profile",
      description:
        "Precision-engineered rotor profiles with computer-generated design enabling better uniform clearance and higher volumetric efficiency",
      details:
        "Optimized rotor geometry ensures consistent performance with minimal clearance variations for maximum efficiency",
      benefit: "Higher efficiency",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Rugged Construction",
      description:
        "Ruggedly built with appropriate rotor shaft design, aiming at low deflection and reduced sound levels for reliable operation",
      details:
        "Robust construction with optimized shaft design minimizes vibration and operational noise while ensuring long service life",
      benefit: "Reliable operation",
    },
    {
      icon: <FaBatteryFull className="feature-icon" />,
      title: "Energy Efficient Design",
      description:
        "Engineered for optimal energy efficiency with advanced vapor compression technology for reduced operational costs",
      details:
        "Innovative design focuses on minimizing energy consumption while maintaining high performance standards",
      benefit: "Energy savings",
    },
  ];

  const applications = [
    {
      title: "Evaporation Systems",
      description:
        "Mechanical vapor recompression for evaporation processes in chemical and food industries",
      icon: <FaTint />,
      image: "💧",
      benefits: [
        "Energy efficient evaporation",
        "Steam economy improvement",
        "Process optimization",
      ],
    },
    {
      title: "Distillation Processes",
      description:
        "Vapor recompression for distillation columns improving energy efficiency and reducing steam consumption",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: ["Steam savings", "Energy recovery", "Process efficiency"],
    },
    {
      title: "Concentration Applications",
      description:
        "Concentration of solutions and liquids with mechanical vapor recompression technology",
      icon: <FaCompress />,
      image: "🎯",
      benefits: ["Solution concentration", "Energy recovery", "Cost reduction"],
    },
    {
      title: "Heat Recovery Systems",
      description:
        "Recovery of waste heat through mechanical vapor recompression for improved overall efficiency",
      icon: <FaRecycle />,
      image: "♻️",
      benefits: [
        "Waste heat recovery",
        "Energy optimization",
        "Sustainability",
      ],
    },
    {
      title: "Crystallization Processes",
      description:
        "MVR technology for crystallization applications in pharmaceutical and chemical industries",
      icon: <FaGem />,
      image: "💎",
      benefits: [
        "Controlled crystallization",
        "Energy efficiency",
        "Product quality",
      ],
    },
    {
      title: "Desalination Plants",
      description:
        "Thermal desalination with mechanical vapor recompression for fresh water production",
      icon: <FaWater />,
      image: "🌊",
      benefits: [
        "Fresh water production",
        "Energy efficient",
        "Environmental friendly",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Flow Capacity",
      value: "Up to 35,000 M³/hr",
      icon: <FaWind />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure Range",
      value: "Up to 1.1 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Vacuum Capability",
      value: "Up to 60%",
      icon: <FaCompress />,
      color: "#f59e0b",
    },
    {
      parameter: "Technology",
      value: "Mechanical Vapor Recompression",
      icon: <FaGears />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Flow Capacity",
      description:
        "Readily available for flows up to 35,000 M³/hr with consistent performance across the entire operating range",
      icon: <FaWind />,
      stat: "35,000",
      unit: "M³/hr Flow",
    },
    {
      title: "Energy Efficiency",
      description:
        "Advanced MVR technology significantly reduces energy consumption while maintaining high compression ratios",
      icon: <FaBatteryFull />,
      stat: "High",
      unit: "Efficiency",
    },
    {
      title: "Low Maintenance",
      description:
        "Next generation design with advanced features enables lower maintenance requirements and extended service intervals",
      icon: <FaTools />,
      stat: "Low",
      unit: "Maintenance",
    },
    {
      title: "Versatile Operation",
      description:
        "Capable of handling pressure up to 1.1 kg/cm² and vacuum up to 60% for diverse industrial applications",
      icon: <FaGears />,
      stat: "Multi",
      unit: "Application",
    },
  ];

  const workingPrinciple = {
    title: "Mechanical Vapor Recompression Technology",
    description:
      "MVR Blowers operate by compressing vapor from evaporation processes and reusing it as heating medium, creating a highly energy-efficient closed-loop system that significantly reduces steam consumption and operational costs.",
    steps: [
      {
        step: "1",
        title: "Vapor Compression",
        description:
          "Low-pressure vapor from evaporation process is compressed by the MVR blower to higher pressure and temperature",
      },
      {
        step: "2",
        title: "Heat Transfer",
        description:
          "Compressed vapor serves as heating medium in the evaporator, transferring its latent heat to the process",
      },
      {
        step: "3",
        title: "Condensation & Recycle",
        description:
          "Vapor condenses back to liquid and the cycle repeats, creating an energy-efficient closed-loop system",
      },
    ],
  };

  const productImageUrl = "/images/MVR-Blowers.jpg";

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
              <span>Next Generation MVR Technology</span>
            </div>
            <h1 className="hero-title">
              MVR
              <span className="gradient-text"> Blowers</span>
            </h1>
            <p className="hero-description">
              SWAM offers advanced Next Generation Mechanical Vapour
              Re-Compressor technology equipped with latest features for
              enhanced reliability, energy efficiency and lower maintenance.
              Ruggedly built with computer-generated rotor profiles enabling
              better uniform clearance and higher volumetric efficiency for
              flows up to 35,000 M³/hr.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">35,000</div>
                <div className="stat-label">M³/hr Flow</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1.1</div>
                <div className="stat-label">kg/cm² Pressure</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">60%</div>
                <div className="stat-label">Vacuum</div>
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
                alt="MVR Blowers - Mechanical Vapor Recompression Technology"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaGears />
                  <span>MVR Technology</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaBatteryFull />
                  <span>Energy Efficient</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaRocket />
                  <span>Next Generation</span>
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
            <h2>Advanced MVR Technology Features</h2>
            <p>
              Discover the cutting-edge engineering features that make our MVR
              Blowers the reliable choice for energy-efficient vapor
              recompression across diverse industrial applications
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
              Understanding the mechanical vapor recompression technology that
              delivers exceptional energy efficiency and process optimization
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaGears />
                  <span>MVR Technology</span>
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
                  alt="MVR Blowers Working Principle"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Vapor Compression</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Heat Recovery</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Energy Efficiency</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaBatteryFull />
                </div>
                <h4>Energy Efficient Operation</h4>
                <p>
                  Advanced MVR technology significantly reduces energy
                  consumption by reusing vapor energy, creating substantial
                  operational savings
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Efficiency:</span>
                    <span className="spec-value">High Energy Recovery</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Operation:</span>
                    <span className="spec-value">Continuous</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaWind />
                </div>
                <h4>High Flow Capacity</h4>
                <p>
                  Readily available for flows up to 35,000 M³/hr with consistent
                  performance across the entire operating range
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>35,000 M³/hr capacity</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Consistent performance</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaGears />
                </div>
                <h4>Computer Generated Rotor Profile</h4>
                <p>
                  Precision-engineered rotor profiles enable better uniform
                  clearance and higher volumetric efficiency
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Uniform clearance</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Higher efficiency</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaShieldAlt />
                </div>
                <h4>Rugged Construction</h4>
                <p>
                  Ruggedly built with appropriate rotor shaft design for low
                  deflection, reduced sound levels and reliable operation
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Low deflection design</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Reduced sound levels</span>
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
                MVR Blowers deliver exceptional performance with proven
                specifications designed for energy efficiency, reliability, and
                consistent operation in demanding vapor recompression
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
                    <span>Flows up to 35,000 M³/hr capacity</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>Pressure capability up to 1.1 kg/cm²</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>Vacuum capability up to 60%</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>Low deflection and reduced sound levels</span>
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
                  alt="MVR Blowers Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Next Generation Technology</div>
                  <div className="highlight">Energy Efficient Operation</div>
                  <div className="highlight">Computer Generated Profile</div>
                  <div className="highlight">Rugged Construction</div>
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
              Versatile MVR solutions for diverse industrial applications
              requiring energy-efficient vapor recompression and heat recovery
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
            <h2>Why Choose SWAM MVR Blowers</h2>
            <p>
              Advanced mechanical vapor recompression technology for
              energy-efficient operations and superior performance
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
            <h2>Ready for Energy-Efficient MVR Technology?</h2>
            <p>
              Connect with our engineering experts to discover how MVR Blowers
              can revolutionize your processes with advanced vapor recompression
              technology, significant energy savings, and proven reliability for
              demanding industrial applications.
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
                  alt="MVR Blowers - Mechanical Vapor Recompression Technology - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>MVR Blowers</h3>
                  <p>Mechanical Vapor Recompression Technology</p>
                  <div className="modal-specs">
                    <span>Flow: Up to 35,000 M³/hr</span>
                    <span>Pressure: Up to 1.1 kg/cm²</span>
                    <span>Vacuum: Up to 60%</span>
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

export default MVRBlowers;
