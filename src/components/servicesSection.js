import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamWork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> service.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock icon tells time" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamWork} alt="We all work together" />
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img
                src={diaphragm}
                alt="a diaphragm. thats a tough word to spell."
              />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="Dolla bills baby!" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home page 2"></img>
      </div>
    </div>
  );
};

export default ServicesSection;
