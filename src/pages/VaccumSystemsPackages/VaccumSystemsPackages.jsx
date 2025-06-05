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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./VaccumSystemsPackages.css";

const VaccumSystemsPackages = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaLayerGroup className="feature-icon" />,
      title: "Complete Turnkey Solutions",
      description:
        "Complete vacuum system packages with backup pumps, vacuum boosters, condensers, gauges, switches, and starter panels",
      details:
        "Integrated systems designed to deliver guaranteed performance as per client requirements with all necessary components included",
      benefit: "Total package solution",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Wide Capacity Range",
      description:
        "Vacuum systems ranging from 150 to 52,000 M³/Hr with vacuum levels up to 10⁻⁴ mbar and lower",
      details:
        "Comprehensive range of vacuum systems to suit various industrial applications with flexible capacity and vacuum level options",
      benefit: "Scalable performance",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Multi-Stage Configuration",
      description:
        "Combination of backup pumps with one to five boosters plus condenser cash pot for enhanced performance",
      details:
        "Flexible multi-stage systems allowing for optimal vacuum performance through strategic booster combinations",
      benefit: "Enhanced vacuum levels",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Guaranteed Performance",
      description:
        "Swam delivers package performance exactly as per client requirements with proven reliability",
      details:
        "Comprehensive testing and quality assurance ensures that vacuum systems meet specified performance parameters",
      benefit: "Reliable operation",
    },
  ];

  const applications = [
    {
      title: "Drying Applications",
      description:
        "Industrial drying processes requiring precise vacuum control and efficient moisture removal",
      icon: <FaThermometerHalf />,
      image: "🌡️",
      benefits: [
        "Freeze drying systems",
        "Pharmaceutical drying",
        "Food dehydration",
      ],
    },
    {
      title: "Chemical Processing",
      description:
        "Distillation, crystallization, and chemical reaction processes requiring high vacuum",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Chemical distillation",
        "Reactor evacuation",
        "Solvent recovery",
      ],
    },
    {
      title: "Electronics & Semiconductors",
      description:
        "Semiconductor manufacturing and electronic device production requiring ultra-clean vacuum",
      icon: <FaMicrochip />,
      image: "🔌",
      benefits: [
        "Semiconductor fabrication",
        "Electronic component production",
        "Clean room applications",
      ],
    },
    {
      title: "Sterilization Processes",
      description:
        "Ethylene oxide sterilization and medical device sterilization applications",
      icon: <FaMedkit />,
      image: "🏥",
      benefits: [
        "Ethylene oxide sterilization",
        "Medical device processing",
        "Pharmaceutical sterilization",
      ],
    },
    {
      title: "Bio-Fuels Production",
      description:
        "Bio-fuel processing and renewable energy applications requiring vacuum systems",
      icon: <FaSeedling />,
      image: "🌱",
      benefits: [
        "Bio-fuel distillation",
        "Renewable energy processing",
        "Green technology applications",
      ],
    },
    {
      title: "Oil & Gas Processing",
      description:
        "Filtration of transformer oil, waste lube oil, and petroleum product processing",
      icon: <FaOilCan />,
      image: "🛢️",
      benefits: [
        "Transformer oil filtration",
        "Waste lube oil processing",
        "Petroleum refining",
      ],
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
      value: "Up to 10⁻⁴ mbar",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Minimum Capacity",
      value: "150 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Booster Stages",
      value: "1 to 5 Boosters",
      icon: <FaLayerGroup />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Ultra-High Vacuum",
      description:
        "Achieves vacuum levels up to 10⁻⁴ mbar and lower with multi-stage booster configuration",
      icon: <FaTachometerAlt />,
      stat: "10⁻⁴",
      unit: "mbar",
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
      title: "Complete Package",
      description:
        "Turnkey solution with all components including backup pumps, boosters, and controls",
      icon: <FaLayerGroup />,
      stat: "Complete",
      unit: "System",
    },
    {
      title: "Flexible Configuration",
      description:
        "Multi-stage systems with 1 to 5 boosters for optimized performance requirements",
      icon: <FaGears />,
      stat: "1-5",
      unit: "Boosters",
    },
  ];

  const systemComponents = [
    {
      component: "Backup Pump",
      description: "Primary vacuum pump providing initial evacuation",
      icon: <FaGasPump />,
    },
    {
      component: "Vacuum Boosters",
      description: "1-5 boosters for enhanced vacuum performance",
      icon: <FaRocket />,
    },
    {
      component: "Condensers",
      description: "Vapor condensation and recovery systems",
      icon: <FaSnowflake />,
    },
    {
      component: "Gauges & Switches",
      description: "Monitoring and control instrumentation",
      icon: <FaTachometerAlt />,
    },
    {
      component: "Starter Panels",
      description: "Electrical control and automation systems",
      icon: <FaPlug />,
    },
    {
      component: "Cash Pot",
      description: "Condenser cash pot for efficient operation",
      icon: <FaWarehouse />,
    },
  ];

  const workingPrinciple = {
    title: "Vacuum Systems & Packages Technology",
    description:
      "Complete turnkey vacuum systems combining backup pumps with multiple vacuum boosters to achieve ultra-high vacuum levels. The system includes all necessary components for guaranteed performance as per client requirements.",
    steps: [
      {
        step: "1",
        title: "Primary Evacuation",
        description:
          "Backup pump creates initial vacuum while system components work in coordination",
      },
      {
        step: "2",
        title: "Multi-Stage Boosting",
        description:
          "1-5 vacuum boosters progressively enhance vacuum levels for ultra-high performance",
      },
      {
        step: "3",
        title: "System Integration",
        description:
          "Complete package with condensers, controls, and monitoring ensures optimal operation",
      },
    ],
  };

  const productImageUrl = "/images/Vacuum-Systems-Packages.jpg";

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
              <span>Complete Turnkey Solutions</span>
            </div>
            <h1 className="hero-title">
              Vacuum Systems
              <span className="gradient-text"> & Packages</span>
            </h1>
            <p className="hero-description">
              SWAM offers complete turnkey vacuum system packages with very high
              vacuums. The system consists of backup pump with vacuum boosters,
              condensers, gauges, switches, starter panels etc. delivering
              package performance as per client requirements with multi-stage
              configurations.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">52,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10⁻⁴</div>
                <div className="stat-label">mbar Vacuum</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Turnkey</div>
                <div className="stat-label">Solutions</div>
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
                alt="Vacuum Systems & Packages - Complete Turnkey Solutions"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaLayerGroup />
                  <span>Complete Package</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaRocket />
                  <span>Multi-Stage Boosters</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaChartLine />
                  <span>High Performance</span>
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
            <h2>Complete Vacuum System Solutions</h2>
            <p>
              Discover our comprehensive vacuum systems and packages that
              deliver guaranteed performance with complete turnkey solutions
              including all necessary components for ultra-high vacuum
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

      {/* System Components Section */}
      <section className="modern-technology-section">
        <div className="container">
          <div className="section-header">
            <h2>System Components & Technology</h2>
            <p>
              Understanding the complete vacuum system package components that
              work together to deliver guaranteed performance for demanding
              industrial vacuum applications
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaLayerGroup />
                  <span>Complete System Package</span>
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
                  alt="Vacuum Systems Components and Technology"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Vacuum Boosters</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Backup Pump</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Control System</div>
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
                Vacuum Systems & Packages deliver exceptional ultra-high vacuum
                performance with proven specifications designed for demanding
                applications requiring complete turnkey solutions and guaranteed
                performance.
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
                    <span className="spec-label">Capacity Range:</span>
                    <span className="spec-value">150 - 52,000 M³/Hr</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Vacuum Level:</span>
                    <span className="spec-value">Up to 10⁻⁴ mbar & lower</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Booster Stages:</span>
                    <span className="spec-value">1 to 5 Boosters</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Package Type:</span>
                    <span className="spec-value">Complete Turnkey</span>
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
                  <span>Guaranteed Performance</span>
                </div>
              </div>
            </div>

            <div className="specs-visual">
              <div className="product-display">
                <img
                  src={productImageUrl}
                  alt="Vacuum Systems & Packages Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Complete Package</div>
                  <div className="highlight">Multi-Stage Design</div>
                  <div className="highlight">Guaranteed Performance</div>
                  <div className="highlight">Turnkey Solution</div>
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
              Complete vacuum system solutions for diverse industrial
              applications requiring ultra-high vacuum performance and reliable
              operation across multiple sectors
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
                <FaTable />
                <span>Pervaporation</span>
              </div>
              <div className="app-item">
                <FaAtom />
                <span>Polymerization</span>
              </div>
              <div className="app-item">
                <FaFlask />
                <span>Fatty Acids & Alcohols</span>
              </div>
              <div className="app-item">
                <FaIndustry />
                <span>Reactor Service</span>
              </div>
              <div className="app-item">
                <FaFilter />
                <span>Filtration Systems</span>
              </div>
              <div className="app-item">
                <FaGlobe />
                <span>And Many More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="modern-advantages-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SWAM Vacuum Systems & Packages</h2>
            <p>
              Complete turnkey vacuum solutions delivering guaranteed
              performance with ultra-high vacuum capability and comprehensive
              system integration
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
              Comprehensive features that make SWAM Vacuum Systems & Packages
              the preferred choice for complete turnkey vacuum solutions
            </p>
          </div>

          <div className="features-highlight-grid">
            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaLayerGroup />
              </div>
              <h4>Complete Turnkey Package</h4>
              <p>
                All components included: backup pumps, boosters, condensers,
                gauges, switches, and starter panels
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h4>Guaranteed Performance</h4>
              <p>
                Swam delivers package performance exactly as per client
                requirements with proven reliability
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaGears />
              </div>
              <h4>Multi-Stage Configuration</h4>
              <p>
                Flexible combination of 1 to 5 vacuum boosters with condenser
                cash pot for enhanced performance
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h4>Wide Operating Range</h4>
              <p>
                Capacity from 150 to 52,000 M³/Hr with vacuum up to 10⁻⁴ mbar
                and lower
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaTools />
              </div>
              <h4>Auxiliary Equipment Design</h4>
              <p>
                Improves backing pump performance with increased capacity and
                reduced pumping down time
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h4>High-Speed Operation</h4>
              <p>
                Extremely small working clearances enable high-speed operation
                without mechanical wear and tear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Complete Vacuum Solutions?</h2>
            <p>
              Connect with our engineering experts to discover how our complete
              Vacuum Systems & Packages can enhance your processes with
              guaranteed performance, turnkey solutions, and ultra-high vacuum
              capability.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="cta-secondary">
                <FaDownload />
                <span>Download System Brochure</span>
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
                  alt="Vacuum Systems & Packages - Complete Turnkey Solutions - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Vacuum Systems & Packages</h3>
                  <p>Complete Turnkey Solutions</p>
                  <div className="modal-specs">
                    <span>Capacity: 150 - 52,000 M³/Hr</span>
                    <span>Vacuum: Up to 10⁻⁴ mbar</span>
                    <span>Configuration: 1-5 Boosters</span>
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

export default VaccumSystemsPackages;
