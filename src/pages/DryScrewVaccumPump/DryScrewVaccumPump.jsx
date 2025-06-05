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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./DryScrewVaccumPump.css";

const DryScrewVaccumPump = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaGears className="feature-icon" />,
      title: "Combined Variable Pitch Technology",
      description:
        "Advanced dry screw technology with variable pitch design for superior vacuum performance and reliability",
      details:
        "Developed by highly skilled engineers with advanced design principles for superior performance and high reliability in demanding vacuum applications",
      benefit: "Superior vacuum performance",
    },
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Oil-Free Operation",
      description:
        "Complete oil-free design eliminates contamination and reduces environmental impact with zero effluent",
      details:
        "No contamination of process stream, no effluent, no pollution, and no waste disposal costs, making it environmentally friendly",
      benefit: "Zero contamination",
    },
    {
      icon: <FaSnowflake className="feature-icon" />,
      title: "Deep Vacuum Capability",
      description:
        "Achieves ultimate vacuum up to 0.01 Torr with consistent performance across varying conditions",
      details:
        "Deeper vacuum and more flexible operation with no variation in vacuum resulting from changing seasons and utility conditions",
      benefit: "Consistent deep vacuum",
    },
    {
      icon: <FaRecycle className="feature-icon" />,
      title: "Immediate Solvent Recovery",
      description:
        "Direct solvent recovery at pump exhaust for immediate reuse and cost savings",
      details:
        "Immediate solvent recovery capability at pump exhaust reduces operational costs and improves process efficiency",
      benefit: "Cost-effective recovery",
    },
  ];

  const applications = [
    {
      title: "Chemical Processing",
      description:
        "Distillation, crystallization, and solvent recovery in chemical industries",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Solvent recovery",
        "Distillation processes",
        "Chemical synthesis",
      ],
    },
    {
      title: "Pharmaceutical",
      description:
        "Freeze drying, tablet coating, and API manufacturing processes",
      icon: <FaSpa />,
      image: "💊",
      benefits: ["Freeze drying", "Tablet coating", "API manufacturing"],
    },
    {
      title: "Food Processing",
      description:
        "Vacuum packaging, freeze drying, and food preservation applications",
      icon: <FaBoxes />,
      image: "🍕",
      benefits: ["Vacuum packaging", "Food preservation", "Freeze drying"],
    },
    {
      title: "Semiconductor",
      description: "Wafer processing, etching, and clean room applications",
      icon: <FaMicrochip />,
      image: "🔬",
      benefits: [
        "Wafer processing",
        "Etching applications",
        "Clean environments",
      ],
    },
    {
      title: "Plastics & Polymers",
      description:
        "Vacuum forming, degassing, and polymer processing applications",
      icon: <FaLayerGroup />,
      image: "🔧",
      benefits: ["Vacuum forming", "Degassing processes", "Polymer processing"],
    },
    {
      title: "Research & Laboratory",
      description: "Laboratory vacuum systems and research applications",
      icon: <FaAtom />,
      image: "🔬",
      benefits: [
        "Laboratory systems",
        "Research applications",
        "Analytical processes",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "3,500 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Ultimate Vacuum",
      value: "0.01 Torr",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design Type",
      value: "Combined Variable Pitch",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Oil-Free Dry Screw",
      icon: <FaLeaf />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "No Contamination",
      description:
        "Oil-free operation ensures no contamination of process stream for pure vacuum applications",
      icon: <FaLeaf />,
      stat: "Zero",
      unit: "Contamination",
    },
    {
      title: "Deep Vacuum",
      description:
        "Ultimate vacuum capability up to 0.01 Torr for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "0.01",
      unit: "Torr",
    },
    {
      title: "High Capacity",
      description:
        "Exceptional pumping speed up to 3,500 M³/Hr for large-scale operations",
      icon: <FaChartLine />,
      stat: "3,500",
      unit: "M³/Hr",
    },
    {
      title: "Lower Costs",
      description:
        "Reduced total cost of ownership with lower maintenance and utility costs",
      icon: <FaBolt />,
      stat: "Lower",
      unit: "Operating Cost",
    },
  ];

  const workingPrinciple = {
    title: "Dry Screw Vacuum Technology",
    description:
      "The combined variable pitch screw rotors create vacuum through positive displacement action. The screws mesh together with precise clearances, trapping and moving gas from inlet to outlet, achieving deep vacuum without oil contamination.",
    steps: [
      {
        step: "1",
        title: "Gas Intake",
        description:
          "Process gas enters through the inlet port as screws create vacuum",
      },
      {
        step: "2",
        title: "Compression",
        description:
          "Variable pitch screws compress gas progressively with no oil contact",
      },
      {
        step: "3",
        title: "Exhaust",
        description:
          "Compressed gas discharged with immediate solvent recovery capability",
      },
    ],
  };

  const productImageUrl = "/images/dry-Screw-Vacuum-Pump.jpg";

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
              Dry Screw
              <span className="gradient-text"> Vacuum Pump</span>
            </h1>
            <p className="hero-description">
              SWAM Dry Screw Vacuum Pumps feature combined variable pitch
              technology developed by highly skilled engineers for advanced
              design, superior performance, and high reliability. Experience
              oil-free operation with no contamination, deeper vacuum
              capability, and immediate solvent recovery.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">3,500</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0.01</div>
                <div className="stat-label">Torr Vacuum</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Oil-Free</div>
                <div className="stat-label">Operation</div>
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
                alt="Dry Screw Vacuum Pump - Combined Variable Pitch Technology"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaGears />
                  <span>Variable Pitch</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaLeaf />
                  <span>Oil-Free</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaRecycle />
                  <span>Solvent Recovery</span>
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
            <h2>Advanced Dry Screw Technology</h2>
            <p>
              Discover the revolutionary engineering features that make our Dry
              Screw Vacuum Pumps the most reliable and efficient choice for
              contamination-free vacuum applications
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
              Understanding the combined variable pitch screw technology that
              delivers oil-free, contamination-free vacuum with superior
              performance
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaGears />
                  <span>Variable Pitch Screw Technology</span>
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
                  alt="Dry Screw Vacuum Pump Working Principle"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">
                      Variable Pitch Screws
                    </div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Oil-Free Chamber</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Precise Clearances</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaLeaf />
                </div>
                <h4>Oil-Free Operation</h4>
                <p>
                  Complete oil-free design ensures no contamination of process
                  stream with zero effluent and no pollution
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Contamination:</span>
                    <span className="spec-value">Zero</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Effluent:</span>
                    <span className="spec-value">None</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaTachometerAlt />
                </div>
                <h4>Deep Vacuum Performance</h4>
                <p>
                  Achieves ultimate vacuum up to 0.01 Torr with consistent
                  performance regardless of seasonal variations
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>0.01 Torr ultimate vacuum</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Season-independent operation</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaRecycle />
                </div>
                <h4>Immediate Solvent Recovery</h4>
                <p>
                  Direct solvent recovery at pump exhaust for immediate reuse,
                  reducing operational costs and improving efficiency
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Immediate recovery</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Cost reduction</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaTools />
                </div>
                <h4>Lower Maintenance Costs</h4>
                <p>
                  Advanced design with fewer moving parts and oil-free operation
                  significantly reduces maintenance requirements and costs
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Reduced maintenance</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Lower operating costs</span>
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
                Dry Screw Vacuum Pumps deliver exceptional vacuum performance
                with industry-leading specifications designed for reliability,
                efficiency, and contamination-free operation in demanding
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
                <h4>Key Benefits & Advantages</h4>
                <div className="feature-list">
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>No contamination of process stream</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>Deeper vacuum and more flexible operation</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>
                      No effluent, no pollution, no waste disposal costs
                    </span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>Lower total cost of ownership</span>
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
                  alt="Dry Screw Vacuum Pump Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Variable Pitch Technology</div>
                  <div className="highlight">Oil-Free Operation</div>
                  <div className="highlight">Deep Vacuum Capability</div>
                  <div className="highlight">Solvent Recovery</div>
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
              Oil-free vacuum solutions for demanding applications requiring
              contamination-free environments and deep vacuum performance
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
            <h2>Why Choose SWAM Dry Screw Vacuum Pumps</h2>
            <p>Advanced oil-free technology for superior vacuum performance</p>
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
            <h2>Ready for Oil-Free Vacuum Technology?</h2>
            <p>
              Connect with our engineering experts to discover how Dry Screw
              Vacuum Pumps can enhance your processes with contamination-free
              operation, deeper vacuum capability, and immediate solvent
              recovery.
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
                  alt="Dry Screw Vacuum Pump - Combined Variable Pitch Technology - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Dry Screw Vacuum Pump</h3>
                  <p>Combined Variable Pitch Technology</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 3,500 M³/Hr</span>
                    <span>Vacuum: Up to 0.01 Torr</span>
                    <span>Operation: Oil-Free</span>
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

export default DryScrewVaccumPump;
