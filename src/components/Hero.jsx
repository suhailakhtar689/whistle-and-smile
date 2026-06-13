import React, { useState } from 'react';
import './Hero.css';

const heroImage = 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=480&q=80';

export default function Hero() {
  const [teeth, setTeeth] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);

  return (
    <section className="hero">

      {/* ===== TOP SECTION: title + image ===== */}
      <div className="hero-top">
        <div className="hero-top-inner">
          <div className="hero-top-left">
            <h1 className="hero-title">
              Invisible Aligners for a dream smile
            </h1>
            <p className="hero-sub">
              Book a Scan and avail a free Orthodontist Consult{' '}
              <span className="hero-price">worth ₹1500</span>
            </p>
          </div>
          <div className="hero-top-right">
            <img
              src={heroImage}
              alt="Smile transformation"
              className="hero-img"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://picsum.photos/seed/smile/480/560';
              }}
            />
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION: form ===== */}
      <div className="hero-bottom">
        <div className="hero-form-wrap">

          {/* Radio */}
          <p className="hero-radio-label">Do you have Teeth Gaps or Crooked Teeth?</p>
          <div className="hero-radios">
            <label className="radio-opt">
              <input type="radio" name="teeth" value="yes" checked={teeth === 'yes'} onChange={() => setTeeth('yes')} />
              <span>Yes</span>
            </label>
            <label className="radio-opt">
              <input type="radio" name="teeth" value="no" checked={teeth === 'no'} onChange={() => setTeeth('no')} />
              <span>No</span>
            </label>
          </div>

          {/* Form inputs */}
          <div className="hero-form">
            <input
              className="hero-input"
              placeholder="Full Name*"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="hero-input"
              placeholder="+91 Mobile number*"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="hero-btn">Book a Free Scan</button>
          </div>

          {/* Consent */}
          <label className="consent-label">
            <input type="checkbox" checked={consent} onChange={() => setConsent(!consent)} />
            <span>I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.</span>
          </label>
        </div>

        {/* Clove banner */}
        <div className="clove-banner">
          <p className="clove-banner-text">
            Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.
          </p>
          <div className="clove-right">
            <div className="clove-badge">
              <span className="clove-logo">clove</span>
              <span className="clove-sub">DENTAL</span>
            </div>
            <button className="find-btn">Find Clinic ∨</button>
          </div>
        </div>

      </div>
    </section>
  );
}