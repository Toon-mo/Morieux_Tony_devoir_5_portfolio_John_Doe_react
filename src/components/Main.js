import React from "react";
import ProgressBar from "./ProgressBar";
import aboutImg from "../assets/images/john-doe-about.jpg";

const Main = () => {
  return (
    <div className="container shadow p-3 mb-5 bg-white rounded mt-5">
      <div className="row justify-content-around">
        <div className="col-12 col-md-6">
          <div className="">
            <h1>A propos</h1>
            <hr className="text-primary" />
            <img
              src={aboutImg}
              className="img-fluid mt-5"
              alt="about img"
            ></img>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis corrupti, cumque optio voluptate vero magni earum
              necessitatibus accusamus consequatur facilis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis corrupti, cumque optio voluptate vero magni earum
              necessitatibus accusamus consequatur facilis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis corrupti, cumque optio voluptate vero magni earum
              necessitatibus accusamus consequatur facilis.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="">
            <h1>Mes Compétences</h1>
            <hr className=" text-primary" />
            <div className="container mt-5">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
