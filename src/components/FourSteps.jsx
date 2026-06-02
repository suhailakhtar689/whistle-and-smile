import React from 'react';
import './FourSteps.css';

const STEPS = [
  { num: '1', title: 'Scan', desc: 'We use our 3D intraoral scanner to create a precise digital impression of your teeth at any point.' },
  { num: '2', title: 'Plan', desc: 'Your 3D scan forms the design plan that determines aligner. You review and approve your final smile plan before we start.' },
  { num: '3', title: 'Fabricate', desc: 'Our state-of-the-art 3D printing machines and medical grade materials turn the digital scan into your custom aligners.' },
  { num: '4', title: 'Wear', desc: 'Your 3D Whistle Aligner set is placed at the Clove Dental clinic and you wear, track progress, and change your aligner every 2 weeks.' },
];

export default function FourSteps() {
  return (
    <section className="steps-section">
      <div className="steps-inner">
        <h2 className="steps-title">Get your perfect smile in<br />four simple steps</h2>
        <div className="steps-content">
          <div className="steps-image">
            <img src="https://picsum.photos/seed/dentist1/420/500" alt="Dentist scanning" className="steps-img" />
          </div>
          <div className="steps-list">
            {STEPS.map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-num">{s.num}</div>
                <div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}