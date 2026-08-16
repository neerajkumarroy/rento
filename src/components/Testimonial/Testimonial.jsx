import React from "react";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container testimonial-inner">
        <div className="testimonial-content">
          <span className="testimonial-label">What Our Customers Say</span>

          <p className="testimonial-subtitle">
            Authentic feedback from real customers.
          </p>

          <Quote className="quote-icon" />

          <blockquote>
            Anti made my trip so smooth and enjoyable. Great car, great price,
            great service!
          </blockquote>

          <div className="testimonial-user">
            <img src="/assets/testimonial.jpg" alt="Customer" />

            <div>
              <strong>Tanvir Hossain</strong>
              <span>Traveler</span>
            </div>
          </div>
        </div>

        <div className="testimonial-image">
          <img src="/assets/testimonial-car.png" alt="Customer enjoying car" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
