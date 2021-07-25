import React from "react";
import me from "../img/me1.PNG";
//STYLED
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2> I work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span> dreams </span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
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
      </Description>
      <Image>
        <img src={me} alt="David Anderson" />
      </Image>
    </About>
  );
};

//styled components
// const About = styled.div`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5rem 10rem;
//   color: white;
// `;

// const Description = styled.div`
//   flex: 1;
//   padding-right: 5rem;
//   h2 {
//     font-weight: lighter;
//   }
// `;

// const Image = styled.div`
//   flex: 1;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;

// const Hide = styled.div`
//   overflow: hidden;
// `;

export default AboutSection;
