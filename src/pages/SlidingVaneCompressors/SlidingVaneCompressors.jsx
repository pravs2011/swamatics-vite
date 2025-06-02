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
  FaAtom,
  FaFlask,
  FaFire,
  FaWind,
  FaOilCan,
  FaTruck,
  FaSnowflake,
  FaFilter,
  FaCube,
  FaCompress,
  FaEye,
} from "react-icons/fa";
import "./SlidingVaneCompressors.css";

const SlidingVaneCompressors = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaCogs className="feature-icon" />,
      title: "CNC Machine Manufacturing",
      description:
        "High precision manufacturing on CNC machines ensures very high accuracies",
      details:
        "State-of-the-art CNC machining technology delivers exceptional precision and reliability for demanding applications",
      benefit: "High precision accuracy",
    },
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Energy Efficient Design",
      description:
        "Most advance and energy efficient sliding vane compressors for bio gas applications",
      details:
        "Optimized design reduces energy consumption while maintaining superior performance for bio gas and landfill gas applications",
      benefit: "Energy efficient operation",
    },
    {
      icon: <FaCompress className="feature-icon" />,
      title: "High Pressure Capability",
      description:
        "Develops pressure up to 3.5 bar for various industrial applications",
      details:
        "Robust design capable of handling high pressure requirements up to 3.5 bar gauge for demanding industrial processes",
      benefit: "Up to 3.5 bar pressure",
    },
    {
      icon: <FaCube className="feature-icon" />,
      title: "Variable Volume Chambers",
      description:
        "Individual cells with reducing volumes create efficient compression",
      details:
        "Sliding vanes create individual compression chambers with reducing volumes during rotation from suction to discharge",
      benefit: "Efficient compression cycle",
    },
  ];

  const workingPrinciple = {
    title: "Working Principle",
    description: "Advanced sliding vane compression technology",
    steps: [
      {
        step: "1",
        title: "Eccentric Rotation",
        description:
          "A cylindrical rotor turns eccentrically in cylindrical stator of larger diameter",
        icon: <FaCogs />,
      },
      {
        step: "2",
        title: "Half Moon Chamber",
        description:
          "The free space left between stator and rotor is half moon shaped",
        icon: <FaCube />,
      },
      {
        step: "3",
        title: "Sliding Vanes",
        description:
          "Stratified plastic blades slide freely in slots milled in the rotor",
        icon: <FaEye />,
      },
      {
        step: "4",
        title: "Compression Chambers",
        description:
          "Centrifugal force pushes vanes against casing, creating individual cells with reducing volumes",
        icon: <FaCompress />,
      },
    ],
  };

  const applications = [
    {
      title: "Steel Plant Mix Gas Boosters",
      description: "Boosting mixed gases in steel manufacturing processes",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Reliable gas boosting",
        "Industrial grade performance",
        "Continuous operation",
      ],
    },
    {
      title: "Cement Plant Landfill Gas",
      description: "Handling landfill gases for cement production applications",
      icon: <FaRecycle />,
      image: "🏗️",
      benefits: [
        "Landfill gas utilization",
        "Environmental compliance",
        "Energy recovery",
      ],
    },
    {
      title: "Water Treatment Plant Bio Gas",
      description: "Bio gas compression for water treatment facilities",
      icon: <FaLeaf />,
      image: "💧",
      benefits: [
        "Bio gas handling",
        "Treatment efficiency",
        "Clean energy utilization",
      ],
    },
    {
      title: "Biogas Applications",
      description: "Specialized compression for biogas and renewable energy",
      icon: <FaLeaf />,
      image: "🌱",
      benefits: [
        "Renewable energy support",
        "Environmental friendly",
        "Sustainable operation",
      ],
    },
    {
      title: "Landfill Gas Systems",
      description: "Efficient handling of landfill gases for energy recovery",
      icon: <FaRecycle />,
      image: "♻️",
      benefits: ["Gas recovery", "Emission control", "Energy generation"],
    },
    {
      title: "Industrial Gas Boosting",
      description: "General industrial applications requiring gas compression",
      icon: <FaCogs />,
      image: "⚙️",
      benefits: [
        "Versatile applications",
        "Reliable performance",
        "Industrial durability",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 5100 M³/Hr (3000 CFM)",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Up to 3.5 bar gauge",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Manufacturing",
      value: "CNC Machine Precision",
      icon: <FaCogs />,
      color: "#f59e0b",
    },
    {
      parameter: "Applications",
      value: "Bio Gas & Landfill Gas",
      icon: <FaLeaf />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "CNC Precision",
      description:
        "Manufactured on CNC machines for high accuracy and reliability",
      icon: <FaCogs />,
      stat: "CNC",
      unit: "Precision",
    },
    {
      title: "Energy Efficient",
      description:
        "Advanced design for maximum energy efficiency in bio gas applications",
      icon: <FaLeaf />,
      stat: "Energy",
      unit: "Efficient",
    },
    {
      title: "High Pressure",
      description:
        "Capable of developing pressure up to 3.5 bar for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "3.5",
      unit: "Bar",
    },
    {
      title: "High Capacity",
      description:
        "Available for flows up to 3000 CFM for large scale operations",
      icon: <FaChartLine />,
      stat: "5100",
      unit: "M³/Hr",
    },
  ];

  // Using the specified image path
  const productImageUrl = "images/rotary-Sliding-Vane-Compressors.jpg";

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
              <FaCompress className="badge-icon" />
              <span>Compression Technology</span>
            </div>
            <h1 className="hero-title">
              Rotary Sliding
              <span className="gradient-text"> Vane Compressors</span>
            </h1>
            <p className="hero-description">
              SWAM offers most advance and energy efficient sliding vane
              compressors for bio gas landfill gases with pressure up to 3.5 bar
              and manufactured on CNC Machine. The Sliding vane compressor have
              very high accuracies and are available for flows up to 3000 CFM
              (5100 M³/Hr).
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">5100</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3.5</div>
                <div className="stat-label">Bar Pressure</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">CNC</div>
                <div className="stat-label">Precision Manufacturing</div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn-primary">
                <FaDownload />
                <span>Download Sliding Vane Brochure</span>
              </button>
              <button className="btn-secondary">
                <FaPlay />
                <span>Technical Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="hero-visual">
            <div className="product-showcase">
              <div className="showcase-bg"></div>
              <img
                src={productImageUrl}
                alt="Rotary Sliding Vane Compressors"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaCogs />
                  <span>CNC Precision</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaLeaf />
                  <span>Bio Gas Ready</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaCompress />
                  <span>3.5 Bar Pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Principle Section */}
      <section className="gas-types-section">
        <div className="container">
          <div className="section-header">
            <h2>{workingPrinciple.title}</h2>
            <p>{workingPrinciple.description}</p>
          </div>

          <div className="gas-grid">
            {workingPrinciple.steps.map((step, index) => (
              <div
                key={index}
                className="gas-card"
                style={{ "--accent-color": `hsl(${index * 90}, 70%, 50%)` }}
              >
                <div className="gas-icon">{step.icon}</div>
                <div className="gas-info">
                  <h3>Step {step.step}</h3>
                  <div className="gas-symbol">{step.title}</div>
                  <div className="gas-applications">
                    <span className="application-tag">{step.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="modern-features-section">
        <div className="container">
          <div className="section-header">
            <h2>Advanced Technology Features</h2>
            <p>High precision sliding vane technology with CNC manufacturing</p>
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

      {/* Specifications Section */}
      <section className="modern-specs-section">
        <div className="container">
          <div className="specs-content">
            <div className="specs-info">
              <h2>Technical Specifications</h2>
              <p>
                Our rotary sliding vane compressors are engineered for bio gas
                and landfill gas applications, delivering reliable performance
                with CNC precision manufacturing and energy efficient operation.
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

              <div className="quality-badges">
                <div className="badge">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="badge">
                  <FaCogs />
                  <span>CNC Precision</span>
                </div>
                <div className="badge">
                  <FaShieldAlt />
                  <span>Reliable Performance</span>
                </div>
              </div>
            </div>

            <div className="specs-visual">
              <div className="product-display">
                <img
                  src={productImageUrl}
                  alt="Sliding Vane Compressor Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">CNC Machine Manufacturing</div>
                  <div className="highlight">Energy Efficient Design</div>
                  <div className="highlight">Up to 3.5 Bar Pressure</div>
                  <div className="highlight">Bio Gas Compatible</div>
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
              Specialized for bio gas, landfill gas, and industrial gas boosting
              applications
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
            <h2>Why Choose SWAM Sliding Vane Compressors</h2>
            <p>
              CNC precision manufacturing with energy efficient design for bio
              gas applications
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
            <h2>Need a Custom Sliding Vane Compressor?</h2>
            <p>
              Our technical experts will help you select the right sliding vane
              compressor for your specific bio gas, landfill gas, or industrial
              gas boosting application requirements.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <FaPhone />
                <span>Get Technical Consultation</span>
              </button>
              <button className="cta-secondary">
                <FaDownload />
                <span>Download Sliding Vane Brochure</span>
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
                <span>C-2, Sector-3, Noida-201301, India</span>
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
                  alt="Rotary Sliding Vane Compressors - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Rotary Sliding Vane Compressors</h3>
                  <p>CNC Precision Compression Technology</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 5100 M³/Hr (3000 CFM)</span>
                    <span>Pressure: Up to 3.5 bar gauge</span>
                    <span>Manufacturing: CNC Machine Precision</span>
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

export default SlidingVaneCompressors;
