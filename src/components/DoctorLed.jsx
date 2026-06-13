import React, { useState, useEffect } from 'react';
import { fetchPosts, randomPicsumUrl, keywordImageUrl } from '../utils/picsum';
import './DoctorLed.css';

const DEFAULT_DOCTOR_CONTENT = {
  title: 'We are Doctor-led, not direct-to-customers',
  desc: "We at Clove Dental champion customer satisfaction. We treat you as a Doctor's OBCD in all orthodontics, with a highly assigned doctor-led team and integrated patient support.",
  button: 'Get a Free Consult',
};

export default function DoctorLed() {
  const [doctorContent, setDoctorContent] = useState(DEFAULT_DOCTOR_CONTENT);
  const [doctorImage, setDoctorImage] = useState(keywordImageUrl(460, 400, 'dental doctor,clinic,smile'));

  useEffect(() => {
    let active = true;
    fetchPosts(1)
      .then((data) => {
        if (!active || !data?.posts?.length) return;
        const post = data.posts[0];
        setDoctorContent({
          title: `Doctor-led care for ${post.title}`,
          desc: post.body,
          button: 'Book a Free Consult',
        });
        setDoctorImage(keywordImageUrl(460, 400, 'dental doctor,clinic,smile'));
      })
      .catch(() => {
        if (active) setDoctorImage(keywordImageUrl(460, 400, 'dental doctor,clinic,smile'));
      });
    return () => { active = false; };
  }, []);

  return (
    <section className="doctor-section">
      <div className="doctor-inner">
        <div className="doctor-left">
          <h2 className="doctor-title">{doctorContent.title}</h2>
          <p className="doctor-desc">{doctorContent.desc}</p>
          <button className="doctor-btn">{doctorContent.button}</button>
        </div>
        <div className="doctor-right">
          <img src={doctorImage} alt="Doctor" className="doctor-img image-hover-scale" />
        </div>
      </div>
    </section>
  );
}
