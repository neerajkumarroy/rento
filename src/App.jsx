import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BrowseTypes from "./components/BrowseTypes/BrowseTypes";
// import SpecialOffer from "./components/SpecialOffer";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import PopularCars from "./components/PopularCars/PopularCars";
// import AppDownload from "./components/AppDownload";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TopRatedCars from "./components/TopRatedCars/TopRatedCars";
import TrustedBrands from "./components/TrustedBrands/TrustedBrands";
import ExpertTeam from "./components/ExpertTeam/ExpertTeam";
// import Brands from "./components/Brands";
// import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        {<Hero />}
        <BrowseTypes />
        <WhyChoose />
        <PopularCars />
        <HowItWorks />
        <TopRatedCars />
        <CustomerReviews />
        <ExpertTeam />
        <TrustedBrands />
        <Footer />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
