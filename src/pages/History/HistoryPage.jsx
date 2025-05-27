import React, { useState, useEffect } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import logo from "../../assets/images/logo.png";
import hybridHelicalBlower from "../../assets/images/SuperHelicalHybridBlower.png";
import turboBlowers from "../../assets/images/TurboBlowers-integrallyGearedType.png";
import vacuumPumps from "../../assets/images/VacuumPumpsWithSecondarySuction.png";
import "./HistoryPage.css";

const HistoryPage = () => {
  const [activeYear, setActiveYear] = useState(1978);
  const [activeCategory, setActiveCategory] = useState("All");

  const historyData = [
    {
      year: 1978,
      title: "Foundation",
      subtitle: "OPENING",
      description:
        "Swam Pneumatics Pvt. Ltd Company founded by Mr. S.K Gambhir.",
      details:
        "The journey began with a vision to revolutionize industrial blower technology. Starting with a small team of dedicated engineers, we laid the foundation for what would become a global leader in pneumatic solutions.",
      achievements: ["Company established", "First facility", "15 engineers"],
      image: logo,
      category: "Foundation",
      color: "#3b82f6",
    },
    {
      year: 1982,
      title: "Corporate Offices",
      subtitle: "CORPORATE OFFICES",
      description: "Corporate Offices established Noida.",
      details:
        "Expansion of operations with the establishment of our corporate headquarters in Noida, marking the beginning of our structured growth and professional management approach.",
      achievements: [
        "Corporate HQ",
        "Management structure",
        "Strategic planning",
      ],
      image: hybridHelicalBlower,
      category: "Expansion",
      color: "#10b981",
    },
    {
      year: 1996,
      title: "Company Growth",
      subtitle: "Company Growth",
      description: "The growth of Company After Joining Mr. Abhishek Gambhir.",
      details:
        "A new era of innovation and expansion began with the joining of Mr. Abhishek Gambhir, bringing fresh perspectives and driving the company towards technological advancement.",
      achievements: [
        "Leadership expansion",
        "Innovation focus",
        "Market growth",
      ],
      image: turboBlowers,
      category: "Leadership",
      color: "#8b5cf6",
    },
    {
      year: 2000,
      title: "Manufacturing Excellence",
      subtitle: "Manufacturing",
      description: "Introduction of ISO standards – Manufacturing.",
      details:
        "Implementation of international quality standards marked our commitment to excellence. ISO certification ensured our products met global quality benchmarks.",
      achievements: [
        "ISO certification",
        "Quality systems",
        "International standards",
      ],
      image: vacuumPumps,
      category: "Quality",
      color: "#f59e0b",
    },
    {
      year: 2002,
      title: "Facility Expansion",
      subtitle: "Established",
      description: "Second Factory Established, Noida",
      details:
        "Doubling our manufacturing capacity with the establishment of our second production facility, enabling us to meet growing market demands and expand our product portfolio.",
      achievements: [
        "Second factory",
        "Increased capacity",
        "Production scaling",
      ],
      image: hybridHelicalBlower,
      category: "Expansion",
      color: "#10b981",
    },
    {
      year: 2003,
      title: "Manufacturing Capacity",
      subtitle: "Capacity",
      description:
        "Swam manufactured large blowers 30,000 capacity & its manufacturing capacity was expanded in the existing plants.",
      details:
        "Breakthrough in large-scale manufacturing with the production of 30,000 capacity blowers, establishing our position as a major player in industrial pneumatics.",
      achievements: [
        "30,000 capacity blowers",
        "Expanded facilities",
        "Large-scale production",
      ],
      image: turboBlowers,
      category: "Innovation",
      color: "#ef4444",
    },
    {
      year: 2004,
      title: "Vacuum Technology",
      subtitle: "Manufacturing",
      description:
        "The vacuum boosters in combination with conventional Vacuum mechanical pumps boost high vacuum upto one micron. Ideal for low cost high displacement and vacuum from 50 Torr to one micron",
      details:
        "Revolutionary advancement in vacuum technology, developing systems capable of achieving ultra-high vacuum levels, opening new markets and applications.",
      achievements: [
        "Vacuum boosters",
        "High vacuum technology",
        "New applications",
      ],
      image: vacuumPumps,
      category: "Innovation",
      color: "#ef4444",
    },
    {
      year: 2005,
      title: "Safety Standards",
      subtitle: "OHSAS",
      description: "Introduction of ISO standards – OHSAS",
      details:
        "Implementation of Occupational Health and Safety Assessment Series (OHSAS) standards, demonstrating our commitment to employee safety and operational excellence.",
      achievements: [
        "OHSAS certification",
        "Safety protocols",
        "Employee welfare",
      ],
      image: logo,
      category: "Quality",
      color: "#f59e0b",
    },
    {
      year: 2006,
      title: "Technology Upgrade",
      subtitle: "CNC'S",
      description: "Upgrade plants to CNC machines with over CNC's",
      details:
        "Major technological leap with the introduction of Computer Numerical Control (CNC) machines, enhancing precision, efficiency, and production capabilities.",
      achievements: [
        "CNC machines",
        "Precision manufacturing",
        "Technology upgrade",
      ],
      image: hybridHelicalBlower,
      category: "Technology",
      color: "#06b6d4",
    },
    {
      year: 2009,
      title: "Truck Blower Innovation",
      subtitle: "TRUCK BLOWER",
      description:
        "Introduction of Blower products … Truck Blower:- Swam bulk vehicle truck blowers have been specifically designed to meet the operating requirements of bulk and silo vehicles in the generation of pressure and vacuum needed for the pneumatic loading and unloading of these.",
      details:
        "Specialized product development for the transportation industry, creating custom solutions for bulk material handling and pneumatic conveying systems.",
      achievements: [
        "Truck blowers",
        "Bulk handling",
        "Transportation solutions",
      ],
      image: turboBlowers,
      category: "Innovation",
      color: "#ef4444",
    },
    {
      year: 2010,
      title: "Liquid Ring Pumps",
      subtitle: "PUMPS",
      description:
        "Started manufacturing liquid Ring Vacuum Pumps. • Capacity 36000 M3 / Hr. • Vacuum upto 90%. • Pressure upto 1.1 bar'g' in single stage. • Suitable for Positive and Negative conveying and Boosting.",
      details:
        "Expansion into liquid ring vacuum pump technology, offering high-capacity solutions for diverse industrial applications with superior performance specifications.",
      achievements: [
        "36,000 M3/Hr capacity",
        "90% vacuum capability",
        "Dual conveying systems",
      ],
      image: vacuumPumps,
      category: "Innovation",
      color: "#ef4444",
    },
    {
      year: 2012,
      title: "Advanced Technology",
      subtitle: "ESTABLISHED",
      description:
        "Started Dry Screw Vacuum Pumps. 3rd Factory established Noida.",
      details:
        "Introduction of cutting-edge dry screw vacuum pump technology alongside the establishment of our third manufacturing facility, marking significant technological and operational advancement.",
      achievements: ["Dry screw pumps", "Third factory", "Advanced technology"],
      image: logo,
      category: "Expansion",
      color: "#10b981",
    },
    {
      year: 2014,
      title: "Global Presence",
      subtitle: "ESTABLISHED",
      description: "Established Swam Middle East FZE Dubai…….",
      details:
        "International expansion with the establishment of our Middle East operations in Dubai, marking our entry into global markets and international business operations.",
      achievements: [
        "Dubai office",
        "Middle East presence",
        "Global expansion",
      ],
      image: hybridHelicalBlower,
      category: "Global",
      color: "#ec4899",
    },
    {
      year: 2015,
      title: "International Growth",
      subtitle: "ESTABLISHED",
      description:
        "• 4th Factory established Noida. • Established Swam International Pvt. Ltd. ( Australia).",
      details:
        "Dual expansion with the fourth manufacturing facility in India and establishment of operations in Australia, strengthening our global footprint and production capacity.",
      achievements: [
        "Fourth factory",
        "Australia operations",
        "International presence",
      ],
      image: turboBlowers,
      category: "Global",
      color: "#ec4899",
    },
    {
      year: 2016,
      title: "Next-Gen Technology",
      subtitle: "TURBO BLOWER, SCREW BLOWER",
      description:
        "Introduction of Blower products… Turbo Blower:- High efficiency Swam Turbo Blowers are most advanced single stage centrifugal machine based on high speed focused specialized technology oil less operation. Screw Blower:- Most advanced energy efficient Blower with over 25% saving in power consumption to conventional blowers. Available in wide sizes upto 9000 m3 / hr.",
      details:
        "Revolutionary product launches featuring turbo and screw blower technologies, delivering unprecedented energy efficiency and performance improvements for industrial applications.",
      achievements: [
        "Turbo blowers",
        "25% energy savings",
        "9000 m3/hr capacity",
      ],
      image: vacuumPumps,
      category: "Innovation",
      color: "#ef4444",
    },
  ];

  const categories = [
    { name: "All", color: "#6b7280" },
    { name: "Foundation", color: "#3b82f6" },
    { name: "Expansion", color: "#10b981" },
    { name: "Innovation", color: "#ef4444" },
    { name: "Quality", color: "#f59e0b" },
    { name: "Technology", color: "#06b6d4" },
    { name: "Leadership", color: "#8b5cf6" },
    { name: "Global", color: "#ec4899" },
  ];

  const filteredHistory =
    activeCategory === "All"
      ? historyData
      : historyData.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const filtered =
      category === "All"
        ? historyData
        : historyData.filter((item) => item.category === category);
    if (filtered.length > 0) {
      setActiveYear(filtered[0].year);
    }
  };

  useEffect(() => {
    if (
      historyData.length > 0 &&
      !historyData.find((item) => item.year === activeYear)
    ) {
      setActiveYear(historyData[0].year);
    }
  }, [historyData, activeYear]);

  const activeItem =
    historyData.find((item) => item.year === activeYear) || historyData[0];

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="history-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>Our Journey</span>
            </div>
            <h1>45+ Years of Excellence</h1>
            <p>
              From humble beginnings in 1978 to becoming a global leader in
              industrial pneumatics. Discover the remarkable journey of
              innovation, growth, and excellence that defines Swamatics.
            </p>
            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-number">1978</div>
                <div className="metric-label">Founded</div>
              </div>
              <div className="metric">
                <div className="metric-number">4</div>
                <div className="metric-label">Factories</div>
              </div>
              <div className="metric">
                <div className="metric-number">25+</div>
                <div className="metric-label">Countries</div>
              </div>
              <div className="metric">
                <div className="metric-number">500+</div>
                <div className="metric-label">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="category-section">
        <div className="category-container">
          <h2>Explore Our Journey</h2>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`category-filter ${
                  activeCategory === category.name ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category.name)}
                style={{ "--category-color": category.color }}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          {/* Timeline Navigation */}
          <div className="timeline-nav">
            <div className="timeline-line"></div>
            {filteredHistory.map((item, index) => (
              <div
                key={item.year}
                className={`timeline-node ${
                  activeYear === item.year ? "active" : ""
                }`}
                onClick={() => setActiveYear(item.year)}
                style={{ "--node-color": item.color }}
              >
                <div className="node-dot"></div>
                <div className="node-content">
                  <div className="node-year">{item.year}</div>
                  <div className="node-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="timeline-content">
            <div className="content-card">
              <div className="content-header">
                <div
                  className="content-year"
                  style={{ color: activeItem.color }}
                >
                  {activeItem.year}
                </div>
                <div
                  className="content-category"
                  style={{ backgroundColor: activeItem.color }}
                >
                  {activeItem.category}
                </div>
              </div>

              <div className="content-main">
                <div className="content-image">
                  <img src={activeItem.image} alt={activeItem.title} />
                  <div
                    className="image-badge"
                    style={{ backgroundColor: activeItem.color }}
                  >
                    {activeItem.year}
                  </div>
                </div>

                <div className="content-info">
                  <h3>{activeItem.title}</h3>
                  <div className="content-subtitle">{activeItem.subtitle}</div>
                  <p className="content-description">
                    {activeItem.description}
                  </p>
                  <p className="content-details">{activeItem.details}</p>

                  <div className="achievements">
                    <h4>Key Achievements</h4>
                    <div className="achievement-list">
                      {activeItem.achievements.map((achievement, index) => (
                        <div key={index} className="achievement-item">
                          <div
                            className="achievement-icon"
                            style={{ backgroundColor: activeItem.color }}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M9 12L11 14L15 10"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <h2>Our Impact Over the Years</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Served</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="7"
                    y="9"
                    width="10"
                    height="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="stat-number">4</div>
              <div className="stat-label">Manufacturing Plants</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Innovations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Continue Our Legacy of Excellence</h2>
            <p>
              Join us as we continue to innovate and lead the industry into the
              future. Discover how our rich history of excellence can benefit
              your business.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">
                <span>Explore Products</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button className="cta-secondary">
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default HistoryPage;
