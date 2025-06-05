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
  FaExpandArrowsAlt,
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
  FaPlug,
  FaMedkit,
  FaTable,
  FaFilter,
  FaExchangeAlt,
  FaPowerOff,
  FaCompress,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./CondenserExhausters.css";

const CondenserExhausters = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaIndustry className="feature-icon" />,
      title: "Power Generation Service",
      description:
        "Advanced design Condenser Exhauster specifically for hogging and holding service in power generation applications",
      details:
        "Specialized design optimized for power plant condensers with reliable performance for continuous operation",
      benefit: "Power plant optimized",
    },
    {
      icon: <FaSync className="feature-icon" />,
      title: "Total Recirculation System",
      description:
        "Complete system with liquid ring vacuum pumps, separator, heat exchanger with total recirculation capability",
      details:
        "Integrated recirculation system ensures efficient operation and optimal performance with minimal water consumption",
      benefit: "Efficient operation",
    },
    {
      icon: <FaExchangeAlt className="feature-icon" />,
      title: "Integrated Heat Exchanger",
      description:
        "Built-in heat exchanger for optimal thermal management and enhanced system efficiency",
      details:
        "Advanced heat exchanger design maintains optimal operating temperatures for consistent performance",
      benefit: "Thermal efficiency",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Reliable Performance",
      description:
        "Proven design with robust construction for continuous operation in demanding power generation environments",
      details:
        "Built for 24/7 operation with minimal maintenance requirements and guaranteed reliability",
      benefit: "Continuous operation",
    },
  ];

  const applications = [
    {
      title: "Power Plant Condensers",
      description:
        "Main condenser exhauster service for steam turbine power generation systems",
      icon: <FaPowerOff />,
      image: "⚡",
      benefits: [
        "Steam turbine condensers",
        "Main condenser evacuation",
        "Power generation systems",
      ],
    },
    {
      title: "Hogging Service",
      description:
        "Initial evacuation and rapid pump-down of condenser systems during startup",
      icon: <FaRocket />,
      image: "🚀",
      benefits: [
        "Rapid startup evacuation",
        "Initial condenser pump-down",
        "Fast system priming",
      ],
    },
    {
      title: "Holding Service",
      description:
        "Continuous operation to maintain vacuum in condenser during normal operation",
      icon: <FaLock />,
      image: "🔒",
      benefits: [
        "Continuous vacuum maintenance",
        "Normal operation support",
        "Steady-state performance",
      ],
    },
    {
      title: "Steam Power Plants",
      description:
        "Complete condenser exhauster solutions for thermal and nuclear power plants",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Thermal power plants",
        "Nuclear power facilities",
        "Combined cycle plants",
      ],
    },
    {
      title: "Industrial Steam Systems",
      description:
        "Condenser exhauster applications in industrial steam and process systems",
      icon: <FaGasPump />,
      image: "🔧",
      benefits: [
        "Process steam systems",
        "Industrial condensers",
        "Steam recovery systems",
      ],
    },
    {
      title: "Turbine Applications",
      description:
        "Specialized exhauster systems for various turbine condenser applications",
      icon: <FaWind />,
      image: "💨",
      benefits: [
        "Steam turbines",
        "Gas turbine HRSG",
        "Combined cycle systems",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity Range",
      value: "10-40 SCFM",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Service Type",
      value: "Hogging & Holding",
      icon: <FaSync />,
      color: "#10b981",
    },
    {
      parameter: "Application",
      value: "Power Generation",
      icon: <FaPowerOff />,
      color: "#f59e0b",
    },
    {
      parameter: "System Type",
      value: "Total Recirculation",
      icon: <FaExchangeAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Proven Design",
      description:
        "Advanced design specifically developed for power generation condenser applications",
      icon: <FaAward />,
      stat: "Advanced",
      unit: "Design",
    },
    {
      title: "Dual Service",
      description:
        "Single system handles both hogging and holding service for complete condenser support",
      icon: <FaSync />,
      stat: "Dual",
      unit: "Service",
    },
    {
      title: "Complete System",
      description:
        "Integrated package with pumps, separator, heat exchanger, and optional ejector",
      icon: <FaLayerGroup />,
      stat: "Complete",
      unit: "Package",
    },
    {
      title: "Power Optimized",
      description:
        "Specifically engineered for power generation industry requirements and standards",
      icon: <FaPowerOff />,
      stat: "Power",
      unit: "Optimized",
    },
  ];

  const systemComponents = [
    {
      component: "Liquid Ring Vacuum Pumps",
      description: "Primary vacuum generation with liquid ring technology",
      icon: <FaCircle />,
    },
    {
      component: "Separator",
      description: "Efficient liquid-gas separation for system protection",
      icon: <FaFilter />,
    },
    {
      component: "Heat Exchanger",
      description: "Thermal management for optimal operating conditions",
      icon: <FaExchangeAlt />,
    },
    {
      component: "Ejector (Optional)",
      description: "Additional vacuum enhancement when required",
      icon: <FaRocket />,
    },
    {
      component: "Recirculation System",
      description: "Total recirculation for water conservation",
      icon: <FaSync />,
    },
    {
      component: "Control System",
      description: "Automated control and monitoring systems",
      icon: <FaCogs />,
    },
  ];

  const workingPrinciple = {
    title: "Condenser Exhauster Technology",
    description:
      "Advanced condenser exhauster system utilizing liquid ring vacuum pump technology with integrated separator, heat exchanger, and total recirculation for efficient hogging and holding service in power generation applications.",
    steps: [
      {
        step: "1",
        title: "Hogging Operation",
        description:
          "Rapid evacuation of condenser during startup to establish initial vacuum conditions",
      },
      {
        step: "2",
        title: "Holding Service",
        description:
          "Continuous operation to maintain vacuum levels during normal power generation",
      },
      {
        step: "3",
        title: "Recirculation",
        description:
          "Total recirculation system with heat exchanger ensures efficient water management",
      },
    ],
  };

  const productImageUrl = "/images/Condenser-Exhausters.jpg";

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
              <span>Power Generation Optimized</span>
            </div>
            <h1 className="hero-title">
              Condenser
              <span className="gradient-text"> Exhausters</span>
            </h1>
            <p className="hero-description">
              SWAM offers advanced design Condenser Exhauster for hogging and
              holding service in power generation. The system consists of liquid
              ring vacuum pumps, separator, heat exchanger and ejector
              (optional) with total recirculation for reliable and efficient
              condenser service.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10-40</div>
                <div className="stat-label">SCFM Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Hogging</div>
                <div className="stat-label">& Holding</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Power</div>
                <div className="stat-label">Generation</div>
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
                alt="Condenser Exhausters - Power Generation Service"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaSync />
                  <span>Total Recirculation</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaPowerOff />
                  <span>Power Generation</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaExchangeAlt />
                  <span>Heat Exchanger</span>
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
            <h2>Advanced Condenser Exhauster Solutions</h2>
            <p>
              Discover our specialized condenser exhauster systems designed for
              power generation applications, featuring advanced liquid ring
              technology with total recirculation for both hogging and holding
              service requirements
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

      {/* System Components Section */}
      <section className="modern-technology-section">
        <div className="container">
          <div className="section-header">
            <h2>System Components & Technology</h2>
            <p>
              Understanding the complete condenser exhauster system components
              that work together to deliver reliable hogging and holding service
              for power generation applications
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaIndustry />
                  <span>Power Generation Service</span>
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
                  alt="Condenser Exhauster Components and Technology"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Liquid Ring Pump</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Heat Exchanger</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Separator</div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Components Grid */}
            <div className="tech-details-grid">
              {systemComponents.map((component, index) => (
                <div key={index} className="tech-detail-card">
                  <div className="tech-icon-wrapper">{component.icon}</div>
                  <h4>{component.component}</h4>
                  <p>{component.description}</p>
                </div>
              ))}
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
                Condenser Exhausters deliver reliable performance with proven
                specifications designed specifically for power generation
                condenser service with both hogging and holding capabilities in
                a complete integrated system.
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
                <h4>Standard System Configuration</h4>
                <div className="spec-table">
                  <div className="spec-row">
                    <span className="spec-label">Capacity Options:</span>
                    <span className="spec-value">10, 20, 30, 40 SCFM</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Service Type:</span>
                    <span className="spec-value">Hogging & Holding</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Primary Application:</span>
                    <span className="spec-value">Power Generation</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">System Features:</span>
                    <span className="spec-value">Total Recirculation</span>
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
                  <span>Power Industry Proven</span>
                </div>
                <div className="badge">
                  <FaShieldAlt />
                  <span>Reliable Operation</span>
                </div>
              </div>
            </div>

            <div className="specs-visual">
              <div className="product-display">
                <img
                  src={productImageUrl}
                  alt="Condenser Exhausters Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Liquid Ring Technology</div>
                  <div className="highlight">Total Recirculation</div>
                  <div className="highlight">Heat Exchanger</div>
                  <div className="highlight">Dual Service</div>
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
            <h2>Power Generation Applications</h2>
            <p>
              Specialized condenser exhauster solutions for diverse power
              generation applications requiring reliable hogging and holding
              service for optimal condenser performance
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

          {/* Additional Applications Grid */}
          <div className="additional-applications">
            <h3>More Applications</h3>
            <div className="apps-grid">
              <div className="app-item">
                <FaIndustry />
                <span>Thermal Power Plants</span>
              </div>
              <div className="app-item">
                <FaAtom />
                <span>Nuclear Power Plants</span>
              </div>
              <div className="app-item">
                <FaFire />
                <span>Combined Cycle Plants</span>
              </div>
              <div className="app-item">
                <FaWind />
                <span>Steam Turbines</span>
              </div>
              <div className="app-item">
                <FaRecycle />
                <span>Cogeneration Plants</span>
              </div>
              <div className="app-item">
                <FaGlobe />
                <span>Industrial Steam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="modern-advantages-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SWAM Condenser Exhausters</h2>
            <p>
              Advanced condenser exhauster solutions delivering proven
              performance for power generation applications with specialized
              design for both hogging and holding service requirements
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
              Comprehensive features that make SWAM Condenser Exhausters the
              preferred choice for power generation condenser service
              applications
            </p>
          </div>

          <div className="features-highlight-grid">
            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaPowerOff />
              </div>
              <h4>Power Generation Optimized</h4>
              <p>
                Specifically designed for power plant condenser applications
                with proven performance in demanding environments
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaSync />
              </div>
              <h4>Dual Service Capability</h4>
              <p>
                Single system handles both hogging and holding service for
                complete condenser support throughout operation cycles
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaCircle />
              </div>
              <h4>Liquid Ring Technology</h4>
              <p>
                Reliable liquid ring vacuum pump technology ensures consistent
                performance and minimal maintenance requirements
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaExchangeAlt />
              </div>
              <h4>Integrated Heat Exchanger</h4>
              <p>
                Built-in heat exchanger optimizes thermal management for
                enhanced system efficiency and performance
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaFilter />
              </div>
              <h4>Advanced Separation</h4>
              <p>
                Efficient separator design ensures optimal liquid-gas separation
                for system protection and reliability
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaTint />
              </div>
              <h4>Total Recirculation</h4>
              <p>
                Complete recirculation system minimizes water consumption while
                maintaining optimal operating conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Reliable Condenser Service?</h2>
            <p>
              Connect with our power generation experts to discover how our
              Condenser Exhausters can enhance your power plant efficiency with
              proven hogging and holding service capabilities designed
              specifically for power generation applications.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <FaPhone />
                <span>Get Expert Consultation</span>
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
                  alt="Condenser Exhausters - Power Generation Service - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Condenser Exhausters</h3>
                  <p>Power Generation Service</p>
                  <div className="modal-specs">
                    <span>Capacity: 10-40 SCFM</span>
                    <span>Service: Hogging & Holding</span>
                    <span>Application: Power Generation</span>
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

export default CondenserExhausters;
