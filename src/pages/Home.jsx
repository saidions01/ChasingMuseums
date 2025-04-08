import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaVideo } from "react-icons/fa";
import ReactPlayer from "react-player";
import { Link, useLocation } from "react-router-dom";
import "../styles/Home.css";
import museumImage from "../assets/images/img.png";
import { GiAbstract024, GiBrokenWall, GiGraduateCap } from "react-icons/gi";
import backgroundPattern from "../assets/images/bgBlur.png";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const [activeProblem, setActiveProblem] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleInfoClick = (field) => {
    setSelectedInfo(field === selectedInfo ? null : field);
  };
  // Problems data array
  const problems = [
    {
      id: 1,
      icon: <GiAbstract024 className="problem-icon" />,
      title: "Distant & Abstract Historical Learning",
      description:
        "Traditional education methods fail to connect students with cultural heritage",
      statistic: "70% students find history irrelevant",
      solution: "Interactive timeline and AR experiences",
    },
    {
      id: 2,
      icon: <GiBrokenWall className="problem-icon" />,
      title: "Architectural Heritage Disconnection",
      description: "Lack of connection with architectural treasures",
      statistic: "90% students haven't visited a museum",
      source: "INP 2023",
      solution: "Gamified exploration trails",
    },
    {
      id: 3,
      icon: <GiGraduateCap className="problem-icon" />,
      title: "Museum Engagement Crisis",
      description: "Cultural institutions struggle with youth engagement",
      statistic: "12% know local landmarks",
      solution: "Mixed-reality exhibits",
    },
  ];
  const infoFields = [
    {
      label: "Students Reached",
      value: "2 M+",
      desc: "Tunisian students engaged through our platform",
    },
    {
      label: "Tourist Impact",
      value: "9 M",
      desc: "Annual visitors to Tunisia benefiting from our integration",
    },
    {
      label: "Cultural Sites",
      value: "250 +",
      desc: "Museums and heritage locations mapped",
    },
    {
      label: "Global Reach",
      value: "254 M",
      desc: "University students worldwide potential",
    },
  ];

  return (
    <div className={`container ${isVisible ? "visible" : ""}`}>
      {/* Interactive Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="social-icons">
          <Link
            to="/documentation"
            className={location.pathname === "/documentation" ? "active" : ""}
          >
            <FaVideo className="nav-icon" />
          </Link>
          <FaFacebookF className="icon-hover" />
          <FaInstagram className="icon-hover" />
          <FaTwitter className="icon-hover" />
        </div>
      </div>
      <div className="background-overlay">
        <img
          src={backgroundPattern}
          alt="Decorative heritage pattern"
          className="background-image"
        />
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="nav">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/roadmap"
            className={location.pathname === "/roadmap" ? "active" : ""}
          >
            Roadmap
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </div>
        <div className="content">
          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="slide-in" style={{ color: "#daa520" }}>
              Chasing Museums
            </h1>
            <p className="tagline">
              Step into history with Chasing Museums! We’re bringing the past to
              life through immersive VR, AR, and gamified learning experiences.
              Say goodbye to passive history lessons and explore Tunisia’s rich
              cultural heritage in a whole new way. Join us in transforming
              education and tourism with a journey you won’t forget!
            </p>
          </div>

          {/* Image with hover effect */}
          <div className="image-wrapper">
            <img
              src={museumImage}
              alt="Tunisian Cultural Heritage"
              className="hover-zoom"
            />
          </div>
        </div>

        {/* Problems Section integrated directly in homepage */}
        <section className="problems-section">
          <h2>Key Challenges We Address</h2>
          <div className="problems-grid">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className={`problem-card ${
                  activeProblem === problem.id ? "active" : ""
                }`}
                onMouseEnter={() => setActiveProblem(problem.id)}
                onMouseLeave={() => setActiveProblem(null)}
              >
                <div className="problem-content">
                  {problem.icon}
                  <h3>{problem.title}</h3>
                  <p className="problem-description">{problem.description}</p>
                  <div className="problem-stat">
                    <span>{problem.statistic}</span>
                    {problem.source && (
                      <span className="source">{problem.source}</span>
                    )}
                  </div>
                </div>
                <div className="problem-solution">
                  <h4>Our Solution</h4>
                  <p>{problem.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="video-demo">
          <h2>Experience the Revolution</h2>
          <div className="video-container">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=E-B0P_c12JY"
              controls
              light="../assets/images/cover.png"
              width="100%"
              height="100%"
              className="game-trailer"
              playIcon={<button className="play-button">▶</button>}
            />
            <div className="video-overlay">
              <span className="highlight-text">
                See our gamified learning in action
              </span>
            </div>
          </div>
          <div className="video-caption">
            <p>
              Interactive Time Travel Module - Carthage Historical Quest Preview
            </p>
          </div>
        </section>

        {/* Interactive Info Grid */}
        <div className="info-section">
          <h2 className="slide-in">Why Chasing Museums?</h2>
          <div className="info-grid">
            {infoFields.map((field, index) => (
              <div
                key={field.label}
                className={`info-item ${
                  selectedInfo === field.label ? "active" : ""
                }`}
                onClick={() => handleInfoClick(field.label)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <p className="label">{field.label}</p>
                <p className="value">{field.value}</p>
                {selectedInfo === field.label && (
                  <div className="info-tooltip">{field.desc}</div>
                )}
              </div>
            ))}
          </div>
          <p className="footer-note">
            © 2025 Chasing Museums. All rights reserved.
          </p>
          <div className="dot pulse">•</div>
        </div>
      </div>
    </div>
  );
}
