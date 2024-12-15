import React from "react";
import "./services.css"; // Ensure the updated CSS file is used

const Services = () => {
  const services = [
    {
      title: "Blockchain Development",
      icon: "🔗",
      description: "Design and develop blockchain-based solutions.",
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      description: "Build visually stunning and interactive interfaces.",
    },
    {
      title: "Backend Development",
      icon: "🖥️",
      description: "Develop robust server-side logic and APIs.",
    },
    {
      title: "Web Development",
      icon: "🌐",
      description: "Create scalable and responsive web applications.",
    },
    {
      title: "Smart Contract Development",
      icon: "📜",
      description: "Code secure and efficient blockchain contracts.",
    },
    {
      title: "Hyperledger Fabric Development",
      icon: "⚙️",
      description: "Specialize in enterprise-grade blockchain solutions.",
    },
  ];

  return (
    <section className="services-section bg-black">
      <h1 className="title text-6xl font-extrabold text-yellow-400">Services</h1>
      <p className="subtitle">
      "Discover the diverse range of services I offer, designed to empower and elevate your business or project."
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              service.title === "Blockchain Development" 
            }`}
          >
            <div className="icon">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
