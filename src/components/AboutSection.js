import React from "react";
import me from "../img/me1.PNG";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2> I work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span> dreams </span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Full stack software engineer with over a decade of management
          experience, strong communicator and coordinator, while thriving in a
          productive team environment. Certificate earned in Full Stack Web
          Development from the University of Minnesota Coding Boot Camp.
          Innovative engineer who is passionate about helping others and
          developing excellent apps with a focus on mobile-first design and
          development. Strengths in creativity, teamwork, and building projects
          from ideation to execution.
        </p>
        <button>Contact Me</button>
      </div>
      <div className="image">
        <img src={me} alt="David Anderson" />
      </div>
    </div>
  );
};

export default AboutSection;
