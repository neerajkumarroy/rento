import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-inner">
        <div>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest deals and offers.</p>

          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />

            <button type="submit">Subscribe</button>
          </form>
        </div>

        <img src="/assets/newsletter-car.png" alt="Newsletter car" />
      </div>
    </section>
  );
};

export default Newsletter;
