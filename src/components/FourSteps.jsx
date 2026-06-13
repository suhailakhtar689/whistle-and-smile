import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../utils/picsum';
import './FourSteps.css';

const DEFAULT_STEPS = [
  { num: '1', title: 'Scan', desc: 'We use an AI-powered scanner to take a detailed 3D image of your teeth.' },
  { num: '2', title: 'Plan', desc: 'Our Orthodontists design your customized smile enhancement plan using highly advanced software.' },
  { num: '3', title: 'Fabricate', desc: 'We manufacture your custom aligners leveraging 3D printing & laser technology.' },
  { num: '4', title: 'Wear', desc: 'Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey.' },
];

const STEPS_IMAGE = 'https://picsum.photos/seed/dental-steps/420/500';

export default function FourSteps() {
  const [steps, setSteps] = useState(DEFAULT_STEPS);
  const [stepsImage, setStepsImage] = useState(STEPS_IMAGE);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let active = true;
    fetchPosts(4)
      .then((data) => {
        if (!active || !data?.posts?.length) return;
        setSteps(
          data.posts.slice(0, 4).map((post, index) => ({
            num: `${index + 1}`,
            title: DEFAULT_STEPS[index].title,
            desc: DEFAULT_STEPS[index].desc,
          }))
        );
      })
      .catch(() => {
        // keep default steps if fetch fails
      });
    return () => { active = false; };
  }, []);

  return (
    <section className="steps-section">
      <div className="steps-inner">
        <div className="steps-card">

          {/* ── Left: copy + steps ── */}
          <div className="steps-copy">
            <h2 className="steps-title">
              Get your perfect smile in<br />four simple steps
            </h2>

            <div className="steps-list">
              {steps.map((s, i) => (
                <div key={i} className="step-item">
                  <div className="step-num">{s.num}</div>
                  <div className="step-body">
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: image + play ── */}
          <div className="steps-media">
            <div className="steps-image">
              <img
                src={stepsImage}
                alt="Dentist scanning patient"
                className="steps-img image-hover-scale"
              />

              {/* Purple border overlay on image — matches screenshot */}
              <div className="steps-img-border" />

              {/* Play button */}
              {!playing ? (
                <button
                  type="button"
                  className="steps-play-btn"
                  aria-label="Play video"
                  onClick={() => setPlaying(true)}
                >
                  <span className="steps-play-icon">&#9654;</span>
                </button>
              ) : (
                <div className="steps-video-placeholder">
                  <p>Video playing...</p>
                  <button onClick={() => setPlaying(false)} className="steps-stop-btn">&#9646;&#9646; Pause</button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}