import React from "react";
import me from "../img/me1.PNG";
import { Link } from "react-router-dom";

//STYLED
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <h2>Let's</h2>
          </Hide>
          <Hide>
            <h2>
              <motion.span variants={titleAnim} initial="hidden" animate="show">
                {" "}
                CREATE.{" "}
              </motion.span>
            </h2>
          </Hide>
          {/* <Hide>
            <h2>!</h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          Full stack software engineer with over a decade of management
          experience, strong communicator and coordinator, while thriving in a
          productive team environment. Certificate earned in Full Stack Web
          Development from the University of Minnesota Coding Boot Camp.
          Innovative engineer who is passionate about helping others and
          developing excellent apps with a focus on mobile-first design and
          development. Strengths in creativity, teamwork, and building projects
          from ideation to execution.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade} whileHover={{ scale: 1, rotate: 360 }}>
            Contact Me
          </motion.button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/work">
          <motion.button variants={fade} whileHover={{ scale: 1, rotate: 360 }}>
            Gallery
          </motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={me} alt="David Anderson" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
