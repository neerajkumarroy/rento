import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Fuel, Gauge, Star } from "lucide-react";
import "./TopRatedCars.css";

/* =========================================================
   TOP RATED CARS DATA
   Apni images ke paths yahan change kar sakte ho
========================================================= */

const defaultCars = [
  {
    id: 1,
    name: "BMW 3 Series",
    price: "$85",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: "4.9",
    image: "/assets/car-1.png",
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    price: "$95",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: "4.8",
    image: "/assets/car-2.png",
  },
  {
    id: 3,
    name: "Mahindra Thar Roxx",
    price: "$90",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: "4.9",
    image: "/assets/car-3.png",
  },
  {
    id: 4,
    name: "Rolls-Royce",
    price: "$110",
    fuel: "Diesel",
    transmission: "Automatic",
    rating: "4.8",
    image: "/assets/car-4.png",
  },
  {
    id: 5,
    name: "Rolls-Royce white",
    price: "$125",
    fuel: "Petrol",
    transmission: "Automatic",
    rating: "5.0",
    image: "/assets/hero-car.png",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const TopRatedCars = ({ cars = defaultCars }) => {
  /* Safety fallback */
  const carList = Array.isArray(cars) ? cars : defaultCars;

  const [currentIndex, setCurrentIndex] = useState(0);

  const [visibleCards, setVisibleCards] = useState(3);

  const [cardWidth, setCardWidth] = useState(0);

  const sliderRef = useRef(null);

  const trackRef = useRef(null);

  /* =======================================================
     RESPONSIVE CARD COUNT
  ======================================================= */

  const updateVisibleCards = () => {
    const width = window.innerWidth;

    if (width <= 600) {
      setVisibleCards(1);
    } else if (width <= 900) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  };

  /* =======================================================
     CALCULATE CARD WIDTH
  ======================================================= */

  const calculateCardWidth = () => {
    if (!trackRef.current) return;

    const firstCard = trackRef.current.querySelector(".top-rated-card");

    if (!firstCard) return;

    const cardRect = firstCard.getBoundingClientRect();

    setCardWidth(cardRect.width);
  };

  /* =======================================================
     INITIALIZE SLIDER
  ======================================================= */

  useEffect(() => {
    updateVisibleCards();

    const timer = setTimeout(() => {
      calculateCardWidth();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  /* =======================================================
     WINDOW RESIZE
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      updateVisibleCards();

      setTimeout(() => {
        calculateCardWidth();
      }, 50);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     MAX SLIDE INDEX
  ======================================================= */

  const maxIndex = Math.max(0, carList.length - visibleCards);

  /* =======================================================
     KEEP INDEX VALID
  ======================================================= */

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  /* =======================================================
     NEXT
  ======================================================= */

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  /* =======================================================
     RESPONSIVE GAP
  ======================================================= */

  const getGap = () => {
    const width = window.innerWidth;

    if (width <= 420) {
      return 11;
    }

    if (width <= 600) {
      return 14;
    }

    if (width <= 900) {
      return 18;
    }

    return 24;
  };

  const gap = getGap();

  /* =======================================================
     SLIDER TRANSFORM
  ======================================================= */

  const translateX = currentIndex * (cardWidth + gap);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section className="top-rated-section">
      <div className="top-rated-container">
        {/* ===============================================
            HEADER
        =============================================== */}

        <div className="top-rated-header">
          <div className="top-rated-title">
            <h2>Top Rated Cars</h2>

            <p>Explore our most popular and highly rated rental cars.</p>
          </div>

          {/* =============================================
              NAVIGATION
          ============================================= */}

          <div className="top-rated-navigation">
            <button
              type="button"
              className="top-rated-nav-btn"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Previous cars"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              className="top-rated-nav-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next cars"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* ===============================================
            SLIDER
        =============================================== */}

        <div className="top-rated-slider" ref={sliderRef}>
          <div
            className="top-rated-track"
            ref={trackRef}
            style={{
              transform: `translate3d(-${translateX}px, 0, 0)`,
            }}
          >
            {carList.map((car, index) => (
              <article className="top-rated-card" key={car.id || index}>
                {/* IMAGE */}

                <div className="top-rated-image">
                  <img src={car.image} alt={car.name} />
                </div>

                {/* CONTENT */}

                <div className="top-rated-content">
                  <h3>{car.name}</h3>

                  {/* PRICE */}

                  <div className="top-rated-price">
                    <strong>{car.price}</strong>

                    <span>/ day</span>
                  </div>

                  {/* DETAILS */}

                  <div className="top-rated-details">
                    <span>
                      <Fuel size={14} />

                      {car.fuel}
                    </span>

                    <span>
                      <Gauge size={14} />

                      {car.transmission}
                    </span>

                    <span className="top-rated-rating">
                      <Star size={14} fill="currentColor" />

                      {car.rating}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedCars;
