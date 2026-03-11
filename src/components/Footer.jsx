import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Popular Services</h4>
          <ul className="footer-list">
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>Carpentry</li>
            <li>Home Cleaning</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-list">
            <li><a href="#help">Help Center</a></li>
            <li><a href="#safety">Safety Guidelines</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>For Professionals</h4>
          <p><a href="#partner" className="partner-link">Register as a Partner</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ServiceHub India. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;