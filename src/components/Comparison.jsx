import React from 'react';
import './Comparison.css';

const ROWS = [
  { feature: 'Easy to complete cases', whistle: true, others: 'Variably complex' },
  { feature: 'Clear pricing', whistle: true, others: 'No reliable estimates' },
  { feature: 'Aligner Change', whistle: 'Every 15 days', others: 'Every 3 weeks' },
  { feature: 'Unbonded/working', whistle: true, others: false },
  { feature: 'Complimentary Teeth Scaling', whistle: true, others: false },
];

export default function Comparison() {
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
                  <span className="whistle-badge">whistle</span>
                </th>
                <th className="col-others">Other Brands</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i}>
                  <td className="feature-cell">{row.feature}</td>
                  <td className="check-cell">
                    {row.whistle === true ? <span className="tick green">✓</span>
                      : row.whistle === false ? <span className="tick red">✗</span>
                      : <span className="tag-text">{row.whistle}</span>}
                  </td>
                  <td className="check-cell">
                    {row.others === true ? <span className="tick green">✓</span>
                      : row.others === false ? <span className="tick red">✗</span>
                      : <span className="tag-text grey">{row.others}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
