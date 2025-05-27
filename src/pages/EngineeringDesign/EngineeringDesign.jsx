import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaCogs,
  FaIndustry,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaShieldAlt,
  FaTools,
  FaChartLine,
  FaClipboardCheck,
  FaHandshake,
  FaRocket,
  FaAward,
  FaUserTie,
  FaFlask,
  FaMicroscope,
  FaWrench,
  FaHardHat,
  FaLeaf,
} from "react-icons/fa";
import "./EngineeringDesign.css";

const EngineeringDesign = () => {
  const [activeServiceStep, setActiveServiceStep] = useState(0);

  const engineeringCapabilities = [
    {
      icon: <FaCogs className="capability-icon" />,
      title: "Complete Turn Key Service",
      description:
        "From concept to commissioning - we handle every aspect of your project with precision and expertise",
    },
    {
      icon: <FaUsers className="capability-icon" />,
      title: "Expert Engineering Team",
      description:
        "Fully qualified mechanical, process, electrical, and instrumentation engineers at your service",
    },
    {
      icon: <FaGlobe className="capability-icon" />,
      title: "International Standards",
      description:
        "Conversant with ISO, BSi, API, CE, Ex and Mining standards ensuring global compliance",
    },
    {
      icon: <FaLightbulb className="capability-icon" />,
      title: "Innovation & Adaptability",
      description:
        "Highly adaptable solutions with focus on materials compatibility and environmental suitability",
    },
  ];

  const serviceProcess = [
    {
      step: "01",
      title: "Concept & Consultation",
      description:
        "We listen to your requirements and work collaboratively to develop the optimal solution for your specific needs.",
      details:
        "Initial consultation, requirement analysis, and feasibility studies to ensure project success.",
      icon: <FaLightbulb />,
    },
    {
      step: "02",
      title: "Engineering & Design",
      description:
        "Our expert team creates detailed engineering designs incorporating all safety and performance criteria.",
      details:
        "Complete engineering drawings, specifications, and technical documentation for your project.",
      icon: <FaCogs />,
    },
    {
      step: "03",
      title: "Manufacturing",
      description:
        "State-of-the-art manufacturing facilities ensure precision production with quality at every step.",
      details:
        "Advanced manufacturing processes with continuous quality monitoring and testing.",
      icon: <FaIndustry />,
    },
    {
      step: "04",
      title: "Testing & Commissioning",
      description:
        "Comprehensive testing followed by professional installation and commissioning at your facility.",
      details:
        "Complete performance validation, installation support, and system commissioning.",
      icon: <FaClipboardCheck />,
    },
  ];

  const engineeringExpertise = [
    {
      area: "Mechanical Engineering",
      description: "Advanced mechanical design and analysis capabilities",
      icon: <FaWrench />,
      specialties: [
        "Structural Analysis",
        "Thermal Design",
        "Vibration Analysis",
        "Material Selection",
      ],
    },
    {
      area: "Process Engineering",
      description: "Specialized in hazardous chemicals and gases handling",
      icon: <FaFlask />,
      specialties: [
        "Process Optimization",
        "Safety Systems",
        "Chemical Compatibility",
        "Gas Handling",
      ],
    },
    {
      area: "Electrical Systems",
      description: "Complete electrical design and control systems",
      icon: <FaChartLine />,
      specialties: [
        "Motor Control",
        "Power Systems",
        "Safety Circuits",
        "Automation",
      ],
    },
    {
      area: "Instrumentation & Control",
      description: "Advanced control and monitoring systems",
      icon: <FaMicroscope />,
      specialties: [
        "SCADA Systems",
        "PLC Programming",
        "Sensor Integration",
        "Data Monitoring",
      ],
    },
  ];

  const designPrinciples = [
    {
      principle: "Safety First",
      description:
        "Health and safety criteria integrated into every business decision",
      icon: <FaShieldAlt />,
    },
    {
      principle: "Operational Excellence",
      description:
        "Safe and healthy workplace through operational procedures and systems",
      icon: <FaHardHat />,
    },
    {
      principle: "Environmental Responsibility",
      description: "Sustainable solutions considering environmental impact",
      icon: <FaLeaf />,
    },
    {
      principle: "Long-term Performance",
      description: "Systems designed to perform efficiently for many years",
      icon: <FaRocket />,
    },
  ];

  const projectStats = [
    { value: "500+", label: "Projects Completed" },
    { value: "25+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "100%", label: "Customer Satisfaction" },
  ];

  const internationalStandards = [
    "ISO 9001:2015 Quality Management",
    "BSi British Standards",
    "API American Petroleum Institute",
    "CE European Conformity",
    "Ex Explosion Protection",
    "Mining Industry Standards",
  ];

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="engineering-hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div
          className="engineering-hero-container"
          style={{ borderRadius: "1rem", marginTop: "5rem" }}
        >
          <div className="hero-content">
            <div className="hero-badge" style={{ marginTop: "1rem" }}>
              Engineering Excellence
            </div>
            <h1>Engineering & Design Solutions</h1>
            <p className="hero-subtitle">
              Complete Turn Key service from concept, engineering and design,
              all the way to manufacturing, testing, installation and
              commissioning of various blower and vacuum applications.
            </p>
            <div className="hero-highlights" style={{ marginBottom: "1rem" }}>
              <div className="highlight-item">
                <FaCogs />
                <span>Turn Key Solutions</span>
              </div>
              <div className="highlight-item">
                <FaUsers />
                <span>Expert Team</span>
              </div>
              <div className="highlight-item">
                <FaGlobe />
                <span>Global Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities Section */}
      <section className="engineering-capabilities-section">
        <div className="engineering-capabilities-container">
          <div className="section-header">
            <h2>Our Engineering Capabilities</h2>
            <p>
              SWAM offers comprehensive engineering solutions with a team of
              fully qualified professionals ready to tackle projects of any size
              and complexity.
            </p>
          </div>

          <div className="capabilities-grid">
            {engineeringCapabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <div className="capability-icon-container">
                  {capability.icon}
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="service-process-section">
        <div className="service-process-container">
          <div className="section-header">
            <h2>Our Service Process</h2>
            <p>
              A systematic approach from initial concept to final commissioning,
              ensuring every project meets the highest standards of quality and
              performance.
            </p>
          </div>

          <div className="process-grid">
            {serviceProcess.map((process, index) => (
              <div
                key={index}
                className={`process-card ${
                  activeServiceStep === index ? "active" : ""
                }`}
                onClick={() => setActiveServiceStep(index)}
              >
                <div className="process-icon-container">{process.icon}</div>
                <div className="process-step">{process.step}</div>
                <div className="process-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                  {activeServiceStep === index && (
                    <div className="process-details">
                      <span>{process.details}</span>
                    </div>
                  )}
                </div>
                {index < serviceProcess.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Expertise Section */}
      <section className="engineering-expertise-section">
        <div className="engineering-expertise-container">
          <div className="section-header">
            <h2>Engineering Expertise</h2>
            <p>
              Our multidisciplinary team brings together expertise across all
              engineering domains to deliver comprehensive solutions for complex
              industrial applications.
            </p>
          </div>

          <div className="expertise-grid">
            {engineeringExpertise.map((expertise, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-header">
                  <div className="expertise-icon">{expertise.icon}</div>
                  <div>
                    <h3>{expertise.area}</h3>
                    <p>{expertise.description}</p>
                  </div>
                </div>
                <div className="expertise-specialties">
                  {expertise.specialties.map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="design-principles-section">
        <div className="design-principles-container">
          <div className="principles-content">
            <div className="section-header-enhanced">
              <div className="section-badge">
                <FaShieldAlt />
                <span>Our Foundation</span>
              </div>
              <h2>Design Principles That Drive Excellence</h2>
              <p className="principles-description">
                We incorporate appropriate health criteria and safety factors
                into every business decision, ensuring the selection and
                placement of personnel at appropriate levels with clear
                responsibilities.
              </p>
            </div>

            <div className="principles-grid-enhanced">
              {designPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="principle-card-enhanced"
                  data-index={index}
                >
                  <div className="principle-icon-wrapper">
                    <div className="principle-icon-bg"></div>
                    <div className="principle-icon">{principle.icon}</div>
                  </div>
                  <div className="principle-content">
                    <h4>{principle.principle}</h4>
                    <p>{principle.description}</p>
                  </div>
                  <div className="principle-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="stats-card-enhanced">
            <div className="stats-background-pattern"></div>
            <div className="stats-header">
              <div className="stats-icon-container">
                <FaAward className="stats-icon" />
              </div>
              <h3>Project Success Metrics</h3>
              <p>Delivering excellence across all project dimensions</p>
            </div>

            <div className="stats-grid-enhanced">
              {projectStats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item-enhanced"
                  data-index={index}
                >
                  <div
                    className="stat-value"
                    style={{ color: "white", fontSize: "2rem" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="stat-label"
                    style={{ color: "white", fontSize: "1rem" }}
                  >
                    {stat.label}
                  </div>
                  <div className="stat-progress">
                    <div className="stat-progress-bar"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-footer">
              <div className="stats-highlight">
                <FaRocket />
                <span>Trusted by industry leaders worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Standards Section */}
      <section className="standards-section">
        <div className="standards-container">
          <div className="section-header">
            <h2>International Standards Compliance</h2>
            <p>
              Our team is fully conversant with many international standards,
              ensuring global compliance and quality assurance in every project.
            </p>
          </div>

          <div className="standards-grid">
            {internationalStandards.map((standard, index) => (
              <div key={index} className="standard-card">
                <FaGlobe className="standard-icon" />
                <span>{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Focus Section */}
      <section className="customer-focus-section">
        <div className="customer-focus-container">
          <div className="focus-content">
            <h2>Customer-Centric Approach</h2>
            <div className="focus-text">
              <p className="opening-quote">
                "SWAM prides itself by listening to you the customer. We work
                with you in the development of the best and most efficient
                system."
              </p>
              <p>
                As an engineering manufacturer, SWAM is very adaptable with
                regard to materials, suitability, and compatibility - both for
                the process and the environment. We are more than happy to help
                our customers regardless of the size of the project.
              </p>
              <p className="closing-quote">
                "Our systems will not only do the job, but will perform for many
                years to come."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Philosophy Section */}
      <section className="growth-philosophy-section">
        <div className="growth-philosophy-container">
          <div className="philosophy-grid">
            <div className="philosophy-content">
              <h2>Our Growth Philosophy</h2>
              <p>
                SWAM continues to grow year on year with a clear focus on
                sustainable development and customer satisfaction through our
                core values.
              </p>

              <div className="philosophy-pillars">
                <div className="pillar">
                  <FaHandshake className="pillar-icon" />
                  <div>
                    <h4>Integrity</h4>
                    <p>
                      Honest and transparent business practices in every
                      interaction
                    </p>
                  </div>
                </div>
                <div className="pillar">
                  <FaAward className="pillar-icon" />
                  <div>
                    <h4>High Quality</h4>
                    <p>
                      Uncompromising commitment to excellence in every product
                    </p>
                  </div>
                </div>
                <div className="pillar">
                  <FaShieldAlt className="pillar-icon" />
                  <div>
                    <h4>Reliability</h4>
                    <p>
                      Dependable solutions that perform consistently over time
                    </p>
                  </div>
                </div>
                <div className="pillar">
                  <FaRocket className="pillar-icon" />
                  <div>
                    <h4>Innovation</h4>
                    <p>
                      Continuous improvement and cutting-edge technology
                      adoption
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="adaptability-card">
              <FaTools className="adaptability-icon" />
              <h3>Engineering Adaptability</h3>
              <p>
                Our engineering team excels in material selection and
                environmental compatibility, ensuring optimal solutions for
                diverse applications.
              </p>
              <div className="adaptability-features">
                <div className="feature-item">
                  <span>Material Compatibility</span>
                </div>
                <div className="feature-item">
                  <span>Process Suitability</span>
                </div>
                <div className="feature-item">
                  <span>Environmental Adaptation</span>
                </div>
                <div className="feature-item">
                  <span>Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="engineering-cta-section">
        <div className="engineering-cta-container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Partner with us for comprehensive engineering solutions that
              deliver exceptional performance and reliability. No project is too
              big or too small.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <span>Discuss Your Project</span>
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
                <span>Download Capabilities Brochure</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="7,10 12,15 17,10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="12"
                    y1="15"
                    x2="12"
                    y2="3"
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

export default EngineeringDesign;
