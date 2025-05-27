import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import logo from "../../assets/images/logo.png";
import bannerImage from "../../assets/images/about-us-image.png";
import hybridHelicalBlower from "../../assets/images/SuperHelicalHybridBlower.png";
import turboBlowers from "../../assets/images/TurboBlowers-integrallyGearedType.png";
import vacuumPumps from "../../assets/images/VacuumPumpsWithSecondarySuction.png";
import "./AboutPage.css";

const AboutPage = () => {
  const [activeTimeline, setActiveTimeline] = useState(2024);

  const timelineData = [
    {
      year: 2008,
      title: "Foundation",
      description:
        "Swamatics was founded with a vision to revolutionize industrial blower technology.",
      achievements: ["Company established", "First facility", "15 engineers"],
      image: logo,
    },
    {
      year: 2012,
      title: "Global Expansion",
      description:
        "Entered international markets with groundbreaking projects across continents.",
      achievements: [
        "International projects",
        "ISO certification",
        "3 countries",
      ],
      image: hybridHelicalBlower,
    },
    {
      year: 2016,
      title: "Innovation Hub",
      description:
        "Established R&D facilities leading to breakthrough energy-efficient technologies.",
      achievements: ["R&D center", "50+ patents", "Energy breakthroughs"],
      image: turboBlowers,
    },
    {
      year: 2020,
      title: "Market Leadership",
      description:
        "Achieved industry leadership with revolutionary products for Fortune 500 companies.",
      achievements: ["Market leader", "500+ projects", "25 countries"],
      image: vacuumPumps,
    },
    {
      year: 2024,
      title: "Future Vision",
      description:
        "Pioneering smart industrial solutions with AI integration and sustainability.",
      achievements: ["AI solutions", "Carbon neutral", "Next-gen products"],
      image: bannerImage,
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Chief Executive Officer",
      experience: "20+ years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description:
        "Visionary leader driving innovation and global expansion in industrial manufacturing.",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Chief Technology Officer",
      experience: "18+ years",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face",
      description:
        "Leading technological advancement with breakthrough innovations in energy-efficient solutions.",
    },
    {
      name: "Amit Patel",
      position: "Head of Operations",
      experience: "15+ years",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description:
        "Ensuring operational excellence and world-class manufacturing quality standards.",
    },
    {
      name: "Sarah Johnson",
      position: "Global Sales Director",
      experience: "12+ years",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      description:
        "Building strategic partnerships and expanding global footprint across diverse markets.",
    },
  ];

  const coreValues = [
    {
      icon: (
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
      ),
      title: "Excellence",
      description:
        "Pursuing excellence in every aspect of our work, ensuring the highest quality standards.",
    },
    {
      icon: (
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
      ),
      title: "Innovation",
      description:
        "Pushing boundaries to deliver cutting-edge solutions that transform industries.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
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
      ),
      title: "Integrity",
      description:
        "Building trust through transparent communication and ethical practices.",
    },
    {
      icon: (
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
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
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
      ),
      title: "Collaboration",
      description:
        "Working as true partners to achieve shared success and lasting value.",
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    { name: "ISO 14001:2015", description: "Environmental Management" },
    { name: "ISO 45001:2018", description: "Health & Safety Management" },
  ];

  const awards = [
    {
      name: "Excellence in Innovation",
      year: "2023",
      organization: "Industrial Manufacturing Awards",
    },
    {
      name: "Best Energy Efficiency",
      year: "2022",
      organization: "Green Technology Awards",
    },
    {
      name: "Global Supplier Excellence",
      year: "2021",
      organization: "Fortune 500 Recognition",
    },
  ];

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="hero-background">
          <img src={bannerImage} alt="Swamatics Industrial Excellence" />
          <div className="hero-overlay"></div>
        </div>
        <div className="about-hero-container">
          <div className="hero-content">
            {/* <div className="hero-badge">About Swamatics</div> */}
            <br />
            <h1>About Swamatics</h1>
            <p>
              For over 15 years, we've been transforming industries with
              cutting-edge solutions that drive efficiency, sustainability, and
              growth across global markets.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="section-header">
            <h2>Our Purpose</h2>
            <p>
              Driving the future of industrial technology with purpose and
              vision
            </p>
          </div>

          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon">
                  <svg
                    width="32"
                    height="32"
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
                <h3>Our Mission</h3>
              </div>
              <p>
                To empower industries worldwide with innovative, sustainable
                solutions that drive operational excellence and environmental
                responsibility while delivering cutting-edge technology that
                transforms business operations.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon">
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
                <h3>Our Vision</h3>
              </div>
              <p>
                To be the globally recognized leader in sustainable industrial
                technology, setting new standards for innovation and
                environmental stewardship while enabling industries to thrive
                responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <div className="core-values-container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-section">
        <div className="leadership-container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>Visionary leaders driving our mission forward</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <div className="member-position">{member.position}</div>
                  <div className="member-experience">
                    {member.experience} Experience
                  </div>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="credentials-container">
          <div className="section-header">
            <h2>Credentials & Recognition</h2>
            <p>Our commitment to excellence recognized globally</p>
          </div>

          <div className="credentials-grid">
            <div className="credentials-category">
              <h3>Certifications</h3>
              <div className="credentials-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="credential-item">
                    <div className="credential-icon">
                      <svg
                        width="24"
                        height="24"
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
                    <div>
                      <h4>{cert.name}</h4>
                      <p>{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="credentials-category">
              <h3>Awards</h3>
              <div className="credentials-list">
                {awards.map((award, index) => (
                  <div key={index} className="credential-item">
                    <div className="credential-icon">
                      <svg
                        width="24"
                        height="24"
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
                    <div>
                      <h4>{award.name}</h4>
                      <p>
                        {award.organization} • {award.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Transform Your Operations?</h2>
            <p>
              Join hundreds of satisfied clients who have revolutionized their
              industrial processes with our innovative solutions.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <span>Get Started</span>
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
                <span>Learn More</span>
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
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default AboutPage;
