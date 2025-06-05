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
  FaVolumeUp,
  FaBuilding,
  FaHardHat,
  FaCar,
  FaPlane,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "./AcousticEnclosuresSilencers.css";

const AcousticEnclosuresSilencers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaLayerGroup className="feature-icon" />,
      title: "Modular Structural Design",
      description:
        "Modular structural frames made out of steel plates & sheets with pre-fabricated sections for high performance acoustic panels",
      details:
        "Advanced modular construction allows for flexible installation and maintenance while ensuring optimal acoustic performance",
      benefit: "Flexible installation",
    },
    {
      icon: <FaVolumeDown className="feature-icon" />,
      title: "Custom Noise Level Design",
      description:
        "Enclosures designed acoustically and mechanically to achieve desired noise level specified by customer requirements",
      details:
        "Precision engineering ensures optimal noise reduction tailored to specific industrial applications and environments",
      benefit: "Targeted noise control",
    },
    {
      icon: <FaTools className="feature-icon" />,
      title: "Variable Panel Thickness",
      description:
        "Panel thickness engineered based on specific design requirements and noise reduction specifications",
      details:
        "Customizable panel thickness optimization ensures cost-effective solutions while meeting performance criteria",
      benefit: "Optimized performance",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "High Performance Materials",
      description:
        "Premium steel construction with specialized acoustic materials for maximum durability and noise reduction",
      details:
        "Industrial-grade materials ensure long-lasting performance in demanding environments with minimal maintenance",
      benefit: "Durable construction",
    },
  ];

  const applications = [
    {
      title: "Industrial Equipment",
      description:
        "Noise control solutions for compressors, blowers, generators, and heavy industrial machinery",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Compressor enclosures",
        "Blower silencing",
        "Generator noise control",
      ],
    },
    {
      title: "Power Generation",
      description:
        "Acoustic enclosures for power plants, turbines, and electrical equipment noise reduction",
      icon: <FaBolt />,
      image: "⚡",
      benefits: [
        "Turbine enclosures",
        "Transformer silencing",
        "Power plant noise control",
      ],
    },
    {
      title: "HVAC Systems",
      description:
        "Noise reduction solutions for air handling units, cooling towers, and ventilation systems",
      icon: <FaWind />,
      image: "🌬️",
      benefits: ["AHU enclosures", "Cooling tower silencers", "Duct silencing"],
    },
    {
      title: "Manufacturing Plants",
      description:
        "Comprehensive noise control for production facilities and manufacturing equipment",
      icon: <FaBuilding />,
      image: "🏢",
      benefits: [
        "Production line enclosures",
        "Equipment silencing",
        "Workplace noise control",
      ],
    },
    {
      title: "Automotive Industry",
      description:
        "Specialized acoustic solutions for automotive manufacturing and testing facilities",
      icon: <FaCar />,
      image: "🚗",
      benefits: [
        "Engine test cells",
        "Manufacturing noise control",
        "Quality testing enclosures",
      ],
    },
    {
      title: "Aerospace Applications",
      description:
        "Advanced noise control solutions for aerospace testing and manufacturing facilities",
      icon: <FaPlane />,
      image: "✈️",
      benefits: [
        "Engine testing enclosures",
        "Wind tunnel silencing",
        "Manufacturing noise control",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Noise Reduction",
      value: "Up to 40 dB",
      icon: <FaVolumeDown />,
      color: "#3b82f6",
    },
    {
      parameter: "Panel Thickness",
      value: "50-200 mm",
      icon: <FaLayerGroup />,
      color: "#10b981",
    },
    {
      parameter: "Material Grade",
      value: "Steel Plates & Sheets",
      icon: <FaShieldAlt />,
      color: "#f59e0b",
    },
    {
      parameter: "Design Type",
      value: "Modular Construction",
      icon: <FaCogs />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Effective Noise Reduction",
      description:
        "Achieves significant noise level reduction up to 40 dB with optimized acoustic panel design",
      icon: <FaVolumeDown />,
      stat: "40",
      unit: "dB Reduction",
    },
    {
      title: "Custom Engineering",
      description:
        "Tailored solutions designed to meet specific customer noise level requirements and specifications",
      icon: <FaTools />,
      stat: "Custom",
      unit: "Design",
    },
    {
      title: "Modular Construction",
      description:
        "Flexible modular design allows for easy installation, maintenance, and future modifications",
      icon: <FaLayerGroup />,
      stat: "Modular",
      unit: "System",
    },
    {
      title: "Industrial Grade",
      description:
        "Premium steel construction ensures durability and long-term performance in harsh environments",
      icon: <FaShieldAlt />,
      stat: "Industrial",
      unit: "Grade",
    },
  ];

  const systemComponents = [
    {
      component: "Structural Frame",
      description:
        "Modular steel frame providing structural support and stability",
      icon: <FaBuilding />,
    },
    {
      component: "Acoustic Panels",
      description:
        "High-performance acoustic panels with variable thickness design",
      icon: <FaLayerGroup />,
    },
    {
      component: "Steel Plates",
      description:
        "Premium grade steel plates for external enclosure construction",
      icon: <FaShieldAlt />,
    },
    {
      component: "Sound Absorbing Material",
      description:
        "Specialized acoustic materials for maximum noise absorption",
      icon: <FaVolumeDown />,
    },
    {
      component: "Ventilation System",
      description:
        "Integrated ventilation for equipment cooling and air circulation",
      icon: <FaWind />,
    },
    {
      component: "Access Panels",
      description:
        "Removable access panels for equipment maintenance and inspection",
      icon: <FaTools />,
    },
  ];

  const workingPrinciple = {
    title: "Acoustic Enclosure Technology",
    description:
      "Advanced acoustic enclosures utilizing modular structural frames with high-performance acoustic panels to achieve specified noise reduction levels through precision engineering and material selection.",
    steps: [
      {
        step: "1",
        title: "Sound Wave Interception",
        description:
          "Steel frame structure intercepts and contains sound waves generated by industrial equipment",
      },
      {
        step: "2",
        title: "Acoustic Panel Absorption",
        description:
          "High-performance acoustic panels absorb and dissipate sound energy through specialized materials",
      },
      {
        step: "3",
        title: "Noise Level Reduction",
        description:
          "Engineered design achieves specified noise reduction levels while maintaining equipment functionality",
      },
    ],
  };

  const productImageUrl = "/images/Enclosures-Silencers.jpg";

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
              <span>Custom Acoustic Solutions</span>
            </div>
            <h1 className="hero-title">
              Acoustic Enclosures
              <span className="gradient-text"> & Silencers</span>
            </h1>
            <p className="hero-description">
              SWAM's Acoustic Enclosures comprise modular structural frames made
              of steel plates & sheets with pre-fabricated sections for high
              performance acoustic panels. Designed acoustically and
              mechanically to achieve desired noise levels specified by
              customers with variable panel thickness based on design
              requirements.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">40 dB</div>
                <div className="stat-label">Noise Reduction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Custom</div>
                <div className="stat-label">Design</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Modular</div>
                <div className="stat-label">Construction</div>
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
                alt="Acoustic Enclosures & Silencers - Custom Noise Control Solutions"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaVolumeDown />
                  <span>Noise Control</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaLayerGroup />
                  <span>Modular Design</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaShieldAlt />
                  <span>Steel Construction</span>
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
            <h2>Advanced Acoustic Engineering Solutions</h2>
            <p>
              Discover our comprehensive acoustic enclosures and silencers that
              deliver effective noise control through modular construction,
              custom design engineering, and high-performance acoustic materials
              for industrial applications
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
            <h2>Acoustic Enclosure Components & Technology</h2>
            <p>
              Understanding the comprehensive acoustic enclosure system
              components that work together to deliver effective noise reduction
              and industrial noise control solutions
            </p>
          </div>

          <div className="technology-showcase">
            <div className="tech-overview">
              <div className="overview-content">
                <div className="tech-badge">
                  <FaVolumeDown />
                  <span>Advanced Noise Control</span>
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
                  alt="Acoustic Enclosures Components and Technology"
                  className="tech-main-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-annotations">
                  <div className="annotation ann-1">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Acoustic Panels</div>
                  </div>
                  <div className="annotation ann-2">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Steel Frame</div>
                  </div>
                  <div className="annotation ann-3">
                    <div className="annotation-dot"></div>
                    <div className="annotation-label">Ventilation System</div>
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
                Acoustic Enclosures & Silencers deliver exceptional noise
                reduction performance with proven specifications designed for
                demanding industrial applications requiring effective noise
                control and custom engineering solutions.
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
                <h4>Standard Enclosure Configuration</h4>
                <div className="spec-table">
                  <div className="spec-row">
                    <span className="spec-label">Noise Reduction:</span>
                    <span className="spec-value">Up to 40 dB</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Panel Thickness:</span>
                    <span className="spec-value">50-200 mm (customizable)</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Construction:</span>
                    <span className="spec-value">Steel Plates & Sheets</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Design Type:</span>
                    <span className="spec-value">Modular & Custom</span>
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
                  <span>Custom Engineering</span>
                </div>
                <div className="badge">
                  <FaShieldAlt />
                  <span>Industrial Grade</span>
                </div>
              </div>
            </div>

            <div className="specs-visual">
              <div className="product-display">
                <img
                  src={productImageUrl}
                  alt="Acoustic Enclosures & Silencers Technical Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Noise Control</div>
                  <div className="highlight">Modular Design</div>
                  <div className="highlight">Custom Engineering</div>
                  <div className="highlight">Steel Construction</div>
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
              Comprehensive acoustic enclosure solutions for diverse industrial
              applications requiring effective noise control and sound
              management across multiple sectors and environments
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
                <FaGasPump />
                <span>Pump Stations</span>
              </div>
              <div className="app-item">
                <FaBuilding />
                <span>Commercial Buildings</span>
              </div>
              <div className="app-item">
                <FaHardHat />
                <span>Construction Sites</span>
              </div>
              <div className="app-item">
                <FaWarehouse />
                <span>Industrial Facilities</span>
              </div>
              <div className="app-item">
                <FaRecycle />
                <span>Waste Management</span>
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
            <h2>Why Choose SWAM Acoustic Enclosures & Silencers</h2>
            <p>
              Advanced acoustic engineering solutions delivering effective noise
              control through custom design, modular construction, and
              industrial-grade materials for optimal performance
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
              Comprehensive features that make SWAM Acoustic Enclosures &
              Silencers the preferred choice for effective industrial noise
              control solutions
            </p>
          </div>

          <div className="features-highlight-grid">
            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaLayerGroup />
              </div>
              <h4>Modular Structural Frame</h4>
              <p>
                Advanced modular construction with steel plates & sheets for
                flexible installation and maintenance
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaVolumeDown />
              </div>
              <h4>High Performance Acoustic Panels</h4>
              <p>
                Pre-fabricated acoustic panels designed for maximum noise
                reduction and sound absorption
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaTools />
              </div>
              <h4>Custom Engineering Design</h4>
              <p>
                Acoustically and mechanically designed to achieve desired noise
                levels specified by customers
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h4>Variable Panel Thickness</h4>
              <p>
                Panel thickness optimized based on specific design requirements
                and performance criteria
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaWind />
              </div>
              <h4>Integrated Ventilation</h4>
              <p>
                Built-in ventilation systems for equipment cooling while
                maintaining acoustic performance
              </p>
            </div>

            <div className="feature-highlight-card">
              <div className="feature-icon">
                <FaWrench />
              </div>
              <h4>Easy Maintenance Access</h4>
              <p>
                Removable access panels allow for convenient equipment
                maintenance and inspection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Effective Noise Control Solutions?</h2>
            <p>
              Connect with our acoustic engineering experts to discover how our
              custom Acoustic Enclosures & Silencers can enhance your facility
              with effective noise reduction, modular design, and
              industrial-grade construction.
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
                  alt="Acoustic Enclosures & Silencers - Custom Noise Control Solutions - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Acoustic Enclosures & Silencers</h3>
                  <p>Custom Noise Control Solutions</p>
                  <div className="modal-specs">
                    <span>Noise Reduction: Up to 40 dB</span>
                    <span>Construction: Steel Modular</span>
                    <span>Design: Custom Engineering</span>
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

export default AcousticEnclosuresSilencers;
