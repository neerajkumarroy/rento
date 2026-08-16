import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BrowseTypes from "./components/BrowseTypes/BrowseTypes";
import About from "./components/About/About";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import PopularCars from "./components/PopularCars/PopularCars";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TopRatedCars from "./components/TopRatedCars/TopRatedCars";
import TrustedBrands from "./components/TrustedBrands/TrustedBrands";
import ExpertTeam from "./components/ExpertTeam/ExpertTeam";
// import Brands from "./components/Brands";
// import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        {<Hero />}
        <BrowseTypes />
        <WhyChoose />
        <About />
        <PopularCars />
        <Services />
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
