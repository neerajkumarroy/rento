import React from "react";

const SpecialOffer = () => {
  return (
    <section className="offer-section" id="deals">
      <div className="container">
        <div className="offer-card">
          <div className="offer-content">
            <span>Special Offer</span>

            <h2>Get 20% OFF</h2>

            <p>On Your First Booking</p>

            <button className="white-btn">Book Now</button>
          </div>

          <img src="/assets/offer-car.png" alt="Special offer car" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
