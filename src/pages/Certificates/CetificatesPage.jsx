import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaCertificate,
  FaAward,
  FaShieldAlt,
  FaCheckCircle,
  FaIndustry,
  FaGlobe,
  FaUserTie,
  FaClipboardCheck,
  FaDownload,
  FaEye,
  FaStar,
  FaHandshake,
  FaLeaf,
  FaHardHat,
  FaTimes,
} from "react-icons/fa";
import "./CertificatesPage.css";

const CertificatesPage = () => {
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "FEMKO Inspection Certificate",
      description:
        "International inspection and testing certification ensuring product safety and compliance",
      category: "Safety & Inspection",
      icon: <FaShieldAlt />,
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/femko-certificate.jpg",
      pdfUrl: "/images/certificates/femko-certificate.pdf",
      issuer: "FEMKO",
      validUntil: "2026",
    },
    {
      id: 2,
      title: "TUV Nord Group Certificate",
      description:
        "German technical inspection association certification for quality management systems",
      category: "Quality Management",
      icon: <FaCertificate />,
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/tuv-nord-certificate.jpg",
      pdfUrl: "/images/certificates/tuv-nord-certificate.pdf",
      issuer: "TUV Nord Group",
      validUntil: "2026",
    },
    {
      id: 3,
      title: "ISO 14001:2015 Certificate",
      description:
        "Environmental Management System certification demonstrating our commitment to sustainability",
      category: "Environmental",
      icon: <FaLeaf />,
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/iso-14001-certificate.jpg",
      pdfUrl: "/images/certificates/iso-14001-certificate.pdf",
      issuer: "ISO Certification Body",
      validUntil: "2026",
    },
    {
      id: 4,
      title: "Certificate Of Registration",
      description:
        "Official registration certificate validating our business operations and compliance",
      category: "Business Registration",
      icon: <FaClipboardCheck />,
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/registration-certificate.jpg",
      pdfUrl: "/images/certificates/registration-certificate.pdf",
      issuer: "Government Authority",
      validUntil: "Permanent",
    },
    {
      id: 5,
      title: "Appendix To Certificate",
      description:
        "Additional certification documentation supporting our quality management system",
      category: "Quality Management",
      icon: <FaCheckCircle />,
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/appendix-certificate.jpg",
      pdfUrl: "/images/certificates/appendix-certificate.pdf",
      issuer: "Certification Authority",
      validUntil: "2026",
    },
    {
      id: 6,
      title: "ISO 45001:2018",
      description:
        "Occupational Health and Safety Management System certification ensuring workplace safety",
      category: "Health & Safety",
      icon: <FaHardHat />,
      year: "2023",
      validity: "Valid",
      image: "/images/certificates/health-safety-certificate.jpg",
      pdfUrl: "/images/certificates/health-safety-certificate.pdf",
      issuer: "ISO Certification Body",
      validUntil: "2026",
    },
  ];

  const certificationStandards = [
    {
      standard: "ISO 9001:2015",
      title: "Quality Management System",
      description:
        "Demonstrates our ability to consistently provide products that meet customer and regulatory requirements",
      icon: <FaAward />,
    },
    {
      standard: "ISO 14001:2015",
      title: "Environmental Management",
      description:
        "Shows our commitment to environmental responsibility and sustainable business practices",
      icon: <FaLeaf />,
    },
    {
      standard: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      description:
        "Ensures the highest standards of workplace safety and employee well-being",
      icon: <FaHardHat />,
    },
    {
      standard: "CE Marking",
      title: "European Conformity",
      description:
        "Confirms compliance with European Union safety, health, and environmental requirements",
      icon: <FaGlobe />,
    },
    {
      standard: "API Standards",
      title: "American Petroleum Institute",
      description:
        "Meets the rigorous standards for equipment used in petroleum and natural gas industries",
      icon: <FaIndustry />,
    },
    {
      standard: "ASME BPVC",
      title: "Boiler & Pressure Vessel Code",
      description:
        "Compliance with international standards for pressure equipment design and manufacturing",
      icon: <FaShieldAlt />,
    },
  ];

  const companyValues = [
    {
      value: "Integrity",
      description:
        "Maintaining the highest ethical standards in all our business practices",
      icon: <FaHandshake />,
    },
    {
      value: "High Quality",
      description:
        "Delivering products that exceed customer expectations and industry standards",
      icon: <FaStar />,
    },
    {
      value: "Reliability",
      description:
        "Consistent performance and dependable solutions for our customers",
      icon: <FaCheckCircle />,
    },
    {
      value: "Innovation",
      description:
        "Continuously improving and developing cutting-edge technologies",
      icon: <FaIndustry />,
    },
  ];

  const certificationStats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "6", label: "Major Certifications" },
    { value: "100%", label: "Compliance Rate" },
    { value: "Global", label: "Recognition" },
  ];

  // Handler functions
  const handleViewCertificate = (certificate, event) => {
    event.stopPropagation(); // Prevent card click
    setSelectedCertificate(certificate);
    setViewModalOpen(true);
  };

  const handleDownloadCertificate = (certificate, event) => {
    event.stopPropagation(); // Prevent card click
    // Create a temporary link to download the certificate
    const link = document.createElement("a");
    link.href = certificate.pdfUrl || certificate.image;
    link.download = `${certificate.title.replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeModal = () => {
    setViewModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="certificates-hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div
          className="certificates-hero-container"
          style={{ borderRadius: "1rem", marginTop: "5rem" }}
        >
          <div className="hero-content">
            <div className="hero-badge" style={{ marginTop: "1rem" }}>
              Certified Excellence
            </div>
            <h1>Our Certificates & Accreditations</h1>
            <p className="hero-subtitle">
              Swamatics continues to grow year on year with a focus on
              integrity, high quality, reliability, and innovation. Our
              certifications validate our commitment to excellence and
              international standards.
            </p>
            <div className="hero-highlights" style={{ marginBottom: "1rem" }}>
              <div className="highlight-item">
                <FaCertificate />
                <span>ISO Certified</span>
              </div>
              <div className="highlight-item">
                <FaGlobe />
                <span>International Standards</span>
              </div>
              <div className="highlight-item">
                <FaAward />
                <span>Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid Section */}
      <section className="certificates-grid-section">
        <div className="certificates-grid-container">
          <div className="section-header">
            <h2>Our Certifications</h2>
            <p>
              Each certificate represents our unwavering commitment to quality,
              safety, and environmental responsibility in everything we do.
            </p>
          </div>

          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`certificate-card ${
                  activeCertificate === index ? "active" : ""
                }`}
                onClick={() => setActiveCertificate(index)}
              >
                <div className="certificate-header">
                  <div className="certificate-icon">{certificate.icon}</div>
                  <div className="certificate-status">
                    <span className="status-badge valid">
                      {certificate.validity}
                    </span>
                    <span className="year-badge">{certificate.year}</span>
                  </div>
                </div>

                <div className="certificate-content">
                  <div className="certificate-category">
                    {certificate.category}
                  </div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.description}</p>
                </div>

                <div className="certificate-actions">
                  <button
                    className="action-btn view-btn"
                    onClick={(e) => handleViewCertificate(certificate, e)}
                  >
                    <FaEye />
                    <span>View</span>
                  </button>
                  <button
                    className="action-btn download-btn"
                    onClick={(e) => handleDownloadCertificate(certificate, e)}
                  >
                    <FaDownload />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Standards Section */}
      <section className="certification-standards-section">
        <div className="certification-standards-container">
          <div className="section-header">
            <h2>International Standards Compliance</h2>
            <p>
              Our adherence to international standards ensures that our products
              meet the highest quality and safety requirements across global
              markets.
            </p>
          </div>

          <div className="standards-grid">
            {certificationStandards.map((standard, index) => (
              <div key={index} className="standard-card">
                <div className="standard-icon">{standard.icon}</div>
                <div className="standard-content">
                  <div className="standard-code">{standard.standard}</div>
                  <h4>{standard.title}</h4>
                  <p>{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="company-values-section">
        <div className="company-values-container">
          <div className="values-content">
            <div className="values-text">
              <h2>Our Core Values</h2>
              <p className="values-intro">
                Swam continues to grow year on year. Our focus is growth through
                these fundamental principles that guide every aspect of our
                business operations and customer relationships.
              </p>
            </div>

            <div className="values-grid">
              {companyValues.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <div className="value-content">
                    <h4>{value.value}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certification-stats-card">
            <div className="stats-header">
              <FaCertificate className="stats-icon" />
              <h3>Certification Excellence</h3>
              <p>Our commitment to quality is reflected in our achievements</p>
            </div>

            <div className="stats-grid">
              {certificationStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="quality-commitment-section">
        <div className="quality-commitment-container">
          <div className="commitment-content">
            <h2>Our Quality Commitment</h2>
            <div className="commitment-text">
              <p className="opening-quote">
                "Quality is not an act, it is a habit. At Swamatics, we have
                made excellence a way of life, ensuring every product meets the
                highest international standards."
              </p>
              <p>
                Our certifications are not just documents on the wall – they
                represent our daily commitment to delivering products that
                exceed expectations. From raw material inspection to final
                testing, every step is governed by these rigorous standards.
              </p>
              <div className="commitment-features">
                <div className="commitment-feature">
                  <FaUserTie className="feature-icon" />
                  <span>Expert Quality Team</span>
                </div>
                <div className="commitment-feature">
                  <FaClipboardCheck className="feature-icon" />
                  <span>Rigorous Testing</span>
                </div>
                <div className="commitment-feature">
                  <FaGlobe className="feature-icon" />
                  <span>Global Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="certificates-cta-section">
        <div className="certificates-cta-container">
          <div className="cta-content">
            <h2>Trust in Our Certified Excellence</h2>
            <p>
              Partner with a company that doesn't just meet standards – we
              exceed them. Our certifications are your assurance of quality,
              reliability, and performance.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <span>Download All Certificates</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="cta-secondary">
                <span>Contact Quality Team</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* Certificate View Modal */}
      {viewModalOpen && selectedCertificate && (
        <div className="certificate-modal-overlay" onClick={closeModal}>
          <div
            className="certificate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title">
                <div className="modal-icon">{selectedCertificate.icon}</div>
                <div>
                  <h3>{selectedCertificate.title}</h3>
                  <p className="modal-category">
                    {selectedCertificate.category}
                  </p>
                </div>
              </div>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="modal-content">
              <div className="certificate-preview">
                {selectedCertificate.image ? (
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className="certificate-placeholder"
                  style={{
                    display: selectedCertificate.image ? "none" : "flex",
                  }}
                >
                  <div className="placeholder-icon">
                    {selectedCertificate.icon}
                  </div>
                  <h4>{selectedCertificate.title}</h4>
                  <p>Certificate Preview</p>
                  <span className="placeholder-note">
                    Original certificate available for download
                  </span>
                </div>
              </div>

              <div className="certificate-details">
                <div className="detail-row">
                  <span className="detail-label">Description:</span>
                  <span className="detail-value">
                    {selectedCertificate.description}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Issued By:</span>
                  <span className="detail-value">
                    {selectedCertificate.issuer}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Issue Year:</span>
                  <span className="detail-value">
                    {selectedCertificate.year}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Valid Until:</span>
                  <span className="detail-value">
                    {selectedCertificate.validUntil}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Status:</span>
                  <span
                    className={`detail-value status-${selectedCertificate.validity.toLowerCase()}`}
                  >
                    {selectedCertificate.validity}
                  </span>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button
                className="modal-btn download-btn"
                onClick={(e) =>
                  handleDownloadCertificate(selectedCertificate, e)
                }
              >
                <FaDownload />
                <span>Download PDF</span>
              </button>
              <button className="modal-btn close-btn" onClick={closeModal}>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default CertificatesPage;
