import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="content-box">
        <p className="about-text">
          We’ve all been there: a midnight pipe burst or a power cut right 
          before a big deadline. <strong>VerifiedLocal</strong> was born out of a need for a 
          single, dependable place to find the backbone of our local workforce.
        </p>
        <p className="about-text">
          We aren't just a directory; we are a community-first platform 
          dedicated to empowering local service providers and providing 
          homeowners with peace of mind. Quality service, verified by your own community.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;