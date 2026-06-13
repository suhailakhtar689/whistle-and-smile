import React, { useState, useEffect } from 'react';
import { fetchPosts, randomPicsumUrl, keywordImageUrl } from '../utils/picsum';
import './DreamSmiles.css';

const DEFAULT_DREAM = {
  title: 'Dream smiles achieved secretly',
  text1: 'Guaranteed to quality of our Whistle Aligners is rooted in a clear, FDA-backed, 3D-CAD, and is built on close to 10 years of experience spanning over 20,000 smiles transformed.',
  text2: 'The philosophy of Whistle is to work close to base while higher compliance and ability to produce aligners that meet all demands at every price from two dentists.',
};

export default function DreamSmiles() {
  const [dreamText, setDreamText] = useState(DEFAULT_DREAM);
  const [alignerImage, setAlignerImage] = useState(keywordImageUrl(180, 180, 'clear aligners,smile,dental'));

  useEffect(() => {
    let active = true;
    fetchPosts(1)
      .then((data) => {
        if (!active || !data?.posts?.length) return;
        const post = data.posts[0];
        setDreamText({
          title: post.title,
          text1: post.body.slice(0, 120),
          text2: post.body.slice(120, 260) || 'Our team delivers consistent care and a smoother experience from consultation to aligner delivery.',
        });
        setAlignerImage(keywordImageUrl(180, 180, 'invisible aligners,smile,dental'));
      })
      .catch(() => {
        if (active) setAlignerImage(keywordImageUrl(180, 180, 'invisible aligners,smile,dental'));
      });
    return () => { active = false; };
  }, []);

  return (
    <section className="dream-section">
      <div className="dream-inner">
        {/* Left */}
        <div className="dream-left">
          <h2 className="dream-title">{dreamText.title}</h2>
          <p className="dream-text">{dreamText.text1}</p>
          <p className="dream-text">{dreamText.text2}</p>
        </div>

        {/* Right — Whistle Aligners card */}
        <div className="dream-right">
          <div className="aligner-card">
            <div className="aligner-img-wrap">
              <img src={alignerImage} alt="Whistle Aligner" className="aligner-img image-hover-scale" />
            </div>
            <div className="aligner-info">
              <h3 className="aligner-name">Whistle Aligners</h3>
              <p className="aligner-sub">Invisible · Comfortable</p>
              <div className="aligner-price-row">
                <span className="aligner-label">Starting at</span>
                <span className="aligner-price">₹47,999</span>
              </div>
              <p className="dream-text">{dreamText.text1}</p>
              <p className="dream-text">{dreamText.text2}</p>
              <a href="#" className="aligner-link">Learn more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
