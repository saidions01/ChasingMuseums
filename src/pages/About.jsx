import React, { useState, useEffect } from "react";

import Layout from "../Components/Layout.jsx";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "../styles/Home.css";
import "../styles/About.css";
import onsPhoto from "../assets/images/ons.jpg";
import soumayaPhoto from "../assets/images/soumaya.jpg";
import nadaPhoto from "../assets/images/nada.jpg";

const About = () => {
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

  return (
    <Layout>
      <div className="about-container">
        <section className="team-section">
          <h2>Our Core Team</h2>
          <div className="team-grid">
            {[
              {
                name: "Ons Saidi",
                role: "Technical Lead",
                cred: "Software Engineering Student | TJSP Alumna 23-24",
                photo: onsPhoto,
                social: {
                  linkedin: "https://www.linkedin.com/in/saidi-ons-04632b235/",
                  github: "https://github.com/saidions01",
                  twitter: "#",
                },
              },
              {
                name: "Soumaya Larbi",
                role: "Project Lead",
                cred: "Architecture Student | TJSP Alumna 23-24",
                photo: soumayaPhoto,
                social: {
                  linkedin:
                    "https://www.linkedin.com/in/soumaya-larbi-470b542b6/",
                },
              },
              {
                name: "Nada Chaabane",
                role: " Marketing & Communication",
                cred: "Education Student | TJSP Alumna 23-24",
                photo: nadaPhoto,
                social: {
                  linkedin:
                    "https://www.linkedin.com/in/nada-chaabane-605267329/",
                },
              },
            ].map((member, index) => (
              <div key={index} className="team-card">
                <div className="avatar-container">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="member-avatar"
                  />
                  <div className="social-links">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="social-icon">
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="social-icon">
                        <FaGithub />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="social-icon">
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-cred">{member.cred}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mission-section">
          <h1>Reimagining Cultural Education</h1>
          <p className="mission-statement">
            At Chasing Museums, we’re a passionate team of creatives,
            technologists, and cultural enthusiasts on a mission to reconnect
            people with history. By blending immersive technology with rich
            storytelling, we bring architectural heritage to life—making it
            accessible, engaging, and relevant for all generations. Our goal is
            to spark curiosity, foster appreciation, and create lasting
            connections between the past and the future.
          </p>
        </section>

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
    </Layout>
  );
};

export default About;
