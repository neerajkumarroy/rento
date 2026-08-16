import { MapPin, Car, CreditCard, KeyRound } from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Choose Location",
    description: (
      <>
        Select your pickup
        <br />
        and drop-off location.
      </>
    ),
    icon: MapPin,
  },
  {
    number: "02",
    title: "Select Car",
    description: (
      <>
        Browse and select
        <br />
        your perfect car.
      </>
    ),
    icon: Car,
  },
  {
    number: "03",
    title: "Book & Pay",
    description: (
      <>
        Confirm your booking
        <br />
        and make payment.
      </>
    ),
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Enjoy the Ride",
    description: (
      <>
        Pick up your car
        <br />
        and enjoy your journey.
      </>
    ),
    icon: KeyRound,
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        {/* Heading */}

        <div className="how-it-works-heading">
          <h2>How It Works</h2>

          <p>Renting a car with Rento is simple and hassle-free.</p>
        </div>

        {/* Steps */}

        <div className="how-it-works-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="how-it-works-card" key={step.number}>
                {/* Number */}

                <span className="how-step-number">{step.number}</span>

                {/* Content */}

                <div className="how-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {/* Icon */}

                <div className="how-step-icon">
                  <Icon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
