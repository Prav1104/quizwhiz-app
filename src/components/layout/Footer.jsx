import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Quizwhiz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
