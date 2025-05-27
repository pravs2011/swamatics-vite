import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaCheckCircle,
  FaCertificate,
  FaCogs,
  FaIndustry,
  FaClipboardCheck,
  FaAward,
  FaTools,
  FaShieldAlt,
  FaChartLine,
  FaMicroscope,
  FaFlask,
  FaUserTie,
} from "react-icons/fa";
import "./QualityTesting.css";

const QualityTesting = () => {
  const [activeTestingStep, setActiveTestingStep] = useState(0);

  const qualityFeatures = [
    {
      icon: <FaIndustry className="feature-icon" />,
      title: "1000KW Testing Facility",
      description:
        "Only blower company globally with in-house testing facility up to 1000KW 6.6KV HV testing",
    },
    {
      icon: <FaCertificate className="feature-icon" />,
      title: "International Standards",
      description:
        "All testing done as per International Standards BS1571(Part II)",
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: "Multiple Voltage Range",
      description:
        "Test motors with voltage range of 415V, 690V, 3300V & 6600V",
    },
    {
      icon: <FaClipboardCheck className="feature-icon" />,
      title: "Rigorous Testing",
      description:
        "Every product passes through vigorous performance testing before dispatch",
    },
  ];

  const testingProcess = [
    {
      step: "01",
      title: "Raw Material Inspection",
      description:
        "All raw materials and castings are thoroughly checked upon delivery with defects quarantined and returned to suppliers.",
      details:
        "Comprehensive quality checks ensure only premium materials enter our production line.",
    },
    {
      step: "02",
      title: "CNC Machining",
      description:
        "All final machining completed on CNC Machines to maintain consistency and precision.",
      details:
        "State-of-the-art CNC technology ensures dimensional accuracy and surface finish quality.",
    },
    {
      step: "03",
      title: "Stage Inspection",
      description:
        "Fixed stage measuring and testing stations ensure only tested and cleared products move to next stage.",
      details:
        "Multi-point inspection checkpoints throughout the manufacturing process.",
    },
    {
      step: "04",
      title: "Hot Run Testing",
      description:
        "Every finished product undergoes 4-6 hours continuous hot run testing as per client specifications.",
      details:
        "Comprehensive performance validation under actual operating conditions.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001:2007 Occupational Health & Safety",
    "CE Marking Compliance",
    "API Standards Certification",
    "ASME Boiler & Pressure Vessel Code",
  ];

  const testingCapabilities = [
    {
      parameter: "Pumping Capacity",
      description: "Comprehensive flow rate and capacity testing",
      icon: <FaChartLine />,
    },
    {
      parameter: "Temperature Rise",
      description: "Thermal performance and heat dissipation analysis",
      icon: <FaFlask />,
    },
    {
      parameter: "Vibration Analysis",
      description: "Dynamic balancing and vibration monitoring",
      icon: <FaCogs />,
    },
    {
      parameter: "Noise Level Testing",
      description: "Acoustic performance measurement and compliance",
      icon: <FaMicroscope />,
    },
    {
      parameter: "Mechanical Run Test",
      description: "Continuous operation testing for 2-3 hours minimum",
      icon: <FaTools />,
    },
    {
      parameter: "Performance Verification",
      description: "Complete performance parameter validation",
      icon: <FaCheckCircle />,
    },
  ];

  const qualityStats = [
    { value: "1000KW", label: "Maximum Motor Size" },
    { value: "4-6hrs", label: "Continuous Testing" },
    { value: "6.6KV", label: "High Voltage Testing" },
    { value: "100%", label: "Product Testing" },
  ];

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="quality-hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div
          className="quality-hero-container"
          style={{ borderRadius: "1rem", marginTop: "5rem" }}
        >
          <div className="hero-content">
            <div className="hero-badge" style={{ marginTop: "1rem" }}>
              Quality Excellence
            </div>
            <h1>Quality & Testing Compliance</h1>
            <p className="hero-subtitle">
              World-class testing facilities and rigorous quality control
              processes ensuring the highest standards of performance and
              reliability in every product we deliver.
            </p>
            <div className="hero-highlights" style={{ marginBottom: "1rem" }}>
              <div className="highlight-item">
                <FaShieldAlt />
                <span>ISO Certified</span>
              </div>
              <div className="highlight-item">
                <FaAward />
                <span>International Standards</span>
              </div>
              <div className="highlight-item">
                <FaIndustry />
                <span>1000KW Testing Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features Section */}
      <section className="quality-features-section">
        <div className="quality-features-container">
          <div className="section-header">
            <h2>Our Quality Advantage</h2>
            <p>
              SWAM is the only blower company globally with comprehensive
              in-house testing facilities, ensuring unmatched quality and
              performance standards.
            </p>
          </div>

          <div className="features-grid">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className="testing-process-section">
        <div className="testing-process-container">
          <div className="section-header">
            <h2>Our Testing Process</h2>
            <p>
              A systematic approach to quality assurance with multiple
              checkpoints ensuring every product meets our exacting standards.
            </p>
          </div>

          <div className="process-grid">
            {testingProcess.map((process, index) => (
              <div
                key={index}
                className={`process-card ${
                  activeTestingStep === index ? "active" : ""
                }`}
                onClick={() => setActiveTestingStep(index)}
              >
                <div className="process-step">{process.step}</div>
                <div className="process-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                  {activeTestingStep === index && (
                    <div className="process-details">
                      <span>{process.details}</span>
                    </div>
                  )}
                </div>
                {index < testingProcess.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Capabilities Section */}
      <section className="testing-capabilities-section">
        <div className="testing-capabilities-container">
          <div className="capabilities-grid">
            <div className="capabilities-content">
              <h2>Comprehensive Testing Parameters</h2>
              <p className="capabilities-description">
                Our state-of-the-art testing facility evaluates every critical
                parameter to ensure optimal performance and reliability. Each
                machine undergoes continuous testing for 2-3 hours minimum at
                different set points.
              </p>

              <div className="capabilities-list">
                {testingCapabilities.map((capability, index) => (
                  <div key={index} className="capability-item">
                    <div className="capability-icon">{capability.icon}</div>
                    <div className="capability-content">
                      <h4>{capability.parameter}</h4>
                      <p>{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testing-station-card">
              <div className="station-header">
                <FaIndustry className="station-icon" />
                <h3>Hot Run Testing Station</h3>
                <p>Every finished product undergoes rigorous testing</p>
              </div>

              <div className="stats-grid">
                {qualityStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="certifications-container">
          <div className="section-header">
            <h2>Certifications & Standards</h2>
            <p>
              Our commitment to quality is validated by international
              certifications and adherence to global standards.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <FaCertificate className="cert-icon" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Philosophy Section */}
      <section className="quality-philosophy-section">
        <div className="quality-philosophy-container">
          <div className="philosophy-content">
            <h2>Our Quality Philosophy</h2>
            <div className="philosophy-text">
              <p className="opening-quote">
                "Many years ago, Quality Control was something like 'Measure
                twice and cut once.' Today it is far more sophisticated, with
                automated machinery and 100% repeatability."
              </p>
              <p>
                Emphasis on quality and performance is a commitment of every
                individual at SWAM, beginning at the grass root level. Quality
                control is practiced at all levels of the organization and
                thoroughly complied with specified structured standards until
                the product is delivered.
              </p>
              <p className="closing-quote">
                "Our focus is growth through Integrity, High Quality,
                Reliability, and Innovation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Team Section */}
      <section className="quality-team-section">
        <div className="quality-team-container">
          <div className="team-grid">
            <div className="team-content">
              <h2>Dedicated Quality Team</h2>
              <p>
                Our quality assurance is backed by a team of over 18 quality
                control engineers who ensure detailed in-process inspection at
                various stages of manufacturing.
              </p>

              <div className="team-features">
                <div className="team-feature">
                  <FaUserTie className="team-icon" />
                  <div>
                    <h4>Expert Engineers</h4>
                    <p>
                      18+ qualified quality control engineers overseeing every
                      process
                    </p>
                  </div>
                </div>
                <div className="team-feature">
                  <FaMicroscope className="team-icon" />
                  <div>
                    <h4>Detailed Inspection</h4>
                    <p>
                      Multi-stage inspection process ensuring highest quality
                      standards
                    </p>
                  </div>
                </div>
                <div className="team-feature">
                  <FaFlask className="team-icon" />
                  <div>
                    <h4>Advanced Testing</h4>
                    <p>State-of-the-art testing equipment and methodologies</p>
                  </div>
                </div>
                <div className="team-feature">
                  <FaChartLine className="team-icon" />
                  <div>
                    <h4>Continuous Improvement</h4>
                    <p>
                      Regular process optimization and quality enhancement
                      initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="witnessing-card">
              <FaTools className="witnessing-icon" />
              <h3>Third-Party Witnessing</h3>
              <p>
                Our testing processes can be witnessed by third-party
                inspectors, providing additional validation and transparency.
              </p>
              <div className="certificate-badge">
                <div className="badge-title">Test Certificate</div>
                <div className="badge-subtitle">Issued for every product</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="quality-cta-section">
        <div className="quality-cta-container">
          <div className="cta-content">
            <h2>Experience Uncompromising Quality</h2>
            <p>
              Partner with us for products that meet the highest international
              standards and undergo the most rigorous testing processes in the
              industry.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <span>Download Quality Brochure</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="cta-secondary">
                <span>Schedule Factory Visit</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 9L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9L9 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default QualityTesting;
