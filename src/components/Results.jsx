import React, { useState, useEffect } from 'react';
import './Results.css';

export default function Results() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    // Fetch more fields: price, rating, brand, description, thumbnail
    fetch('https://dummyjson.com/products?limit=8&select=id,title,thumbnail,description,price,rating,brand', { signal: ctrl.signal })
      .then(r => { 
        if (!r.ok) throw new Error('Failed to fetch products'); 
        return r.json(); 
      })
      .then(d => { 
        setItems(d.products); 
        setLoading(false); 
      })
      .catch(e => { 
        if (e.name !== 'AbortError') { 
          setError('Could not load product data.'); 
          setLoading(false); 
        } 
      });
    return () => ctrl.abort();
  }, []);

  // Helper function to truncate description
  const truncate = (text, maxLen = 80) => {
    if (!text) return '';
    return text.length > maxLen ? text.substring(0, maxLen) + '…' : text;
  };

  return (
    <section className="results-section">
      <div className="results-inner">
        <h2 className="results-title">Results You'll Love</h2>

        {loading && (
          <div className="results-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="skel-img" />
                <div className="skel-line short" />
                <div className="skel-line long" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="results-error">
            <p>⚠️ {error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        )}

        {!loading && !error && (
          <div className="results-grid">
            {items.map((item) => (
              <div key={item.id} className="result-card">
                <div className="rc-img-wrap">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rc-img"
                    loading="lazy"
                  />
                </div>
                <div className="rc-body">
                  <div className="rc-header">
                    <span className="rc-type">{item.title}</span>
                    {item.brand && <span className="rc-brand">by {item.brand}</span>}
                  </div>
                  <div className="rc-meta">
                    {/* <span className="rc-price"> ${item.price}</span> */}
                    {/* <span className="rc-rating"> {item.rating} / 5</span> */}
                  </div>
                  <p className="rc-dur" title={item.description}>
                    {truncate(item.description, 90)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}