import React from 'react';
import './WhistleDifference.css';

const POINTS = [
  { icon: '🏥', title: 'Next-Gen', desc: 'Our aligners use cutting-edge 3D printing, state-of-the-art materials, and are produced in our own FDA-registered lab.' },
  { icon: '🚫', title: 'Hassle-Free', desc: 'Pressure-free commitment is Whistle. Hobbyist-free for easy, clear process with no hidden steps.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'EMI starting from 3 months to different plans with no hidden cost. Total billing clarity always.' },
];

export default function WhistleDifference() {
  return (
    <section className="diff-section">
      <div className="diff-inner">
        <div className="diff-left">
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
            src="https://picsum.photos/seed/clinic1/480/380" 
            alt="Whistle clinic" 
            className="diff-img" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}