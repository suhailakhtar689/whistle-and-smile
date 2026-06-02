import React from 'react';
import './DreamSmiles.css';

export default function DreamSmiles() {
  return (
    <section className="dream-section">
      <div className="dream-inner">
        {/* Left */}
        <div className="dream-left">
          <h2 className="dream-title">Dream smiles<br />achieved secretly</h2>
          <p className="dream-text">
            Guaranteed to quality of our Whistle Aligners is rooted in a
            clear, FDA-backed, 3D-CAD, and is built on close to 10 years of
            experience spanning over 20,000 smiles transformed.
          </p>
          <p className="dream-text">
            The philosophy of Whistle is to work close to base while higher compliance
            and ability to produce aligners that meet all demands at every price
            from two dentists.
          </p>
        </div>

        {/* Right — Whistle Aligners card */}
        <div className="dream-right">
          <div className="aligner-card">
            <div className="aligner-img-wrap">
              <img src="https://picsum.photos/seed/aligner1/180/180" alt="Whistle Aligner" className="aligner-img" />
            </div>
            <div className="aligner-info">
              <h3 className="aligner-name">Whistle Aligners</h3>
              <p className="aligner-sub">Invisible · Comfortable</p>
              <div className="aligner-price-row">
                <span className="aligner-label">Starting at</span>
                <span className="aligner-price">₹47,999</span>
              </div>
              <ul className="aligner-features">
                <li>✔ Manufactured at our 3D lab</li>
                <li>✔ FDA, CE certified materials</li>
              </ul>
              <a href="#" className="aligner-link">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
