import React, { useState, useEffect } from 'react';
import './HappySmilers.css';

const SMILERS = [
  { id: 1, seed: 'face-1', label: 'Aisha K.',  bw: false },
  { id: 2, seed: 'face-2', label: 'Priya S.',  bw: false },
  { id: 3, seed: 'face-3', label: 'Meera T.',  bw: false },
  { id: 4, seed: 'face-4', label: 'Rohan D.',  bw: true  },
  { id: 5, seed: 'face-5', label: 'Nisha R.',  bw: false },
];

function getPicsumUrl(seed, w = 300, h = 420) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export default function HappySmilers() {
  const [smileImages, setSmileImages] = useState(
    SMILERS.map((s) => getPicsumUrl(s.seed))
  );
  const [lightbox, setLightbox] = useState(null); // index of open card

  useEffect(() => {
    setSmileImages(SMILERS.map((s) => getPicsumUrl(s.seed)));
  }, []);

  // Close on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setLightbox(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="smilers-section">
      <div className="smilers-inner">
        <h2 className="smilers-title faq-title">Happy Smilers!</h2>

        <div className="smilers-grid">
          {SMILERS.map((s, i) => (
            <div
              key={s.id}
              className={`smiler-card ${s.bw ? 'smiler-card--bw' : ''}`}
              onClick={() => setLightbox(i)}
            >
              {/* Photo */}
              <img
                src={smileImages[i]}
                alt={`Happy smiler ${s.label}`}
                className="smiler-img image-hover-scale"
              />

              {/* Top-right whistle logo */}
              <div className="smiler-topbar">
                <div className="smiler-logo">
                  <span className="smiler-logo-w">W</span>
                  <span className="smiler-logo-text">whistle</span>
                  <span className="smiler-logo-sub">AND SMILE</span>
                </div>
              </div>

              {/* Quote box bottom-left */}
              <div className="smiler-quote-wrap">
                <span className="smiler-quote">"</span>
              </div>

              {/* Bottom overlay */}
              <div className="smiler-overlay">
                <p className="smiler-happy-label">HAPPY- MONIALS</p>
                <span className="smiler-badge">BY WHISTLE</span>
              </div>

              {/* Hover hint */}
              <div className="smiler-hover-hint">
                <span>&#9654; View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="smiler-lightbox" onClick={() => setLightbox(null)}>
          <button className="smiler-lightbox-close" onClick={() => setLightbox(null)}>✕</button>

          <div className="smiler-lightbox-card" onClick={(e) => e.stopPropagation()}>
            {/* Full size image */}
            <img
              src={getPicsumUrl(SMILERS[lightbox].seed, 600, 800)}
              alt={SMILERS[lightbox].label}
              className={`smiler-lightbox-img ${SMILERS[lightbox].bw ? 'smiler-card--bw' : ''}`}
            />

            {/* Logo on lightbox card */}
            <div className="smiler-topbar">
              <div className="smiler-logo">
                <span className="smiler-logo-w">W</span>
                <span className="smiler-logo-text">whistle</span>
                <span className="smiler-logo-sub">AND SMILE</span>
              </div>
            </div>

            {/* Quote on lightbox */}
            <div className="smiler-quote-wrap smiler-quote-wrap--lg">
              <span className="smiler-quote">"</span>
            </div>

            {/* Bottom bar on lightbox */}
            <div className="smiler-overlay smiler-overlay--lg">
              <p className="smiler-happy-label">HAPPY- MONIALS</p>
              <span className="smiler-badge">BY WHISTLE</span>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            className="smiler-lightbox-arrow smiler-lightbox-arrow--prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + SMILERS.length) % SMILERS.length); }}
          >&#8592;</button>
          <button
            className="smiler-lightbox-arrow smiler-lightbox-arrow--next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % SMILERS.length); }}
          >&#8594;</button>
        </div>
      )}
    </section>
  );
}