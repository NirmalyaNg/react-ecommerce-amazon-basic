import React from "react";
import Product from "../Product/Product";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpgAmazon Image"
        alt="Amazon"
      />

      {/* Product id,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="12345741"
          title="The Jungle Book By Rudwayd Kippling Limited Edition 2021 with available Kindle version"
          price="11.96"
          rating={4}
          image="https://m.media-amazon.com/images/I/91one+WZxaL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="4785963"
          title="Introducing Echo Show 8 – Smart display with Alexa - 8 HD screen with stereo sound – Black"
          price="150.20"
          rating={5}
          image="https://m.media-amazon.com/images/I/51UZ17lvVFL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="74133985"
          title="Noise ColorFit Pro 3 Smart Watch with 1.55 HD Color Touch Screen, SpO2, Sleep"
          price="8.96"
          rating={3}
          image="https://m.media-amazon.com/images/I/61URhg0oLGL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="3652225"
          title="CrossBeats Ace Metal Smart Watch Full Touch Men Women Fitness Tracker Blood Pressurese"
          price="20.96"
          rating={5}
          image="https://m.media-amazon.com/images/I/51J90UsyzSL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="9699995"
          title="realme Fashion Watch 1.4 Large HD Color Display, Full Touch Screen, SpO2"
          price="30.70"
          rating={1}
          image="https://m.media-amazon.com/images/I/71pYXdg9+IL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="10002562"
          title="TUniversal Handicraft tv Console Entertainment Wall Unit/Set top Box Stand/Wall "
          price="200.96"
          rating={3}
          image="https://m.media-amazon.com/images/I/811j4G5MJML._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
};

export default HomePage;
