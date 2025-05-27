import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import bannerImage from "../../assets/images/welcome-ceo.png";
import "./WelcomeFromCeo.css";

const WelcomeFromCeo = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  const ceoQuotes = [
    {
      quote:
        "Innovation is not just about technology; it's about creating solutions that transform industries and improve lives.",
      context: "On Innovation",
    },
    {
      quote:
        "Our success is measured not just by our growth, but by the positive impact we create for our clients and communities.",
      context: "On Success",
    },
    {
      quote:
        "The future belongs to companies that can adapt, innovate, and deliver exceptional value consistently.",
      context: "On Future Vision",
    },
  ];

  const achievements = [
    {
      icon: (
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
      ),
      title: "Industry Recognition",
      description:
        "Leading the industry with innovative solutions and exceptional quality standards.",
    },
    {
      icon: (
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
      ),
      title: "Global Presence",
      description:
        "Expanding our reach across 25+ countries with world-class manufacturing facilities.",
    },
    {
      icon: (
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
      title: "Team Excellence",
      description:
        "Building a world-class team of engineers and professionals dedicated to innovation.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description:
        "Started Swamatics with a vision to revolutionize industrial technology",
    },
    {
      year: "2015",
      title: "Global Expansion",
      description:
        "Expanded operations internationally with first overseas manufacturing facility",
    },
    {
      year: "2020",
      title: "Innovation Leadership",
      description:
        "Became industry leader in energy-efficient blower technology",
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Pioneering next-generation smart industrial solutions",
    },
  ];

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="ceo-hero-section">
        <div className="hero-background">
          <div className="hero-overlay">
            <img src={bannerImage} alt="Hero Image" />
          </div>
        </div>
        <div className="ceo-hero-container">
          <div className="hero-content">
            <br />
            <br />
            <div className="hero-badge">Message from Leadership</div>
            <h1>Welcome from Our CEO</h1>
            <p className="hero-subtitle">
              A personal message about our journey, vision, and commitment to
              excellence in industrial innovation
            </p>
          </div>
        </div>
      </section>

      {/* CEO Introduction Section */}
      <section className="ceo-introduction-section">
        <div className="ceo-introduction-container">
          <div className="introduction-grid">
            <div className="ceo-image-section">
              <div className="ceo-image-container">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="CEO Rajesh Kumar"
                  className="ceo-image"
                />
                <div className="image-decoration"></div>
              </div>
              <div className="ceo-credentials">
                <h3>Rajesh Kumar</h3>
                <p className="ceo-title">Chief Executive Officer & Founder</p>
                <div className="credentials-list">
                  <div className="credential-item">
                    <span className="credential-icon">🎓</span>
                    <span>M.Tech, Mechanical Engineering, IIT Delhi</span>
                  </div>
                  <div className="credential-item">
                    <span className="credential-icon">💼</span>
                    <span>20+ Years Industry Experience</span>
                  </div>
                  <div className="credential-item">
                    <span className="credential-icon">🏆</span>
                    <span>Industry Excellence Award 2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ceo-message-section">
              <div className="message-header">
                <h2>A Message from Our CEO</h2>
                <div className="quote-indicator">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21C3 17.4735 4.10625 14.4467 6.31875 11.92C8.53125 9.39333 11.4687 7.73333 15.125 6.94L16.5 10.28C14.6875 10.9867 13.1562 12.18 11.9062 13.86C10.6562 15.54 10.0312 17.4133 10.0312 19.48C10.0312 20.2267 10.2812 20.8467 10.7812 21.34C11.2812 21.8333 11.9062 22.08 12.6562 22.08C13.4062 22.08 14.0312 21.8333 14.5312 21.34C15.0312 20.8467 15.2812 20.2267 15.2812 19.48C15.2812 18.7333 15.0312 18.1133 14.5312 17.62C14.0312 17.1267 13.4062 16.88 12.6562 16.88C12.1562 16.88 11.7187 17.0133 11.3437 17.28L9.96875 14.92C10.7187 14.3067 11.5937 13.86 12.5937 13.58C13.5937 13.3 14.6562 13.16 15.7812 13.16C17.5937 13.16 19.1562 13.7733 20.4687 15C21.7812 16.2267 22.4375 17.7333 22.4375 19.52C22.4375 21.3067 21.7812 22.8133 20.4687 24.04C19.1562 25.2667 17.5937 25.88 15.7812 25.88C13.9687 25.88 12.4062 25.2667 11.0937 24.04C9.78125 22.8133 9.125 21.3067 9.125 19.52C9.125 17.7333 9.78125 16.2267 11.0937 15C12.4062 13.7733 13.9687 13.16 15.7812 13.16"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              <div className="ceo-message-content">
                <div className="main-message">
                  <p className="opening-quote">
                    "When I founded Swamatics in 2008, I had a simple yet
                    ambitious vision: to create industrial solutions that would
                    not just meet today's needs, but anticipate tomorrow's
                    challenges."
                  </p>

                  <p>
                    Over the past 15+ years, we've grown from a small team of
                    passionate engineers to a global leader in industrial blower
                    technology. This journey has been marked by countless
                    innovations, strategic partnerships, and most importantly,
                    the trust our clients have placed in us.
                  </p>

                  <p>
                    Today, as we serve clients across 25+ countries and continue
                    to push the boundaries of what's possible in industrial
                    technology, I'm more excited than ever about our future.
                    We're not just building products; we're crafting solutions
                    that drive efficiency, sustainability, and growth for
                    industries worldwide.
                  </p>

                  <p>
                    Our commitment to excellence, innovation, and customer
                    success remains unwavering. Every project we undertake,
                    every solution we develop, and every relationship we build
                    is guided by our core values and our dedication to making a
                    positive impact.
                  </p>
                </div>

                <div className="rotating-quotes">
                  <div className="quote-container">
                    <div className="quote-text">
                      "{ceoQuotes[activeQuote].quote}"
                    </div>
                    <div className="quote-context">
                      — {ceoQuotes[activeQuote].context}
                    </div>
                  </div>
                  <div className="quote-navigation">
                    {ceoQuotes.map((_, index) => (
                      <button
                        key={index}
                        className={`quote-dot ${
                          activeQuote === index ? "active" : ""
                        }`}
                        onClick={() => setActiveQuote(index)}
                      />
                    ))}
                  </div>
                </div>

                <div className="message-signature">
                  <div className="signature-line">
                    <span className="signature-name">Rajesh Kumar</span>
                    <span className="signature-title">
                      CEO & Founder, Swamatics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Leadership Section */}
      <section className="vision-leadership-section">
        <div className="vision-leadership-container">
          <div className="section-header">
            <h2>Leadership Vision</h2>
            <p>Guiding principles that drive our organization forward</p>
          </div>

          <div className="leadership-grid">
            <div className="vision-card">
              <div className="card-icon">
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
              <h3>Future-Focused Strategy</h3>
              <p>
                We don't just respond to market changes; we anticipate them. Our
                strategic planning focuses on emerging technologies and evolving
                customer needs to ensure we're always ahead of the curve.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-icon">
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
              <h3>Innovation Culture</h3>
              <p>
                Innovation isn't just a department at Swamatics—it's embedded in
                our DNA. We foster a culture where every team member is
                empowered to think creatively and challenge conventional
                approaches.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-icon">
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
              <h3>Sustainable Growth</h3>
              <p>
                Our growth strategy balances ambitious expansion with
                environmental responsibility. We're committed to developing
                solutions that drive both business success and environmental
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="achievements-container">
          <div className="section-header">
            <h2>Key Achievements</h2>
            <p>Milestones that define our journey of excellence</p>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-timeline-section">
        <div className="journey-timeline-container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our path to industry leadership</p>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="milestones-container">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`milestone-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className="milestone-content">
                    <div className="milestone-year">{milestone.year}</div>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                  <div className="milestone-dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="ceo-cta-section">
        <div className="ceo-cta-container">
          <div className="cta-content">
            <h2>Join Us on Our Journey</h2>
            <p>
              Whether you're a potential client, partner, or team member, we
              invite you to be part of our continued growth and success.
              Together, we can build a more efficient and sustainable industrial
              future.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <span>Partner With Us</span>
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

export default WelcomeFromCeo;
