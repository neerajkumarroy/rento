import React, { useEffect, useRef } from "react";
import "./TrustedBrands.css";

const brands = [
  {
    id: 1,
    name: "Toyota",
    image: "/assets/toyota.png",
  },
  {
    id: 2,
    name: "BMW",
    image: "/assets/bmw.png",
  },
  {
    id: 3,
    name: "Mercedes",
    image: "/assets/mercedes.png",
  },
  {
    id: 4,
    name: "Audi",
    image: "/assets/audi.png",
  },
  {
    id: 5,
    name: "Honda",
    image: "/assets/honda.png",
  },
  {
    id: 6,
    name: "Hyundai",
    image: "/assets/hyundai.png",
  },
  {
    id: 7,
    name: "Volkswagen",
    image: "/assets/volkswagen.png",
  },
  {
    id: 8,
    name: "Kia",
    image: "/assets/kia.png",
  },
];

const TrustedBrands = () => {
  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const startSlider = () => {
      clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        const firstItem = slider.querySelector(".brand-item");

        if (!firstItem) return;

        const itemWidth = firstItem.getBoundingClientRect().width + 65;

        slider.style.transition = "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)";

        slider.style.transform = `translateX(-${itemWidth}px)`;

        setTimeout(() => {
          slider.style.transition = "none";
          slider.style.transform = "translateX(0)";

          slider.appendChild(firstItem);
        }, 900);
      }, 3000);
    };

    startSlider();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      {/* =================================================
          TRUSTED BRANDS
      ================================================= */}

      <section className="trusted-brands-section">
        <div className="trusted-brands-container">
          <div className="trusted-brands-heading">
            <h2>Trusted by Leading Brands</h2>

            <p>We are proud to partner with top brands.</p>
          </div>

          <div className="brands-slider-wrapper">
            <div className="brands-slider" ref={sliderRef}>
              {brands.map((brand) => (
                <div className="brand-item" key={brand.id}>
                  <img src={brand.image} alt={brand.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          NEWSLETTER / CAR SECTION
      ================================================= */}

      <section className="car-newsletter-section">
        <div className="car-newsletter-container">
          <div className="car-newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>

            <p>Get the latest deals and offers.</p>

            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBrands;
