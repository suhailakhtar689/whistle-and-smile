import React from 'react';
import './HappySmilers.css';

const SMILERS = [1, 2, 3, 4];

export default function HappySmilers() {
  return (
    <section className="smilers-section">
      <div className="smilers-inner">
        <h2 className="smilers-title">Happy Smilers!</h2>
        <div className="smilers-grid">
          {SMILERS.map((s, i) => (
            <div key={i} className="smiler-card">
              <img src={`https://picsum.photos/seed/smiler${s}/300/340`} alt={`Happy smiler ${s}`} className="smiler-img" />
              <div className="smiler-overlay">
                <span className="smiler-badge">whistle</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
