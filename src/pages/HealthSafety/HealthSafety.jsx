import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaShieldAlt,
  FaHardHat,
  FaFirstAid,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaUsers,
  FaTools,
  FaEye,
  FaHeartbeat,
  FaAmbulance,
  FaFire,
  FaCertificate,
  FaUserTie,
  FaBookOpen,
  FaChartLine,
  FaBullhorn,
  FaHandsHelping,
} from "react-icons/fa";
import "./HealthSafety.css";

const HealthSafety = () => {
  const [activeSafetyStep, setActiveSafetyStep] = useState(0);

  const safetyFeatures = [
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Zero Accident Policy",
      description:
        "Our biggest asset is our employees. We maintain a strict 'Zero Accidents' policy across all operations.",
    },
    {
      icon: <FaHardHat className="feature-icon" />,
      title: "Safe Work Environment",
      description:
        "Comprehensive safety protocols ensuring a safe, healthy and accident-free workplace for all employees.",
    },
    {
      icon: <FaFirstAid className="feature-icon" />,
      title: "Health & Wellness",
      description:
        "Proactive health monitoring and wellness programs to protect employees from foreseeable work hazards.",
    },
    {
      icon: <FaExclamationTriangle className="feature-icon" />,
      title: "Risk Prevention",
      description:
        "Continuous risk assessment and prevention measures through operational procedures and safe systems.",
    },
  ];

  const safetyProcess = [
    {
      step: "01",
      title: "Risk Assessment",
      description:
        "Comprehensive identification and assessment of workplace hazards and risks across all operations.",
      details:
        "Systematic evaluation of potential dangers with implementation of control measures and risk mitigation strategies.",
    },
    {
      step: "02",
      title: "Safety Training",
      description:
        "Regular training programs for all employees on safety procedures, emergency protocols, and best practices.",
      details:
        "Continuous skill development and awareness programs ensuring all personnel are equipped with safety knowledge.",
    },
    {
      step: "03",
      title: "Safety Audits",
      description:
        "Regular safety audits and mock drills to ensure compliance with health and safety management requirements.",
      details:
        "Systematic inspection and evaluation of safety systems with corrective action implementation.",
    },
    {
      step: "04",
      title: "Emergency Preparedness",
      description:
        "Comprehensive emergency response plans and preparedness protocols for various emergency scenarios.",
      details:
        "Well-defined emergency procedures with trained response teams and regular drill exercises.",
    },
  ];

  const safetyPolicies = [
    "Zero Accident Workplace Policy",
    "Statutory & Regulatory Compliance",
    "Safe Systems & Work Methods",
    "Employee Health & Safety Training",
    "Contractor Safety Requirements",
    "Emergency Response Procedures",
  ];

  const safetyCapabilities = [
    {
      parameter: "Workplace Safety",
      description: "Comprehensive workplace safety management and monitoring",
      icon: <FaHardHat />,
    },
    {
      parameter: "Health Monitoring",
      description:
        "Regular health assessments and occupational health programs",
      icon: <FaHeartbeat />,
    },
    {
      parameter: "Emergency Response",
      description: "24/7 emergency response teams and medical facilities",
      icon: <FaAmbulance />,
    },
    {
      parameter: "Fire Safety",
      description:
        "Advanced fire detection, prevention and suppression systems",
      icon: <FaFire />,
    },
    {
      parameter: "Safety Training",
      description:
        "Comprehensive safety education and skill development programs",
      icon: <FaBookOpen />,
    },
    {
      parameter: "Incident Management",
      description:
        "Systematic incident reporting, investigation and prevention",
      icon: <FaClipboardCheck />,
    },
  ];

  const safetyStats = [
    { value: "0", label: "Target Accidents" },
    { value: "100%", label: "Safety Compliance" },
    { value: "24/7", label: "Safety Monitoring" },
    { value: "18+", label: "Safety Personnel" },
  ];

  const safetyCommitments = [
    {
      title: "Legal Compliance",
      description: "Full compliance with statutory and regulatory requirements",
      icon: <FaCertificate />,
    },
    {
      title: "Safe Operations",
      description: "Safe and healthy workplace through operational procedures",
      icon: <FaTools />,
    },
    {
      title: "Employee Training",
      description:
        "Appropriate training and support for all safety responsibilities",
      icon: <FaUserTie />,
    },
    {
      title: "Continuous Improvement",
      description:
        "Regular review and enhancement of safety policies and practices",
      icon: <FaChartLine />,
    },
  ];

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="safety-hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div
          className="safety-hero-container"
          style={{ borderRadius: "1rem", marginTop: "5rem" }}
        >
          <div className="hero-content">
            <div className="hero-badge" style={{ marginTop: "1rem" }}>
              Health & Safety Excellence
            </div>
            <h1>Health & Safety Commitment</h1>
            <p className="hero-subtitle">
              Our employees are our biggest asset. We are committed to providing
              a safe, healthy, and accident-free workplace through comprehensive
              safety policies, training, and continuous improvement initiatives.
            </p>
            <div className="hero-highlights" style={{ marginBottom: "1rem" }}>
              <div className="highlight-item">
                <FaShieldAlt />
                <span>Zero Accidents</span>
              </div>
              <div className="highlight-item">
                <FaUsers />
                <span>Employee Focused</span>
              </div>
              <div className="highlight-item">
                <FaClipboardCheck />
                <span>Full Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="safety-features-section">
        <div className="safety-features-container">
          <div className="section-header">
            <h2>Our Safety Commitment</h2>
            <p>
              Safety is an essential and integral part of each and every
              activity at SWAM. All work is carried out with care, giving due
              consideration to safety which is not compromised under any
              circumstances.
            </p>
          </div>

          <div className="features-grid">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Process Section */}
      <section className="safety-process-section">
        <div className="safety-process-container">
          <div className="section-header">
            <h2>Our Safety Management Process</h2>
            <p>
              A systematic approach to health and safety management with
              comprehensive protocols ensuring the wellbeing of all employees
              and stakeholders.
            </p>
          </div>

          <div className="process-grid">
            {safetyProcess.map((process, index) => (
              <div
                key={index}
                className={`process-card ${
                  activeSafetyStep === index ? "active" : ""
                }`}
                onClick={() => setActiveSafetyStep(index)}
              >
                <div className="process-step">{process.step}</div>
                <div className="process-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                  {activeSafetyStep === index && (
                    <div className="process-details">
                      <span>{process.details}</span>
                    </div>
                  )}
                </div>
                {index < safetyProcess.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Capabilities Section */}
      <section className="safety-capabilities-section">
        <div className="safety-capabilities-container">
          <div className="capabilities-grid">
            <div className="capabilities-content">
              <h2>Comprehensive Safety Management</h2>
              <p className="capabilities-description">
                Our integrated safety management system covers all aspects of
                workplace health and safety, from prevention and training to
                emergency response and continuous improvement.
              </p>

              <div className="capabilities-list">
                {safetyCapabilities.map((capability, index) => (
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

            <div className="safety-station-card">
              <div className="station-header">
                <FaEye className="station-icon" />
                <h3>Safety Monitoring Center</h3>
                <p>Continuous monitoring and management of workplace safety</p>
              </div>

              <div className="stats-grid">
                {safetyStats.map((stat, index) => (
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

      {/* Safety Policies Section */}
      <section className="safety-policies-section">
        <div className="safety-policies-container">
          <div className="section-header">
            <h2>Safety Policies & Standards</h2>
            <p>
              Our comprehensive safety policies ensure compliance with all
              statutory requirements and industry best practices.
            </p>
          </div>

          <div className="policies-grid">
            {safetyPolicies.map((policy, index) => (
              <div key={index} className="policy-card">
                <FaClipboardCheck className="policy-icon" />
                <span>{policy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Philosophy Section */}
      <section className="safety-philosophy-section">
        <div className="safety-philosophy-container">
          <div className="philosophy-content">
            <h2>Our Safety Philosophy</h2>
            <div className="philosophy-text">
              <p className="opening-quote">
                "SWAM firmly believes that Safety is an essential and integral
                part of each and every activity at SWAM."
              </p>
              <p>
                Accidents and risk to health are preventable through continual
                improvement in the working environment and the involvement of
                all employees ensuring that "Safety Matters". We work with major
                suppliers, contractors and customers to facilitate their Health
                and Safety performance improvement.
              </p>
              <p className="closing-quote">
                "Our focus is growth through Integrity, High Quality,
                Reliability, and Innovation - with Safety as our foundation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Commitments Section */}
      <section className="safety-commitments-section">
        <div className="safety-commitments-container">
          <div className="section-header">
            <h2>Our Safety Commitments</h2>
            <p>
              We are committed to maintaining the highest standards of health
              and safety through these core principles and practices.
            </p>
          </div>

          <div className="commitments-grid">
            {safetyCommitments.map((commitment, index) => (
              <div key={index} className="commitment-card">
                <div className="commitment-icon">{commitment.icon}</div>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Team Section */}
      <section className="safety-team-section">
        <div className="safety-team-container">
          <div className="team-grid">
            <div className="team-content">
              <h2>Dedicated Safety Team</h2>
              <p>
                Our safety management is backed by a dedicated team of safety
                professionals who ensure comprehensive safety oversight at all
                levels of our organization.
              </p>

              <div className="team-features">
                <div className="team-feature">
                  <FaUserTie className="team-icon" />
                  <div>
                    <h4>Safety Officers</h4>
                    <p>
                      Qualified safety professionals overseeing all safety
                      operations
                    </p>
                  </div>
                </div>
                <div className="team-feature">
                  <FaEye className="team-icon" />
                  <div>
                    <h4>Safety Inspections</h4>
                    <p>Regular safety inspections and compliance monitoring</p>
                  </div>
                </div>
                <div className="team-feature">
                  <FaBullhorn className="team-icon" />
                  <div>
                    <h4>Safety Communication</h4>
                    <p>
                      Effective communication of safety policies and procedures
                    </p>
                  </div>
                </div>
                <div className="team-feature">
                  <FaHandsHelping className="team-icon" />
                  <div>
                    <h4>Employee Support</h4>
                    <p>
                      Comprehensive support and resources for all safety needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="emergency-card">
              <FaAmbulance className="emergency-icon" />
              <h3>Emergency Response</h3>
              <p>
                24/7 emergency response capabilities with trained personnel and
                comprehensive emergency management protocols.
              </p>
              <div className="emergency-badge">
                <div className="badge-title">Emergency Hotline</div>
                <div className="badge-subtitle">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="safety-cta-section">
        <div className="safety-cta-container">
          <div className="cta-content">
            <h2>Safety First, Always</h2>
            <p>
              Join us in our commitment to maintaining the highest standards of
              health and safety. Together, we can achieve our goal of zero
              accidents and create a safer workplace for everyone.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <span>Download Safety Manual</span>
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
                <span>Report Safety Concern</span>
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

export default HealthSafety;
