import React, { useState } from "react";
import MainTemplate from "../../components/Templates/MainTemplates";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaGlobe,
  FaHome,
  FaAward,
  FaIndustry,
  FaHandshake,
  FaCertificate,
  FaRocket,
  FaStar,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaSearch,
  FaTrophy,
  FaNetworkWired,
  FaLightbulb,
} from "react-icons/fa";
import "./Events.css";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalEvent, setModalEvent] = useState(null);

  // Sample events data
  const eventsData = {
    2024: [
      {
        id: 1,
        title: "Industrial Automation Summit 2024",
        category: "international",
        date: "March 15-17, 2024",
        location: "Singapore",
        attendees: 500,
        type: "Conference",
        description:
          "Leading industrial automation conference featuring latest technologies and innovations in manufacturing.",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        highlights: [
          "AI in Manufacturing",
          "IoT Solutions",
          "Automation Trends",
        ],
        status: "completed",
      },
      {
        id: 2,
        title: "India Manufacturing Excellence Awards",
        category: "domestic",
        date: "April 22-23, 2024",
        location: "Mumbai, India",
        attendees: 300,
        type: "Awards Ceremony",
        description:
          "Celebrating excellence in Indian manufacturing sector with industry leaders and innovators.",
        image:
          "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=600&fit=crop",
        highlights: ["Excellence Awards", "Industry Recognition", "Networking"],
        status: "completed",
      },
      {
        id: 3,
        title: "SWAM Technology Showcase",
        category: "domestic",
        date: "June 10-12, 2024",
        location: "Noida, India",
        attendees: 250,
        type: "Product Launch",
        description:
          "Showcasing our latest rotary blower innovations and technological advancements.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        highlights: [
          "New Product Launch",
          "Live Demonstrations",
          "Technical Sessions",
        ],
        status: "completed",
      },
      {
        id: 4,
        title: "Global Energy Efficiency Expo",
        category: "international",
        date: "September 5-8, 2024",
        location: "Frankfurt, Germany",
        attendees: 1200,
        type: "Exhibition",
        description:
          "International exhibition focusing on energy-efficient solutions and sustainable technologies.",
        image:
          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
        highlights: [
          "Energy Solutions",
          "Sustainability",
          "Global Partnerships",
        ],
        status: "completed",
      },
      {
        id: 5,
        title: "Industrial Innovation Conference",
        category: "domestic",
        date: "November 18-19, 2024",
        location: "Bangalore, India",
        attendees: 400,
        type: "Conference",
        description:
          "Annual conference bringing together industry experts to discuss latest innovations.",
        image:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
        highlights: [
          "Innovation Showcase",
          "Expert Panels",
          "Future Technologies",
        ],
        status: "upcoming",
      },
      {
        id: 6,
        title: "Asia Pacific Industrial Expo",
        category: "international",
        date: "December 8-11, 2024",
        location: "Tokyo, Japan",
        attendees: 800,
        type: "Exhibition",
        description:
          "Premier industrial exhibition in the Asia Pacific region showcasing cutting-edge technologies.",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        highlights: [
          "Regional Expansion",
          "Technology Display",
          "Market Insights",
        ],
        status: "upcoming",
      },
    ],
    2023: [
      {
        id: 7,
        title: "Smart Manufacturing Summit",
        category: "international",
        date: "February 20-22, 2023",
        location: "Dubai, UAE",
        attendees: 600,
        type: "Summit",
        description:
          "Regional summit focusing on smart manufacturing technologies and digital transformation.",
        image:
          "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop",
        highlights: [
          "Digital Transformation",
          "Smart Technologies",
          "Industry 4.0",
        ],
        status: "completed",
      },
      {
        id: 8,
        title: "Indian Engineering Excellence",
        category: "domestic",
        date: "May 15-16, 2023",
        location: "Chennai, India",
        attendees: 350,
        type: "Conference",
        description:
          "Celebrating engineering excellence and innovation in the Indian manufacturing sector.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        highlights: [
          "Engineering Innovation",
          "Best Practices",
          "Technical Excellence",
        ],
        status: "completed",
      },
      {
        id: 9,
        title: "Global Industrial Partnership Forum",
        category: "international",
        date: "August 12-14, 2023",
        location: "London, UK",
        attendees: 450,
        type: "Forum",
        description:
          "International forum for establishing strategic partnerships and collaborations.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        highlights: [
          "Strategic Partnerships",
          "Global Collaborations",
          "Business Development",
        ],
        status: "completed",
      },
    ],
    2022: [
      {
        id: 10,
        title: "Automation & Robotics Expo",
        category: "international",
        date: "March 10-13, 2022",
        location: "Shanghai, China",
        attendees: 900,
        type: "Exhibition",
        description:
          "Major exhibition showcasing latest automation and robotics technologies.",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        highlights: [
          "Robotics Innovation",
          "Automation Solutions",
          "Future Manufacturing",
        ],
        status: "completed",
      },
      {
        id: 11,
        title: "India Industrial Growth Summit",
        category: "domestic",
        date: "July 25-26, 2022",
        location: "New Delhi, India",
        attendees: 280,
        type: "Summit",
        description:
          "National summit focusing on industrial growth strategies and market expansion.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        highlights: [
          "Growth Strategies",
          "Market Expansion",
          "Industry Insights",
        ],
        status: "completed",
      },
    ],
  };

  const availableYears = Object.keys(eventsData).sort((a, b) => b - a);

  const getFilteredEvents = () => {
    const yearEvents = eventsData[selectedYear] || [];
    if (selectedCategory === "all") return yearEvents;
    return yearEvents.filter((event) => event.category === selectedCategory);
  };

  const openModal = (event) => {
    setModalEvent(event);
    setModalImage(event.image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
    setModalEvent(null);
  };

  const getEventIcon = (type) => {
    switch (type.toLowerCase()) {
      case "conference":
        return <FaUsers />;
      case "exhibition":
        return <FaIndustry />;
      case "awards ceremony":
        return <FaAward />;
      case "summit":
        return <FaRocket />;
      case "forum":
        return <FaHandshake />;
      case "product launch":
        return <FaLightbulb />;
      default:
        return <FaCalendarAlt />;
    }
  };

  const getCategoryStats = () => {
    const yearEvents = eventsData[selectedYear] || [];
    const domestic = yearEvents.filter((e) => e.category === "domestic").length;
    const international = yearEvents.filter(
      (e) => e.category === "international"
    ).length;
    const totalAttendees = yearEvents.reduce((sum, e) => sum + e.attendees, 0);

    return {
      domestic,
      international,
      total: domestic + international,
      totalAttendees,
    };
  };

  const stats = getCategoryStats();

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="events-hero-section">
        <div className="events-hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <FaStar className="badge-icon" />
              <span>Global Events & Exhibitions</span>
            </div>
            <h1 className="hero-title">
              Connecting Industries
              <span className="gradient-text"> Worldwide</span>
            </h1>
            <p className="hero-description">
              Join us at premier industrial events, exhibitions, and conferences
              around the globe. Discover innovations, forge partnerships, and be
              part of the future of manufacturing.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{stats.total}</div>
                <div className="stat-label">Events in {selectedYear}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  {stats.totalAttendees.toLocaleString()}
                </div>
                <div className="stat-label">Total Attendees</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="events-showcase">
              <div className="showcase-bg"></div>
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <FaGlobe />
                  <span>Global Reach</span>
                </div>
                <div className="floating-card card-2">
                  <FaNetworkWired />
                  <span>Networking</span>
                </div>
                <div className="floating-card card-3">
                  <FaTrophy />
                  <span>Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="events-filter-section">
        <div className="container">
          <div className="filter-controls">
            <div className="filter-group">
              <label className="filter-label">
                <FaFilter />
                <span>Category</span>
              </label>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${
                    selectedCategory === "all" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Events
                </button>
                <button
                  className={`filter-btn ${
                    selectedCategory === "domestic" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("domestic")}
                >
                  <FaHome />
                  Domestic
                </button>
                <button
                  className={`filter-btn ${
                    selectedCategory === "international" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("international")}
                >
                  <FaGlobe />
                  International
                </button>
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">
                <FaCalendarAlt />
                <span>Year</span>
              </label>
              <div className="year-selector">
                {availableYears.map((year) => (
                  <button
                    key={year}
                    className={`year-btn ${
                      selectedYear === year ? "active" : ""
                    }`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="category-overview">
            <div className="overview-card domestic">
              <div className="overview-icon">
                <FaHome />
              </div>
              <div className="overview-content">
                <h3>Domestic Events</h3>
                <div className="overview-number">{stats.domestic}</div>
                <p>Events across India</p>
              </div>
            </div>

            <div className="overview-card international">
              <div className="overview-icon">
                <FaGlobe />
              </div>
              <div className="overview-content">
                <h3>International Events</h3>
                <div className="overview-number">{stats.international}</div>
                <p>Global exhibitions & conferences</p>
              </div>
            </div>

            <div className="overview-card total">
              <div className="overview-icon">
                <FaUsers />
              </div>
              <div className="overview-content">
                <h3>Total Attendees</h3>
                <div className="overview-number">
                  {stats.totalAttendees.toLocaleString()}
                </div>
                <p>Industry professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="events-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>
              {selectedCategory === "all"
                ? "All Events"
                : selectedCategory === "domestic"
                ? "Domestic Events"
                : "International Events"}{" "}
              in {selectedYear}
            </h2>
            <p>
              {selectedCategory === "domestic"
                ? "Strengthening partnerships across India with innovative industrial solutions"
                : selectedCategory === "international"
                ? "Expanding global footprint through premier international exhibitions and conferences"
                : "Comprehensive showcase of our participation in domestic and international events"}
            </p>
          </div>

          <div className="events-grid">
            {getFilteredEvents().map((event) => (
              <div
                key={event.id}
                className={`event-card ${event.category} ${event.status}`}
              >
                <div className="event-image" onClick={() => openModal(event)}>
                  <img src={event.image} alt={event.title} />
                  <div className="image-overlay">
                    <FaEye className="view-icon" />
                    <span>View Details</span>
                  </div>
                  <div className="event-badge">
                    {getEventIcon(event.type)}
                    <span>{event.type}</span>
                  </div>
                  <div className={`status-badge ${event.status}`}>
                    {event.status === "completed" ? "Completed" : "Upcoming"}
                  </div>
                </div>

                <div className="event-content">
                  <div className="event-header">
                    <h3>{event.title}</h3>
                    <div className="event-category">
                      {event.category === "domestic" ? <FaHome /> : <FaGlobe />}
                      <span>
                        {event.category === "domestic"
                          ? "Domestic"
                          : "International"}
                      </span>
                    </div>
                  </div>

                  <p className="event-description">{event.description}</p>

                  <div className="event-details">
                    <div className="detail-item">
                      <FaCalendarAlt />
                      <span>{event.date}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt />
                      <span>{event.location}</span>
                    </div>
                    <div className="detail-item">
                      <FaUsers />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="event-highlights">
                    <h4>Key Highlights</h4>
                    <div className="highlights-list">
                      {event.highlights.map((highlight, index) => (
                        <span key={index} className="highlight-tag">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredEvents().length === 0 && (
            <div className="no-events">
              <div className="no-events-icon">
                <FaCalendarAlt />
              </div>
              <h3>No Events Found</h3>
              <p>
                No events available for the selected filters. Try adjusting your
                selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us at Upcoming Events</h2>
            <p>
              Stay updated with our latest event participation and connect with
              us at industry gatherings worldwide.
            </p>
            <div className="cta-actions">
              <button className="cta-primary">
                <FaCalendarAlt />
                <span>View Event Calendar</span>
              </button>
              <button className="cta-secondary">
                <FaCertificate />
                <span>Partnership Opportunities</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {isModalOpen && modalEvent && (
        <div className="event-modal-overlay" onClick={closeModal}>
          <div
            className="event-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>

            <div className="modal-content">
              <div className="modal-image-section">
                <img src={modalImage} alt={modalEvent.title} />
                <div className="modal-image-info">
                  <div className="modal-badges">
                    <span className={`category-badge ${modalEvent.category}`}>
                      {modalEvent.category === "domestic" ? (
                        <FaHome />
                      ) : (
                        <FaGlobe />
                      )}
                      {modalEvent.category === "domestic"
                        ? "Domestic"
                        : "International"}
                    </span>
                    <span className={`status-badge ${modalEvent.status}`}>
                      {modalEvent.status === "completed"
                        ? "Completed"
                        : "Upcoming"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-details">
                <h2>{modalEvent.title}</h2>
                <p className="modal-description">{modalEvent.description}</p>

                <div className="modal-info-grid">
                  <div className="info-item">
                    <FaCalendarAlt />
                    <div>
                      <span className="info-label">Date</span>
                      <span className="info-value">{modalEvent.date}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaMapMarkerAlt />
                    <div>
                      <span className="info-label">Location</span>
                      <span className="info-value">{modalEvent.location}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <FaUsers />
                    <div>
                      <span className="info-label">Attendees</span>
                      <span className="info-value">
                        {modalEvent.attendees} professionals
                      </span>
                    </div>
                  </div>
                  <div className="info-item">
                    {getEventIcon(modalEvent.type)}
                    <div>
                      <span className="info-label">Type</span>
                      <span className="info-value">{modalEvent.type}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-highlights">
                  <h3>Key Highlights</h3>
                  <div className="highlights-grid">
                    {modalEvent.highlights.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        <FaStar />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default Events;
