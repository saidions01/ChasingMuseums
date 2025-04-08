import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { Link, useLocation } from "react-router-dom";
import "../styles/Home.css";

const Roadmap = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleInfoClick = (field) => {
    setSelectedInfo(field === selectedInfo ? null : field);
  };

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
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Testing",
      period: "0-6 Months",
      desc: "Build MVP Core Features",
      progress: 30, // Add progress percentage
      milestones: [
        "AR/VR Integration",
        "Tunisian Heritage Database",
        "Beta Testing Program",
      ],
      status: "current",
    },
    {
      phase: "Phase 2",
      title: "National Launch",
      period: "6-12 Months",
      desc: "Full Tunisian Deployment",
      progress: 0,
      milestones: [
        "50+ Partner Museums",
        "School Integration Program",
        "Mobile App Release",
      ],
      status: "upcoming",
    },
    {
      phase: "Phase 3",
      title: "Mediterranean Expansion",
      period: "1-3 Years",
      desc: "Regional Growth",
      progress: 0,
      milestones: [
        "Italian Heritage Content",
        "Greek Archaeology Modules",
        "Egyptian Culture Integration",
      ],
      status: "upcoming",
    },
    {
      phase: "Phase 4",
      title: "Global Leadership",
      period: "3-5 Years",
      desc: "Worldwide EdTech Platform",
      progress: 0,
      milestones: [
        "Multilingual Support",
        "UNESCO Partnership",
        "Global Classroom Network",
      ],
      status: "upcoming",
    },
  ];

  return (
    <Layout>
      <div className="roadmap-container">
        <div className="roadmap-header">
          <h1>Chasing Progress</h1>
          <p>Transforming heritage education through strategic innovation</p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-progress" />

          {phases.map((phase, index) => (
            <div
              key={index}
              className={`phase-card ${phase.status}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="phase-icon">{/* Add icon here if needed */}</div>
              <div className="phase-content">
                <div className="phase-header">
                  <span className="phase-tag">{phase.phase}</span>
                  <h3>{phase.title}</h3>
                  <p className="timeframe">{phase.period}</p>
                </div>
                <div className="phase-body">
                  <h4>{phase.desc}</h4>
                  <ul className="milestones">
                    {phase.milestones.map((milestone, i) => (
                      <li key={i}>{milestone}</li>
                    ))}
                  </ul>
                </div>

                {/* Progress bar only for current phase */}
                {phase.status === "current" && (
                  <div className="progress-indicator">
                    <div
                      className="progress-bar"
                      style={{ width: `${phase.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </Layout>
  );
};

export default Roadmap;
