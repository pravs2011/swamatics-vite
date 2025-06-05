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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./LiquidRingVaccumPumps.css";

const LiquidRingVaccumPumps = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaWater className="feature-icon" />,
      title: "Liquid Ring Technology",
      description:
        "Rotary machines where liquid acts as a piston, generally water for most applications",
      details:
        "A balanced rotor with fixed radial blades having slight curvature at the tips revolves in a circular casing containing the liquid",
      benefit: "Reliable liquid seal operation",
    },
    {
      icon: <FaCircle className="feature-icon" />,
      title: "Eccentric Rotor Design",
      description:
        "Rotor axis placed eccentric with casing axis creates varying liquid ring distance for efficient compression",
      details:
        "The liquid rotates in the casing forming a circular hollow ring whose internal surface is at varying distance from the rotor axis",
      benefit: "Efficient compression cycle",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "High Capacity Performance",
      description:
        "Achieves capacity up to 30,000 M³/Hr with vacuum up to 90% for demanding applications",
      details:
        "Designed for high-volume applications with consistent performance across various industrial processes",
      benefit: "Superior throughput capability",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Versatile Configuration",
      description:
        "Available in multiple materials and configurations to suit specific application requirements",
      details:
        "Standard CI, SS 304, SS 316, SS 316L materials with vertical configuration and various sealing options",
      benefit: "Customizable solutions",
    },
  ];

  const applications = [
    {
      title: "Oil and Gas Plants",
      description:
        "Vacuum applications in oil refining, gas processing, and petrochemical operations",
      icon: <FaOilCan />,
      image: "🛢️",
      benefits: [
        "Oil refining processes",
        "Gas processing",
        "Petrochemical operations",
      ],
    },
    {
      title: "Pulp & Paper Industries",
      description:
        "Paper manufacturing, pulp processing, and dewatering applications",
      icon: <FaBoxes />,
      image: "📄",
      benefits: [
        "Paper manufacturing",
        "Pulp processing",
        "Dewatering systems",
      ],
    },
    {
      title: "Power Plants",
      description:
        "Steam condensing systems, turbine applications, and cooling tower operations",
      icon: <FaBolt />,
      image: "⚡",
      benefits: ["Steam condensing", "Turbine systems", "Cooling towers"],
    },
    {
      title: "Chemical Plants",
      description:
        "Chemical processing, distillation, and solvent recovery applications",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: ["Chemical processing", "Distillation", "Solvent recovery"],
    },
    {
      title: "Textile Industries",
      description:
        "Fabric processing, dyeing operations, and finishing applications",
      icon: <FaLayerGroup />,
      image: "🧵",
      benefits: [
        "Fabric processing",
        "Dyeing operations",
        "Finishing processes",
      ],
    },
    {
      title: "Jet and Surface Condensers",
      description:
        "Condenser vacuum systems and various industrial condensing applications",
      icon: <FaSnowflake />,
      image: "❄️",
      benefits: [
        "Condenser systems",
        "Industrial condensing",
        "Vacuum creation",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "30,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 90%",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Standard Flow Rate",
      value: "75 – 725 m³/hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Motor Size Range",
      value: "3.7 – 22 Kw",
      icon: <FaBolt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Vacuum Capability",
      description:
        "Achieves up to 90% vacuum with consistent performance for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "90%",
      unit: "Vacuum",
    },
    {
      title: "Large Capacity",
      description:
        "Exceptional pumping capacity up to 30,000 M³/Hr for large-scale industrial operations",
      icon: <FaChartLine />,
      stat: "30,000",
      unit: "M³/Hr",
    },
    {
      title: "Reliable Operation",
      description:
        "Liquid ring technology provides reliable and consistent performance with minimal maintenance",
      icon: <FaShieldAlt />,
      stat: "Reliable",
      unit: "Performance",
    },
    {
      title: "Versatile Materials",
      description:
        "Available in multiple material grades including SS 304, SS 316, SS 316L for corrosive environments",
      icon: <FaTools />,
      stat: "Multi",
      unit: "Material Options",
    },
  ];

  const workingPrinciple = {
    title: "Liquid Ring Vacuum Technology",
    description:
      "The liquid ring vacuum pump operates on the principle where liquid acts as a piston. A balanced rotor with fixed radial blades revolves eccentrically in a casing containing liquid, creating compression and vacuum cycles through the varying liquid ring distance.",
    steps: [
      {
        step: "1",
        title: "Liquid Ring Formation",
        description:
          "Liquid rotates in casing forming circular hollow ring at varying distances from rotor axis",
      },
      {
        step: "2",
        title: "Suction Stroke",
        description:
          "Moving liquid ring acts as piston on suction stroke when nearest to rotor axis",
      },
      {
        step: "3",
        title: "Compression & Discharge",
        description:
          "Chamber volume decreases as liquid ring moves toward center, compressing and discharging gas",
      },
    ],
  };

  const productImageUrl = "/images/liquid-Ring-Vacuum-Pump.jpg";

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
              Liquid Ring
              <span className="gradient-text"> Vacuum Pumps</span>
            </h1>
            <p className="hero-description">
              SWAM Liquid Ring Vacuum Pumps are rotary machines where liquid
              acts as a piston, generally water for most applications. Featuring
              balanced rotor design with fixed radial blades and eccentric
              placement for reliable vacuum performance up to 90% vacuum levels.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">30,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">90%</div>
                <div className="stat-label">Vacuum Level</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Water Ring</div>
                <div className="stat-label">Technology</div>
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
                alt="Liquid Ring Vacuum Pump - Water Ring Technology"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaWater />
                  <span>Liquid Ring</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaCircle />
                  <span>Eccentric Design</span>
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
            <h2>Liquid Ring Vacuum Technology</h2>
            <p>
              Discover the proven engineering features that make our Liquid Ring
              Vacuum Pumps the reliable choice for high-capacity vacuum
              applications across diverse industries
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
              Understanding the liquid ring technology where liquid acts as a
              piston to create reliable vacuum performance with high capacity
              throughput
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaWater />
                  <span>Liquid Ring Technology</span>
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
                  alt="Liquid Ring Vacuum Pump Working Principle"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Eccentric Rotor</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Liquid Ring Chamber</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Fixed Radial Blades</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaWater />
                </div>
                <h4>Water Ring Operation</h4>
                <p>
                  Generally water is used as the sealing liquid, creating a
                  reliable and effective vacuum seal for consistent performance
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Seal Medium:</span>
                    <span className="spec-value">Water</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Operation:</span>
                    <span className="spec-value">Continuous</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaChartLine />
                </div>
                <h4>High Capacity Performance</h4>
                <p>
                  Delivers exceptional capacity up to 30,000 M³/Hr with vacuum
                  levels up to 90% for demanding industrial applications
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Up to 30,000 M³/Hr capacity</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>90% vacuum achievement</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaGears />
                </div>
                <h4>Versatile Configuration</h4>
                <p>
                  Available in vertical configuration with multiple material
                  options and sealing arrangements for specific applications
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Vertical configuration</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Multiple materials available</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaShieldAlt />
                </div>
                <h4>Reliable Operation</h4>
                <p>
                  Proven liquid ring technology provides consistent performance
                  with minimal maintenance requirements across various
                  industries
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Proven technology</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Low maintenance</span>
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
                Liquid Ring Vacuum Pumps deliver exceptional performance with
                proven specifications designed for high-capacity, reliable
                operation in demanding industrial vacuum applications.
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
                    <span className="spec-label">Inlet/Outlet port sizes:</span>
                    <span className="spec-value">40 – 125 mm (NB)</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Vacuum ratings:</span>
                    <span className="spec-value">67 – 53 mbar (a)</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Max. Vacuum:</span>
                    <span className="spec-value">Max. 53 mbar (a)</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">MOC Options:</span>
                    <span className="spec-value">
                      CI, SS 304, SS 316, SS 316L
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
                  alt="Liquid Ring Vacuum Pump Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Liquid Ring Technology</div>
                  <div className="highlight">High Capacity Operation</div>
                  <div className="highlight">Vertical Configuration</div>
                  <div className="highlight">Multiple Material Options</div>
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
              Reliable vacuum solutions for diverse industrial applications
              requiring high-capacity performance and consistent operation
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
            <h2>Why Choose SWAM Liquid Ring Vacuum Pumps</h2>
            <p>
              Proven liquid ring technology for reliable high-capacity vacuum
              performance
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
            <h2>Ready for High-Capacity Vacuum Solutions?</h2>
            <p>
              Connect with our engineering experts to discover how Liquid Ring
              Vacuum Pumps can enhance your processes with reliable performance,
              high capacity operation, and proven liquid ring technology.
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
                  alt="Liquid Ring Vacuum Pump - Water Ring Technology - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Liquid Ring Vacuum Pump</h3>
                  <p>Water Ring Technology</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 30,000 M³/Hr</span>
                    <span>Vacuum: Up to 90%</span>
                    <span>Operation: Liquid Ring</span>
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

export default LiquidRingVaccumPumps;
