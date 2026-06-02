import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3 className="footer-logo">whistle</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Range of Aligners</a></li>
            <li><a href="#">Orthodontist Network</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Get in Touch Now!</h4>
          <ul className="footer-links">
            <li>📞 +91-9851254891</li>
            <li>✉ support@whistle.co.in</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Follow us on</h4>
          <div className="footer-social">
            <a href="#" className="social-link">f</a>
            <a href="#" className="social-link">in</a>
            <a href="#" className="social-link">𝕏</a>
          </div>
        </div>
        <div className="footer-col">
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Whistle Aligners. All rights reserved.</p>
      </div>
    </footer>
  );
}
