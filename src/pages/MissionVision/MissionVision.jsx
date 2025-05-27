import React, { useState, useEffect } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import "./MissionVision.css";

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [missionVisionData, setMissionVisionData] = useState(null);

  useEffect(() => {
    // Simulating data fetch - you can replace this with actual API call
    const data = {
      hero: {
        title: "Our Mission & Vision",
        subtitle: "Driving Innovation, Shaping the Future",
        description:
          "Discover the core values and aspirations that guide our journey towards excellence and sustainable growth in industrial technology.",
        backgroundImage: "/images/banner-1.jpg",
      },
      mission: {
        title: "Our Mission",
        subtitle: "Empowering Industries Through Innovation",
        description:
          "To excel globally by delivering the right product for every application, emphasizing environmental responsibility, workplace safety, and cutting-edge manufacturing. We prioritize customer feedback, ensuring continuous development and superior engineering.",
        detailedDescription:
          "Our mission is rooted in the belief that technology should serve humanity while preserving our planet. We strive to create solutions that not only meet today's industrial challenges but also anticipate tomorrow's needs. Through rigorous research, innovative design, and unwavering commitment to quality, we aim to be the trusted partner for industries worldwide.",
        keyPoints: [
          {
            icon: "🎯",
            title: "Customer-Centric Approach",
            description:
              "We prioritize customer feedback and collaboration, ensuring our solutions perfectly align with real-world needs and challenges.",
          },
          {
            icon: "🌱",
            title: "Environmental Responsibility",
            description:
              "Committed to sustainable practices and developing eco-friendly solutions that minimize environmental impact.",
          },
          {
            icon: "🔧",
            title: "Superior Engineering",
            description:
              "Leveraging cutting-edge technology and engineering excellence to deliver robust, reliable, and efficient products.",
          },
          {
            icon: "🛡️",
            title: "Workplace Safety",
            description:
              "Ensuring the highest safety standards in all our operations and products, protecting both our team and our customers.",
          },
        ],
        image: "/images/SuperHelicalHybridBlower.png",
      },
      vision: {
        title: "Our Vision",
        subtitle: "Leading the Future of Industrial Technology",
        description:
          "To be recognized worldwide as a leader in manufacturing robust, high-quality products that meet customer needs while maintaining competitiveness and driving industry transformation.",
        detailedDescription:
          "We envision a future where industrial operations are seamlessly integrated with smart technology, where efficiency meets sustainability, and where innovation drives progress. Our vision extends beyond manufacturing excellence to encompass global leadership in technological advancement and environmental stewardship.",
        keyPoints: [
          {
            icon: "🌍",
            title: "Global Leadership",
            description:
              "Establishing ourselves as the world's most trusted name in industrial blower and vacuum technology.",
          },
          {
            icon: "💡",
            title: "Innovation Pioneer",
            description:
              "Leading industry transformation through breakthrough technologies and revolutionary product designs.",
          },
          {
            icon: "🤝",
            title: "Strategic Partnerships",
            description:
              "Building lasting relationships with customers, suppliers, and stakeholders based on mutual trust and shared success.",
          },
          {
            icon: "📈",
            title: "Sustainable Growth",
            description:
              "Achieving consistent growth while maintaining our commitment to quality, innovation, and environmental responsibility.",
          },
        ],
        image: "/images/our-vision.png",
      },
      values: {
        title: "Our Core Values",
        subtitle: "The Foundation of Our Success",
        description:
          "These fundamental principles guide every decision we make and every action we take, ensuring we remain true to our purpose while driving innovation and excellence.",
        valuesList: [
          {
            icon: "⭐",
            title: "Excellence",
            description:
              "We pursue excellence in everything we do, from product design to customer service, never settling for anything less than the best.",
            color: "#3b82f6",
          },
          {
            icon: "🔬",
            title: "Innovation",
            description:
              "Constantly pushing boundaries to deliver cutting-edge technological solutions that transform industries and create value.",
            color: "#10b981",
          },
          {
            icon: "🤝",
            title: "Integrity",
            description:
              "Operating with honesty, transparency, and ethical practices in all our business relationships and operations.",
            color: "#f59e0b",
          },
          {
            icon: "🌟",
            title: "Quality",
            description:
              "Maintaining the highest standards of quality in our products, services, and processes, ensuring customer satisfaction.",
            color: "#ef4444",
          },
          {
            icon: "👥",
            title: "Collaboration",
            description:
              "Working closely with clients, partners, and team members to achieve shared success and mutual growth.",
            color: "#8b5cf6",
          },
          {
            icon: "🔄",
            title: "Continuous Improvement",
            description:
              "Embracing change and continuously evolving our processes, products, and capabilities to stay ahead of the curve.",
            color: "#06b6d4",
          },
        ],
      },
      impact: {
        title: "Our Impact",
        subtitle: "Making a Difference Across Industries",
        description:
          "Through our mission and vision, we've created meaningful impact across various sectors, driving efficiency, sustainability, and innovation.",
        metrics: [
          {
            number: "500+",
            label: "Projects Delivered",
            description: "Successfully completed projects across 25+ countries",
          },
          {
            number: "98%",
            label: "Customer Satisfaction",
            description:
              "Consistently high satisfaction rates from our global clients",
          },
          {
            number: "45%",
            label: "Energy Savings",
            description:
              "Average energy efficiency improvement in client operations",
          },
          {
            number: "25+",
            label: "Countries Served",
            description:
              "Global presence with manufacturing and service facilities",
          },
        ],
      },
      commitment: {
        title: "Our Commitment to the Future",
        subtitle: "Building Tomorrow's Solutions Today",
        description:
          "We are committed to shaping the future of industrial technology through sustainable innovation, responsible growth, and unwavering dedication to our customers and communities.",
        commitments: [
          {
            title: "Sustainable Innovation",
            description:
              "Developing eco-friendly technologies that reduce environmental impact while improving operational efficiency.",
            icon: "🌿",
          },
          {
            title: "Digital Transformation",
            description:
              "Integrating smart technologies and IoT solutions to create intelligent industrial systems.",
            icon: "💻",
          },
          {
            title: "Global Accessibility",
            description:
              "Making advanced industrial solutions accessible to businesses of all sizes across the globe.",
            icon: "🌐",
          },
          {
            title: "Talent Development",
            description:
              "Investing in our people and fostering a culture of continuous learning and professional growth.",
            icon: "🎓",
          },
        ],
      },
    };
    setMissionVisionData(data);
  }, []);

  if (!missionVisionData) {
    return (
      <MainTemplate>
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="mission-vision-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">Mission & Vision</div>
          <h1>{missionVisionData.hero.title}</h1>
          <p className="hero-subtitle">{missionVisionData.hero.subtitle}</p>
          <p className="hero-description">
            {missionVisionData.hero.description}
          </p>
          <div className="hero-cta">
            <button
              className="cta-button primary"
              onClick={() =>
                document
                  .getElementById("mission-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Explore Our Purpose</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L12 18L17 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="mission-vision-nav">
        <div className="nav-container">
          <div className="nav-tabs">
            {[
              { id: "mission", label: "Our Mission", icon: "🎯" },
              { id: "vision", label: "Our Vision", icon: "🔮" },
              { id: "values", label: "Core Values", icon: "⭐" },
              { id: "impact", label: "Our Impact", icon: "📊" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {activeTab === "mission" && (
        <section
          id="mission-section"
          className="content-section mission-section"
        >
          <div className="section-container">
            <div className="content-grid">
              <div className="content-text">
                <div className="section-header">
                  <h2>{missionVisionData.mission.title}</h2>
                  <h3>{missionVisionData.mission.subtitle}</h3>
                  <p className="section-description">
                    {missionVisionData.mission.description}
                  </p>
                  <p className="detailed-description">
                    {missionVisionData.mission.detailedDescription}
                  </p>
                </div>

                <div className="key-points">
                  {missionVisionData.mission.keyPoints.map((point, index) => (
                    <div key={index} className="key-point">
                      <div className="point-icon">{point.icon}</div>
                      <div className="point-content">
                        <h4>{point.title}</h4>
                        <p>{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-visual">
                <div className="visual-container">
                  <img
                    src={missionVisionData.mission.image}
                    alt="Our Mission"
                  />
                  <div className="visual-overlay">
                    <div className="overlay-content">
                      <h4>Driving Excellence</h4>
                      <p>Through innovation and dedication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vision Section */}
      {activeTab === "vision" && (
        <section id="vision-section" className="content-section vision-section">
          <div className="section-container">
            <div className="content-grid reverse">
              <div className="content-visual">
                <div className="visual-container">
                  <img src={missionVisionData.vision.image} alt="Our Vision" />
                  <div className="visual-overlay">
                    <div className="overlay-content">
                      <h4>Future Forward</h4>
                      <p>Leading industry transformation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-text">
                <div className="section-header">
                  <h2>{missionVisionData.vision.title}</h2>
                  <h3>{missionVisionData.vision.subtitle}</h3>
                  <p className="section-description">
                    {missionVisionData.vision.description}
                  </p>
                  <p className="detailed-description">
                    {missionVisionData.vision.detailedDescription}
                  </p>
                </div>

                <div className="key-points">
                  {missionVisionData.vision.keyPoints.map((point, index) => (
                    <div key={index} className="key-point">
                      <div className="point-icon">{point.icon}</div>
                      <div className="point-content">
                        <h4>{point.title}</h4>
                        <p>{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      {activeTab === "values" && (
        <section id="values-section" className="content-section values-section">
          <div className="section-container">
            <div className="section-header centered">
              <h2>{missionVisionData.values.title}</h2>
              <h3>{missionVisionData.values.subtitle}</h3>
              <p className="section-description">
                {missionVisionData.values.description}
              </p>
            </div>

            <div className="values-grid">
              {missionVisionData.values.valuesList.map((value, index) => (
                <div
                  key={index}
                  className="value-card"
                  style={{ "--accent-color": value.color }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                  <div className="value-accent"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      {activeTab === "impact" && (
        <section id="impact-section" className="content-section impact-section">
          <div className="section-container">
            <div className="section-header centered">
              <h2>{missionVisionData.impact.title}</h2>
              <h3>{missionVisionData.impact.subtitle}</h3>
              <p className="section-description">
                {missionVisionData.impact.description}
              </p>
            </div>

            <div className="impact-metrics">
              {missionVisionData.impact.metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-number">{metric.number}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-description">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="section-container">
          <div className="section-header centered">
            <h2>{missionVisionData.commitment.title}</h2>
            <h3>{missionVisionData.commitment.subtitle}</h3>
            <p className="section-description">
              {missionVisionData.commitment.description}
            </p>
          </div>

          <div className="commitments-grid">
            {missionVisionData.commitment.commitments.map(
              (commitment, index) => (
                <div key={index} className="commitment-card">
                  <div className="commitment-icon">{commitment.icon}</div>
                  <h4>{commitment.title}</h4>
                  <p>{commitment.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Transform Your Operations?</h2>
            <p>
              Join hundreds of companies worldwide who trust us to deliver
              innovative solutions that drive success.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                <span>Get Started Today</span>
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
              <button className="cta-button secondary">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default MissionVision;
