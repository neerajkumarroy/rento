import {
  BadgeCheck,
  CalendarCheck,
  ShieldCheck,
  Headphones,
  Star,
} from "lucide-react";

import "./WhyChoose.css";

function WhyChoose() {
  const benefits = [
    {
      icon: BadgeCheck,
      title: "No Hidden Charges",
      description: "What you see is what you pay",
    },
    {
      icon: CalendarCheck,
      title: "Free Cancellation",
      description: "Up to 24 hours before pick-up",
    },
    {
      icon: ShieldCheck,
      title: "Clean & Safe Cars",
      description: "Sanitized for your safety",
    },
    {
      icon: Headphones,
      title: "Trusted by 10K+",
      description: "Happy customers worldwide",
    },
  ];

  const reviews = [
    {
      image: "/assets/team-1.png",
      name: "Rasel Ahmed",
      location: "Dhaka",
      review:
        "Excellent service! The car was clean and in perfect condition.Best car rental service I've used so far. Highly recommended.Best car rental service I've used so far. Highly recommended.",
    },
    {
      image: "/assets/team-1.png",
      name: "Nusrat Jahan",
      location: "Chattogram",
      review:
        "Easy booking process and friendly support team.Best car rental service I've used so far. Highly recommended.Best car rental service I've used so far. Highly recommended.",
    },
    {
      image: "/assets/team-1.png",
      name: "Mahmudul Hasan",
      location: "Sylhet",
      review:
        "Best car rental service I've used so far. Highly recommended.Best car rental service I've used so far. Highly recommended.Best car rental service I've used so far. Highly recommended.",
    },
  ];

  return (
    <section className="why-choose-section">
      {/* =====================================================
          WHY CHOOSE RENTO
      ===================================================== */}

      <div className="why-choose-container">
        <div className="why-choose-heading">
          <h2>Why Choose Rento?</h2>

          <p>We make renting simple, fast &amp; reliable.</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div className="benefit-item" key={index}>
                <div className="benefit-icon">
                  <Icon size={18} />
                </div>

                <div className="benefit-content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =================================================
            CUSTOMER REVIEWS
        ================================================= */}

        <div className="reviews-section">
          <div className="reviews-heading">
            <h2>Real Customer Reviews</h2>

            <p>See what our customers are saying</p>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <article className="review-card" key={index}>
                <div className="review-top">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-avatar"
                  />

                  <div className="review-user">
                    <h3>{review.name}</h3>

                    <span>{review.location}</span>

                    <div className="review-stars">
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <p className="review-text">{review.review}</p>
              </article>
            ))}
          </div>

          {/* Slider dots */}

          <div className="review-dots">
            <span className="review-dot active"></span>
            <span className="review-dot"></span>
            <span className="review-dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
