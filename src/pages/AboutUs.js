import React from "react";
//PAGE COMPONENTS
import AboutSection from "../components/AboutSection";
// import ServicesSection from "../components/servicesSection";
import FaqSection from "../components/FaqSection";
//ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
  

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      {/* <ServicesSection /> */}
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
