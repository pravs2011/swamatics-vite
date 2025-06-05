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
  FaShip,
  FaBuilding,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./ShellTubeHeatExchangers.css";

const ShellTubeHeatExchangers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaCertificate className="feature-icon" />,
      title: "TEMA & ASME Compliance",
      description:
        "Heat Exchangers fabricated as per TEMA / ASME unfired pressure vessels codes & ASHRAE standard",
      details:
        "Comprehensive compliance with international standards ensuring reliability, safety, and performance in demanding industrial applications",
      benefit: "Industry Standard Compliance",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Wide Variety of Sizes",
      description:
        "Built in a wide variety of sizes and capacities to meet diverse industrial requirements",
      details:
        "Flexible sizing options from small laboratory units to large industrial heat exchangers with capacity as per requirement",
      benefit: "Customizable Capacity",
    },
    {
      icon: <FaShip className="feature-icon" />,
      title: "Marine Applications",
      description:
        "Heat Exchangers for sea water marine application with specialized steel shells and corrosion resistance",
      details:
        "Specialized design for marine environments with enhanced corrosion resistance and durability for sea water applications",
      benefit: "Marine Grade Construction",
    },
    {
      icon: <FaTools className="feature-icon" />,
      title: "Custom Engineering",
      description:
        "Designed as per customer specific requirement with tailored engineering solutions",
      details:
        "Custom engineering and design services to meet unique process requirements and operating conditions",
      benefit: "Tailored Solutions",
    },
  ];

  const applications = [
    {
      title: "Chemical Processing",
      description:
        "Heat transfer in chemical reactions, distillation, and process heating/cooling applications",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Chemical reactions heating/cooling",
        "Distillation processes",
        "Process fluid conditioning",
      ],
    },
    {
      title: "Oil & Gas Industry",
      description:
        "Crude oil processing, refinery operations, and petrochemical heat transfer applications",
      icon: <FaOilCan />,
      image: "🛢️",
      benefits: [
        "Crude oil heating",
        "Refinery processes",
        "Petrochemical operations",
      ],
    },
    {
      title: "Power Generation",
      description:
        "Steam generation, condensing, and thermal power plant heat recovery systems",
      icon: <FaBolt />,
      image: "⚡",
      benefits: ["Steam generation", "Condenser systems", "Heat recovery"],
    },
    {
      title: "Marine Applications",
      description:
        "Sea water cooling systems, ship engine cooling, and offshore platform applications",
      icon: <FaShip />,
      image: "🚢",
      benefits: [
        "Sea water cooling",
        "Engine cooling systems",
        "Offshore platforms",
      ],
    },
    {
      title: "HVAC Systems",
      description:
        "Commercial and industrial HVAC heat exchange for heating and cooling applications",
      icon: <FaBuilding />,
      image: "🏢",
      benefits: [
        "Commercial HVAC",
        "Industrial cooling",
        "Heat recovery systems",
      ],
    },
    {
      title: "Food & Beverage",
      description:
        "Food processing, pasteurization, and beverage production heat transfer",
      icon: <FaSeedling />,
      image: "🍃",
      benefits: ["Food processing", "Pasteurization", "Beverage production"],
    },
  ];

  const specifications = [
    {
      parameter: "Design Standards",
      value: "TEMA / ASME / ASHRAE",
      icon: <FaCertificate />,
      color: "#3b82f6",
    },
    {
      parameter: "Capacity Range",
      value: "As Per Requirement",
      icon: <FaChartLine />,
      color: "#10b981",
    },
    {
      parameter: "Material Options",
      value: "Carbon Steel / Stainless Steel",
      icon: <FaWrench />,
      color: "#f59e0b",
    },
    {
      parameter: "Applications",
      value: "Marine & Industrial",
      icon: <FaShip />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Industry Compliance",
      description:
        "Fabricated as per TEMA / ASME unfired pressure vessels codes ensuring safety and reliability",
      icon: <FaCertificate />,
      stat: "100%",
      unit: "Compliant",
    },
    {
      title: "Custom Design",
      description:
        "Designed as per customer specific requirements with tailored engineering solutions",
      icon: <FaTools />,
      stat: "Custom",
      unit: "Engineering",
    },
    {
      title: "Marine Grade",
      description:
        "Specialized construction for sea water marine applications with enhanced corrosion resistance",
      icon: <FaShip />,
      stat: "Marine",
      unit: "Certified",
    },
    {
      title: "Wide Range",
      description:
        "Built in wide variety of sizes and capacities to meet diverse industrial requirements",
      icon: <FaChartLine />,
      stat: "Variable",
      unit: "Capacity",
    },
  ];

  const systemComponents = [
    {
      component: "Shell Assembly",
      description: "Outer shell housing containing tube bundle and fluid flow",
      icon: <FaCube />,
    },
    {
      component: "Tube Bundle",
      description:
        "Heat transfer tubes arranged for optimal thermal performance",
      icon: <FaLayerGroup />,
    },
    {
      component: "Tube Sheets",
      description:
        "Tube support and sealing plates ensuring proper tube positioning",
      icon: <FaTable />,
    },
    {
      component: "Baffles",
      description:
        "Flow direction plates for enhanced heat transfer efficiency",
      icon: <FaWind />,
    },
    {
      component: "Nozzles & Connections",
      description:
        "Inlet and outlet connections for shell and tube side fluids",
      icon: <FaPlug />,
    },
    {
      component: "Support Structure",
      description: "Mounting and support systems for proper installation",
      icon: <FaWarehouse />,
    },
  ];

  const workingPrinciple = {
    title: "Shell & Tube Heat Exchanger Technology",
    description:
      "Shell & tube heat exchangers transfer heat between two fluids using a bundle of tubes inside a cylindrical shell. One fluid flows through the tubes while the other flows around the tubes within the shell, enabling efficient heat transfer.",
    steps: [
      {
        step: "1",
        title: "Fluid Separation",
        description:
          "Two fluids are kept separate with one flowing through tubes and other in shell space",
      },
      {
        step: "2",
        title: "Heat Transfer",
        description:
          "Heat transfers through tube walls from hot fluid to cold fluid efficiently",
      },
      {
        step: "3",
        title: "Flow Optimization",
        description:
          "Baffles direct shell-side flow for maximum heat transfer efficiency and performance",
      },
    ],
  };

  const productImageUrl =
    "/images/shell-and-tube-type-heat-exchanger-300x300.jpg";

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
              <span>TEMA & ASME Compliant</span>
            </div>
            <h1 className="hero-title">
              Shell & Tube
              <span className="gradient-text"> Heat Exchangers</span>
            </h1>
            <p className="hero-description">
              SWAM manufactures Shell & tube type Heat Exchangers in a wide
              variety of sizes and capacities. Fabricated as per TEMA / ASME
              unfired pressure vessels codes & ASHRAE standard, with specialized
              designs for marine applications and custom engineering as per
              customer requirements.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">TEMA</div>
                <div className="stat-label">Compliant</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">ASME</div>
                <div className="stat-label">Certified</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Custom</div>
                <div className="stat-label">Design</div>
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
                alt="Shell & Tube Heat Exchangers - TEMA & ASME Compliant"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaCertificate />
                  <span>TEMA Compliant</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaShip />
                  <span>Marine Grade</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaTools />
                  <span>Custom Design</span>
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
            <h2>Industry-Leading Heat Exchange Solutions</h2>
            <p>
              Discover our comprehensive Shell & Tube Heat Exchangers that
              deliver superior thermal performance with TEMA/ASME compliance,
              custom engineering, and specialized designs for marine and
              industrial applications
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
            <h2>Heat Exchanger Components & Technology</h2>
            <p>
              Understanding the key components of Shell & Tube Heat Exchangers
              that work together to deliver efficient heat transfer performance
              for diverse industrial applications
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaThermometerHalf />
                  <span>Heat Transfer Technology</span>
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
                  alt="Shell & Tube Heat Exchanger Components and Technology"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Tube Bundle</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Shell Housing</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Flow Connections</div>
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
                Shell & Tube Heat Exchangers deliver exceptional thermal
                performance with proven specifications designed for demanding
                applications requiring TEMA/ASME compliance and custom
                engineering solutions.
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
                <h4>Standard Design Features</h4>
                <div className="spec-table">
                  <div className="spec-row">
                    <span className="spec-label">Design Standards:</span>
                    <span className="spec-value">TEMA / ASME / ASHRAE</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Capacity:</span>
                    <span className="spec-value">As Per Requirement</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Construction:</span>
                    <span className="spec-value">Wide Variety of Sizes</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Applications:</span>
                    <span className="spec-value">Marine & Industrial</span>
                  </div>
                </div>
              </div>

              <div className="quality-badges">
                <div className="badge">
                  <FaCertificate />
                  <span>TEMA Compliant</span>
                </div>
                <div className="badge">
                  <FaAward />
                  <span>ASME Certified</span>
                </div>
                <div className="badge">
                  <FaShieldAlt />
                  <span>ASHRAE Standard</span>
                </div>
              </div>
            </div>

            <div className="specs-visual">
              <div className="product-display">
                <img
                  src={productImageUrl}
                  alt="Shell & Tube Heat Exchangers Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">TEMA Compliant</div>
                  <div className="highlight">ASME Certified</div>
                  <div className="highlight">Custom Design</div>
                  <div className="highlight">Marine Grade</div>
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
              Comprehensive heat exchange solutions for diverse industrial
              applications requiring efficient thermal performance and reliable
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
                <FaFire />
                <span>Process Heating</span>
              </div>
              <div className="app-item">
                <FaSnowflake />
                <span>Process Cooling</span>
              </div>
              <div className="app-item">
                <FaWater />
                <span>Sea Water Systems</span>
              </div>
              <div className="app-item">
                <FaIndustry />
                <span>Industrial Processing</span>
              </div>
              <div className="app-item">
                <FaRecycle />
                <span>Heat Recovery</span>
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
            <h2>Why Choose SWAM Shell & Tube Heat Exchangers</h2>
            <p>
              Industry-leading heat exchange solutions delivering superior
              thermal performance with TEMA/ASME compliance and custom
              engineering capabilities
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
              Comprehensive features that make SWAM Shell & Tube Heat Exchangers
              the preferred choice for industrial heat transfer applications
            </p>
          </div>

          <div className="features-highlight-grid">
            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaCertificate />
              </div>
              <h4>TEMA & ASME Compliance</h4>
              <p>
                Fabricated as per TEMA / ASME unfired pressure vessels codes &
                ASHRAE standard ensuring safety and reliability
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h4>Wide Variety of Sizes</h4>
              <p>
                Built in wide variety of sizes and capacities to meet diverse
                industrial heat transfer requirements
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaShip />
              </div>
              <h4>Marine Applications</h4>
              <p>
                Specialized heat exchangers for sea water marine applications
                with enhanced corrosion resistance
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaTools />
              </div>
              <h4>Custom Engineering</h4>
              <p>
                Designed as per customer specific requirements with tailored
                engineering solutions
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaThermometerHalf />
              </div>
              <h4>Efficient Heat Transfer</h4>
              <p>
                Optimized tube bundle and baffle design for maximum thermal
                efficiency and performance
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h4>Robust Construction</h4>
              <p>
                Durable construction with quality materials ensuring long
                service life and minimal maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Superior Heat Transfer Solutions?</h2>
            <p>
              Connect with our engineering experts to discover how our Shell &
              Tube Heat Exchangers can enhance your processes with TEMA/ASME
              compliance, custom design capabilities, and proven thermal
              performance.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="cta-secondary">
                <FaDownload />
                <span>Download Heat Exchanger Brochure</span>
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
                  alt="Shell & Tube Heat Exchangers - TEMA & ASME Compliant - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Shell & Tube Heat Exchangers</h3>
                  <p>TEMA & ASME Compliant</p>
                  <div className="modal-specs">
                    <span>Standards: TEMA / ASME / ASHRAE</span>
                    <span>Capacity: As Per Requirement</span>
                    <span>Applications: Marine & Industrial</span>
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

export default ShellTubeHeatExchangers;
