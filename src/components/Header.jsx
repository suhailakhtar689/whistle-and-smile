import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-area">
          <span className="logo-whistle">whistle</span>
          <span className="logo-and">&</span>
          <span className="logo-smile">SMILE</span>
        </div>
        <nav className="header-nav">
          {/* <a href="#about">About</a> */}
          {/* <a href="#how-it-works">How it works</a> */}
          {/* <a href="#results">Results</a> */}
          {/* <a href="#faq">FAQ</a> */}
        </nav>
        <button className="header-cta">Call Now</button>
      </div>
    </header>
  );
}