import React from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Easy car booking",
    text: "Choose your car, select your dates, and book your ride in just a few simple steps.",
    icon: "↗",
    tag: "Quick & simple",
  },
  {
    number: "02",
    title: "Flexible rental plans",
    text: "From a few hours to several days, choose a rental plan that fits your journey.",
    icon: "◷",
    tag: "Your schedule",
  },
  {
    number: "03",
    title: "Well maintained cars",
    text: "Every vehicle is regularly checked and prepared before it reaches you.",
    icon: "✓",
    tag: "Ready to drive",
  },
  {
    number: "04",
    title: "Doorstep delivery",
    text: "Get your selected car delivered to a convenient location and start your journey with ease.",
    icon: "⌖",
    tag: "At your location",
  },
  {
    number: "05",
    title: "24/7 customer support",
    text: "Our support team is available whenever you need help before or during your rental.",
    icon: "◉",
    tag: "Always available",
  },
  {
    number: "06",
    title: "Transparent pricing",
    text: "No confusing surprises. See your rental details and pricing clearly before booking.",
    icon: "₹",
    tag: "No hidden costs",
  },
];

const Services = () => {
  return (
    <section id="services" className="rento-services">
      {/* ================= HEADER ================= */}

      <div className="services-header">
        <div className="services-label">
          <span></span>
          Our services
        </div>

        <div className="services-heading-row">
          <h2>
            Everything you need
            <br />
            for a better journey
          </h2>

          <p>
            From choosing the right car to getting support on the road, Rento
            makes every part of your rental experience simple and stress-free.
          </p>
        </div>
      </div>

      {/* ================= SERVICE JOURNEY ================= */}

      <div className="services-road">
        <div className="road-line"></div>

        {services.map((service, index) => (
          <div
            className={`service-row ${
              index % 2 === 0 ? "service-left" : "service-right"
            }`}
            key={service.number}
          >
            {/* CARD */}

            <div className="service-card">
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>

                <span className="service-tag">{service.tag}</span>
              </div>

              <div className="service-card-content">
                <div className="service-icon">{service.icon}</div>

                <div className="service-info">
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>
              </div>

              <div className="service-arrow">→</div>
            </div>

            {/* CENTER DOT */}

            <div className="service-marker">
              <span></span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= BOTTOM CTA ================= */}

      <div className="services-bottom">
        <div className="services-bottom-text">
          <span>Ready to hit the road?</span>
          <h3>Your next journey starts with Rento.</h3>
        </div>

        <a href="#cars" className="services-cta">
          Explore cars
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default Services;
