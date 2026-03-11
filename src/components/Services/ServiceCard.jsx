import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ name, img }) => {
  const navigate = useNavigate();

  // Function to handle booking click
  const handleBookNow = () => {
    // Yeh humein "/book/Plumbing" ya "/book/Cleaning" jaise URL par le jayega
    navigate(`/book/${encodeURIComponent(name)}`);
  };

  return (
    <div 
      className="service-card" 
      style={{ 
        background: 'white', 
        padding: '20px', 
        borderRadius: '15px', 
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        border: '2px solid #007bff', // Blue Border
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'transform 0.2s ease',
        cursor: 'default'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img 
        src={img} 
        alt={name} 
        style={{ 
          width: '100%', 
          height: '180px', 
          objectFit: 'cover', 
          borderRadius: '10px',
          marginBottom: '15px'
        }} 
      />
      
      <h3 style={{ margin: '10px 0', color: '#222', fontSize: '1.3rem' }}>
        {name}
      </h3>
      
      <p style={{ 
        color: '#666', 
        fontWeight: '500', 
        marginBottom: '20px',
        fontSize: '0.9rem' 
      }}>
        Verified Professional
      </p>

      <button 
        onClick={handleBookNow}
        style={{ 
          width: '100%',
          padding: '12px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;