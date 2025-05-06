import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import Main from "../components/Main";

const Accueil = () => {
  return (
    <div>
      <Navigation />
      <HomeHeader />
      <Main />
      <Footer />
    </div>
  );
};

export default Accueil;
