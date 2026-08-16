import { useState } from "react";
import {
  MapPin,
  LockKeyhole,
  CalendarCheck,
  Headphones,
  Search,
} from "lucide-react";

import "./Hero.css";

const LOCATIONS = [
  "Dehradun",
  "Chandigarh",
  "Delhi",
  "Bijnor",
  "Lucknow",
  "Haridwar",
];

function Hero() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSearch = () => {
    if (!pickupLocation || !dropoffLocation || !pickupDate || !returnDate) {
      setError("Please fill in all fields to search for a car.");
      return;
    }

    if (returnDate < pickupDate) {
      setError("Return date can't be before the pick-up date.");
      return;
    }

    setError("");

    // TODO: replace with real navigation / API call
    console.log("Searching cars with:", {
      pickupLocation,
      dropoffLocation,
      pickupDate,
      returnDate,
    });
  };

  return (
    <section className="hero" id="home">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <div className="hero-bg"></div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="hero-content">
        {/* Heading */}
        <div className="hero-heading">
          <h1>
            Find Your Perfect Car
            <span>Anytime, Anywhere.</span>
          </h1>

          <p>
            Wide range of cars. Best prices. Easy booking.
            <br />
            Your journey starts here.
          </p>
        </div>

        {/* =================================================
            SEARCH / BOOKING BOX
        ================================================= */}
        <div className="hero-search-box">
          {/* Pick-up Location */}
          <div className="hero-search-item">
            <div className="hero-search-icon">
              <MapPin size={17} />
            </div>

            <div className="hero-search-text">
              <label htmlFor="pickup-location">Pick-up Location</label>
              <select
                id="pickup-location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              >
                <option value="" disabled>
                  Select Location
                </option>
                {LOCATIONS.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className="hero-search-item">
            <div className="hero-search-icon">
              <MapPin size={17} />
            </div>

            <div className="hero-search-text">
              <label htmlFor="dropoff-location">Drop-off Location</label>
              <select
                id="dropoff-location"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
              >
                <option value="" disabled>
                  Select Location
                </option>
                {LOCATIONS.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Pick-up Date */}
          <div className="hero-search-item">
            <div className="hero-search-icon">
              <CalendarCheck size={17} />
            </div>

            <div className="hero-search-text">
              <label htmlFor="pickup-date">Pick-up Date</label>
              <input
                id="pickup-date"
                type="date"
                min={today}
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="hero-search-item">
            <div className="hero-search-icon">
              <CalendarCheck size={17} />
            </div>

            <div className="hero-search-text">
              <label htmlFor="return-date">Return Date</label>
              <input
                id="return-date"
                type="date"
                min={pickupDate || today}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="hero-search-btn"
            onClick={handleSearch}
          >
            <Search size={15} />
            <span>Find Car</span>
          </button>
        </div>

        {error && <p className="hero-search-error">{error}</p>}

        {/* =================================================
            HERO CAR
        ================================================= */}
        <div className="hero-car">
          <img src="/assets/hero-car.png" alt="Rental car" />
        </div>
      </div>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <div className="hero-features">
        <div className="hero-features-inner">
          {/* Feature 1 */}
          <div className="hero-feature">
            <div className="hero-feature-icon">
              <MapPin size={21} />
            </div>

            <div>
              <h3>1000+ Cars</h3>
              <p>Wide Range of Vehicles</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="hero-feature">
            <div className="hero-feature-icon">
              <LockKeyhole size={21} />
            </div>

            <div>
              <h3>Best Price</h3>
              <p>Affordable &amp; Transparent</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="hero-feature">
            <div className="hero-feature-icon">
              <CalendarCheck size={21} />
            </div>

            <div>
              <h3>Easy Booking</h3>
              <p>Quick &amp; Simple Process</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="hero-feature">
            <div className="hero-feature-icon">
              <Headphones size={21} />
            </div>

            <div>
              <h3>24/7 Support</h3>
              <p>We're Always Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
