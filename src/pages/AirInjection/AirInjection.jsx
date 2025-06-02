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
} from "react-icons/fa";
import "./AirInjection.css";

const AirInjection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaSnowflake className="feature-icon" />,
      title: "Completely Dry Operation",
      description:
        "Oil-free operation ensuring clean and contamination-free air handling",
      details:
        "No oil or liquid contact with the air stream, making it ideal for applications requiring clean air or gas handling",
      benefit: "100% dry operation",
    },
    {
      icon: <FaFilter className="feature-icon" />,
      title: "Secondary Suction Cooling",
      description:
        "Advanced secondary suction system for enhanced cooling performance",
      details:
        "MHV series with secondary cooling develops vacuum up to 8000 mmwg with superior thermal management",
      benefit: "Enhanced cooling efficiency",
    },
    {
      icon: <FaTachometerAlt className="feature-icon" />,
      title: "High Vacuum Performance",
      description:
        "Develops medium to high vacuum levels for demanding applications",
      details:
        "Achieves vacuum levels up to 8000 mmwg (85%) ideal for degassing, exhausting and pneumatic conveying",
      benefit: "Superior vacuum performance",
    },
    {
      icon: <FaTruck className="feature-icon" />,
      title: "Dual Application Design",
      description:
        "Versatile design suitable for both vacuum and truck blower applications",
      details:
        "Can be configured for stationary vacuum applications or mobile truck-mounted blower systems",
      benefit: "Multi-purpose versatility",
    },
  ];

  const seriesTypes = [
    {
      name: "MH.V Series",
      description: "Medium vacuum pumps with secondary suction",
      icon: <FaFilter />,
      color: "#3b82f6",
      specifications: [
        "Up to 38,000 M³/Hr",
        "Up to 85% Vacuum",
        "Dry Operation",
      ],
    },
    {
      name: "KH.V Series",
      description: "High-performance vacuum pumps",
      icon: <FaRocket />,
      color: "#10b981",
      specifications: [
        "Enhanced Performance",
        "Robust Design",
        "Industrial Grade",
      ],
    },
    {
      name: "MHV Series",
      description: "Secondary cooling vacuum pumps",
      icon: <FaSnowflake />,
      color: "#f59e0b",
      specifications: [
        "Up to 8000 mmwg",
        "Secondary Cooling",
        "Temperature Control",
      ],
    },
  ];

  const applications = [
    {
      title: "Degassing Applications",
      description: "Removal of dissolved gases from liquids and materials",
      icon: <FaFlask />,
      image: "🧪",
      benefits: [
        "Efficient gas removal",
        "Process optimization",
        "Quality improvement",
      ],
    },
    {
      title: "Pneumatic Conveying",
      description: "Material handling through pneumatic transport systems",
      icon: <FaWind />,
      image: "📦",
      benefits: [
        "Reliable material transport",
        "Dust-free handling",
        "Automated systems",
      ],
    },
    {
      title: "Exhausting Systems",
      description: "Industrial exhaust and ventilation applications",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Effective air removal",
        "Environmental control",
        "Safety compliance",
      ],
    },
    {
      title: "Truck Blower Systems",
      description: "Mobile blower applications for truck-mounted systems",
      icon: <FaTruck />,
      image: "🚛",
      benefits: [
        "Mobile operation",
        "Versatile deployment",
        "Field applications",
      ],
    },
    {
      title: "Process Vacuum",
      description: "Medium vacuum requirements in industrial processes",
      icon: <FaCogs />,
      image: "⚙️",
      benefits: [
        "Process enhancement",
        "Consistent vacuum levels",
        "Reliable operation",
      ],
    },
    {
      title: "Environmental Control",
      description: "Air and gas handling for environmental applications",
      icon: <FaLeaf />,
      image: "🌱",
      benefits: ["Clean operation", "Environmental safety", "Emission control"],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 38,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 85% (8000 mmwg)",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Operation Type",
      value: "Completely Dry",
      icon: <FaSnowflake />,
      color: "#f59e0b",
    },
    {
      parameter: "Cooling System",
      value: "Secondary Suction",
      icon: <FaFilter />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Proven Technology",
      description: "Decades of experience in vacuum pump manufacturing",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "Dry Operation",
      description: "Completely oil-free and dry vacuum generation",
      icon: <FaSnowflake />,
      stat: "100%",
      unit: "Oil-Free",
    },
    {
      title: "High Vacuum",
      description:
        "Superior vacuum levels up to 85% for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "8000",
      unit: "mmwg",
    },
    {
      title: "Versatile Design",
      description: "Dual-purpose design for vacuum and blower applications",
      icon: <FaCogs />,
      stat: "2-in-1",
      unit: "Design",
    },
  ];

  // Using the specified image path
  const productImageUrl = "images/vacuum-Pump-with-Secondary.jpg";

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
              <FaFilter className="badge-icon" />
              <span>Vacuum Technology</span>
            </div>
            <h1 className="hero-title">
              Vacuum Pumps With
              <span className="gradient-text"> Secondary Suction</span>
            </h1>
            <p className="hero-description">
              Advanced vacuum pumps designed for negative suction applications
              requiring medium vacuums such as degassing, exhausting, and
              pneumatic conveying. MHV series with secondary cooling develops
              vacuum up to 8000 mmwg with completely dry operation.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">38,000</div>
                <div className="stat-label">M³/Hr Capacity</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">85%</div>
                <div className="stat-label">Vacuum Level</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dry Operation</div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn-primary">
                <FaDownload />
                <span>Download Brochure</span>
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
                alt="Vacuum Pump with Secondary Suction"
                className="hero-product-image clickable-image"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="floating-specs">
                <div className="spec-bubble spec-1">
                  <FaSnowflake />
                  <span>Dry Operation</span>
                </div>
                <div className="spec-bubble spec-2">
                  <FaFilter />
                  <span>Secondary Cooling</span>
                </div>
                <div className="spec-bubble spec-3">
                  <FaTruck />
                  <span>Dual Purpose</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series Types Section */}
      <section className="gas-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Product Series</h2>
            <p>
              Multiple series designed for different vacuum requirements and
              applications
            </p>
          </div>

          <div className="gas-grid">
            {seriesTypes.map((series, index) => (
              <div
                key={index}
                className="gas-card"
                style={{ "--accent-color": series.color }}
              >
                <div className="gas-icon">{series.icon}</div>
                <div className="gas-info">
                  <h3>{series.name}</h3>
                  <div className="gas-symbol">{series.description}</div>
                  <div className="gas-applications">
                    {series.specifications.map((spec, idx) => (
                      <span key={idx} className="application-tag">
                        {spec}
                      </span>
                    ))}
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
            <p>Specialized design elements for superior vacuum performance</p>
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
                Our vacuum pumps with secondary suction are engineered for
                demanding applications requiring medium to high vacuum levels,
                delivering reliable performance with completely dry operation.
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
                  <FaSnowflake />
                  <span>Dry Operation</span>
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
                  alt="Vacuum Pump Specifications"
                  className="specs-image clickable-image"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="tech-highlights">
                  <div className="highlight">Secondary Suction Cooling</div>
                  <div className="highlight">Completely Dry Operation</div>
                  <div className="highlight">Up to 8000 mmwg Vacuum</div>
                  <div className="highlight">Truck Blower Compatible</div>
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
              Ideal for processes requiring medium vacuums and clean operation
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
            <h2>Why Choose SWAM Vacuum Pumps</h2>
            <p>
              Superior vacuum technology with dry operation and versatile design
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
            <h2>Need a Custom Vacuum Solution?</h2>
            <p>
              Our technical experts will help you select the right vacuum pump
              with secondary suction for your specific application requirements
              including degassing, exhausting, and pneumatic conveying.
            </p>

            <div className="cta-actions">
              <button className="cta-primary">
                <FaPhone />
                <span>Get Technical Consultation</span>
              </button>
              <button className="cta-secondary">
                <FaDownload />
                <span>Download Vacuum Pump Brochure</span>
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
                  alt="Vacuum Pump with Secondary Suction - Expanded View"
                  className="modal-image"
                />
                <div className="modal-image-info">
                  <h3>Vacuum Pump with Secondary Suction</h3>
                  <p>Advanced Vacuum Generation System</p>
                  <div className="modal-specs">
                    <span>Capacity: Up to 38,000 M³/Hr</span>
                    <span>Vacuum: Up to 85% (8000 mmwg)</span>
                    <span>Operation: Completely Dry & Continuous</span>
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

export default AirInjection;
