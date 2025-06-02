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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./SRSeriesBlowers.css";

const SRSeriesBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaGears className="feature-icon" />,
      title: "Computer Generated Axcel Series Profile",
      description:
        "Advanced computer-generated rotor profile optimizes high volumetric efficiency with better uniform clearances",
      details:
        "State-of-the-art rotor profile design ensures maximum efficiency with minimal internal slip losses and optimal gas flow characteristics",
      benefit: "High volumetric efficiency",
    },
    {
      icon: <FaWeight className="feature-icon" />,
      title: "Heavy Duty Construction",
      description:
        "Ruggedly built with appropriate rotor shaft design for tough conditions and high load transmission",
      details:
        "Engineered for demanding industrial environments with heavy-duty antifriction oil lubricated bearings and robust construction",
      benefit: "Maximum durability",
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: "CNC Machine Precision",
      description:
        "High accuracy manufacturing on CNC machines ensuring precise clearances and reliable operation",
      details:
        "Advanced CNC machining technology guarantees consistent quality and precise tolerances for optimal performance",
      benefit: "Precision engineering",
    },
    {
      icon: <FaLock className="feature-icon" />,
      title: "Special Lip Seal System",
      description:
        "Advanced sealing system with inbuilt pulsation dampeners for smooth, non-pulsating delivery",
      details:
        "Professional-grade sealing technology prevents leakage while integrated dampeners ensure smooth operation with lower sound emission",
      benefit: "Reliable sealing",
    },
  ];

  const applications = [
    {
      title: "Wastewater Treatment",
      description:
        "Aeration systems for biological treatment processes and sludge handling",
      icon: <FaRecycle />,
      image: "🌊",
      benefits: [
        "Efficient aeration",
        "Biological treatment support",
        "Sludge handling",
      ],
    },
    {
      title: "Pneumatic Conveying",
      description:
        "Material transport systems for bulk handling and powder conveying",
      icon: <FaBoxes />,
      image: "📦",
      benefits: [
        "Bulk material transport",
        "Powder conveying",
        "Gentle handling",
      ],
    },
    {
      title: "Industrial Process",
      description:
        "Process gas handling and industrial applications requiring reliable air flow",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Process gas handling",
        "Continuous operation",
        "Low maintenance",
      ],
    },
    {
      title: "Aquaculture Systems",
      description: "Aeration for fish farming and aquaculture applications",
      icon: <FaSeedling />,
      image: "🐟",
      benefits: [
        "Fish pond aeration",
        "Oxygen enrichment",
        "Water circulation",
      ],
    },
    {
      title: "Chemical Processing",
      description:
        "Gas boosting and process applications in chemical industries",
      icon: <FaAtom />,
      image: "⚗️",
      benefits: [
        "Gas boosting",
        "Chemical compatibility",
        "Process reliability",
      ],
    },
    {
      title: "Power Generation",
      description:
        "Auxiliary systems for power plants and utility applications",
      icon: <FaBolt />,
      image: "⚡",
      benefits: [
        "Auxiliary air supply",
        "Cooling systems",
        "Reliable operation",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "80,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure Range",
      value: "Up to 0.6 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design Types",
      value: "Twin & Tri-Lobe",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Single Stage",
      icon: <FaSync />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Capacity",
      description:
        "Exceptional flow capacity up to 80,000 M³/Hr for large-scale industrial operations",
      icon: <FaChartLine />,
      stat: "80,000",
      unit: "M³/Hr",
    },
    {
      title: "Reliable Pressure",
      description:
        "Consistent pressure delivery up to 0.6 kg/cm² in single stage configuration",
      icon: <FaTachometerAlt />,
      stat: "0.6",
      unit: "kg/cm²",
    },
    {
      title: "Dual Design",
      description:
        "Available in both Twin-Lobe and Tri-Lobe designs for versatile applications",
      icon: <FaGears />,
      stat: "Twin/Tri",
      unit: "Lobe Design",
    },
    {
      title: "Energy Efficient",
      description:
        "Advanced rotor profile and precision engineering for optimal energy efficiency",
      icon: <FaBolt />,
      stat: "High",
      unit: "Efficiency",
    },
  ];

  const workingPrinciple = {
    title: "Twin-Lobe Working Principle",
    description:
      "The rotors move opposite to each other, maintaining fine clearances in perfect synchronization through precision timing gears. As rotation proceeds, trapped gas moves along until it reaches the discharge port, raising pressure against system resistance.",
    steps: [
      {
        step: "1",
        title: "Gas Intake",
        description: "Gas enters through the inlet as rotors create vacuum",
      },
      {
        step: "2",
        title: "Compression",
        description: "Rotors trap and compress gas with precise clearances",
      },
      {
        step: "3",
        title: "Discharge",
        description: "Compressed gas delivered smoothly with minimal pulsation",
      },
    ],
  };

  const productImageUrl = "/images/sR-Series-Blowers.jpg";

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
              <span>Next Generation Technology</span>
            </div>
            <h1 className="hero-title">
              Advanced
              <span className="gradient-text"> SR Series Blowers</span>
            </h1>
            <p className="hero-description">
              SWAM SR Series Blowers represent the next generation of positive
              displacement technology with advanced features for enhanced
              reliability, energy efficiency, and lower maintenance. Featuring
              computer-generated Axcel Series rotor profiles and precision CNC
              manufacturing for superior performance.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">80,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0.6</div>
                <div className="stat-label">kg/cm² Pressure</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Twin/Tri</div>
                <div className="stat-label">Lobe Design</div>
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
                alt="SR Series Blowers - Advanced Positive Displacement Technology"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaGears />
                  <span>Axcel Profile</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaCogs />
                  <span>CNC Precision</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaLock />
                  <span>Special Sealing</span>
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
            <h2>Next Generation Blower Technology</h2>
            <p>
              Discover the advanced engineering features that make SR Series
              Blowers the most reliable and efficient choice for demanding
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

      {/* Working Principle Section */}
      <section className="modern-technology-section">
        <div className="container">
          <div className="section-header">
            <h2>Working Principle & Technology</h2>
            <p>
              Understanding the twin-lobe technology that delivers smooth,
              non-pulsating flow with minimal internal slip losses
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaSync />
                  <span>Twin-Lobe Technology</span>
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
                  alt="SR Series Blower Working Principle"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">
                      Precision Timing Gears
                    </div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Twin-Lobe Rotors</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Fine Clearances</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="tech-details-grid">
              <div className="tech-detail-card primary">
                <div className="tech-icon-wrapper">
                  <FaEye />
                </div>
                <h4>Precise Clearances</h4>
                <p>
                  Rotors maintain fine clearances in perfect synchronization,
                  ensuring minimal internal slip loss and maximum efficiency
                </p>
                <div className="tech-specs">
                  <div className="spec-item">
                    <span className="spec-label">Clearance Control:</span>
                    <span className="spec-value">Precision Maintained</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Slip Loss:</span>
                    <span className="spec-value">Minimal</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaVolumeDown />
                </div>
                <h4>Smooth Operation</h4>
                <p>
                  Non-pulsating, smooth delivery with lower sound emission
                  through advanced rotor design and pulsation dampeners
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Non-pulsating flow</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Lower noise levels</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaWeight />
                </div>
                <h4>Heavy Duty Design</h4>
                <p>
                  Ruggedly built for working under tough conditions with
                  heavy-duty antifriction oil lubricated bearings
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Tough condition operation</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>High load transmission</span>
                  </div>
                </div>
              </div>

              <div className="tech-detail-card">
                <div className="tech-icon-wrapper">
                  <FaCogs />
                </div>
                <h4>CNC Precision Manufacturing</h4>
                <p>
                  High accuracy manufacturing on CNC machines with
                  computer-generated Axcel Series lobe profile for optimal
                  performance
                </p>
                <div className="tech-benefits">
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>CNC machine precision</span>
                  </div>
                  <div className="benefit-item">
                    <FaCheckCircle />
                    <span>Computer-generated profile</span>
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
                SR Series Blowers deliver exceptional performance with
                industry-leading specifications designed for reliability,
                efficiency, and long-term operation in demanding environments.
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
                <h4>Salient Features</h4>
                <div className="feature-list">
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>
                      Side suction or side discharge arrangement available
                    </span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>Inbuilt pulsation dampeners</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>Heavy duty shaft design</span>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle />
                    <span>Special lip seal sealing system</span>
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
                  alt="SR Series Blower Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Computer Generated Profile</div>
                  <div className="highlight">CNC Precision</div>
                  <div className="highlight">Heavy Duty Construction</div>
                  <div className="highlight">Special Sealing System</div>
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
              Versatile solutions for diverse industrial applications requiring
              reliable positive displacement technology
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
            <h2>Why Choose SWAM SR Series</h2>
            <p>Advanced technology for superior industrial performance</p>
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
            <h2>Ready for Next Generation Technology?</h2>
            <p>
              Connect with our engineering experts to discover how SR Series
              Blowers can enhance your industrial operations with superior
              reliability, efficiency, and performance.
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
                  alt="SR Series Blowers - Advanced Positive Displacement Technology - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>SR Series Blowers</h3>
                  <p>Next Generation Positive Displacement Technology</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 80,000 M³/Hr</span>
                    <span>Pressure: Up to 0.6 kg/cm²</span>
                    <span>Design: Twin & Tri-Lobe Available</span>
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

export default SRSeriesBlowers;
