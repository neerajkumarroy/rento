import React from "react";

const AppDownload = () => {
  return (
    <section className="app-section">
      <div className="container app-wrapper">
        <div className="app-content">
          <h2>
            Download Anti App
            <br />
            For Exclusive Deals
          </h2>

          <div className="store-buttons">
            <a href="#app">
              <img src="/assets/app-store.png" alt="App Store" />
            </a>

            <a href="#google">
              <img src="/assets/google-play.png" alt="Google Play" />
            </a>
          </div>
        </div>

        <div className="app-visual">
          <img src="/assets/app-preview.png" alt="Anti mobile application" />
        </div>

        <div className="discount-badge">
          20%
          <small>OFF</small>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
