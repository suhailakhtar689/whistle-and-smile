import React from 'react';
import './WhyWhistle.css';

const FEATURES = [
  { img: 'https://picsum.photos/seed/ww1/280/200', title: 'Custom-made Invisible', desc: 'Tailored for your unique smile using precise 3D scanning and modelling technology.' },
  { img: 'https://picsum.photos/seed/ww2/280/200', title: 'Predictable Results', desc: 'An advanced 3D modelling algorithm charts your exact tooth movement at every step.' },
  { img: 'https://picsum.photos/seed/ww3/280/200', title: 'Partnership with Clove Dental', desc: 'Closely tied to leading dental clinics for in-person check-ins and expert oversight.' },
  { img: 'https://picsum.photos/seed/ww4/280/200', title: 'Unbonded Aligners', desc: 'No buttons, no attachments. Remove any time — eat, brush, and smile freely.' },
];

export default function WhyWhistle() {
  return (
    <section className="why-section">
      <div className="why-inner">
        <h2 className="why-title">Why Whistle?</h2>
        <div className="why-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="why-card">
              <img src={f.img} alt={f.title} className="why-img" />
              <h3 className="why-card-title">{f.title}</h3>
              <p className="why-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
