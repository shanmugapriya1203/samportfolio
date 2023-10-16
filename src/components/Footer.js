import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
         <h3>A passionate developer building the future</h3>
      <div className="footer-content">
       
        <div className="social-icons">
          <a href="https://github.com/shanmugapriya1203" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/shanmuga-priya-661935188/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; 2023 Sam - </p>

      </div>
    </footer>
  );
};

export default Footer;
