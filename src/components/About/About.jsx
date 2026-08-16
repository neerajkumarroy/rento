import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* ================= IMAGE ================= */}
        <div className="about-image-wrapper">
          <img
            src="/assets/user-1.png"
            alt="Rento car rental"
            className="about-image"
          />

          <div className="about-experience">
            <span className="experience-number">10+</span>
            <span className="experience-text">Years of experience</span>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="about-content">
          <span className="about-small-title">About us</span>

          <h2>
            Your trusted partner for
            <br />
            every journey
          </h2>

          <p className="about-description">
            At Rento, we make car rental simple, reliable, and convenient.
            Whether you're planning a weekend trip, a business journey, or need
            a car for your everyday travel, we have the right vehicle for you.
          </p>

          <p className="about-description">
            Our goal is to provide quality cars, transparent pricing, and
            excellent service so you can enjoy every journey without any hassle.
          </p>

          {/* Features */}

          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h3>Quality Cars</h3>
                <p>Well-maintained vehicles</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h3>Affordable Prices</h3>
                <p>Transparent and fair pricing</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h3>24/7 Support</h3>
                <p>We're always here to help</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h3>Easy Booking</h3>
                <p>Quick and simple reservations</p>
              </div>
            </div>
          </div>

          <a href="#cars" className="about-button">
            Explore Our Cars
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
