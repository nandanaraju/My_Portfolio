import React from 'react';
import certificate1 from '../assets/images/certificate1.png'; // Replace with actual image paths
import certificate2 from '../assets/images/certificate2.png';
import certificate3 from '../assets/images/certificate3.png';
import certificate4 from '../assets/images/certificate4.png';
import  './certificate.css'

const certificates = [
  {
    id: 1,
    image: certificate1,
    title: "Developer Essential for Blockchain - KBA Certification",
    description:
      "This program provided a solid foundation in React, Express, MongoDB, Docker, and Git, setting the stage for future exploration in DApp development.",
  },
  {
    id: 2,
    image: certificate2,
    title: "Blockchain Foundation Program, Kerala Blockchain Academy",
    description:
      "This program provided the Blockchain fundamentals and their real-world applications.",
  },
  {
    id: 3,
    image: certificate3,
    title: "Certified Blockchain Associate, Kerala Blockchain Academy",
    description:
      "This program provided the Blockchain fundamentals and their real-world applications.",
  },
  {
    id: 4,
    image: certificate4,
    title: "Ethereum Fundamentals, Kerala Blockchain Academy",
    description:
      "This program provided the Blockchain fundamentals and their real-world applications.",
  },

];

const Certificate = () => {
  return (
    <div id="certificates" className="certificates-section bg-black">
      <h1 className="section-title">Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <div className="certificate-details">
              <h2 className="certificate-title">{cert.title}</h2>
              <p className="certificate-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
