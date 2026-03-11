import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../data/servicesData";

const ServicesPage = () => {
  const pageStyle = {
    // 0.85 means 85% white overlay (very light background)
    background: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('/Minimalist pattern of tools and banana.jpg')`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>Our Services</h1>
      <div style={gridStyle}>
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;