import React from 'react';
import './Marquee.css';

const items = [
  '🦷 Our inaugural benefit',
  '✨ Free teeth scan worth ₹700',
  '🩺 Free orthodontic consultation worth ₹700',
  '🦷 Our inaugural benefit',
  '✨ Free teeth scan worth ₹700',
  '🩺 Free orthodontic consultation worth ₹700',
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
