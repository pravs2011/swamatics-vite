import React, { useState, useEffect } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaStar,
  FaQuoteLeft,
  FaPlay,
  FaPause,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMagic,
  FaFire,
  FaStarOfLife,
  FaAward,
  FaRocket,
  FaTrophy,
  FaMedal,
  FaGem,
  FaCrown,
  FaShieldAlt,
  FaLightbulb,
  FaBolt,
} from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  // Creative testimonials with cinematic storytelling
  const testimonialsData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Chief Operations Officer",
      company: "Steel Dynamics India Ltd.",
      industry: "Manufacturing",
      rating: 5,
      quote:
        "SWAM transformed our entire operation. From chaos to precision, from waste to efficiency.",
      story:
        "Our steel plant was struggling with inefficient pneumatic systems. SWAM didn't just provide equipment - they reimagined our entire workflow. The results? 35% energy savings, zero downtime in 18 months, and a production line that runs like clockwork.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      location: "Mumbai, India",
      date: "March 2024",
      impact: "35% Energy Savings",
      experience: "3 Years",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      icon: <FaFire />,
      bgPattern: "manufacturing",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      title: "Plant Manager",
      company: "GreenTech Cement Co.",
      industry: "Sustainability",
      rating: 5,
      quote:
        "From polluter to pioneer - SWAM helped us lead the green revolution in cement manufacturing.",
      story:
        "We needed to cut emissions without cutting production. SWAM's innovative solutions delivered both. Our facilities now run on 25% less energy while producing 30% more cement. We've gone from industry laggard to sustainability leader.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=200&h=200&fit=crop&crop=face",
      location: "Chennai, India",
      date: "January 2024",
      impact: "25% Emission Reduction",
      experience: "4 Years",
      gradientFrom: "#11998e",
      gradientTo: "#38ef7d",
      icon: <FaGem />,
      bgPattern: "sustainability",
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Engineering Director",
      company: "PharmaCore International",
      industry: "Pharmaceutical",
      rating: 5,
      quote:
        "Precision at the molecular level. SWAM doesn't just meet pharma standards - they redefine them.",
      story:
        "In pharmaceuticals, 99.9% isn't good enough. SWAM delivered 99.99% purity in our powder handling. Their FDA-compliant systems turned our most challenging process into our most reliable one.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      location: "Singapore",
      date: "February 2024",
      impact: "99.99% Purity",
      experience: "2 Years",
      gradientFrom: "#ffecd2",
      gradientTo: "#fcb69f",
      icon: <FaShieldAlt />,
      bgPattern: "pharmaceutical",
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Production Head",
      company: "AgriTech Processing Ltd.",
      industry: "Food Tech",
      rating: 5,
      quote:
        "From farm to table, SWAM ensures every grain matters and nothing goes to waste.",
      story:
        "Food safety isn't negotiable. SWAM's hygienic systems eliminated contamination risks while boosting our processing speed by 40%. Every grain now has a purpose, and waste is history.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      location: "Pune, India",
      date: "April 2024",
      impact: "Zero Contamination",
      experience: "2 Years",
      gradientFrom: "#a8edea",
      gradientTo: "#fed6e3",
      icon: <FaStarOfLife />,
      bgPattern: "food",
    },
    {
      id: 5,
      name: "David Thompson",
      title: "Operations Manager",
      company: "PowerGen Solutions",
      industry: "Energy",
      rating: 5,
      quote:
        "When the grid depends on you, reliability isn't optional. SWAM made the impossible, inevitable.",
      story:
        "Power plants can't afford downtime. SWAM's predictive systems warned us of issues before they happened. 18 months of uninterrupted operation and counting. That's not luck - that's engineering.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      location: "Texas, USA",
      date: "December 2023",
      impact: "Zero Downtime",
      experience: "18 Months",
      gradientFrom: "#ff9a9e",
      gradientTo: "#fecfef",
      icon: <FaBolt />,
      bgPattern: "energy",
    },
    {
      id: 6,
      name: "Elena Rodriguez",
      title: "Innovation Director",
      company: "Future Materials Inc.",
      industry: "Innovation",
      rating: 5,
      quote:
        "SWAM doesn't just solve today's problems - they anticipate tomorrow's breakthroughs.",
      story:
        "We push materials to their limits. SWAM pushed their technology beyond ours. Their custom solutions enabled discoveries we thought were impossible. Innovation needs a partner who thinks differently.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
      location: "California, USA",
      date: "May 2024",
      impact: "3 Breakthroughs",
      experience: "1 Year",
      gradientFrom: "#fa709a",
      gradientTo: "#fee140",
      icon: <FaRocket />,
      bgPattern: "innovation",
    },
  ];

  const industries = [
    "all",
    "Manufacturing",
    "Sustainability",
    "Pharmaceutical",
    "Food Tech",
    "Energy",
    "Innovation",
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, testimonialsData.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const getFilteredTestimonials = () => {
    if (selectedIndustry === "all") return testimonialsData;
    return testimonialsData.filter(
      (testimonial) => testimonial.industry === selectedIndustry
    );
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar key={i} className={i < rating ? "star-filled" : "star-empty"} />
      ));
  };

  const featuredTestimonial = testimonialsData[currentTestimonial];

  return (
    <MainTemplate>
      {/* Cinematic Hero Section */}
      <section className="testimonials-cinematic-hero">
        <div className="cinematic-bg">
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i}`} />
            ))}
          </div>
        </div>

        <div className="hero-content-wrapper">
          <div className="magical-badge">
            <FaMagic className="magic-icon" />
            <span>Stories of Transformation</span>
          </div>

          <h1 className="cinematic-title">
            Where <span className="highlight-text">Dreams</span> Meet
            <br />
            <span className="gradient-text">Engineering Excellence</span>
          </h1>

          <p className="hero-subtitle">
            Every testimonial is a journey. Every story is a breakthrough.
            Discover how SWAM turns industrial challenges into success stories.
          </p>

          <div className="hero-stats-cosmic">
            <div className="stat-cosmic">
              <div className="stat-icon">
                <FaCrown />
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Success Stories</div>
            </div>
            <div className="stat-cosmic">
              <div className="stat-icon">
                <FaTrophy />
              </div>
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-cosmic">
              <div className="stat-icon">
                <FaAward />
              </div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="featured-testimonial-section">
        <div className="carousel-container">
          <div className="carousel-header">
            <h2>Featured Success Story</h2>
            <div className="carousel-controls">
              <button
                className={`play-pause-btn ${
                  isAutoPlay ? "playing" : "paused"
                }`}
                onClick={() => setIsAutoPlay(!isAutoPlay)}
              >
                {isAutoPlay ? <FaPause /> : <FaPlay />}
              </button>
              <button className="nav-btn prev-btn" onClick={prevTestimonial}>
                <FaChevronLeft />
              </button>
              <button className="nav-btn next-btn" onClick={nextTestimonial}>
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div
            className="featured-card"
            style={{
              background: `linear-gradient(135deg, ${featuredTestimonial.gradientFrom}, ${featuredTestimonial.gradientTo})`,
            }}
          >
            <div
              className={`pattern-overlay pattern-${featuredTestimonial.bgPattern}`}
            ></div>

            <div className="featured-content">
              <div className="testimonial-header">
                <div className="customer-avatar">
                  <img
                    src={featuredTestimonial.avatar}
                    alt={featuredTestimonial.name}
                  />
                  <div className="avatar-ring"></div>
                </div>

                <div className="customer-info">
                  <h3>{featuredTestimonial.name}</h3>
                  <p className="title">{featuredTestimonial.title}</p>
                  <p className="company">{featuredTestimonial.company}</p>
                  <div className="rating-stars">
                    {renderStars(featuredTestimonial.rating)}
                  </div>
                </div>

                <div className="testimonial-icon">
                  {featuredTestimonial.icon}
                </div>
              </div>

              <div className="quote-section">
                <FaQuoteLeft className="quote-mark" />
                <blockquote>{featuredTestimonial.quote}</blockquote>
              </div>

              <div className="story-section">
                <p>{featuredTestimonial.story}</p>
              </div>

              <div className="testimonial-metrics">
                <div className="metric">
                  <FaMapMarkerAlt />
                  <span>{featuredTestimonial.location}</span>
                </div>
                <div className="metric">
                  <FaCalendarAlt />
                  <span>{featuredTestimonial.date}</span>
                </div>
                <div className="metric impact">
                  <FaBolt />
                  <span>{featuredTestimonial.impact}</span>
                </div>
                <div className="metric">
                  <FaMedal />
                  <span>{featuredTestimonial.experience}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`dot ${
                  index === currentTestimonial ? "active" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter Section */}
      <section className="industry-filter-section">
        <div className="filter-container">
          <h3>Explore by Industry</h3>
          <div className="industry-pills">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`industry-pill ${
                  selectedIndustry === industry ? "active" : ""
                }`}
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry === "all" ? "All Stories" : industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid-section">
        <div className="grid-container">
          <div className="testimonials-masonry">
            {getFilteredTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-tile ${
                  hoveredCard === testimonial.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                }}
              >
                <div
                  className={`tile-pattern pattern-${testimonial.bgPattern}`}
                ></div>

                <div className="tile-header">
                  <div className="industry-badge">
                    {testimonial.icon}
                    <span>{testimonial.industry}</span>
                  </div>
                  <div className="rating-mini">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <div className="tile-content">
                  <h4 className="tile-quote">"{testimonial.quote}"</h4>

                  <div className="customer-mini">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                    <div>
                      <p className="name">{testimonial.name}</p>
                      <p className="company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>

                <div className="tile-footer">
                  <div className="impact-badge">
                    <FaLightbulb />
                    <span>{testimonial.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="testimonials-cta">
        <div className="cta-cosmic">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <FaRocket className="cta-icon" />
            <h2>Ready to Create Your Success Story?</h2>
            <p>
              Join the ranks of industry leaders who chose transformation over
              tradition.
            </p>
            <button className="cta-button">
              <span>Start Your Journey</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default Testimonials;
