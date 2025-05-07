import React from "react";
import headerImg from "../assets/images/hero-bg.jpg";
import Modale from "./modal";

const HomeHeader = () => {
  return (
    <div>
      <div className="container-fluid p-0 position-relative">
        <img
          src={headerImg}
          className="img-fluid w-100 opacity-75"
          alt="bg img"
          style={{ height: "100vh", objectFit: "cover" }}
        />

        <div className="position-absolute top-50 start-50 translate-middle text-white text-center p-5">
          <h1 className="display-3 mb-5">Bonjour, je suis John Doe</h1>
          <h2 className="display-5 mb-3">Développeur web full stack</h2>
          <Modale />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
