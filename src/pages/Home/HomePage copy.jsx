import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import visionImage from "../../assets/images/swam-vision-1.png";
import MainTemplate from "../../components/Templates/MainTemplates";
import introVideo from "../../assets/swamatics-intro.mp4";
import hybridHelicalBlower from "../../assets/images/SuperHelicalHybridBlower.png";
import turboBlowers from "../../assets/images/TurboBlowers-integrallyGearedType.png";
import vacuumPumps from "../../assets/images/VacuumPumpsWithSecondarySuction.png";
import "./HomePage.css";

const HomePage = () => {
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [activeStep, setActiveStep] = useState(1);

  const openModal = (imageSrc, title) => {
    setModalImage(imageSrc);
    setModalTitle(title);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle("");
  };

  const manufacturingSteps = [
    {
      id: 1,
      title: "Request Quotation",
      description:
        "Share your requirements with our technical team. We analyze your specific needs and provide detailed specifications and competitive pricing for your industrial blower solutions.",
      image: hybridHelicalBlower,
      details:
        "Our expert engineers review your application requirements, operating conditions, and performance specifications to recommend the most suitable blower technology.",
    },
    {
      id: 2,
      title: "Planning Stage",
      description:
        "Our engineering team develops comprehensive project plans, technical drawings, and manufacturing schedules tailored to your specific requirements and delivery timelines.",
      image: turboBlowers,
      details:
        "Detailed project planning ensures optimal resource allocation, quality control measures, and timely delivery of your customized industrial equipment.",
    },
    {
      id: 3,
      title: "Product Development",
      description:
        "Advanced design and prototyping phase where we create and test your custom blower solution using cutting-edge CAD software and simulation tools.",
      image: vacuumPumps,
      details:
        "Our R&D team utilizes state-of-the-art technology to develop innovative solutions that meet industry standards and exceed performance expectations.",
    },
    {
      id: 4,
      title: "Production / Evaluation",
      description:
        "Precision manufacturing in our state-of-the-art facilities with continuous quality monitoring and performance evaluation at every stage of production.",
      image: hybridHelicalBlower,
      details:
        "Advanced manufacturing processes ensure consistent quality, reliability, and adherence to international standards throughout the production cycle.",
    },
    {
      id: 5,
      title: "Inspection & Delivery",
      description:
        "Comprehensive quality inspection, testing, and certification before packaging and delivery to ensure your equipment meets all specifications and performance standards.",
      image: turboBlowers,
      details:
        "Final inspection includes performance testing, quality certification, and professional packaging for safe delivery to your facility with installation support.",
    },
  ];
  return (
    <MainTemplate>
      {/* Hero Section with Full Width Video */}
      <section className="hero-section">
        <video autoPlay muted loop className="hero-video">
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-image">
            <img src={visionImage} alt="Swam Vision" />
          </div>
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>
              Is to provide globally the best-manufactured products. Its focus
              is on meeting our customers' requirements while being competitive.
              Swam sees itself as being recognised as a world leader, providing
              high-quality robust products.
            </p>
            <p>
              Swam has achieved this by separating local and international
              manufacturing facilities. Currently we have 4 factory locations, 2
              of which are dedicated for international production. Our 5th (3rd
              International) factory is currently under construction.
            </p>
            <div className="vision-cta">
              <button className="vision-btn">
                <span>Learn More About Us</span>
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

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2>About Swamatics</h2>
            <p className="about-subtitle">
              Pioneering the future of technology with innovative solutions and
              unwavering commitment to excellence
            </p>
          </div>

          <div className="about-content-grid">
            <div className="about-story">
              <div className="story-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Our Story</h3>
              <p>
                Born from a passion for innovation and excellence, Swamatics has
                evolved into a leading technology partner. We combine
                cutting-edge expertise with deep industry knowledge to deliver
                transformative digital solutions that drive business success and
                create lasting value for our clients.
              </p>
            </div>

            <div className="about-mission">
              <div className="mission-icon">
                <svg
                  width="48"
                  height="48"
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
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses through innovative technology solutions
                that streamline operations, enhance user experiences, and
                accelerate growth. We believe in building long-term partnerships
                and delivering results that exceed expectations.
              </p>
            </div>
          </div>

          <div className="about-values">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h4>Quality First</h4>
                <p>
                  We never compromise on quality, ensuring every solution meets
                  the highest standards.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>Innovation</h4>
                <p>
                  Constantly pushing boundaries to deliver cutting-edge
                  technological solutions.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7006C21.7033 16.047 20.9983 15.5895 20.2 15.402"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13A4.002 4.002 0 0 1 16 11.87"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>Collaboration</h4>
                <p>
                  Working closely with clients as true partners to achieve
                  shared success.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M19.4 15A1.65 1.65 0 0 0 20.85 13.35V10.65A1.65 1.65 0 0 0 19.4 9L17.7 7.35A1.65 1.65 0 0 0 15.35 7.35H8.65A1.65 1.65 0 0 0 6.3 7.35L4.6 9A1.65 1.65 0 0 0 3.15 10.65V13.35A1.65 1.65 0 0 0 4.6 15L6.3 16.65A1.65 1.65 0 0 0 8.65 16.65H15.35A1.65 1.65 0 0 0 17.7 16.65L19.4 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h4>Reliability</h4>
                <p>
                  Delivering consistent, dependable results that you can count
                  on every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-header">
          <h2>New Technology Product Launched</h2>
          <p>
            Advanced & Next Generation Energy Efficient Helical Blower Package
          </p>
        </div>
        <div className="products-grid">
          <div className="product-card large-card">
            <div
              className="product-image clickable-image"
              onClick={() =>
                openModal(
                  hybridHelicalBlower,
                  "Super Helical Hybrid Blower Package, 100% Energy Efficient"
                )
              }
            >
              <img
                src={hybridHelicalBlower}
                alt="Super Helical Hybrid Blower"
              />
            </div>
            <div className="product-content">
              <h3>
                Super Helical Hybrid Blower Package, 100% Energy Efficient
              </h3>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "14px",
                  color: "#808080",
                }}
              >
                Positive Displacement Super Helical lobe Rotary Blower is an
                integrated package that comprises of high efficiency Helical
                lobe blowers (which is direct coupled with motor), high
                efficiency Motors (IE3/IE4) of reputed supplier ABB /SIEMENS
                /CGL –origin India) & high efficiency VFD (ABB /SIEMENS
                /Schneider –origin India ) , HMI (Allen bredly –origin India),
                PLC controls (ABB/Siemens / Allen bredly –origin India), all
                safety instruments (transmitters & gauges & valves) for reliable
                and efficient operation (origin India), & fully fail proof
                design. This package gets accompanied in sound reduction cabinet
                that ensure low noise level & comply to industrial sound
                pollution norms for less than 85 Db(A) Noise level @ 1 meter
                distance.
              </p>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "14px",
                  color: "#808080",
                }}
              >
                It has cutting edge technology, next generation, innovative
                design, unmatched performance, cent percent make in India
                product with low operation Electricity cost & ownership cost
                over 15 years.
              </p>
              <button className="learn-more-btn">
                <span>Learn More</span>
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

          <div className="product-card">
            <div
              className="product-image clickable-image"
              onClick={() =>
                openModal(
                  turboBlowers,
                  "Vacuum Pumps With Secondary Suction, Air Injection"
                )
              }
            >
              <img src={turboBlowers} alt="Vacuum Pumps" />
            </div>
            <div className="product-content">
              <h3>Turbo Blowers - Integrally Geared Type</h3>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "14px",
                  color: "#808080",
                }}
              >
                High efficiency Swam Turbo Blowers are most advanced single
                stage centrifugal machine based on high speed focused
                specialized technology oil less operation.
              </p>
              <button className="learn-more-btn">
                <span>Learn More</span>
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

          <div className="product-card">
            <div
              className="product-image clickable-image"
              onClick={() =>
                openModal(vacuumPumps, "Turbo Blowers, Integrally Geared Type")
              }
            >
              <img src={vacuumPumps} alt="Turbo Blowers" />
            </div>
            <div className="product-content">
              <h3>Vacuum Pumps With Secondary Suction/Air Injection</h3>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "14px",
                  color: "#808080",
                }}
              >
                For negative suction, the pumps are ideally suited for processes
                requiring medium vacuums such as degassing, exhausting and
                pneumatic conveying.
              </p>
              <button className="learn-more-btn">
                <span>Learn More</span>
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

      {/* Manufacturing Process */}
      <section className="manufacturing-process-section">
        <div className="manufacturing-process-container">
          <div className="manufacturing-header">
            <h2>Manufacturing Processes</h2>
          </div>

          <div className="manufacturing-content">
            {/* Main Content Area */}
            <div className="manufacturing-main">
              <div className="step-indicator">
                <span className="step-label">
                  STEP {String(activeStep).padStart(2, "0")}
                </span>
              </div>

              <div className="main-content">
                <div className="content-image">
                  <img
                    src={manufacturingSteps[activeStep - 1].image}
                    alt={manufacturingSteps[activeStep - 1].title}
                  />
                  <div className="image-overlay">
                    <h3>{manufacturingSteps[activeStep - 1].title}</h3>
                    <p>{manufacturingSteps[activeStep - 1].description}</p>
                    <span className="details-text">
                      {manufacturingSteps[activeStep - 1].details}
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="request-quotation-vertical">
                <span>Request Quotation</span>
              </div> */}
            </div>

            {/* Steps Grid */}
            <div className="manufacturing-steps">
              {manufacturingSteps.map((step) => (
                <div
                  key={step.id}
                  className={`step-card ${
                    activeStep === step.id ? "active" : ""
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="step-number">
                    {String(step.id).padStart(2, "0")}
                  </div>
                  <div className="step-title">
                    {step.title.split(" ").map((word, index) => (
                      <div key={index} className="title-word">
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Company Growth */}
      <section className="projects-and-company-growth-section">
        <div className="projects-and-company-growth-container">
          <div className="growth-header">
            <h2>Projects & Company Growth</h2>
            <p>
              Driving innovation and excellence across industries with
              consistent growth and successful project delivery
            </p>
          </div>

          {/* Growth Statistics */}
          <div className="growth-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-description">
                Successfully delivered industrial solutions worldwide
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7006C21.7033 16.047 20.9983 15.5895 20.2 15.402"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13A4.002 4.002 0 0 1 16 11.87"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
              <div className="stat-description">
                Trusted by leading companies globally
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  width="48"
                  height="48"
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
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
              <div className="stat-description">
                Decades of industrial expertise and innovation
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Served</div>
              <div className="stat-description">
                Global presence with international reach
              </div>
            </div>
          </div>

          {/* Growth Timeline */}
          <div className="growth-timeline">
            <h3>Our Growth Journey</h3>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-year">2008</div>
                <div className="timeline-content">
                  <h4>Company Founded</h4>
                  <p>
                    Started with a vision to revolutionize industrial blower
                    technology
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2012</div>
                <div className="timeline-content">
                  <h4>First International Project</h4>
                  <p>
                    Expanded globally with our first major international
                    installation
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2016</div>
                <div className="timeline-content">
                  <h4>Innovation Hub Established</h4>
                  <p>
                    Opened state-of-the-art R&D facility for advanced product
                    development
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h4>Industry Leadership</h4>
                  <p>
                    Became the leading provider of energy-efficient blower
                    solutions
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>Future Vision</h4>
                  <p>Launching next-generation smart industrial solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="featured-projects">
            <h3>Featured Projects</h3>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <img src={hybridHelicalBlower} alt="Water Treatment Plant" />
                  <div className="project-overlay">
                    <div className="project-type">Water Treatment</div>
                  </div>
                </div>
                <div className="project-content">
                  <h4>Municipal Water Treatment Plant</h4>
                  <p>
                    Advanced blower systems for major metropolitan water
                    treatment facility serving 2 million residents
                  </p>
                  <div className="project-specs">
                    <span>Capacity: 500 MGD</span>
                    <span>Location: Mumbai, India</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <img src={turboBlowers} alt="Steel Manufacturing" />
                  <div className="project-overlay">
                    <div className="project-type">Steel Industry</div>
                  </div>
                </div>
                <div className="project-content">
                  <h4>Steel Manufacturing Complex</h4>
                  <p>
                    High-efficiency turbo blowers for blast furnace operations
                    in largest steel production facility
                  </p>
                  <div className="project-specs">
                    <span>Output: 10 MTPA</span>
                    <span>Location: Odisha, India</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <img src={vacuumPumps} alt="Pharmaceutical Plant" />
                  <div className="project-overlay">
                    <div className="project-type">Pharmaceutical</div>
                  </div>
                </div>
                <div className="project-content">
                  <h4>Pharmaceutical Manufacturing</h4>
                  <p>
                    Precision vacuum systems for critical pharmaceutical
                    production and packaging processes
                  </p>
                  <div className="project-specs">
                    <span>Grade: ISO 14644</span>
                    <span>Location: Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Metrics */}
          <div className="growth-metrics">
            <div className="metrics-header">
              <h3>Continuous Growth</h3>
              <p>
                Our commitment to excellence drives consistent year-over-year
                growth
              </p>
            </div>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-title">Revenue Growth</div>
                <div className="metric-percentage">45%</div>
                <div className="metric-subtitle">Year over Year</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-title">Market Expansion</div>
                <div className="metric-percentage">60%</div>
                <div className="metric-subtitle">New Markets</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-title">Client Retention</div>
                <div className="metric-percentage">95%</div>
                <div className="metric-subtitle">Customer Satisfaction</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-title">Innovation Index</div>
                <div className="metric-percentage">80%</div>
                <div className="metric-subtitle">R&D Investment</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Reviews */}
      <section className="our-client-reviews-section">
        <div className="our-client-reviews-container">
          <div className="reviews-header">
            <h2>Our Client Reviews</h2>
            <p>
              Don't just take our word for it - hear what our satisfied clients
              have to say about their experience working with us
            </p>
          </div>

          {/* Overall Rating */}
          <div className="overall-rating">
            <div className="rating-summary">
              <div className="rating-score">4.9</div>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="1"
                    />
                  </svg>
                ))}
              </div>
              <div className="rating-text">Based on 150+ client reviews</div>
            </div>
            <div className="rating-stats">
              <div className="stat-bar">
                <span>5 star</span>
                <div className="bar">
                  <div className="fill" style={{ width: "85%" }}></div>
                </div>
                <span>85%</span>
              </div>
              <div className="stat-bar">
                <span>4 star</span>
                <div className="bar">
                  <div className="fill" style={{ width: "12%" }}></div>
                </div>
                <span>12%</span>
              </div>
              <div className="stat-bar">
                <span>3 star</span>
                <div className="bar">
                  <div className="fill" style={{ width: "2%" }}></div>
                </div>
                <span>2%</span>
              </div>
              <div className="stat-bar">
                <span>2 star</span>
                <div className="bar">
                  <div className="fill" style={{ width: "1%" }}></div>
                </div>
                <span>1%</span>
              </div>
              <div className="stat-bar">
                <span>1 star</span>
                <div className="bar">
                  <div className="fill" style={{ width: "0%" }}></div>
                </div>
                <span>0%</span>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="Rajesh Kumar"
                  />
                </div>
                <div className="client-info">
                  <h4>Rajesh Kumar</h4>
                  <p>Chief Engineer</p>
                  <span>Tata Steel Limited</span>
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  "Swamatics delivered exceptional blower systems for our steel
                  manufacturing facility. Their technical expertise and
                  commitment to quality exceeded our expectations. The energy
                  efficiency improvements have significantly reduced our
                  operational costs."
                </p>
              </div>
              <div className="testimonial-footer">
                <span className="review-date">2 months ago</span>
                <span className="verified-badge">✓ Verified Purchase</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face"
                    alt="Priya Sharma"
                  />
                </div>
                <div className="client-info">
                  <h4>Priya Sharma</h4>
                  <p>Project Manager</p>
                  <span>L&T Construction</span>
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  "Outstanding service from start to finish. The team at
                  Swamatics provided comprehensive support throughout our water
                  treatment plant project. Their innovative solutions and timely
                  delivery made our project a huge success."
                </p>
              </div>
              <div className="testimonial-footer">
                <span className="review-date">1 month ago</span>
                <span className="verified-badge">✓ Verified Purchase</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Michael Chen"
                  />
                </div>
                <div className="client-info">
                  <h4>Michael Chen</h4>
                  <p>Operations Director</p>
                  <span>Pfizer Manufacturing</span>
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  "The precision vacuum systems delivered by Swamatics have been
                  flawless in our pharmaceutical production. Their attention to
                  detail and understanding of our stringent requirements is
                  commendable. Highly recommended!"
                </p>
              </div>
              <div className="testimonial-footer">
                <span className="review-date">3 weeks ago</span>
                <span className="verified-badge">✓ Verified Purchase</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
                    alt="David Johnson"
                  />
                </div>
                <div className="client-info">
                  <h4>David Johnson</h4>
                  <p>Plant Manager</p>
                  <span>Reliance Industries</span>
                </div>
                <div className="review-stars">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  ))}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                      fill="#E5E7EB"
                    />
                  </svg>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  "Great experience working with Swamatics on our petrochemical
                  facility upgrade. The turbo blowers have improved our
                  efficiency significantly. Professional team with excellent
                  technical support."
                </p>
              </div>
              <div className="testimonial-footer">
                <span className="review-date">1 month ago</span>
                <span className="verified-badge">✓ Verified Purchase</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                    alt="Sarah Williams"
                  />
                </div>
                <div className="client-info">
                  <h4>Sarah Williams</h4>
                  <p>Environmental Engineer</p>
                  <span>Veolia Water Technologies</span>
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  "Swamatics provided the perfect solution for our wastewater
                  treatment requirements. Their energy-efficient blowers have
                  not only improved our process efficiency but also helped us
                  meet our sustainability goals."
                </p>
              </div>
              <div className="testimonial-footer">
                <span className="review-date">2 weeks ago</span>
                <span className="verified-badge">✓ Verified Purchase</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
                    alt="Ahmed Hassan"
                  />
                </div>
                <div className="client-info">
                  <h4>Ahmed Hassan</h4>
                  <p>Technical Director</p>
                  <span>SABIC Industries</span>
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  "Exceptional quality and reliability. Swamatics has been our
                  trusted partner for multiple projects across our chemical
                  plants. Their innovative approach and after-sales support are
                  truly remarkable."
                </p>
              </div>
              <div className="testimonial-footer">
                <span className="review-date">3 months ago</span>
                <span className="verified-badge">✓ Verified Purchase</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h4>100% Satisfaction</h4>
              <p>Guaranteed quality and performance</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22S8 18 8 14V7L12 5L16 7V14C16 18 12 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>Certified Quality</h4>
              <p>ISO certified manufacturing standards</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg
                  width="48"
                  height="48"
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
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock technical assistance</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>Global Reach</h4>
              <p>Serving clients in 25+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2>Let's Start Something Amazing Together</h2>
            <p className="contact-subtitle">
              Ready to transform your ideas into reality? We'd love to hear from
              you and discuss how we can help your business thrive.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info-panel">
              <div className="contact-intro">
                <h3>Get in Touch</h3>
                <p>
                  We're here to help you succeed. Reach out to us through any of
                  the channels below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Email Us</h4>
                    <p>info@swamatics.com</p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49998 10.2412 2.44825 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.3051 3.09849 2.44748 2.85669 2.63519 2.65162C2.8229 2.44655 3.05028 2.28271 3.30495 2.17052C3.55962 2.05833 3.83444 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.11 3.72C9.23662 4.68007 9.47144 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Call Us</h4>
                    <p>+1 (555) 123-4567</p>
                    <span>Mon-Fri, 9AM-6PM EST</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Visit Us</h4>
                    <p>123 Tech Street, Suite 100</p>
                    <span>New York, NY 10001</span>
                  </div>
                </div>

                {/* <div className="contact-method">
                  <div className="contact-icon">
                    <svg
                      width="24"
                      height="24"
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
                        d="M12 6V12L16 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <span>Weekend: By appointment</span>
                  </div>
                </div> */}
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.284C14.0247 3.61083 13.2884 4.19445 12.773 4.95371C12.2575 5.71297 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C18.1217 8 20.1566 8.84285 21.6569 10.3431C23.1571 11.8434 24 13.8783 24 16V21H20V16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14C17.4696 14 16.9609 14.2107 16.5858 14.5858C16.2107 14.9609 16 15.4696 16 16V21H12V16C12 13.8783 12.8429 11.8434 14.3431 10.3431C15.8434 8.84285 17.8783 8 20 8H16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="2"
                        y="9"
                        width="4"
                        height="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="4"
                        cy="4"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 21L12 17L16 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>
                  Tell us about your project and we'll get back to you with a
                  tailored solution.
                </p>
              </div>

              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Applications</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="modal-image-container">
              <img src={modalImage} alt={modalTitle} />
            </div>
            <div className="modal-title">
              <h3>{modalTitle}</h3>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default HomePage;
