import React from "react";
//ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { lineAnim } from "../animation";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <motion.h2 className="connection">
            Lets get connected and create together.
            <br></br>
            <br></br>
            Constantly looking for work and to expand my network.
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="mailto:david.anderson1993@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </Social>
        </Hide>
        <br></br>
        <br></br>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/davidanderson76/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Social>
        </Hide>
        <br></br>
        <br></br>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/Davidanderson76"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
  .line {
    height: 0.5rem;
    background: #6e6d6d;
    margin-bottom: 3rem;
  }
  .connection {
    font-size: x-large;
    color: #727171;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #377de6;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  a {
    font-size: xx-large;
    cursor: pointer;
    text-decoration: none;
    color: white;
    /* border-bottom: 1px solid #377de6; */
  }
  a:hover {
    border-bottom: 0;
    padding-bottom: 0.3em;
    border-bottom: 1px solid #377de6;
  }
`;

export default ContactUs;
