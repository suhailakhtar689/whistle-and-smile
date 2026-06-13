import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/picsum';
import './WhyWhistle.css';

const DEFAULT_FEATURES = [
  { title: 'Custom-made Invisible', desc: 'Tailored for your unique smile using precise 3D scanning and modelling technology.', img: 'https://picsum.photos/seed/whistle-1/280/200' },
  { title: 'Predictable Results', desc: 'An advanced 3D modelling algorithm charts your exact tooth movement at every step.', img: 'https://picsum.photos/seed/whistle-2/280/200' },
  { title: 'Partnership with Clove Dental', desc: 'Closely tied to leading dental clinics for in-person check-ins and expert oversight.', img: 'https://picsum.photos/seed/whistle-3/280/200' },
  { title: 'Unbonded Aligners', desc: 'No buttons, no attachments. Remove any time — eat, brush, and smile freely.', img: 'https://picsum.photos/seed/whistle-4/280/200' },
];

export default function WhyWhistle() {
  const [features, setFeatures] = useState(DEFAULT_FEATURES);

  useEffect(() => {
    let active = true;
    fetchProducts(4)
      .then((data) => {
        if (!active || !data?.products?.length) return;
        setFeatures(
          data.products.map((product, index) => ({
            title: product.title,
            desc: product.description.slice(0, 100),
            img: `https://picsum.photos/seed/whistle-${index + 1}/280/200`,
          }))
        );
      })
      .catch(() => {})
      .finally(() => {
        // no-op
      });
    return () => { active = false; };
  }, []);

  return (
    <section className="why-section">
      <div className="why-inner">
        <h2 className="why-title">Why Whistle?</h2>
        <div className="why-grid">
          {features.map((f, i) => (
            <div key={i} className="why-card">
              <img src={f.img} alt={f.title} className="why-img image-hover-scale" />
              <h3 className="why-card-title">{f.title}</h3>
              <p className="why-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
