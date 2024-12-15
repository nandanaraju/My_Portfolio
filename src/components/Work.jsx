import React from 'react';
import './work.css';
import pharma from '../assets/images/img2.png'
import tweet from '../assets/images/twitt.jpg'
import cert from '../assets/images/img1.jpg'
import agri from '../assets/images/images.jpeg';
import course from '../assets/images/web.jpeg';
import nft from '../assets/images/what-are-sustainable-products.webp';


const projects = [
  {
    title: 'Online Pharmacy Web App',
    date: 'November 30, 2024',
    description:
      'The online pharmacy web application allows users to browse and purchase medicines from a digital platform. Built using the MERN stack (MongoDB, Express.js, React, and Node.js) and Docker for containerization. The app provides a seamless experience for users to manage their accounts and purchase medicines as needed.',
    image:pharma,
  },
  {
    title: 'Twitter Clone App',
    date: 'October 15, 2024',
    description:
      'This project uses blockchain technology to create a decentralized application (DApp) that functions as a Twitter clone. The DApp enables users to publish tweets or messages recorded on the blockchain, guaranteeing security, transparency, and immutability. Features like Like, Comment, and Retweet are saved on the blockchain.',
    image: tweet,
  },
  {
    title: 'Agriculture Supply Chain',
    date: 'August 20, 2024',
    description:
      'Hyperledger Fabric-based supply chain network. Configured a dual-peer setup for distributors to securely collect and distribute assets between manufacturers and markets. Implemented chaincode for asset tracking, order matching, and ownership transfer across the supply chain, enhancing traceability and transparency.',
    image: agri,
  },
  {
    title: 'Certificate DApp',
    date: 'September 10, 2024',
    description:
      'A Certificate DApp on the Blockchain. Users can issue and view smart certificates via Smart Contracts. OpenTrust helps with certification and records everything transparently on the Ethereum blockchain.',
    image: cert,
  },
  {
    title: 'Course Hive App',
    date: 'August 20, 2024',
    description:
      'This Blockchain Courses web application offers an interactive interface to browse, view, and manage a list of blockchain-related courses. Designed using the MERN stack (MongoDB, Express.js, React, and Node.js), the application aims to give users an engaging experience,',
    image: course,
  },
  {
    title: 'Sustainable-Products-NFTs_DApp',
    date: 'August 20, 2024',
    description:'This project is a decentralized application (DApp) that allows brands and users to register and add sustainable products to the Ethereum blockchain. The product details are stored as NFTs on IPFS, and each product is associated with a QR code that consumers can scan to verify its authenticity and sustainability claims',
    image: nft,
  },
];

const Work = () => {
  return (
    <div className="projects-section bg-black">
      <h1 className="section-title text-6xl font-extrabold text-yellow-400">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
