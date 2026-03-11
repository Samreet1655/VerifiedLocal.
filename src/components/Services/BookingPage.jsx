import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  // Mock data for 5 people
  const professionals = [
    { id: 1, name: "Arjun Singh", rate: 450, rating: 4.8 },
    { id: 2, name: "Priya Sharma", rate: 600, rating: 4.9 },
    { id: 3, name: "Chitra Kalra", rate: 350, rating: 4.2 },
    { id: 4, name: "Amit Patel", rate: 500, rating: 4.5 },
    { id: 5, name: "Sonia Gill", rate: 550, rating: 4.7 },
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      
      {/* Attractive Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 20px',
          backgroundColor: '#fff',
          color: '#007bff',
          border: '2px solid #007bff',
          borderRadius: '30px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0, 123, 255, 0.1)',
          marginBottom: '30px'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#007bff';
          e.target.style.color = '#fff';
          e.target.style.transform = 'translateX(-5px)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#fff';
          e.target.style.color = '#007bff';
          e.target.style.transform = 'translateX(0)';
        }}
      >
        <span>←</span> Back to Services
      </button>

      <h1 style={{ textAlign: 'center', color: '#222', fontSize: '2rem' }}>
        Verified Professionals for <span style={{ color: '#007bff' }}>{serviceName}</span>
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        Found 5 experts available on hourly basis in your area.
      </p>

      {/* Professionals List Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {professionals.map((person) => (
          <div key={person.id} style={{ 
            background: 'white', 
            padding: '25px', 
            marginBottom: '20px', 
            borderRadius: '15px', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #eee',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem' }}>{person.name}</h3>
              <div style={{ 
                backgroundColor: '#fff9e6', 
                color: '#ffa500', 
                padding: '4px 10px', 
                borderRadius: '20px', 
                display: 'inline-block',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                ★ {person.rating} Rating
              </div>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <h2 style={{ margin: 0, color: '#2ecc71', fontSize: '1.8rem' }}>
                ₹{person.rate}<small style={{ fontSize: '0.9rem', color: '#888' }}>/hr</small>
              </h2>
              <button style={{ 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                padding: '12px 25px', 
                borderRadius: '8px',
                marginTop: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(0, 123, 255, 0.3)'
              }}>
                Hire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;