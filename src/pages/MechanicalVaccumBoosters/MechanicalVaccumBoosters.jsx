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
  FaCircle,
  FaWater,
  FaCube,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./MechanicalVaccumBoosters.css";

const MechanicalVaccumBoosters = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaExpandArrowsAlt className="feature-icon" />,
      title: "High Vacuum Boosting",
      description:
        "Boosts high vacuum up to one micron in combination with conventional vacuum mechanical pumps",
      details:
        "Specifically designed to work with backing pumps to achieve ultra-high vacuum levels from 50 Torr to one micron",
      benefit: "Ultra-high vacuum capability",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Advanced Sealing System",
      description:
        "Highly reliable sealing system with piston ring type labyrinth seals and rotary seals",
      details:
        "Features piston ring type labyrinth seals with rotary seal between conveying and bearing chambers, plus neutral chamber design",
      benefit: "Complete vacuum tightness",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Wide Capacity Range",
      description:
        "Available in different models with capacity from 500 M³/Hr to 52,000 M³/Hr",
      details:
        "Comprehensive range of models to suit various industrial applications with flexible capacity options",
      benefit: "Scalable solutions",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Flexible Drive Options",
      description:
        "Drive arrangement options include direct coupled or V-belts depending on model and operating conditions",
      details:
        "Splash oil lubrication on both ends with choice of direct coupling or V-belt drive systems for optimal performance",
      benefit: "Versatile configuration",
    },
  ];

  const applications = [
    {
      title: "Chemical Processing",
      description:
        "Distillation, crystallization, and chemical reaction processes requiring high vacuum",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Chemical distillation",
        "Crystallization processes",
        "Reaction vessel evacuation",
      ],
    },
    {
      title: "Pharmaceutical Manufacturing",
      description:
        "Freeze drying, solvent recovery, and sterile processing applications",
      icon: <FaMicrochip />,
      image: "💊",
      benefits: [
        "Freeze drying systems",
        "Solvent recovery",
        "Sterile processing",
      ],
    },
    {
      title: "Electronics & Semiconductors",
      description:
        "Vacuum coating, sputtering, and semiconductor manufacturing processes",
      icon: <FaBolt />,
      image: "🔌",
      benefits: ["Vacuum coating", "Sputtering systems", "Chip manufacturing"],
    },
    {
      title: "Research Laboratories",
      description:
        "Scientific research applications requiring ultra-high vacuum environments",
      icon: <FaAtom />,
      image: "🔬",
      benefits: [
        "Scientific research",
        "Material testing",
        "Analytical equipment",
      ],
    },
    {
      title: "Metallurgy & Heat Treatment",
      description:
        "Vacuum furnaces, degassing, and metal processing applications",
      icon: <FaFire />,
      image: "🔥",
      benefits: ["Vacuum furnaces", "Metal degassing", "Heat treatment"],
    },
    {
      title: "Food Processing",
      description:
        "Freeze drying, packaging, and food preservation applications",
      icon: <FaBoxes />,
      image: "🥫",
      benefits: ["Freeze drying", "Vacuum packaging", "Food preservation"],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "52,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 10⁻³ Torr",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Minimum Capacity",
      value: "500 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Operating Range",
      value: "50 Torr to 1 micron",
      icon: <FaExpandArrowsAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Ultra-High Vacuum",
      description:
        "Achieves vacuum levels up to 10⁻³ Torr in multi-stage configuration for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "10⁻³",
      unit: "Torr",
    },
    {
      title: "High Displacement",
      description:
        "Exceptional pumping capacity up to 52,000 M³/Hr for large-scale vacuum operations",
      icon: <FaChartLine />,
      stat: "52,000",
      unit: "M³/Hr",
    },
    {
      title: "Robust Construction",
      description:
        "Compact design with robust construction suitable for continuous duty operation",
      icon: <FaShieldAlt />,
      stat: "Continuous",
      unit: "Duty",
    },
    {
      title: "Universal Compatibility",
      description:
        "Can be used with all types of backing pumps for flexible system integration",
      icon: <FaTools />,
      stat: "All Types",
      unit: "Backing Pumps",
    },
  ];

  const workingPrinciple = {
    title: "Mechanical Vacuum Booster Technology",
    description:
      "Mechanical vacuum boosters work in combination with conventional vacuum pumps to boost high vacuum levels. The state-of-the-art design features unique sealing systems ensuring complete vacuum tightness and leak-proof construction for reliable operation.",
    steps: [
      {
        step: "1",
        title: "Primary Vacuum Creation",
        description:
          "Backing pump creates initial vacuum while booster operates at low inlet pressure",
      },
      {
        step: "2",
        title: "Vacuum Amplification",
        description:
          "Mechanical booster amplifies vacuum level through high-speed rotor operation",
      },
      {
        step: "3",
        title: "Enhanced Performance",
        description:
          "Combined system achieves ultra-high vacuum from 50 Torr to one micron",
      },
    ],
  };

  const productImageUrl = "/images/Mechanical-Vacuum.jpg";

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
              <span>Advanced Vacuum Technology</span>
            </div>
            <h1 className="hero-title">
              Mechanical
              <span className="gradient-text"> Vacuum Boosters</span>
            </h1>
            <p className="hero-description">
              SWAM Mechanical Vacuum Boosters work in combination with
              conventional vacuum pumps to boost high vacuum up to one micron.
              Featuring state-of-the-art design with advanced sealing systems
              for complete vacuum tightness and leak-proof construction.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">52,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10⁻³</div>
                <div className="stat-label">Torr Vacuum</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Ultra-High</div>
                <div className="stat-label">Performance</div>
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
                alt="Mechanical Vacuum Booster - Ultra-High Vacuum Technology"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaExpandArrowsAlt />
                  <span>High Vacuum</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaShieldAlt />
                  <span>Advanced Sealing</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaChartLine />
                  <span>High Capacity</span>
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
            <h2>Advanced Vacuum Booster Technology</h2>
            <p>
              Discover the engineering excellence that makes our Mechanical
              Vacuum Boosters the preferred choice for ultra-high vacuum
              applications requiring exceptional performance and reliability
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
              Understanding mechanical vacuum booster technology that combines
              with backing pumps to achieve ultra-high vacuum levels for
              demanding industrial applications
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaExpandArrowsAlt />
                  <span>Vacuum Booster Technology</span>
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
                  alt="Mechanical Vacuum Booster Working Principle"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Piston Ring Seals</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">
                      Rotary Sealing System
                    </div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Drive Mechanism</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaShieldAlt />
                </div>
                <h4>Advanced Sealing System</h4>
                <p>
                  Highly reliable sealing with piston ring type labyrinth seals,
                  rotary seals between chambers, and neutral chamber design for
                  complete vacuum tightness
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Seal Type:</span>
                    <span className="spec-value">Piston Ring + Rotary</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Tightness:</span>
                    <span className="spec-value">Leak Proof</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaChartLine />
                </div>
                <h4>Wide Capacity Range</h4>
                <p>
                  Available in different models with capacity ranging from 500
                  M³/Hr to 52,000 M³/Hr to suit various industrial applications
                  and requirements
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>500 - 52,000 M³/Hr range</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Multiple model options</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaGears />
                </div>
                <h4>Flexible Drive Configuration</h4>
                <p>
                  Drive arrangements include direct coupled or V-belt options
                  with splash oil lubrication system for reliable operation
                  under various conditions
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Direct or V-belt drive</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Splash oil lubrication</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaTools />
                </div>
                <h4>Material Options</h4>
                <p>
                  Standard construction from high quality cast iron inoculated
                  for vacuum duty. Optional stainless steel, ductile iron with
                  special coatings available
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>High quality cast iron</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Stainless steel options</span>
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
                Mechanical Vacuum Boosters deliver exceptional ultra-high vacuum
                performance with proven specifications designed for demanding
                applications requiring precise vacuum control and reliability.
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
                <h4>Standard Performance Range</h4>
                <div className="spec-table">
                  <div className="spec-row">
                    <span className="spec-label">Vacuum Range:</span>
                    <span className="spec-value">50 Torr to 1 micron</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Multi-stage Vacuum:</span>
                    <span className="spec-value">Up to 10⁻³ Torr</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Construction:</span>
                    <span className="spec-value">
                      Cast Iron, SS, Ductile Iron
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Duty:</span>
                    <span className="spec-value">Continuous Operation</span>
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
                  alt="Mechanical Vacuum Booster Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Ultra-High Vacuum</div>
                  <div className="highlight">Advanced Sealing</div>
                  <div className="highlight">Robust Construction</div>
                  <div className="highlight">Flexible Drive Options</div>
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
              Ultra-high vacuum solutions for precision applications requiring
              exceptional vacuum levels and reliable performance across diverse
              industrial sectors
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
            <h2>Why Choose SWAM Mechanical Vacuum Boosters</h2>
            <p>
              Advanced vacuum booster technology for ultra-high vacuum
              performance and exceptional reliability in demanding applications
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

      {/* Salient Features Section */}
      <section className="modern-features-highlight-section">
        <div className="container">
          <div className="section-header">
            <h2>Salient Features</h2>
            <p>
              Comprehensive features that make SWAM Mechanical Vacuum Boosters
              the preferred choice for ultra-high vacuum applications
            </p>
          </div>

          <div className="features-highlight-grid">
            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaCube />
              </div>
              <h4>Compact Design</h4>
              <p>
                Robust construction suitable for continuous duty operation with
                space-efficient design
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaTools />
              </div>
              <h4>Universal Compatibility</h4>
              <p>
                Can be used with all types of backing pumps for flexible system
                integration
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaSync />
              </div>
              <h4>Flexible Flow Arrangement</h4>
              <p>
                Choice of horizontal and vertical flows to suit installation
                requirements
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h4>Wide Capacity Range</h4>
              <p>
                Large number of models: 500 M³/hr to 52,000 M³/hr capacity
                options
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaGears />
              </div>
              <h4>Drive Flexibility</h4>
              <p>
                Compatible with flanged motor, V-belt drive, or gear box drive
                options
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaAward />
              </div>
              <h4>High Reliability</h4>
              <p>
                Unique advanced technology sealing system ideally suited for
                high vacuum applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Ultra-High Vacuum Solutions?</h2>
            <p>
              Connect with our engineering experts to discover how Mechanical
              Vacuum Boosters can enhance your processes with ultra-high vacuum
              performance, reliable operation, and advanced sealing technology.
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
                  alt="Mechanical Vacuum Booster - Ultra-High Vacuum Technology - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Mechanical Vacuum Booster</h3>
                  <p>Ultra-High Vacuum Technology</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 52,000 M³/Hr</span>
                    <span>Vacuum: Up to 10⁻³ Torr</span>
                    <span>Range: 50 Torr to 1 micron</span>
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

export default MechanicalVaccumBoosters;
