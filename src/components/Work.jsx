import React, { useState } from 'react';
import pharma from '../assets/images/img2.png';
import tweet from '../assets/images/twitt.jpg';
import cert from '../assets/images/img1.jpg';
import agri from '../assets/images/images.jpeg';
import course from '../assets/images/web.jpeg';
import nft from '../assets/images/what-are-sustainable-products.webp';

const projects = [
  {
    title: 'Online Pharmacy Web App',
    date: 'November 2024',
    tags: ['MERN Stack', 'Docker'],
    description:
      'A full-stack online pharmacy application allowing users to browse and purchase medicines. Built with MongoDB, Express.js, React, and Node.js, containerized with Docker.',
    image: pharma,
  },
  {
    title: 'Twitter Clone DApp',
    date: 'October 2024',
    tags: ['Blockchain', 'Ethereum', 'Solidity'],
    description:
      'A decentralized Twitter clone on the Ethereum blockchain. Tweets, likes, comments, and retweets are all recorded on-chain for full transparency and immutability.',
    image: tweet,
  },
  {
    title: 'Agriculture Supply Chain',
    date: 'August 2024',
    tags: ['Hyperledger Fabric', 'Chaincode'],
    description:
      'Hyperledger Fabric-based supply chain network with dual-peer distributor setup. Implements chaincode for asset tracking, order matching, and ownership transfer.',
    image: agri,
  },
  {
    title: 'Certificate DApp',
    date: 'September 2024',
    tags: ['Ethereum', 'Smart Contracts'],
    description:
      'OpenTrust — a blockchain-based certificate issuance and verification DApp. Certificates are issued via smart contracts and stored transparently on Ethereum.',
    image: cert,
  },
  {
    title: 'Course Hive App',
    date: 'August 2024',
    tags: ['MERN Stack'],
    description:
      'A blockchain courses web app built with the MERN stack. Offers an interactive interface to browse, view, and manage blockchain-related learning content.',
    image: course,
  },
  {
    title: 'Sustainable Products NFT DApp',
    date: 'August 2024',
    tags: ['NFT', 'IPFS', 'Ethereum'],
    description:
      'A DApp allowing brands to register sustainable products as NFTs on IPFS. Consumers can scan QR codes to verify product authenticity and sustainability claims.',
    image: nft,
  },
];

const tagColors = {
  'MERN Stack': 'bg-green-400/10 text-green-400',
  Docker: 'bg-sky-400/10 text-sky-400',
  Blockchain: 'bg-purple-400/10 text-purple-400',
  Ethereum: 'bg-indigo-400/10 text-indigo-400',
  Solidity: 'bg-violet-400/10 text-violet-400',
  'Hyperledger Fabric': 'bg-fuchsia-400/10 text-fuchsia-400',
  Chaincode: 'bg-pink-400/10 text-pink-400',
  'Smart Contracts': 'bg-yellow-400/10 text-yellow-400',
  NFT: 'bg-orange-400/10 text-orange-400',
  IPFS: 'bg-cyan-400/10 text-cyan-400',
};

const Work = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#07071a] text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-yellow-400 uppercase">What I've Built</span>
          <h2 className="text-5xl md:text-6xl font-extrabold mt-3 bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-500 mt-4">A selection of recent work and experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/5 hover:-translate-y-1"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs text-gray-300">{project.date}</span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[tag] || 'bg-white/10 text-white'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
