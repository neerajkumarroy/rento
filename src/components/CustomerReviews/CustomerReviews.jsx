import React, { useState } from "react";
import "./CustomerReviews.css";

// Apni 3 user images yahan import karein
import user1 from "/assets/user-1.png";
import user2 from "/assets/user-2.png";
import user3 from "/assets/user-3.png";

const testimonials = [
  {
    id: 1,
    name: "Neeraj Kumar",
    role: "Customer",
    image: user1,
    text: "My trip was smooth and enjoyable. Great car, great price, great service!",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Customer",
    image: user2,
    text: "The booking process was very easy and the car was clean and comfortable.",
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "Customer",
    image: user3,
    text: "Excellent rental experience. The service was fast, professional and reliable.",
  },
];

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const previousTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="customer-reviews-section">
      <div className="customer-reviews-container">
        {/* Background image */}
        <div className="customer-reviews-bg"></div>

        {/* Content */}
        <div className="customer-reviews-content">
          <div className="reviews-heading">
            <h2>What Our Customers Say</h2>
            <p>Authentic feedback from real customers.</p>
          </div>

          <div className="testimonial-card">
            {/* Quote */}
            <div className="quote-mark">“</div>

            {/* Testimonial Text */}
            <p className="testimonial-text">{activeTestimonial.text}</p>

            {/* User */}
            <div className="testimonial-user">
              <div className="testimonial-user-image">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                />
              </div>

              <div className="testimonial-user-info">
                <h4>{activeTestimonial.name}</h4>
                <span>{activeTestimonial.role}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="testimonial-navigation">
              <button
                type="button"
                className="testimonial-nav-btn"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                ‹
              </button>

              <button
                type="button"
                className="testimonial-nav-btn"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`testimonial-dot ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
