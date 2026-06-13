import React, { useState } from 'react';
import './WhistleDifference.css';

const POINTS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C10.477 4 6 8.477 6 14c0 3.5 1.8 6.6 4.5 8.4V26h11v-3.6C24.2 20.6 26 17.5 26 14c0-5.523-4.477-10-10-10z" stroke="#4B6EF5" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M13 26v2h6v-2" stroke="#4B6EF5" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 9v5l3 3" stroke="#4B6EF5" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Next-Gen',
    desc: 'Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#4B6EF5" strokeWidth="1.8"/>
        <path d="M11 16l3.5 3.5L21 12" stroke="#4B6EF5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 8l3-3M24 12l3-1" stroke="#4B6EF5" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Hassle-Free',
    desc: 'Predictable, comfortable & lifestyle-friendly for an easy smile transformation.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#4B6EF5" strokeWidth="1.8"/>
        <path d="M16 10v2M16 20v2" stroke="#4B6EF5" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12.5 14a3.5 3.5 0 117 0c0 2-3.5 3-3.5 5" stroke="#4B6EF5" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: "Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs.",
  },
];

const CLINIC_IMAGE = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80';

export default function WhistleDifference() {
  const [imgSrc, setImgSrc] = useState(CLINIC_IMAGE);

  return (
    <section className="diff-section">
      <div className="diff-inner">
        <div className="diff-card">
          <h2 className="diff-title">The Whistle<br />Difference</h2>
          <div className="diff-points">
            {POINTS.map((p, i) => (
              <div key={i} className="diff-point">
                <span className="diff-icon">{p.icon}</span>
                <div>
                  <h3 className="diff-point-title">{p.title}</h3>
                  <p className="diff-point-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="diff-right">
          <img
            src={imgSrc}
            alt="Whistle aligner manufacturing"
            className="diff-img"
            loading="lazy"
            onError={() => setImgSrc('https://picsum.photos/seed/dental/800/600')}
          />
        </div>
      </div>
    </section>
  );
}