import React from "react";
import Layout from "../Components/Layout.jsx";
import "../styles/Home.css";

const Partners = () => {
  return (
    <Layout>
      <div className="content-section">
        <h2>Strategic Partners</h2>
        <div className="partner-logos">
          {[
            "Guggenheim Museum",
            "Tunisian Ministry of Culture",
            "UNESCO",
            "EU Cultural Heritage",
          ].map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo"></div>
              <h3>{partner}</h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
