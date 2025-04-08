import React from "react";
import { FaFilm, FaCamera, FaPencilAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import Layout from "../Components/Layout";
import "../styles/Documentation.css";

// Import images
import chasingMuseums1 from "../assets/images/chasing-museums1.jpg";
import chasingMuseums2 from "../assets/images/chasing-museums2.jpg";
import chasingMuseums3 from "../assets/images/chasing-museums1.jpg";
import workshop1 from "../assets/images/img1.png";
import workshop2 from "../assets/images/img2.png";
import workshop3 from "../assets/images/img3.png";

const ProjectDocumentation = () => {
  // Updated image structure with imported images
  const detroitImages = [
    { src: chasingMuseums1, caption: "Architectural Details" },
    { src: chasingMuseums2, caption: "Exhibition Hall" },
    { src: chasingMuseums3, caption: "Student Interaction" },
  ];

  const workshopImages = [
    { src: workshop1, caption: "Urban Sketching Session" },
    { src: workshop2, caption: "Participant Artwork" },
    { src: workshop3, caption: "Group Discussion" },
  ];

  // Custom image grid component
  const ImageGrid = ({ images }) => (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image.src} alt={image.caption} />
          <div className="grid-caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );

  return (
    <Layout>
      <div className="documentation-container">
        <section className="doc-section">
          <h2>
            <FaCamera /> Detroit Institute of Art Visit
          </h2>
          <ImageGrid images={detroitImages} />
        </section>
        {/* Workshop Highlights */}
        <section className="doc-section">
          <h2>
            <FaPencilAlt /> Urban Sketching Workshops
          </h2>
          <ImageGrid images={workshopImages} />
        </section>
      </div>
    </Layout>
  );
};

export default ProjectDocumentation;
