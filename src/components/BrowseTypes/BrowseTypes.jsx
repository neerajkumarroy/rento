import "./BrowseTypes.css";

const CAR_TYPES = [
  { name: "SUV", count: "120+ Cars", image: "/assets/car-1.png" },
  { name: "Sedan", count: "250+ Cars", image: "/assets/car-2.png" },
  {
    name: "Hatchback",
    count: "180+ Cars",
    image: "/assets/verna.png",
  },
  { name: "Luxury", count: "90+ Cars", image: "/assets/car-3.png" },
  {
    name: "Convertible",
    count: "60+ Cars",
    image: "/assets/verna.png",
  },
];

function BrowseType() {
  return (
    <section className="browse-type" id="browse-type">
      <div className="container">
        {/* =================================================
            HEADING ROW
        ================================================= */}
        <div className="browse-type-header">
          <h2>Browse by Type</h2>

          <button type="button" className="browse-type-outline-btn">
            View All Cars
          </button>
        </div>

        {/* =================================================
            TYPE GRID
        ================================================= */}
        <div className="browse-type-grid">
          {CAR_TYPES.map((type) => (
            <div className="browse-type-card" key={type.name}>
              <img src={type.image} alt={type.name} />
              <h3>{type.name}</h3>
              <p>{type.count}</p>
            </div>
          ))}
        </div>

        {/* =================================================
            SPECIAL OFFER
        ================================================= */}
        <div className="browse-type-offer">
          <div className="browse-type-offer-content">
            <span>Special Offer</span>
            <h2>Get 20% OFF</h2>
            <p>On Your First Booking</p>

            <button type="button" className="browse-type-offer-btn">
              Book Now
            </button>
          </div>

          <img
            className="browse-type-offer-car"
            src="/assets/verna.png"
            alt="Special offer car"
          />
        </div>
      </div>
    </section>
  );
}

export default BrowseType;
