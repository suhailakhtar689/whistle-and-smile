import React, { useState } from 'react';
import './Comparison.css';

const ROWS = [
  {
    feature: 'Easy to complex cases',
    whistle: 'Yes, mild to complex',
    others: 'No, only mild to moderate',
  },
  {
    feature: 'Clear-cut Pricing',
    whistle: true,
    others: false,
  },
  {
    feature: 'Aligner Change',
    whistle: 'Every 10 days',
    others: 'Every 2 weeks',
  },
  {
    feature: 'Clinical Partnership',
    whistle: true,
    others: false,
  },
  {
    feature: 'Movement Between Cities',
    whistle: true,
    others: false,
  },
  {
    feature: 'Complimentary Teeth Scaling',
    whistle: true,
    others: false,
  },
];

function Cell({ value, isWhistle }) {
  if (value === true)
    return (
      <span className={`circle-icon ${isWhistle ? 'circle-green' : 'circle-green'}`}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="11" fill="#22c55e"/>
          <path d="M6 11.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    );
  if (value === false)
    return (
      <span className="circle-icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="11" fill="#ef4444"/>
          <path d="M7 7l8 8M15 7l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    );
  return (
    <span className={isWhistle ? 'tag-purple' : 'tag-grey'}>{value}</span>
  );
}

export default function Comparison() {
  const [openRows, setOpenRows] = useState({});

  const toggle = (i) => setOpenRows(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="comp-section">
      <div className="comp-inner">
        <h2 className="comp-title">What sets Whistle apart?</h2>
        <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th className="col-feature">Features</th>
                <th className="col-whistle">
                  <div className="whistle-logo">
                    <span className="whistle-text">whistle</span>
                    <span className="whistle-sub">AND SMILE</span>
                  </div>
                </th>
                <th className="col-others">Other Brands</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i}>
                  <td className="feature-cell">
                    <span className="feature-name">{row.feature}</span>
                    <button className="chevron-btn" onClick={() => toggle(i)} aria-label="expand">
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        style={{ transform: openRows[i] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                      >
                        <path d="M4 6l4 4 4-4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                  <td className="whistle-cell"><Cell value={row.whistle} isWhistle /></td>
                  <td className="others-cell"><Cell value={row.others} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}