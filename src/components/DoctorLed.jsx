import React from 'react';
import './DoctorLed.css';

export default function DoctorLed() {
  return (
    <section className="doctor-section">
      <div className="doctor-inner">
        <div className="doctor-left">
          <h2 className="doctor-title">We are Doctor-led, not<br />direct-to-customers</h2>
          <p className="doctor-desc">
            We at Clove Dental champion to customer satisfaction. We treat you as a Doctor's
            OBCD in all orthodontics. A Highly assigned doctor-led team in an
            integrated value patient support. You go to a local doctor at OBCD and continues
            the practice to go to Clove Dental clinics across nationwide.
          </p>
          <button className="doctor-btn">Get a Free Consult</button>
        </div>
        <div className="doctor-right">
          <img src="https://picsum.photos/seed/doctor1/460/400" alt="Doctor" className="doctor-img" />
        </div>
      </div>
    </section>
  );
}
