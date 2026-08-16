import { Users, Settings2, Download, Smartphone } from "lucide-react";

import "./PopularCars.css";

const cars = [
  {
    name: "Toyota Corolla",
    price: "$40",
    image: "/assets/car-1.png",
    seats: "5 Seats",
    transmission: "Auto",
  },
  {
    name: "Honda Civic",
    price: "$45",
    image: "/assets/car-2.png",
    seats: "5 Seats",
    transmission: "Auto",
  },
  {
    name: "Mahindra Thar Roxx",
    price: "$90",
    image: "/assets/car-3.png",
    seats: "5 Seats",
    transmission: "Auto",
  },
  {
    name: "Rolls-Royce",
    price: "$70",
    image: "/assets/car-4.png",
    seats: "5 Seats",
    transmission: "Auto",
  },
];

function PopularCars() {
  return (
    <section className="popular-cars-section">
      {/* =====================================================
          POPULAR CARS
      ===================================================== */}

      <div className="popular-cars-container">
        <div className="popular-cars-heading">
          <h2>Popular Cars for You</h2>

          <p>Handpicked cars for your next adventure.</p>
        </div>

        {/* =================================================
            CAR GRID
        ================================================= */}

        <div className="popular-cars-grid">
          {cars.map((car, index) => (
            <article className="popular-car-card" key={index}>
              {/* Car Image */}

              <div className="popular-car-image">
                <img src={car.image} alt={car.name} />
              </div>

              {/* Car Information */}

              <div className="popular-car-info">
                <h3>{car.name}</h3>

                <div className="popular-car-price">
                  <strong>{car.price}</strong>
                  <span>/day</span>
                </div>

                {/* Car Features */}

                <div className="popular-car-features">
                  <span>
                    <Users size={12} />
                    {car.seats}
                  </span>

                  <span>
                    <Settings2 size={12} />
                    {car.transmission}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            DOWNLOAD APP
        ===================================================== */}

        <div className="download-app">
          {/* Left Content */}

          <div className="download-app-content">
            <div className="download-app-icon">
              <Smartphone size={18} />
            </div>

            <h2>
              Download Rento App
              <br />
              For Exclusive Deals
            </h2>

            <p>
              Book cars faster and get exclusive offers directly from the app.
            </p>

            {/* App Store Buttons */}

            <div className="app-store-buttons">
              <a
                href="#"
                className="app-store-button"
                aria-label="Download on App Store"
              >
                <img src="/assets/app-store.png" alt="Download on App Store" />
              </a>

              <a
                href="#"
                className="app-store-button"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/assets/google-play.png"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>

          {/* Right App Preview */}

          <div className="download-app-visual">
            <img
              src="/assets/rento-app-preview.png"
              alt="Rento mobile application"
              className="app-preview-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCars;
