import React, { useState } from 'react';
import './FAQ.css';

const FAQS = [
  { q: 'What are Whistle Aligners?', a: 'Whistle Aligners are custom-made, clear dental aligners designed to straighten your teeth discreetly. Each set is precision-crafted from your 3D scan and worn over your teeth — no metal brackets, no wires.' },
  { q: 'How do aligners work?', a: 'You wear a series of custom trays, each slightly different from the last. Over time, they apply gentle, consistent pressure that gradually moves your teeth into the desired position. Our doctors monitor every stage.' },
  { q: 'Can any dentist do irregular teeth treatment?', a: 'Whistle treatments are supervised by qualified orthodontists and dental professionals. We partner with Clove Dental clinics to ensure you have in-person support throughout your journey.' },
  { q: 'Are there any restrictions on eating or drinking?', a: 'No! Simply remove your aligners before eating or drinking anything other than water. Pop them back in after — it takes seconds. You can enjoy all your favourite foods without restriction.' },
  { q: 'How long does the treatment take?', a: 'Treatment duration varies depending on complexity. Most mild-to-moderate cases complete in 3–6 months. During your free consultation, your doctor will give you a personalised timeline.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section">
      <div className="faq-inner">
        <h2 className="faq-title">Got Questions? <span className="faq-accent">We've got answers</span></h2>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
