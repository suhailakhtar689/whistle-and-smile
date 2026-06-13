import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="whistle-logo">
          <span className="whistle-text">whistle</span>
          <span className="whistle-sub">AND SMILE</span>
        </div>
        <nav className="header-nav">
          {/* <a href="#about">About</a>
          <a href="#how-it-works">How it works</a>
          <a href="#results">Results</a>
          <a href="#faq">FAQ</a> */}
        </nav>
        <button className="header-cta" aria-label="Call now">
          <span className="cta-icon">
            {/* White phone icon - SVG */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.352 21.402C21.1467 21.5903 20.9044 21.7335 20.6408 21.8224C20.3772 21.9113 20.0981 21.944 19.82 21.918C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.7738 17.3147 6.72533 15.2662 5.19 12.85C3.49991 10.2414 2.44822 7.27246 2.12 4.18C2.09425 3.90338 2.12676 3.62381 2.21517 3.35973C2.30358 3.09565 2.44612 2.85284 2.63382 2.647C2.82152 2.44117 3.05003 2.27714 3.30478 2.16514C3.55953 2.05313 3.83499 1.99584 4.1135 1.997H7.1135C7.59488 1.99285 8.05824 2.16998 8.4137 2.49238C8.76917 2.81478 8.99066 3.25677 9.0235 3.737C9.0826 4.52454 9.22691 5.30294 9.4535 6.058C9.54311 6.33028 9.54929 6.62283 9.47132 6.89878C9.39335 7.17472 9.23468 7.42146 9.0155 7.607L7.6255 8.797C8.54933 10.6534 9.97069 12.2401 11.7325 13.427C13.4709 14.5916 15.4898 15.3214 17.5795 15.543L18.6645 14.143C18.8365 13.9316 19.0671 13.7776 19.3263 13.7004C19.5854 13.6231 19.861 13.6259 20.1185 13.7085C20.8935 13.9645 21.6893 14.1515 22.4965 14.267C22.9781 14.3328 23.4154 14.5757 23.7219 14.945C24.0283 15.3143 24.1799 15.7816 24.1435 16.252C24.0887 16.8062 23.9456 17.3482 23.7205 17.853C23.568 18.2046 23.2974 18.4949 22.9545 18.6785C22.6117 18.8622 22.2159 18.9289 21.8315 18.868L21.25 18.774"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3L20 7M20 3L16 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="cta-text">Call Now</span>
        </button>
      </div>
    </header>
  );
} 