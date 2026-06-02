import React, { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [teeth, setTeeth] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const IMG_SRC = "https://picsum.photos/seed/smile1/480/560"; // ← Replace with your image

  return (
    <section className="hero">
      {/* Top bar */}
      <div className="hero-topbar">
        Starting at <span className="topbar-old">Rs 69,999</span>{" "}
        <span className="topbar-new">Rs 47,999</span>. Hurry! Offer ends soon.
      </div>

      <div className="hero-container">
        <div className="hero-grid">

          {/* ===== LEFT CONTENT ===== */}
          <div className="hero-left">

            {/* Brand */}
            {/* <div className="hero-brand">
              <span className="brand-whistle">whistle</span>
              <span className="brand-and"> & </span>
              <span className="brand-smile">SMILE</span>
            </div> */}

            {/* Title + Image: side-by-side on mobile, title only on desktop */}
            <div className="hero-title-row">
              <div className="hero-title-text">
                <h1 className="hero-title">
                  Invisible Aligners<br />for a dream smile
                </h1>
                {/* Subtext: mobile pe title ke neeche, image ke baad */}
                <p className="hero-sub hero-sub-mobile">
                  Book a Scan and avail a free<br />
                  Orthodontist Consult{" "}
                  <span className="hero-price">worth ₹1500</span>
                </p>
              </div>

              {/* Image: sirf mobile pe dikhegi */}
              <div className="hero-mobile-img">
                <img
                  src={IMG_SRC}
                  alt="Smile transformation"
                  className="hero-img-small"
                />
              </div>
            </div>

            {/* Subtext: sirf desktop pe */}
            <p className="hero-sub hero-sub-desktop">
              Book a Scan and avail a free<br />
              Orthodontist Consult{" "}
              <span className="hero-price">worth ₹1500</span>
            </p>

            {/* Radio */}
            <div className="hero-radio-group">
              <p className="hero-radio-label">
                Do you have Teeth Gaps or Crooked Teeth?
              </p>
              <div className="hero-radios">
                <label className="radio-opt">
                  <input
                    type="radio"
                    name="teeth"
                    value="yes"
                    onChange={() => setTeeth("yes")}
                    checked={teeth === "yes"}
                  />
                  <span>Yes</span>
                </label>
                <label className="radio-opt">
                  <input
                    type="radio"
                    name="teeth"
                    value="no"
                    onChange={() => setTeeth("no")}
                    checked={teeth === "no"}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {/* Form */}
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
              <button className="hero-btn">Book Free Scan</button>
            </div>

            {/* Consent */}
            <div className="hero-consent">
              <label className="consent-label">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={() => setConsent(!consent)}
                />
                <span>
                  I hereby consent to receive calls / messages from Whistle and
                  its partners and override DND settings.
                </span>
              </label>
            </div>

            {/* Clove badge */}
            <div className="hero-badge-row">
              <div className="clove-badge">
                <span className="clove-logo">clove</span>
                <span className="clove-sub">dental</span>
              </div>
              <p className="clove-text">
                Book Free Orthodontist Consult at a Clove Dental Clinic.{" "}
                <strong>450+ Clinics near you</strong>
              </p>
              <button className="find-btn">Find Clinic →</button>
            </div>

          </div>

          {/* ===== RIGHT IMAGE (desktop only) ===== */}
          <div className="hero-right">
            <img
              src={IMG_SRC}
              alt="Smile transformation"
              className="hero-img-large"
            />
          </div>

        </div>
      </div>
    </section>
  );
}