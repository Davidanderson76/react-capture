import React from "react";
import Toggle from "./Toggle";

import styled from "styled-components";
import { About } from "../styles";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
//ICONS
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Skills <span>&</span> Information
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Technical Skills">
          <div className="answer">
            <p>
              JavaScript, ES6+, CSS3, HTML5, SQL, NoSQL, TypeScript, Git,
              Node.js, MongoDB, MySQL, Herok, Express, Handlebars, jQuery,
              Bootstrap, bcryptjs, RESTful APIs, Webpack, Front-End, Back-End,
              Full-Stack, SASS/SCSS
            </p>
          </div>
        </Toggle>
        <Toggle title="Education">
          <div className="answer">
            <p>
              <strong>Certificate, Full Stack Web Development</strong>
              <br></br>
              University of Minnesota
              <br></br>
              September 2020 - December 2020
              <br></br>
              Full-Stack technologies include Node.js, React, MongoDB, MySQL,
              Express, AWS, Git, deployment with GitHub Pages and Heroku
              Emphasized agile development with pair programming and team
              project communication
              <br></br>
              <br></br>
              <strong>Associates Degree</strong>
              <br></br>
              Ridgewater College
              <br></br>Willmar, MN
              <br></br>
              September 2011 - December 2014
            </p>
          </div>
        </Toggle>
        <Toggle title="Social Pages">
          <div className="answer">
            <ul className="socialMedia">
              <li className="links">
                <a
                  href="https://github.com/Davidanderson76"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub icon={FaGithub} />
                  &nbsp; GitHub
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="links">
                <a
                  href="https://www.linkedin.com/in/davidanderson76/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin icon={FaLinkedin} />
                  &nbsp; LinkedIn
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="links">
                <a
                  href="https://www.instagram.com/davidandersoncreative/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare icon={FaInstagramSquare} />
                  &nbsp; Instagram
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {/* <li className="links">
                <a
                  href="https://www.linkedin.com/in/davidanderson76/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdEmail icon={MdEmail} />
                  &nbsp; Email
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp; */}
            </ul>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%auto;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
    li {
      display: block;
      text-decoration: none;
    }
    a {
      font-size: x-large;
      cursor: pointer;
      text-decoration: none;
      color: white;
      border-bottom: 1px solid #377de6;
    }
    a:hover {
      border-bottom: 0;
      padding-bottom: 0.3em;
      text-decoration: none;
    }
  }
`;

export default FaqSection;
